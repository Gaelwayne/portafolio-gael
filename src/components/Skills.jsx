import React from 'react';
import { Code, Layers, Server, Network, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { TechIcons } from '../data/techIcons';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      titleKey: 'languages',
      icon: Code,
      skills: [
        { name: 'Java', icon: TechIcons.Java },
        { name: 'Python', icon: TechIcons.Python },
        { name: 'JavaScript', icon: TechIcons.JavaScript },
        { name: 'TypeScript', icon: TechIcons.TypeScript },
        { name: 'SQL', icon: null },
        { name: 'HTML/CSS', icon: null },
        { name: 'PHP', icon: null },
      ],
      color: 'blue',
    },
    {
      titleKey: 'frameworks',
      icon: Layers,
      skills: [
        { name: 'React', icon: TechIcons.React },
        { name: 'Spring Boot', icon: null },
        { name: 'Prisma', icon: null },
        { name: 'Tailwind CSS', icon: null },
        { name: 'Shadcn/ui', icon: null },
        { name: 'OpenCV', icon: null },
        { name: 'TensorFlow', icon: null },
      ],
      color: 'purple',
    },
    {
      titleKey: 'infrastructure',
      icon: Server,
      skills: [
        { name: 'AWS (S3, EC2)', icon: TechIcons.AWS },
        { name: 'Servidores Linux', icon: null },
        { name: 'Docker', icon: TechIcons.Docker },
        { name: 'Virtualización', icon: null },
        { name: 'GitHub Actions', icon: null },
      ],
      color: 'green',
    },
    {
      titleKey: 'tools',
      icon: Network,
      skills: [
        { name: 'Administración Cisco', icon: null },
        { name: 'VLANs', icon: null },
        { name: 'SNMP / ICMP', icon: null },
        { name: 'Git', icon: TechIcons.Git },
        { name: 'Jira', icon: null },
        { name: 'n8n', icon: null },
        { name: 'PlatformIO', icon: null },
      ],
      color: 'orange',
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20',
      purple: 'border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20',
      green: 'border-green-500/30 bg-green-500/10 hover:bg-green-500/20',
      orange: 'border-orange-500/30 bg-orange-500/10 hover:bg-orange-500/20',
    };
    return colors[color] || colors.blue;
  };

  const getIconColorClass = (color) => {
    const colors = {
      blue: 'text-blue-500',
      purple: 'text-purple-500',
      green: 'text-green-500',
      orange: 'text-orange-500',
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="sobre-mi" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t.skills.title}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-dark-card border border-dark-border rounded-xl p-6 card-hover"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${getColorClasses(category.color)}`}>
                    <Icon className={getIconColorClass(category.color)} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t.skills[category.titleKey]}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span
                        key={i}
                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${getColorClasses(
                          category.color
                        )} text-white flex items-center gap-2`}
                      >
                        {SkillIcon && (
                          <span className={getIconColorClass(category.color)}>
                            <SkillIcon />
                          </span>
                        )}
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Education Section */}
        <div className="mt-12 bg-dark-card border border-dark-border rounded-xl p-6">
          <h3 className="text-2xl font-bold text-white mb-4">{t.skills.education}</h3>
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <p className="text-lg font-semibold text-blue-400 mb-1">
                {t.skills.degree}
              </p>
              <p className="text-gray-300 mb-2">
                {t.skills.school}
              </p>
              <p className="text-gray-400 text-sm">
                {t.skills.period}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            {t.skills.contact}
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:gaelino514230@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              {t.skills.email}
            </a>
            <a
              href="https://wa.me/526673483863"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={20} />
              {t.skills.whatsapp}: 667 348 3863
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
