-- Paste this entire file in Supabase → SQL Editor → Run
-- Dashboard: https://supabase.com/dashboard/project/cfzuypbljirmibmxpabi/sql/new
-- Same Supabase project as Hawthorne / Enclave sites

create table if not exists public.bronte_trails (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  is_broker text not null default '',
  project_tag text not null default 'Bronte Trails Oakville',
  source text not null default 'brontetrailsoakville.com',
  page_path text not null default '/',
  form_type text not null default 'register',
  utm_source text not null default '',
  utm_medium text not null default '',
  utm_campaign text not null default '',
  utm_term text not null default '',
  utm_content text not null default '',
  created_at timestamptz not null default now()
);

comment on table public.bronte_trails is 'Lead registrations from Bronte Trails Oakville website forms';

create index if not exists bronte_trails_email_idx on public.bronte_trails (email);
create index if not exists bronte_trails_created_at_idx on public.bronte_trails (created_at desc);

alter table public.bronte_trails enable row level security;
