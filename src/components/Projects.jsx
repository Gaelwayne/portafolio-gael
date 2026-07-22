import React from 'react';
import { ExternalLink, Github, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Portal JGV',
      description:
        'Asistente virtual escolar y dashboard administrativo unificado para docentes, optimizando el seguimiento grupal y notificaciones en tiempo real sobre asistencias, calificaciones e incidencias.',
      tech: ['React', 'TypeScript', 'Prisma', 'Tailwind CSS'],
      featured: true,
      award: 'Prototipo ganador en feria de ingenierías TECNM Culiacán',
      links: {
        github: '#',
        demo: '#',
      },
    },
    {
      title: 'Sistema de detección de placas de carros',
      description:
        'Sistema de visión artificial para identificación vehicular, preprocesamiento de imágenes en tiempo real y extracción de caracteres (OCR) para consulta en base de datos.',
      tech: ['Python', 'OpenCV', 'SQL Server'],
      links: {
        github: '#',
      },
    },
    {
      title: 'Sistema de detección de humedad y riego (IoT)',
      description:
        'Monitoreo automatizado y control de riego por goteo basado en análisis de datos de humedad y temperatura en tiempo real con sensores ambientales.',
      tech: ['ESP32-S3', 'C++', 'IoT', 'PlatformIO'],
      links: {
        github: '#',
      },
    },
  ];

  return (
    <section id="proyectos" className="py-20 px-4 bg-dark-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Proyectos Destacados</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-dark-card border border-dark-border rounded-xl p-6 card-hover flex flex-col ${
                project.featured ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              {project.featured && (
                <div className="flex items-center gap-2 mb-4 text-yellow-500">
                  <Award size={20} />
                  <span className="text-sm font-semibold">{project.award}</span>
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-dark-border">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Código</span>
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
