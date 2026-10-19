export const profile = {
  name: "Tam Pham II",
  title: "Full-Stack Developer · Web Design & Development",
  location: "Fort Worth, TX",
  phone: "817.845.1242",
  email: "phamt@live.com",
  site: "tampham.io",
  siteUrl: "https://tampham.io",
  linkedin: "linkedin.com/in/tamphamjr",
  linkedinUrl: "https://www.linkedin.com/in/tamphamjr",
  summary:
    "Proactive, self-motivated Full-Stack Developer with 8+ years of experience building custom UI, templates, and web experiences for international brands, corporations, startups, law firms, and non-profits. Strong in React, Next.js, Craft CMS, and PHP, with hands-on server administration, CI/CD, and cloud delivery. Agile, detail-oriented, and comfortable owning a project from design through deployment.",
};

export const strengths = [
  "Exceptional problem solver",
  "Strategic planner and designer",
  "Technical expertise and client relationship management",
  "Quick learner and agile developer",
];

export const skillGroups: { label: string; items: string[]; featured?: string[] }[] = [
  {
    label: "Front End",
    items: ["React", "Next.js", "JavaScript / TypeScript", "HTML / CSS", "Tailwind", "Sass", "shadcn/ui", "GSAP", "Vue", "jQuery"],
    featured: ["React", "Next.js", "Tailwind", "Sass", "shadcn/ui"],
  },
  {
    label: "Back End & CMS",
    items: ["PHP", "Craft CMS", "Custom Craft Modules", "Twig", "REST APIs", "Webhooks", "MySQL", "Redis", "Laravel", "WordPress / Gutenberg", "Statamic", "Shopify", "Drupal"],
    featured: ["PHP", "Craft CMS", "Custom Craft Modules", "REST APIs", "Webhooks", "Redis"],
  },
  {
    label: "DevOps & Cloud",
    items: ["CI/CD", "Docker", "Kubernetes", "DDEV", "AWS S3", "AWS EC2", "GitLab", "GitHub", "Bitbucket", "Linux / SSH"],
    featured: ["CI/CD", "Docker", "Kubernetes", "DDEV", "AWS S3", "AWS EC2", "GitLab", "GitHub"],
  },
  {
    label: "Monitoring & Tooling",
    items: ["Dynatrace", "Splunk", "Jira", "Postman", "Okta SSO", "Webpack", "BrowserStack", "VS Code"],
    featured: ["Dynatrace", "Splunk", "Jira", "Postman"],
  },
  {
    label: "Design",
    items: ["Figma", "UI/UX", "Prototyping", "Wireframing", "Photoshop", "Illustrator", "After Effects", "Web Accessibility (ADA)"],
    featured: ["Figma"],
  },
];

export const expertise = [
  "Server & client-side development",
  "Performance & SEO",
  "Responsive, cross-browser UI",
  "Web accessibility (ADA)",
  "Information architecture",
  "Debugging & testing",
  "Server administration, hosting & DNS",
  "Training & mentoring",
];

export const experience = [
  {
    role: "WordPress Developer",
    company: "Planit Advertising",
    location: "Baltimore, MD",
    dates: "Mar 2023 – Nov 2023",
    bullets: [
      "Built custom WordPress sites centered on custom Gutenberg blocks, including multiple blocks for the company template.",
      "Worked across dev, staging, and production environments with automated test and deploy pipelines (Git, Bitbucket, local dev tooling).",
      "Diagnosed and resolved server and pipeline issues.",
      "Produced custom HTML emails and animated banners; ran monthly maintenance, QA, bug testing, and ADA compliance checks.",
    ],
    achievement: "Launched several new sites on time and on budget.",
  },
  {
    role: "Director of Interactive Services",
    company: "Holmes Millet Advertising",
    location: "Dallas, TX",
    dates: "Oct 2015 – Mar 2023",
    bullets: [
      "Designed, developed, and maintained responsive sites and custom themes/templates across Craft CMS, WordPress, and other platforms using PHP, Twig, and JavaScript.",
      "Led the interactive department: creative direction, training, task assignment, hour estimates, and client meetings.",
      "Configured and deployed dev, staging, and production environments (in-house and client-hosted) and maintained enterprise Linux servers, keeping PHP, CMS, and code current.",
      "Collaborated with creative directors, developers, designers, animators, and clients to deliver multiple projects against deadlines.",
      "Ran email campaigns and digital ads, and produced animated video and motion graphics.",
    ],
    achievement:
      "Redesigned 3 agency websites, boosting traffic and clientele; doubled traffic for EarthX.org after its 2019 redesign; recognized for Best UI/UX Design in Dallas 2019–2022.",
  },
  {
    role: "Web Developer",
    company: "Pixel Clear Designs",
    location: "Fort Worth, TX",
    dates: "Dec 2014 – Jul 2015",
    bullets: [
      "Built and maintained WordPress, PHP, HTML/CSS, and JavaScript sites, including database and site migrations, mobile QA, and launches.",
      "Delivered responsive design, plugin integration, logos, and branding.",
      "Trained clients on WordPress and mentored junior team members.",
    ],
  },
  {
    role: "Network Systems Administrator",
    company: "Ross & Matthews Law Firm",
    location: "Fort Worth, TX",
    dates: "Apr 2013 – Dec 2014",
    bullets: [
      "Provided help desk support and managed 180+ thin clients and workstations.",
      "Administered Active Directory and Exchange, and supported remote meetings.",
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

export const pdfPath = "/assets/files/PHAMT_RESUME.pdf";
