export const profile = {
  name: "Tam Pham II",
  title: "Software Engineer | Full-Stack Development",
  location: "Fort Worth, TX",
  phone: "817.845.1242",
  email: "phamt@live.com",
  site: "tampham.io",
  siteUrl: "https://tampham.io",
  linkedin: "linkedin.com/in/tamphamjr",
  linkedinUrl: "https://www.linkedin.com/in/tamphamjr",
  github: "github.com/openbracketdevelopment",
  githubUrl: "https://github.com/openbracketdevelopment",
  summary:
    "Software engineer with 11+ years of professional experience delivering web applications and enterprise content platforms with React, Next.js, TypeScript, PHP, and APIs. Lead Craft CMS development for Fidium at Amdocs; build independent software in Go, Rust, and Python. Own delivery from requirements and design through testing, deployment, and maintenance, with cross-functional collaboration, mentoring, and code review. Use AI coding assistants with human review and validation.",
};

export const strengths = [
  "Exceptional problem solver",
  "Strategic planner and designer",
  "Technical expertise and client relationship management",
  "Quick learner and agile developer",
];

export const skillGroups: { label: string; items: string[]; featured?: string[] }[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "PHP", "SQL", "Python", "Go (Golang)", "Rust"],
  },
  {
    label: "Front End",
    items: ["React", "Next.js", "Svelte", "HTML / CSS", "Tailwind CSS", "Sass", "Responsive Design", "Web Accessibility"],
    featured: ["React", "Next.js", "Tailwind", "Sass", "shadcn/ui", "Apollo Client"],
  },
  {
    label: "Back End & CMS",
    items: ["Craft CMS", "WordPress", "Headless CMS", "GraphQL", "REST APIs", "Webhooks", "Okta / OIDC", "PostgreSQL", "MySQL", "SQLite", "Redis", "ISR"],
    featured: ["PHP", "Craft CMS", "Custom Craft Modules", "Headless CMS", "GraphQL", "REST APIs", "Kong API Gateway", "OpenStreetMap APIs", "Webhooks", "PostgreSQL", "Redis", "Next.js Cache Handlers"],
  },
  {
    label: "DevOps & Cloud",
    items: ["Continuous Integration and Continuous Delivery (CI/CD)", "GitLab CI/CD", "GitHub Actions", "Docker", "Kubernetes", "Amazon Web Services (AWS)", "Linux", "Nginx"],
    featured: ["CI/CD", "Docker", "Kubernetes", "DDEV", "AWS S3", "AWS EC2", "AWS SES", "AWS RDS", "Nginx", "Reverse Proxies", "GitLab", "GitHub"],
  },
  {
    label: "Testing & Tooling",
    items: ["Automated Testing", "Jest", "Storybook", "Dynatrace", "Splunk", "Incident Response", "Secure Coding", "Code Review", "Technical Documentation"],
    featured: ["Dynatrace", "Splunk", "Jira", "Postman", "Jest", "Storybook", "Snyk"],
  },
  {
    label: "AI-Assisted Development",
    items: ["GitHub Copilot", "OpenAI Codex", "Claude Code", "Cursor", "Prompt Engineering for Coding Workflows"],
    featured: ["GitHub Copilot", "OpenAI Codex", "Claude Code"],
  },
];

