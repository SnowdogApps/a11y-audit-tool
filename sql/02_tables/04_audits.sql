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
  is_triggered boolean not null default false,
  report_type text null,
  comment text not null default ''::text,
);
