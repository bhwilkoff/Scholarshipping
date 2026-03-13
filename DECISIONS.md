# Architecture Decision Record

> Log every significant technical or design decision here.
> This file is **append-only** — never edit or remove past decisions.
> A decision is significant if a future session would benefit from knowing why it was made.

**Format for each entry:**

```
## Decision NNN — [Short title]
**Date**: YYYY-MM-DD
**Decision**: [What was decided, in one sentence]
**Rationale**: [Why this was the right choice for this project]
**Alternatives considered**: [What else was on the table]
**Trade-offs**: [What we gain, what we give up]
```

---

## Decision 001 — Vanilla HTML/CSS/JS, no framework

**Date**: [2026-03-13]
**Decision**: Use plain HTML, CSS, and JavaScript with no build step and no framework.
**Rationale**: GitHub Pages hosts static files directly. No framework means no build pipeline, no dependencies to update, no abstraction between the code and the browser. The project remains readable and modifiable by anyone with basic web knowledge, which aligns with the learning-orientation principle of clarity over cleverness.
**Alternatives considered**: React, Vue, Svelte — all require a build step or CDN dependency; Astro — adds complexity for a single-page app
**Trade-offs**: We lose component reuse patterns and reactive state management. We gain zero setup friction, full control over output, and a codebase that doesn't rot when npm packages break.

## Decision 002 — Dark-First Modern Aesthetic (Glassmorphism)

**Date**: [2026-03-13]
**Decision**: Adopt a dark-themed, glassmorphic UI with vibrant gradients and smooth scale transitions.
**Rationale**: To appeal to a younger audience (High School/College students) and differentiate from sterile, table-heavy scholarship sites. The "social media object" feel makes scholarships feel like interactive content rather than just data points.
**Alternatives considered**: Light theme, standard material design.
**Trade-offs**: Slightly more complex CSS for backdrop filters and nested gradients.

## Decision 003 — Collaborative Prompting Strategy

**Date**: [2026-03-13]
**Decision**: The AI prompt generator explicitly instructs the AI NOT to write the final essay, but to ask questions and provide an outline.
**Rationale**: Aligns with the "Support human agency" and "Invites participation" principles. It ensures the applicant learns and grows through the application process rather than just consuming an AI-generated response.
**Alternatives considered**: Direct essay generation prompts.
**Trade-offs**: Requires more effort from the user, but yields a more authentic and higher-quality result.

## Decision 004 — Verified "Seed" vs. Bulk Import

**Date**: [2026-03-13]
**Decision**: Prioritize a smaller, manually verified "seed" dataset (~100 entries) over a massive, unverified scraping import (~1000+ entries).
**Rationale**: The user explicitly requested "100% accuracy" and "verified links." Scraping 1000 links without a dedicated QA team/process guarantees broken links and frustration. A high-quality seed builds trust; a large, broken database destroys it.
**Alternatives considered**: Scraping large public lists without checking.
**Trade-offs**: Lower initial volume, but significantly higher user trust and data integrity.

## Decision 005 — Transition to Kind & Supportive Design

**Date**: [2026-03-13]
**Decision**: Transition the UI from a dark-themed "sterile" database to a light-themed, encouraging, and supportive scholarship platform using Plus Jakarta Sans and Glassmorphism.
**Rationale**: Students applying for scholarships are often stressed and overwhelmed. A light, airy, and supportive design reduces cognitive load and feels more like a helpful partner than a cold database.
**Alternatives considered**: Maintaining dark mode as primary; adopting a more "academic/serious" traditional aesthetic.
**Trade-offs**: Light mode requires more careful contrast management for accessibility; some "gamer/tech" aesthetic appeal may be lost in favor of broader accessibility and warmth.
