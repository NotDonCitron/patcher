# Track Spec: Wiederherstellung der Basis-Struktur und MVP-Startseite

## 1. Goal
Restore the missing core application files (`App.tsx`, etc.) to get the React build running again, and implement the initial "Über Mich" (About Me) page in German, following the defined Product Guidelines.

## 2. Core Requirements
*   **Restoration:** Recreate `src/App.tsx` and ensure `src/main.tsx` mounts it correctly.
*   **Routing:** Set up basic routing (using `react-router-dom` if available, or simple state for MVP) to support future expansion.
*   **"About Me" Page:**
    *   **Content:** German text derived from `product.md` (Focus: AI Engineer, Homeoffice, Health, Reliability).
    *   **Design:** Modern, clean, dark-mode compatible (using Tailwind CSS).
    *   **Components:** Hero section with name/title, "Über mich" text block, Contact button placeholder.
*   **Technical:** Ensure `npm run dev` and `npm run build` pass without errors.

## 3. Design & UX
*   **Style:** Minimalist, professional, dark mode preference.
*   **Responsiveness:** Mobile-first approach with Tailwind utility classes.
*   **Language:** All user-facing text in German.

## 4. Acceptance Criteria
*   [ ] The application starts (`npm run dev`) and builds (`npm run build`) without errors.
*   [ ] The landing page displays the title "AI Engineer & System Developer".
*   [ ] The "Über mich" section accurately reflects the Product Guide's content.
*   [ ] Visual style aligns with the Product Guidelines (Modern Tech).
