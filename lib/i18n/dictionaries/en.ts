import type { Dictionary } from "../types";

export const en: Dictionary = {
  common: {
    letTalk: "Let's talk",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    viewAll: "See all",
    readArticle: "Read post",
    read: "Read",
    featured: "Featured",
    includes: "Includes",
    comingSoon: "coming soon",
    next: "next",
    misterio: "mystery",
    contracted: "hired us",
    always: "again and again",
    mind: "mind",
    digitalEcosystem: "ecosystem",
    touchable: "touch",
    openAndTouch: "open and explore",
    inDetail: "in detail",
    gimmick: "gimmick",
    cinema: "film",
  },
  nav: {
    services: "Services",
    work: "Work",
    blog: "Blog",
    about: "About",
    contact: "Contact",
  },
  hero: {
    badge: "Digital studio · Buenos Aires",
    titlePrefix: "We design, build",
    titleMiddle: "and ship your ",
    titleHighlight: "next",
    titleSuffix: "digital project.",
    subtitle:
      "Websites, online stores, web apps and AI-powered tools — from Buenos Aires to the world. Fast, crafted, no hype.",
    ctaPrimary: "Let's talk about your project",
    ctaSecondary: "See work",
    stats: [
      { k: "2026", v: "New digital division of Sun Factory" },
      { k: "AI-first", v: "Claude Code + Cursor as our dev engine" },
      { k: "Full-stack", v: "Web, e-commerce, apps, AI, hosting" },
      { k: "Buenos Aires", v: "Clients across 3 continents" },
    ],
  },
  servicesGrid: {
    label: "What we do",
    titlePrefix: "From a single landing to a full digital ",
    titleHighlight: "ecosystem",
    titleSuffix: ".",
    viewAllLink: "See all services",
  },
  process: {
    label: "How we work",
    titlePrefix: "Four clear steps, no ",
    titleHighlight: "mystery",
    titleSuffix: ".",
    intro:
      "We don't sell a fancy methodology with an English acronym. We do promise you'll always know which stage we're in, what's next, and how much it costs.",
    stepLabel: "step",
    steps: [
      {
        n: "01",
        title: "Briefing",
        body: "A no-strings call. We listen to your business, review what you already have and define the real problem to solve.",
      },
      {
        n: "02",
        title: "Proposal & design",
        body: "A clear scope with deliverables, timelines and cost. We design the key screens first — no endless back-and-forth.",
      },
      {
        n: "03",
        title: "Development",
        body: "We build with Claude Code and Cursor as our engine. You see real progress, not PDFs. Everything goes to staging so you can touch it before launch.",
      },
      {
        n: "04",
        title: "Launch + care",
        body: "Deploy, domain, email, analytics, SEO. We leave everything documented and offer monthly plans so the site stays alive.",
      },
    ],
  },
  featuredWork: {
    label: "Work",
    titlePrefix: "Recent projects you can ",
    titleHighlight: "touch",
    titleSuffix: ".",
    viewAll: "See all",
  },
  testimonials: {
    label: "What they say",
    titlePrefix: "Words from people who ",
    titleHighlight: "hired us",
    titleSuffix: ".",
    items: [
      {
        quote:
          "We moved from Wix to a headless store in three weeks. Loads in 1.2 seconds and we doubled orders in the first month.",
        author: "Franco Volpi",
        role: "Director · Italmarket",
      },
      {
        quote:
          "You get to talk to someone who understands the business problem, not just the code. That's rare.",
        author: "Lucía Aguirre",
        role: "Executive producer",
      },
      {
        quote:
          "They solved in one afternoon what our previous agency couldn't in two months. With documentation, too.",
        author: "Mariano F.",
        role: "Owner · Food-service SMB",
      },
    ],
  },
  faq: {
    label: "Frequently asked",
    titlePrefix: "The questions that come up ",
    titleHighlight: "all the time",
    titleSuffix: ".",
    helper: "If yours isn't here, write to us. We'll add it next time.",
    items: [
      {
        q: "How much does a website cost?",
        a: "It depends on scope. A well-crafted landing page starts around USD 500. A 5–8 page institutional site from USD 1,200. An online store from USD 2,000. We send a fixed quote after an initial call, at no cost.",
      },
      {
        q: "How long does a project take?",
        a: "A landing: 7–14 days. An institutional site: 3–5 weeks. An online store: 4–8 weeks. A custom web app: 6–12 weeks. You always get a timeline with partial deliveries so you see progress from week one.",
      },
      {
        q: "Do you work with clients outside Argentina?",
        a: "Yes — more than half of our clients are from abroad. We invoice in USD and regularly work with clients in the US, Spain, Mexico, Uruguay and Chile. For Argentine clients, we invoice in ARS or USD, whichever you prefer.",
      },
      {
        q: "What happens after launch?",
        a: "We offer monthly maintenance plans that include updates, backups, monitoring and development hours. If you'd rather not sign up for a plan, we also work by the hour or by project whenever you need us.",
      },
      {
        q: "What technologies do you use?",
        a: "For institutional sites: WordPress or Next.js depending on the case. For stores: WooCommerce, Shopify, TiendaNube or headless. For apps: Next.js + Supabase + Vercel. For AI: Claude, OpenAI, ElevenLabs and MCP. We pick the tool for the problem, not the other way around.",
      },
      {
        q: "Why do you call yourselves 'AI-first'?",
        a: "We use Claude Code and Cursor as our dev engine. That means faster delivery, more accessible budgets and more time to think about strategy and design. It doesn't replace human judgment — it amplifies it.",
      },
      {
        q: "Can you help with content?",
        a: "Yes. We can write copy, help with SEO, generate product descriptions with human-supervised AI, and coordinate audiovisual production through Sun Factory (photos, videos, reels).",
      },
      {
        q: "Do you offer design only, without development?",
        a: "Yes. If you already have a tech team, we design in Figma and hand off a documented system ready to implement. Or, if you only want an audit or consulting work, that works too.",
      },
    ],
  },
  homeContact: {
    label: "Contact",
    titlePrefix: "Tell us what's on your ",
    titleHighlight: "mind",
    titleSuffix: ".",
    intro:
      "Fill out the form or reach us directly on WhatsApp. In less than a day you'll get a first estimate and a proposal for next steps.",
    addressLabel: "Buenos Aires, Argentina",
    whatsappSuffix: "· WhatsApp",
  },
  contactForm: {
    types: ["Website", "Online store", "App", "Consulting", "Maintenance", "Other"],
    budgets: [
      "Under USD 500",
      "USD 500 — 1,500",
      "USD 1,500 — 5,000",
      "USD 5,000+",
      "Not sure yet",
    ],
    nameLabel: "Name *",
    namePlaceholder: "Your name",
    emailLabel: "Email *",
    emailPlaceholder: "you@yourdomain.com",
    phoneLabel: "Phone / WhatsApp",
    phonePlaceholder: "+1 555 ...",
    typeLabel: "Project type *",
    typePlaceholder: "Pick an option",
    budgetLabel: "Estimated budget",
    budgetPlaceholder: "Pick a range",
    messageLabel: "Tell us about your project *",
    messagePlaceholder: "What you need, for when, what you already have…",
    submit: "Send message",
    submitting: "Sending...",
    successTitle: "Thanks!",
    successBody:
      "We got your message. You'll hear back within 24 business hours — usually the same day.",
    successReset: "Send another message",
    errorGeneric: "Something went wrong. Please try again.",
    errorUnknown: "Unknown error",
    altContactPrefix: "or write to us at",
  },
  floatingCTA: {
    ariaLabel: "Message us on WhatsApp",
    text: "Let's talk",
    waMessage: "Hi ExitMedia, I'd like to talk about a project.",
  },
  footer: {
    description:
      "A Buenos Aires digital studio. We design, build and ship websites, online stores, apps and AI-powered tools.",
    studio: "Studio",
    services: "Services",
    contact: "Contact",
    serviceLinks: [
      { id: "web", label: "Websites" },
      { id: "ecommerce", label: "E-commerce" },
      { id: "apps", label: "Web apps" },
      { id: "ai", label: "Applied AI" },
      { id: "seo", label: "SEO" },
    ],
    address: "Buenos Aires, Argentina",
    rights: "A digital division of Sun Factory.",
    builtWith: "built with next.js · hosted on vercel · made in buenos aires",
    languageSwitcher: "Language",
  },
  notFound: {
    code: "Error 404",
    titlePrefix: "This page ",
    titleHighlight: "flew away",
    titleSuffix: ".",
    body: "Or it never existed, which is more likely. Head back home and let's try again.",
    home: "Back home",
    report: "Report the error",
  },
  pageServices: {
    title: "Services — Web, e-commerce, apps and AI",
    description:
      "Everything we do at ExitMedia: websites, online stores, web apps, applied AI, WordPress, branding, SEO, hosting, consulting and maintenance.",
    label: "Services",
    heroPrefix: "Everything we do, ",
    heroHighlight: "in detail",
    heroSuffix: ".",
    intro:
      "From a one-day landing page to complex operations with custom integrations. We pick the tool for the problem, not the other way around.",
    ctaService: "Let's talk about this service",
  },
  pageWork: {
    title: "Work — Recent ExitMedia projects",
    description:
      "A selection of recent projects: websites, online stores, apps and our own products.",
    label: "Work",
    heroPrefix: "Recent projects you can ",
    heroHighlight: "open and explore",
    heroSuffix: ".",
    intro:
      "We like our sites to be alive. Below, a selection — there are more in progress we haven't published yet.",
  },
  pageBlog: {
    title: "Blog — Notes on development, AI and e-commerce",
    description:
      "Notes, tutorials and opinions on web development, WordPress, AI and e-commerce. Written by the ExitMedia team.",
    label: "Blog",
    heroPrefix: "Notes, tutorials and ",
    heroHighlight: "opinions",
    heroSuffix: ".",
    intro:
      "What we learn on the job, shared unfiltered. Short, dense and with links to real tools.",
    notFoundTitle: "Post not found",
  },
  pageContact: {
    title: "Contact — Let's talk about your project",
    description:
      "Write to us via form, email, WhatsApp or Instagram. We reply within one business day — usually the same day.",
    label: "Contact",
    heroPrefix: "Let's talk about your ",
    heroHighlight: "next",
    heroSuffix: " project.",
    intro:
      "Fill out the form or message us directly on the channel you prefer. We reply within one business day — usually the same day.",
    hours: "Monday to Friday, 10:00 – 19:00 (GMT-3)",
    urgentTitle: "Urgent?",
    urgentBody:
      "Site down, a problem with the store, something broken overnight? Ping us on WhatsApp — we answer off-hours too.",
    addressLabel: "Buenos Aires, Argentina",
    whatsappSuffix: "· WhatsApp",
  },
  pageAbout: {
    title: "About — ExitMedia, a Buenos Aires digital studio",
    description:
      "ExitMedia is the digital division of Sun Factory. We cross film, design and code with AI as our dev engine.",
    label: "About",
    heroPrefix: "Born at the crossroads of ",
    heroHighlight: "film",
    heroSuffix: " and technology.",
    heroIntroPrefix: "ExitMedia is the digital division of ",
    heroIntroSuffix:
      ", a film and commercial-content production company working in Buenos Aires for over a decade. On one side, we know how to tell a story. On the other, how to build the infrastructure that distributes it.",
    studioTag: "Studio",
    studioCity: "Buenos Aires, Argentina",
    howWeGotHereLabel: "How we got here",
    paragraphs: [
      "We're a small studio with roots in film. For over a decade, Sun Factory directed and produced commercial content for brands in Argentina, the US, Spain and Mexico.",
      'At some point, many clients also started asking for "the site, the store, the landing". At first we referred them to agencies we liked. Over the years, we saw that the results depended more and more on whether the person on the other side understood the client\'s business — not just the code.',
      "ExitMedia was born at that crossroads. We're a studio that uses AI as a development engine (Claude Code, Cursor, MCP) to ship faster and at a better price. But judgment, design and the conversation with the client are human, and they come from years of working with brands that trust us to tell their story.",
    ],
    valuesLabel: "Our values",
    valuesTitle: "Four things we don't compromise on.",
    values: [
      {
        id: "speed",
        title: "Speed",
        body: "We'd rather ship something good this week than something perfect next year. Reality always corrects you — let it correct you fast.",
      },
      {
        id: "clarity",
        title: "Clarity",
        body: "Fixed quotes, real timelines, no inflated language. If you don't understand something, that's on us — not on you.",
      },
      {
        id: "quality",
        title: "Quality",
        body: "Fast doesn't mean sloppy. Every site we build has non-negotiable baselines on performance, SEO and accessibility.",
      },
      {
        id: "ai",
        title: "AI-first",
        body: "We use AI as an engine, not a gimmick. That means faster delivery, more accessible pricing and more time to think about strategy and design.",
      },
    ],
    approachLabel: "Our approach",
    approachTitlePrefix: "AI as an engine, not a ",
    approachTitleHighlight: "gimmick",
    approachTitleSuffix: ".",
    approachParagraphs: [
      "We use Claude Code and Cursor to write a large part of every project. That means a site that used to take 4 weeks and 3 people now takes 2 — with the same level of care. It's not magic — it's letting the tool handle the mechanical work so we can focus on what requires judgment.",
      "In practice, that translates into three concrete things you'll notice:",
    ],
    approachBullets: [
      {
        strong: "More accessible pricing.",
        rest: " What used to be a USD 8,000 project can now be USD 2,500.",
      },
      {
        strong: "Faster iterations.",
        rest: " Changes and tests in hours, not weeks.",
      },
      {
        strong: "More time to think.",
        rest: " Which is what you're hiring us for — not to write CSS.",
      },
    ],
    approachFooter:
      "We won't let a model push a site to production without human review. But we won't pretend these tools don't exist either. That's the line.",
    approachCta: "See what we can do",
    imageAltTeam: "Team working at a design studio",
    imageAltAI: "Software development with AI",
  },
  pageProject: {
    backToWork: "Back to work",
    challenge: "The challenge",
    solution: "The solution",
    tech: "Technologies",
    otherProjects: "Other work",
    visitSite: "Visit live site",
    comingSoon: "Coming soon · closed beta",
    notFoundTitle: "Project not found",
  },
  pagePost: {
    backToBlog: "Back to blog",
    keepReading: "Keep reading",
    authorOrg: "ExitMedia · Buenos Aires",
  },
  metadata: {
    siteName: "ExitMedia",
    defaultTitle: "ExitMedia — Web, E-commerce and AI | Buenos Aires",
    titleTemplate: "%s · ExitMedia",
    defaultDescription:
      "We design and build websites, online stores, apps and AI-powered solutions. From Buenos Aires to the world.",
    keywords: [
      "web development",
      "e-commerce",
      "WordPress",
      "Next.js",
      "Argentina",
      "Buenos Aires",
      "artificial intelligence",
      "WooCommerce",
      "Shopify",
      "TiendaNube",
      "digital agency",
    ],
    ogTitle: "ExitMedia — Web, E-commerce and AI",
    ogDescription:
      "We design and build websites, online stores, apps and AI-powered solutions.",
    ogImageAlt: "ExitMedia — Web, E-commerce and AI",
  },
  readingTime: {
    suffix: "min read",
    dateLocale: "en-US",
  },
  languageSwitcher: {
    label: "Change language",
    options: {
      es: "Español",
      en: "English",
      pt: "Português",
    },
  },
  services: [
    {
      id: "web",
      title: "Web design & development",
      tagline: "Sites that feel crafted, down to the detail.",
      short:
        "Corporate, landings, microsites and redesigns — with speed, SEO and conversion in mind.",
      items: [
        "Corporate and institutional sites",
        "Conversion-focused landing pages",
        "Campaign microsites",
        "Redesigns and modernization of existing sites",
        "Platform migrations (Wix/Squarespace/Blogger → WordPress/Next.js)",
        "Multilingual sites (i18n)",
        "Speed and Core Web Vitals optimization",
      ],
    },
    {
      id: "ecommerce",
      title: "E-commerce / online stores",
      tagline: "Stores that sell, not just look pretty.",
      short:
        "WooCommerce, Shopify, TiendaNube or headless with Next.js — integrated with payment and shipping providers.",
      items: [
        "Custom WooCommerce (WordPress)",
        "Headless stores (Next.js + WooCommerce API)",
        "Shopify — setup and customization",
        "TiendaNube for the Argentine market",
        "MercadoPago, Stripe and PayPal integrations",
        "Shipping integrations (Andreani, OCA, Correo Argentino)",
        "Catalog with filters and search",
        "Cart, checkout and order management",
        "Sales dashboards and reports",
        "Transactional email and post-purchase automation",
      ],
    },
    {
      id: "apps",
      title: "Web apps",
      tagline: "Internal tools tailored to your team.",
      short:
        "Dashboards, lightweight CRMs, client portals and management systems built around how your team actually works.",
      items: [
        "Dashboards and admin panels",
        "Internal tools for companies",
        "Booking and scheduling systems",
        "Lightweight custom CRMs",
        "Client portals",
        "Content and online-course platforms",
        "Project management systems",
        "Advanced forms with conditional logic",
        "Online calculators and quote tools",
      ],
    },
    {
      id: "mobile",
      title: "Mobile apps",
      tagline: "PWAs and native apps when it makes sense.",
      short:
        "We prefer PWAs for delivery speed, but we also do React Native / Expo when the case calls for it.",
      items: [
        "PWAs: browser apps installable to home screen",
        "React Native / Expo for iOS and Android",
        "Catalog and showroom apps",
        "Loyalty and membership apps",
        "Internal management apps",
      ],
    },
    {
      id: "ai",
      title: "Applied artificial intelligence",
      tagline: "AI where it actually moves the needle.",
      short:
        "Chatbots, automations, integrations with OpenAI and Anthropic, and MCP servers to control your site from Claude.",
      items: [
        "AI chatbots for customer support",
        "Virtual assistants for e-commerce",
        "AI content generation (descriptions, posts, alt-text)",
        "API integration (OpenAI, Anthropic, ElevenLabs)",
        "Process automation with AI",
        "MCP connection: control WordPress/WooCommerce from Claude",
        "Voice cloning and text-to-speech for production",
        "Image generation for e-commerce and social",
      ],
    },
    {
      id: "wordpress",
      title: "Specialized WordPress",
      tagline: "We know what breaks and how to fix it.",
      short:
        "Custom plugins and themes, hardening, migrations to optimized hosting and serious monthly maintenance.",
      items: [
        "Custom plugin development",
        "Custom theme development",
        "Performance and security hardening",
        "Migration to optimized hosting",
        "Advanced WooCommerce configuration",
        "External API integrations",
        "Monthly maintenance (updates, backups, monitoring)",
      ],
    },
    {
      id: "branding",
      title: "Digital branding",
      tagline: "An identity that travels well across channels.",
      short:
        "Logo, palette, typography, templates for social, email and decks. Coordinated with Sun Factory when we need to shoot.",
      items: [
        "Visual identity (logo, palette, typography)",
        "Digital brand manual",
        "Social media templates",
        "Email marketing (HTML templates)",
        "Presentations and pitch decks",
        "Digital packaging (mockups, PDF catalogs)",
        "Product photography (coordinated with Sun Factory)",
      ],
    },
    {
      id: "seo",
      title: "SEO & visibility",
      tagline: "For Google, for AI and for humans.",
      short:
        "Technical, on-page and content audits — plus the new discipline: AEO, optimizing for AI-generated answers.",
      items: [
        "Technical SEO audit",
        "On-page optimization (titles, metas, schema)",
        "Content / blog strategy",
        "Local SEO (Google Business Profile)",
        "AEO — optimization for AI search",
        "Google Analytics 4 + Search Console setup",
        "Monthly performance reports",
      ],
    },
    {
      id: "hosting",
      title: "Hosting & infrastructure",
      tagline: "Everything up, fast and secure.",
      short:
        "Hosting, DNS, SSL, email, CDN and automated backups — set up and operated.",
      items: [
        "Hosting (Hostinger, Vercel, Netlify, DigitalOcean)",
        "Domain and DNS configuration",
        "SSL certificates",
        "CDN and speed optimization",
        "Corporate email",
        "Automated backups",
        "Uptime monitoring",
      ],
    },
    {
      id: "consulting",
      title: "Digital consulting",
      tagline: "A second opinion is cheaper than getting it wrong.",
      short:
        "Audits, tech selection, MVP planning and mentorship for teams starting with AI.",
      items: [
        "Full digital audit (site, social, SEO, competition)",
        "Online presence strategy",
        "Platform and tech selection",
        "MVP planning",
        "Technical mentorship for founders",
        "AI tooling workshops for teams",
        "Process automation consulting",
      ],
    },
    {
      id: "maintenance",
      title: "Maintenance & support",
      tagline: "A live site needs ongoing care.",
      short:
        "Monthly plans with updates, backups, monitoring and included development hours — via ticket or WhatsApp.",
      items: [
        "Monthly website maintenance plans",
        "WordPress, plugin and theme updates",
        "Daily/weekly backups",
        "Security monitoring",
        "Support via ticket, email or WhatsApp",
        "Monthly development hours included",
        "Monthly status reports",
      ],
    },
    {
      id: "products",
      title: "Our own products",
      tagline: "What we build when we have the time.",
      short:
        "In-house tools born from real projects that solve problems we keep running into.",
      items: [
        "StoreMCP — WordPress plugin to control WooCommerce from AI",
        "Gallery Builder — lightweight portfolios for photographers",
        "Proposal Generator — quoting tool for production companies",
      ],
    },
  ],
  projects: [
    {
      slug: "italmarket",
      title: "Italmarket",
      category: "Headless e-commerce",
      excerpt:
        "An Italian grocery store with a headless Next.js storefront on top of WooCommerce.",
      imageAlt: "Italian products on a market shelf",
      challenge:
        "A specialty grocery needed an online store that loaded fast, indexed well and let the team add products from WordPress without touching code. Their previous Wix site didn't scale or rank.",
      solution:
        "We built a Next.js 14 (App Router) frontend that consumes WooCommerce via REST API, with incremental caching, optimized images and a MercadoPago-integrated checkout. The team manages the catalog from the familiar WordPress admin — but visitors see a site that's 10× faster.",
    },
    {
      slug: "sun-factory",
      title: "Sun Factory",
      category: "Film production company",
      excerpt:
        "Site for the film & commercial content production company, with a dynamic reel and a directors showreel.",
      imageAlt: "Vintage film camera on a production set",
      challenge:
        "The production company needed to showcase directors and commercial work with the visual weight of a cinema site — while still being openable from a phone during a meeting.",
      solution:
        "A minimal site with editorial typography and an opening reel that adapts its bitrate to the device. Each director has their own subsite with curated selections. Headless CMS so the team can add projects without a developer.",
    },
    {
      slug: "store-mcp",
      title: "StoreMCP",
      category: "In-house product · SaaS",
      excerpt:
        "A WordPress plugin that exposes WooCommerce as an MCP server — control your store from Claude.",
      imageAlt: "Abstract AI visualization",
      challenge:
        "E-commerce teams burn hours navigating the WooCommerce admin for repetitive tasks: creating coupons, uploading products, checking stock, answering inquiries. LLMs could do this — but they don't have direct access to the system.",
      solution:
        "StoreMCP exposes key WooCommerce operations as secure MCP tools, with granular per-role permissions. You connect Claude Desktop (or any MCP client) to your store and say 'create a 20% Black Friday coupon expiring on the 28th' — and it's done. In development, closed beta coming soon.",
    },
  ],
};
