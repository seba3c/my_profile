---
name: Sebastian Castañeda Portfolio
description: A working engineer's terminal, with real work leading and normal navigation.
colors:
  primary: "#b4ed88"
  primary-hover: "#d2ffb0"
  terminal-amber: "#efc076"
  ink: "#0c110f"
  surface: "#121b16"
  text: "#e8eee9"
  muted: "#a6b5ac"
  soft-text: "#d4ded7"
  rule: "#2b3a30"
  control-border: "#344435"
  strong-border: "#53634f"
  selection-surface: "#263525"
typography:
  display:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "clamp(36px, 4.5vw, 64px)"
    lineHeight: 1.15
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "clamp(23px, 3vw, 32px)"
    fontWeight: 400
    letterSpacing: "-0.03em"
  body:
    fontFamily: "'Inter Variable', sans-serif"
    fontSize: "17px"
    lineHeight: 1.75
  reading:
    fontFamily: "InterVariable, Inter, system-ui, sans-serif"
    fontSize: "17px"
    lineHeight: 1.85
  label:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "13px"
rounded:
  control: "3px"
  frame: "4px"
spacing:
  compact: "16px"
  standard: "24px"
  wide: "32px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "14px 18px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.ink}"
  button-secondary:
    textColor: "{colors.text}"
    padding: "12px 0"
  command-trigger:
    textColor: "{colors.primary}"
    rounded: "{rounded.control}"
    padding: "9px 12px"
  project-frame:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.frame}"
  command-input:
    textColor: "{colors.text}"
    padding: "20px"
  command-dialog:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.frame}"
    width: "600px"
---

# Design System: Sebastian Castañeda Portfolio

## Overview

**Creative North Star: "The Working Engineer's Terminal"**

A modern terminal gives this portfolio its code-first character: ink surfaces, green actions, fine rules and monospace headings. Normal navigation and readable prose make the work easy to inspect without requiring visitors to understand terminal commands.

Project text and professional identity lead; small real project screenshots provide secondary visual evidence. Preserve the owner's identity and a small portrait; use actual work rather than invented product imagery. Amber emphasizes the supporting hero focus line alongside green actions.

This document extracts the implemented source, including the terminal overrides in `src/styles/global.css`. Browser visual QA was unavailable because automatic approval review reached its usage limit. These are source-derived decisions, not a claim of rendered visual validation.

**Key Characteristics:**
- Code-first identity with readable Inter body copy.
- Real project imagery and restrained portrait treatment.
- Ink surfaces, green actions and fine dividing rules.
- Visible final content before progressive enhancement.
- Searchable global commands alongside ordinary navigation.

## Colors

The palette is dark, muted and green-tinted, with a clear pale-green action accent.

### Primary
- **Terminal Green**: primary contact action, interactive emphasis, focus outline and terminal punctuation.
- **Bright Terminal Green**: primary-button hover feedback.

### Secondary
- **Terminal Amber**: supporting hero focus text; use selectively for emphasis while green remains the action color.

### Neutral
- **Terminal Ink**: page base and text on filled green actions.
- **Raised Ink**: project frames, mobile menu and command dialog.
- **Pale Terminal Text**: main text; **Soft Terminal Text**: secondary light text; **Muted Sage Text**: labels and supporting copy.
- **Fine Rule**, **Control Border**, **Strong Border**: progressive boundary contrast for section separators, framed controls and the modal edge.
- **Selected Forest**: hovered and focused command results.

### Named Rules
**The Action Green Rule.** Reserve filled green surfaces for actionable emphasis; keep project imagery secondary to titles, descriptions and actions.

## Typography

**Display Font:** JetBrains Mono with monospace fallback.
**Body Font:** Inter Variable with sans-serif fallback.
**Label/Mono Font:** JetBrains Mono.

**Character:** Monospace headings express an engineer's working environment; Inter makes summaries and long articles comfortable to read. Space Grotesk remains imported legacy infrastructure, not the terminal heading choice.

### Hierarchy
- **Display:** identity heading, with the frontmatter scale; the narrow layout uses a fixed size (40px).
- **Headline:** section headings, regular weight, with a terminal path prefix and a fine continuation rule.
- **Title:** project headings use regular monospace (24px).
- **Body:** hero summary uses the body token and a compact measure (54ch); general body copy uses relaxed leading (1.8).
- **Reading:** blog prose uses the reading token with a configured prose measure (68ch).
- **Label:** navigation and action labels use the mono label token; thumbnail frames have no extra labels or overlay controls.

## Layout

The shell centers a shared content area (1280px maximum) with desktop side padding (32px). The top navigation is compact, horizontal and sticky, with an ink surface and stacking level (40). Home opens with a single left-aligned identity column (56rem maximum), without a project screenshot. Project rows are left-aligned at a maximum of 64rem. From 768px, a 240px image column sits to the left of the grouped text with a 24px gap. Sections use generous separation (80px) and thin rules rather than repeated floating cards.

