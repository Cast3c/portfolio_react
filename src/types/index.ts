
// ==================== NAVIGATION ====================
export type NavLink = {
  key: string
  label: string
  href: string
  icon?: string
}

export type HeaderData = {
  logo: string
  navLinks: NavLink[]
  cta: {
    primary?: {
      label: string
      href: string
    }
    secondary?: {
      label: string
      href: string
    }
  }
}

// ==================== HERO ====================
export type Hero = {
  greeting: string
  name: string
  title: string
  tagline: string
  description: string
  location: {
    city: string
    country: string
    flag: string
  }
  profile:{
    key: string
    icon: string
    href: string
  }[]
  cta: {
    primary: {
      label: string
      href: string
    }
    secondary: {
      label: string
      href: string
    }
  }
  badge?: {
    label: string
    icon?: string
  }
  stats?: {
    label: string
    value: string
  }[]
}

// ==================== ABOUT ====================
export type AboutSection = {
  badge?: string
  title: string
  headline: string
  description: string[]
  education: {
    degree: string
    institution: string
    location: string
    duration: string
  }
  experience: {
    years: string
    projects: string
    clients: string
  }
  interests: {
    icon: string
    label: string
    description: string
  }[]
  philosophy?: string
  funFact?: string
}

// ==================== SKILLS ====================
export type Skill = {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools' | 'soft'
  icon?: string
}

export type SkillCategory = {
  id: string
  title: string
  description: string
  skills: {
    name: string
    description: string
    icon?: string
  }[]
}

export type SkillsSection = {
  title: string
  subtitle: string
  categories: SkillCategory[]
  progressSkills?: Skill[]
}

// ==================== PROJECTS ====================
type ProjectCategory =  'web' | 'ecommerce' | 'api' | 'app' | 'saas' 
export type Project = {
  id: string
  title: string
  img: string
  category: ProjectCategory
  icon: string
  tagline: string
  images: string[]
  challenge: string
  solution: string[]
  results?: string
  stack: string[]
  image?: string

  links: {
    live?: string
    github?: string
    demo?: string
  }
  featured: boolean
}

export type ProjectsSection = {
  title: string
  subtitle: string
  projects: Project[]
  cta?: {
    label: string
    description: string
    href: string
  }
}


// ==================== CONTACT ====================
export type ContactSection = {
  title: string
  subtitle: string
  description: string,
  actions: {
    type: string,
    label: string,
    value: string,
    icon: string,
  }[], 
  location: {
    city: string
    country: string
    icon: string
  }
  availability: {
    remote: boolean
    timezone: string
    responseTime: string
    status: string
  }
  social: {
    github?: string
    linkedin?: string
    twitter?: string
    spotify?: string
  }
  funNote?: string
}

// ==================== FOOTER ====================
export type FooterData = {
  name: string
  tagline: string
  quote?: string
  credits: string
  social: {
    github?: string
    linkedin?: string
    twitter?: string
    mail?: string
  }
  copyright: string
}

// ==================== COMPLETE PORTFOLIO ====================
export type PortfolioData = {
  header: HeaderData
  hero: Hero
  about: AboutSection
  skills: SkillsSection
  projects: ProjectsSection
  contact: ContactSection
  footer: FooterData
}