# Getting past the ATS

Most mid-to-large companies run resumes through an Applicant Tracking System
before a human sees them. The ATS parses the file into structured fields and
scores or filters on keyword matches against the job. A resume that reads well to
a person but parses badly can be rejected before anyone reads it. Design for both.

## How keyword matching works

- Matching is often **literal**. "React.js" and "React" may be treated as
  different tokens; "CI/CD" and "continuous integration" may not be linked. So use
  the **exact terms from the posting** for skills the user genuinely has.
- Both the **skills section and the bullets** are scanned. A keyword carries more
  weight when it appears in context (a bullet describing real work) than in a bare
  list, so where a required skill is central, make sure it shows up in an
  experience or project bullet, not only in the skills list.
- Acronyms and spelled-out forms are safest when you include **both** the first
  time it matters (e.g. "Amazon Web Services (AWS)"), when the user truly has it.

## What parsers choke on

Avoid these — they cause fields to be dropped or scrambled:

- **Multi-column layouts and tables** for content. A two-column resume often reads
  as jumbled interleaved text to a parser.
- **Text inside images or graphics.** Skill bars, logos with the name, icons in
  place of words — all invisible to the parser.
- **Headers and footers** holding contact info or anything important; some
  parsers skip them entirely.
- **Nonstandard section headings.** Stick to "Experience", "Skills", "Education",
  "Projects" so the parser maps content to the right field.
- **Exotic fonts or heavy design.** Clean and standard parses reliably.

## File format

- **PDF** is safe with modern ATS *if* it's real selectable text (not a scanned
  image) and single-column. When a posting explicitly asks for `.docx`, give
  `.docx`.
- Name the file clearly: `Firstname-Lastname-Resume.pdf`.

## The balance

Don't over-optimize into keyword stuffing — a human reads it next, and a resume
that's an obvious list of buzzwords with no substance loses them. The aim is a
resume that a parser reads cleanly *and* a person finds compelling: real
accomplishments, described in the job's vocabulary, in a layout the machine can
follow.
