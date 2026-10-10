import { useCallback, useState } from 'react'
import Track from './Track.jsx'
import './AudioBook.css'

export default function AudioBook({ urls }) {
  const [playingIndex, setPlayingIndex] = useState(null)
  const stop = useCallback(() => setPlayingIndex(null), [])

  return (
    <ol className="tracks">
      {urls.map((url, i) => (
        <Track
          key={url}
          url={url}
          playing={i === playingIndex}
          onToggle={() => setPlayingIndex((current) => (current === i ? null : i))}
          onStop={stop}
        />
      ))}
    </ol>
  )
}
