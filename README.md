# Horeca Cost Controller
A web utility for fast-casual restaurants and pubs to organize menu items, calculate food costs per portion, and monitor menu profitability. The first stage is a static HTML/CSS mockup; its example cost and margin figures are illustrative, not calculated data.

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
| Copilot | Translating the Stage 1 brief into the static HTML/CSS mockup and documenting the implementation |

Details per stage:
* Stage 1: Gemini was used to map the HORECA project idea to the required TW structure and draft the README. Copilot assisted with the mockup implementation and this log; see [ai-log/etapa-01.md](ai-log/etapa-01.md).
* Stage 2: Copilot assisted with translating the assignment into immutable recipe data functions and documenting their browser-console tests; see [ai-log/etapa-02.md](ai-log/etapa-02.md).

## How to run
Open [index.html](index.html) in a browser, then open the browser console (F12) to see the Stage 2 data-logic examples. No build step, server, npm, or Node.js is required.

## Stage 2: data logic
Plain JavaScript in [recipes.js](recipes.js) stores the sample recipes and provides immutable functions to list, count, search, add, toggle availability, and delete recipes. The functions validate new recipe data and print grouped examples and validation messages in the browser console. This stage does not read or modify the DOM, handle events, or change the visible page.

## Status
- [x] Stage 1: static HTML/CSS mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project

## Stage 1 Verification Table
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](README.md) | read |
| S1-R2 | AI usage section | [README.md](README.md) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with project data | [index.html](index.html) | open the page |
| S1-R5 | unavailable card looks different | [style.css](style.css) (`.done`) | compare the Lamb Ribs card with the others |
| S1-R6 | form and menu in 2 desktop columns, 1 under 700px | [style.css](style.css) (`.workspace-grid`, `@media`) | resize below 700 px |
| S1-R7 | visible focus, readable dark theme | [style.css](style.css) | use Tab to navigate the page |
| S1-R8 | Stage 1 commit pushed to GitHub | GitHub repository | pending: publish the commit and verify it appears in the history |

## Stage 2 Verification Table
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S2-R1 | JavaScript file linked and logs on page load | [index.html](index.html#L143) | open page and browser console |
| S2-R2 | Three sample recipes with unique IDs and model fields | [recipes.js](recipes.js#L4-L26) | read |
| S2-R3 | list, find, count, search, add, toggle, and delete functions | [recipes.js](recipes.js#L28-L98) | inspect grouped console output |
| S2-R4 | add rejects empty names and invalid fixed values | [recipes.js](recipes.js#L53-L80) | inspect validation messages in console |
| S2-R5 | initial array remains unchanged after add | [recipes.js](recipes.js#L110-L111) | compare logged list lengths |
| S2-R6 | README Stage 2 section and AI log | [README.md](README.md), [ai-log/etapa-02.md](ai-log/etapa-02.md) | read |
| S2-R7 | Stage 2 commit pushed to GitHub | GitHub repository | pending: publish the commit and verify it appears in the history |