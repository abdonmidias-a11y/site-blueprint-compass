import { z } from "zod";
import { SERVICES, UNITS } from "./site-data";

const opt = (max: number) => z.string().trim().max(max).optional();
export const leadSchema = z.object({
  submission_id: z.string().uuid(),
  started_at: z.number().int().positive().refine((v) => v <= Date.now() - 1500, "Aguarde um instante e tente novamente."),
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  whatsapp: z.string().max(30).transform((v) => v.replace(/\D/g, "")).pipe(z.string().regex(/^(55)?[1-9][0-9]{9,10}$/, "Informe um WhatsApp válido com DDD")),
  service: z.string().refine((v) => SERVICES.some((s) => s.title === v), "Escolha um serviço"),
  unit: z.string().refine((v) => UNITS.some((u) => u.name === v), "Escolha uma unidade"),
  email: z.union([z.literal(""), z.string().trim().email("E-mail inválido").max(255)]).optional(),
  message: opt(1000),
  consent: z.literal(true, { errorMap: () => ({ message: "Autorize o contato para enviar" }) }),
  website: z.string().max(0, "Não foi possível enviar. Tente novamente.").optional(),
  source_page: z.string().min(1).max(300).startsWith("/"),
  referrer: opt(500), utm_source: opt(200), utm_medium: opt(200), utm_campaign: opt(200), utm_term: opt(200), utm_content: opt(200), gclid: opt(200), fbclid: opt(200),
});