# Application DB setup

You can find all sql install files in `./setup_sql/` directory.

## Project public tables overview

### Structure

1. `audits` table columns:

- `id`
- `created_at` (timestamp)
- `updated_at` (optional, timestamp)
- `profile_id` (references public.profiles)
- `project_id` (references public.projects)
- `status` (`draft` or `completed`)
- `issues` (as JSON data)

2. `profiles` table columns:

- `id` (references auth.users)
- `updated_at` (optional, timestamp)
- `username` (optional, unique)
- `full_name` (optional)
- `avatar_url` (optional, feature not implemented)
- `user_type` (optional, `viewer` or `auditor`)

3. `projects` table columns:

- `id`
- `name` (text)
- `description` (optional)

4. `profile_project` table columns:

- `id`
- `profile_id` (references public.profiles)
- `project_id` (references public.projects)

### Policy rules (RLS) per table

1. `audits` - TODO
2. `profiles` - can be created and updated by both `user` and `admin`
3. `projects` - viewable for both `admin` and granted (added to `profile_project` table) users, only `admin` can insert/update projects
4. `profile_project` - viewable for anyone, only `admin` can insert/delete permissions

## Admin role

Role information is stored on the user custom claim level and can be found in `claims_admin` auth user's property.

Usage example with `supabase` client module:

1. Get information if user is `admin`:

- via supabase client sdk:

  ```JavaScript
  const { data: isAdmin } = await useSupabaseClient().rpc('is_claims_admin')
  ```

- via sql editor:
  ```sql
  select get_claims('PASS-HERE-SPECIFIC-USER-UUID-FROM-AUTH-TABLE');
  ```

2. Add `admin` role for specific user via sql editor:

```sql
select set_claim('PASS-HERE-SPECIFIC-USER-UUID-FROM-AUTH-TABLE', 'claims_admin', 'true');
```

## User role

:warning: Not specified by default.

Only the Admin can grant users with `user_role`.

When custom claim `user_role` is set/updated, the corresponding information in the `profiles` table (`user_type` column) is also updated.

### Custom claims

Custom Claims are special attributes attached to a user that you can use to control access to portions of your application. You can find more information here: https://github.com/supabase-community/supabase-custom-claims#faq

More usage examples: https://github.com/supabase-community/supabase-custom-claims#usage
