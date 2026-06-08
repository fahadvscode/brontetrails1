import { PROJECT } from "@/lib/constants";

const REGISTERED_KEY = "bronte_trails_registered";
export const LEAD_REGISTERED_EVENT = "bronte-trails-lead-registered";

export function markLeadRegistered() {
  try {
    sessionStorage.setItem(REGISTERED_KEY, "1");
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(LEAD_REGISTERED_EVENT));
}

export function hasRegisteredLead() {
  try {
    return sessionStorage.getItem(REGISTERED_KEY) === "1";
  } catch {
    return false;
  }
}

export interface LeadPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isBroker: string;
  projectTag: string;
  source: string;
  page_path: string;
  form_type: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  timestamp: string;
}

export function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ]) {
    const val = params.get(key);
    if (val) utm[key] = val;
  }
  return utm;
}

export async function submitLead(
  data: Omit<
    LeadPayload,
    "source" | "projectTag" | "page_path" | "timestamp" | "form_type"
  >,
  formType = "hero",
): Promise<void> {
  const payload: LeadPayload = {
    ...data,
    ...getUtmParams(),
    projectTag: PROJECT.tag,
    source: PROJECT.source,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString(),
    form_type: formType,
  };

  const res = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let message = "Submission failed. Please try again.";
    try {
      const body = await res.json();
      if (body?.error) message = body.error;
    } catch {
      /* ignore */
    }
    throw new Error(message);
  }

  markLeadRegistered();
}
