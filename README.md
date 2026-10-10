# az_portfolio

A personal portfolio built with [React](https://react.dev/) and [Vite](https://vite.dev/). It currently features **AudioBook**, a small audio player that plays one track at a time.

## What it does

AudioBook lists audio tracks, each with a name, its source and a play/pause button:

- Starting a track pauses whichever one is already playing.
- When a track finishes, or its source can't be played, the button resets.

The track list is the `TRACKS` array in `src/App.jsx`, and the player lives in `src/AudioBook.jsx`:

```jsx
const TRACKS = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
]

<AudioBook urls={TRACKS} />
```

The sample tracks come from [SoundHelix](https://www.soundhelix.com/). The first entry in the list is a Google Translate link that carries the text of an article. It's a placeholder for a "reader" idea (having text read aloud) and can't be played as audio yet.

## Tech stack

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/) for the dev server and production builds
- [`gh-pages`](https://github.com/tschaub/gh-pages) for deploying to GitHub Pages

## Getting started

You need Node.js 20.19+ or 22.12+.

```bash
git clone git@github.com:Lyubosumaz/az_portfolio.git
cd az_portfolio
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server with hot reload |
| `npm run build` | Builds the site into `dist/` |
| `npm run preview` | Serves the built `dist/` folder locally |
| `npm run deploy` | Builds, then publishes `dist/` to the `gh-pages` branch |

## Deployment

`npm run deploy` builds the site and pushes `dist/` to the `gh-pages` branch. In the repository's **Settings → Pages**, set the source to that branch, and the site is served at:

https://lyubosumaz.github.io/az_portfolio/

That path comes from `base` in `vite.config.js`. Update it if you rename the repository or move to a custom domain.

## Project structure

```
az_portfolio/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── main.jsx        # Entry point
│   ├── App.jsx         # Page layout and track list
│   ├── AudioBook.jsx   # Player components
│   ├── App.css         # Page and player styles
│   └── index.css       # Base styles and light/dark colour tokens
├── index.html
├── vite.config.js
├── package.json
└── LICENSE
```

## License

[MIT](LICENSE) © Lyuboslav Ilkov
