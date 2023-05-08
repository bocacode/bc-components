import './nav-bar.css'

export default function NavBar({ logo, companyName, links, ctaLink, ctaText }) {
  return (
    <header className='header' id='top'>
      <div className='wrapper'>
        <div className='navbar-logo'>
          <img src={logo} alt={companyName} />
        </div>
        <div className='navbar-links-container'>
          {links?.map(link => (link))}
          {ctaLink && ctaText && (
            <a className='navbar-cta' href={ctaLink}>
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </header>
  )
}
