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

export interface ProjectArchiveEntry {
  date: string;
  project: string;
  description?: string;
  role: string;
  techStack: string;
  link?: string;
}

export interface CertificationArchiveEntry {
  name: string;
  issuer: string;
  date: string;
  credentialLink?: string;
}

export const site = {
  url: 'https://example.com',
  meta: {
    title: 'Sebastian Castaneda | Software Engineer',
    description:
      'My personal website',
  },
  hero: {
    name: 'Carlos Sebastian Castañeda',
    nickname: 'Sebastian Castañeda',
    role: 'Senior Software Engineer',
    tagline: 'Startup | Fintech | Crypto | Digital Banking | AI | BTC',
    contact: 'Valencia, Spain',
    avatarSrc: '/profile_v2.jpeg',
    avatarAlt: 'Carlos Sebastian Castañeda',
  },
  about: {
    paragraphs: [
      'Software Engineer with over 10 years of experience building production systems across FinTech, crypto, government, and health-tech domains.',
      {
        heading: 'My strengths',
        bullets: [
          'Strong backend foundation in Python (Django, FastAPI), AWS, and Docker',
          'Hands-on experience delivering customer-facing web applications and REST APIs end to end',
          'Full ownership of features — from system architecture and payment integrations to frontend delivery, security remediation, and cross-functional collaboration with Product, Security, and DevOps teams',
          'Fast learner who adapts quickly to new tech stacks and tooling as project needs evolve',
        ],
      },
    ],
  },
  techStack: [
    {
      category: 'Languages & Frameworks',
      color: 'emerald',
      items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Django', 'FastAPI', 'Flask', 'Spring Boot', 'Nodejs', 'Astro'],
    },
    {
      category: 'Data & Infrastructure',
      color: 'orange',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'AWS', 'Terraform', 'Docker', 'Kubernetes', 'Git'],
    },
    {
      category: 'Observability & DevOps',
      color: 'amber',
      items: ['New Relic', 'Datadog', 'Sentry', 'PagerDuty', 'GitHub Actions', 'Coralogix'],
    },
    {
      category: 'Tools & AI',
      color: 'purple',
      items: ['Postman', 'JIRA', 'Confluence', 'Figma', 'GitHub Copilot', 'Claude Code', 'OpenCode', 'Gemini', 'Codex'],
    },
  ],
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
      tech: ['Python', 'Java', 'Docker', 'AWS', 'JavaScript', 'Terraform', 'NewRelic', 'Coralogix', 'Django', 'FastAPI', 'PostgreSQL', 'MySQL', 'Redis'],
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
        'Built and enhanced features for Matterport\'s customer-facing web portal using Python (Django) on the backend and JavaScript on the frontend, working on-site with the engineering team in San Francisco, CA.',
        'Implemented a 3D model cloning feature in the customer portal, allowing users to duplicate and manage spatial models directly from the web interface.',
        'Shipped customer-facing features for a high-traffic payday loan platform serving 5K+ users, built with Python (Django, Celery) on the backend and JavaScript (Marionette) on the frontend.',
        'Enhanced the internal operations dashboard, improving loan management workflows and giving the operations team better visibility into portfolio health and borrower status.',
      ],
      tech: ['Python', 'Django', 'Datadog', 'JavaScript'],
    },
  ],
  academic: [
    {
      period: '2018',
      title: 'Computer Graphics, Images and Computer Vision Specialist [M.Sc.]',
      institution: 'Universidad Nacional de la Plata, Postgrado - Facultad de Informática - UNLP',
      location: 'Argentina',
      thesis: '',
      advisor: '',
    },
    {
      period: '2010',
      title: 'Licenciado [B.Sc.] en Informática',
      institution: 'Universidad Nacional de la Plata, Facultad de Informática - UNLP',
      location: 'Argentina',
      thesis: '',
      advisor: '',
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
      title: 'Mint',
      period: '2026',
      summary: 'Audits your legacy CSS and generates a clean, exportable design system from the chaos.',
      role: 'Collaborator',
      link: 'https://github.com/nujovich/mint',
      techStack: ['Typescript', 'CSS'],
    },
  ],
  projectArchivePage: {
    title: 'All projects',
    description: 'Project archive: dates, roles, and technologies across representative engagements.',
    intro: 'A concise archive of engagements and representative work.',
  },
  projectArchive: [
    { date: '2026', project: 'Criptils', description: 'A simple python library to work with crypto and fiat amounts. Initially implemented as an experiment to test the Pypi flows to build and publish a Python package. Currently in beta.', role: 'Owner', techStack: 'Python, tox, ruff, uv', link: 'https://github.com/seba3c/cryptils' },
  ] as ProjectArchiveEntry[],
  featuredEvents: [
    {
      name: 'VCLTechFest 26',
      location: 'Valencia, Spain',
      date: 'May 23, 2026',
      description: 'VLCTechFest is a day of talks by and for the technology communities of the Valencian Community. An event to learn, be inspired and network in an open and collaborative environment.',
      role: 'Attendee',
      eventLink: 'https://vlctechfest.org/en/',
      activityLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7464570974085238784/',
    },
  ],
  eventArchivePage: {
    title: 'Events Archive',
    description: 'Conferences, workshops, and meetups I have participated in.',
    intro: 'A chronological list of industry events, conferences, and workshops I have attended or spoken at over the years.',
  }, 
  eventArchive: [
    {
      date: '2026',
      event: 'VCLTechFest 26',
      description: 'VLCTechFest is a day of talks by and for the technology communities of the Valencian Community. An event to learn, be inspired and network in an open and collaborative environment.',
      location: 'Valencia, Spain',
      role: 'Attendee',
      eventLink: 'https://vlctechfest.org/en/',
      activityLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7464570974085238784/',
    },
  ],
  certifications: [
    {
      name: 'Claude Code in Action',
      issuer: 'Anthropic',
      date: 'Mar 2026',
      credentialId: 'r6w53zwcez5p',
      credentialLink: 'https://verify.skilljar.com/c/r6w53zwcez5p',
    },
  ],
  certificationArchivePage: {
    title: 'Certification Archive',
    description: 'All certifications and credentials earned over the years.',
    intro: 'A complete archive of professional certifications, courses and bootcamps.',
  },
  certificationArchive: [
    {
      name: 'Introduction to agent skills',
      issuer: 'Anthropic',
      date: 'Mar 2026',
      credentialLink: 'https://verify.skilljar.com/c/ty2g2abmazr3',
    },
    {
      name: 'Claude 101',
      issuer: 'Anthropic',
      date: 'Mar 2026',
      credentialLink: 'https://verify.skilljar.com/c/j4v3rcsy7qby',
    },
    {
      name: 'The Nuts and Bolts of OAuth 2.0',
      issuer: 'Udemy',
      date: 'Feb 2026',
      credentialLink: 'https://www.udemy.com/certificate/UC-1f805355-e91d-445e-a64a-eed0e399cdfe/',
    },
    {
      name: 'Kubernetes for the Absolute Beginners - Hands-on',
      issuer: 'Udemy',
      date: 'Feb 2026',
      credentialLink: 'https://www.udemy.com/certificate/UC-df62c2df-a2c7-405c-9b61-633bd868e41d/',
    },
  ] as CertificationArchiveEntry[],
  certificationsEmptyText: 'Coming soon...',
  contact: {
    email: 'castanedacs@gmail.com',
    github: 'https://github.com/seba3c',
    linkedin: 'https://www.linkedin.com/in/sebastiancastaneda/',
    instagram: 'https://www.instagram.com/sebastian.castaneda.3/',
    x: 'https://x.com/seba3c'
  },
} as const;

export type FeaturedProject = (typeof site.featuredProjects)[number];
export type FeaturedEvent = (typeof site.featuredEvents)[number];