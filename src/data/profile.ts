// Site profile.
import type { Localized } from '@/i18n/utils';

export const profile = {
  name: 'Guillermo Castillo Patiño',
  shortName: 'Guillermo Castillo',
  role: {
    es: 'Ingeniero de Sistemas · Desarrollador Full Stack',
    en: 'Systems Engineer · Full Stack Developer',
  },
  location: 'Buga, Valle del Cauca, Colombia',
  email: 'guillercp93@outlook.com',
  linkedin: 'https://www.linkedin.com/in/guillermo-castillo-patino',
  github: 'https://github.com/guillercp93',
  // Live GitHub avatar.
  avatar: 'https://avatars.githubusercontent.com/u/7396360',
  cv: {
    es: 'cv-guillermo-castillo.pdf',
    en: 'cv-guillermo-castillo-en.pdf',
  },
  summary: {
    es: 'Soy Ingeniero de Sistemas con 8+ años de experiencia en el desarrollo de aplicaciones web. Utilizo frameworks como Django, .NET Core y Laravel para el backend, y ReactJS para el frontend. Poseo sólidos conocimientos en el procesamiento y análisis de datos, empleo herramientas ETL y domino la visualización de datos con Power BI.',
    en: 'I am a Systems Engineer with more than 8 years of experience developing web applications. I use frameworks like Django, .NET Core and Laravel for the backend, and ReactJS for the frontend. I have good knowledge of data processing and analysis, I work with ETL tools and I use Power BI for data visualization.',
  },
  strengths: {
    es: 'Me destaco por comunicarme de forma efectiva, trabajar en equipo y adaptarme rápidamente al cambio. Afronto desafíos complejos con un enfoque orientado a la resolución de problemas y la innovación, desarrollando soluciones eficientes que mejoran la productividad.',
    en: 'I communicate well, I like working in a team and I adapt quickly to changes. I face complex problems with a focus on solving them and finding new ideas, and I build efficient solutions that improve productivity.',
  },
} satisfies Record<string, Localized>;

export const stats: { value: string; label: Localized }[] = [
  { value: '8+', label: { es: 'años de experiencia', en: 'years of experience' } },
  { value: '~70%', label: { es: 'menos tiempo en procesos automatizados', en: 'less time in automated processes' } },
  { value: 'B2', label: { es: 'nivel de inglés', en: 'English level' } },
];
