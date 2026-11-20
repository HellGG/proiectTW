# AI usage log — Stage 7

## Project

Horeca Cost Controller: a React menu whose recipes can be created, toggled, and deleted through a mock REST API.

## AI assistance

- Copilot analyzed the Stage 7 guide and adapted the task-oriented example to the existing recipe model.
- No shareable conversation URL was provided for this Copilot session.

## Copilot requests and results

1. **Request:** Read the Stage 7 PDF and identify the CRUD, validation, layout, and automated verification requirements.
   **Result:** Added a controlled recipe form, JSON API requests, server-first add/toggle/delete handlers, `tw.json`, and the required `data-testid` labels.
2. **Request:** Implement the stage while preserving the HORECA UI and theme behavior.
   **Result:** Created `RecipeForm`, extended `api.js` with a shared `request` function and POST/PATCH/DELETE helpers, and moved the existing card/list operations to server-backed updates.
3. **Request:** Document and verify Stage 7.
   **Result:** Updated the README status and verification table and added this AI log.

## Scope and decisions

- The form title is mapped to the `name` field in `db.json`; course type and menu category are controlled selects.
- `name` is required and limited to 100 characters. Values are trimmed before submission.
- A new recipe is created with `available: true`. The form clears only after `onAdd` resolves successfully.
- Add, toggle, and delete update state only after the API confirms the operation.
- Toggle and delete failures leave the list visible and show a page-level error. Add failures remain visible beside the form and preserve entered text.
- Test labels use the exact names required by the Stage 7 guide, including `form-title`, `item`, `item-toggle`, `item-title`, and `item-delete`.

## Verification

- Run `npm run lint` and `npm run build`.
- Run `npm run api` and `npm run dev` in separate terminals.
- Verify POST by adding a recipe, PATCH by toggling availability, and DELETE by removing a recipe.
- Stop the API and verify form/text/error behavior.
