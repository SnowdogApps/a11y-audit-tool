# Application sql setup

## Project public tables overview

### Structure

1. `audits` table columns:

- `id`
- `date`
- `profile_id` (references public.profiles)
- `project_id` (references public.projects)
- `status` (`draft` or `completed`)
- `issues` (as JSON data)

2. `profiles` table columns:

- `id` (references auth.users)
- `updated_at`
- `username` (optional, unique)
- `full_name` (optional)
- `avatar_url` (optional, feature not implemented)
- `user_type` (optional, `viewer` or `auditor`)

3. `projects` table columns:

- `id`
- `name`
- `description` (optional)

4. `profile_project` table columns:

- `id`
- `profile_id` (references public.profiles)
- `project_id` (references public.projects)

### Policy rules (RLS) per table

1. `audits` - TODO
2. `profiles` - can be created and updated by both `user` and `admin`
3. `projects` - viewable for both `admin` and granted (added to `profile_project` table) users, only `admin` can insert/update projects
4. `profile_project` - viewable only for `admin`, only `admin` can insert/delete permissions

## Custom claims

Custom Claims are special attributes attached to a user that you can use to control access to portions of your application. You can find more information here: https://github.com/supabase-community/supabase-custom-claims#faq

### Admin roles

Role information is stored on the user custom claim level and can be found in `is_claims_admin` auth user's property.

Usage example with `supabase` client module:
```JavaScript
const { data: isAdmin } = await useSupabaseClient().rpc('is_claims_admin')
```

More usage examples: https://github.com/supabase-community/supabase-custom-claims#usage
