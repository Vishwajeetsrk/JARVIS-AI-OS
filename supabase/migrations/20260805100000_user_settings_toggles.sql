
-- Add capability toggle columns to user_settings so the Settings UI
-- (Voice / Screen Vision / Shell / File Creation toggles) persists.
ALTER TABLE public.user_settings
  ADD COLUMN IF NOT EXISTS auto_learn_enabled boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS code_execution_enabled boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS docx_enabled boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS pptx_enabled boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS xlsx_enabled boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS screen_vision_enabled boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS shell_execution_enabled boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS voice_enabled boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS wake_word_enabled boolean NOT NULL DEFAULT true;
