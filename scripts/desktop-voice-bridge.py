"""
Desktop Voice & System Automation Bridge for Jarvis AI OS
Provides Windows & cross-platform desktop controls, telemetry, screenshots, and app automation.
"""
import sys
import os
import json
import datetime
import subprocess
import base64
import platform
import shutil

_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
_PROJECT_ROOT = os.path.abspath(os.path.join(_SCRIPT_DIR, '..'))

def get_system_telemetry():
    now = datetime.datetime.now()
    telemetry = {
        "time": now.strftime("%I:%M:%S %p"),
        "date": now.strftime("%Y-%m-%d"),
        "day": now.strftime("%A"),
        "user": os.getlogin() if hasattr(os, 'getlogin') else "Vishwajeet",
        "hostname": platform.node(),
        "platform": sys.platform,
        "os_release": platform.platform(),
        "cpu_count": os.cpu_count() or 4,
        "total_memory_gb": 16.0,
        "free_memory_gb": 8.0,
        "memory_percent": 50,
        "battery_percent": None,
        "battery_charging": None,
    }

    # Attempt psutil if available
    try:
        import psutil
        mem = psutil.virtual_memory()
        telemetry["total_memory_gb"] = round(mem.total / (1024 ** 3), 1)
        telemetry["free_memory_gb"] = round(mem.available / (1024 ** 3), 1)
        telemetry["memory_percent"] = mem.percent
        telemetry["cpu_percent"] = psutil.cpu_percent(interval=None)
        
        battery = psutil.sensors_battery()
        if battery:
            telemetry["battery_percent"] = round(battery.percent)
            telemetry["battery_charging"] = battery.power_plugged
    except Exception:
        # Fallback via PowerShell on Windows
        if sys.platform == "win32":
            try:
                ps_cmd = (
                    "Get-CimInstance Win32_OperatingSystem | "
                    "Select-Object TotalVisibleMemorySize,FreePhysicalMemory | "
                    "ConvertTo-Json"
                )
                res = subprocess.run(["powershell", "-NoProfile", "-Command", ps_cmd], capture_output=True, text=True, timeout=3)
                if res.returncode == 0 and res.stdout.strip():
                    data = json.loads(res.stdout)
                    total_kb = float(data.get("TotalVisibleMemorySize", 16777216))
                    free_kb = float(data.get("FreePhysicalMemory", 8388608))
                    telemetry["total_memory_gb"] = round(total_kb / (1024 ** 2), 1)
                    telemetry["free_memory_gb"] = round(free_kb / (1024 ** 2), 1)
                    telemetry["memory_percent"] = round(((total_kb - free_kb) / total_kb) * 100, 1)
            except Exception:
                pass

    return telemetry

def take_screenshot(return_base64=True):
    pictures_dir = os.path.expanduser("~\\Pictures\\Jarvis")
    os.makedirs(pictures_dir, exist_ok=True)
    timestamp = int(datetime.datetime.now().timestamp())
    filepath = os.path.join(pictures_dir, f"jarvis_screenshot_{timestamp}.png")
    
    success = False
    error_msg = None

    try:
        import pyautogui
        img = pyautogui.screenshot()
        img.save(filepath)
        success = True
    except Exception:
        # PowerShell fallback
        ps_cmd = (
            f"Add-Type -AssemblyName System.Windows.Forms,System.Drawing; "
            f"$b = [System.Windows.Forms.Screen]::PrimaryScreen.Bounds; "
            f"$bmp = New-Object System.Drawing.Bitmap $b.Width, $b.Height; "
            f"$g = [System.Drawing.Graphics]::FromImage($bmp); "
            f"$g.CopyFromScreen($b.X, $b.Y, 0, 0, $bmp.Size); "
            f"$bmp.Save('{filepath.replace('\\', '/')}'); "
            f"$bmp.Dispose(); $g.Dispose();"
        )
        try:
            subprocess.run(["powershell", "-NoProfile", "-Command", ps_cmd], check=True, capture_output=True, timeout=5)
            success = True
        except Exception as err:
            error_msg = str(err)

    if not success or not os.path.exists(filepath):
        return {"status": "error", "message": error_msg or "Failed to capture screenshot"}

    result = {
        "status": "success",
        "filepath": filepath,
        "filename": os.path.basename(filepath),
        "timestamp": timestamp,
    }

    if return_base64:
        try:
            with open(filepath, "rb") as f:
                b64 = base64.b64encode(f.read()).decode("utf-8")
                result["dataUrl"] = f"data:image/png;base64,{b64}"
        except Exception:
            pass

    return result

