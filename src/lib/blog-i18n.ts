export const blogStrings = {
  en: {
    archiveTitle: 'Blog',
    archiveIntro: "Thoughts on software engineering, AI-assisted development, and things I'm learning.",
    backToBlog: 'Back to blog',
    readMore: 'Read more',
    publishedLabel: 'Published',
    updatedLabel: 'Updated',
    readingTimeLabel: 'min read',
    emptyState: 'No posts yet — check back soon.',
  },
  es: {
    archiveTitle: 'Blog',
    archiveIntro: 'Reflexiones sobre ingeniería de software, desarrollo asistido por IA, y cosas que voy aprendiendo.',
    backToBlog: 'Volver al blog',
    readMore: 'Leer más',
    publishedLabel: 'Publicado',
    updatedLabel: 'Actualizado',
    readingTimeLabel: 'min de lectura',
    emptyState: 'Todavía no hay publicaciones — vuelve pronto.',
  },
} as const;

export type BlogLocale = keyof typeof blogStrings;
