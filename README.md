# az_portfolio

A personal portfolio sandbox built with [Create React App](https://create-react-app.dev/). It currently holds one experiment: **AudioBook**, a small multi-track audio player that plays one track at a time.

> **Status:** early prototype, last worked on in August 2020. The page still uses the default Create React App look and title.

## What it does

The app shows the spinning React logo and a list of audio sources. Each source shows its URL and a **Play / Pause** button:

- Starting a track pauses whichever track is already playing.
- When a track finishes, its button resets to **Play**.

The player lives in `src/AudioBook.jsx`. It's built around a `useMultiAudio(urls)` hook that creates one `Audio` element per URL and keeps their playing state in sync. The track list is passed in from `src/App.js`:

```jsx
<MultiPlayer
  urls={[
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  ]}
/>
```

The sample tracks come from [SoundHelix](https://www.soundhelix.com/). The first entry in the list is a Google Translate link that carries the text of an article. It's a placeholder for a "reader" idea (having text read aloud) and doesn't play as audio yet.

## Tech stack

- React 16.12 (function components and hooks)
- Create React App (`react-scripts` 3.3.0)
- Jest and React Testing Library
- [`gh-pages`](https://github.com/tschaub/gh-pages) for deploying to GitHub Pages

## Getting started

You need Node.js and npm.

```bash
git clone git@github.com:Lyubosumaz/az_portfolio.git
cd az_portfolio
npm install
npm start
```

The dev server runs at http://localhost:3000.

> **Node 17 and newer:** `react-scripts` 3.3.0 uses webpack 4, which fails on Node 17+ with `ERR_OSSL_EVP_UNSUPPORTED`. Use Node 16, or turn on the legacy OpenSSL provider before running any script:
>
> ```powershell
> # Windows PowerShell
> $env:NODE_OPTIONS = "--openssl-legacy-provider"
> ```
>
> ```bash
> # macOS / Linux
> export NODE_OPTIONS=--openssl-legacy-provider
> ```

## Available scripts

| Command | What it does |
| --- | --- |
| `npm start` | Runs the dev server with hot reload |
| `npm test` | Runs Jest in watch mode |
| `npm run build` | Builds a production bundle into `build/` |
| `npm run deploy` | Builds, then publishes `build/` to the `gh-pages` branch |
| `npm run eject` | Ejects from Create React App (one-way) |

## Deployment

`npm run deploy` builds the app (through the `predeploy` script) and pushes the output to the `gh-pages` branch. GitHub Pages serves the site from that branch.

The built asset paths come from the `homepage` field in `package.json`, which is currently `http://lyubosumaz.github.io/portfolio`. This repository is named `az_portfolio`, so its Pages URL is `https://lyubosumaz.github.io/az_portfolio/`. Update `homepage` to match before deploying; if the two differ, the deployed page can't find its JS and CSS and renders blank.

## Project structure

```
az_portfolio/
├── public/
│   ├── index.html          # HTML template
│   ├── manifest.json       # Web app manifest
│   ├── favicon.ico, logo192.png, logo512.png
│   └── robots.txt
├── src/
│   ├── index.js            # Entry point: renders <App /> and unregisters the service worker
│   ├── App.js              # Root component: defines the track list
│   ├── AudioBook.jsx       # useMultiAudio hook and the MultiPlayer / Player components
│   ├── App.css, index.css  # Styles
│   ├── App.test.js         # Smoke test
│   ├── setupTests.js       # jest-dom setup
│   ├── serviceWorker.js    # Create React App service worker (not registered)
│   └── logo.svg
├── package.json
└── LICENSE
```

## Known issues

- **`npm test` fails.** `src/App.test.js` still looks for the default "Learn React" link, which `App.js` no longer renders.
- **The first track doesn't play.** It's a Google Translate page URL, not an audio file.
- **`ended` listeners are never removed.** The cleanup in `useMultiAudio` passes a new function to `removeEventListener`, so the original listeners stay attached.
- **Default metadata.** The page title, description and manifest still say "React App".

## License

[MIT](LICENSE) © 2020 Lyuboslav Ilkov
