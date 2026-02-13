# Toppira — Frontend

> Frontend application for **Toppira**, a reminder and todo management platform built with **React** and **TypeScript**. Designed for production-grade performance, maintainability, and future **AI** integration.

---

## 📋 Overview

Toppira Frontend is a modern single-page application that powers the user interface for reminder and task management. It follows a **feature-based architecture**, leverages strong typing with **TypeScript**, and uses a cutting-edge tech stack. The codebase is structured for scalability and ready for advanced features such as AI-powered scheduling and smart notifications.

---

## ✨ Features

| Area                    | Description                                                                                               |
| ----------------------- | --------------------------------------------------------------------------------------------------------- |
| 🏠 **Landing**          | Marketing home page with hero, feature sections, reminder modes, and FAQ                                  |
| 🔐 **Auth**             | Login and signup forms with email/password plus Google OAuth entry points (ready for backend integration) |
| 🛡️ **Protected routes** | `RequireAuth` route guard for dashboard and authenticated areas                                           |
| 🌐 **RTL & i18n**       | Full Persian (RTL) support with Dana font and `direction="rtl"`                                           |
| 📱 **Responsive**       | Mobile-first design with header drawer for small screens and full desktop navigation                      |
| 🧩 **UI library**       | Ant Design 6 for forms, layouts, and interactive components                                               |
| 📲 **PWA-ready**        | Web manifest, Apple touch icons, and theme-color for installability                                       |

---

## 🏗️ Technical Highlights

### ⚡ Build & Runtime

- **Vite 7** — Fast HMR, optimized production builds, native ESM
- **React 19** — Latest React APIs and improvements
- **TypeScript** — Strict mode, `verbatimModuleSyntax`, `noUnusedLocals`, `noUnusedParameters` for maximum type safety
- **React Compiler (babel-plugin-react-compiler)** — Automatic memoization; fewer manual `useMemo`/`useCallback` optimizations
- **Tailwind CSS v4** — Utility-first styling with `@tailwindcss/vite` integration

### 🧩 Architecture & Structure

- **Feature-based structure** — Separation by domain (`auth`, `home`, `common`) rather than by technical layer
- **Shared layouts** — `PublicLayout` (header + footer) and `DashboardLayout` (sidebar + content) for consistent UX
- **Route protection** — `RequireAuth` wrapper with `useLocation` for redirects while preserving intended destination
- **Typed configuration** — Header, footer, and FAQ data as typed TypeScript modules for type-safe content

### 🎨 Design & Accessibility

- **RTL support** — `direction="rtl"` on Ant Design ConfigProvider and sections; `dir="rtl"` on HTML root
- **Custom fonts** — Dana (primary) and Operator Mono (footer) with WOFF2 and `font-display: swap`
- **Responsive patterns** — Ant Design Grid (`Col`/`Row`) with breakpoints for mobile and desktop
- **Drawer navigation** — Collapsible header drawer on mobile with nested links

### 🔧 Code Quality

- **ESLint** — With React Hooks and React Refresh rules
- **Prettier** — With Tailwind class sorting
- **cspell** — Spell checking including Persian (fa-ir)
- **Strict TypeScript** — Strict and extra checks for safer refactoring

### 🚀 Production Readiness

- **PWA metadata** — Manifest, favicons, Apple touch icons, theme-color
- **Build pipeline** — TypeScript check (`tsc -b`) before Vite build for early error detection
- **Modular styling** — Tailwind layers (`@layer base`, `@layer components`) for maintainable CSS

---

## 📦 Prerequisites

- **Node.js** (LTS recommended)
- **pnpm** or **npm**

---

## 🚀 Running the Project

- **Install dependencies:**

  ```bash
  pnpm install
  ```

  or `npm install`

- **Start dev server:**

  ```bash
  pnpm dev
  ```

  or `npm run dev`

- **Build for production:**

  ```bash
  pnpm build
  ```

- **Preview production build:**
  ```bash
  pnpm preview
  ```

---

## 📜 Developer Commands

| Command        | Purpose                                        |
| -------------- | ---------------------------------------------- |
| `pnpm dev`     | Start development server with HMR              |
| `pnpm build`   | Run TypeScript check and Vite production build |
| `pnpm lint`    | Run ESLint and fix auto-fixable issues         |
| `pnpm format`  | Format code with Prettier                      |
| `pnpm spell`   | Run spell check on `src/**`                    |
| `pnpm preview` | Serve production build locally                 |

---

## 📐 Conventions

- Keep features in their own folders (`features/auth`, `features/home`, etc.).
- Put shared layouts, components, types, and data in `shared/`.
- Use typed interfaces for data structures (e.g. `HeaderItem`, `FooterSection`).
- Use `RequireAuth` for any route that requires authentication.
- Prefer Ant Design components for consistency; extend with Tailwind when needed.
- Use `dir="rtl"` and Dana font for Persian content.

---

## 🗺️ Roadmap

- Full integration with backend auth (JWT, Google OAuth).
- Reminder and todo CRUD in the dashboard.
- API client layer and centralized error handling.
- **AI** integration for smart scheduling and categorization.
- Notification settings and reminder delivery UI.

---

For questions or contributions, please reach out to the project maintainer.
