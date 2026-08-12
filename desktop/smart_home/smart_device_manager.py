# smart_home/smart_device_manager.py
import re
from typing import Optional, Any

class SmartDeviceManager:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super().__new__(cls, *args, **kwargs)
        return cls._instance

    def __init__(self):
        if not hasattr(self, "_initialized"):
            self._active_device_id: Optional[str] = None
            self._active_device_name: Optional[str] = None
            self._initialized = True

    def set_active_device(self, device_id: Optional[str], device_name: Optional[str] = None):
        self._active_device_id = device_id
        self._active_device_name = device_name

    def get_active_device_id(self) -> Optional[str]:
        return self._active_device_id

    def get_active_device_name(self) -> Optional[str]:
        return self._active_device_name

    def route_command(self, text: str, devices: list[dict[str, Any]]) -> str:
        """
        If text is a short generic command and does not mention any device name,
        but we have an active device name set, rewrite the command to target it.
        """
        if not self._active_device_name:
            return text

        normalized = re.sub(r"\s+", " ", text.lower()).strip()
        
        # Check if the command already mentions any connected device name
        any_name_mentioned = False
        for d in devices:
            d_name = d.get("name", "").lower()
            if d_name and d_name in normalized:
                any_name_mentioned = True
                break
                
        if any_name_mentioned:
            return text

        # Action patterns that are short and generic
        generic_patterns = [
            r"^(turn\s+)?(on|off)$",
            r"^switch\s+(on|off)$",
            r"^power\s+(on|off)$",
            r"^toggle$",
            r"^(increase|decrease|speed\s+up|slow\s+down|set\s+speed\s+to\s+\d+|speed\s+\d+)$",
            r"^(increase\s+brightness|decrease\s+brightness|brighten|dim|set\s+brightness\s+to\s+\d+|brightness\s+\d+%?)$",
            r"^(set\s+temperature\s+to\s+\d+|warm|neutral|cool)$",
        ]
        
        is_generic = False
        for pattern in generic_patterns:
            if re.search(pattern, normalized):
                is_generic = True
                break
                
        # Also simple fallbacks if it's just action verbs without nouns
        action_verbs = ("turn on", "turn off", "switch on", "switch off", "power on", "power off", "increase speed", "decrease speed", "set speed to", "set brightness to", "toggle")
        if not is_generic:
            is_generic = normalized in action_verbs or any(normalized.startswith(verb + " ") for verb in action_verbs)

        if is_generic:
            # Append device name to action text
            device_name = self._active_device_name
            if "of" in normalized or "for" in normalized or "to" in normalized:
                return f"{text} {device_name}"
            else:
                return f"{text} of {device_name}"

        return text
