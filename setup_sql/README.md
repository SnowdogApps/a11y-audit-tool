# Application sql setup

## Project public tables overview

1. `Audits` table columns:

- `id`
- `date`
- `profile_id` (references public.profiles)
- `project_id` (references public.projects)
- `status` (`draft` or `completed`)
- `issues` (as JSON data)

2. `Profiles` table columns:

- `id` (references auth.users)
- `updated_at`
- `username`
- `full_name`
- `avatar_url`
- `user_type` (`viewer` or `auditor`)

3. `Projects` table columns:

- `id`
- `name`
- `description` (optional)

4. `Auditor-Project` table columns:

- `id`
- `profile_id` (references public.profiles)
- `project_id` (references public.projects)

## Custom claims

Custom Claims are special attributes attached to a user that you can use to control access to portions of your application. You can find more information here: https://github.com/supabase-community/supabase-custom-claims#faq

### Admin roles


