# A11y Audit Tool

**A11y Audit Tool** is your comprehensive solution for web accessibility testing and report generation. With both automated and manual testing capabilities, this tool ensures your website's compliance with WCAG (Web Content Accessibility Guidelines) and helps you identify and address accessibility issues effectively.

![Screenshots of some views of the application](./a11y-audit-tool-preview.gif)

## Key Features

* **Automated Tests**: Run automatic tests on any website across many pages and various screen sizes.
* **Manual Tests**: Conduct manual tests using our template based on the Trusted Tester Conformance Process.
* **Combined Testing Approach**: Seamlessly integrate automatic tests with manual tests for comprehensive auditing.
* **Downloadable Reports**: Generate reports for easy reference and collaboration, facilitating improvement efforts.
* **Project Organization**: Group audits into projects for better organization and management of accessibility testing efforts.

## Why Choose A11y Audit Tool?
* **Comprehensive Testing**: Unlike most tools that focus solely on automatic or manual tests, our tool offers both, ensuring comprehensive results. During manual tests, you can review and comment on automatic test results.
* **Guided Testing**: Our audit template guides you through accessibility features. It provides test conditions and techniques to solve issues. A tester doesn't need to be an expert in the accessibility field to perform an audit using our tool.
* **Multi-page and Multi-screen Testing**: Test multiple pages (URLs) and screen sizes in a single audit, enhancing efficiency.
* **Clear Reports**: Generated reports are clear and understandable, facilitating discussions with clients and roadmap planning for improvement efforts.
* **Extensibility**: Extend the tool's capabilities by adding custom test cases using Playwright, reducing manual work and enhancing efficiency.

