import { useEffect, useState } from 'react'
import RecipeList from './components/RecipeList.jsx'

const INITIAL_RECIPES = [
  {
    id: 1,
    name: 'Carbonara Pasta',
    available: true,
    courseType: 'Main',
    menuCategory: 'Pasta',
  },
  {
    id: 2,
    name: 'Lamb Ribs with Citrus Glaze',
    available: false,
    courseType: 'Main',
    menuCategory: 'Grill',
  },
  {
    id: 3,
    name: 'Craft IPA Beer',
    available: true,
    courseType: 'Drink',
    menuCategory: 'Bar',
  },
]

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export default function App() {
  const [recipes, setRecipes] = useState(INITIAL_RECIPES)
  const [theme, setTheme] = useState(getSystemTheme)
  const availableCount = recipes.filter((recipe) => recipe.available).length

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  function handleToggleAvailability(id) {
    setRecipes((previousRecipes) =>
      previousRecipes.map((recipe) =>
        recipe.id === id
          ? { ...recipe, available: !recipe.available }
          : recipe
      )
    )
  }

  function handleDeleteRecipe(id) {
    setRecipes((previousRecipes) =>
      previousRecipes.filter((recipe) => recipe.id !== id)
    )
  }

  function handleThemeToggle() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Horeca Cost Controller home">
          <span className="brand-mark" aria-hidden="true">H</span>
          <span>Horeca <strong>Cost Controller</strong></span>
        </a>
        <div className="header-actions">
          <p className="header-note">A clearer view of your menu</p>
          <button
            className="theme-toggle"
            type="button"
            onClick={handleThemeToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-pressed={theme === 'dark'}
          >
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      </header>

      <main className="page-shell">
        <section className="intro" aria-labelledby="page-title">
          <div>
            <p className="eyebrow">MENU MANAGEMENT <span aria-hidden="true">/</span> OVERVIEW</p>
            <h1 id="page-title">Know what’s working<br />on your menu.</h1>
            <p className="intro-copy">Keep your recipes organized and understand how each plate contributes to your business.</p>
          </div>
          <div className="summary" aria-label="Menu summary">
            <span className="summary-label">MENU ITEMS</span>
            <strong>{String(recipes.length).padStart(2, '0')}</strong>
            <span className="summary-detail">
              <span className="status-dot" aria-hidden="true"></span>
              {availableCount} currently available
            </span>
          </div>
        </section>

        <div className="workspace-grid">
          <section className="menu-section" aria-labelledby="menu-title">
            <div className="section-heading menu-heading">
              <div>
                <p className="eyebrow">THE LINEUP</p>
                <h2 id="menu-title">
                  Your menu <span className="item-count">{recipes.length} items</span>
                </h2>
              </div>
              <span className="stage-tag">STAGE 05 · INTERACTIVE MENU</span>
            </div>

            <RecipeList
              recipes={recipes}
              onToggleAvailability={handleToggleAvailability}
              onDelete={handleDeleteRecipe}
            />
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <span>HORECA COST CONTROLLER</span>
        <span>Stage 5 · Interactive menu</span>
      </footer>
    </>
  )
}
