// Marketing tracking: pushes events to window.dataLayer for a future GTM container.
// No tags are installed here; GTM will forward these events to GA4 / Ads / Meta.

const ATTR_KEY = "abdon_attribution";
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"] as const;

export type Attribution = Partial<Record<(typeof PARAMS)[number], string>> & { referrer?: string; landing_page?: string };

declare global {
  interface Window { dataLayer?: Record<string, unknown>[] }
}

/** First-touch attribution, stored for the browser session. */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  try {
    const url = new URL(window.location.href);
    const found: Attribution = {};
    for (const p of PARAMS) {
      const v = url.searchParams.get(p);
      if (v) found[p] = v.slice(0, 200);
    }
    const existing = sessionStorage.getItem(ATTR_KEY);
    if (!existing) {
      sessionStorage.setItem(
        ATTR_KEY,
        JSON.stringify({ ...found, referrer: document.referrer.slice(0, 500) || undefined, landing_page: url.pathname }),
      );
    }
  } catch { /* storage unavailable */ }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try { return JSON.parse(sessionStorage.getItem(ATTR_KEY) || "{}"); } catch { return {}; }
}

export function track(event: string, params: Record<string, string | undefined> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  const { utm_source, utm_medium, utm_campaign } = getAttribution();
  window.dataLayer.push({ event, pagina: window.location.pathname, utm_source, utm_medium, utm_campaign, ...params });
}

/** Single entry point for WhatsApp clicks (click ≠ conversation started). */
export function trackWhatsApp(unidade: string, servico?: string, origem?: string) {
  track("click_whatsapp", { unidade, servico, origem });
}

const confirmedEvents = new Set<string>();
export function trackConfirmedLead(id: string, params: Record<string, string | undefined>) {
  if (typeof window === "undefined" || confirmedEvents.has(id)) return;
  try {
    if (sessionStorage.getItem(`abdon_lead_event:${id}`)) return;
    sessionStorage.setItem(`abdon_lead_event:${id}`, "1");
  } catch { /* in-memory fallback */ }
  confirmedEvents.add(id);
  track("generate_lead", { ...params, event_id: id });
}

export function initializeTracking() {
  captureAttribution();
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  const id = import.meta.env['VITE_GTM_ID'];
  if (!id || !/^GTM-[A-Z0-9]+$/.test(id) || document.getElementById("abdon-gtm")) return;
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.id = "abdon-gtm";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
}