export const expertise = [
  "Server & client-side development",
  "AI-assisted development",
  "Performance & SEO",
  "Responsive, cross-browser UI",
  "Web accessibility (ADA)",
  "Information architecture",
  "Debugging & testing",
  "Server administration, hosting & DNS",
  "Training & mentoring",
  "Brand development",
  "Video",
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Amdocs",
    location: "Plano, TX (Remote)",
    dates: "Aug 2024 – Present",
    bullets: [
      "Lead development of a headless Craft CMS, custom modules, page builder, and GraphQL API serving seven Fidium websites and applications across marketing, customer access, and purchasing.",
      "Introduced Redis caching alongside Incremental Static Regeneration (ISR) to reduce Craft CMS load from multiple production Kubernetes pods and improve React/Next.js response times.",
      "Built Next.js/React sites for Fidium Fiber, Business, Wholesale, Partners, and Consolidated, and the original fidium.net foundation; collaborate with the teams owning the portal and Buyflow purchasing experience.",
      "Maintain shared components, hooks, and webhooks with Jest unit tests and Storybook documentation; built Check Availability UX with a clear purchasing handoff.",
      "Configure Nginx reverse proxies for multiple sites from one repo; support GitLab CI/CD pipelines and Kubernetes deployments across dev, QA, staging, and production.",
      "Use Dynatrace and Splunk for observability and on-call incident response; collaborate with engineering, marketing, IT, and cloud teams, mentor developers, and review code.",
    ],
  },
  {
    role: "Lead PHP / WordPress Developer",
    company: "Linchpin",
    location: "Rhode Island (Remote)",
    dates: "Apr 2024 – Aug 2024",
    bullets: [
      "Led WordPress development with ACF, Gutenberg, and custom plugins for Birth23.org, Fluval Aquatics, and Nutrience, with performance optimization and SEO.",
      "Modernized Webpack and GitHub CI/CD pipelines; managed PHP upgrades, Nginx/Apache, production support, client collaboration, and code review.",
    ],
  },
  {
    role: "WordPress Developer",
    company: "Planit Advertising",
    location: "Baltimore, MD (Remote)",
    dates: "Mar 2023 – Nov 2023",
    bullets: [
      "Built custom WordPress sites and Gutenberg blocks, including the Toro Haven robotic mower launch site.",
      "Delivered through dev, staging, and production with Bitbucket test/deploy pipelines, QA, accessibility checks, maintenance, and code review.",
    ],
  },
  {
    role: "Director of Interactive Services",
    company: "Holmes Millet Advertising",
    location: "Dallas, TX (On-site)",
    dates: "Oct 2015 – Mar 2023",
    bullets: [
      "Led the interactive department, client discovery, project estimates, developer assignments, and training; delivered Craft CMS and WordPress sites with PHP, Twig, and JavaScript.",
      "Managed Linux hosting and deployments; collaborated with creative teams and clients on responsive websites, including the EarthX redesign, integrations, and SEO.",
    ],
  },
  {
    role: "Web Developer",
    company: "Pixel Clear Designs",
    location: "Fort Worth, TX (On-site)",
    dates: "Dec 2014 – Jul 2015",
    bullets: [
      "Delivered WordPress/PHP sites, migrations, plugin integrations, and mobile QA for clients including ESPS Trailers; trained clients and mentored creative hires.",
    ],
  },
  {
    role: "Network Systems Administrator",
    company: "Ross & Matthews Law Firm",
    location: "Fort Worth, TX (On-site)",
    dates: "Apr 2013 – Dec 2014",
    bullets: [
      "Administered Active Directory, Exchange, 80+ thin clients, and 100+ Windows workstations; supported help desk operations and desktop migrations.",
    ],
  },
  {
    role: "IT Technician",
    company: "E-lite Works",
    location: "Fort Worth, TX (On-site)",
    dates: "Nov 2011 – Dec 2013",
    bullets: [
      "Built and repaired desktop PCs, handled malware removal, backups, network troubleshooting, and customer support.",
    ],
  },
];

export const education = {
  school: "The Art Institute of Fort Worth",
  degree: "BFA, Web Design & Interactive Media",
  date: "Graduated Sept 2014",
  notes: ["Award for Best Portfolio, Web Design Division", "Dean's Honor Roll"],
};

export const awards = [
  "Best UI/UX Design Agencies in Dallas, 2019–2022",
  "Progress Sitefinity Developer Certificate, 2019",
];

export const training = [
  "Cursor: GenAI-Driven SDLC, Mar 2026",
  "Secure Coding: Secure Application Development, Jun 2026",
  "Principles of Secure Coding, Jun 2026",
  "Secure Web Application Programming, Jun 2026",
  "Securing GenAI Systems, Jun 2026",
];

export const pdfPath = "/assets/files/PHAMT_RESUME.pdf";
