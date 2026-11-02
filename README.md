# NanoAxon-X Study Hub

Internal study site for Team NANOREGEN-X (Team Malaysia, International Nanotechnology Olympiad 2026, Taipei).

Live: https://irdinazulaika.github.io/NANOREGEN-X-study/

## What is inside

- 16 modules: project overview, nerve anatomy, injury biology, clinical options and competitors, scaffold design, materials (PCL, graphene nanoplatelets, peptide), electrospinning, characterisation, cell biology, conductivity rationale, toxicity and ISO 10993, regulatory pathway, the ML design tool, the demonstrator, the business case, pitch tactics, glossary.
- 90+ judge questions with model answers in ARC form (Answer, Reason, Caveat), tagged by category, difficulty and who answers first.
- Modes: Dashboard with progress, Mock jury (timed random questions with self-rating; weak ones are remembered), Quiz (MCQ built from the bank), Flashcards, searchable Question bank (printable).
- Progress is stored in the browser (localStorage) per device. No server.

## Editing content

- `js/content.js`: modules. Each has `sections` (HTML), `keyNumbers`, `traps`, `cards`.
- `js/questions.js`: question bank. Fields: `cat`, `level` (1 to 3), `owner`, `q`, `a`.
- `js/diagrams.js`: inline SVG figures keyed by module id.
- Items marked `[Team must fill ...]` or "verify" need real figures before the competition (peptide mechanism, IMARC market figure, investment ask, latest lab numbers).

Plain HTML, CSS and JavaScript. No build step. Open `index.html` locally or serve the folder.
