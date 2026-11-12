# Race Mania

Race Mania is a responsive Formula 1 dashboard built with React and Vite. It brings the 2025 season into one focused interface with race scheduling, results, driver and constructor information, and a filterable news view.

> **Note:** This is a front-end demonstration. The displayed championship data is static and is not an official Formula 1 feed.

## Features

- Race calendar with previous and upcoming rounds
- One-click `.ics` calendar download for the displayed races
- Race results table with winners, teams, lap counts, and times
- Driver lineup and constructor standings pages
- Filterable news cards by category
- Responsive navigation with a mobile menu
- Client-side routing and a custom 404 page

## Tech stack

- React 19
- React Router 7
- Vite 8
- ESLint 9 with the React Hooks and React Refresh plugins

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm 10 or newer

### Install

From the downloaded workspace folder (`D:\download\F1-website-main` on Windows):

```bash
npm install
```

The application source is in the nested `F1-website-main` directory. The workspace-level npm scripts forward commands to it automatically. You can also work directly from the application directory:

```powershell
cd .\F1-website-main
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project structure

```text
src/
├── components/     Shared navigation and footer components
├── data/           Static drivers, teams, schedule, results, and news data
├── pages/          Route-level page components and styles
├── routes/         React Router route definitions
├── services/       Data access functions
└── utils/          Shared browser utilities, including calendar export
```

## Data and assets

The current UI uses local JavaScript data modules and remote image URLs for demonstration purposes. To connect a live data provider, replace the implementations in `src/services/api.js` and keep the page-facing data shapes stable.

Remote images may be unavailable or change without notice. For production use, download appropriately licensed assets or serve them from a managed image host.

## Production build

Build the application and preview the generated output:

```bash
npm run build
npm run preview
```

The app is a single-page application. Configure the hosting provider to rewrite unknown routes to `index.html` so direct visits to `/schedule`, `/results`, and other client-side routes work correctly.

## Disclaimer

Race Mania is an independent fan project and is not affiliated with, endorsed by, or sponsored by Formula 1, the FIA, or any of the teams and drivers shown.


--MADE BY : ATHARV SRIVASTAVA --
