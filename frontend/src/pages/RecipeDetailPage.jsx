import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchRecipe } from '../api.js'
import { COURSE_LABELS } from '../constants.js'
import styles from './RecipeDetailPage.module.css'

export default function RecipeDetailPage() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ignore = false
    fetchRecipe(id)
      .then((data) => {
        if (!ignore) {
          setRecipe(data)
          setError(null)
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message)
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })
    return () => {
      ignore = true
    }
  }, [id])

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Se încarcă...
      </p>
    )
  }

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          Rețeta nu a putut fi încărcată: {error}
        </p>
        <Link to="/">Înapoi la meniu</Link>
      </section>
    )
  }

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        Înapoi la meniu
      </Link>
      <h2 className={recipe.available ? undefined : styles.done} data-testid="detail-title">
        {recipe.name}
      </h2>
      <dl className={styles.fields}>
        <dt>Tip preparat</dt>
        <dd>{COURSE_LABELS[recipe.courseType]}</dd>
        <dt>Categorie</dt>
        <dd>{recipe.menuCategory}</dd>
        <dt>Status</dt>
        <dd>{recipe.available ? 'Disponibil' : 'Indisponibil'}</dd>
        <dt>ID</dt>
        <dd>{recipe.id}</dd>
      </dl>
    </section>
  )
}
