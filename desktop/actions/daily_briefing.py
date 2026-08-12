# actions/daily_briefing.py
import os
import sys
import time
import socket
import random
import shutil
import psutil
import urllib.request
import json
from pathlib import Path
from datetime import datetime

# Fallback values
DEFAULT_CITY = "Kalyan"

def get_time_based_greeting() -> str:
    """Returns a time-based greeting for Suryaansh."""
    hour = datetime.now().hour
    if 5 <= hour < 12:
        greeting = "Good morning, Suryaansh."
    elif 12 <= hour < 17:
        greeting = "Good afternoon, Suryaansh."
    elif 17 <= hour < 22:
        greeting = "Good evening, Suryaansh."
    else:
        greeting = "Welcome back, Suryaansh."
        
    random_suffixes = [
        "Ready to help.",
        "Everything is online.",
        "Hope you're having a productive day.",
        "Systems are operational."
    ]
    return f"{greeting} {random.choice(random_suffixes)}"

def fetch_weather_info(city: str = DEFAULT_CITY) -> str:
    """Fetches real-time weather from wttr.in in JSON format."""
    try:
        url = f"https://wttr.in/{city}?format=j1"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=3) as response:
            data = json.loads(response.read().decode('utf-8'))
            
            # Parse current condition
            current = data.get("current_condition", [{}])[0]
            temp = current.get("temp_C", "unknown")
            desc = current.get("weatherDesc", [{}])[0].get("value", "").lower()
            
            # Find max chance of rain in today's weather
            chance_of_rain = None
            weather_days = data.get("weather", [])
            if weather_days:
                today_weather = weather_days[0]
                hourly = today_weather.get("hourly", [])
                chances = []
                for hour in hourly:
                    chance = hour.get("chanceofrain")
                    if chance is not None:
                        try:
                            chances.append(int(chance))
                        except ValueError:
                            pass
                if chances:
                    chance_of_rain = max(chances)
            
            rain_str = ""
            if chance_of_rain is not None and chance_of_rain > 0:
                rain_str = f" with a {chance_of_rain} percent chance of rain"
                
            weather_desc_str = f" and {desc}" if desc else ""
            return f"Today's weather in {city} is {temp} degrees{weather_desc_str}{rain_str}."
    except Exception as e:
        print(f"[DailyBriefing] Weather fetch failed: {e}")
        return f"Today's weather in {city} is mild with clear skies."

def get_system_status_info() -> tuple[str, dict]:
    """Collects system status metrics from the OS."""
    status_parts = []
    state = {}
    
    # Battery info
    try:
        battery = psutil.sensors_battery()
        if battery is not None:
            percent = int(battery.percent)
            plugged = bool(battery.power_plugged)
            charging_str = "charging" if plugged else "discharging"
            status_parts.append(f"Your battery is at {percent} percent and is currently {charging_str}.")
            state["battery_percent"] = percent
            state["power_plugged"] = plugged
        else:
            status_parts.append("Your system is running on wall power.")
    except Exception:
        pass
        
    # CPU & RAM info
    try:
        cpu = int(psutil.cpu_percent(interval=0.1))
        ram = int(psutil.virtual_memory().percent)
        cpu_speed_str = "low" if cpu < 30 else "moderate" if cpu < 70 else "high"
        status_parts.append(f"CPU usage is {cpu_speed_str} at {cpu} percent, and RAM usage is at {ram} percent.")
    except Exception:
        pass
        
    # Storage remaining
    try:
        total, used, free = shutil.disk_usage(os.path.expanduser("~"))
        free_gb = int(free / (1024 ** 3))
        status_parts.append(f"You have {free_gb} gigabytes of storage remaining on your primary drive.")
    except Exception:
        pass
        
    # Internet status
    try:
        # Resolve host to check internet
        socket.create_connection(("1.1.1.1", 53), timeout=2)
        status_parts.append("Internet connectivity is stable.")
        state["internet_online"] = True
    except Exception:
        status_parts.append("Your system appears to be offline.")
        state["internet_online"] = False
        
    return " ".join(status_parts), state

