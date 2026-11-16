export const blogStrings = {
  en: {
    languageLabel: 'Blog language',
    switchLanguage: { en: 'Read in English', es: 'Read in Spanish' },
    unavailableLanguage: { en: 'Not available in English', es: 'Not available in Spanish' },
    archiveTitle: 'Blog',
    archiveIntro: "Thoughts on software engineering, AI-assisted development, and things I'm learning.",
    breadcrumbLabel: 'Breadcrumb',
    backToWriting: 'Return to latest writing',
    backToBlog: 'Back to blog',
    readMore: 'Read more',
    publishedLabel: 'Published',
    updatedLabel: 'Updated',
    readingTimeLabel: 'min read',
    emptyState: 'No posts yet — check back soon.',
  },
  es: {
    languageLabel: 'Idioma del blog',
    switchLanguage: { en: 'Leer en inglés', es: 'Leer en español' },
    unavailableLanguage: { en: 'No disponible en inglés', es: 'No disponible en español' },
    archiveTitle: 'Blog',
    archiveIntro: 'Reflexiones sobre ingeniería de software, desarrollo asistido por IA, y cosas que voy aprendiendo.',
    breadcrumbLabel: 'Ruta de navegación',
    backToWriting: 'Volver a los últimos artículos',
    backToBlog: 'Volver al blog',
    readMore: 'Leer más',
    publishedLabel: 'Publicado',
    updatedLabel: 'Actualizado',
    readingTimeLabel: 'min de lectura',
    emptyState: 'Todavía no hay publicaciones — vuelve pronto.',
  },
} as const;

export type BlogLocale = keyof typeof blogStrings;
