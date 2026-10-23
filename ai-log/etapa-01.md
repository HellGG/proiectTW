# AI usage log — Stage 1

## Project

Horeca Cost Controller: a static menu mockup for a restaurant or pub, focused on organizing dishes and previewing portion cost and gross margin.

## AI assistance

- Copilot was used to help translate the Stage 1 brief and the project description into the HTML structure, CSS layout, and this log.
- ChatGPT was used for initial CSS layout ideas and SQL schema structure, according to the original README; prompt and response details were not present in the workspace.
- Gemini was used to brainstorm project themes, map the HORECA idea to the TW structure, and draft/format the README, according to the original README; its prompt and response details were not present in the workspace.
- No shareable conversation URL was provided for this Copilot session.

## Copilot requests and results

The following are concise summaries of the requests and results from this implementation session, not verbatim conversation transcripts:

1. **Request:** Compare the project README with the Stage 1 PDF and adapt the assignment to the HORECA project.  
   **Result:** Identified the semantic page regions, recipe form, three sample items, two-column desktop layout, mobile breakpoint, dark theme, keyboard focus, README checklist, and per-stage AI log. The implementation was tailored to recipes, course types, and menu categories rather than copying the TaskFlow example.
2. **Request:** Build the Stage 1 interface while keeping future functionality out of scope.  
   **Result:** Added `index.html` and `style.css` only; no JavaScript or persistence. Kept the project sample items and labelled the cost/margin figures as illustrative.
3. **Request:** Preserve the instruction PDF and unrelated files until the user confirms completion.  
   **Result:** Left the PDF untouched and did not create any helper scripts.

## Scope and decisions

- Kept this stage to semantic HTML and CSS; there is no JavaScript or data persistence.
- Used the three sample menu items from the README and adapted the required three-card layout to recipes and drinks.
- Added illustrative portion-cost, menu-price, and margin figures to make the cost-control theme visible. They are mockup values, not calculated or saved data.
- Used a one-column recipe form beside a vertically stacked recipe list in a 1:2 desktop grid; the layout becomes one column at widths of 700 px or less.
- Added CSS color variables, a dark palette, and visible keyboard focus styles.

## Verification

- Open `index.html` in a browser and compare the form and three cards with the Stage 1 checklist in the README.
- Resize the viewport below 700 px to verify the single-column form-and-menu layout.
- Use Tab to verify that form controls and the button have a visible focus indicator.
