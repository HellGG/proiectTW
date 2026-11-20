# AI usage log — Stage 8

## Project

Horeca Cost Controller: a routed React menu with a shared layout, recipe detail pages, and component CSS Modules.

## AI assistance

- Copilot analyzed the Stage 8 guide and adapted task-oriented routing and CSS structure to the HORECA recipe model.
- No shareable conversation URL was provided for this Copilot session.

## Copilot requests and results

1. **Request:** Read the Stage 8 PDF and identify routing, layout, detail-page, 404, and CSS Module requirements.
   **Result:** Added React Router, a shared layout, menu/about/not-found routes, a `/recipes/:id` detail route, and detail-page loading/error handling.
2. **Request:** Migrate the existing Stage 7 CRUD implementation without losing test attributes.
   **Result:** Moved list/form state into `RecipesPage`, converted card, form, list, layout, and page styles to CSS Modules, and preserved the Stage 7 `data-testid` elements.
3. **Request:** Document and verify Stage 8.
   **Result:** Updated the README status and verification table and added this log.

## Scope and decisions

- The detail route uses the resource name from `tw.json`: `/recipes/:id`.
- Card titles became links with `data-testid="item-link"`; Stage 7 item, toggle, delete, form, loading, empty, and error attributes remain present.
- `Layout` owns the header, navigation, outlet, and footer.
- `NavLink` marks the active route, with `end` on the menu link.
- CSS Modules are used for component and page-specific styles; `index.css` contains variables and shared base/panel classes.

## Verification

- Run `npm run lint` and `npm run build`.
- Run `npm run api` and open the Vite app.
- Verify menu, about, detail, unknown-ID, and unknown-URL navigation.
