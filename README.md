# Portfolio of Guillermo Castillo

This project is a personal portfolio website for Guillermo Castillo, a full-stack web developer with over 8 years of experience. The website is built using Astro, a modern static site generator.

## File: `src/pages/index.astro`

This file is the main entry point for the portfolio website. It sets up the layout and content for the homepage.

### Imports

The file imports various components and icons used throughout the page:

- `Badge`, `SocialPill`, `SectionContainer`, `Experiencia`, `Proyectos` from the `Components` directory.
- `GithubIcon`, `LinkedInIcon`, `MailIcon`, `ExperienceIcon`, `CodeSandboxIcon` from the `Icons` directory.
- `Layout` from the `Layouts` directory.
- `Image` from `astro:assets`.

### Layout

The `Layout` component is used to wrap the main content of the page. It includes metadata such as the title and description of the page.

### Main Content

The main content of the page is wrapped in a `<main>` tag with some padding classes.

#### Section: Inicio

This section introduces Guillermo Castillo with a profile picture, a greeting, and a brief description of his experience and location.

#### Section: Experiencia Laboral

This section showcases Guillermo's work experience using the `Experiencia` component.

#### Section: Proyectos

This section highlights Guillermo's projects using the `Proyectos` component.

## Conclusion

This `index.astro` file sets up the main structure and content of Guillermo Castillo's portfolio website. It uses various components to organize the content into sections, making it easy to maintain and update.
