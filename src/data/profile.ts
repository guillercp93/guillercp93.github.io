// Portfolio content.

export const profile = {
  name: 'Guillermo Castillo Patiño',
  shortName: 'Guillermo Castillo',
  role: 'Ingeniero de Sistemas · Desarrollador Full Stack',
  location: 'Buga, Valle del Cauca, Colombia',
  email: 'guillercp93@outlook.com',
  linkedin: 'https://www.linkedin.com/in/guillermo-castillo-patino',
  github: 'https://github.com/guillercp93',
  avatar: 'https://avatars.githubusercontent.com/u/7396360?v=4',
  cv: 'cv-guillermo-castillo.pdf',
  summary:
    'Soy Ingeniero de Sistemas con 8+ años de experiencia en el desarrollo de aplicaciones web. Utilizo frameworks como Django, .NET Core y Laravel para el backend, y ReactJS para el frontend. Poseo sólidos conocimientos en el procesamiento y análisis de datos, empleo herramientas ETL y domino la visualización de datos con Power BI.',
  strengths:
    'Me destaco por comunicarme de forma efectiva, trabajar en equipo y adaptarme rápidamente al cambio. Afronto desafíos complejos con un enfoque orientado a la resolución de problemas y la innovación, desarrollando soluciones eficientes que mejoran la productividad.',
};

export const stats = [
  { value: '8+', label: 'años de experiencia' },
  { value: '5', label: 'empresas' },
  { value: '~70%', label: 'menos tiempo en procesos automatizados' },
  { value: 'B2', label: 'nivel de inglés' },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  stack: string[];
}

export const experience: Experience[] = [
  {
    role: 'Desarrollador Senior',
    company: 'Siesa',
    period: '2026 – Actualidad',
    highlights: [
      'Desarrollo de dos plataformas con asistencia de inteligencia artificial.',
      'Plataforma de gestión de agentes de IA: el usuario crea su agente, le inyecta conocimiento y amplía sus capacidades con page tools y MCP tools.',
      'Plataforma de gestión de datos de clientes: el usuario conecta sus fuentes de datos y genera reportes con la ayuda de un agente de IA.',
    ],
    stack: ['React', '.NET 10', 'PostgreSQL', 'Docker', 'Cube', 'MCP'],
  },
  {
    role: 'Technical Consultant',
    company: 'Kata Software S.A.S',
    period: '2025 – 2026',
    highlights: [
      'Implementación de la capa de servicios (middleware) para la comunicación entre Kata Mobile, Kata Engine y sistemas externos de clientes del sector financiero.',
      'Integraciones con centrales de riesgo, servicios de validación de identidad y firma electrónica.',
      'Consulta y envío de información hacia y desde sistemas internos de clientes.',
      'Generación de documentos PDF para firma electrónica y reportes, y procesamiento básico de imágenes.',
      'Despliegue en Azure App Services, con Azure Storage para archivos y Application Insights para monitoreo y logs.',
    ],
    stack: ['.NET 8', 'C#', 'Azure App Services', 'Azure Storage', 'Application Insights'],
  },
  {
    role: 'Desarrollador Senior Full Stack',
    company: 'Mawesi S.A.S',
    period: '2018 – 2024',
    highlights: [
      'Soporte y mejora de la aplicación web de administración de solicitudes para una universidad.',
      'Optimización del Sistema de Producción de una compañía farmacéutica, con cargue de información mediante DataStage e informes en Power BI y Excel.',
      'Módulos de carga y transformación de datos con Pandas integrados en una aplicación Django, automatizando procesos manuales con una reducción de tiempos de alrededor del 70%.',
      'Migración de soluciones de procesamiento de datos a Apache Airflow, mejorando la escalabilidad y el mantenimiento.',
      'Procesos ETL en DataStage desde múltiples fuentes hacia distintos destinos, con ejecución programada o bajo demanda.',
    ],
    stack: ['React', 'Laravel', 'PostgreSQL', '.NET Framework', 'Oracle', 'Django', 'Pandas', 'Airflow', 'DataStage', 'Power BI'],
  },
  {
    role: 'Ingeniero de Desarrollo',
    company: 'Opal Group S.A.S',
    period: '2017 – 2018',
    highlights: [
      'Implementación del sistema CRM para nuevos clientes con Django, Oracle y MySQL, y AngularJS en la interfaz.',
      'Módulo de gestión de proyectos: registro y cálculo de costos operativos y administrativos para una empresa constructora.',
      'Módulo de paquetes configurables para agrupar jerárquicamente servicios e insumos, con interfaz en ReactJS.',
    ],
    stack: ['Python', 'Django', 'Oracle', 'MySQL', 'AngularJS', 'React'],
  },
  {
    role: 'Estudiante en prácticas',
    company: 'Nuevos Medios S.A.S',
    period: '2015 – 2016',
    highlights: [
      'Diagnóstico y solución de incidencias de la plataforma de aprendizaje en línea KME, mejorando su estabilidad y rendimiento.',
      'Integración de videollamadas con Zoom y configuración de AWS CloudFront para streaming de video.',
      'Migración visual de jQuery y Bootstrap a AngularJS con Material Design.',
      'Módulo de interoperabilidad bajo el estándar LTI como trabajo de grado.',
    ],
    stack: ['AngularJS', 'Material Design', 'AWS CloudFront', 'Zoom API', 'LTI'],
  },
];

