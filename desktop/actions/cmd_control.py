# cmd_control — run shell commands safely from the agent loop.
# Signature: cmd_control(parameters, player=None) -> str
# parameters: {"command": str, "workdir": str | None, "timeout": int | None}
import subprocess
import time
from pathlib import Path

DEFAULT_TIMEOUT = 60
MAX_OUTPUT_CHARS = 8000

# Commands that would destroy the machine are refused outright.
BLOCKED_PREFIXES = ("format ", "format:", "rd /s /q c:", "rmdir /s /q c:", "rm -rf /", "del /f /s /q c:")


def cmd_control(parameters: dict, player=None) -> str:
    command = str(parameters.get("command") or parameters.get("task", "")).strip()
    if not command:
        return "No command provided. Provide a 'command' parameter."

    lowered = command.lower()
    for blocked in BLOCKED_PREFIXES:
        if lowered.startswith(blocked):
            return "Refused: that command is blocked for safety. Please ask Jarvis to do the task another way."

    workdir = str(parameters.get("workdir") or Path.home())
    timeout = int(parameters.get("timeout") or DEFAULT_TIMEOUT)

    if player is not None:
        try:
            player.write_log(f"cmd_control: {command}")
        except Exception:
            pass

    started = time.time()
    try:
        result = subprocess.run(
            command,
            cwd=workdir,
            shell=True,
            capture_output=True,
            text=True,
            timeout=timeout,
        )
    except subprocess.TimeoutExpired:
        return f"Command timed out after {timeout}s: {command}"
    except Exception as e:  # noqa: BLE001
        return f"Failed to run command: {e}"

    elapsed = round(time.time() - started, 1)
    output = (result.stdout or "").strip()
    error = (result.stderr or "").strip()

    parts = [f"exit_code={result.returncode} ({elapsed}s)"]
    if output:
        parts.append(output[:MAX_OUTPUT_CHARS])
    if error:
        parts.append(f"stderr: {error[:MAX_OUTPUT_CHARS]}")
    if result.returncode != 0:
        parts.append("The command failed — retry with a corrected command or choose another approach.")
    return "\n".join(parts) or "Command completed with no output."
