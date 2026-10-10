import AudioBook from '../components/AudioBook/AudioBook.jsx'
import SiteFooter from '../components/SiteFooter/SiteFooter.jsx'
import { TRACKS } from '../data/tracks.js'
import './App.css'

export default function App() {
  return (
    <>
      <main className="page">
        <article className="project">
          <header className="project-header">
            <h1>AudioBook</h1>
            <p>Pick a track to listen. Starting one pauses the others.</p>
          </header>
          <AudioBook urls={TRACKS} />
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
