# AI usage log — Stage 6

## Project

Horeca Cost Controller: a React menu that loads its recipe data from a mock REST API.

## AI assistance

- Copilot analyzed Stage 6 requirements and adapted the sample TaskFlow workflow to the existing HORECA recipe model.
- No shareable conversation URL was provided for this Copilot session.

## Copilot requests and results

The following are concise summaries of the requests and results, not verbatim conversation transcripts:

1. **Request:** Read the Stage 6 PDF and identify the implementation requirements.  
   **Result:** Planned `json-server` setup, `db.json`, a centralized `api.js`, loading/success/error states, environment configuration, README documentation, and a verification checklist.
2. **Request:** Implement Stage 6 without replacing the existing menu components or theme behavior.  
   **Result:** Added six recipe records to `db.json`, pinned `json-server@0.17.4`, added the `api` script, created `api.js` and `.env.example`, and moved recipe loading into `App` with `useEffect`.
3. **Request:** Document and verify the stage.  
   **Result:** Updated the Stage 6 README section and checklist and added this AI log.

## Scope and decisions

- The mock API resource is `recipes`, matching the application's data model.
- `App` starts with an empty recipe array and owns loading and error state. `fetchRecipes` is the only HTTP entry point and verifies `response.ok`.
- The effect uses an `ignore` flag and cleanup function so late responses do not update state after unmount.
- Availability toggles and deletion remain local state changes in Stage 6, as required by the guide; they are reset on refresh until Stage 7.
- The API address is read from `VITE_API_URL` with a fallback to `http://localhost:3001`.
- Loading and error styles support both light and dark themes.

## Verification

- `npm install --save-dev json-server@0.17.4` was run in `frontend/`.
- Run `npm run api` and open `http://localhost:3001/recipes`.
- Run `npm run dev` in a second terminal and open the Vite address.
- Run `npm run lint` and `npm run build` after the implementation.
- Stop the API and refresh the app to verify the explicit error state; restart it to verify successful loading.
