# Portfolio for Lokesh L — AI/ML Engineer

A professional, recruiter-friendly portfolio modeled on the reference (Azmi Saleem). Clean editorial typography, minimal palette, generous whitespace, fully responsive, with one tasteful Three.js visual accent (so it stays elegant, not gimmicky).

## Visual direction
- Light theme, off-white background (`#fafaf9`), near-black ink text, single subtle accent (deep indigo or emerald — Emerald Prestige feel, recruiter-safe).
- Typography: large bold display (Space Grotesk / Inter Tight) for headings, Inter for body. Heavy weights, tight tracking — same energy as the reference.
- Subtle period/dot after section titles ("Lokesh L.", "What I build.") to echo the reference's signature.
- Sticky top nav: Home · About · Projects · Experience · Contact + Resume button.
- Stats strip (years exp, projects, clients, education) below the hero, identical pattern to reference.

## Three.js accent
- A lightweight `react-three-fiber` canvas behind the hero name: slowly rotating low-poly wireframe (icosahedron or particle cloud) in the accent color at low opacity. Disabled on `prefers-reduced-motion` and on small screens (static fallback) for performance.
- No heavy 3D scenes elsewhere — keeps the site fast and "professional", not flashy.

## Pages / routes (TanStack file-based)
- `/` — Hero (name, role, availability pill, CTAs: View projects, Download résumé, Get in touch), 3D accent, stats strip, short "Core stack" grid.
- `/about` — Longer professional summary, education, leadership, certifications.
- `/projects` — Image Caption Generator + work-derived case studies (RAG system, Multi-agent automation, Text-to-SQL pipeline, PDF extraction) as cards with tech tags.
- `/experience` — Timeline: TCS (AI Engineer, Jul 2024–Present) and OEConnection (Intern, 2023) with bullet impact metrics.
- `/contact` — Email, phone, LinkedIn, GitHub, location (Bengaluru). Simple mailto-based form.

Each route gets its own `head()` with unique title + description + og tags.

## Content (pulled from résumé)
- Hero tagline: "AI/ML Engineer building production-grade LLM, RAG, and multi-agent systems."
- Stats: `2+ yrs @ TCS`, `~25% retrieval accuracy gain`, `~30% manual-effort reduction`, `M.Tech VIT + IIT-M Data Science`.
- Core stack groups: AI/ML (LLMs, RAG, NLP, Multi-Agent, CV), Frameworks (LangChain, TensorFlow, HF Transformers, scikit-learn), Cloud & Data (Azure, Cosmos DB, FAISS, Pinecone, Chroma, SQL), Languages (Python, R, Java, C/C++), MLOps (Docker, CI/CD, REST APIs, Git).

## Technical notes
- Stack: React 19 + TypeScript + TanStack Start (already set up) + Tailwind v4 + `three` + `@react-three/fiber` + `@react-three/drei` + `framer-motion` for tasteful fade/slide-in.
- Design tokens added to `src/styles.css` (oklch); no hardcoded colors in components.
- Résumé PDF copied to `public/Lokesh_L_Resume.pdf` for the Download button.
- Responsive: mobile-first, hamburger nav under `md`, 3D canvas hidden < `md`.
- SEO: per-route meta, semantic landmarks, single H1 per page, alt text everywhere.

## Out of scope
- No backend / Lovable Cloud (static portfolio).
- No blog/CMS, no contact-form backend (mailto only).
- No dark mode toggle unless you ask for it.

Approve to build, or tell me to swap accent color, add dark mode, or change which projects to feature.
