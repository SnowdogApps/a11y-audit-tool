# A11y Audit App

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
pnpm dev
```

### Https configuration

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

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```
