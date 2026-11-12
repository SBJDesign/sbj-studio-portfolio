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
  "We are a Kano-based studio helping businesses, institutions and changemakers build brands, products and stories that people trust and act on.";

export const positioning = [
  "We turn ideas into identities for growing businesses, public institutions and community builders across Northern Nigeria and beyond.",
  "We build brands, websites and campaigns that connect with people through strategy, design and media.",
  "Every project starts with one question: what should people believe, feel and do after meeting this brand?"
];

export type ServiceGroup = {
  title: string;
  description: string;
  items: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Strategy",
    description:
      "Clear thinking that helps a brand know who it serves, what it stands for and how it will grow.",
    items: [
      "Brand positioning",
      "Messaging architecture",
      "Go-to-market and launch planning",
      "Campaign planning and execution maps",
      "Digital marketing and SEO",
      "Analytics and performance reporting"
    ]
  },
  {
    title: "Branding",
    description:
      "Visual and verbal identity systems that make a brand recognisable, credible and consistent everywhere it shows up.",
    items: [
      "Visual identity and brand guidelines",
      "Naming and verbal identity",
      "Company profiles",
      "Presentation templates",
      "Letterheads and stationery",
      "Branded communication kits"
    ]
  },
  {
    title: "Design & Digital",
    description:
      "From campaign key visuals to full websites, design that is beautiful, useful and built to convert.",
    items: [
      "Marketing websites and landing pages",
      "UI systems and prototyping",
      "Campaign key visuals",
      "Infographics and data visualisation",
      "Print and outdoor assets",
      "Social media design systems"
    ]
  },
  {
    title: "Media & Content",
    description:
      "Stories, films and content engines that keep a brand visible, trusted and talked about.",
    items: [
      "Brand films and documentaries",
      "Commercial video production",
      "Photography",
      "Content calendars",
      "Social content strategy",
      "Editorial and post copy"
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
    "summary": "Venue branding for Global Tech Africa 2026 in Kano: 34 print pieces, from the welcome arch to the main hall stage.",
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
      "The idea came from Kano itself. The old city was entered through its kofofi, the arched gates in the city wall, and the programme's own line was \"From Gateway to Growth\". So we turned the four-colour arcs of the GTA identity into gates. The arc only appears at a threshold or a corner: the welcome arch, the registration wall, the photo-wall gateway and the stage edges. Everywhere else the identity runs on white space, bold Montserrat and a single red highlight bar, which keeps the arcs strong where they matter.",
      "The venue was planned for more than 1,900 guests across two main days, so every piece follows the same large-format rules. The logo and headline sit in the top third, where they survive a head-and-shoulders photo. Nothing important goes in the bottom 60 cm, which is hidden by tables, stage skirts and queues. Each surface carries three things at most. The six GTA pillars each have a colour, and the registration desks are colour-coded to the badges, so guests can find their way from across the hall.",
      "Long walls were built at 1:10 scale in CMYK and split into print panels, with every cut placed in a gap between portraits or blocks of colour, so the joins disappear on the day."
    ],
    "sections": [
      {
        "name": "Welcome Arch & Pillar",
        "spec": "16 ft arch · 3 × 9 ft pillar · Arrival",
        "note": "The first threshold. One bold welcome on the arch, with the six pillars split across its legs, and a slim pillar repeating the welcome in English, Hausa and French.",
        "rows": [
          [
            {
              "src": "/work/gta/arch-mockup.jpg",
              "alt": "Welcome arch mockup",
              "width": 2400,
              "height": 1500
            }
          ],
          [
            {
              "src": "/work/gta/arch.jpg",
              "alt": "Welcome arch artwork",
              "width": 1800,
              "height": 1261
            },
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
  }
];
