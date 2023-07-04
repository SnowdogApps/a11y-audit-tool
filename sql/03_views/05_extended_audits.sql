create view extended_audits WITH (security_invoker) as
  select
    projects.name as project,
    audits.*
  from audits
  left join projects on audits.project_id = projects.id;
