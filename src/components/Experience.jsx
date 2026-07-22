import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Maestro de Tecnología',
      company: 'Escuela Secundaria Judith Gaxiola de Valdez',
      period: 'Abr 2022 - Jul 2024',
      location: 'Culiacán, Sinaloa',
      description: [
        'Instrucción y desarrollo de planes de estudio enfocados en alfabetización digital, lógica de programación y uso de herramientas tecnológicas',
        'Gestión de laboratorios de cómputo, asegurando la operatividad del hardware y la integridad de la red escolar',
        'Mentoría en proyectos estudiantiles de innovación tecnológica y fomento del pensamiento crítico a través de la informática',
      ],
    },
    {
      title: 'Desarrollador de Software',
      company: 'Quantum Connect',
      period: 'Abr 2022 - Jul 2024',
      location: 'Culiacán, Sinaloa',
      description: [
        'Desarrollo y mantenimiento de aplicaciones web con Java y JavaScript, utilizando el ecosistema Spring',
        'Uso de servicios en la nube de AWS (S3, EC2 y DynamoDB) para el despliegue y persistencia de datos',
        'Implementación de pipelines de CI/CD con GitHub Actions, optimizando ciclos de desarrollo',
        'Administración de servidores Linux: monitoreo, actualizaciones y configuración de servicios XMPP (Ejabberd) para mensajería empresarial',
      ],
    },
    {
      title: 'Desarrollador de Software y Auxiliar de Sistemas',
      company: 'Laboratorio Delia Barraza',
      period: 'Jun 2021 - Ago 2022',
      location: 'Culiacán, Sinaloa',
      description: [
        'Mantenimiento preventivo y correctivo de la infraestructura tecnológica en áreas críticas de química y diagnóstico',
        'Administración de servidores virtuales y soporte avanzado vía escritorio remoto (RDP) para la continuidad operativa',
        'Configuración avanzada de redes locales (VLANs) y sistemas de videovigilancia CCTV integrados a la red',
        'Optimización de periféricos especializados: configuración de impresoras térmicas, escáneres de laboratorio y dispositivos de interfaz médica',
        'Gestión de base de datos local para la resolución rápida de discrepancias en el registro de resultados',
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Experiencia Profesional</span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-dark-bg"></div>

                {/* Content Card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-dark-card border border-dark-border rounded-xl p-6 card-hover">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-blue-400 font-semibold mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <Briefcase className="text-blue-500 flex-shrink-0" size={24} />
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-blue-500 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