export interface Project {
  name: string;
  description: string;
  stack: string[];
  repo: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    name: 'MSI Performance Manager',
    description:
      'Gestor de rendimiento compatible con Wayland para portátiles gaming MSI: monitoreo de sensores en vivo, perfiles, límite de potencia de GPU y Cooler Boost, con escalamiento de privilegios vía Polkit.',
    stack: ['Rust', 'Tauri 2', 'Preact', 'Linux'],
    repo: 'https://github.com/guillercp93/msi-performance-manager',
  },
  {
    name: 'HtmlToPdfDotNet',
    description: 'Librería para generar PDFs a partir de HTML directamente en .NET.',
    stack: ['C#', '.NET 10', 'PDF'],
    repo: 'https://github.com/guillercp93/HtmlToPdfDotNet',
  },
  {
    name: 'DRRR',
    description: 'Chat web inspirado en el grupo Dollars de la serie Durarara!!, desplegado en Firebase.',
    stack: ['TypeScript', 'Firebase'],
    repo: 'https://github.com/guillercp93/DRRR',
    demo: 'https://dollars-reactive.firebaseapp.com/',
  },
  {
    name: 'Music Player',
    description: 'Reproductor de música de escritorio multiplataforma para Windows, macOS y Linux.',
    stack: ['TypeScript', 'Electron', 'React'],
    repo: 'https://github.com/guillercp93/music-player',
  },
  {
    name: 'Castlevania Theme for Omarchy',
    description: 'Tema para Omarchy inspirado en el videojuego Castlevania: Lament of Innocence.',
    stack: ['CSS', 'Linux', 'Theming'],
    repo: 'https://github.com/guillercp93/Castlevania-theme-omarchy',
  },
  {
    name: 'Kata .NET Project',
    description: 'Solución a la prueba técnica de Kata Software construida con .NET.',
    stack: ['C#', '.NET'],
    repo: 'https://github.com/guillercp93/KataDotnetProject',
  },
];

export const skills = [
  { group: 'Lenguajes', items: ['Python', 'JavaScript', 'TypeScript', 'C#', 'PHP'] },
  { group: 'Frameworks y librerías', items: ['Django', 'React', '.NET Core', 'Laravel', 'Node.js'] },
  { group: 'Bases de datos', items: ['Oracle', 'PostgreSQL', 'SQL Server', 'MySQL'] },
  { group: 'Procesamiento de datos', items: ['DataStage', 'Pandas', 'NumPy', 'Apache Airflow', 'Cube'] },
  { group: 'Cloud, DevOps y BI', items: ['Azure', 'AWS CloudFront', 'Docker', 'Power BI'] },
  { group: 'Inteligencia artificial', items: ['Agentes de IA', 'MCP'] },
];

export const education = [
  { title: 'Ingeniería de Sistemas', place: 'Universidad del Valle', year: '2017', kind: 'Formación académica' },
  { title: 'IBM Full Stack Software Developer Certificate', place: 'IBM · Coursera', year: '2025', kind: 'Certificación' },
  { title: 'Curso de inglés (intermedio B2)', place: 'English Now', year: '2025', kind: 'Idiomas' },
  { title: 'Curso de análisis de datos con Power BI', place: 'Platzi', year: '2023', kind: 'Curso' },
  { title: 'Desarrollo de servicios en la nube con HTML5, JavaScript y Node.js', place: 'Miriadax', year: '2015', kind: 'Curso' },
];
