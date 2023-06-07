-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table projects
  enable row level security;

create policy "Projects are viewable for both admin and granted users." on projects
  for select using (coalesce(get_my_claim('claims_admin')::bool,false) OR (id IN (
  SELECT project_id FROM profile_project
  WHERE profile_id = auth.uid()
)));

create policy "Admins can insert new projects." on projects
  for insert with check (coalesce(get_my_claim('claims_admin')::bool,false));

create policy "Admins can update projects." on projects
  for update using (coalesce(get_my_claim('claims_admin')::bool,false));