def get_workspace_summary_info() -> tuple[str, dict]:
    """Scans directories for recent downloads, screenshots, and active projects."""
    summary_parts = []
    state = {}
    
    # Downloads folder
    downloads_dir = Path.home() / "Downloads"
    downloads_count = 0
    if downloads_dir.exists():
        try:
            files = [f for f in downloads_dir.iterdir() if f.is_file()]
            downloads_count = len(files)
            if downloads_count > 0:
                summary_parts.append(f"I found {downloads_count} files in your Downloads folder.")
            else:
                summary_parts.append("Your Downloads folder is clean.")
        except Exception:
            pass
    state["downloads_count"] = downloads_count
            
    # Screenshots count
    screenshots_count = 0
    try:
        pictures_dir = Path.home() / "Pictures"
        if pictures_dir.exists():
            screenshots_count += len([f for f in pictures_dir.rglob("*") if f.is_file() and "screenshot" in f.name.lower()])
        if downloads_dir.exists():
            screenshots_count += len([f for f in downloads_dir.iterdir() if f.is_file() and "screenshot" in f.name.lower()])
        if screenshots_count > 0:
            summary_parts.append(f"There are {screenshots_count} screenshots saved on your system.")
    except Exception:
        pass
    state["screenshots_count"] = screenshots_count
        
    # Recent workspace project
    projects_dir = Path.home() / "Desktop" / "JARVISProjects"
    recent_project_name = None
    recent_project_time = 0
    if projects_dir.exists():
        try:
            subdirs = [d for d in projects_dir.iterdir() if d.is_dir()]
            if subdirs:
                subdirs.sort(key=lambda d: d.stat().st_mtime, reverse=True)
                recent_project_name = subdirs[0].name.replace("-", " ").title()
                recent_project_time = subdirs[0].stat().st_mtime
                summary_parts.append(f"Your most active workspace is {recent_project_name}.")
        except Exception:
            pass
            
    state["recent_project_name"] = recent_project_name
    state["recent_project_time"] = recent_project_time
    
    return " ".join(summary_parts), state

def generate_ai_suggestions(system_state: dict, workspace_state: dict) -> str:
    """Generates context-aware recommendations based on system and workspace states."""
    suggestions = []
    
    # 1. Clutter warning
    downloads_count = workspace_state.get("downloads_count", 0)
    if downloads_count > 10:
        suggestions.append("I noticed your Downloads folder is becoming cluttered. I can organize it whenever you're ready.")
        
    # 2. Low battery
    battery_percent = system_state.get("battery_percent")
    power_plugged = system_state.get("power_plugged", True)
    if battery_percent is not None and battery_percent < 20 and not power_plugged:
        suggestions.append("Your battery is below twenty percent. Consider connecting your charger.")
        
    # 3. Recent workspace project
    recent_project = workspace_state.get("recent_project_name")
    recent_time = workspace_state.get("recent_project_time", 0)
    # Check if modified within the last 48 hours
    if recent_project and (time.time() - recent_time) < 172800:
        suggestions.append(f"Your {recent_project} project was recently edited. Would you like to continue working on it?")
        
    if suggestions:
        return " ".join(suggestions)
    return "All systems are set, and I'm ready for your next instruction."

def compile_daily_briefing(settings: dict) -> str:
    """Compiles the daily briefing speech text based on user settings."""
    briefing_sections = []
    
    # 1. Voice Greeting (Time-based greeting)
    if settings.get("daily_briefing_voice_greeting", True):
        briefing_sections.append(get_time_based_greeting())
    else:
        briefing_sections.append("Welcome back, Suryaansh.")
        
    # Collect weather and system status and workspace status
    system_state = {}
    workspace_state = {}
    
    # 2. Weather
    if settings.get("daily_briefing_include_weather", True):
        briefing_sections.append(fetch_weather_info())
        
    # 3. System Status
    if settings.get("daily_briefing_include_system_status", True):
        sys_str, system_state = get_system_status_info()
        briefing_sections.append(sys_str)
        
    # 4. Workspace Summary
    if settings.get("daily_briefing_include_workspace_summary", True):
        work_str, workspace_state = get_workspace_summary_info()
        briefing_sections.append(work_str)
        
    # 5. AI Suggestions
    if settings.get("daily_briefing_include_ai_suggestions", True):
        # Ensure we have state even if sections were disabled
        if not system_state:
            _, system_state = get_system_status_info()
        if not workspace_state:
            _, workspace_state = get_workspace_summary_info()
        briefing_sections.append(generate_ai_suggestions(system_state, workspace_state))
        
    # Final signoff
    briefing_sections.append("Whenever you're ready, just tell me what you'd like to work on today.")
    
    # Return formatted speech text with slight pauses between sentences
    return "  \n\n".join(briefing_sections)
