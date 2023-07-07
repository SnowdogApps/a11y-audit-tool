-- Create a table for public axe test results
create table axe (
  id serial primary key,
  created_at timestamp default current_timestamp not null,
  audit_id serial references public.audits on delete cascade not null,
  results JSONB DEFAULT '{}'::jsonb
);
