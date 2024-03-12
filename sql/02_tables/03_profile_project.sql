-- Create a table for public profile_project
create table profile_project (
  profile_id uuid references public.profiles on delete cascade not null,
  project_id serial references public.projects on delete cascade not null,
  primary key (profile_id, project_id)
);
