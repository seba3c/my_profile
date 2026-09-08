/**
 * Resolves a nav-link href against BASE_URL, handling both in-page anchors
 * ("#about") and real routes ("/blog") without producing a double slash
 * when BASE_URL already ends in "/".
 */
export function resolveNavHref(href: string): string {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return href.startsWith('#') ? `${import.meta.env.BASE_URL}${href}` : `${base}${href.replace(/^\//, '')}`;
}
