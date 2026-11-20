import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

function navClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link
}

export default function Layout() {
  const [theme, setTheme] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <span className={styles.logo}>Horeca Cost Controller</span>
          <nav className={styles.nav} data-testid="nav">
            <NavLink to="/" end className={navClass}>
              Meniu
            </NavLink>
            <NavLink to="/despre" className={navClass}>
              Despre
            </NavLink>
            <button
              type="button"
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-pressed={theme === 'dark'}
            >
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>Proiect Tehnologii Web</footer>
    </>
  )
}
