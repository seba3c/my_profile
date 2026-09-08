import { getCollection, type CollectionEntry } from 'astro:content';

export type Locale = 'en' | 'es';

export interface BlogPost {
  entry: CollectionEntry<'blog'>;
  slug: string;
  locale: Locale;
}

/** Parses a glob-loader entry id ("en/hello-world") into its locale + slug. */
function parseId(id: string): { locale: Locale; slug: string } {
  const [locale, ...rest] = id.split('/');
  return { locale: locale as Locale, slug: rest.join('/') };
}

/** All published (non-draft) posts for one locale, newest first. */
export async function getPostsByLocale(locale: Locale): Promise<BlogPost[]> {
  const entries = await getCollection('blog', (entry) => {
    const parsed = parseId(entry.id);
    return parsed.locale === locale && !entry.data.draft;
  });

  return entries
    .map((entry) => ({ entry, slug: parseId(entry.id).slug, locale }))
    .sort((a, b) => b.entry.data.pubDate.valueOf() - a.entry.data.pubDate.valueOf());
}

/** A single published post, or undefined if missing/draft. */
export async function getPostBySlug(locale: Locale, slug: string): Promise<BlogPost | undefined> {
  const posts = await getPostsByLocale(locale);
  return posts.find((post) => post.slug === slug);
}

/** Which locale(s) have a published post for this slug — drives the LanguageSwitcher. */
export async function getAvailableLocalesForSlug(slug: string): Promise<Locale[]> {
  const [en, es] = await Promise.all([getPostBySlug('en', slug), getPostBySlug('es', slug)]);
  return [en && 'en', es && 'es'].filter((locale): locale is Locale => Boolean(locale));
}
