import RecipeCard from './RecipeCard.jsx'

export default function RecipeList({
  recipes,
  onToggleAvailability,
  onDelete,
}) {
  if (recipes.length === 0) {
    return <p className="empty-state">There are no recipes in the menu yet.</p>
  }

  return (
    <ul className="recipe-grid" aria-label="Menu recipes">
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
