export type AnalyticsEventName =
  | "page_view"
  | "view_content"
  | "lead_form_started"
  | "lead_submitted"
  | "whatsapp_clicked"
  | "phone_clicked"
  | "cta_clicked";

export function trackEvent(eventName: AnalyticsEventName, params?: Record<string, string | number>) {
  if (typeof window === "undefined") return;

  const payload = {
    event: eventName,
    ...params,
  };

  window.dispatchEvent(new CustomEvent("challengeasy:analytics", { detail: payload }));

  const analyticsWindow = window as Window & {
    gtag?: (command: string, eventName: string, params?: Record<string, string | number>) => void;
    dataLayer?: Array<Record<string, string | number>>;
  };

  if (typeof analyticsWindow.gtag === "function") {
    analyticsWindow.gtag("event", eventName, { ...params });
  }

  if (typeof analyticsWindow.dataLayer !== "undefined") {
    analyticsWindow.dataLayer.push({ event: eventName, ...params });
  }
}

export function trackPageView(pathname?: string) {
  if (typeof window === "undefined") return;
  trackEvent("page_view", { page_path: pathname ?? window.location.pathname });
}
