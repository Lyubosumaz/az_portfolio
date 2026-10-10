import { useCallback, useEffect, useRef, useState } from 'react'

// A readable name for a source: the file name, or the host when there is none.
function trackName(url) {
  try {
    const { hostname, pathname } = new URL(url)
    const file = pathname.split('/').filter(Boolean).pop()
    return file ? decodeURIComponent(file) : hostname
  } catch {
    return url
  }
}

function Track({ number, url, playing, onToggle, onStop }) {
  const audioRef = useRef(null)

  // Keep the <audio> element in step with the selected track.
  useEffect(() => {
    const audio = audioRef.current
    if (!playing) {
      audio.pause()
      return
    }
    audio.play().catch((error) => {
      // AbortError just means we paused before playback started.
      if (error.name !== 'AbortError') onStop()
    })
  }, [playing, onStop])

  const name = trackName(url)

  return (
    <li className={playing ? 'track is-playing' : 'track'}>
      <audio ref={audioRef} src={url} preload="none" onEnded={onStop} />
      <button
        type="button"
        className="track-toggle"
        onClick={onToggle}
        aria-pressed={playing}
        aria-label={`${playing ? 'Pause' : 'Play'} ${name}`}
      >
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
      </button>
      <div className="track-info">
        <span className="track-name">
          <span className="track-number">{String(number).padStart(2, '0')}</span>
          {name}
        </span>
        <span className="track-source" title={url}>
          {url}
        </span>
      </div>
    </li>
  )
}

// Plays one source at a time: starting a track pauses the one already playing.
export default function AudioBook({ urls }) {
  const [playingIndex, setPlayingIndex] = useState(null)
  const stop = useCallback(() => setPlayingIndex(null), [])

  return (
    <ol className="tracks">
      {urls.map((url, i) => (
        <Track
          key={url}
          number={i + 1}
          url={url}
          playing={i === playingIndex}
          onToggle={() => setPlayingIndex((current) => (current === i ? null : i))}
          onStop={stop}
        />
      ))}
    </ol>
  )
}
