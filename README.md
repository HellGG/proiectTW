# Horeca Cost Controller
A web utility for fast-casual restaurants and pubs to organize menu items, calculate food costs per portion, and monitor menu profitability. Stage 1 introduced a static HTML/CSS mockup, Stage 2 added JavaScript data logic, and Stage 3 moved the project into a React app built with Vite. The example cost and margin figures are illustrative, not calculated data.

## Data model
| Field | Type | Notes |
| :--- | :--- | :--- |
| Recipe Name | text | required, max 100 chars |
| Available | boolean | toggled from the list, default false |
| Course Type | fixed values | Main, Dessert, Drink |
| Menu Category | relation | Pasta, Grill, Bar (shown as static options in this mockup) |
| Chef | relation | the owner of the item (from week 11) |

Sample data used across all stages:
1. Carbonara Pasta, available=true, Main, Pasta
2. Lamb Ribs with Citrus Glaze, available=false, Main, Grill
3. Craft IPA Beer, available=true, Drink, Bar

The mockup displays illustrative portion costs, menu prices, and gross margins to communicate the project goal. Those values are not part of the current data model and are not calculated or saved.

## AI usage
| Tool | Used for |
| :--- | :--- |
| ChatGPT | Generating initial CSS layout ideas and SQL schema structure |
| Gemini | Brainstorming project themes and formatting the README file |
| Copilot | Implementing the Stage 1 mockup, Stage 2 data logic, and Stage 3–5 React/Vite features |

Details per stage:
* Stage 1: Gemini was used to map the HORECA project idea to the required TW structure and draft the README. Copilot assisted with the mockup implementation and this log; see [ai-log/etapa-01.md](ai-log/etapa-01.md).
* Stage 2: Copilot assisted with translating the assignment into immutable recipe data functions and documenting their browser-console tests; see [ai-log/etapa-02.md](ai-log/etapa-02.md).
* Stage 3: Copilot assisted with creating the Vite/React application, moving the recipe data into the main component, reusing the mockup styles, and documenting verification; see [ai-log/etapa-03.md](ai-log/etapa-03.md).
* Stage 4: Copilot assisted with building reusable recipe card and list components, rendering the menu from props, and documenting verification; see [ai-log/etapa-04.md](ai-log/etapa-04.md).
* Stage 5: Copilot assisted with adding local recipe state, availability and deletion events, the responsive theme toggle, and documenting verification; see [ai-log/etapa-05.md](ai-log/etapa-05.md).

## How to run
From the repository root, run:

```sh
cd frontend
npm install
npm run dev
```

Open the local address printed by Vite (usually `http://localhost:5173`). To verify the production build, run `npm run build` from `frontend/`. Node.js 20.19+ or 22.12+ is required.

## Stage 2: data logic
Plain JavaScript in [mockup/recipes.js](mockup/recipes.js) stores the sample recipes and provides immutable functions to list, count, search, add, toggle availability, and delete recipes. The functions validate new recipe data and print grouped examples and validation messages in the browser console. This stage does not read or modify the DOM, handle events, or change the visible page.

## Stage 3: Vite and React project
The live app is in [frontend/](frontend/), built with Vite and React. The recipe data lives in `frontend/src/App.jsx`, and the page header and availability counter are calculated from that data. The Stage 1 styles are reused in `frontend/src/App.css`.

## Stage 4: components
The menu is rendered from recipe data through two reusable components: [RecipeList](frontend/src/components/RecipeList.jsx) receives the whole array and renders a card for each recipe; [RecipeCard](frontend/src/components/RecipeCard.jsx) receives one recipe and the availability/deletion callbacks through props. The list uses each recipe ID as its React key and shows an explicit empty-state message when there are no recipes. The card displays only fields in the current data model; illustrative cost, price, and margin figures are not stored or calculated.

## Stage 5: local state and events
The recipe list lives in React state in `App`. Availability checkboxes and per-recipe Delete buttons update that state immutably, and the menu counters are recalculated from the current list. A button in the header switches between light and dark themes; the initial theme follows the operating-system preference. Recipe changes and the chosen theme are held only in memory and reset on refresh. Persistence and API loading are planned for later stages.

## Status
- [x] Stage 1: static HTML/CSS mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: React components and recipe cards
- [x] Stage 5: local state and events
- [ ] Stage 6: loading data from a mock API

## Stage 1 Verification Table
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](README.md) | read |
| S1-R2 | AI usage section | [README.md](README.md) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with project data | [mockup/index.html](mockup/index.html) | open the Stage 1 mockup |
| S1-R5 | unavailable card looks different | [mockup/style.css](mockup/style.css) (`.done`) | compare the Lamb Ribs card with the others |
| S1-R6 | form and menu in 2 desktop columns, 1 under 700px | [mockup/style.css](mockup/style.css) (`.workspace-grid`, `@media`) | resize below 700 px |
| S1-R7 | visible focus, readable dark theme | [mockup/style.css](mockup/style.css) | use Tab to navigate the mockup |
| S1-R8 | Stage 1 commit pushed to GitHub | GitHub repository | pending: publish the commit and verify it appears in the history |

