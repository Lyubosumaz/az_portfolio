# az_portfolio

My personal portfolio, built with React and Vite: https://lyubosumaz.github.io/az_portfolio/

## Development

Requires Node.js 22.13+ and [pnpm](https://pnpm.io/).

```bash
pnpm install   # install dependencies
pnpm dev       # dev server at http://localhost:8080
pnpm build     # build into dist/
```

## Deployment

- Push to `master` → GitHub Actions builds and deploys to GitHub Pages.
- One-time setup: Settings → Pages → Source: GitHub Actions.
- Site path: `base` in `vite.config.js`.

## License

[MIT](LICENSE) © 2020-2026 Lyuboslav Ilkov
