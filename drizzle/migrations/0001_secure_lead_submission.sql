ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS submission_id uuid;
CREATE UNIQUE INDEX IF NOT EXISTS leads_submission_id_key ON public.leads(submission_id);
REVOKE ALL ON public.leads FROM anon, authenticated;
GRANT ALL ON public.leads TO service_role;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE OR REPLACE FUNCTION public.submit_abdon_lead(payload jsonb) RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE receipt uuid := (payload->>'submission_id')::uuid;
BEGIN
 IF receipt IS NULL OR (payload->>'consent') IS DISTINCT FROM 'true' OR length(trim(payload->>'name')) NOT BETWEEN 2 AND 100 OR (payload->>'whatsapp') !~ '^(55)?[1-9][0-9]{9,10}$' OR length(payload->>'service') NOT BETWEEN 1 AND 100 OR length(payload->>'unit') NOT BETWEEN 1 AND 50 OR length(payload->>'source_page') NOT BETWEEN 1 AND 300 OR coalesce(payload->>'website','') <> '' OR (payload->>'started_at')::bigint > extract(epoch from clock_timestamp())*1000 - 1500 THEN
 RAISE EXCEPTION 'Invalid submission'; END IF;
 INSERT INTO public.leads (submission_id,name,whatsapp,service,unit,email,message,consent,source_page,referrer,utm_source,utm_medium,utm_campaign,utm_term,utm_content,gclid,fbclid)
 VALUES (receipt,trim(payload->>'name'),payload->>'whatsapp',payload->>'service',payload->>'unit',nullif(left(payload->>'email',255),''),left(payload->>'message',1000),true,payload->>'source_page',left(payload->>'referrer',500),left(payload->>'utm_source',200),left(payload->>'utm_medium',200),left(payload->>'utm_campaign',200),left(payload->>'utm_term',200),left(payload->>'utm_content',200),left(payload->>'gclid',200),left(payload->>'fbclid',200))
 ON CONFLICT (submission_id) DO NOTHING;
 RETURN receipt;
END $$;
REVOKE ALL ON FUNCTION public.submit_abdon_lead(jsonb) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.submit_abdon_lead(jsonb) TO anon, authenticated, service_role;