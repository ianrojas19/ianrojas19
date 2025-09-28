import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Server, 
  Database, 
  GitBranch, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap,
  Palette,
  Settings
} from 'lucide-react';

const Technologies = () => {
  const techCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6" />,
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "React", "Vue", "TailwindCSS", "WordPress"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      technologies: ["PHP", "Laravel", "Node.js", "Express", ".NET Core", "C#", "Java"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "CMS",
      icon: <Settings className="w-6 h-6" />,
      technologies: ["WordPress", "Elementor", "WooCommerce", "Temas y Plugins Personalizados", "Drupal"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Control de Versiones",
      icon: <GitBranch className="w-6 h-6" />,
      technologies: ["Git", "GitHub", "GitLab", "BitBucket"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "CI/CD",
      icon: <Zap className="w-6 h-6" />,
      technologies: ["GitHub Actions", "Vercel Deploy", "Netlify", "GoDaddy", "Hostinger"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Bases de Datos",
      icon: <Database className="w-6 h-6" />,
      technologies: ["SQL Server", "MySQL", "NoSQL"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Herramientas",
      icon: <Palette className="w-6 h-6" />,
      technologies: ["Vite","Figma", "Postman", "Visual Studio Code", "Composer", "npm"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Cloud & Seguridad",
      icon: <Cloud className="w-6 h-6" />,
      technologies: ["Azure", "AWS", "Vercel", "Netlify", "Certificación CompTIA Security+ "],
      color: "from-teal-500 to-blue-500"
    }
  ];

  const extraSkills = [
    "Estudiante avanzado en Informática Empresarial (Universidad de Costa Rica)",
    "Título Técnico Medio en Informática en Desarrollo Web (COVAO)",
    "Certificación Inglés Avanzado B2+ (Colegio Universitario de Cartago)",
    "Formación Profesional en Desarrollo Frontend con React (Oracle Next Education)",
    "Conocimiento en Metodologías ágiles (Scrum, Kanban)",
    "Certificaciones internacionales en Redes & Ciberseguridad: (Cisco CCNA 1,2,3 - CompTIA Security+)",
    "Manejo y creación de APIs REST y SOAP Services",
    "- De click aquí para conocer mis certificaciones -"
  ];

  return (
    <section id="technologies" className="section-padding bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Tecnologías</span> & Competencias Técnicas
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Stack tecnológico diverso y en constante evolución para crear soluciones modernas y escalables
          </p>
          <p className="text-md text-white-100 max-w-4xl mx-auto mt-4 mb-0">
            Stack de este sitio: React, Vite, TailwindCSS, Framer Motion, Lucide Icons, Vercel Deploy
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 card-hover"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="tech-badge px-3 py-1 rounded-full text-xs font-medium text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-effect rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-[var(--primary)] to-purple-600 rounded-lg">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Estudio & Competencias Adicionales</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {extraSkills.map((skill, index) => {
              // Check if the skill is the certifications link or the React formation
              let url = null;
              if (skill === "- De click aquí para conocer mis certificaciones -") {
                url = "https://www.credly.com/users/irs19/badges#credly";
              } else if (skill === "Formación Profesional en Desarrollo Frontend con React (Oracle Next Education)") {
                url = "https://app.aluracursos.com/user/ian-rsq/fullCertificate/435eecccdf13fc60bdd85c843c01c77d";
              }
              if (url) {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline hover:text-blue-300 transition-colors"
                    >
                      {skill}
                    </a>
                  </motion.div>
                );
              }
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
                  <span className="text-gray-300">{skill}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;