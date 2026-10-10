import './SiteFooter.css'

const FIRST_YEAR = 2020

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <small>
        © <time dateTime={String(FIRST_YEAR)}>{FIRST_YEAR}</time>–<time dateTime={String(year)}>{year}</time>{' '}
        Lyuboslav Ilkov
      </small>
    </footer>
  )
}
