# Candidate Pulse

Recruiter interview-analysis tool. Hebrew RTL.

**Live demo:** https://candidate-pulse-production.up.railway.app

## Routes
- `/` — Dashboard with 5 candidates (Guy highlighted)
- `/candidates/guy-grassiano` — Full candidate brief with verbatim quotes from the real call transcript + expandable transcript
- `/compare` — 5-candidate comparison matrix

## Stack
- Next.js 16 (App Router, fully static output)
- React 19
- Tailwind v4 (CSS-based theme tokens)
- Heebo + Inter (Hebrew + Latin)
- Deployed on Railway

## Pipeline
Recording → Transcript (Dwight, Guy's personal agent) → Structured analysis

Orchestrated by Guy Grassiano · Built with Claude Code + Codex

## The PDF report

`/public/guy-grassiano-report.pdf` is a placeholder. The Export PDF buttons (detail page + compare page) download it directly. Replace this file with the real recruiter brief before sharing.
