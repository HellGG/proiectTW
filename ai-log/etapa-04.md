# AI usage log — Stage 4

## Project

Horeca Cost Controller: reusable React components render the menu from recipe data in the Vite application.

## AI assistance

- Copilot was used to map the Stage 4 component, props, list-key, and empty-state requirements to the existing HORECA recipe model.
- No shareable conversation URL was provided for this Copilot session.

## Copilot requests and results

The following are concise summaries of the requests and results, not verbatim conversation transcripts:

1. **Request:** Analyze the README and Stage 4 PDF, then adapt the guide to the existing project.  
   **Result:** Identified the need for separate recipe-card and recipe-list components, props, an ID-based React key, and an empty-list message.
2. **Request:** Replace the raw JSON preview with a reusable recipe list.  
   **Result:** Added `RecipeList` and `RecipeCard` components and rendered the existing sample recipes from `App.jsx`.
3. **Request:** Preserve the instruction PDF and defer interactivity to its planned stage.  
   **Result:** Left `TW_Etapa4_Ghid.pdf` untouched and did not add events, state, toggles, or deletion controls.

## Scope and decisions

- `RecipeList` receives the recipe array through props and renders one `RecipeCard` for each entry with `map` and `key={recipe.id}`.
- `RecipeCard` receives a single recipe through props and only reads the recipe fields; it does not access the array or change data.
- The card uses the README model fields: name, course type, menu category, availability, and ID. Course labels are presentation text derived from the fixed course types.
- Availability selects the existing available/unavailable visual styles. No event handlers or local state were added; interactive controls are deferred to Stage 5.
- The list displays an explicit message when empty, and the header count remains calculated from the recipe array.
- Illustrative costs, prices, margins, and recipe descriptions remain outside the data model.

## Verification

- `npm run lint` and `npm run build` passed in `frontend/`; `npm audit` reported zero vulnerabilities.
- The browser rendered all three README recipes as cards with two available and one unavailable, without console warnings or errors.
- Server-rendered checks confirmed that adding an entry to the list produces a card, changing `available` selects the unavailable styling, and an empty array shows the empty-state message with zero counters.
- `frontend/node_modules/` and `frontend/dist/` remain excluded by `frontend/.gitignore`.
