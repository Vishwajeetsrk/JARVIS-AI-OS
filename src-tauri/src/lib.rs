use std::fs;
use std::path::{Path, PathBuf};
use tauri_plugin_autostart::MacosLauncher;

#[derive(serde::Serialize)]
struct LocalEntry {
    name: String,
    path: String,
    is_dir: bool,
    size: u64,
}

fn resolve(path: &str) -> PathBuf {
    let p = Path::new(path);
    if p.is_absolute() {
        p.to_path_buf()
    } else {
        let home = std::env::var("USERPROFILE").unwrap_or_else(|_| "/".into());
        Path::new(&home).join(p)
    }
}

#[tauri::command]
fn list_local_dir(path: String) -> Result<Vec<LocalEntry>, String> {
    let dir = resolve(&path);
    let rd = fs::read_dir(&dir).map_err(|e| e.to_string())?;
    let mut out = Vec::new();
    for entry in rd.flatten() {
        let meta = entry.metadata().map_err(|e| e.to_string())?;
        out.push(LocalEntry {
            name: entry.file_name().to_string_lossy().to_string(),
            path: entry.path().to_string_lossy().to_string(),
            is_dir: meta.is_dir(),
            size: if meta.is_file() { meta.len() } else { 0 },
        });
    }
    Ok(out)
}

#[tauri::command]
fn read_local_file(path: String) -> Result<String, String> {
    let p = resolve(&path);
    let buf = fs::read(&p).map_err(|e| e.to_string())?;
    if buf.len() > 20 * 1024 * 1024 {
        return Err("File too large to read as text (max 20MB). Use a binary-safe path instead.".into());
    }
    Ok(String::from_utf8_lossy(&buf).to_string())
}

#[tauri::command]
fn write_local_file(path: String, content: String, append: bool) -> Result<u64, String> {
    let p = resolve(&path);
    if let Some(parent) = p.parent() {
        fs::create_dir_all(parent).map_err(|e| e.to_string())?;
    }
    if append {
        fs::OpenOptions::new()
            .append(true)
            .create(true)
            .open(&p)
            .and_then(|mut f| {
                use std::io::Write;
                f.write_all(content.as_bytes())?;
                f.flush()
            })
            .map_err(|e| e.to_string())?;
    } else {
        fs::write(&p, content).map_err(|e| e.to_string())?;
    }
    fs::metadata(&p).map(|m| m.len()).map_err(|e| e.to_string())
}

#[tauri::command]
fn copy_local_path(src: String, dst: String) -> Result<(), String> {
    let s = resolve(&src);
    let d = resolve(&dst);
    if let Some(parent) = d.parent() {
        fs::create_dir_all(parent).map_err(|e| e.to_string())?;
    }
    if s.is_dir() {
        copy_dir(&s, &d).map_err(|e| e.to_string())
    } else {
        fs::copy(&s, &d).map(|_| ()).map_err(|e| e.to_string())
    }
}

fn copy_dir(src: &Path, dst: &Path) -> std::io::Result<()> {
    fs::create_dir_all(dst)?;
    for entry in fs::read_dir(src)? {
        let entry = entry?;
        let from = entry.path();
        let to = dst.join(entry.file_name());
        if from.is_dir() {
            copy_dir(&from, &to)?;
        } else {
            fs::copy(&from, &to)?;
        }
    }
    Ok(())
}

#[tauri::command]
fn move_local_path(src: String, dst: String) -> Result<(), String> {
    let s = resolve(&src);
    let d = resolve(&dst);
    if let Some(parent) = d.parent() {
        fs::create_dir_all(parent).map_err(|e| e.to_string())?;
    }
    fs::rename(&s, &d).map_err(|e| e.to_string())
}

#[tauri::command]
fn delete_local_path(path: String, recursive: bool) -> Result<(), String> {
    let p = resolve(&path);
    if p.is_dir() {
        if recursive {
            fs::remove_dir_all(&p).map_err(|e| e.to_string())
        } else {
            fs::remove_dir(&p).map_err(|e| e.to_string())
        }
    } else {
        fs::remove_file(&p).map_err(|e| e.to_string())
    }
}

#[tauri::command]
fn open_local_path(path: String) -> Result<(), String> {
    let p = resolve(&path);
    std::process::Command::new("cmd")
        .arg("/C")
        .arg("start")
        .arg("")
        .arg(&p)
        .spawn()
        .map(|_| ())
        .map_err(|e| e.to_string())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_clipboard_manager::init())
        .plugin(tauri_plugin_haptics::init())
        .plugin(tauri_plugin_deep_link::init())
        .plugin(tauri_plugin_notification::init())
        .plugin(tauri_plugin_network::init())
        .plugin(tauri_plugin_autostart::init(MacosLauncher::LaunchAgent, Some(vec!["--autostarted"])))
        .plugin(tauri_plugin_window_state::Builder::new().build())
        .invoke_handler(tauri::generate_handler![
            list_local_dir,
            read_local_file,
            write_local_file,
            copy_local_path,
            move_local_path,
            delete_local_path,
            open_local_path
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}