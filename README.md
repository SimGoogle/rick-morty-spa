# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Rick & Morty SPA

A **React single-page application (SPA)** that fetches and displays characters from the [Rick & Morty API](https://rickandmortyapi.com/documentation).  
Built using **React, TypeScript, React Query, TanStack Router, and React Table**.

---

## Features

| Feature | Description |
|---------|-------------|
| Character List | Displays a paginated list of Rick & Morty characters. |
| Pagination | Navigate through pages using Prev / Next buttons. |
| State Persistence | Keeps the current page state across refreshes and URL sharing. |
| Refresh Button | Reloads the currently visible page. |
| Character Details | Click a character row to view detailed information on a dedicated route. |
| Responsive Table | Interactive table with images and character information using React Table. |

---

## Tech Stack

- **Frontend:** React + TypeScript  
- **Routing:** TanStack Router  
- **Data Fetching & State Management:** React Query  
- **Table:** React Table (TanStack Table)  
- **Build Tool:** Vite  
- **Styling:** CSS / Tailwind (optional)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/rick-morty-spa.git
cd rick-morty-spa

---

## Install dependencies

- npm install

---

## Start the development server

- npm run dev

---
