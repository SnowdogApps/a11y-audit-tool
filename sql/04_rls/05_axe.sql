-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table axe
  enable row level security;

-- Adjust rls level later on if mandatory
create policy "Axe test results are public." on axe
  for  select using (true);

create policy "Only admins can delete axe results." on axe
  for delete using (coalesce(get_my_claim('claims_admin')::bool,false) OR current_user = 'postgres');
