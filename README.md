# My personal profile

A responsive Astro portfolio based on [projects-portfolio-template
](https://github.com/masoudsoleymani/projects-portfolio-template)

You can visit it (https://bit.ly/sebas3c)

## Experience logos

Configure logos in `data/site.ts`, in `site.experiences`. Store images in
`public/logos/experiences/` and reference them with `/logos/experiences/…` paths.
The supplied logos are lossless WebP images at 400 × 400 pixels.

```ts
logo: { src: '/logos/experiences/accelone.webp', alt: 'AccelOne' },
clientLogos: [
  { src: '/logos/experiences/xapo-bank.webp', alt: 'Xapo Bank (client)' },
  { src: '/logos/experiences/seattle-childrens.webp', alt: 'Seattle Children’s (client)' },
],
```

Each experience accepts an optional main `logo` and up to two `clientLogos`,
each with a `src` and descriptive `alt`. Clients appear only with a main logo.
Omit `clientLogos` or use `[]` when there are none; omit `logo` to retain the
original layout. Main logos display at 64 × 64 pixels and clients at 28 × 28,
including on mobile. Two clients with an 8-pixel gap align with both edges of
the main logo. Images retain their proportions and backgrounds, with a 1-pixel
shaded border on all edges, fading clockwise from the strongest top edge through
the right and bottom to the faintest left edge for a subtle raised effect. Borders
are included in the display dimensions to preserve alignment.
Reuse an existing image path when a company appears in several experiences.
To replace a logo, overwrite its WebP file or update its `src` in the data.

## 📝 License
This project is licensed under the [MIT License](LICENSE)