Below the navigation threshold (1200px), navigation moves to a native disclosure menu and the hero remains one column. Below the small threshold (640px), page gutters become narrower (20px), archive table entries become block rows. Below 768px, each project stacks title, image, description, then metadata and action with 16px gaps. Preserve visible field values in this mobile archive treatment. Dialog width remains constrained to the viewport with side clearance (32px total), a bounded height (75dvh) and internal scrolling.

## Elevation & Depth

Ordinary content is flat: transparent panels, tonal surfaces and border contrast establish hierarchy. Project images sit inside restrained frames. Only the command dialog uses a deep shadow and dimmed backdrop to establish modal separation.

### Shadow Vocabulary
- **Command overlay** (`0 24px 80px #0008`): modal separation only; backdrop uses translucent black (`#000b`).

### Named Rules
**The Visible Content Rule.** Final page content is visible before JavaScript runs; never make essential content depend on a reveal animation.

## Shapes

Use subtly squared controls and panels with the control radius, and slightly softer screenshot frames and dialogs with the frame radius. Dividers stay thin (1px). Portraits are small squares with softened corners, not dominant circular hero illustrations. Tags inherit the compact control shape rather than a pill silhouette.

## Components

### Buttons
Clear and restrained. The primary action pairs Terminal Green with Terminal Ink, uses the primary padding and brightens on hover. Secondary actions use an understated bottom rule. Command triggers use an outlined control. Global keyboard focus is a green outline (2px) offset from the target (5px).

### Chips
Compact outlined labels use green text, a transparent surface and the control radius. Preserve their link behavior when they navigate.

### Cards / Containers
Project frames use Raised Ink and a Control Border; screenshots show their complete content at their intrinsic aspect ratio, with width: 100%, height: auto and text alternatives. Project previews have a 240px maximum width, constrained to the available space, without a fixed height or internal padding. Use the ink background, a fine border and visible keyboard focus; no eye overlay, glow or enlargement. General evidence panels remain transparent, with bottom dividers and no shadow. Preserve `loading="lazy"` and `decoding="async"` on image assets.

### Inputs / Fields
The command search field is full width, transparent and divided from its results by a fine border. Its search label is accessible independently of the placeholder. Use the shared focus treatment. Empty results appear as a status message.

### Navigation
From 1200px, monospace horizontal links show Projects, Experience, About, Tech Stack, Certifications, Blog and Contact. The same destinations appear in global commands. Section links clear the sticky header, and active location is synchronized across desktop and mobile menus. Short viewports allow internal scrolling of the mobile menu. Native mobile disclosure provides touch access to the same destinations and CV. The command trigger is progressively revealed after initialization; ordinary navigation remains usable without it. Active location is communicated with `aria-current`.

### Global Command Palette
A focused searchable native modal complements normal navigation. Open by visible button or Command/Ctrl+K; focus moves into search. Arrow keys navigate filtered results, Enter activates, Escape closes and focus returns to the opener. Results include navigation, archives, CV, contact, real projects and the AI twin. Opening it closes competing overlays.

The dialog expands briefly (200ms, `cubic-bezier(.16,1,.3,1)`); reduced motion removes that animation and disables smooth scrolling. Essential text is never typed in or withheld while animation runs.

## Do's and Don'ts

### Do:
- **Do** use real project screenshots and preserve accurate professional identity and project authorship.
- **Do** keep headings monospace and long reading copy in Inter.
- **Do** retain ordinary navigation, contact, CV and bilingual blog access alongside commands.
- **Do** show final content before enhancement and honor reduced motion immediately.
- **Do** keep narrow archive entries readable with their field values visible.

### Don't:
- **Don't** substitute generated project mockups for real evidence.
- **Don't** turn the terminal metaphor into a prerequisite for navigation.
- **Don't** use decorative reveal effects that hide content before JavaScript.
- **Don't** claim browser visual validation from source inspection alone.


### Package Explorer / Tech Stack

`TechStack.astro` renders the five categories and forty technologies from `site.techStack`, with labels in `site.techStackExplorer`. The existing terminal ink, green actions and amber folders replace colored pills. Native details start open so the complete content remains available without JavaScript.

A progressively revealed grep-style search matches technology or category names without case or accent sensitivity. Matching categories open during search, and clearing restores the previous expansion states. Counts and an empty state communicate results. Arrow keys navigate category summaries; native Enter/Space expands them; Escape clears search. List content uses a three-column desktop, two-column tablet and one-column narrow-phone layout.

The only local motion is a 220ms reveal on directory opening and a rotating caret, disabled for reduced motion. Source checks and independent static review passed; rendered responsive and runtime browser verification remains pending because browser access was blocked.

### Language boundaries

Global desktop/mobile navigation and Commands always use English, including accessible names, and declare lang=en within Spanish pages. Only the blog listing, articles and their local controls follow the blog locale. First visits default to English regardless of browser language; an explicit saved blog preference is respected. Direct EN/ES URLs retain their content language.
