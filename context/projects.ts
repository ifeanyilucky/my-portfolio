export const projects: Array<{
  title: string;
  link: string;
  id: number;
  description: string;
  year: number;
  cover: string;
  technologies: string[];
  type: string[];
  github: string;
  about: string;
}> = [
    {
      title: "Skeep",
      link: "https://useskeep.com",
      id: 1,
      description:
        "A WhatsApp-native food, ride, and logistics ordering platform. I built the conversational bot flow, vendor dashboard, admin panel, and rider app powering the entire ordering pipeline.",
      year: 2025,
      cover: "/projects/useskeep.com.png",
      technologies: [
        "Node.js",
        "TypeScript",
        "Next.js",
        "React Native",
        "Express",
        "MongoDB",
        "Redis",
        "WhatsApp Cloud API",
      ],
      type: ["fullstack", "logistics", "whatsapp"],
      github: "",
      about:
        `Skeep lets customers order food, book rides, and arrange delivery entirely inside WhatsApp. No separate app required. I built the WhatsApp bot handling the full automated ordering flow (menu browsing, order placement, payment, live tracking), the vendor dashboard for restaurant partners, the admin panel for overseeing vendors and riders, and the rider app for the delivery fleet.

Under the hood, the platform normalizes pricing, ETA, and order status across multiple third-party providers, with Redis-backed session management keeping multi-step conversations reliable and provider failover keeping orders flowing when a partner API goes down.`,
    },
    {
      title: "GetDropa",
      link: "https://getdropa.com",
      id: 2,
      description:
        "A white-label logistics operating system. I built the multi-tenant portal letting courier companies run branded instances, plus the rider app for dispatch, tracking, and proof of delivery.",
      year: 2026,
      cover: "/projects/getdropa.com.png",
      technologies: ["React Native", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
      type: ["fullstack", "logistics", "white-label"],
      github: "",
      about:
        "Dropa gives smaller courier and delivery companies the same dispatch, tracking, and payment tools that larger logistics players use, as a white-label platform. I built the multi-tenant portal that lets each logistics company run its own branded instance (custom domain, logo, colors) from one shared codebase, and the white-label rider app riders use to receive assignments, update delivery status, and capture proof of delivery.",
    },
    {
      title: "Popcorn",
      link: "https://thepopcorn.vercel.app",
      id: 3,
      description:
        "A content discovery and playback platform with a Next.js frontend and a custom Express streaming backend. Aggregates metadata from TMDB, resolves third-party streams with multiple source fallbacks, and plays back via HLS with a watchlist and continue-watching.",
      year: 2026,
      cover: "",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Express",
        "Playwright",
        "HLS.js",
        "Zustand",
        "TanStack Query",
        "Redis",
      ],
      type: ["fullstack", "streaming", "personal"],
      github: "",
      about:
        "Popcorn is a content discovery and playback platform built on a Next.js app-router frontend backed by a dedicated Node.js streaming service. It does not host, upload, or store any video content; instead it aggregates metadata from TMDB while the streaming backend resolves working third-party embed/stream sources per title, with automatic fallbacks when a provider goes down and Redis caching so pages load in well under 500ms. The player uses HLS for adaptive playback, and the experience includes trending discovery, search, per-title detail pages with cast and similar titles, a watchlist, and continue-watching progress tracking, all wrapped in a cinematic, responsive UI with light/dark themes.",
    },
    {
      title: "Glamyad",
      link: "https://glamyad.com",
      id: 4,
      description:
        "Booking marketplace connecting clients with verified beauty and wellness professionals. I built the provider dashboard for managing bookings, pricing, availability, and no-show protection.",
      year: 2026,
      cover: "/projects/glamyad.com.png",
      technologies: ["Node.js", "TypeScript", "Next.js"],
      type: ["fullstack", "booking", "marketplace"],
      github: "",
      about:
        "Glamyad connects clients with verified stylists, barbers, nail techs, and makeup artists, who they can search by specialty, compare on price, and book with a secured deposit. I built the service-provider dashboard where professionals manage their bookings, services, pricing, and availability in one place, including the no-show protection flow built around automated deposits.",
    },
       {
      title: "Dolly",
      link: "https://github.com/ifeanyilucky/dollyapp",
      id: 8,
      description:
        "Open-source macOS screen recorder (Tauri v2 + Rust + React) that auto-generates smooth zoom/pan motion from a 120Hz cursor track, with fully non-destructive editing after capture. Custom .dol bundle format with zero-copy playback via a dol:// protocol, and a shared motion engine between preview and export for guaranteed output fidelity.",
      year: 2026,
      cover: "",
      technologies: [
        "Tauri",
        "Rust",
        "React",
        "ScreenCaptureKit",
        "VideoToolbox",
        "wgpu",
        "WebGL2",
        "Zustand",
      ],
      type: ["open-source", "desktop", "personal"],
      github: "https://github.com/ifeanyilucky/dollyapp",
      about:
        "Dolly is an open-source macOS screen recorder that turns ordinary captures into polished, motion-driven recordings. It records a 120Hz cursor track while capturing and, after recording, lets you auto-generate smooth zoom/pan camera moves from that track, with no keyframing required. Editing is fully non-destructive, and captures are stored in a custom .dol bundle format that plays back with zero-copy fast seeking through a registered dol:// protocol. A shared motion engine drives both the live preview and the export pipeline, so what you preview is exactly what you export.",
    },
    {
      title: "Casimier Studios",
      link: "https://casimier-studios.vercel.app/",
      id: 9,
      description:
        "Website for Casimier Studios, a Lagos-based photography and film studio specializing in portraits, editorial, product photography, and cinematography, directed and colour-graded in-house. Full session showcases, a motion reels section, and a booking flow.",
      year: 2025,
      cover: "",
      technologies: ["Next.js", "React", "Tailwind CSS", "Cloudinary"],
      type: ["fullstack", "photography", "studio"],
      github: "",
      about:
        "Casimier Studios is a professional photography and film studio in Lagos, offering everything from portraits and corporate headshots to product, editorial, and brand films with in-house creative direction and colour grading. This is the studio's full site: a cinematic 'Selected works' gallery of sessions, a films reel, and a connect/booking flow.",
    },
    {
      title: "Aplet360",
      link: "https://aplet360.vercel.app",
      id: 5,
      description:
        "Full-stack real estate platform for property listings, search, and tenant onboarding. RESTful APIs with JWT auth and role-based access, deployed on AWS.",
      year: 2025,
      cover: "/projects/aplet360.png",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Tailwind CSS", "JWT"],
      type: ["fullstack", "proptech", "contract"],
      github: "",
      about:
        "Aplet360 helps renters find and book quality apartments across Nigeria, with flexible payment plans and tenant onboarding built in. I designed and built RESTful APIs with JWT-based authentication and role-based access control, improved frontend performance through code splitting, optimized backend queries, and deployed the platform on AWS with an eye toward scalability and uptime.",
    },
    {
      title: "Jentomed Hospital",
      link: "https://jentomed.com",
      id: 6,
      description: "Specialized hospital in Ibadan, Nigeria.",
      year: 2022,
      cover: "/projects/www.jentomed.com.png",
      technologies: ["NextJs", "Context API"],
      type: ["project", "others"],
      github: "",
      about:
        "Jentomed Specialist Hospital is a multi-disciplinary private healthcare facility focusing on the best possible clinical outcomes for our patients and their families.",
    },
    {
      title: "Thebrik",
      link: "https://thebrik.co",
      id: 7,
      description: "Hostel renting platform for students across Nigeria",
      year: 2021,
      cover: "/projects/thebrik.png",
      technologies: [
        "React",
        "Node JS",
        "MongoDB",
        "Material UI",
        "Redux",
        "Context API",
      ],
      type: ["project", "others"],
      github: "",
      about:
        "We are building the most convenient way for the modern day Nigeria students to get their suitable hostel. Our customers are at the center of everything we do, and we are obsessed with creating a pleasant experience throughout their entire journey.",
    },
 
  ];
