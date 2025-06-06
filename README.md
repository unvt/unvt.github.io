# UNVT Dashboard React Site

This repository now uses [Vite](https://vitejs.dev/) with React and TypeScript to build the UNVT Dashboard.

## Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

## Building for GitHub Pages

Run the build command which outputs to the `dist/` directory. A `.nojekyll` file is automatically copied so GitHub Pages serves the contents as-is.

```bash
npm run build
```

The contents of `dist/` are committed to the repository and served from GitHub Pages. Whenever changes are merged into `main`, a GitHub Actions workflow automatically runs this build and pushes the updated site to the `gh-pages` branch.
