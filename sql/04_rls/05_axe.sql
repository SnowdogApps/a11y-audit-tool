-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table axe
  enable row level security;

-- Adjust rls level later on if mandatory
create policy "Axe test results are public." on axe
  for  select using (true);

create policy "Only admins can delete axe results." on axe
  for delete using (coalesce(get_my_claim('claims_admin')::bool,false) OR current_user = 'postgres');

create policy "Admins and auditors can insert new axe results." on axe
  for insert with check (coalesce(get_my_claim('claims_admin')::bool,false) OR
    ((get_my_claim('user_role'::text)) = '"auditor"'::jsonb));
