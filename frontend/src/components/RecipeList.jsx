import RecipeCard from './RecipeCard.jsx'
import styles from './RecipeList.module.css'

export default function RecipeList({
  recipes,
  onToggleAvailability,
  onDelete,
}) {
  if (recipes.length === 0) {
    return (
      <p className="empty-state" data-testid="empty">
        There are no recipes in the menu yet.
      </p>
    )
  }

  return (
    <ul className={styles.list} aria-label="Menu recipes">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onToggleAvailability={onToggleAvailability}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
