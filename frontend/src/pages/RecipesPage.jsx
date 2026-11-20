import { useEffect, useState } from 'react'
import RecipeList from '../components/RecipeList.jsx'
import RecipeForm from '../components/RecipeForm.jsx'
import {
  createRecipe,
  deleteRecipe,
  fetchRecipes,
  updateRecipe,
} from '../api.js'
import styles from './RecipesPage.module.css'

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

  async function handleAdd(recipe) {
    const created = await createRecipe(recipe)
    setRecipes((previous) => [...previous, created])
  }

  async function handleToggle(id) {
    const recipe = recipes.find((item) => item.id === id)
    try {
      const updated = await updateRecipe(id, {
        available: !recipe.available,
      })
      setRecipes((previous) =>
        previous.map((item) => (item.id === id ? updated : item))
      )
    } catch (err) {
      setError(err.message)
    }
  }

  async function handleDelete(id) {
    try {
      await deleteRecipe(id)
      setRecipes((previous) => previous.filter((recipe) => recipe.id !== id))
    } catch (err) {
      setError(err.message)
    }
  }

  const availableCount = recipes.filter((recipe) => recipe.available).length

  return (
    <div className={styles.grid}>
      <section className="panel">
        <h2>Adaugă rețeta</h2>
        <RecipeForm onAdd={handleAdd} />
      </section>
      <section className="panel">
        <h2>Meniul meu</h2>
        <p className={styles.summary}>
          {recipes.length} preparate, dintre care {availableCount} disponibile
        </p>
        {loading && (
          <p className="info" data-testid="loading">
            Se încarcă...
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
            onToggleAvailability={handleToggle}
            onDelete={handleDelete}
          />
        )}
      </section>
    </div>
  )
}
