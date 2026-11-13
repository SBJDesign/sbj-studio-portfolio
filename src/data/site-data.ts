export type ProjectImage = {
  src: string;
  /** Optional looping clip shown in place of the image (src is its poster). */
  video?: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectFilm = {
  src: string;
  poster: string;
  label: string;
  portrait?: boolean;
};

export type ProjectSection = {
  name: string;
  spec: string;
  note: string;
  /** Each row is one full-width image, or several shown side by side. */
  rows: ProjectImage[][];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  cover: string;
  card: string;
  /** Films shown at the top of the case study (with a sound toggle). */
  films: ProjectFilm[];
  /** Optional short silent loop for the Work card. */
  teaser?: string;
  /** Landscape cover image (shown wide when there are no films). */
  coverWide?: boolean;
  /** Live link, for websites. */
  url?: string;
  facts: [string, string][];
  about: string[];
  sections: ProjectSection[];
};

export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/studio", label: "Studio" },
  { href: "/thoughts", label: "Thoughts" },
  { href: "/contact", label: "Contact" }
];

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/studio", label: "About" },
  { href: "/thoughts", label: "Thoughts" },
  { href: "/contact", label: "Contact" }
];

export const contact = {
  email: "sbjdesigns.ng@gmail.com",
  whatsappLabel: "08169576864",
  whatsappUrl: "https://wa.me/2348169576864",
  instagramLabel: "@sbjdesigns.ng",
  instagramUrl: "https://www.instagram.com/sbjdesigns.ng",
  location: "Kano, Nigeria"
};

export const socialLinks = [
  { href: contact.instagramUrl, label: "Instagram" },
  { href: contact.whatsappUrl, label: "WhatsApp" },
  { href: `mailto:${contact.email}`, label: "Email" }
];

export const studioIntro =
  "We build brands people trust, see and choose.";

export const positioning = [
  "From the first post on the feed to the 65 ft wall at the venue, we design the whole journey a guest takes.",
  "Branding, design, media and strategy, made in Kano for clients across Nigeria and beyond.",
  "Before we design anything, we ask what people should know, feel and do when they meet the work."
];

export const clientLogos = [
  { name: "Kano State Government", src: "/clients/kano-state-government.png" },
  { name: "Global Shapers Community Kano", src: "/clients/global-shapers-kano.png" },
  { name: "Golden Penny", src: "/clients/golden-penny-foods.png" },
  { name: "Mai Kwabo", src: "/clients/mai-kwabo.png" },
  { name: "Kano First", src: "/clients/kano-first.png" },
  { name: "NNFM", src: "/clients/nnfm.png" },
  { name: "Certis", src: "/clients/certis.png" },
  { name: "Zero Bola", src: "/clients/zero-bola.png" }
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** Set to true only once the client has approved this wording. Unapproved quotes never show. */
  approved: boolean;
};

