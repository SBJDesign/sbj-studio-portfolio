export type Service = {
  title: string;
  category: "Branding" | "Design" | "Media & Content" | "Strategy";
  description: string;
  value: string;
  deliverables: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: "Branding" | "Design" | "Media & Content" | "Strategy";
  client: string;
  summary: string;
  tags: string[];
  problem: string;
  approach: string;
  solution: string;
  outcome: string;
  outcomeMetrics: string[];
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" }
];

export const services: Service[] = [
  {
    title: "Brand Positioning & Identity",
    category: "Branding",
    description:
      "Build a strategic brand foundation that defines your voice, differentiation, and market relevance.",
    value: "Helps decision-makers trust your brand faster and choose you with confidence.",
    deliverables: [
      "Brand positioning framework",
      "Naming and messaging architecture",
      "Visual identity and brand guidelines"
    ]
  },
  {
    title: "Brand Rollout & Collateral",
    category: "Branding",
    description:
      "Extend your brand into practical touchpoints your team and customers use every day.",
    value: "Creates consistency across channels and improves professional brand perception.",
    deliverables: ["Company profile design", "Presentation templates", "Branded communication kits"]
  },
  {
    title: "Visual Communication Design",
    category: "Design",
    description:
      "Design high-impact digital and print assets that combine clarity, aesthetics, and business purpose.",
    value: "Improves campaign performance and reinforces a premium market position.",
    deliverables: ["Campaign key visuals", "Print and outdoor assets", "Social media design systems"]
  },
  {
    title: "Web & Product Experience",
    category: "Design",
    description:
      "Design and develop modern websites and lightweight digital products for brand and growth goals.",
    value: "Turns your online presence into a conversion-focused business channel.",
    deliverables: ["Marketing website design", "Landing pages", "UI systems and prototyping"]
  },
  {
    title: "Media Production & Storytelling",
    category: "Media & Content",
    description:
      "Produce cinematic and social-first media that communicates your story with authority and emotion.",
    value: "Builds trust, improves brand recall, and drives audience response.",
    deliverables: ["Brand films and documentaries", "Commercial video production", "Photography content suites"]
  },
  {
    title: "Content Systems & Channel Management",
    category: "Media & Content",
    description:
      "Create repeatable content engines for social media, campaigns, and thought-leadership distribution.",
    value: "Keeps your brand visible and relevant without inconsistent output.",
    deliverables: ["Monthly content calendars", "Social content strategy", "Editorial and post copy"]
  },
  {
    title: "Growth & Market Strategy",
    category: "Strategy",
    description:
      "Design practical growth systems for brands scaling in local and international markets.",
    value: "Aligns creative execution with measurable business outcomes.",
    deliverables: ["Go-to-market strategy", "Campaign planning and execution map", "Quarterly growth roadmap"]
  },
  {
    title: "Digital Marketing & Optimization",
    category: "Strategy",
    description:
      "Run and optimize digital campaigns using performance insights, search visibility, and conversion testing.",
    value: "Ensures your media spend and content efforts produce clear ROI.",
    deliverables: ["Paid media strategy", "SEO and content optimization", "Analytics and performance reporting"]
  }
];

export const projects: Project[] = [
  {
    slug: "nexus-public-sector-rebrand",
    title: "Nexus Public Sector Rebrand",
    category: "Branding",
    client: "Nexus Civic Agency",
    summary: "A strategic rebrand for a public agency seeking trust and modern relevance.",
    tags: ["Brand Strategy", "Identity", "Public Sector"],
    problem:
      "The agency had low public trust and inconsistent communications across departments.",
    approach:
      "We audited citizen touchpoints, aligned internal stakeholders, and reframed the agency narrative around service transparency.",
    solution:
      "Delivered a new identity system, messaging architecture, and implementation toolkit for cross-channel consistency.",
    outcome:
      "Within one quarter, recognition improved and internal teams adopted a unified communication style.",
    outcomeMetrics: ["3 state offices aligned", "41% increase in brand recall", "1 unified communication system"]
  },
  {
    slug: "afe-startup-launch-system",
    title: "AFE Startup Launch System",
    category: "Strategy",
    client: "AFE Mobility",
    summary: "A launch strategy and design framework for a high-growth startup.",
    tags: ["Go-to-Market", "Launch", "Startup Growth"],
    problem:
      "The startup had a promising product but no cohesive market narrative to attract investors and users.",
    approach:
      "SBJ Studio mapped audience journeys, defined positioning, and built a phased launch communication plan.",
    solution:
      "Created launch assets, messaging frameworks, and campaign operations playbooks.",
    outcome:
      "The startup secured early partnerships and improved conversion performance in its first campaign cycle.",
    outcomeMetrics: ["2 strategic partnerships secured", "32% campaign conversion improvement", "6-week launch execution"]
  },
  {
    slug: "zuri-media-campaign",
    title: "Zuri Media Story Campaign",
    category: "Media & Content",
    client: "Zuri Health Network",
    summary: "Content-led campaign designed to humanize healthcare communication.",
    tags: ["Video", "Storytelling", "Campaign"],
    problem:
      "Healthcare messaging felt technical and disconnected from real human experiences.",
    approach:
      "Our team interviewed patient communities, extracted authentic narratives, and built a story-driven content strategy.",
    solution:
      "Produced a modular campaign with short films, social edits, and editorial content templates.",
    outcome:
      "Audience engagement increased significantly and campaign content achieved broad cross-platform reach.",
    outcomeMetrics: ["1.2M cumulative campaign reach", "3x social engagement uplift", "12 high-performing content assets"]
  },
  {
    slug: "korin-enterprise-design-overhaul",
    title: "Korin Enterprise Design Overhaul",
    category: "Design",
    client: "Korin Group",
    summary: "A premium design refresh for an enterprise operating across Africa.",
    tags: ["Corporate Design", "Print", "Digital"],
    problem:
      "Brand assets looked outdated, leading to weak perception in high-value pitches.",
    approach:
      "We restructured visual hierarchies, improved typography, and introduced a premium design system.",
    solution:
      "Delivered new brand templates, pitch materials, and multi-format communication assets.",
    outcome:
      "The enterprise reported stronger confidence in presentations and better stakeholder response.",
    outcomeMetrics: ["28% higher proposal success rate", "New design system across 5 teams", "Faster turnaround on brand assets"]
  }
];

export const kpiStats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "35+", label: "Brands Transformed" },
  { value: "8", label: "Core Industries Served" },
  { value: "Nigeria -> Global", label: "Market Reach" }
];

export const clientLogos = [
  "Nexus Civic Agency",
  "AFE Mobility",
  "Zuri Health Network",
  "Korin Group",
  "Public Sector Partners",
  "Growth-Stage Startups"
];

export const testimonials = [
  {
    name: "Amara Eze",
    role: "Director, Nexus Civic Agency",
    quote:
      "SBJ Studio gave us more than a visual facelift. They built a strategic communication identity our teams now trust."
  },
  {
    name: "Tunde Afolayan",
    role: "Founder, AFE Mobility",
    quote:
      "Their thinking is sharp, practical, and premium. Every creative decision linked directly to our growth goals."
  },
  {
    name: "Binta Yusuf",
    role: "Programs Lead, Zuri Health Network",
    quote:
      "From discovery to delivery, SBJ Studio understood our audience deeply and helped us tell stories that moved people."
  }
];
