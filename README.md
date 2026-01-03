# Habit Tracker 🧭

**A lightweight habit-tracking SPA built with Next.js and Tailwind CSS — supports time- and quantity-based habits, interactive SVG progress visuals, and local persistence for fast, offline-first usage.**

---

## Demo

- Click a habit on the **Habits** page to open the **Add Habit** flow and set a target (minutes for time-based habits, count for quantity-based). 
- Time habits feature a start/pause countdown and percentage ring. Amount habits increment progress on tap.

---
## Features ✨

- Predefined habit templates (Exercise, Drink water, Read books, etc.)
- Filter by type: **All / Time / Quantity**
- Time-based tracking with start/pause timer and SVG progress ring
- Amount-based tracking with tap-to-increment SVG progress ring and completion state
- Persistent storage using browser `localStorage` (offline-first)
- Responsive, mobile-first UI with clear iconography

---

## Technologies 🧰

**Next.js (App Router)** • **React** • **Tailwind CSS + PostCSS** • **lucide-react** • **axios** • **localStorage** • **JavaScript/Node** • **ESLint** • **SVG progress components**

---

## Project Structure (high-level)

- `src/app/Habits/` — Habits listing and filters
- `src/app/Add-Habit/` — Add habit flow (reads query params and saves to `localStorage`)
- `src/Components/` — `TimeProgressCircle`, `AmountProgressCircle`, and other UI components
- `src/app/lib/` — API helper (`axios`) for potential backend integration

---

## Getting Started (local)

Requirements: Node.js (16+) and npm

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Open http://localhost:3000

Useful scripts:

- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run start` — run production build
- `npm run lint` — run ESLint

---

## How to Use

1. Open **Habits** page — choose a filter (All / Time / Quantity).
2. Tap a habit card to open the Add Habit modal/page. The selected habit’s label, type, and icon are passed via query params.
3. Enter a target (minutes or count) and **Save** — the habit is persisted to `localStorage`.
4. For time habits, tap the progress circle to start/pause the timer. For amount habits, tap to increment progress.

---

## Next Steps / Roadmap 🚀

- Add backend persistence & user authentication (sync across devices)
- Add streaks, notifications, and analytics
- Improve accessibility (a11y) and add test coverage

---

## Contributing

Contributions and improvements are welcome — open issues or PRs with a clear description of the change.

---

## License

MIT

---

If you’d like, I can also add a short one-line LinkedIn summary or a ready-to-copy `README` badge section (build status, license).
