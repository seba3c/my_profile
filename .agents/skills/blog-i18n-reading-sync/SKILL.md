---
name: blog-i18n-reading-sync
description: Spell-check and fix a bilingual blog post, sync its English/Spanish counterpart, and compute/update its reading time. Use when asked to "sync blog translation", "check spelling on this post", "update the Spanish/English version", "add reading time", or given a path under src/content/blog/en or src/content/blog/es.
---

# Blog i18n Reading Sync

Given the path to one blog article in this repo's bilingual content collection,
spell-check and fix that article, bring its English/Spanish counterpart
into sync — creating it if it doesn't exist yet — and compute each file's
reading time.

## Background

Posts live in `src/content/blog/en/<slug>.md` and `src/content/blog/es/<slug>.md`.
Two files are considered translations of each other purely because they share the
same filename in the two locale directories (see `src/lib/blog.ts`). There is no
`lang` or `translationKey` frontmatter field — **never invent one**; it isn't part
of the schema in `src/content.config.ts` and nothing reads it.

Frontmatter schema (`src/content.config.ts`):
- `title` (string, required)
- `description` (string, required)
- `pubDate` (date, required)
- `updatedDate` (date, optional)
- `draft` (boolean, default `false`)
- `tags` (string array, default `[]`)
- `readingTime` (number, optional — minutes, computed by this skill)
- `canonicalUrl` (url, optional)

## Workflow

1. **Resolve input.** Take the given article path. Derive `locale` (`en` or `es`)
   from the parent directory name and `slug` from the filename (without `.md`).

2. **Spell-check the source file.** Read it and fix spelling, missing-accent, and
   grammar mistakes in both the frontmatter (`title`, `description`) and the body,
   in the article's own language. Apply fixes directly with Edit. Do not change
   meaning, tone, tags, dates, or Markdown structure — only correct errors. If
   nothing is wrong, make no edit.

3. **Locate the counterpart** at `src/content/blog/<other-locale>/<slug>.md`
   (same filename, sibling locale directory).

4. **If the counterpart exists**, update it so its content matches the
   (now spell-checked) source:
   - Translate any new or changed passages into the counterpart's language.
   - Preserve wording already correct in that language rather than
     retranslating the whole file from scratch.
   - Keep `pubDate`, `tags`, `draft`, and `canonicalUrl` aligned with the source
     unless the counterpart's values look intentionally different.

5. **If the counterpart doesn't exist**, create it fresh:
   - Translate `title`, `description`, and the full body into the target language.
   - Copy `pubDate`, `tags`, `draft`, and `canonicalUrl` from the source.
   - Use the exact same filename as the source so the site's filename-based
     pairing (`getAvailableLocalesForSlug` in `src/lib/blog.ts`) picks it up
     automatically.
   - Satisfy the required schema fields (`title`, `description`, `pubDate`).

6. **Compute reading time for each file.** After both the source and its
   counterpart have their final content (post spell-check, post translation),
   compute `readingTime` independently for each file:

   a. Take the file's body only — everything after the closing `---` of the
      frontmatter. Do not count the frontmatter itself.

   b. Strip Markdown syntax that isn't prose before counting words:
      - Remove heading markers (`#`, `##`, ...) but keep the heading text.
      - Remove emphasis/strong markers (`*`, `_`, `` ` ``) but keep the
        enclosed text.
      - For links and images (`[text](url)` / `![alt](url)`), keep only the
        visible `text`/`alt` and drop the URL.
      - Drop code fences (` ``` ... ``` `) and their contents entirely — code
        isn't prose a reader "reads" at reading-comprehension speed.
      - Drop standalone punctuation-only lines (e.g. `---` horizontal rules).

   c. Count the remaining whitespace-separated words.

   d. Compute `readingTime = ceil(wordCount / 200)` (200 words per minute),
      with a minimum value of `1`. Round up, never down — a 210-word post is
      2 minutes, not 1.

   e. Add or update the `readingTime` field in that file's frontmatter as a
      bare number (no quotes, no "min" suffix — e.g. `readingTime: 4`).
      Place it immediately after `tags` and before `canonicalUrl`, matching
      field order in `src/content.config.ts`. If the field already exists
      with a stale value, overwrite it; if the newly computed value is
      unchanged, leave the file as-is.

7. **Report** a short summary: which spelling fixes were made in the source,
   whether the counterpart was created or updated, the computed `readingTime`
   for each file, and list every file path touched.