## Technology Stack
### Database and Authentication
  * [Supabase](https://supabase.com/)

### Full-Stack Application
  * [Nuxt 3](https://nuxt.com/)
  * [Vue 3](https://vuejs.org/)
  * [TypeScript](https://www.typescriptlang.org/)
  * [Playwright](https://playwright.dev/)
  * [Axe](https://github.com/dequelabs/axe-core)
  * [PrimeVue](https://primevue.org/)
  * [Tailwind CSS](https://tailwindcss.com/)
  * [Nuxt Supabase](https://supabase.nuxtjs.org/)
  * [VeeValidate](https://vee-validate.logaretm.com/v4/) with [Yup](https://github.com/jquense/yup) schema validation
  * [Nuxt SVGO](https://github.com/cpsoinos/nuxt-svgo)

## Project setup

### Prerequisites
* [pnpm](https://pnpm.io/installation) installed

### Supabase

1. Create a Supabase project [here](https://supabase.com/dashboard/projects).
2. Supabase projects rely on the [postgresql](https://www.postgresql.org/) database engine. In the `./sql` directory you will find all the SQL installation files needed to make the whole application work.
To install the necessary schema, please go to the [SQL Editor](https://supabase.com/docs/guides/database/overview#the-sql-editor) tab of your project and `RUN` all SQL lines in the order presented on directory and inner file level.
3. In your Supabase project go to `Project Settings -> API`. Create `.env` file, copy `.env.example` content and set values from Supabase settings:
  * `NITRO_PUBLIC_SUPABASE_URL` 👉 Project URL
  * `NITRO_PUBLIC_SUPABASE_KEY` 👉 `anon public`
  * `NITRO_SUPABASE_SERVICE_KEY` 👉 `service_role secret`

  Alternatively, you can run Supabase locally:
  1. Run `npx supabase login` and pass generated access token.
  2. Run `npx supabase start`.
  3. Pass envs from supabase started setup to `.env` file.
  
  Learn more [here](https://supabase.com/docs/guides/getting-started/local-development).

### Nuxt

1. Run:
  ```bash
  pnpm install
  pnpm exec playwright install
  pnpm dev
  ```
2. Register new user on `/register` page.

### Admin Role
Admins possess privileges to:
  * Create a new project
  * Assign user to a project
  * Set user type
  * See, edit and remove any audit

Admins have access to extra information and features on `/admin` page.

Admin role information is stored on the user [custom claims](https://github.com/supabase-community/supabase-custom-claims#faq) level and can be found in `claims_admin` auth user's property.
To check user custom claims run the following query in Supabase [SQL Editor](https://supabase.com/docs/guides/database/overview#the-sql-editor):
```sql
select get_claims('PASS-HERE-SPECIFIC-USER-UUID-FROM-AUTH-TABLE');
```

To grant admin privileges to a user, follow these steps:
  1. Run the following query in Supabase [SQL Editor](https://supabase.com/docs/guides/database/overview#the-sql-editor):
        ```sql
        select set_claim('PASS-HERE-SPECIFIC-USER-UUID-FROM-AUTH-TABLE', 'claims_admin', 'true');
        ```
  2. Re-login to Nuxt application to see the change.

### User Types
The application supports 2 user types:
  1. Auditor - can perform the following actions in projects he is assigned to:
      * Create new audits
      * View and edit his audit drafts
      * View all completed audits (called reports)
  2. Viewer - can perform the following actions in projects he is assigned to:
      * View all completed audits (called reports)

User type information is stored on the user [custom claims](https://github.com/supabase-community/supabase-custom-claims#faq) level and can be found in `user_role` auth user's property. When custom claim `user_role` is set/updated, the corresponding information in the `profiles` table (`user_type` column) is also updated.

To grant auditor/viewer privileges to a user, follow these steps:
1. Log in to Nuxt application as admin user, go to `/admin` and `Update user type`.

    Alternatively, run the following query in Supabase [SQL Editor](https://supabase.com/docs/guides/database/overview#the-sql-editor).

    Auditor:
    ```sql
    select set_claim('PASS-HERE-SPECIFIC-USER-UUID-FROM-AUTH-TABLE', 'user_role', '"auditor"');
    ```
    Viewer:
    ```sql
    select set_claim('PASS-HERE-SPECIFIC-USER-UUID-FROM-AUTH-TABLE', 'user_role', '"viewer"');
    ```
2. The user should re-login to Nuxt application to see the change.

### Https Configuration

**Install `mkcert` on your system**. The installation instructions for macOS, Windows and Linux can be found in the mkcert [Github repository](https://github.com/FiloSottile/mkcert).

**Create a valid certificate by running the following command in your project folder:**
<pre>
mkcert [-install] localhost
</pre>

**Run your project using**
<pre>
npm run dev-secure
</pre>

Your project will now be served on https://localhost:3000.

## Contributing
Contributions are welcome! If you find a bug or have a feature request, feel free to open an issue or submit a pull request.

## Like this project?
We'd appreciate it if you leave a ⭐ or share it with the world ✨.

## Who is developing?

<p>
  <a href="https://snow.dog" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/SnowdogApps/a11y-audit-tool/assets/1751998/63076d1e-225e-46c0-8461-1e06ce24d2b6">
      <source media="(prefers-color-scheme: light)" srcset="https://github.com/SnowdogApps/a11y-audit-tool/assets/1751998/f931826e-6a6d-44c9-9e37-a8610fef574b">
      <img width="320" alt="Snowdog logo." src="https://github.com/SnowdogApps/a11y-audit-tool/assets/1751998/f931826e-6a6d-44c9-9e37-a8610fef574b">
    </picture>
  </a>
</p>

Hey there! Snowdog is all about creating top-notch Hyvä builds with our own Hyvä [Sparq accelerator](https://snow.dog/sparq). We make sure to optimize Hyvä for both b2c and b2b commerce, and we’re a big accessibility advocate for the platform. You might also know us as the creator of the popular free [Hyvä menu module](https://github.com/SnowdogApps/magento2-menu). We’ve been working with Magento Open Source and Enterprise (now Adobe Commerce) for over a decade, and we even organize the Meet Magento conference since 2012. So if you're looking for a high-performing Hyvä store in no time, we’re your go-to agency!

We are also a team of digital accessibility specialists. A11y is our priority from day one of design and development. It's an integral part of our existing themes and design patterns, so not only do we build accessible solutions from scratch, but we have experience working with clients that need meet certain a11y requirements to comply with discrimination laws. Ready to elevate your online store and start your accessibility journey with us? [Let's talk](https://snow.dog/contact).
