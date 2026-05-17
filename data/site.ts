/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 */

export interface AcademicEntry {
  period: string;
  title: string;
  institution: string;
  location: string;
  thesis?: string;
  advisor?: string;
}

export const site = {
  url: 'https://example.com',
  meta: {
    title: 'Sebastian Castaneda | Software Engineer',
    description:
      'My personal Website',
  },
  hero: {
    name: 'Carlos Sebastian Castañeda',
    role: 'Senior Software Engineer',
    tagline: 'Startup | Fintech | Crypto | Banking | AI Enthusiast',
    contact: 'Looking to contribute in a senior engineering or technical lead role on high-impact, distributed systems.',
    avatarSrc: '/profile_v2.jpeg',
    avatarAlt: 'Carlos Sebastian Castañeda',
  },
  about: {
    paragraphs: [
      'Software Engineer with over 10 years of experience building production systems across FinTech, crypto, government, and health-tech domains.',
      {
        heading: 'My strongs',
        bullets: [
          'Strong backend foundation in Python (Django, FastAPI), AWS, and Docker',
          'Hands-on experience delivering customer-facing web applications and REST APIs end to end',
          'Full ownership of features — from system architecture and payment integrations to frontend delivery, security remediation, and cross-functional collaboration with Product, Security, and DevOps teams',
          'Fast learner who adapts quickly to new tech stacks and tooling as project needs evolve',
        ],
      },
      {
        heading: 'My main tech stack',
        techItems: ['Python', 'Java', 'Javascript', 'AWS', 'Docker', 'Opencode', 'Claude Code', 'Astro'],
      },
    ],
  },
  experiences: [
    {
      period: '2021-2026',
      title: 'Senior Software Engineer',
      company: 'Xapo Bank',
      summary:
        'Senior Backend Engineer in different company areas and teams.',
      highlights: [
        'Architected and shipped integrations with multiple FIAT and crypto payment providers using Python and AWS, enabling secure transaction processing for 10K+ customers.',
        'Built and deployed internal automation tools that reduced manual operations by around ~50%, streamlining processing workflows across banking operations.',
        'Owned the security alert pipeline for the team — reviewing and remediating dependency vulnerabilities, enforcing secret scanning, and preventing sensitive data leaks in version control and application logs.',
      ],
      tech: ['Python', 'Java', 'Docker', 'AWS', 'Javascript', 'Terraform', 'NewRelic', 'Coralogix', 'Django', 'FastAPI', 'PostgreSQL', 'MySQL', 'Redis'],
  },
    {
      period: '2018-2021',
      title: 'Senior Software Engineer',
      company: 'AccelOne',
      summary:
        'Senior Software Engineer for Xapo Bank and Seattle Children\'s Hospital, Foundation, and Research',
      highlights: [
        'Developed internal tooling for XAPO Bank (as external consultant) using Python, Flask, and MongoDB, supporting operational workflows for high-volume FIAT and cryptocurrency transaction processing.',
        'Designed and built a REST API using Node.js for a health-tech mobile application to track and manage medical procedure data, deployed on AWS.',
      ],
      tech: ['Python', 'Flask', 'Nodejs', 'MongoDB'],
    },
    {
      period: '2016-2018',
      title: 'Software Engineer',
      company: 'DevsAr',
      summary:
        'Software Engineer for Moni and Matterport',
      highlights: [
        'Built and enhanced features for Matterpor\'s customer-facing web portal using Python (Django) on the backend and JavaScript on the frontend, working on-site with the engineering team in San Francisco, CA.',
        'Implemented a 3D model cloning feature in the customer portal, allowing users to duplicate and manage spatial models directly from the web interface.',
        'Shipped customer-facing features for a high-traffic payday loan platform serving 5K+ users, built with Python (Django, Celery) on the backend and JavaScript (Marionette) on the frontend.',
        'Enhanced the internal operations dashboard, improving loan management workflows and giving the operations team better visibility into portfolio health and borrower status.',
      ],
      tech: ['Python', 'Django', 'Datadog', 'Javascript'],
    },
  ],
  academic: [
    {
      period: '2018',
      title: 'Computer Graphics, Images and Computer Vision Specialist [M.Sc.]',
      institution: 'Universidad Nacional de la Plata, Postgrado - Facultad de Informática - UNLP',
      location: 'Argentina',
      thesis: 'Low cost home video surveillance system using instant messaging and image processing',
      advisor: 'Dra. Maria Jose Abasolo',
    },
    {
      period: '2010',
      title: 'Licenciado [B.Sc.] en Informática',
      institution: 'Universidad Nacional de la Plata, Facultad de Informática - UNLP',
      location: 'Argentina',
      thesis: 'Test driven development applied to Rich Internet Applications',
      advisor: 'Dr. Gustavo Rossi',
    },
    {
      period: '2004',
      title: 'Analista de Computación',
      institution: 'Universidad Nacional de la Plata, Facultad de Informática - UNLP',
      location: 'Argentina',
    },
  ] as AcademicEntry[],
  featuredProjects: [
    {
      title: 'Lumen Studio Website',
      period: '2025',
      summary: 'Built a polished portfolio experience with accessible UI, motion-led interactions, and reusable components.',
      solution: 'Designed a modular component system with Astro and Tailwind CSS, ensuring consistent brand experience across all breakpoints.',
      impact: 'Achieved sub-1s page load metrics and 95+ Lighthouse scores through optimized asset delivery and lazy loading strategies.',
      image: 'astro-01.webp',
      imageAlt: 'Lumen Studio website showcase',
      techCategories: [
        {
          category: 'Frontend',
          items: ['TypeScript', 'Astro', 'Tailwind CSS', 'Responsive Design'],
        },
        {
          category: 'Performance',
          items: ['Asset Optimization', 'Lazy Loading', 'Image CDN'],
        },
      ],
    },
  ],
  projectArchivePage: {
    title: 'All projects',
    description: 'Project archive: dates, roles, and technologies across representative engagements.',
    intro: 'A concise archive of engagements and representative work.',
  },
  projectArchive: [
    { date: '2025', project: 'Design system rollout', role: 'Frontend', techStack: 'Astro, CSS, Storybook' },
  ],
  contact: {
    email: 'castanedacs@gmail.com',
    github: 'https://github.com/seba3c',
    linkedin: 'https://www.linkedin.com/in/sebastiancastaneda/',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];
