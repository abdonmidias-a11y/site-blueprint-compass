CREATE OR REPLACE FUNCTION public.submit_abdon_lead(payload jsonb) RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE receipt uuid; started bigint;
BEGIN
 IF jsonb_typeof(payload) IS DISTINCT FROM 'object' THEN RAISE EXCEPTION 'Invalid submission'; END IF;
 receipt := (payload->>'submission_id')::uuid;
 started := (payload->>'started_at')::bigint;
 IF receipt IS NULL OR started IS NULL OR started <= 0 OR started > extract(epoch from clock_timestamp())*1000 - 1500
 OR (payload->>'consent') IS DISTINCT FROM 'true'
 OR coalesce(length(trim(payload->>'name')),0) NOT BETWEEN 2 AND 100
 OR coalesce(payload->>'whatsapp','') !~ '^(55)?[1-9][0-9]{9,10}$'
 OR coalesce(payload->>'service','') NOT IN ('Primeira Habilitação','Adição de Categoria','Mudança de Categoria','Aulas para Habilitados','Reciclagem de CNH','Renovação de CNH','Cursos Especializados')
 OR coalesce(payload->>'unit','') NOT IN ('São Francisco','Vila Palmeira','Renascença')
 OR coalesce(payload->>'source_page','') !~ '^/' OR length(payload->>'source_page') > 300
 OR coalesce(payload->>'website','') <> ''
 OR length(coalesce(payload->>'email','')) > 255 OR (coalesce(payload->>'email','') <> '' AND (payload->>'email') !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$')
 OR length(coalesce(payload->>'message','')) > 1000 THEN RAISE EXCEPTION 'Invalid submission'; END IF;
 INSERT INTO public.leads (submission_id,name,whatsapp,service,unit,email,message,consent,source_page,referrer,utm_source,utm_medium,utm_campaign,utm_term,utm_content,gclid,fbclid)
 VALUES (receipt,trim(payload->>'name'),payload->>'whatsapp',payload->>'service',payload->>'unit',nullif(payload->>'email',''),payload->>'message',true,payload->>'source_page',left(payload->>'referrer',500),left(payload->>'utm_source',200),left(payload->>'utm_medium',200),left(payload->>'utm_campaign',200),left(payload->>'utm_term',200),left(payload->>'utm_content',200),left(payload->>'gclid',200),left(payload->>'fbclid',200)) ON CONFLICT (submission_id) DO NOTHING;
 RETURN receipt;
END $$;
REVOKE ALL ON FUNCTION public.submit_abdon_lead(jsonb) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.submit_abdon_lead(jsonb) TO anon, authenticated, service_role;