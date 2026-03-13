# GitHub Pages Web App Template

A template repository for building learning-oriented web software with Gemini CLI.

Zero cost. No build step. No framework. Designed for GitHub Pages.

---

## What's in this template

```
GEMINI.md              Project identity + Gemini's standing instructions (edit this first)
SCRATCHPAD.md          Session state, milestones, open questions (living document)
DECISIONS.md           Architecture decision record (append-only log)
index.html             Starter HTML — replace placeholder content
css/styles.css         Mobile-first CSS with custom properties
js/app.js              Starter JavaScript — organized by feature area
.gemini/
  settings.json        Configures the session-start hook
  hooks/
    session-start.sh   Silently orients Gemini at the start of each session
  commands/
    milestone.md       /milestone — mark a milestone complete with values check
    decision.md        /decision — log an architectural decision
    status.md          /status   — quick project status summary
```

---

## Starting a new project

**Step 1 — Fill in GEMINI.md**

Open `GEMINI.md` and replace all `[bracketed placeholders]` with your project's specifics:
- App name and purpose
- Target audience
- What human change or learning this enables
- Your GitHub repo URL and Pages URL
- Data/auth approach (localStorage? external API? none?)

Do not change anything below the `---` divider — that section contains Gemini's standing instructions and the learning-orientation values you want preserved across every project.

**Step 2 — Fill in SCRATCHPAD.md**

In the `## Milestones` section, define M1, M2, and M3:
- Write each milestone as a user-visible capability, not a technical task
- Write acceptance criteria as things a real user could verify
- Three milestones is enough to start — add more as you go

**Step 3 — Update the Current State block**

In `SCRATCHPAD.md`, update the "Current State" block to reflect that M1 is active and what the first actions are.

**Step 4 — Push and enable GitHub Pages**

Push to GitHub. In repository Settings → Pages, set the source to your `main` branch, root directory. Your app will be live at `https://[username].github.io/[repo-name]`.

**Step 5 — Start coding**

Open a Gemini CLI session. Gemini will silently read your context from the hook and be ready to work. Just tell it what to do.

---

## How sessions work

**At session start**: The `session-start.sh` hook runs automatically. It injects your `Gemini.md` and the "Current State" section from `SCRATCHPAD.md` into Gemini's context — silently, before your first message. Gemini knows where things stand without you having to explain.

**During a session**: Gemini follows the standing instructions in `GEMINI.md`. Every feature is evaluated against the learning-orientation criteria before implementation. When Gemini marks something done, it updates `SCRATCHPAD.md`.

**At session end**: Gemini updates the "Current State" block in `SCRATCHPAD.md` and appends a session log entry. The next session starts exactly where this one left off.

---

## Slash commands

| Command | What it does |
|---|---|
| `/milestone` | Marks a milestone complete, runs learning-orientation check, updates SCRATCHPAD.md |
| `/decision` | Logs an architectural decision to DECISIONS.md in the correct format |
| `/status` | Quick summary of active milestone, next actions, and open questions |

---

## The values

Every feature built from this template is evaluated against six criteria:

1. **Does it deepen understanding?** Not just display information — invite engagement with ideas.
2. **Does it invite participation?** Ask something of the user, not just deliver content to scroll past.
3. **Does it support human agency?** Make people more capable, not more dependent.
4. **Clarity over cleverness.** The simpler implementation, every time.
5. **Accessible by default.** WCAG AA from the first line of code.
6. **Responsive from the start.** Mobile-first. Test at 375px before 1440px.

These aren't guidelines — they're standing instructions Gemini carries into every session from `GEMINI.md`. If a feature fails one of these criteria, Gemini flags it and proposes an alternative before proceeding.
