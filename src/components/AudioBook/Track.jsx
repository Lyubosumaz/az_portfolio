import { useEffect, useRef } from 'react'

function trackName(url) {
  try {
    const { hostname, pathname } = new URL(url)
    const file = pathname.split('/').filter(Boolean).pop()
    return file ? decodeURIComponent(file) : hostname
  } catch {
    return url
  }
}

function trackSource(url) {
  try {
    const { hostname, pathname } = new URL(url)
    return (hostname + pathname).replace(/\/$/, '')
  } catch {
    return url
  }
}

export default function Track({ url, playing, onToggle, onStop }) {
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!playing) {
      audio.pause()
      return
    }
    audio.play().catch((error) => {
      if (error.name !== 'AbortError') onStop()
    })
  }, [playing, onStop])

  const name = trackName(url)

  return (
    <li>
      <figure className={playing ? 'track is-playing' : 'track'}>
        <audio ref={audioRef} src={url} preload="none" onEnded={onStop} />
        <button type="button" className="track-toggle" onClick={onToggle}>
          {playing ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
            </svg>
          )}
          <span className="visually-hidden">
            {playing ? 'Pause' : 'Play'} {name}
          </span>
        </button>
        <figcaption className="track-info">
          <cite className="track-name">{name}</cite>
          <a className="track-source" href={url} target="_blank" rel="noreferrer">
            {trackSource(url)}
          </a>
        </figcaption>
      </figure>
    </li>
  )
}
