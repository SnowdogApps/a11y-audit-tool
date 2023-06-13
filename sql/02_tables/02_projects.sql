-- Create a table for public projects
create table projects (
  id serial primary key,
  created_at timestamp default current_timestamp not null,
  updated_at timestamp,
  name text not null,
  description text,

  constraint name_length check (char_length(name) >= 3)
);
