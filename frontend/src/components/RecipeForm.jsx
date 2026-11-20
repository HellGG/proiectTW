import { useState } from 'react'
import { COURSE_TYPES, MENU_CATEGORIES } from '../constants.js'
import styles from './RecipeForm.module.css'

const NAME_MAX = 100

export default function RecipeForm({ onAdd }) {
  const [name, setName] = useState('')
  const [courseType, setCourseType] = useState('Main')
  const [menuCategory, setMenuCategory] = useState('Pasta')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function validate() {
    const title = name.trim()
    if (title === '') return 'The recipe name is required.'
    if (title.length > NAME_MAX) return `The recipe name must have at most ${NAME_MAX} characters.`
    return ''
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const message = validate()
    if (message) {
      setError(message)
      return
    }

    setError('')
    setSubmitting(true)
    try {
      await onAdd({
        name: name.trim(),
        available: true,
        courseType,
        menuCategory,
      })
      setName('')
      setCourseType('Main')
      setMenuCategory('Pasta')
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      data-testid="form"
    >
      <label>
        Recipe name
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Ex: Truffle risotto"
          maxLength={NAME_MAX}
          aria-invalid={Boolean(error)}
          data-testid="form-title"
        />
      </label>

      <label>
        Course type
        <select
          value={courseType}
          onChange={(event) => setCourseType(event.target.value)}
          data-testid="form-courseType"
        >
          {COURSE_TYPES.map((course) => (
            <option key={course.value} value={course.value}>
              {course.label}
            </option>
          ))}
        </select>
      </label>

      <label>
        Menu category
        <select
          value={menuCategory}
          onChange={(event) => setMenuCategory(event.target.value)}
          data-testid="form-menuCategory"
        >
          {MENU_CATEGORIES.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </label>

      {error && (
        <p className="error" data-testid="form-error">
          {error}
        </p>
      )}

      <button type="submit" disabled={submitting} data-testid="form-submit">
        {submitting ? 'Se salvează...' : 'Adaugă rețeta'}
      </button>
    </form>
  )
}
