import type { PortfolioData } from "../types";
import ecommerceImg from '../assets/images/bellezaDeOro.webp';
import authImg from '../assets/images/authApp.webp';
import apiImg from '../assets/images/TaskAppi.webp';
import cygImg from '../assets/images/CyGPortada.webp';
import sanityImg from '../assets/images/sanityKing.webp'


export const portfolioData: PortfolioData = {
  // ==================== HEADER ====================
  header: {
    logo: '',
    navLinks: [
      { key: 'home', label: 'Inicio', href: '#inicio', icon: 'home' },
      { key: 'projects', label: 'Proyectos', href: '#proyectos', icon: 'projects' },
      { key: 'about', label: 'Sobre Mí', href: '#sobre-mi', icon: 'about' },
      { key: 'skills', label: 'Skills', href: '#skills', icon: 'skills' },
      { key: 'contact', label: 'Contacto', href: '#contacto', icon: 'contact' }
    ],
    cta: {
      primary: {
        label: 'Ver proyectos',
        href: '#proyectos'
      },
      secondary: {
        label: 'Contactar',
        href: '#contacto'
      }
    }
  },

  // ==================== HERO ====================
  hero: {
    greeting: 'Hola, soy',
    name: 'Ricardo Castellar',
    title: 'Fullstack Developer ',
    tagline: 'Construyo interfaces modernas, rapidas y centradas en el usuario.',
    description: 'Experiencia trabajando con React, Typescript y el stack MERN para construir aplicaciones web completas y escalables',
    location: {
      city: 'Bogotá',
      country: 'Colombia',
      flag: '🇨🇴'
    },
    profile:[
      { key: 'github', icon: 'gitHub', href: 'https://cast3c.github.io/portfolio_react/'},
      { key: 'linkedIn', icon: 'linkedIn', href: 'https://www.linkedin.com/in/ricardo-castellar/'}
    ],
    cta: {
      primary: {
        label: 'Ver Proyectos',
        href: '#proyectos'
      },
      secondary: {
        label: 'Trabajemos Juntos',
        href: '#contacto'
      }
    },
    badge: {
      label: 'Disponible para proyectos remotos',
      icon: 'AiOutlineThunderbolt'
    },
    stats: [
      { label: 'Años de experiencia', value: '5+' },
      { label: 'Proyectos entregados', value: '10+' },
      { label: 'Café consumido', value: '∞' }
    ]
  },

  // ==================== ABOUT ====================
  about: {
    badge: 'Sobre Mí',
    title: 'Más Allá del Código',
    headline: 'Desarrollador Full Stack que combina lógica de ingeniero con ojo de diseñador',
    description: [
      'Construyo interfaces que no solo funcionan, sino que se sienten bien.',
      'Combino la lógica del stack MERN con una obsesión por los detalles del frontend que hacen que una aplicación pase de "funcional" a "memorable". ',
      'Antes producía música. Hoy construyo experiencias digitales.',
      'Ambos requieren ritmo, precisión y atención al detalle.',
    ],
    education: {
      degree: 'Computer Science',
      institution: 'Universidad de Helsinki',
      location: 'Finlandia',
      duration: '2024 - 2026'
    },
    experience: {
      years: '+2 años',
      projects: '10+ proyectos',
      clients: 'B2B - B2P'
    },
    interests: [
      {
        icon: 'laptop',
        label: 'Nuevas Tecnologías',
        description: 'Explorando frameworks y herramientas'
      },
      {
        icon: 'music',
        label: 'Producción Musical',
        description: 'Ex-DJ, ahora produzco código'
      },
      {
        icon: 'helmet',
        label: 'Autos & Motores',
        description: 'Optimización en todas sus formas'
      },
      {
        icon: 'openSource',
        label: 'Open Source',
        description: 'Contribuyendo a la comunidad'
      }
    ],
    philosophy: 'El mejor código es como una buena pista de música - cada elemento tiene su lugar, nada sobra, todo fluye.',
    funFact: 'Plot Twist: Ex-DJ y productor musical - Ahora produzco código en lugar de beats (Aunque ambos requieren buen timing y atención al detalle)'
  },

  // ==================== SKILLS ====================
  skills: {
    title: 'Arsenal Técnico',
    subtitle: '+2 años dominando el stack MERN, pero las mejores soluciones nunca se limitan a una sola herramienta.',
    categories: [
      {
        id: 'frontend',
        title: 'Frontend Development',
        description: 'Interfaces modernas con foco en UX y performance',
        skills: [
          { 
            name: 'React.js / Next.js', 
            description: 'Componentes que escalan, páginas que vuelan',
            icon: '⚛️'
          },
          { 
            name: 'TypeScript', 
            description: 'Código que se explica solo',
            icon: '📘'
          },
          { 
            name: 'Tailwind CSS', 
            description: 'Diseño rápido sin sacrificar elegancia',
            icon: '🎨'
          },
          { 
            name: 'Framer Motion', 
            description: 'Animaciones que cuentan historias',
            icon: '✨'
          }
        ]
      },
      {
        id: 'backend',
        title: 'Backend (La Fundación Sólida)',
        description: 'Arquitectura que escala',
        skills: [
          { 
            name: 'Node.js / Express', 
            description: 'JavaScript end-to-end, arquitectura limpia',
            icon: '🟢'
          },
          { 
            name: 'MongoDB', 
            description: 'NoSQL cuando la flexibilidad importa',
            icon: '🍃'
          },
          { 
            name: 'RESTful APIs', 
            description: 'Comunicación clara, documentación completa',
            icon: '🔌'
          },
          { 
            name: 'JWT + Bcrypt', 
            description: 'Autenticación que no se rompe',
            icon: '🔐'
          }
        ]
      },
      {
        id: 'tools',
        title: 'Tools',
        description: 'Flujo de trabajo optimizado',
        skills: [
          { 
            name: 'Git / GitHub', 
            description: 'Control de versiones como debe ser',
            icon: '📦'
          },
          // { 
          //   name: 'Vercel / Netlify', 
          //   description: 'Deploy sin drama',
          //   icon: '🚀'
          // },
          // { 
          //   name: 'Postman', 
          //   description: 'APIs testeadas a fondo',
          //   icon: '📮'
          // },
          { 
            name: 'VS Code', 
            description: 'Configurado para máxima productividad',
            icon: '💻'
          }
        ]
      },
      {
        id: 'soft',
        title: 'Soft Skills (Lo Que Realmente Importa)',
        description: 'Más allá del código',
        skills: [
          { 
            name: 'Resolución de problemas complejos', 
            description: 'Mi zona de confort',
            icon: '🧩'
          },
          { 
            name: 'Comunicación clara', 
            description: 'Sin jerga innecesaria',
            icon: '💬'
          },
          // { 
          //   name: 'Trabajo remoto', 
          //   description: 'Experiencia internacional',
          //   icon: '🌎'
          // },
          // { 
          //   name: 'Atención al detalle', 
          //   description: 'Del pixel al performance',
          //   icon: '🔍'
          // }
        ]
      }
    ],
    progressSkills: [
      { name: 'React / Next.js', level: 95, category: 'frontend' },
      { name: 'TypeScript', level: 90, category: 'frontend' },
      { name: 'Node.js / Express', level: 92, category: 'backend' },
      { name: 'MongoDB', level: 88, category: 'backend' },
      { name: 'Tailwind CSS', level: 95, category: 'frontend' },
      { name: 'Framer Motion', level: 85, category: 'frontend' }
    ]
  },

  // ==================== PROJECTS ====================

  projects: {
    title: 'Proyectos Reales, Resultados Medibles',
    subtitle: 'Cada línea de código resuelve un problema. Aquí está la evidencia.',
    projects: [
      {
        id: 'ecommerce-jewelry',
        title: 'E-commerce Premium - Joyería ',
        img: ecommerceImg,
        category: 'ecommerce',
        icon: 'diamond',
        tagline: 'Plataforma completa de ventas con carrito, pagos y panel admin',
        images: [
          'mobileBellezaDeOro.png','/laptopBellezaDeOro.png', 'desktopBellezaDeOro.png'
        ],
        challenge: 'Crear una experiencia de compra que transmita exclusividad y genere confianza en un mercado donde el lujo online es complicado.',
        solution: [
          'Interfaz elegante con micro-animaciones que guían la compra',
          'Carrito inteligente con recomendaciones personalizadas',
          'Integración con Stripe para pagos seguros',
          'Panel de administración para gestión de inventario en tiempo real',
          'Optimización de imágenes para carga ultrarrápida'
        ],
        results: 'Plataforma en producción procesando ventas reales',
        stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Framer Motion'],
        links: {
          live: 'https://ejemplo.com',
          github: 'https://github.com/tu-usuario/proyecto'
        },
        featured: true
      },
      {
        id: 'auth-system',
        title: 'Sistema de Autenticación Enterprise',
        img: authImg,
        category: 'app',
        icon: 'lock',
        tagline: 'Aplicación full stack con registro, login y gestión de roles',
        images: [
          'mobileAuthApp.png','/laptopAuthApp.jpg', 'desktopAuthApp.png'
        ],
        challenge: 'Construir un sistema de autenticación robusto, escalable y seguro que pudiera manejar desde 10 hasta 10,000 usuarios sin refactorizar.',
        solution: [
          'Registro con validación robusta de datos',
          'Login seguro con JWT + refresh tokens',
          'Recuperación de contraseña vía email',
          'Sistema de roles y permisos granular',
          'Protección contra ataques comunes (XSS, CSRF)',
          'Rate limiting para prevenir fuerza bruta'
        ],
        results: 'Sistema en producción, cero brechas de seguridad detectadas',
        stack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Bcrypt'],
        links: {
          github: 'https://github.com/tu-usuario/proyecto'
        },
        featured: true
      },
      {
        id: 'notion-api',
        title: 'API Full Stack - Integración Notion',
        img: apiImg,
        category: 'api',
        icon: 'api',
        tagline: 'API robusta para automatizar flujos de trabajo con Notion',
        images: [
          'mobileApiNotion.png','/laptopTaskAppi.png', 'desktopApiNotion.png'
        ],
        challenge: 'Crear una API robusta que automatice flujos de trabajo entre diferentes servicios usando Notion como base de datos.',
        solution: [
          'Integración nativa con Notion API',
          'Endpoints RESTful bien documentados',
          'Manejo robusto de errores y edge cases',
          'Rate limiting y caché inteligente',
          'Webhooks para sincronización en tiempo real',
          'Documentación completa con Postman'
        ],
        results: 'API en producción procesando +1000 requests/día',
        stack: ['Node.js', 'Express', 'Notion API', 'MongoDB', 'Redis'],
        links: {
          github: 'https://github.com/tu-usuario/proyecto'
        },
        featured: true
      },
      {
        id: 'transport-website',
        title: 'Sitio Web Corporativa - Empresa de Transportes',
        img: cygImg,
        category: 'web',
        icon: 'truck',
        tagline: 'Landing page moderna con formularios de cotización',
        images: [
          'mobileCyG.png','/laptopCyG.png', 'desktopCyG.png'
        ],
        challenge: 'Modernizar la presencia online de una empresa tradicional de transportes y generar leads calificados.',
        solution: [
          'Diseño moderno que transmite confiabilidad',
          'Formularios de cotización con validación instantánea',
          'Animaciones sutiles que mejoran la experiencia',
          'SEO optimizado para búsquedas locales',
          'Tiempo de carga <2 segundos',
          'Totalmente responsive'
        ],
        results: '+40% aumento en consultas vs sitio anterior',
        stack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
        links: {
          live: 'https://ejemplo.com'
        },
        featured: false
      },
      {
        id: 'fumigation-website',
        title: 'Sitio Web - Fumigaciones y Mantenimiento',
        img: sanityImg,
        category: 'web',
        icon: 'mosquito',
        tagline: 'Sitio informativo con galería y sistema de contacto directo al whatsapp',
        images: [
          'mobileSanity.png','/laptopSanity.png', 'desktopSanity.png'
        ],
        challenge: 'Destacar en un mercado saturado y convertir visitas en citas agendadas.',
        solution: [
          'Galería visual de antes/después de servicios',
          'Sistema de testimonios verificados',
          'Formulario de contacto con geolocalización',
          'Blog optimizado para SEO local',
          'Sección de preguntas frecuentes interactiva'
        ],
        results: 'Primera página en Google para términos clave locales',
        stack: ['React', 'Next.js', 'Tailwind CSS', 'ContentLayer'],
        links: {
          live: 'https://ejemplo.com'
        },
        featured: false
      }
    ],
    cta: {
      label: 'Iniciemos la Conversación',
      description: '¿Tu proyecto podría ser el siguiente?',
      href: '#contacto'
    }
  },

  // ==================== CONTACT ====================
  contact: {
    title: 'Construyamos Algo Juntos',
    subtitle: 'Si involucra MERN stack, interfaces elegantes y resolver problemas reales, definitivamente quiero escucharte.',
    description: '¿Tienes una startup que necesita MVP funcional? ¿Una empresa que quiere modernizar su presencia digital? ¿Una idea ambiciosa que no sabes cómo empezar?',
    actions: [
      {type: 'email', label: 'Enviar email', value: 'ricardo.castellarp@gmail.com', icon: 'mail' },
      {type: 'whatsapp',label: 'Whatsapp', value: '+573132129686', icon: 'wp' }
    ],
    location: {
      city: 'Bogotá',
      country: 'Colombia',
      icon: '🇨🇴'
    },
    availability: {
      remote: true,
      timezone: 'GMT-5 (Colombia)',
      responseTime: '<24 horas',
      status: 'Disponible para proyectos'
    },
    social: {
      github: 'https://github.com/ricardocastellar',
      linkedin: 'https://linkedin.com/in/ricardo-castellar',
      twitter: 'https://twitter.com/tu-usuario',
      spotify: 'https://spotify.com/artist/tu-perfil'
    },
    funNote: 'Fun Fact: Si necesitas hablar de optimización de rendimiento O de motores de combustión, estoy en ambas conversaciones 🏎️💨'
  },

  // ==================== FOOTER ====================
  footer: {
    name: 'Ricardo Castellar',
    tagline: 'Fullstack Developer especializado en React | Bogotá, Colombia',
    quote: 'De DJ a Developer - Porque tanto el código como la música necesitan buen ritmo y atención al detalle.',
    credits: 'Hecho con React, Next.js, Framer Motion y ☕ colombiano',
    social: {
      github: 'https://github.com/ricardocastellar',
      linkedin: 'https://linkedin.com/in/ricardo-castellar',
      mail: 'ricardo.castellarp@gmail.com'
    },
    copyright: '© 2024 Ricardo Castellar · Bogotá, Colombia 🇨🇴'
  }
}

// Exportaciones individuales para fácil acceso
export const { header, hero, about, skills, projects, contact, footer } = portfolioData