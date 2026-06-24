import ThemeToggle from './ThemeToggle'
import { useTheme } from '../hooks/useTheme'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const logoSrc = isDark ? '/logo-bg-hitam.png' : '/logo-bg-putih.png'

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <div className="nav-brand-area">
          <a href="#home" className="nav-brand" aria-label="ariwijayaikd">
            <img src={logoSrc} alt="ariwijayaikd" className="nav-brand__logo" />
          </a>
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </div>

        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="hamburger" aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </label>

        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