/** Drafts sent to clients for approval. Fill in name/role and set approved: true when they confirm. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "SBJ Studio branded every wall, desk and stage at GTA 2026, and guests found their way from the gate to the main hall without asking. The work looked world-class and arrived on time.",
    name: "",
    role: "Global Tech Africa 2026",
    approved: false
  },
  {
    quote:
      "From the first countdown post to the speakers wall at the venue, SBJ made NCC feel like one experience. Our community recognised the brand everywhere.",
    name: "",
    role: "SparkLab, Northern Creatives Conference 2025",
    approved: false
  },
  {
    quote:
      "SBJ Studio gave Certis an identity that feels as credible as our work. The guideline means our team and suppliers now get it right every time.",
    name: "",
    role: "Certis",
    approved: false
  },
  {
    quote: "They understood our science and turned it into a brand people can feel. The loop says exactly what we do.",
    name: "",
    role: "Zero Bola",
    approved: false
  },
  {
    quote:
      "Our new brand looks fast and reliable on every van, cap and post. Customers notice it, and that builds trust.",
    name: "",
    role: "SDEEN Logistics",
    approved: false
  },
  {
    quote:
      "SBJ handles our campaigns, from recruitment to Alumni Day, with clarity and care. Each one has its own look but always feels like the hub.",
    name: "",
    role: "Global Shapers Community Kano",
    approved: false
  }
];

export type Service = {
  icon: string;
  name: string;
  description: string;
  value: string;
  items: string[];
};

export type ServiceGroup = {
  title: string;
  services: Service[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    "title": "Branding",
    "services": [
      {
        "icon": "◆",
        "name": "Brand Positioning & Identity",
        "description": "Build a strategic brand foundation that defines your voice, differentiation, and market relevance.",
        "value": "Helps decision-makers trust your brand faster and choose you with confidence.",
        "items": [
          "Brand positioning framework",
          "Naming and messaging architecture",
          "Visual identity and brand guidelines"
        ]
      },
      {
        "icon": "◎",
        "name": "Brand Rollout & Collateral",
        "description": "Extend your brand into practical touchpoints your team and customers use every day.",
        "value": "Creates consistency across channels and improves professional brand perception.",
        "items": [
          "Company profile design",
          "Presentation templates",
          "Branded communication kits"
        ]
      }
    ]
  },
  {
    "title": "Design",
    "services": [
      {
        "icon": "✦",
        "name": "Visual Communication Design",
        "description": "Design high-impact digital and print assets that combine clarity, aesthetics, and business purpose.",
        "value": "Improves campaign performance and reinforces a premium market position.",
        "items": [
          "Campaign key visuals",
          "Print and outdoor assets",
          "Social media design systems"
        ]
      },
      {
        "icon": "◇",
        "name": "Web & Product Experience",
        "description": "Design and develop modern websites and lightweight digital products for brand and growth goals.",
        "value": "Turns your online presence into a conversion-focused business channel.",
        "items": [
          "Marketing website design",
          "Landing pages",
          "UI systems and prototyping"
        ]
      }
    ]
  },
  {
    "title": "Media & Content",
    "services": [
      {
        "icon": "▣",
        "name": "Media Production & Storytelling",
        "description": "Produce cinematic and social-first media that communicates your story with authority and emotion.",
        "value": "Builds trust, improves brand recall, and drives audience response.",
        "items": [
          "Brand films and documentaries",
          "Commercial video production",
          "Photography content suites"
        ]
      },
      {
        "icon": "◈",
        "name": "Content Systems & Channel Management",
        "description": "Create repeatable content engines for social media, campaigns, and thought-leadership distribution.",
        "value": "Keeps your brand visible and relevant without inconsistent output.",
        "items": [
          "Monthly content calendars",
          "Social content strategy",
          "Editorial and post copy"
        ]
      }
    ]
  },
  {
    "title": "Strategy",
    "services": [
      {
        "icon": "⬡",
        "name": "Growth & Market Strategy",
        "description": "Design practical growth systems for brands scaling in local and international markets.",
        "value": "Aligns creative execution with measurable business outcomes.",
        "items": [
          "Go-to-market strategy",
          "Campaign planning and execution map",
          "Quarterly growth roadmap"
        ]
      },
      {
        "icon": "✧",
        "name": "Digital Marketing & Optimization",
        "description": "Run and optimize digital campaigns using performance insights, search visibility, and conversion testing.",
        "value": "Ensures your media spend and content efforts produce clear ROI.",
        "items": [
          "Paid media strategy",
          "SEO and content optimization",
          "Analytics and performance reporting"
        ]
      }
    ]
  }
];

export const projects: Project[] = [
  {
    "slug": "global-tech-africa-2026",
    "title": "Global Tech Africa 2026",
    "tagline": "Venue branding · From Gateway to Growth",
    "cover": "/work/gta/poster.jpg",
    "card": "/work/gta/in-photo-wall.jpg",
    "summary": "Venue branding for Global Tech Africa 2026 in Kano: 34 print pieces, from the entrance to the main hall stage.",
    "facts": [
      [
        "Client",
        "Global Tech Africa"
      ],
      [
        "Event",
        "GTA 2026 · 3–5 November 2026"
      ],
      [
        "Venue",
        "Amani Events Center, Kano"
      ],
      [
        "Role",
        "Venue branding & print design"
      ],
      [
        "Scope",
        "34 print pieces"
      ],
      [
        "Year",
        "2026"
      ]
    ],
    "about": [
      "Global Tech Africa 2026 brought founders, investors, policymakers and builders to the Amani Events Center in Kano from 3 to 5 November 2026. The theme was \"Connecting Africa, Accelerating Growth\" and the sub-theme \"Industrialisation, Market Access and the Sahel Gateway\". SBJ Studio designed the venue branding as part of the event productions team: every wall, backdrop, desk and sign a guest met between the gate and the main hall.",
      "The idea came from Kano itself. The old city was entered through its kofofi, the arched gates in the city wall, and the programme's own line was \"From Gateway to Growth\". So we turned the four-colour arcs of the GTA identity into gates. The arc only appears at a threshold or a corner: the registration wall, the photo-wall gateway and the stage edges. Everywhere else the identity runs on white space, bold Montserrat and a single red highlight bar, which keeps the arcs strong where they matter.",
      "The venue was planned for more than 1,900 guests across two main days, so every piece follows the same large-format rules. The logo and headline sit in the top third, where they survive a head-and-shoulders photo. Nothing important goes in the bottom 60 cm, which is hidden by tables, stage skirts and queues. Each surface carries three things at most. The six GTA pillars each have a colour, and the registration desks are colour-coded to the badges, so guests can find their way from across the hall.",
      "Long walls were built at 1:10 scale in CMYK and split into print panels, with every cut placed in a gap between portraits or blocks of colour, so the joins disappear on the day."
    ],
    "sections": [
      {
        "name": "Welcome Pillar",
        "spec": "3 × 9 ft pillar · Arrival",
        "note": "The first sign guests met at the gate: a slim pillar repeating the welcome in English, Hausa and French.",
        "rows": [
          [
            {
              "src": "/work/gta/welcome-pillar.jpg",
              "alt": "Welcome pillar artwork",
              "width": 900,
              "height": 2700
            }
          ]
        ]
      },
      {
        "name": "Registration",
        "spec": "33 × 9 ft wall · 5 desks",
        "note": "The wall tells guests where to check in and introduces the six pillars. Each desk is colour-coded to a badge type, so guests find their queue from across the room.",
        "rows": [
          [
            {
              "src": "/work/gta/in-registration.jpg",
              "alt": "Registration desks in use at GTA 2026",
              "width": 1276,
              "height": 720
            }
          ],
          [
            {
              "src": "/work/gta/registration-wall.jpg",
              "alt": "Registration wall artwork",
              "width": 4000,
              "height": 1092
            }
          ],
          [
            {
              "src": "/work/gta/registration-mockup.jpg",
              "alt": "Registration desks mockup",
              "width": 2400,
              "height": 1500
            }
          ],
          [
            {
              "src": "/work/gta/registration.jpg",
              "alt": "Registration desk headers and counters",
              "width": 4000,
              "height": 813
            }
          ]
        ]
      },
      {
        "name": "Speakers & Panelists Photo Wall",
        "spec": "59 × 9 ft · 5 print panels",
        "note": "More than 40 speakers on one wall, built around a gateway arch where guests stood for their photos.",
        "rows": [
          [
            {
              "src": "/work/gta/in-photo-wall.jpg",
              "alt": "Guests posing at the photo wall gateway",
              "width": 1276,
              "height": 720
            },
            {
              "src": "/work/gta/in-photo-wall-crowd.jpg",
              "alt": "Guests at the speakers photo wall",
              "width": 1276,
              "height": 720
            }
          ],
          [
            {
              "src": "/work/gta/photo-wall.jpg",
              "alt": "Photo wall artwork",
              "width": 3600,
              "height": 549
            }
          ]
        ]
      },
      {
        "name": "Main Hall Backdrops",
        "spec": "12 × 9 ft × 2 · Main hall",
        "note": "Logo and theme in the top third, clear of the podium, with the full partner line-up below.",
        "rows": [
          [
            {
              "src": "/work/gta/in-main-hall.jpg",
              "alt": "Main hall backdrop behind the podium",
              "width": 1276,
              "height": 720
            }
          ],
          [
            {
              "src": "/work/gta/stage-1.jpg",
              "alt": "Main hall backdrop 1",
              "width": 2160,
              "height": 1620
            },
            {
              "src": "/work/gta/stage-2.jpg",
              "alt": "Main hall backdrop 2",
              "width": 2160,
              "height": 1620
            }
          ]
        ]
      },
      {
        "name": "The Sahel Backdrop",
        "spec": "15 × 9 ft",
        "note": "The sub-theme stage: \"The Sahel as Africa's Next Digital Frontier\".",
        "rows": [
          [
            {
              "src": "/work/gta/sahel-backdrop.jpg",
              "alt": "Sahel backdrop artwork",
              "width": 3990,
              "height": 2394
            }
          ]
        ]
      },
      {
        "name": "Theme & Sahel Feature Walls",
        "spec": "8 × 9 ft × 2",
        "note": "One wall for the theme and pillars, one on the dark ground for the Sahel.",
        "rows": [
          [
            {
              "src": "/work/gta/theme-wall.jpg",
              "alt": "Theme feature wall",
              "width": 2133,
              "height": 2400
            },
            {
              "src": "/work/gta/sahel-wall.jpg",
              "alt": "Sahel feature wall",
              "width": 1440,
              "height": 1621
            }
          ]
        ]
      },
      {
        "name": "Six Pillars Walls",
        "spec": "20 × 9 ft · 22 × 9 ft · 34 × 9 ft",
        "note": "Industry, Trade, Infrastructure, Technology, Talent and Investment, each with its own colour and icon.",
        "rows": [
          [
            {
              "src": "/work/gta/pillars-20.jpg",
              "alt": "Six pillars 20 ft wall",
              "width": 4000,
              "height": 1800
            }
          ],
          [
            {
              "src": "/work/gta/pillars-34.jpg",
              "alt": "Six pillars 34 ft wall",
              "width": 2800,
              "height": 741
            }
          ],
          [
            {
              "src": "/work/gta/pillars-22.jpg",
              "alt": "Six pillars 22 ft wall",
              "width": 2800,
              "height": 1146
            }
          ]
        ]
      },
      {
        "name": "Kano Opportunity Wall & Word Search",
        "spec": "33 × 9 ft · 15 × 9 ft · Interactive",
        "note": "\"What should Kano build next?\" One column per pillar for guests to pin their ideas, next to a giant word search hiding Kano's strengths.",
        "rows": [
          [
            {
              "src": "/work/gta/in-opportunity-wall.jpg",
              "alt": "Opportunity wall and word search at the venue",
              "width": 1276,
              "height": 720
            }
          ],
          [
            {
              "src": "/work/gta/opportunity-wall.jpg",
              "alt": "Opportunity wall artwork",
              "width": 4990,
              "height": 1361
            }
          ],
          [
            {
              "src": "/work/gta/word-search.jpg",
              "alt": "Word search wall artwork",
              "width": 2700,
              "height": 1620
            }
          ]
        ]
      },
      {
        "name": "Partners Step-and-Repeat",
        "spec": "65 × 9 ft",
        "note": "Even, repeatable visibility for every partner in any photo taken along the wall.",
        "rows": [
          [
            {
              "src": "/work/gta/partners-wall.jpg",
              "alt": "Partners wall artwork",
              "width": 4992,
              "height": 702
            }
          ]
        ]
      },
      {
        "name": "Hall & Corridor Walls",
        "spec": "32 × 9 ft · 41 × 9 ft · 59 × 9 ft",
        "note": "The theme, the sub-theme and the gateway arch, repeated in long format through the venue.",
        "rows": [
          [
            {
              "src": "/work/gta/corridor-32.jpg",
              "alt": "32 ft corridor wall",
              "width": 2996,
              "height": 843
            }
          ],
          [
            {
              "src": "/work/gta/corridor-41.jpg",
              "alt": "41 ft corridor wall",
              "width": 4969,
              "height": 1092
            }
          ],
          [
            {
              "src": "/work/gta/corridor-59.jpg",
              "alt": "59 ft corridor wall",
              "width": 4957,
              "height": 757
            }
          ]
        ]
      },
      {
        "name": "Country Signs",
        "spec": "1 × 1 ft × 6",
        "note": "A sign for each delegation: flag, country name and the GTA footer bar.",
        "rows": [
          [
            {
              "src": "/work/gta/country-signs-mockup.jpg",
              "alt": "Country signs set",
              "width": 2400,
              "height": 1500
            }
          ]
        ]
      }
    ],
    "teaser": "/work/gta/gta-teaser.mp4",
    "films": [
      {
        "src": "/work/gta/gta-day-one.mp4",
        "poster": "/work/gta/poster.jpg",
        "label": "A glimpse into Day One at GTA 2026, with the venue branding in use."
      }
    ]
  },
  {
    "slug": "northern-creatives-conference-2025",
    "title": "Northern Creatives Conference 2025",
    "tagline": "Full event branding and venue branding · Northern Renaissance",
    "summary": "Event and venue branding for the Northern Creatives Conference 2025 in Kano, from the social campaign to the stage, speakers wall and certificates.",
    "cover": "/work/ncc/in-speakers-wall.jpg",
    "card": "/work/ncc/announcement.jpg",
    "films": [
      {
        "src": "/work/ncc/ncc-real-voices.mp4",
        "poster": "/work/ncc/poster-voices.jpg",
        "label": "Real voices, real impact: attendees on what NCC 2025 meant to them.",
        "portrait": true
      },
      {
        "src": "/work/ncc/ncc-welcome-remark.mp4",
        "poster": "/work/ncc/poster-welcome.jpg",
        "label": "Welcome remark by the Convener, Ramadan Yusuf, at the branded podium.",
        "portrait": true
      }
    ],
    "facts": [
      [
        "Client",
        "SparkLab Creativity & Innovation Hub"
      ],
      [
        "Event",
        "Northern Creatives Conference 2025"
      ],
      [
        "Date",
        "19 November 2025"
      ],
      [
        "Venue",
        "Meena Event Center, Kano"
      ],
      [
        "Role",
        "Full event branding & venue branding"
      ],
      [
        "Year",
        "2025"
      ]
    ],
    "about": [
      "The Northern Creatives Conference (NCC) brought together filmmakers, designers, performers, artisans, founders and policymakers at the Meena Event Center in Kano on 19 November 2025. It was powered by SparkLab Creativity & Innovation Hub under the theme \"Northern Renaissance: Transforming Northern Creative Landscape\". SBJ Studio handled the full event branding and venue branding: the campaign that filled the feed in the weeks before, and everything guests saw at the venue on the day.",
      "The system is built from parts that belong to the North. The Kano flyover monument is the photographic ground, a skyline of Kano landmarks runs along the base of every piece, and an adire-style pattern fills the information bars. Over that sit bold grotesque headlines, an italic serif for the voice of the theme, and arch-topped portrait frames that give every speaker the same stage.",
      "Four colourways (red and amber, blue, olive, and green) let the campaign move fast without losing its shape: speakers, panels, countdowns, audience posts and exhibitor cards each have their own colour, while the layout, footer and skyline stay fixed. At the venue the same parts grew to full scale: a red speakers wall, a teal stage and podium, a sponsors step-and-repeat and a branded entrance, so the conference felt like the campaign come to life.",
      "SBJ also joined the conference itself as a panelist in the Founders Chat session, \"The Stories Behind the Spark\"."
    ],
    "sections": [
      {
        "name": "Arrival & Entrance",
        "spec": "Venue · Entrance fascia, gate and 20 × 10 ft banners",
        "note": "Guests met the identity before they reached the hall: a red fascia over the entrance carrying the logo and theme, a teal gate patterned with the event's motif, and large banners along the walkway.",
        "rows": [
          [
            {
              "src": "/work/ncc/in-aerial.jpg",
              "alt": "Aerial view of the NCC 2025 venue entrance",
              "width": 720,
              "height": 1280
            },
            {
              "src": "/work/ncc/in-entrance-fascia.jpg",
              "alt": "Entrance fascia with logo and theme",
              "width": 720,
              "height": 1280
            },
            {
              "src": "/work/ncc/in-entrance-gate.jpg",
              "alt": "Guests walking through the branded entrance gate",
              "width": 720,
              "height": 1280
            }
          ],
          [
            {
              "src": "/work/ncc/in-artisans-banner.jpg",
              "alt": "For the Artisans banner at the venue",
              "width": 720,
              "height": 1280
            }
          ],
          [
            {
              "src": "/work/ncc/entrance-performers.jpg",
              "alt": "For the Performers entrance banner, 20 × 10 ft",
              "width": 2576,
              "height": 1288
            },
            {
              "src": "/work/ncc/entrance-artisans.jpg",
              "alt": "For the Artisans entrance banner, 20 × 10 ft",
              "width": 2600,
              "height": 1300
            }
          ]
        ]
      },
      {
        "name": "Speakers Wall",
        "spec": "Venue · 43 × 10 ft",
        "note": "Every speaker, panelist and moderator on one 43 ft wall, alternating portrait and name tiles in amber and maroon, with the Kano skyline along the base.",
        "rows": [
          [
            {
              "src": "/work/ncc/in-speakers-wall.jpg",
              "alt": "Speakers wall at the venue",
              "width": 720,
              "height": 1280
            }
          ],
          [
            {
              "src": "/work/ncc/speakers-banner.jpg",
              "alt": "Speakers banner artwork, 43 × 10 ft",
              "width": 3200,
              "height": 744
            }
          ]
        ]
      },
      {
        "name": "Tent Walls",
        "spec": "Venue · 22 × 10 ft panels outside the tent",
        "note": "The outside of the tent carried the theme, a creativity quote, the audiences NCC was built for, and a photo collage of creative work, each on the flyover monument with the skyline strip.",
        "rows": [
          [
            {
              "src": "/work/ncc/tent-wall-theme.jpg",
              "alt": "Theme wall, 22 × 10 ft",
              "width": 2576,
              "height": 1171
            }
          ],
          [
            {
              "src": "/work/ncc/tent-wall-quote.jpg",
              "alt": "Quote wall, 22 × 10 ft",
              "width": 2600,
              "height": 1182
            },
            {
              "src": "/work/ncc/tent-wall-who-its-for.jpg",
              "alt": "Who it's for wall, 22 × 10 ft",
              "width": 2600,
              "height": 1182
            }
          ],
          [
            {
              "src": "/work/ncc/outside-entrance.jpg",
              "alt": "Outside entrance wall, 22 × 10 ft",
              "width": 2600,
              "height": 1182
            }
          ]
        ]
      },
      {
        "name": "Stage, Podium & Hall",
        "spec": "Venue · Stage backdrop, podium front, hall",
        "note": "A teal stage system: the logo and theme on the backdrop, a podium front repeating the identity, and the skyline strip tying it to every other piece.",
        "rows": [
          [
            {
              "src": "/work/ncc/in-stage.jpg",
              "alt": "Convener at the branded podium in front of the stage backdrop",
              "width": 720,
              "height": 1280
            },
            {
              "src": "/work/ncc/in-hall.jpg",
              "alt": "The main hall during the conference",
              "width": 720,
              "height": 1280
            }
          ]
        ]
      },
      {
        "name": "Sponsors Step-and-Repeat",
        "spec": "Venue · Photo wall",
        "note": "The NCC 2025 lockup at the centre, with every partner and sponsor around it for photos.",
        "rows": [
          [
            {
              "src": "/work/ncc/in-sponsors-wall.jpg",
              "alt": "Sponsors step-and-repeat wall",
              "width": 720,
              "height": 1280
            }
          ]
        ]
      },
      {
        "name": "Key Visual & Announcement",
        "spec": "Campaign · Launch",
        "note": "The launch visual sets the system: the NCC mark, \"Northern Renaissance\" in bold with an italic serif line, the Kano flyover monument as the photographic ground, and the skyline strip.",
        "rows": [
          [
            {
              "src": "/work/ncc/announcement.jpg",
              "alt": "NCC 2025 announcement",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/ncc/happening-today.jpg",
              "alt": "Happening Today post",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "Teasers, Countdown & Registration",
        "spec": "Campaign · Build-up",
        "note": "Teasers and quotes opened the season (\"November in Kano\"), then countdown and registration posts reused the diagonal cut and monument photo, switching colourways to keep the feed fresh.",
        "rows": [
          [
            {
              "src": "/work/ncc/november-in-kano.jpg",
              "alt": "November in Kano teaser",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/ncc/quote-heritage.jpg",
              "alt": "Quote: Creativity is the bridge between heritage and possibility",
              "width": 1400,
              "height": 1750
            }
          ],
          [
            {
              "src": "/work/ncc/two-days-to-go.jpg",
              "alt": "Two days to go countdown",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/ncc/registration-reopened.jpg",
              "alt": "Registration reopened post",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "Who It's For",
        "spec": "Campaign · Audience series",
        "note": "A series speaking directly to each creative community, from performers to digital creators, with a photo, a short promise and the registration link.",
        "rows": [
          [
            {
              "src": "/work/ncc/for-performers.jpg",
              "alt": "For the Performers post",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/ncc/for-digital-creators.jpg",
              "alt": "For the Digital Creators post",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "Calls for Exhibitors & Volunteers",
        "spec": "Campaign · Recruitment",
        "note": "Recruitment posts in the same system: an exhibitor call with a branded 2 × 2 m stall shown in 3D, and a volunteer call in the olive colourway.",
        "rows": [
          [
            {
              "src": "/work/ncc/call-for-exhibitors.jpg",
              "alt": "Call for Exhibitors",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/ncc/call-for-volunteers.jpg",
              "alt": "Call for Volunteers",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "Advisory Board",
        "spec": "Campaign · Animated introductions",
        "note": "Short animated cards introducing each advisory board member, in a dark green colourway with the portrait frame and logo kept constant.",
        "rows": [
          [
            {
              "src": "/work/ncc/advisory-board-1.jpg",
              "alt": "Advisory board: Dr. Bashir Abdu Muzakkari",
              "width": 648,
              "height": 810,
              "video": "/work/ncc/advisory-board-1.mp4"
            },
            {
              "src": "/work/ncc/advisory-board-2.jpg",
              "alt": "Advisory board: Prince Daniel Aboki",
              "width": 648,
              "height": 810,
              "video": "/work/ncc/advisory-board-2.mp4"
            }
          ]
        ]
      },
      {
        "name": "Speakers & Panels",
        "spec": "Campaign · Line-up announcements",
        "note": "Panel line-ups and the full speakers board use one portrait frame and a role tag (Speaker, Panelist, Moderator) so every face sits in the same system.",
        "rows": [
          [
            {
              "src": "/work/ncc/speakers.jpg",
              "alt": "Speakers line-up",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/ncc/panel-framework.jpg",
              "alt": "Panel: Building a framework for a driven creative economy",
              "width": 1400,
              "height": 1750
            }
          ],
          [
            {
              "src": "/work/ncc/panel-passion-to-profit.jpg",
              "alt": "Panel: From Passion to Profit",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/ncc/founders-chat-panel.jpg",
              "alt": "Founders Chat panel line-up",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "Speaker Spotlights",
        "spec": "Campaign · Individual cards",
        "note": "One card per speaker: a portrait in a tall frame, the surname set vertically behind it, and the name and title below.",
        "rows": [
          [
            {
              "src": "/work/ncc/speaker-aisha-augie.jpg",
              "alt": "Speaker card: Aisha Adamu Augie",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/ncc/panelist-nazir-halliru.jpg",
              "alt": "Panelist card: Muhammad Nazir Halliru",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/ncc/panelist-emmanuel.jpg",
              "alt": "Panelist card: Emmanuel Emmanuel",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "Founders Chat",
        "spec": "Campaign · Session series",
        "note": "\"Founders Unscripted: The Stories Behind the Spark\". Black-and-white portraits on the blue colourway set this session apart from the main programme.",
        "rows": [
          [
            {
              "src": "/work/ncc/founders-chat-salamatu.jpg",
              "alt": "Founders Chat: Salamatu Adamu",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/ncc/founders-chat-sadiq-salihu.jpg",
              "alt": "Founders Chat: Sadiq Salihu Abubakar",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "Exhibitors",
        "spec": "Campaign · Exhibitor cards",
        "note": "A white logo card on the monument ground, so every exhibitor's own brand reads clearly.",
        "rows": [
          [
            {
              "src": "/work/ncc/exhibitor-qalb.jpg",
              "alt": "Exhibitor: Qalb Inc.",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/ncc/exhibitor-yare.jpg",
              "alt": "Exhibitor: Yare",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "Certificate of Appreciation",
        "spec": "Print · A4",
        "note": "The volunteer certificate brings the identity to print: the event motif on the edge, the skyline at the base and an NCC 2025 seal.",
        "rows": [
          [
            {
              "src": "/work/ncc/certificate.jpg",
              "alt": "Certificate of appreciation",
              "width": 1400,
              "height": 1980
            }
          ]
        ]
      }
    ]
  },
  {
    "slug": "global-shapers-community-kano",
    "title": "Global Shapers Community Kano",
    "tagline": "Campaign design · Recruitment, #ReadyToDecide, Alumni Day, Threads of Mercy, SNAP",
    "summary": "A year of campaign design for the Global Shapers Community Kano Hub: recruitment, a voter education campaign, Alumni Day, a Ramadan clothing drive, a nutrition programme and awareness days.",
    "cover": "/work/gsck/rec-13-years.jpg",
    "card": "/work/gsck/alumni-wall.jpg",
    "films": [],
    "facts": [
      [
        "Client",
        "Global Shapers Community – Kano Hub"
      ],
      [
        "Campaigns",
        "Recruitment 2026 · #ReadyToDecide · Alumni Day 2026 · Threads of Mercy · SNAP"
      ],
      [
        "Partners",
        "Northern Spine · Med For Her"
      ],
      [
        "Role",
        "Campaign design & social content"
      ],
      [
        "Year",
        "2026"
      ]
    ],
    "about": [
      "The Global Shapers Community Kano Hub has been part of the World Economic Forum's network since 2013. SBJ Studio designs its campaigns: recruitment, the #ReadyToDecide voter education campaign, Alumni Day, the annual Threads of Mercy clothing drive, the SNAP nutrition programme and the awareness days in between.",
      "Each campaign has its own job, so each gets its own look inside one system. Recruitment uses a deep blue with the Emir's palace gate behind the type and real photos of Shapers at work. #ReadyToDecide switches to green on a brushed white ground, with the voter card as the hero object. Alumni Day moves to light grounds and rounded blue forms. Threads of Mercy is warmer, with a lantern and a ticket-style title for Ramadan. SNAP uses duotone photos and a doodle pattern of food.",
      "What ties them together is the hub's skyline-ring logo, one blue, and a habit of putting the action in the same place: the deadline, the link or the account details always sit in a clear white or blue panel, so any single post can be shared and still work.",
      "Recruitment is told as a story before it asks for anything: what the community is, why it exists in Kano, then who the hub is looking for. Alumni Day opens by celebrating people before asking them to register."
    ],
    "sections": [
      {
        "name": "Recruitment 2026: Story Carousel",
        "spec": "Recruitment · Carousel",
        "note": "A carousel that answers the questions a new applicant would ask, in order: what the Global Shapers Community is, where it came from, how big it is, what the World Economic Forum link means and how long Kano has been part of it.",
        "rows": [
          [
            {
              "src": "/work/gsck/rec-what-is.jpg",
              "alt": "What is the Global Shapers Community?",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/rec-question.jpg",
              "alt": "It started with a question",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/rec-cities.jpg",
              "alt": "450+ cities. 150+ countries.",
              "width": 1400,
              "height": 1750
            }
          ],
          [
            {
              "src": "/work/gsck/rec-wef.jpg",
              "alt": "What does WEF have to do with it?",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/rec-since-2013.jpg",
              "alt": "Kano has been part of this since 2013",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/rec-13-years.jpg",
              "alt": "13 Years. 26+ Projects. One City.",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "Recruitment 2026: The Call",
        "spec": "Recruitment · Application posts",
        "note": "The call to apply: who the hub is looking for, the skills it needs and the requirements, each ending on the same closing date and short link so any post works on its own.",
        "rows": [
          [
            {
              "src": "/work/gsck/rec-builders.jpg",
              "alt": "We're Looking for Builders",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/rec-next-shaper.jpg",
              "alt": "Could you be our next shaper?",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "#ReadyToDecide: Voter Education Campaign",
        "spec": "Civic education · Launch",
        "note": "A non-partisan campaign helping young people in Kano register for their Permanent Voter Card. It opened with the campaign line, then a six-part roadmap of what followers would learn over the coming days.",
        "rows": [
          [
            {
              "src": "/work/gsck/rtd-ready.jpg",
              "alt": "Ready to Decide",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/rtd-your-voice.jpg",
              "alt": "Your Voice. Your PVC. Ready to Decide.",
              "width": 1400,
              "height": 1750
            }
          ],
          [
            {
              "src": "/work/gsck/rtd-what-to-expect.jpg",
              "alt": "Here's what to expect",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/rtd-join.jpg",
              "alt": "Join the movement",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "#ReadyToDecide: Why the PVC Matters",
        "spec": "Civic education · Awareness",
        "note": "The voter card is the hero object throughout, shown in hand or on a green plinth, so the message stays on one simple action.",
        "rows": [
          [
            {
              "src": "/work/gsck/rtd-access.jpg",
              "alt": "Your PVC is your access to participation",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/rtd-every-voice.jpg",
              "alt": "Every voice shapes the future",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/rtd-future.jpg",
              "alt": "Your future deserves your participation",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "#ReadyToDecide: Who Can Register & How",
        "spec": "Civic education · Step-by-step guide",
        "note": "Eligibility, the registration steps and what happens at the INEC centre, broken into one idea per post with icons and short lines anyone can follow.",
        "rows": [
          [
            {
              "src": "/work/gsck/rtd-who-can.jpg",
              "alt": "Who can register?",
              "width": 1399,
              "height": 1750
            },
            {
              "src": "/work/gsck/rtd-eligible.jpg",
              "alt": "You can register if you",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/rtd-how-to.jpg",
              "alt": "How to register for your PVC",
              "width": 1399,
              "height": 1750
            }
          ],
          [
            {
              "src": "/work/gsck/rtd-step-three.jpg",
              "alt": "Step three: visit an INEC registration centre",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/rtd-still-need-inec.jpg",
              "alt": "You may still need INEC",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "#ReadyToDecide: Myths vs Facts",
        "spec": "Civic education · Myth-busting",
        "note": "Red for the myth, green for the fact, stacked on one card so the correction reads at a glance, ending on the official INEC portal and a QR code.",
        "rows": [
          [
            {
              "src": "/work/gsck/rtd-myth-all-day.jpg",
              "alt": "Myth: registration takes all day",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/rtd-myth-once.jpg",
              "alt": "Myth: I can register more than once",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "#ReadyToDecide: Deadline & Election Season",
        "spec": "Civic education · Reminders and peace messaging",
        "note": "Deadline reminders before registration closed on 26 July 2026, then posts on staying informed and voting peacefully.",
        "rows": [
          [
            {
              "src": "/work/gsck/rtd-reminder.jpg",
              "alt": "Reminder: registration ends 26 July 2026",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/rtd-too-late.jpg",
              "alt": "Don't wait until it's too late",
              "width": 1399,
              "height": 1750
            }
          ],
          [
            {
              "src": "/work/gsck/rtd-informed.jpg",
              "alt": "Be an informed citizen",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/rtd-vote-peacefully.jpg",
              "alt": "Vote peacefully",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "Alumni Day 2026",
        "spec": "Campaign · Launch, webinar and carousel",
        "note": "The campaign opened with a wall of more than 40 alumni portraits, then the webinar announcements with a repeated details row and QR register bar, then a carousel on why alumni engagement matters.",
        "rows": [
          [
            {
              "src": "/work/gsck/alumni-wall.jpg",
              "alt": "Alumni Day 2026: celebrating the alumni of the Global Shapers Community Kano Hub",
              "width": 1400,
              "height": 1750
            }
          ],
          [
            {
              "src": "/work/gsck/webinar-announcement.jpg",
              "alt": "Alumni Day Webinar announcement",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/webinar-reconnecting.jpg",
              "alt": "Reconnecting Alumni, Renewing Impact announcement",
              "width": 1400,
              "height": 1750
            }
          ],
          [
            {
              "src": "/work/gsck/carousel-cover.jpg",
              "alt": "The Enduring Value of the Shaper Journey",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/carousel-collective-impact.jpg",
              "alt": "Reconnecting for Collective Impact",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/carousel-leadership.jpg",
              "alt": "Leadership Beyond Membership",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "Threads of Mercy: Annual Clothing Drive",
        "spec": "Campaign · Ramadan fundraising, with Northern Spine",
        "note": "A Ramadan clothing drive for vulnerable families before Eid. A ticket-style title lockup, a lantern motif and a soft geometric pattern carry every post, from the launch to the sponsorship tiers and the final-days reminder.",
        "rows": [
          [
            {
              "src": "/work/gsck/tom-launch.jpg",
              "alt": "Threads of Mercy launch",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/tom-donate-clothing.jpg",
              "alt": "Donate Clothing. Restore Dignity.",
              "width": 1400,
              "height": 1750
            }
          ],
          [
            {
              "src": "/work/gsck/tom-sponsor-outfit.jpg",
              "alt": "Sponsor One Eid Outfit",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/tom-final-days.jpg",
              "alt": "Final Days to Donate",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "SNAP: Shaping Nutrition Awareness Program",
        "spec": "Health education · With Med For Her",
        "note": "A nutrition awareness series on infant and child feeding. Myths are set against facts, and \"Did you know?\" cards pair one fact with a duotone photo, so the message stays clear and the people pictured stay respected.",
        "rows": [
          [
            {
              "src": "/work/gsck/snap-cover.jpg",
              "alt": "Myths vs Facts: Infant & Child Nutrition Edition",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/snap-myth-fact.jpg",
              "alt": "Myth and fact card",
              "width": 1400,
              "height": 1750
            }
          ],
          [
            {
              "src": "/work/gsck/snap-hygiene.jpg",
              "alt": "Did you know? Food hygiene",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/snap-feeding.jpg",
              "alt": "Did you know? Feeding practices",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/gsck/snap-food-groups.jpg",
              "alt": "Did you know? Food groups",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "Awareness Days",
        "spec": "Social · Observance posts",
        "note": "The same hub identity carried into international observance days, with the skyline ring of the logo reused as a soft backdrop.",
        "rows": [
          [
            {
              "src": "/work/gsck/world-food-day.jpg",
              "alt": "World Food Day post",
              "width": 1080,
              "height": 1350
            },
            {
              "src": "/work/gsck/girl-child-day.jpg",
              "alt": "International Day of the Girl Child post",
              "width": 1080,
              "height": 1350
            }
          ]
        ]
      }
    ]
  },
  {
    "slug": "agri-preneurship-for-youth-2025",
    "title": "Agri-Preneurship for Youth 2025",
    "tagline": "Event branding · Beyond the Soil: Building Agribusiness Minds",
    "summary": "Event and campaign branding for the Agri-Preneurship for Youth 2025 seminar in Kano, from the stage backdrop to speaker cards and the countdown.",
    "cover": "/work/agri/stage-podium.jpg",
    "coverWide": true,
    "card": "/work/agri/stage-main.jpg",
    "films": [],
    "facts": [
      [
        "Event",
        "Agricultural Seminar: Beyond the Soil"
      ],
      [
        "Date",
        "6 September 2025"
      ],
      [
        "Venue",
        "Coronation Hall, Kano State Government House"
      ],
      [
        "Supported by",
        "U.S. Department of State · IRIS · YES Alumni Nigeria"
      ],
      [
        "Role",
        "Event branding & campaign design"
      ],
      [
        "Year",
        "2025"
      ]
    ],
    "about": [
      "Agri-Preneurship for Youth 2025 is a programme to train, equip and inspire young people to build businesses in agriculture. It opened with an agricultural seminar, \"Beyond the Soil: Building Agribusiness Minds\", on 6 September 2025 at the Coronation Hall, Kano State Government House, followed by pre-season training, demonstration farms and mentorship.",
      "SBJ Studio designed the event identity and the campaign around it: the stage backdrop and outdoor banner, the project launch and partnership call, the seminar flyer, keynote and panel cards, and the countdown.",
      "The system is built from the field itself. A band of geometric leaf, sprout and furrow shapes in four greens closes every piece, soft farm photography fades into a pale green ground, and a condensed headline sits over a rounded speech-bubble label that tells you what each post is about at a glance.",
      "With a long list of partners and collaborators, the logos were given their own place: the supporting partners in a row at the top of every piece, and the collaborators in a white bar or band at the base, so the event title always stays the hero."
    ],
    "sections": [
      {
        "name": "Stage Backdrop",
        "spec": "Venue · Main stage",
        "note": "The seminar title, the supporting partners and every collaborator's logo on one backdrop, framed top and bottom by a band of leaf and field shapes.",
        "rows": [
          [
            {
              "src": "/work/agri/stage-main.jpg",
              "alt": "Main stage backdrop",
              "width": 1672,
              "height": 941
            }
          ],
          [
            {
              "src": "/work/agri/hall-setup.jpg",
              "alt": "Panel stage setup",
              "width": 1672,
              "height": 941
            }
          ]
        ]
      },
      {
        "name": "Outdoor Banner",
        "spec": "Venue · Roll-up / standing banner",
        "note": "The same layout cut down for the entrance, so guests meet the event before they reach the hall.",
        "rows": [
          [
            {
              "src": "/work/agri/outdoor-banner.jpg",
              "alt": "Outdoor banner",
              "width": 1536,
              "height": 1024
            }
          ]
        ]
      },
      {
        "name": "Project Launch",
        "spec": "Campaign · Announcement",
        "note": "Introduces the wider programme, from the seminar to pre-season training, demonstration farms and step-down training, then calls on organisations to partner.",
        "rows": [
          [
            {
              "src": "/work/agri/flyer-project.jpg",
              "alt": "Agri-Preneurship for Youth 2025 project flyer",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/agri/partner-with-us.jpg",
              "alt": "Partner With Us",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "Seminar Flyer",
        "spec": "Campaign · Registration",
        "note": "The main seminar flyer: why attend, who's coming, date, venue and a registration link, with the partner logos in a white bar at the base.",
        "rows": [
          [
            {
              "src": "/work/agri/flyer-seminar.jpg",
              "alt": "Beyond the Soil seminar flyer",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "Keynote Speakers",
        "spec": "Campaign · Speaker cards",
        "note": "Each keynote card pairs the speaker's portrait with the title of their talk, set large as a quote.",
        "rows": [
          [
            {
              "src": "/work/agri/keynote-1.jpg",
              "alt": "Keynote speaker 1",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/agri/keynote-2.jpg",
              "alt": "Keynote speaker 2",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/agri/keynote-3.jpg",
              "alt": "Keynote speaker 3",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "Panels",
        "spec": "Campaign · Panel line-ups",
        "note": "Three panel line-ups with the moderator first and every panelist in the same ring frame.",
        "rows": [
          [
            {
              "src": "/work/agri/panel-1.jpg",
              "alt": "Panel 1",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/agri/panel-2.jpg",
              "alt": "Panel 2",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/agri/panel-3.jpg",
              "alt": "Panel 3",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      },
      {
        "name": "Countdown",
        "spec": "Campaign · Final days",
        "note": "A ticket-shaped number counts down to the day, ending on a bold \"Happening Today\".",
        "rows": [
          [
            {
              "src": "/work/agri/countdown-2.jpg",
              "alt": "2 days to go",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/agri/countdown-1.jpg",
              "alt": "1 day to go",
              "width": 1400,
              "height": 1750
            },
            {
              "src": "/work/agri/happening-today.jpg",
              "alt": "Happening today",
              "width": 1400,
              "height": 1750
            }
          ]
        ]
      }
    ]
  },
  {
    "slug": "certis-brand-identity",
    "title": "Certis",
    "tagline": "Brand identity · Logo, guidelines and applications",
    "summary": "Brand identity for Certis, a multi-disciplinary consulting firm: logo, icon, typography, colour, pattern, a full brand guideline and applications from stationery to signage.",
    "cover": "/work/certis/logo-animation.jpg",
    "card": "/work/certis/p59.jpg",
    "films": [
      {
        "src": "/work/certis/logo-animation.mp4",
        "poster": "/work/certis/logo-animation.jpg",
        "label": "Certis logo animation."
      }
    ],
    "facts": [
      [
        "Client",
        "Certis"
      ],
      [
        "Sector",
        "Multi-disciplinary consulting"
      ],
      [
        "Deliverables",
        "Logo · Icon · Brand guidelines · Applications"
      ],
      [
        "Role",
        "Brand identity design"
      ]
    ],
    "about": [
      "Certis is a multi-disciplinary consulting firm working across strategy, engineering, human capital, financial advisory and policy. It needed an identity that reads as credible and technically grounded, but still feels like it moves.",
      "The answer is a single forward-leaning red mark that cuts into the C of the wordmark: a sign of progress breaking through structure. On its own the C and mark become the icon, and repeated the mark becomes a pattern of slanted blocks used at the edges of layouts.",
      "The palette is deliberately restrained: deep navy for authority, one red for energy, and slate for balance. Konnect sets the headlines and Montserrat the text, and a simple grid keeps every page and post in order.",
      "Everything is documented in a full brand guideline, from clear space and misuse to social layouts, stationery, signage, apparel and merchandise, so the brand holds together wherever it appears."
    ],
    "sections": [
      {
        "name": "Brand Guidelines",
        "spec": "Guideline · Introduction",
        "note": "A complete guideline covering the logo, icon, typography, colour, pattern, imagery, layout and applications, so every team and supplier builds Certis the same way.",
        "rows": [
          [
            {
              "src": "/work/certis/p01.jpg",
              "alt": "Brand guidelines cover",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/certis/p02.jpg",
              "alt": "Hello, we are Certis",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p06.jpg",
              "alt": "Logotype",
              "width": 1778,
              "height": 1000
            }
          ]
        ]
      },
      {
        "name": "Logo & Icon",
        "spec": "Identity · Marks",
        "note": "The wordmark carries a forward-leaning red mark that cuts into the C. On its own, that C becomes the icon for app tiles, avatars and signage.",
        "rows": [
          [
            {
              "src": "/work/certis/p07.jpg",
              "alt": "Logo versions",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p12.jpg",
              "alt": "Colour combinations",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/certis/p17.jpg",
              "alt": "The Certis icon",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p15.jpg",
              "alt": "Logo misuse",
              "width": 1778,
              "height": 1000
            }
          ]
        ]
      },
      {
        "name": "Typography & Colour",
        "spec": "Identity · System",
        "note": "Konnect for headlines and Montserrat for text, with deep navy #041F41, Certis red #ED2736 and slate #474C54 as the core palette.",
        "rows": [
          [
            {
              "src": "/work/certis/p23.jpg",
              "alt": "Primary typeface",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p24.jpg",
              "alt": "Secondary typeface",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/certis/p26.jpg",
              "alt": "Type colour use cases",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p32.jpg",
              "alt": "Primary colours",
              "width": 1778,
              "height": 1000
            }
          ]
        ]
      },
      {
        "name": "Pattern, Imagery & Layout",
        "spec": "Identity · Supporting elements",
        "note": "The red mark repeats into a pattern of slanted blocks, used at the edges of layouts. Imagery shows real people at work, and a simple grid keeps every page in order.",
        "rows": [
          [
            {
              "src": "/work/certis/p36.jpg",
              "alt": "Pattern",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p39.jpg",
              "alt": "Imagery",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/certis/p41.jpg",
              "alt": "Grid and layout",
              "width": 1778,
              "height": 1000
            }
          ]
        ]
      },
      {
        "name": "Social & Digital",
        "spec": "Applications · Online",
        "note": "Social posts, profile layouts and web banners built on the navy ground with a single red accent.",
        "rows": [
          [
            {
              "src": "/work/certis/p28.jpg",
              "alt": "Social media posts",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p29.jpg",
              "alt": "Social layouts",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/certis/p30.jpg",
              "alt": "Web banner",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p20.jpg",
              "alt": "Social media profiles",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/certis/p64.jpg",
              "alt": "App icon",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p65.jpg",
              "alt": "Browser and app",
              "width": 1778,
              "height": 1000
            }
          ]
        ]
      },
      {
        "name": "Stationery & ID",
        "spec": "Applications · Print",
        "note": "Letterhead, business cards and ID cards, with the pattern bleeding off the edges.",
        "rows": [
          [
            {
              "src": "/work/certis/p44.jpg",
              "alt": "Applications overview",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/certis/p45.jpg",
              "alt": "Letterhead",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p46.jpg",
              "alt": "Business card",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/certis/p47.jpg",
              "alt": "ID card",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p48.jpg",
              "alt": "Stationery set",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/certis/p49.jpg",
              "alt": "Stationery mockup",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p50.jpg",
              "alt": "Business card mockup",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/certis/p51.jpg",
              "alt": "Business card mockup",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p52.jpg",
              "alt": "Business card mockup",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/certis/p53.jpg",
              "alt": "ID card mockup",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p54.jpg",
              "alt": "ID card mockup",
              "width": 1778,
              "height": 1000
            }
          ]
        ]
      },
      {
        "name": "Outdoor & Signage",
        "spec": "Applications · Environment",
        "note": "Street posters, flags, roll-ups and building signage, where the wordmark and the red mark have to work at a distance.",
        "rows": [
          [
            {
              "src": "/work/certis/p55.jpg",
              "alt": "Street poster",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p56.jpg",
              "alt": "Street poster",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/certis/p57.jpg",
              "alt": "Flags",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p58.jpg",
              "alt": "Icon signage",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/certis/p59.jpg",
              "alt": "Building signage",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p60.jpg",
              "alt": "Building signage",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/certis/p66.jpg",
              "alt": "Hanging signs",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p67.jpg",
              "alt": "Billboards",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/certis/p68.jpg",
              "alt": "Billboards",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p73.jpg",
              "alt": "Roll-up banners",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/certis/p74.jpg",
              "alt": "Roll-up banners",
              "width": 1778,
              "height": 1000
            }
          ]
        ]
      },
      {
        "name": "Apparel & Merchandise",
        "spec": "Applications · Merch",
        "note": "Sweatshirts, T-shirts, mugs, notepads, badges and tote bags.",
        "rows": [
          [
            {
              "src": "/work/certis/p61.jpg",
              "alt": "Sweatshirts",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p62.jpg",
              "alt": "T-shirts",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/certis/p63.jpg",
              "alt": "Mugs",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p69.jpg",
              "alt": "Notepads",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/certis/p70.jpg",
              "alt": "Notepad",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p71.jpg",
              "alt": "Badges",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/certis/p72.jpg",
              "alt": "Badges",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/certis/p75.jpg",
              "alt": "Tote bags",
              "width": 1778,
              "height": 1000
            }
          ]
        ]
      }
    ]
  },
  {
    "slug": "zero-bola-brand-identity",
    "title": "Zero Bola",
    "tagline": "Brand identity · Logo, guidelines and applications",
    "summary": "Brand identity for Zero Bola, a deep-tech company turning African waste into high-performance assets: logo system, sub-brands, colour, typography, patterns and a full brand guideline.",
    "cover": "/work/zerobola/p63.jpg",
    "coverWide": true,
    "card": "/work/zerobola/p69.jpg",
    "films": [],
    "facts": [
      [
        "Client",
        "Zero Bola"
      ],
      [
        "Sector",
        "Deep-tech circular economy"
      ],
      [
        "Deliverables",
        "Logo system · Sub-brands · Brand guidelines · Applications"
      ],
      [
        "Role",
        "Brand identity design"
      ],
      [
        "Year",
        "2026"
      ]
    ],
    "about": [
      "Zero Bola works on what it calls radical circularity: converting environmental liabilities into sovereign assets, and bridging scientific research with industrial markets. Its name comes from \"bola\", the Hausa word for waste, and its line is \"Engineering the Biological Revolution\".",
      "The identity is built on one idea: a closed loop with a way out. The name sits inside a circular arrow, and one end breaks out as an arrow pointing up, so the mark reads as waste going in and value coming out. The same loop carries through the sub-brands, Zero Bola Engine, Engineered and Verified.",
      "A deep forest green gives the brand the weight of a science company, while bright biological greens bring the energy of growth. A flowing line pattern drawn from the loop runs along the edges of layouts, and rounded headlines keep the tone approachable.",
      "Everything is documented in a full brand guideline, from narrative and logo rules to icons, imagery, grids and applications: stationery, exhibition, outdoor, social, apparel and vehicles."
    ],
    "sections": [
      {
        "name": "Brand Narrative",
        "spec": "Guideline · Purpose, vision, mission",
        "note": "Zero Bola turns Africa's waste into high-performance assets. The guideline opens with why the company exists before showing a single logo.",
        "rows": [
          [
            {
              "src": "/work/zerobola/p01.jpg",
              "alt": "Zero Bola brand guidelines cover",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/zerobola/p06.jpg",
              "alt": "Purpose",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/zerobola/p07.jpg",
              "alt": "Vision and mission",
              "width": 1778,
              "height": 1000
            }
          ]
        ]
      },
      {
        "name": "Logo System",
        "spec": "Identity · Logomark and colourways",
        "note": "The name sits inside a circular arrow, the symbol of a closed loop, with one end breaking out as an arrow: waste going in, value coming out.",
        "rows": [
          [
            {
              "src": "/work/zerobola/p13.jpg",
              "alt": "Zero Bola logo",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/zerobola/p09.jpg",
              "alt": "Logo construction",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/zerobola/p14.jpg",
              "alt": "Logo colourways",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/zerobola/p15.jpg",
              "alt": "Logo usage",
              "width": 1778,
              "height": 1000
            }
          ]
        ]
      },
      {
        "name": "Sub-brands",
        "spec": "Identity · Endorsed marks",
        "note": "Zero Bola Engine, Engineered and Verified share the same loop, so every product and certification reads as part of one family.",
        "rows": [
          [
            {
              "src": "/work/zerobola/p19.jpg",
              "alt": "Sub-brands",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/zerobola/p20.jpg",
              "alt": "Sub-brands on dark",
              "width": 1778,
              "height": 1000
            }
          ]
        ]
      },
      {
        "name": "Colour & Typography",
        "spec": "Identity · System",
        "note": "A deep-tech forest green core with bright biological greens as accents, set in Polly Rounded for headlines and Helvetica for text.",
        "rows": [
          [
            {
              "src": "/work/zerobola/p22.jpg",
              "alt": "Primary colours",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/zerobola/p23.jpg",
              "alt": "Secondary colours",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/zerobola/p30.jpg",
              "alt": "Primary typeface",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/zerobola/p31.jpg",
              "alt": "Secondary typeface",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/zerobola/p36.jpg",
              "alt": "Typography highlights",
              "width": 1778,
              "height": 1000
            }
          ]
        ]
      },
      {
        "name": "Patterns, Icons & Imagery",
        "spec": "Identity · Supporting elements",
        "note": "A flowing line pattern taken from the loop, custom icons for the company's processes, and imagery of real labs, waste streams and people at work.",
        "rows": [
          [
            {
              "src": "/work/zerobola/p38.jpg",
              "alt": "Patterns",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/zerobola/p40.jpg",
              "alt": "Gradients",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/zerobola/p43.jpg",
              "alt": "Icons",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/zerobola/p44.jpg",
              "alt": "Icon set",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/zerobola/p50.jpg",
              "alt": "Imagery",
              "width": 1778,
              "height": 1000
            }
          ]
        ]
      },
      {
        "name": "Stationery & ID",
        "spec": "Applications · Print",
        "note": "ID cards, business cards, letterhead and notebooks.",
        "rows": [
          [
            {
              "src": "/work/zerobola/p53.jpg",
              "alt": "ID cards",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/zerobola/p54.jpg",
              "alt": "Business cards",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/zerobola/p55.jpg",
              "alt": "Letterhead",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/zerobola/p60.jpg",
              "alt": "Notebooks",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/zerobola/p61.jpg",
              "alt": "Business card mockup",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/zerobola/p62.jpg",
              "alt": "Stationery set",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/zerobola/p74.jpg",
              "alt": "Folders",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/zerobola/p75.jpg",
              "alt": "Packaging",
              "width": 1778,
              "height": 1000
            }
          ]
        ]
      },
      {
        "name": "Exhibition & Outdoor",
        "spec": "Applications · Environment",
        "note": "Pull-up banners, an exhibition booth, posters, billboards and a branded van, where the loop pattern does the heavy lifting at scale.",
        "rows": [
          [
            {
              "src": "/work/zerobola/p41.jpg",
              "alt": "Pull-up banners",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/zerobola/p56.jpg",
              "alt": "Exhibition booth",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/zerobola/p63.jpg",
              "alt": "Billboard",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/zerobola/p71.jpg",
              "alt": "Billboard",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/zerobola/p68.jpg",
              "alt": "Posters",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/zerobola/p69.jpg",
              "alt": "Branded van",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/zerobola/p70.jpg",
              "alt": "Branded van",
              "width": 1778,
              "height": 1000
            }
          ]
        ]
      },
      {
        "name": "Social & Digital",
        "spec": "Applications · Online",
        "note": "Social posts, Facebook and LinkedIn pages, each carrying one strong line on the green ground.",
        "rows": [
          [
            {
              "src": "/work/zerobola/p57.jpg",
              "alt": "Social posts",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/zerobola/p58.jpg",
              "alt": "Social posts",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/zerobola/p59.jpg",
              "alt": "Social posts",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/zerobola/p72.jpg",
              "alt": "Facebook page",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/zerobola/p73.jpg",
              "alt": "LinkedIn page",
              "width": 1778,
              "height": 1000
            }
          ]
        ]
      },
      {
        "name": "Apparel & Merchandise",
        "spec": "Applications · Merch",
        "note": "Shirts, caps, T-shirts, team wear and badges.",
        "rows": [
          [
            {
              "src": "/work/zerobola/p25.jpg",
              "alt": "Team in uniform",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/zerobola/p64.jpg",
              "alt": "Shirt and cap",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/zerobola/p65.jpg",
              "alt": "Shirt and cap",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/zerobola/p66.jpg",
              "alt": "T-shirt",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/zerobola/p67.jpg",
              "alt": "T-shirt colours",
              "width": 1778,
              "height": 1000
            },
            {
              "src": "/work/zerobola/p76.jpg",
              "alt": "Badge",
              "width": 1778,
              "height": 1000
            }
          ],
          [
            {
              "src": "/work/zerobola/p77.jpg",
              "alt": "Badge",
              "width": 1778,
              "height": 1000
            }
          ]
        ]
      }
    ]
  },
  {
    "slug": "kanofirst-media-brand-guidelines",
    "title": "KanoFirst Media",
    "tagline": "Brand identity · Guidelines, social system and applications",
    "summary": "A brand book for an independent Kano newsroom: one mark, four colours, three typefaces and a social post frame that makes every story recognisable before it is read.",
    "cover": "/work/kanofirst/p01.jpg",
    "coverWide": true,
    "card": "/work/kanofirst/p23.jpg",
    "films": [],
    "facts": [
      [
        "Client",
        "KanoFirst Media"
      ],
      [
        "Sector",
        "News & media"
      ],
      [
        "Location",
        "Kano, Nigeria"
      ],
      [
        "Deliverables",
        "Brand guidelines · Social templates · Print & digital applications"
      ]
    ],
    "about": [
      "KanoFirst Media is an independent news and media platform from Kano State. It reports on leadership, governance and community development, and wants Northern Nigeria seen through its progress, its innovators and its people.",
      "As the newsroom grew, posts, badges, banners and videos were being made by different hands, and they had begun to look like different outlets. A newsroom earns trust through consistency, so the brand needed one clear set of rules.",
      "We wrote those rules into a 31-page guideline. It sets the mark and its four versions, a palette led by KanoFirst Teal with greens and a lime accent, and three typefaces with three jobs: Helvetica Neue for headlines, Montserrat for text and Hausa, Oswald for the wordmark only. It also covers a voice that sounds like a newsroom, not a campaign, with writing rules for English and Hausa.",
      "The imagery is Kano itself, from Gidan Rumfa to the Durbar and Water View. The applications include a fixed 4:5 social frame with five editable templates, stationery, press badges, the website, video lower thirds and outdoor banners."
    ],
    "sections": [
      {
        "name": "Brand Foundation",
        "spec": "Purpose · Values · Voice",
        "note": "Who KanoFirst is, what it does, and how it sounds: credible, neutral, clear and local, with rules for headlines, money, dates and Hausa letters.",
        "rows": [
          [
            {
              "src": "/work/kanofirst/p02.jpg",
              "alt": "Introduction page",
              "width": 1755,
              "height": 1240
            }
          ],
          [
            {
              "src": "/work/kanofirst/p05.jpg",
              "alt": "Who we are",
              "width": 1755,
              "height": 1240
            },
            {
              "src": "/work/kanofirst/p07.jpg",
              "alt": "Personality and voice",
              "width": 1755,
              "height": 1240
            }
          ]
        ]
      },
      {
        "name": "Logo",
        "spec": "Mark · Versions · Placement",
        "note": "A square built like a front page. Four versions for different uses, and clear guidance on where the logo sits on photos and colour.",
        "rows": [
          [
            {
              "src": "/work/kanofirst/p10.jpg",
              "alt": "Logo construction",
              "width": 1755,
              "height": 1240
            }
          ],
          [
            {
              "src": "/work/kanofirst/p11.jpg",
              "alt": "Logo versions",
              "width": 1755,
              "height": 1240
            },
            {
              "src": "/work/kanofirst/p13.jpg",
              "alt": "Logo placement",
              "width": 1755,
              "height": 1240
            }
          ]
        ]
      },
      {
        "name": "Colour & Type",
        "spec": "Palette · Typography",
        "note": "Teal leads, greens build energy, lime is the accent and mint washes print. Each typeface has one job, with a glyph check for Hausa letters and the naira sign.",
        "rows": [
          [
            {
              "src": "/work/kanofirst/p15.jpg",
              "alt": "Colour palette",
              "width": 1755,
              "height": 1240
            },
            {
              "src": "/work/kanofirst/p17.jpg",
              "alt": "Typography",
              "width": 1755,
              "height": 1240
            }
          ]
        ]
      },
      {
        "name": "Kit & Photography",
        "spec": "Graphic elements · Imagery",
        "note": "The shapes, skyline and icons that build every layout, and honest photojournalism of real Kano people and places.",
        "rows": [
          [
            {
              "src": "/work/kanofirst/p19.jpg",
              "alt": "Graphic kit",
              "width": 1755,
              "height": 1240
            },
            {
              "src": "/work/kanofirst/p20.jpg",
              "alt": "Photography",
              "width": 1755,
              "height": 1240
            }
          ]
        ]
      },
      {
        "name": "Social Post System",
        "spec": "1080 × 1350 · English & Hausa",
        "note": "One frame for every story. The logo, margins and footer never move, so the feed reads like pages of the same paper.",
        "rows": [
          [
            {
              "src": "/work/kanofirst/p22.jpg",
              "alt": "Social post anatomy",
              "width": 1755,
              "height": 1240
            }
          ],
          [
            {
              "src": "/work/kanofirst/p23.jpg",
              "alt": "Social posts on phones",
              "width": 1755,
              "height": 1240
            }
          ],
          [
            {
              "src": "/work/kanofirst/p24.jpg",
              "alt": "Instagram feed",
              "width": 1755,
              "height": 1240
            },
            {
              "src": "/work/kanofirst/p25.jpg",
              "alt": "Post templates",
              "width": 1755,
              "height": 1240
            }
          ]
        ]
      },
      {
        "name": "Print, Press & Web",
        "spec": "Stationery · Badges · Website",
        "note": "Letterhead, business cards and envelopes, press badges and a mic flag for the field, and the KanoFirst website on desktop and mobile.",
        "rows": [
          [
            {
              "src": "/work/kanofirst/p26.jpg",
              "alt": "Stationery",
              "width": 1755,
              "height": 1240
            },
            {
              "src": "/work/kanofirst/p27.jpg",
              "alt": "Press badges and mic flag",
              "width": 1755,
              "height": 1240
            }
          ],
          [
            {
              "src": "/work/kanofirst/p28.jpg",
              "alt": "Website",
              "width": 1755,
              "height": 1240
            }
          ]
        ]
      },
      {
        "name": "Video & Outdoor",
        "spec": "YouTube · Banners",
        "note": "Thumbnails and lower thirds for KanoFirst TV, roll-up and billboard formats, and a closing page with the Kano skyline.",
        "rows": [
          [
            {
              "src": "/work/kanofirst/p29.jpg",
              "alt": "Video and YouTube",
              "width": 1755,
              "height": 1240
            },
            {
              "src": "/work/kanofirst/p30.jpg",
              "alt": "Outdoor banners",
              "width": 1755,
              "height": 1240
            }
          ],
          [
            {
              "src": "/work/kanofirst/p31.jpg",
              "alt": "Back cover",
              "width": 1755,
              "height": 1240
            }
          ]
        ]
      }
    ]
  },
  {
    "slug": "sdeen-logistics-brand-identity",
    "title": "SDEEN Logistics",
    "tagline": "Brand identity · Logo, guidelines and applications",
    "summary": "Brand identity for SDEEN Logistics, a delivery and logistics company: logo, colour, typography, pattern, branded merchandise and social posts.",
    "cover": "/work/sdeen/p32.jpg",
    "coverWide": true,
    "card": "/work/sdeen/p25.jpg",
    "films": [],
    "facts": [
      [
        "Client",
        "SDEEN Logistics"
      ],
      [
        "Sector",
        "Logistics & delivery"
      ],
      [
        "Deliverables",
        "Logo · Brand manual · Merchandise · Social posts"
      ],
      [
        "Role",
        "Brand identity design"
      ]
    ],
    "about": [
      "SDEEN Logistics moves parcels and goods for people and businesses. It needed a brand that says speed and reliability at a glance, on a van, a rider's cap or a phone screen.",
      "The mark combines the S and D of the name into one symbol made of two forward-pointing arrows, so the initials and the idea of movement are the same shape. It works on its own as an icon, or alongside the SDEEN LOGISTICS wordmark in vertical and horizontal versions.",
      "The palette keeps to three colours: navy for trust, red for urgency and white for clarity. Montserrat sets every line, and the arrow mark repeats into a bold pattern used along the edges of pages and products.",
      "The brand manual covers logo use, placement, colour, type and pattern, and shows the identity on uniforms, signage, stationery and the first social posts."
    ],
    "sections": [
      {
        "name": "Logo",
        "spec": "Identity · Combination mark",
        "note": "An S and a D joined into one mark, built from two forward arrows. It reads as the company's initials and as movement at the same time.",
        "rows": [
          [
            {
              "src": "/work/sdeen/p01.jpg",
              "alt": "SDEEN Logistics brand guidelines cover",
              "width": 1754,
              "height": 1241
            }
          ],
          [
            {
              "src": "/work/sdeen/p04.jpg",
              "alt": "Logo mark construction",
              "width": 1754,
              "height": 1241
            },
            {
              "src": "/work/sdeen/p05.jpg",
              "alt": "Logo mark colourways",
              "width": 1754,
              "height": 1241
            }
          ],
          [
            {
              "src": "/work/sdeen/p07.jpg",
              "alt": "Logo variations",
              "width": 1754,
              "height": 1241
            },
            {
              "src": "/work/sdeen/p08.jpg",
              "alt": "Black and white versions",
              "width": 1754,
              "height": 1241
            }
          ],
          [
            {
              "src": "/work/sdeen/p10.jpg",
              "alt": "Primary logo",
              "width": 1754,
              "height": 1241
            },
            {
              "src": "/work/sdeen/p11.jpg",
              "alt": "Secondary logo",
              "width": 1754,
              "height": 1241
            }
          ]
        ]
      },
      {
        "name": "Typography, Colour & Pattern",
        "spec": "Identity · System",
        "note": "Montserrat throughout, a palette of navy #1B2E59, red #E92031 and white, and a pattern of repeated arrow marks that runs along the edge of every page.",
        "rows": [
          [
            {
              "src": "/work/sdeen/p15.jpg",
              "alt": "Typography",
              "width": 1754,
              "height": 1241
            },
            {
              "src": "/work/sdeen/p17.jpg",
              "alt": "Colour palette",
              "width": 1754,
              "height": 1241
            }
          ],
          [
            {
              "src": "/work/sdeen/p19.jpg",
              "alt": "Pattern",
              "width": 1754,
              "height": 1241
            },
            {
              "src": "/work/sdeen/p12.jpg",
              "alt": "Logo misuse",
              "width": 1754,
              "height": 1241
            }
          ]
        ]
      },
      {
        "name": "Branding Elements",
        "spec": "Applications · Merch, signage and stationery",
        "note": "Uniform T-shirts, caps, a wall sign, business cards, letterhead, a notebook and a mug.",
        "rows": [
          [
            {
              "src": "/work/sdeen/p21.jpg",
              "alt": "T-shirt",
              "width": 1754,
              "height": 1241
            },
            {
              "src": "/work/sdeen/p22.jpg",
              "alt": "T-shirt",
              "width": 1754,
              "height": 1241
            }
          ],
          [
            {
              "src": "/work/sdeen/p23.jpg",
              "alt": "Cap",
              "width": 1754,
              "height": 1241
            },
            {
              "src": "/work/sdeen/p24.jpg",
              "alt": "Cap",
              "width": 1754,
              "height": 1241
            }
          ],
          [
            {
              "src": "/work/sdeen/p25.jpg",
              "alt": "Wall sign",
              "width": 1754,
              "height": 1241
            },
            {
              "src": "/work/sdeen/p26.jpg",
              "alt": "Business cards",
              "width": 1754,
              "height": 1241
            }
          ],
          [
            {
              "src": "/work/sdeen/p27.jpg",
              "alt": "Letterhead",
              "width": 1754,
              "height": 1241
            },
            {
              "src": "/work/sdeen/p28.jpg",
              "alt": "Notebook",
              "width": 1754,
              "height": 1241
            }
          ],
          [
            {
              "src": "/work/sdeen/p29.jpg",
              "alt": "Mug",
              "width": 1754,
              "height": 1241
            }
          ]
        ]
      },
      {
        "name": "Social Posts",
        "spec": "Applications · Campaign",
        "note": "Launch posts built on speed: bold condensed headlines, the brand red and navy, and the delivery fleet in action.",
        "rows": [
          [
            {
              "src": "/work/sdeen/p31.jpg",
              "alt": "You stay at home, we deliver",
              "width": 1754,
              "height": 1241
            },
            {
              "src": "/work/sdeen/p32.jpg",
              "alt": "Faster than you can imagine: van",
              "width": 1754,
              "height": 1241
            }
          ],
          [
            {
              "src": "/work/sdeen/p33.jpg",
              "alt": "Faster than you can imagine: bike",
              "width": 1754,
              "height": 1241
            }
          ]
        ]
      }
    ]
  },
  {
    "slug": "dr-sani-isah-abba-academic-website",
    "title": "Dr. Sani Isah Abba",
    "tagline": "Website · Academic profile and admin dashboard",
    "summary": "A personal academic website for a water resources and AI researcher, with an admin dashboard for publications, research, news and photos.",
    "url": "https://sani-isah-abba.vercel.app/",
    "cover": "/work/sani/home.jpg",
    "coverWide": true,
    "card": "/work/sani/home.jpg",
    "films": [],
    "facts": [
      [
        "Client",
        "Dr. Sani Isah Abba"
      ],
      [
        "Sector",
        "Academia · Water resources & AI"
      ],
      [
        "Deliverables",
        "Website · Admin dashboard · Content setup"
      ],
      [
        "Role",
        "UX/UI design & development"
      ]
    ],
    "about": [
      "Dr. Sani Isah Abba is an Assistant Professor of Civil Engineering at Prince Mohammad Bin Fahd University in Saudi Arabia, working between Al Khobar and Kano. His research uses artificial intelligence to forecast and protect water: groundwater, pollution, treatment and desalination.",
      "He needed one place that presents that work to universities, funders, journals and students, and that he can keep up to date himself, without a developer each time a paper comes out.",
      "We designed the site around the subject. Deep navy and teal for water, one amber accent, contour lines drifting behind every page header, and a hydrograph on the home page comparing observed river flow with a machine-learning forecast. IBM Plex Sans and Plex Serif keep it calm and scholarly.",
      "Behind the public site is an admin dashboard. Pasting a DOI fills in a paper's details automatically, a list of DOIs can be imported at once, and starred items appear on the home page. Research projects, news, gallery photos, messages and the CV are all managed from the same place."
    ],
    "sections": [
      {
        "name": "Home",
        "spec": "Landing page · Desktop",
        "note": "Name, role and one sentence on the research beside a portrait, with a hydrograph that shows what the work does. Below it: headline achievements, research themes, current projects, selected papers, photos and the latest news.",
        "rows": [
          [
            {
              "src": "/work/sani/home-themes.jpg",
              "alt": "Research themes and current research on the home page",
              "width": 2160,
              "height": 1350
            },
            {
              "src": "/work/sani/home-pictures.jpg",
              "alt": "Gallery and latest news on the home page",
              "width": 2160,
              "height": 1350
            }
          ]
        ]
      },
      {
        "name": "About & Research",
        "spec": "Profile · Projects",
        "note": "A full biography with appointments and education, and research projects grouped as ongoing or completed, each with its period, funder and topics.",
        "rows": [
          [
            {
              "src": "/work/sani/about.jpg",
              "alt": "About page",
              "width": 2160,
              "height": 1350
            },
            {
              "src": "/work/sani/research.jpg",
              "alt": "Research page",
              "width": 2160,
              "height": 1350
            }
          ]
        ]
      },
      {
        "name": "Publications",
        "spec": "Search · Filter · Cite",
        "note": "Every paper in one list, grouped by year. Visitors search by title, author or journal, filter by type or year, select a bar in the chart to jump to a year, and copy each citation in APA or BibTeX.",
        "rows": [
          [
            {
              "src": "/work/sani/publications.jpg",
              "alt": "Publications page",
              "width": 2160,
              "height": 1350
            }
          ]
        ]
      },
      {
        "name": "News, Gallery & Contact",
        "spec": "Updates · Photos · Messages",
        "note": "News for new papers, awards and talks. A captioned photo gallery from conferences and collaborations, and a contact form that lands in the dashboard inbox.",
        "rows": [
          [
            {
              "src": "/work/sani/news.jpg",
              "alt": "News page",
              "width": 2160,
              "height": 1350
            },
            {
              "src": "/work/sani/gallery.jpg",
              "alt": "Gallery page",
              "width": 2160,
              "height": 1350
            }
          ],
          [
            {
              "src": "/work/sani/contact.jpg",
              "alt": "Contact page",
              "width": 2160,
              "height": 1350
            }
          ]
        ]
      },
      {
        "name": "Admin Dashboard",
        "spec": "Content management",
        "note": "An overview of what is on the site, quick actions, and editors for publications, research, news, gallery, messages and the profile and CV.",
        "rows": [
          [
            {
              "src": "/work/sani/admin.jpg",
              "alt": "Admin dashboard overview",
              "width": 2160,
              "height": 1350
            }
          ],
          [
            {
              "src": "/work/sani/admin-publications.jpg",
              "alt": "Publications manager",
              "width": 2160,
              "height": 1350
            },
            {
              "src": "/work/sani/admin-profile.jpg",
              "alt": "Profile and CV editor",
              "width": 2160,
              "height": 1350
            }
          ]
        ]
      },
      {
        "name": "Mobile",
        "spec": "Responsive · 390 px",
        "note": "The same site on a phone: the portrait moves beside the title, the menu folds away, and lists become single columns.",
        "rows": [
          [
            {
              "src": "/work/sani/m-home.jpg",
              "alt": "Home on mobile",
              "width": 780,
              "height": 1688
            },
            {
              "src": "/work/sani/m-research.jpg",
              "alt": "Research on mobile",
              "width": 780,
              "height": 1688
            },
            {
              "src": "/work/sani/m-publications.jpg",
              "alt": "Publications on mobile",
              "width": 780,
              "height": 1688
            },
            {
              "src": "/work/sani/m-gallery.jpg",
              "alt": "Gallery on mobile",
              "width": 780,
              "height": 1688
            }
          ]
        ]
      }
    ]
  }
];
