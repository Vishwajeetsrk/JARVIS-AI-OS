"""
Desktop Voice & System Automation Bridge for Jarvis AI OS
Provides Windows desktop controls with zero required third-party packages.
"""
import sys
import os
import json
import datetime
import subprocess

def get_system_info():
    now = datetime.datetime.now()
    return {
        "time": now.strftime("%I:%M:%S %p"),
        "date": now.strftime("%Y-%m-%d"),
        "day": now.strftime("%A"),
        "user": os.getlogin() if hasattr(os, 'getlogin') else "Vishwajeet",
    }

def take_screenshot():
    pictures_dir = os.path.expanduser("~\\Pictures")
    os.makedirs(pictures_dir, exist_ok=True)
    filepath = os.path.join(pictures_dir, f"jarvis_screenshot_{int(datetime.datetime.now().timestamp())}.png")
    
    try:
        import pyautogui
        img = pyautogui.screenshot()
        img.save(filepath)
        return {"status": "success", "filepath": filepath}
    except Exception:
        ps_cmd = f"Add-Type -AssemblyName System.Windows.Forms,System.Drawing; $b = [System.Windows.Forms.Screen]::PrimaryScreen.Bounds; $bmp = New-Object System.Drawing.Bitmap $b.Width, $b.Height; $g = [System.Drawing.Graphics]::FromImage($bmp); $g.CopyFromScreen($b.X, $b.Y, 0, 0, $bmp.Size); $bmp.Save('{filepath.replace('\\', '/')}')"
        try:
            subprocess.run(["powershell", "-Command", ps_cmd], check=True, capture_output=True)
            return {"status": "success", "filepath": filepath}
        except Exception as err:
            return {"status": "error", "message": str(err)}

def launch_app(target):
    target_lower = target.lower().strip()
    import webbrowser
    if "youtube" in target_lower:
        webbrowser.open("https://youtube.com")
        return {"status": "launched", "target": "YouTube"}
    elif "google" in target_lower:
        webbrowser.open("https://google.com")
        return {"status": "launched", "target": "Google"}
    elif "github" in target_lower:
        webbrowser.open("https://github.com/Vishwajeetsrk/jarvis-console")
        return {"status": "launched", "target": "GitHub"}
    else:
        webbrowser.open(f"https://www.google.com/search?q={target}")
        return {"status": "searched", "target": target}

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps(get_system_info()))
        sys.exit(0)

    cmd = sys.argv[1].lower()
    if cmd == "screenshot":
        print(json.dumps(take_screenshot()))
    elif cmd == "system":
        print(json.dumps(get_system_info()))
    elif cmd == "launch" and len(sys.argv) > 2:
        print(json.dumps(launch_app(" ".join(sys.argv[2:]))))
    else:
        print(json.dumps({"error": f"Unknown command {cmd}"}))
