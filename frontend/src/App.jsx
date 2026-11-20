import { useEffect, useState } from 'react'
import RecipeList from './components/RecipeList.jsx'
import RecipeForm from './components/RecipeForm.jsx'
import {
  createRecipe,
  deleteRecipe,
  fetchRecipes,
  updateRecipe,
} from './api.js'

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export default function App() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [theme, setTheme] = useState(getSystemTheme)
  const availableCount = recipes.filter((recipe) => recipe.available).length

  useEffect(() => {
    let ignore = false

    async function load() {
      try {
        const data = await fetchRecipes()
        if (!ignore) setRecipes(data)
      } catch (err) {
        if (!ignore) setError(err.message)
      } finally {
        if (!ignore) setLoading(false)
      }
    }

    load()
    return () => {
      ignore = true
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  async function handleAdd(recipe) {
    const created = await createRecipe(recipe)
    setRecipes((previousRecipes) => [...previousRecipes, created])
  }

  async function handleToggleAvailability(id) {
    const recipe = recipes.find((item) => item.id === id)
    try {
      const updated = await updateRecipe(id, {
        available: !recipe.available,
      })
      setRecipes((previousRecipes) =>
        previousRecipes.map((item) => (item.id === id ? updated : item))
      )
    } catch (err) {
      setError(err.message)
    }
  }

  async function handleDeleteRecipe(id) {
    try {
      await deleteRecipe(id)
      setRecipes((previousRecipes) =>
        previousRecipes.filter((recipe) => recipe.id !== id)
      )
    } catch (err) {
      setError(err.message)
    }
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
          <section className="add-section" aria-labelledby="add-recipe-title">
            <div className="section-heading">
              <div>
                <p className="eyebrow">NEW ITEM</p>
                <h2 id="add-recipe-title">Add a recipe</h2>
              </div>
            </div>
            <RecipeForm onAdd={handleAdd} />
          </section>

          <section className="menu-section" aria-labelledby="menu-title">
            <div className="section-heading menu-heading">
              <div>
                <p className="eyebrow">THE LINEUP</p>
                <h2 id="menu-title">
                  Your menu <span className="item-count">{recipes.length} items</span>
                </h2>
              </div>
              <span className="stage-tag">STAGE 07 · CRUD FORM</span>
            </div>

            {loading && (
              <p className="info" data-testid="loading">
                Se încarcă meniul...
              </p>
            )}
            {error && (
              <p className="error" data-testid="error">
                {error}
              </p>
            )}
            {!loading && (
              <RecipeList
                recipes={recipes}
                onToggleAvailability={handleToggleAvailability}
                onDelete={handleDeleteRecipe}
              />
            )}
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <span>HORECA COST CONTROLLER</span>
        <span>Stage 7 · CRUD form</span>
      </footer>
    </>
  )
}
