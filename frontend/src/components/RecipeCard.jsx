const COURSE_LABELS = {
  Main: 'MAIN COURSE',
  Dessert: 'DESSERT',
  Drink: 'DRINK',
}

export default function RecipeCard({
  recipe,
  onToggleAvailability,
  onDelete,
}) {
  const availabilityClass = recipe.available ? '' : ' unavailable'
  const statusDotClass = recipe.available ? '' : ' status-dot-muted'
  const cardClass = recipe.available ? 'recipe-card' : 'recipe-card done'

  return (
    <li className={cardClass}>
      <div className="card-topline">
        <span className="category-label">
          <span className="category-icon" aria-hidden="true">
            {recipe.menuCategory.charAt(0).toUpperCase()}
          </span>
          {recipe.menuCategory.toUpperCase()}
        </span>
        <span className={`availability${availabilityClass}`}>
          <span className={`status-dot${statusDotClass}`} aria-hidden="true"></span>
          {recipe.available ? 'Available' : 'Not available'}
        </span>
      </div>

      <div className="recipe-main">
        <input
          id={`recipe-availability-${recipe.id}`}
          type="checkbox"
          checked={recipe.available}
          onChange={() => onToggleAvailability(recipe.id)}
          aria-label={`Toggle availability for ${recipe.name}`}
        />
        <div className="recipe-copy">
          <p className="course-label">{COURSE_LABELS[recipe.courseType]}</p>
          <h3>
            <label htmlFor={`recipe-availability-${recipe.id}`}>
              {recipe.name}
            </label>
          </h3>
        </div>
      </div>

      <div className="card-footer">
        <span>Recipe <strong>#{String(recipe.id).padStart(3, '0')}</strong></span>
        <span className="margin-note">{recipe.menuCategory} · {recipe.courseType}</span>
        <button
          className="delete-button"
          type="button"
          onClick={() => onDelete(recipe.id)}
          aria-label={`Delete ${recipe.name}`}
        >
          Delete
        </button>
      </div>
    </li>
  )
}
