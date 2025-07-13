# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`

Development server runs on http://localhost:3000

## Architecture Overview

This is a **Next.js 15.3.5** project using the **App Router** architecture with **TypeScript** and **Tailwind CSS v4**.

### Key Technologies
- **Next.js 15.3.5** with App Router
- **React 19** (latest)
- **TypeScript 5**
- **Tailwind CSS v4** (latest major version)
- **Turbopack** for development builds

### Project Structure
- `src/app/` - App Router directory containing pages, layouts, and route handlers
- `src/app/layout.tsx` - Root layout with font optimization using Geist fonts
- `src/app/page.tsx` - Home page component
- `src/app/globals.css` - Global styles with Tailwind directives and CSS custom properties
- `public/` - Static assets (images, icons, logos)

### Import Conventions
- Use `@/` alias for imports from `src/` directory (configured in tsconfig.json)
- Example: `import Component from '@/components/Component'`

### Styling Approach
- **Tailwind CSS v4** with inline theme configuration in globals.css
- CSS custom properties for theming (`--background`, `--foreground`)
- Built-in dark mode support using `prefers-color-scheme`
- Use `next/image` for optimized image loading

### TypeScript Configuration
- Strict mode enabled
- Path mapping with `@/*` → `./src/*`
- Bundler module resolution
- Next.js TypeScript plugin integrated

## Important Notes

- **App Router**: This uses Next.js App Router (not Pages Router) - components are Server Components by default
- **No testing framework** currently configured
- **Font optimization**: Uses `next/font/google` with Geist Sans and Geist Mono variable fonts
- **Turbopack**: Development server uses Turbopack for faster builds via `--turbopack` flag