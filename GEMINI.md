# Soccer Dashboard GUI

## Project Overview
This is a professional sports analytics dashboard built with **Next.js 16** and **React 19**. It provides real-time tactical insights, player performance tracking, and match analytics through a high-performance, responsive interface.

The project was refactored from a Vite-based application to the Next.js App Router to benefit from server-side rendering, optimized routing, and enhanced performance.

### Tech Stack
- **Framework:** Next.js 16.1.6 (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4) with PostCSS
- **UI Components:** Radix UI, Material UI (@mui/material)
- **Charts:** Recharts
- **Animations:** Framer Motion (motion)
- **Icons:** Lucide React

## Project Structure
- `src/app/`: Next.js App Router pages and layouts.
  - `layout.tsx`: Root layout with global navigation.
  - `page.tsx`: Live Dashboard (Main entry point).
  - `players/`: Player Stats page.
  - `tactical/`: Tactical View page.
  - `reports/`: Match Reports page.
- `src/app/components/`: Feature-specific components (e.g., `PitchView`, `KPICard`).
  - `ui/`: Reusable UI primitives (Buttons, Cards, Dialogs, etc.).
- `src/styles/`: Global styles, themes, and font configurations.
- `conductor/`: Refactoring documentation and project roadmap.
- `guidelines/`: Development standards and guidelines.

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
The server will start at `http://localhost:3000`.

### Production Build
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## Development Conventions

### Component Architecture
- **Client Components:** Use the `"use client"` directive at the top of files that utilize React hooks (state, effects) or browser-only APIs.
- **Server Components:** Default to Server Components for data fetching and static layouts where possible.
- **UI Components:** Prefer the established components in `src/app/components/ui/` for consistent styling.

### Navigation
- Use `next/link` for internal navigation.
- The `Navigation` component in `src/app/components/Navigation.tsx` handles the main sidebar.

### Styling
- Use Tailwind CSS for most styling needs.
- Global variables and themes are defined in `src/styles/theme.css` and `src/styles/index.css`.

### Charts and Data Visualization
- Utilize **Recharts** for data visualization, ensuring they are wrapped in Client Components if interactivity or window-dependent calculations are needed.
