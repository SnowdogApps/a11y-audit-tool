-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.

-- `profiles` table
alter table profiles
  enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id OR coalesce(get_my_claim('claims_admin')::bool,false));

create policy "Both users and Admin can update own profile." on profiles
  for update using (auth.uid() = id OR coalesce(get_my_claim('claims_admin')::bool,false));
