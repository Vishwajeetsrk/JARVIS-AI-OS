-- Align user_settings.default_model default with the current model catalog.
ALTER TABLE public.user_settings
  ALTER COLUMN default_model SET DEFAULT 'gemini-flash-latest';
UPDATE public.user_settings
  SET default_model = 'gemini-flash-latest'
  WHERE default_model IS NULL OR default_model = 'google/gemini-3.6-flash' OR default_model = 'gemini-1.5-flash' OR default_model = 'gemini-2.5-flash';
