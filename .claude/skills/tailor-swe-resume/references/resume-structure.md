# Resume structure & layout

A tailored SWE resume, top to bottom. Every section pulls from the master resume;
tailoring decides order, emphasis, and what gets cut to fit one page.

## Section order (default)

1. **Header** — Name, one-line title (optional), phone, email, city/region,
   LinkedIn, GitHub/portfolio. No full street address. Make links plain text or
   simple hyperlinks, not buttons or images.
2. **Summary** (optional, 1–2 lines) — Only if it earns its space. Name the
   target role and the 2–3 strengths most relevant to *this* job. Skip it for
   new-grad resumes where space is tight; a good skills section does more.
3. **Skills** — Grouped and ordered to mirror the posting's stack. See below.
4. **Experience** — Reverse-chronological. Most job-relevant role's bullets get
   the most space and the sharpest framing.
5. **Projects** — Especially important for new-grad / early-career, or when
   personal projects demonstrate the job's stack better than work history does.
6. **Education** — Degree, school, graduation date, relevant coursework only if
   early-career. Move above Experience only for brand-new grads.
7. **Optional** — Certifications, publications, open-source, only if relevant.

## Skills section

- Group by category the reader cares about: e.g. **Languages**, **Frameworks &
  Libraries**, **Tools & Platforms**, **Databases**. Match the categories to what
  the job emphasizes.
- Within each group, order so the job's required keywords come first.
- List only skills the user has actually used. If the master resume marks
  proficiency levels, you can prioritize stronger skills, but don't annotate the
  resume with "beginner/expert" — it reads as hedging.
- Use the posting's exact term for a real skill ("PostgreSQL" not "Postgres" if
  that's what they wrote).

## Experience bullets

- 3–5 bullets for the most relevant role, fewer for older/less relevant ones.
- Lead each role's bullet list with the accomplishment closest to the target job.
- See `bullet-writing.md` for the impact pattern.

## One-page discipline

Most SWE candidates — including senior — fit one page. Two pages only for genuinely
long or senior backgrounds where the second page still earns attention. To fit:

- Cut the least job-relevant real content first (that's why the master resume
  holds everything and the tailored copy holds a subset).
- Trim older roles to 1–2 bullets.
- Drop the summary before you drop substance.

## Formatting for both humans and parsers

- **Single column.** Multi-column layouts and text boxes confuse ATS parsers.
- **Standard headings** — "Experience", "Skills", "Education". Clever names
  ("Where I've Made Impact") can be missed by parsers keyed to standard labels.
- **Real text, never images**, for any content that must be read (no skills-as-a-
  graphic, no name in a logo).
- **Consistent, simple** date format and alignment. Reverse chronological.
- **No headers/footers** for critical info — some parsers skip them.
- Standard fonts, adequate margins, enough white space to skim.
