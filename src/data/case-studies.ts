import jaFull from "@/assets/portfolio/ja-full.png";

export type SuccessStory = {
  subtitle: string;
  client: string;
  challenge: string[];
  challengeIntro?: string;
  solutionIntro?: string;
  solution: string[];
  outcome: string[];
  servicesDelivered: string[];
  highlights: string[];
  hideLiveButton?: boolean;
  inDevelopment?: boolean;
  previewText?: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  challenge: string;
  services: string[];
  outcome: string;
  objectives?: string[];
  process?: string[];
  technology?: string[];
  tags?: string[];
  status?: "completed" | "in-progress";
  testimonial?: { quote: string; author: string; role?: string };
  heroLabel?: string;
  website?: string;
  screenshot?: string;
  story?: SuccessStory;
};

const defaultTags = [
  "Responsive Design",
  "SEO Ready",
  "AI Ready",
  "Mobile Optimized",
  "Fast Performance",
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "jersey-metal-revival",
    name: "Jersey Metal",
    industry: "Music Publishing & Media",
    challenge:
      "The existing website did not reflect the professionalism, historical significance, or depth of the project.",
    services: [
      "Website redesign",
      "Brand modernization",
      "Responsive design",
      "Content organization",
      "Book showcase",
      "Historical archive planning",
      "SEO ready",
      "Mobile optimization",
      "Professional messaging",
    ],
    outcome:
      "A professional online presence that better reflects the importance of Jersey Metal's contribution to New Jersey music history.",
    objectives: [
      "Showcase the Jersey Metal books",
      "Highlight Frank White's photography",
      "Feature Alan Tecchio's career",
      "Present historical interviews and rare images",
      "Document band histories",
      "Promote future publications",
      "Celebrate the legacy of New Jersey's Heavy Metal scene",
    ],
    process: ["Discover", "Design", "Enable", "Grow"],
    technology: ["Modern web stack", "Responsive design", "SEO foundations"],
    tags: defaultTags,
    status: "in-progress",
    heroLabel: "JM",
    story: {
      subtitle:
        "Helping a historical music publishing project preserve and celebrate the legacy of New Jersey's Heavy Metal scene.",
      client:
        "Jersey Metal is the passion project of Frank White and Alan Tecchio—two respected veterans of New Jersey's Heavy Metal community. Frank White has spent more than four decades documenting the music industry as a professional photographer whose work has appeared in magazines, books, record companies, television productions, DVD releases, and the Rock & Roll Hall of Fame. He is also the founder of The Frank White Photo Agency and a published author. Alan Tecchio is a longtime Heavy Metal vocalist, writer, graphic designer, and journalist whose career has included bands such as Hades, Watchtower, Seven Witches, Mike LePond's Silent Assassins, and many others. Together they founded WT Publishing and created Jersey Metal to preserve the history, photography, interviews, advertisements, band biographies, and legacy of New Jersey's Heavy Metal scene.",
      challengeIntro:
        "Jersey Metal is not a music venue, record label, or fabrication company. It is a historical publishing project dedicated to documenting and preserving New Jersey's Heavy Metal history. The existing website did not reflect the professionalism, historical significance, or depth of the project. It needed to better showcase:",
      challenge: [
        "The Jersey Metal books",
        "Frank White's photography",
        "Alan Tecchio's career",
        "Historical interviews",
        "Rare images",
        "Band histories",
        "Future publications",
        "The legacy of New Jersey's Heavy Metal scene",
      ],
      solutionIntro:
        "EnAibleWorks designed a completely modern website that respects the project's rich history while creating a far better user experience. The redesign focused on:",
      solution: [
        "Modern visual design",
        "Improved navigation",
        "Mobile-first experience",
        "Professional branding",
        "Better organization of books and historical content",
        "Photography showcases",
        "SEO-ready architecture",
        "A scalable platform for future publications and content",
      ],
      outcome: [
        "Jersey Metal now has a professional online presence that better reflects the importance of its contribution to New Jersey music history.",
        "The redesigned website provides a platform where longtime fans and new visitors can discover the books, explore the history of New Jersey's Heavy Metal scene, and learn about the artists, photographers, venues, and stories that helped shape one of America's most influential regional Metal communities.",
        "The website also establishes a strong digital foundation for future books, photography collections, interviews, historical archives, merchandise, and continued community engagement.",
      ],
      servicesDelivered: [
        "Website Redesign",
        "Brand Modernization",
        "Responsive Design",
        "Content Organization",
        "Book Showcase",
        "Historical Archive Planning",
        "SEO Ready",
        "Mobile Optimization",
        "Professional Messaging",
      ],
      highlights: [
        "Responsive Website",
        "Fast Performance",
        "SEO Optimized",
        "Book Promotion",
        "Historical Archive Ready",
        "Professional Branding",
        "Easy to Maintain",
        "Future Growth Ready",
      ],
      hideLiveButton: true,
      inDevelopment: true,
      previewText: "Website Launching Soon",
    },
  },
  {
    slug: "j-and-a",
    name: "J&A Wall & Surface Solutions",
    industry: "Home Services",
    challenge:
      "The business needed a modern online presence that better represented its services and made it easier for customers to connect.",
    services: [
      "Website redesign",
      "Mobile-first design",
      "Modern branding",
      "Contact optimization",
      "Improved customer experience",
    ],
    outcome:
      "A professional digital presence that builds customer confidence and creates more business opportunities.",
    objectives: [
      "Better represent the services offered",
      "Make it effortless for customers to make contact",
      "Create a mobile-first experience",
    ],
    process: ["Discover", "Design", "Enable", "Grow"],
    technology: ["Modern web stack", "Mobile-first design", "Contact automation"],
    tags: defaultTags,
    status: "completed",
    testimonial: {
      quote: "Customers can finally find and reach us with zero friction.",
      author: "Client Testimonial",
      role: "J&A Wall & Surface Solutions",
    },
    heroLabel: "J&A",
    website: "https://jawallandsurface.com/",
    screenshot: jaFull,
    story: {
      subtitle:
        "Helping a growing business establish a professional online presence and build a stronger digital foundation.",
      client:
        "J&A Wall & Surface Solutions is a residential painting and wall finishing company serving New Jersey, New York, and Connecticut. The business had earned an excellent reputation through quality workmanship and referrals but did not have a professional website or central online presence.",
      challengeIntro:
        "Before working with EnAibleWorks, potential customers had no central place to:",
      challenge: [
        "Learn about the company's services",
        "View completed work",
        "Verify credibility",
        "Contact the business",
        "Discover the company through online searches",
      ],
      solutionIntro:
        "EnAibleWorks designed and developed a modern, mobile-first website that included:",
      solution: [
        "Professional branding",
        "Clear service pages",
        "Mobile optimization",
        "SEO-ready structure",
        "Contact forms",
        "Calls-to-action",
        "Facebook integration",
        "Modern design focused on trust and credibility",
      ],
      outcome: [
        "J&A Wall & Surface Solutions now has a professional online presence that reflects the quality of its work and supports future business growth.",
        "Potential customers can now discover the business online, learn about its services, browse previous work, and request estimates from any device.",
        "The website provides a strong digital foundation that complements the company's excellent reputation and referral network.",
      ],
      servicesDelivered: [
        "Website Design",
        "Brand Refresh",
        "Responsive Design",
        "SEO Ready",
        "Mobile Optimization",
        "Professional Messaging",
        "Contact Optimization",
        "AI Ready",
      ],
      highlights: [
        "Mobile Responsive",
        "Fast Performance",
        "SEO Optimized",
        "Google Analytics Ready",
        "Contact Lead Generation",
        "Professional Branding",
        "AI Ready",
        "Easy to Maintain",
      ],
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
