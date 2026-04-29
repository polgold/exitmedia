import type { Locale } from "./config";

export type ServiceT = {
  id: string;
  title: string;
  tagline: string;
  short: string;
  items: string[];
};

export type ProjectT = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  imageAlt: string;
  challenge: string;
  solution: string;
};

export type FaqT = { q: string; a: string };
export type StepT = { n: string; title: string; body: string };
export type ValueT = { id: string; title: string; body: string };
export type TestimonialT = { quote: string; author: string; role: string };
export type HeroStatT = { k: string; v: string };
export type FooterServiceLink = { id: string; label: string };
export type ApproachBullet = { strong: string; rest: string };

export type Dictionary = {
  common: {
    letTalk: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
    viewAll: string;
    readArticle: string;
    read: string;
    featured: string;
    includes: string;
    comingSoon: string;
    next: string;
    misterio: string;
    contracted: string;
    always: string;
    mind: string;
    digitalEcosystem: string;
    touchable: string;
    openAndTouch: string;
    inDetail: string;
    gimmick: string;
    cinema: string;
  };
  nav: {
    services: string;
    work: string;
    blog: string;
    about: string;
    contact: string;
  };
  hero: {
    badge: string;
    titlePrefix: string;
    titleMiddle: string;
    titleHighlight: string;
    titleSuffix: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: HeroStatT[];
  };
  servicesGrid: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    viewAllLink: string;
  };
  process: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    intro: string;
    stepLabel: string;
    steps: StepT[];
  };
  featuredWork: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    viewAll: string;
  };
  clientsSection: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    intro: string;
    visitLabel: string;
    previewAltPrefix: string;
  };
  testimonials: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    items: TestimonialT[];
  };
  faq: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    helper: string;
    items: FaqT[];
  };
  homeContact: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    intro: string;
    addressLabel: string;
    whatsappSuffix: string;
  };
  contactForm: {
    types: string[];
    budgets: string[];
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    typeLabel: string;
    typePlaceholder: string;
    budgetLabel: string;
    budgetPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    successReset: string;
    errorGeneric: string;
    errorUnknown: string;
    altContactPrefix: string;
  };
  floatingCTA: {
    ariaLabel: string;
    text: string;
    waMessage: string;
  };
  footer: {
    description: string;
    studio: string;
    services: string;
    contact: string;
    serviceLinks: FooterServiceLink[];
    address: string;
    rights: string;
    builtWith: string;
    languageSwitcher: string;
  };
  notFound: {
    code: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    body: string;
    home: string;
    report: string;
  };
  pageServices: {
    title: string;
    description: string;
    label: string;
    heroPrefix: string;
    heroHighlight: string;
    heroSuffix: string;
    intro: string;
    ctaService: string;
  };
  pageWork: {
    title: string;
    description: string;
    label: string;
    heroPrefix: string;
    heroHighlight: string;
    heroSuffix: string;
    intro: string;
  };
  pageBlog: {
    title: string;
    description: string;
    label: string;
    heroPrefix: string;
    heroHighlight: string;
    heroSuffix: string;
    intro: string;
    notFoundTitle: string;
  };
  pageContact: {
    title: string;
    description: string;
    label: string;
    heroPrefix: string;
    heroHighlight: string;
    heroSuffix: string;
    intro: string;
    hours: string;
    urgentTitle: string;
    urgentBody: string;
    addressLabel: string;
    whatsappSuffix: string;
  };
  pageAbout: {
    title: string;
    description: string;
    label: string;
    heroPrefix: string;
    heroHighlight: string;
    heroSuffix: string;
    heroIntroPrefix: string;
    heroIntroSuffix: string;
    studioTag: string;
    studioCity: string;
    howWeGotHereLabel: string;
    paragraphs: string[];
    valuesLabel: string;
    valuesTitle: string;
    values: ValueT[];
    approachLabel: string;
    approachTitlePrefix: string;
    approachTitleHighlight: string;
    approachTitleSuffix: string;
    approachParagraphs: string[];
    approachBullets: ApproachBullet[];
    approachFooter: string;
    approachCta: string;
    imageAltTeam: string;
    imageAltAI: string;
  };
  pageProject: {
    backToWork: string;
    challenge: string;
    solution: string;
    tech: string;
    otherProjects: string;
    visitSite: string;
    comingSoon: string;
    notFoundTitle: string;
  };
  pagePost: {
    backToBlog: string;
    keepReading: string;
    authorOrg: string;
  };
  metadata: {
    siteName: string;
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
  };
  readingTime: {
    suffix: string;
    dateLocale: string;
  };
  languageSwitcher: {
    label: string;
    options: Record<Locale, string>;
  };
  services: ServiceT[];
  projects: ProjectT[];
};
