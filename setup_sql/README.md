# Application sql setup

## Project public tables overview

1. `Audits` table columns:

* `id`
* `date`
* `author`
* `project_id`
* `status` (`draft` or `completed`)
* `issues` (as JSON data)

2. `Profiles` table columns:

* `id`
* `updated_at`
* `username`
* `full_name`
* `avatar_url`
* `type`

3. `Projects` table columns:

* `id`
* `name`
* `description` (optional)

## Custom claims

Custom Claims are special attributes attached to a user that you can use to control access to portions of your application. You can find more information here: https://github.com/supabase-community/supabase-custom-claims#faq
