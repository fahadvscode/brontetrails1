import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/** Supabase table for Bronte Trails Oakville lead form submissions */
export const LEADS_TABLE = "bronte_trails";

export type LeadInsert = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  is_broker: string;
  project_tag: string;
  source: string;
  page_path: string;
  form_type: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
};

function getSupabaseUrl() {
  return (process.env.SUPABASE_URL ?? "").trim();
}

function getServiceRoleKey() {
  return (process.env.SUPABASE_SERVICE_ROLE_KEY ?? "").trim();
}

export function isSupabaseConfigured() {
  return Boolean(getSupabaseUrl() && getServiceRoleKey());
}

export function createSupabaseAdmin(): SupabaseClient | null {
  const url = getSupabaseUrl();
  const serviceRoleKey = getServiceRoleKey();

  if (!url || !serviceRoleKey) {
    return null;
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export async function insertLead(
  row: LeadInsert,
): Promise<{ ok: true; id: string } | { ok: false; error: string }> {
  const supabase = createSupabaseAdmin();

  if (!supabase) {
    return { ok: false, error: "Supabase is not configured." };
  }

  const { data, error } = await supabase
    .from(LEADS_TABLE)
    .insert(row)
    .select("id")
    .single();

  if (error) {
    console.error("[supabase] insert lead failed:", error.message);
    return { ok: false, error: error.message };
  }

  return { ok: true, id: data.id };
}
