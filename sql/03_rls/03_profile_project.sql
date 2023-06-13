-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table profile_project
  enable row level security;

create policy "Profile-project relations are public." on profile_project
  for select using (true);

create policy "Only admins can insert new permissions." on profile_project
  for insert with check (coalesce(get_my_claim('claims_admin')::bool,false) OR current_user = 'postgres');

create policy "Only admins can delete permissions." on profile_project
  for delete using (coalesce(get_my_claim('claims_admin')::bool,false) OR current_user = 'postgres');
