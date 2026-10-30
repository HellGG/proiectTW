# AI usage log — Stage 3

## Project

Horeca Cost Controller: a Vite/React application for organizing restaurant and pub menu recipes.

## AI assistance

- Copilot was used to map the Stage 3 guide to the existing project, scaffold the React application, migrate the README sample data, reuse the Stage 1 styles, and document the implementation.
- No shareable conversation URL was provided for this Copilot session.

## Copilot requests and results

The following are concise summaries of the requests and results, not verbatim conversation transcripts:

1. **Request:** Analyze the README and Stage 3 PDF, then adapt the guide to the HORECA project.  
   **Result:** Identified the required `mockup/` and `frontend/` folders, React/Vite setup, data-backed summary, temporary JSON list, reused CSS, production build, README checklist, and AI log.
2. **Request:** Implement the stage while preserving the previous work and instruction PDF.  
   **Result:** Moved the Stage 1 and Stage 2 files into `mockup/`, created a React/Vite application, and kept the Stage 3 PDF untouched.

## Scope and decisions

- Preserved the previous static page and data-logic files in `mockup/` for the earlier stage requirements.
- Created the live React application in `frontend/`. The recipe sample data is declared above `App` so React does not recreate the fixed data on each render.
- Calculated the menu item total and available-recipe count from the sample data. The recipe list is displayed as formatted JSON until Stage 4.
- Copied the Stage 1 stylesheet into `frontend/src/App.css` and adapted the workspace grid to one column for this single-panel stage.
- Removed Vite/React demo assets and styles. The actual recipe cards and interactive form are deferred to their respective later stages.
- Set the document title to “Horeca Cost Controller” and kept the document language English to match the existing interface copy.

## Verification

- `npm run lint` and `npm run build` passed in `frontend/`.
- `npm audit` reported zero vulnerabilities.
- The Vite page and transformed React module both returned HTTP 200; all three README recipe names and the availability calculation were present in the module.
- `frontend/node_modules/` and `frontend/dist/` are excluded from Git.
