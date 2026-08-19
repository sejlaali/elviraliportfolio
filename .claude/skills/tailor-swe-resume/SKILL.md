---
name: tailor-swe-resume
description: >-
  Tailor a software engineer's resume to a specific job posting so it aligns
  tightly with what that role is asking for. Use this whenever the user shares a
  job description, job link, or job requirements and wants their resume adjusted,
  customized, aligned, optimized, or "made to match" — including phrasings like
  "update my resume for this role", "make my resume fit this job", "tailor this
  to the posting", or "help me apply to this". Built specifically for software
  engineering roles (frontend, backend, full-stack, mobile, ML, platform, etc.)
  and for getting past both ATS keyword filters and a human reviewer.
---

# Tailor SWE Resume

Take a **master resume** (the user's complete, truthful career record) plus a
**target job posting**, and produce a resume tailored to that specific job. The
goal is a resume that a recruiter skimming for six seconds — and the automated
Applicant Tracking System (ATS) that reads it first — both see as an obvious
match, without ever inventing anything the user didn't actually do.

The core idea: a strong tailored resume is a *selection and framing* problem, not
a writing-from-scratch problem. Everything in the tailored resume must trace back
to something real in the master resume. What changes between applications is
**which** experiences you surface, **which order** you put them in, and **what
vocabulary** you describe them with — matched to the job.

## The one rule that matters most: never fabricate

This skill reorders, rephrases, and re-emphasizes real experience. It does not
invent employers, titles, dates, degrees, or accomplishments, and it does not
claim skills the user hasn't actually used. If the job wants something the master
resume doesn't support, that's a gap to surface honestly to the user — not a
blank to fill in. Overstating gets people fired in the first month and burns real
bridges; a truthful resume that's sharply framed beats an impressive lie every
time. When tempted to add a keyword the user has no basis for, flag it instead:
"This job wants Kubernetes and I don't see it in your background — do you have any
exposure to it, or should we leave it out?"

## Inputs you need

Before tailoring, make sure you have both pieces. Ask for whatever's missing.

1. **The master resume.** Look first at `assets/master-resume.md` inside this
   skill — that's where the user is meant to keep their complete record. If it
   exists and is filled in, use it. If it's missing or still a template, ask the
   user to point you at their resume file or paste it. The master resume should
   be the *superset*: every role, project, and skill, including things a given
   application would cut. You select from it; you can't select what isn't there.
2. **The job posting.** The user will paste the text, or give a URL. If it's a
   URL, fetch it. Extract the real requirements from it (see below) rather than
   guessing from the job title.

If you don't know the **output format** (Markdown, Word `.docx`, or PDF), the
**target specialization** (frontend / backend / full-stack / ML / etc.), or the
**seniority** the user is aiming for, and it isn't obvious from context, ask. For
`.docx` output, use the `docx` skill; for PDF, use the `pdf` skill.

## Workflow

### 1. Decode the job posting

Read the posting like a hiring manager wrote it and a machine will parse it.
Pull out, explicitly:

- **Hard requirements** — languages, frameworks, tools, years, degrees. These are
  the ATS keywords and the recruiter's checklist. Capture the *exact wording* the
  posting uses ("React.js" vs "React", "REST APIs" vs "RESTful services"), because
  ATS keyword matching is often literal.
- **Nice-to-haves** — the "bonus", "preferred", "a plus" items.
- **What the role actually does day-to-day** — the responsibilities. This tells
  you which of the user's experiences to lead with.
- **Signals of level and culture** — "own", "mentor", "greenfield", "fast-paced",
  "0-to-1", "at scale". These shape tone and which accomplishments resonate.

Produce a short internal list of the top ~10–15 keywords/phrases the tailored
resume should hit *if the user's real experience supports them*.

### 2. Map the master resume against the job

For each requirement, find the strongest supporting evidence in the master
resume. This mapping is the heart of the work. Three outcomes per requirement:

- **Direct hit** — the user has it; surface it prominently, using the posting's
  vocabulary where truthful (if they wrote "Node.js" and the user's resume says
  "Node", align to "Node.js").
- **Adjacent** — the user has something close (e.g. job wants Vue, user knows
  React). Keep the real skill; don't relabel it as the thing they don't have. You
  can note transferability in framing, not by lying.
- **Gap** — no support. Leave it out and, if it's a hard requirement, tell the
  user so they can decide.

### 3. Assemble the tailored resume

Follow the structure in `references/resume-structure.md` for section order,
bullet formatting, and ATS-safe layout rules. In brief:

- **Reorder to front-load relevance.** The most job-relevant role, project, and
  skills go highest. Within a role, the most relevant bullets go first.
- **Rewrite bullets in impact form** — action verb + what you did + technology +
  measurable result. Pull real metrics from the master resume; never invent
  numbers. See `references/bullet-writing.md` for the pattern and examples.
- **Tune the skills section** to mirror the posting's stack, listing only real
  skills, ordered so the job's keywords appear first.
- **Sharpen the summary** (if used) into one or two lines that name the target
  role and the two or three most relevant strengths for *this* job.
- **Keep it to one page** for most SWE candidates (two only for genuinely senior
  or extensive backgrounds). Cut the least-relevant real content to fit — that's
  what the master resume is for.

### 4. Show your work

After producing the tailored resume, give the user a short **change summary**:

- Which requirements from the posting are strongly covered, and where.
- Which are **gaps** — requirements you couldn't support from the master resume —
  so they can decide whether to address them.
- Any keywords you deliberately left out because there was no truthful basis.

This is what lets the user trust the output and decide what to do about gaps. It's
as important as the resume itself.

## A note on ATS

Many applications are filtered by software before a human sees them. That rewards
literal keyword matches and punishes fancy layouts (multi-column tables, text in
images, headers/footers, unusual section names) that parsers mangle. Favor a
clean single-column layout, standard section headings ("Experience", "Skills",
"Education"), and the posting's own phrasing for real skills. `references/ats.md`
has the specifics on what to do and avoid.

## Reference files

- `references/resume-structure.md` — section order, layout, one-page discipline,
  ATS-safe formatting.
- `references/bullet-writing.md` — the impact-bullet pattern with SWE examples.
- `references/ats.md` — how ATS parsing works and how to stay readable to it.
- `assets/master-resume.md` — the user's master resume (fill this in once; reuse
  for every application).
