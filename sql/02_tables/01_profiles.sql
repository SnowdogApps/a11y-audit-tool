-- Create a table for public profiles
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp,
  username text unique,
  full_name text,
  avatar_url text,
  user_type text,

  constraint username_length check (char_length(username) >= 3)
);

-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url, user_type)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url', new.raw_user_meta_data->>'user_type');
  return new;
end;
$$ language plpgsql security definer;

create function public.handle_user_role_update()
returns trigger as $$
begin
  update profiles
  set user_type = (select get_claim(id, 'user_role'))
  where id = new.id;
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

create trigger on_auth_user_updated
  after update on auth.users
  for each row when (old.raw_app_meta_data is distinct from new.raw_app_meta_data)
  execute function public.handle_user_role_update();
