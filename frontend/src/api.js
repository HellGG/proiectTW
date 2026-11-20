export const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers },
  })

  if (!response.ok) {
    throw new Error(`Eroare server: ${response.status}`)
  }

  return response.status === 204 ? null : response.json()
}

export function fetchRecipes() {
  return request('/recipes')
}

export function fetchRecipe(id) {
  return request(`/recipes/${id}`)
}

export function createRecipe(recipe) {
  return request('/recipes', {
    method: 'POST',
    body: JSON.stringify(recipe),
  })
}

export function updateRecipe(id, changes) {
  return request(`/recipes/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(changes),
  })
}

export function deleteRecipe(id) {
  return request(`/recipes/${id}`, {
    method: 'DELETE',
  })
}
