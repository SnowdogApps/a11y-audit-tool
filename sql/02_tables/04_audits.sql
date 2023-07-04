-- Create a table for public audits
create table audits (
  id serial primary key,
  created_at timestamp default current_timestamp not null,
  updated_at timestamp,
  profile_id uuid references public.profiles on delete cascade not null,
  project_id serial references public.projects on delete cascade not null,
  status text,
  config JSON not null DEFAULT '{}'::json
  issues JSON DEFAULT '{}'::json
  axe_results JSON DEFAULT '{}'::json
);
