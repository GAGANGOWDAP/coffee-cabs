/**
 * Google Analytics 4 (GA4) Event Tracking Utility for Coffee Cabs
 * Environment-aware, PII-safe event tracking functions.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

interface CommonEventParams {
  page_path?: string;
  page_title?: string;
  [key: string]: any;
}

/**
 * Safely dispatch custom event to Google Analytics 4 (gtag.js)
 */
export function trackEvent(eventName: string, params: CommonEventParams = {}) {
  try {
    const defaultParams = {
      page_path: typeof window !== "undefined" ? window.location.pathname : "",
      page_title: typeof window !== "undefined" ? document.title : "",
      ...params,
    };

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, defaultParams);
    } else if (import.meta.env.DEV) {
      console.log(`[GA4 Track Event]: ${eventName}`, defaultParams);
    }
  } catch (err) {
    // Silently handle tracking failures
  }
}

/**
 * Track Phone Call Link Clicks
 */
export function trackPhoneCallClick(buttonLocation: string) {
  trackEvent("phone_call_click", {
    button_location: buttonLocation,
  });
}

/**
 * Track WhatsApp Chat Link Clicks
 */
export function trackWhatsAppClick(buttonLocation: string) {
  trackEvent("whatsapp_click", {
    button_location: buttonLocation,
  });
}

/**
 * Track Form Engagement Start
 */
export function trackFormStart(formName: string) {
  trackEvent("form_start", {
    form_name: formName,
  });
}

/**
 * Track Successful Form Submission (Strictly PII-free)
 */
export function trackFormSubmit(formName: string) {
  trackEvent("form_submit", {
    form_name: formName,
  });
}

/**
 * Track Major Conversion CTA Clicks
 */
export function trackCtaClick(ctaName: string, ctaLocation: string) {
  trackEvent("cta_click", {
    cta_name: ctaName,
    cta_location: ctaLocation,
  });
}
