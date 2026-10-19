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
    if (!existing || Object.keys(found).length > 0) {
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
