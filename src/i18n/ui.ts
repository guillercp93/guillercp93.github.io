// Interface strings per locale.
const es = {
  meta: {
    title: 'Guillermo Castillo · Desarrollador Full Stack',
    description:
      'Portafolio de Guillermo Castillo Patiño, Ingeniero de Sistemas y desarrollador Full Stack con 8+ años de experiencia en React, .NET, Django, Laravel y procesamiento de datos.',
    ogLocale: 'es_CO',
  },
  ids: {
    home: 'inicio',
    about: 'sobre-mi',
    experience: 'experiencia',
    projects: 'proyectos',
    skills: 'habilidades',
    education: 'formacion',
    contact: 'contacto',
  },
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    projects: 'Proyectos',
    skills: 'Habilidades',
    education: 'Formación',
    contact: 'Contacto',
    home: 'Ir al inicio',
    menu: 'Abrir menú',
    sections: 'Secciones',
    switchLabel: 'Ver en inglés',
  },
  hero: {
    greeting: 'Hola, soy',
    pitch:
      'Construyo aplicaciones web de punta a punta con <strong>React</strong>, <strong>.NET</strong>, <strong>Django</strong> y <strong>Laravel</strong>, y automatizo procesos de datos con <strong>ETL</strong>, <strong>Airflow</strong> y <strong>Power BI</strong>.',
    downloadCv: 'Descargar CV',
    contact: 'Contactar',
    email: 'Correo electrónico',
    photo: 'Foto de',
  },
  about: {
    eyebrow: '01 · sobre mí',
    title: 'Software que mejora la productividad',
    companies: 'empresas',
  },
  experience: {
    eyebrow: '02 · experiencia',
    title: 'Trayectoria profesional',
  },
  projects: {
    eyebrow: '03 · proyectos',
    title: 'Proyectos personales',
    code: 'Código de',
    demo: 'Ver demo de',
    more: 'Ver más en GitHub',
  },
  skills: {
    eyebrow: '04 · habilidades',
    title: 'Stack tecnológico',
  },
  education: {
    eyebrow: '05 · formación',
    title: 'Educación y certificaciones',
  },
  contact: {
    eyebrow: '06 · contacto',
    titleStart: '¿Construimos algo',
    titleAccent: 'juntos',
    titleEnd: '?',
    lead: '¿Tienes un proyecto, una propuesta o simplemente quieres conversar? Escríbeme y te respondo lo antes posible.',
    send: 'Enviar correo',
    cv: 'Hoja de vida',
  },
  tech: 'Tecnologías',
};

export type UiStrings = typeof es;

const en: UiStrings = {
  meta: {
    title: 'Guillermo Castillo · Full Stack Developer',
    description:
      'Portfolio of Guillermo Castillo Patiño, Systems Engineer and Full Stack developer with more than 8 years of experience in React, .NET, Django, Laravel and data processing.',
    ogLocale: 'en_US',
  },
  ids: {
    home: 'home',
    about: 'about',
    experience: 'experience',
    projects: 'projects',
    skills: 'skills',
    education: 'education',
    contact: 'contact',
  },
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
    home: 'Go to top',
    menu: 'Open menu',
    sections: 'Sections',
    switchLabel: 'Ver en español',
  },
  hero: {
    greeting: "Hi, I'm",
    pitch:
      'I build complete web applications with <strong>React</strong>, <strong>.NET</strong>, <strong>Django</strong> and <strong>Laravel</strong>, and I automate data processes with <strong>ETL</strong>, <strong>Airflow</strong> and <strong>Power BI</strong>.',
    downloadCv: 'Download CV',
    contact: 'Contact me',
    email: 'Email',
    photo: 'Photo of',
  },
  about: {
    eyebrow: '01 · about',
    title: 'Software that improves productivity',
    companies: 'companies',
  },
  experience: {
    eyebrow: '02 · experience',
    title: 'Work experience',
  },
  projects: {
    eyebrow: '03 · projects',
    title: 'Personal projects',
    code: 'Source code of',
    demo: 'Live demo of',
    more: 'See more on GitHub',
  },
  skills: {
    eyebrow: '04 · skills',
    title: 'Tech stack',
  },
  education: {
    eyebrow: '05 · education',
    title: 'Education and certifications',
  },
  contact: {
    eyebrow: '06 · contact',
    titleStart: "Let's build something",
    titleAccent: 'together',
    titleEnd: '',
    lead: 'Do you have a project or a proposal, or do you just want to talk? Write to me and I will answer as soon as possible.',
    send: 'Send email',
    cv: 'Resume',
  },
  tech: 'Technologies',
};

export const ui = { es, en };
