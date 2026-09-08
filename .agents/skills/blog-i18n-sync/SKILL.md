---
name: blog-i18n-sync
description: Spell-check and fix a bilingual blog post, then create or update its English/Spanish counterpart so both stay in sync. Use when asked to "sync blog translation", "check spelling on this post", "update the Spanish/English version", or given a path under src/content/blog/en or src/content/blog/es.
---

# Blog i18n Sync

Given the path to one blog article in this repo's bilingual content collection,
spell-check and fix that article, then bring its English/Spanish counterpart
into sync — creating it if it doesn't exist yet.

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

6. **Report** a short summary: which spelling fixes were made in the source, and
   whether the counterpart was created or updated, listing every file path touched.
