stenciljs/ (root: private, type:module, workspaces = packages/\*)
│
├── packages/
│ │
│ ├── stenciljs-tutorial ──────┐ Stencil source (authors web components)
│ │ │ + generates React wrapper source
│ │ ▼
│ ├── react-components ────────┐ compiles wrappers → dist/components.js (+ .d.ts)
│ │ (dep: ^0.0.1) │ re-exports as real React components
│ │ ▼
│ └── test-react-stencil Vite + React app that consumes react-components
│ (dep: ^0.0.1)
│
└── index.html vanilla page; loads stenciljs-tutorial's
▲ loads .esm.js loader .esm.js loader, uses <my-component> directly
└───────────────── (from stenciljs-tutorial/dist)
Dependency flow: stenciljs-tutorial → react-components → test-react-stencil
stenciljs-tutorial → index.html (runtime loader, not a dep)

- packages/stenciljs-tutorial — The source-of-truth Stencil library that authors the web components and, via reactOutputTarget, generates the React wrapper source.
- packages/react-components — Compiles the generated wrappers into dist/components.js + .d.ts and re-exports them as real React components (React as peer deps).
- packages/test-react-stencil — A Vite + React demo app that consumes react-components to prove the wrappers work in a real build.
- index.html (repo root) — A framework-free page that loads the Stencil ESM loader and uses <my-component> as a native custom element.