## Stage 2 Verification Table
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S2-R1 | JavaScript file linked and logs on page load | [mockup/index.html](mockup/index.html#L143) | open the Stage 1 mockup and browser console |
| S2-R2 | Three sample recipes with unique IDs and model fields | [mockup/recipes.js](mockup/recipes.js#L4-L26) | read |
| S2-R3 | list, find, count, search, add, toggle, and delete functions | [mockup/recipes.js](mockup/recipes.js#L28-L98) | inspect grouped console output |
| S2-R4 | add rejects empty names and invalid fixed values | [mockup/recipes.js](mockup/recipes.js#L53-L80) | inspect validation messages in console |
| S2-R5 | initial array remains unchanged after add | [mockup/recipes.js](mockup/recipes.js#L110-L111) | compare logged list lengths |
| S2-R6 | README Stage 2 section and AI log | [README.md](README.md), [ai-log/etapa-02.md](ai-log/etapa-02.md) | read |
| S2-R7 | Stage 2 commit pushed to GitHub | GitHub repository | pending: publish the commit and verify it appears in the history |

## Stage 3 Verification Table
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S3-R1 | Vite development server starts without errors | [frontend/package.json](frontend/package.json) | run `npm install`, then `npm run dev` in `frontend/` |
| S3-R2 | HORECA heading and menu counters are shown, with totals calculated from data | [frontend/src/App.jsx](frontend/src/App.jsx#L27-L50) | edit recipe data and save |
| S3-R3 | App uses the recipe data from the project README | [frontend/src/App.jsx](frontend/src/App.jsx#L1-L23) | compare with the sample data above |
| S3-R4 | Stage 1 styles are reused in React | [frontend/src/App.css](frontend/src/App.css) | open the React app and review the layout |
| S3-R5 | dependencies are ignored by Git and production build succeeds | [frontend/.gitignore](frontend/.gitignore) | run `npm run build`; check `git status` |
| S3-R6 | README Stage 3 section and AI log | [README.md](README.md), [ai-log/etapa-03.md](ai-log/etapa-03.md) | read |
| S3-R7 | Stage 3 commit pushed to GitHub | GitHub repository | pending: publish the commit and verify it appears in the history |

## Stage 4 Verification Table
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S4-R1 | Separate list and card components | [frontend/src/components/](frontend/src/components) | open folder |
| S4-R2 | Card receives one recipe through props | [RecipeCard.jsx](frontend/src/components/RecipeCard.jsx#L7-L35) | read |
| S4-R3 | List uses `map` and ID-based `key` | [RecipeList.jsx](frontend/src/components/RecipeList.jsx#L3-L15) | run the app and check the browser console |
| S4-R4 | Empty menu displays a message | [RecipeList.jsx](frontend/src/components/RecipeList.jsx#L4-L6) | temporarily set the recipes array in `App.jsx` to `[]` |
| S4-R5 | Availability changes the card appearance | [RecipeCard.jsx](frontend/src/components/RecipeCard.jsx#L8-L10) | change a sample `available` value and save |
| S4-R6 | README Stage 4 section and AI log | [README.md](README.md), [ai-log/etapa-04.md](ai-log/etapa-04.md) | read |
| S4-R7 | Stage 4 commit pushed to GitHub | GitHub repository | pending: publish the commit and verify it appears in the history |

## Stage 5 Verification Table
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S5-R1 | Recipe list is held in `useState` in `App` | [frontend/src/App.jsx](frontend/src/App.jsx) | read |
| S5-R2 | Controlled checkbox toggles availability and card styling | [RecipeCard.jsx](frontend/src/components/RecipeCard.jsx), [App.jsx](frontend/src/App.jsx) | click a checkbox or its recipe name |
| S5-R3 | Delete button removes the selected recipe accessibly | [RecipeCard.jsx](frontend/src/components/RecipeCard.jsx) | click Delete and confirm only that card disappears |
| S5-R4 | Header counters derive from the current state | [frontend/src/App.jsx](frontend/src/App.jsx) | toggle or delete recipes and watch both counters |
| S5-R5 | State changes are immutable and use functional updates | [frontend/src/App.jsx](frontend/src/App.jsx) | read; confirm updates use `map`/`filter`, not in-place mutation |
| S5-R6 | Theme button changes light/dark mode and `data-theme` on `<html>` | [frontend/src/App.jsx](frontend/src/App.jsx), [frontend/src/App.css](frontend/src/App.css) | click in both directions with either system theme |
| S5-R7 | No React console warnings; README and AI log are updated | [README.md](README.md), [ai-log/etapa-05.md](ai-log/etapa-05.md) | run `npm run lint`, `npm run build`, and inspect the browser console |
| S5-R8 | Stage 5 commit pushed to GitHub | GitHub repository | pending: publish the commit and verify it appears in the history |