import { Link } from 'react-router-dom'
import { COURSE_LABELS } from '../constants.js'
import styles from './RecipeCard.module.css'

export default function RecipeCard({
  recipe,
  onToggleAvailability,
  onDelete,
}) {
  const availabilityClass = recipe.available ? '' : ' unavailable'
  const statusDotClass = recipe.available ? '' : ' status-dot-muted'

  return (
    <li
      className={`${styles.card}${recipe.available ? '' : ` ${styles.done}`}`}
      data-testid="item"
      data-id={recipe.id}
    >
      <div className={styles.topline}>
        <span className="category-label">
          <span className="category-icon" aria-hidden="true">
            {recipe.menuCategory.charAt(0).toUpperCase()}
          </span>
          {recipe.menuCategory.toUpperCase()}
        </span>
        <span className={`${styles.availability}${availabilityClass}`}>
          <span className={`status-dot${statusDotClass}`} aria-hidden="true"></span>
          {recipe.available ? 'Available' : 'Not available'}
        </span>
      </div>

      <div className={styles.main}>
        <input
          id={`recipe-availability-${recipe.id}`}
          type="checkbox"
          checked={recipe.available}
          onChange={() => onToggleAvailability(recipe.id)}
          aria-label={`Toggle availability for ${recipe.name}`}
          data-testid="item-toggle"
        />
        <div className={styles.copy}>
          <p className="course-label">{COURSE_LABELS[recipe.courseType]}</p>
          <h3>
            <Link
              to={`/recipes/${recipe.id}`}
              className={styles.title}
              data-testid="item-link"
            >
              {recipe.name}
            </Link>
          </h3>
        </div>
      </div>

      <div className={styles.footer}>
        <span>Recipe <strong>#{String(recipe.id).padStart(3, '0')}</strong></span>
        <span className="margin-note">{recipe.menuCategory} · {recipe.courseType}</span>
        <button
          className="delete-button"
          type="button"
          onClick={() => onDelete(recipe.id)}
          aria-label={`Delete ${recipe.name}`}
          data-testid="item-delete"
        >
          Delete
        </button>
      </div>
    </li>
  )
}