def launch_app_or_url(target):
    target_clean = target.strip()
    target_lower = target_clean.lower()
    import webbrowser

    # App Shortcuts
    app_mappings = {
        "code": "code",
        "vscode": "code",
        "vs code": "code",
        "terminal": "powershell",
        "powershell": "powershell",
        "cmd": "cmd",
        "explorer": "explorer",
        "files": "explorer",
        "calculator": "calc",
        "calc": "calc",
        "notepad": "notepad",
        "taskmgr": "taskmgr",
        "task manager": "taskmgr",
        "settings": "ms-settings:",
    }

    for key, exe in app_mappings.items():
        if target_lower == key or target_lower == f"open {key}" or target_lower == f"launch {key}":
            try:
                if sys.platform == "win32":
                    subprocess.Popen([exe], shell=True)
                else:
                    subprocess.Popen([exe])
                return {"status": "launched", "type": "app", "target": key}
            except Exception as e:
                return {"status": "error", "message": str(e)}

    # Web URLs & Shortcuts
    url_mappings = {
        "youtube": "https://youtube.com",
        "google": "https://google.com",
        "github": "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
        "twitter": "https://x.com",
        "x": "https://x.com",
        "supabase": "https://supabase.com/dashboard",
        "reddit": "https://reddit.com",
        "chatgpt": "https://chatgpt.com",
        "gmail": "https://mail.google.com",
        "spotify": "https://open.spotify.com",
    }

    for key, url in url_mappings.items():
        if key in target_lower:
            webbrowser.open(url)
            return {"status": "launched", "type": "web", "target": key, "url": url}

    if target_clean.startswith("http://") or target_clean.startswith("https://"):
        webbrowser.open(target_clean)
        return {"status": "launched", "type": "web", "url": target_clean}

    # Default: Search query
    search_url = f"https://www.google.com/search?q={target_clean}"
    webbrowser.open(search_url)
    return {"status": "searched", "type": "search", "query": target_clean, "url": search_url}

def set_volume(action):
    action = str(action).lower().strip()
    if sys.platform != "win32":
        return {"status": "unsupported", "platform": sys.platform}
    
    ps_mute = "$wsh = New-Object -ComObject WScript.Shell; $wsh.SendKeys([char]173)"
    ps_up   = "$wsh = New-Object -ComObject WScript.Shell; 1..5 | ForEach-Object { $wsh.SendKeys([char]175) }"
    ps_down = "$wsh = New-Object -ComObject WScript.Shell; 1..5 | ForEach-Object { $wsh.SendKeys([char]174) }"

    cmd = None
    if "mute" in action or "toggle" in action:
        cmd = ps_mute
    elif "up" in action or "increase" in action:
        cmd = ps_up
    elif "down" in action or "decrease" in action:
        cmd = ps_down

    if cmd:
        subprocess.run(["powershell", "-NoProfile", "-Command", cmd], capture_output=True)
        return {"status": "success", "action": action}
    return {"status": "unknown_action", "action": action}

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps(get_system_telemetry()))
        sys.exit(0)

    cmd = sys.argv[1].lower()
    if cmd in ("system", "telemetry", "status"):
        print(json.dumps(get_system_telemetry()))
    elif cmd == "screenshot":
        no_b64 = "--no-b64" in sys.argv
        print(json.dumps(take_screenshot(return_base64=not no_b64)))
    elif cmd == "launch" and len(sys.argv) > 2:
        target = " ".join(sys.argv[2:])
        print(json.dumps(launch_app_or_url(target)))
    elif cmd == "volume" and len(sys.argv) > 2:
        print(json.dumps(set_volume(sys.argv[2])))
    else:
        print(json.dumps({"error": f"Unknown command {cmd}"}))
