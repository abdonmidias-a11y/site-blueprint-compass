CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  whatsapp text NOT NULL CHECK (char_length(whatsapp) BETWEEN 10 AND 20),
  service text NOT NULL CHECK (char_length(service) <= 100),
  unit text NOT NULL CHECK (char_length(unit) <= 50),
  email text CHECK (email IS NULL OR char_length(email) <= 255),
  message text CHECK (message IS NULL OR char_length(message) <= 1000),
  consent boolean NOT NULL CHECK (consent = true),
  source_page text CHECK (source_page IS NULL OR char_length(source_page) <= 300),
  referrer text CHECK (referrer IS NULL OR char_length(referrer) <= 500),
  utm_source text, utm_medium text, utm_campaign text, utm_term text, utm_content text,
  gclid text, fbclid text
);
GRANT INSERT ON public.leads TO anon, authenticated;
GRANT ALL ON public.leads TO service_role;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a lead" ON public.leads FOR INSERT TO anon, authenticated WITH CHECK (consent = true);