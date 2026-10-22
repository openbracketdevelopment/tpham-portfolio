export const profile = {
  name: "Tam Pham II",
  title: "Software Engineer · Full-Stack Development & Design",
  location: "Fort Worth, TX",
  phone: "817.845.1242",
  email: "phamt@live.com",
  site: "tampham.io",
  siteUrl: "https://tampham.io",
  linkedin: "linkedin.com/in/tamphamjr",
  linkedinUrl: "https://www.linkedin.com/in/tamphamjr",
  summary:
    "Software Engineer and designer with 11+ years of experience building web experiences for international brands, corporations, startups, and non-profits. Currently leading a headless Craft CMS and Next.js platform at Amdocs, with strong skills in React, TypeScript, GraphQL, CI/CD, and cloud delivery. Uses AI coding tools such as GitHub Copilot, Codex, and Claude Code to ship faster without sacrificing quality or security. Detail-oriented and comfortable owning a project from design through deployment.",
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
    items: ["React", "Next.js", "JavaScript / TypeScript", "HTML / CSS", "Tailwind", "Sass", "shadcn/ui", "MUI", "Apollo Client", "Axios", "GSAP"],
    featured: ["React", "Next.js", "Tailwind", "Sass", "shadcn/ui", "Apollo Client"],
  },
  {
    label: "Back End & CMS",
    items: ["PHP", "Craft CMS", "Custom Craft Modules", "Twig", "Headless CMS", "GraphQL", "REST APIs", "Okta", "Kong API Gateway", "OpenStreetMap APIs", "Webhooks", "PostgreSQL", "MySQL", "Redis", "Next.js Cache Handlers", "WordPress / Gutenberg"],
    featured: ["PHP", "Craft CMS", "Custom Craft Modules", "Headless CMS", "GraphQL", "REST APIs", "Kong API Gateway", "OpenStreetMap APIs", "Webhooks", "PostgreSQL", "Redis", "Next.js Cache Handlers"],
  },
  {
    label: "DevOps & Cloud",
    items: ["CI/CD", "Docker", "Kubernetes", "DDEV", "AWS S3", "AWS EC2", "AWS SES", "AWS RDS", "Nginx", "Reverse Proxies", "GitLab", "GitHub", "Linux"],
    featured: ["CI/CD", "Docker", "Kubernetes", "DDEV", "AWS S3", "AWS EC2", "AWS SES", "AWS RDS", "Nginx", "Reverse Proxies", "GitLab", "GitHub"],
  },
  {
    label: "Testing & Tooling",
    items: ["Dynatrace", "Splunk", "Jira", "Postman", "Jest", "Storybook", "ESLint", "Snyk", "Webpack", "BrowserStack"],
    featured: ["Dynatrace", "Splunk", "Jira", "Postman", "Jest", "Storybook", "Snyk"],
  },
  {
    label: "AI Tools",
    items: ["GitHub Copilot", "OpenAI Codex", "Claude Code", "Cursor", "Prompt Engineering"],
    featured: ["GitHub Copilot", "OpenAI Codex", "Claude Code"],
  },
  {
    label: "Design",
    items: ["Figma", "UI/UX", "Prototyping", "Wireframing", "Photoshop", "Illustrator", "Web Accessibility (ADA)"],
    featured: ["Figma"],
  },
  {
    label: "Motion & Media",
    items: ["After Effects", "Premiere Pro", "DaVinci Resolve", "Blender", "Lightroom", "Motion Graphics", "Video Production", "Video Editing", "Visual Effects (VFX)", "3D Modeling & Rendering", "Photography", "Color Grading"],
    featured: ["After Effects", "Premiere Pro", "Blender", "Motion Graphics"],
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
      "Lead Craft CMS developer for the Fidium Fiber enterprise website platform: architected and own a headless Craft CMS with a bespoke editor, page builder, GraphQL API, and custom modules serving Fidium Fiber, Business, Wholesale, Partners, Support, buyflow, fidium.net, and consolidated.com.",
      "Planned and drove delivery from foundation to launch, including the custom Craft modules that extend the platform.",
      "Redesigned and built the Next.js/React applications for Fidium Fiber, Business, Wholesale, Partners, and Consolidated, and built the original foundation of fidium.net; collaborate with the teams that own fidium.net and buyflow.",
      "Maintain a shared UI toolkit of reusable components, hooks, and webhooks, tested with Jest and documented in Storybook.",
      "Configured Nginx reverse proxies to serve the Wholesale, Partners, Business, and Consolidated sites from a single repo; own dev, QA, staging, and production environments with GitLab CI/CD.",
      "Monitor with Dynatrace and Splunk, stay on call, and join incident war rooms to diagnose root causes and restore service quickly.",
      "Partner with engineers, marketing, IT, and cloud ops in Jira; mentor developers on Craft CMS. Authored pull requests and reviewed other developers' PRs to maintain code quality.",
    ],
    achievement:
      "Built the headless Craft CMS (bespoke editor, GraphQL, custom modules) that serves content for 7 newly redesigned sites, and lead the launch and shipment of the Next.js applications for fidium.com, fidiumbusiness.com, fidiumpartners.com, fidiumwholesale.com, consolidated.com, and fidium.net.",
  },
  {
    role: "Lead PHP / WordPress Developer",
    company: "Linchpin",
    location: "Rhode Island (Remote)",
    dates: "Apr 2024 – Aug 2024",
    bullets: [
      "Led development and maintenance of WordPress sites built with ACF and custom Gutenberg blocks, plus custom plugins, optimized for performance and SEO.",
      "Modernized build tooling with Webpack and set up GitHub CI/CD pipelines using Husky and Release Please.",
      "Managed hosting and servers, including PHP upgrades and Nginx/Apache configuration; on call for production issues.",
      "Coordinated with developers, marketing managers, creative directors, and clients to deliver on expectations. Authored pull requests and reviewed other developers' PRs to maintain code quality.",
    ],
    achievement: "Maintained and developed the Birth23.org, fluvalaquatics.com, and Nutrience.com websites.",
  },
  {
    role: "WordPress Developer",
    company: "Planit Advertising",
    location: "Baltimore, MD (Remote)",
    dates: "Mar 2023 – Nov 2023",
    bullets: [
      "Built custom WordPress sites and multiple custom Gutenberg blocks for the company template.",
      "Worked across dev, staging, and production with automated test and deploy pipelines (Git, Bitbucket); resolved server and pipeline issues.",
      "Produced custom HTML emails and animated banners; ran monthly maintenance, QA, and ADA compliance checks. Authored pull requests and reviewed other developers' PRs to maintain code quality.",
    ],
    achievement: "Launched the new Toro Haven robotic mower site along with several other sites, on time and on budget.",
  },
  {
    role: "Director of Interactive Services",
    company: "Holmes Millet Advertising",
    location: "Dallas, TX (On-site)",
    dates: "Oct 2015 – Mar 2023",
    bullets: [
      "Designed, developed, and maintained responsive sites and custom themes/templates across Craft CMS, WordPress, and other platforms using PHP, Twig, and JavaScript, with ongoing support for agency and client needs.",
      "Led the interactive department: direction, training, and assignments for a team of developers, plus client meetings and project estimates.",
      "Configured and deployed dev, staging, and production environments, maintained enterprise Linux servers, and kept PHP, CMS, and code current.",
      "Collaborated with creative directors, developers, designers, animators, VFX artists, and clients, managing multiple projects against strict deadlines.",
      "Ran email campaigns and digital ads, and produced animated video and photography for clients.",
    ],
    achievement:
      "Redesigned 3 agency websites, boosting traffic and clientele; doubled traffic for EarthX.org after its 2019 redesign; recognized for Best UI/UX Design in Dallas 2019–2022.",
  },
  {
    role: "Web Developer",
    company: "Pixel Clear Designs",
    location: "Fort Worth, TX (On-site)",
    dates: "Dec 2014 – Jul 2015",
    bullets: [
      "Designed and developed WordPress, PHP, HTML/CSS, and JavaScript sites, including migrations, mobile QA, responsive optimization, plugin integration, and launches.",
      "Created logos and brands for client sites and produced video and photography with developers and creative directors.",
      "Mentored new creative hires, ran WordPress training for clients, and staffed the customer service call desk.",
    ],
    achievement: "Launched several websites, including ESPS Trailers, Dart Couriers, and Booher Consultants.",
  },
  {
    role: "Network Systems Administrator",
    company: "Ross & Matthews Law Firm",
    location: "Fort Worth, TX (On-site)",
    dates: "Apr 2013 – Dec 2014",
    bullets: [
      "Resolved help desk tickets, specializing in Microsoft workstation repair, and staffed the customer service call desk.",
      "Managed 80+ thin clients on IBM terminals and 100+ Windows XP/7 workstations; administered Active Directory and Microsoft Exchange.",
      "Maintained HP and Xerox printers and hosted company video conferences via GoToMeeting and Zoom.",
    ],
    achievement:
      "Replaced all 100+ legacy thin clients with new units on upgraded hardware and migrated Windows desktop workstations from XP to Windows 7; briefly worked on a 5 Gbps internet connection.",
  },
  {
    role: "IT Technician",
    company: "E-lite Works",
    location: "Fort Worth, TX (On-site)",
    dates: "Nov 2011 – Dec 2013",
    bullets: [
      "Handled Windows PC repair and troubleshooting, built custom desktops, and managed parts inventory and sales.",
      "Performed virus removal (rootkits, spyware, and malware), upgrades, data backup and transfer, Windows installs and updates, and network troubleshooting.",
      "Provided follow-up support, met customer deadlines, and optimized desktop and laptop performance.",
    ],
    achievement: "Built several custom desktop PCs to customer specifications.",
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
