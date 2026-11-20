export const COURSE_TYPES = [
  { value: 'Main', label: 'Main course' },
  { value: 'Dessert', label: 'Dessert' },
  { value: 'Drink', label: 'Drink' },
]

export const MENU_CATEGORIES = [
  { value: 'Pasta', label: 'Pasta' },
  { value: 'Grill', label: 'Grill' },
  { value: 'Bar', label: 'Bar' },
  { value: 'Dessert', label: 'Dessert' },
  { value: 'Starters', label: 'Starters' },
]

export const COURSE_LABELS = Object.fromEntries(
  COURSE_TYPES.map((course) => [course.value, course.label.toUpperCase()])
)
