-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table audits
  enable row level security;

create policy "Audits are viewable for admin and granted users - both viewer and auditor." on audits
  for select using (coalesce(get_my_claim('claims_admin')::bool,false) OR (project_id IN (
  SELECT profile_project.project_id FROM profile_project
  WHERE profile_project.profile_id = auth.uid()
)) AND (status != 'draft' OR profile_id = auth.uid()));

create policy "Both admin (globally) and auditor type user (only to approved projects) can insert new audits." on audits
  for insert with check (coalesce(get_my_claim('claims_admin')::bool,false) OR (
    ((get_my_claim('user_role'::text)) = '"auditor"'::jsonb) AND (project_id IN (
      SELECT profile_project.project_id FROM profile_project
      WHERE profile_project.profile_id = auth.uid()
    )))
  );

create policy "Both admin and auditor (owner, while `status` is not `completed`) type user can update audits." on audits
  for update using (coalesce(get_my_claim('claims_admin')::bool,false) OR (profile_id = auth.uid() AND status != 'completed'));

create policy "Admins can delete all audits. Auditors can delete their draft audits." on audits
  for delete using (coalesce(get_my_claim('claims_admin')::bool,false) OR current_user = 'postgres' OR (
    ((get_my_claim('user_role'::text)) = '"auditor"'::jsonb) AND (project_id IN (
      SELECT profile_project.project_id FROM profile_project
      WHERE profile_project.profile_id = auth.uid()
    )) AND (status = 'draft'))
  );
