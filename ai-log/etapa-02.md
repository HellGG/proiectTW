# AI usage log — Stage 2

## Project

Horeca Cost Controller: browser-console data logic for managing menu recipes while keeping the Stage 1 interface visually unchanged.

## AI assistance

- Copilot was used to translate the Stage 2 assignment into recipe-specific JavaScript functions, review the README data model, and document implementation and verification.
- No shareable conversation URL was provided for this Copilot session.

## Copilot requests and results

The following are concise summaries of the requests and results, not verbatim conversation transcripts:

1. **Request:** Analyze the project README and Stage 2 PDF, then adapt the required steps to the HORECA project.  
   **Result:** Identified the required recipe data array, immutable operations, validation, browser-console examples, README checklist, and AI log.
2. **Request:** Implement the stage without changing the visible Stage 1 interface.  
   **Result:** Added `recipes.js`, linked it from `index.html`, and kept all data operations separate from the DOM and event handling.
3. **Request:** Preserve the instruction PDF and unrelated helper files until completion is confirmed.  
   **Result:** Left `TW_Etapa2_Ghid.pdf` untouched and created no helper scripts.

## Scope and decisions

- Stored the three README sample items with unique numeric IDs, availability, course type, and menu category.
- Used the available course types and menu categories as fixed valid values for this stage. Chef assignment remains out of scope until its later project stage.
- Added immutable functions for listing names, counting available recipes, searching recipe names and fixed labels case-insensitively, adding, toggling availability, and deleting.
- Validated trimmed recipe names, the 100-character limit, course type, and menu category before adding. New recipes default to unavailable, as specified in the README.
- Kept the illustrative cost, price, and margin figures out of the data model.
- Loaded the script without DOM access or event handling; the page appearance remains unchanged.

## Verification

- Open `index.html` and inspect the grouped output in the browser console (F12).
- Confirm the examples demonstrate listing, availability count, case-insensitive search, immutable add, availability toggle, deletion, and validation failures.
- Check that adding leaves the original sample array at three recipes.
