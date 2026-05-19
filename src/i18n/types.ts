export interface NavItem {
  label: string;
  path: string;
}

export interface Translations {
  site: {
    title: string;
    description: string;
  };
  nav: NavItem[];
  hero: {
    name: string;
    title: string;
    tagline: string;
    subtitle: string;
  };
  home: {
    featuredTitle: string;
    skillsTitle: string;
    experienceTitle: string;
    viewAll: string;
    viewAllProjects: string;
    aboutCta: string;
  };
  about: {
    title: string;
    experience: string;
    education: string;
    downloadCv: string;
  };
  projects: {
    featuredTitle: string;
    empty: string;
  };
  social: {
    email: string;
    instagram: string;
    linkedin: string;
  };
  footer: {
    copyright: string;
  };
  "404": {
    title: string;
    message: string;
    goHome: string;
  };
  a11y: {
    skipToContent: string;
  };
}
