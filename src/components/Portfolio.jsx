import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import TechIcon from '@/components/TechIcon';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Sistema de Gestión Empresarial",
      company: "Genérico",
      description: "Aplicación web completa para gestión de inventarios, ventas y reportes con dashboard interactivo.",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
      image: "Sistema de gestión empresarial con dashboard moderno"
    },
    {
      id: 2,
      title: "E-commerce Responsivo",
      company: "Genérico",
      description: "Tienda online moderna con carrito de compras, pasarela de pagos y panel administrativo.",
      technologies: ["React", "Node.js", "Express", "TailwindCSS", "Stripe"],
      image: "E-commerce moderno con diseño responsivo"
    },
    {
      id: 3,
      title: "Portal Corporativo WordPress",
      company: "Genérico",
      description: "Sitio web corporativo con CMS personalizado, blog integrado y optimización SEO.",
      technologies: ["WordPress", "PHP", "CSS", "JavaScript", "MySQL"],
      image: "Portal corporativo elegante con WordPress"
    },
    {
      id: 4,
      title: "API REST para Mobile",
      company: "Genérico",
      description: "API robusta para aplicación móvil con autenticación JWT y documentación completa.",
      technologies: [".NET Core", "C#", "SQL Server", "Swagger", "Azure"],
      image: "API REST con documentación Swagger"
    },
    {
      id: 5,
      title: "Dashboard Analytics",
      company: "Genérico",
      description: "Panel de control con visualización de datos en tiempo real y reportes automatizados.",
      technologies: ["Vue.js", "Node.js", "Chart.js", "MongoDB", "Socket.io"],
      image: "Dashboard de analytics con gráficos interactivos"
    },
    {
      id: 6,
      title: "CMS Headless Personalizado",
      company: "Genérico",
      description: "Sistema de gestión de contenidos headless con API GraphQL y panel de administración.",
      technologies: ["Strapi", "GraphQL", "React", "PostgreSQL", "Vercel"],
      image: "CMS headless con interfaz moderna"
    }
  ];

  const handleProjectClick = () => {
    toast({
      title: "🚧 Proyecto en desarrollo",
      description: "Los enlaces a proyectos reales se añadirán próximamente. ¡Mantente atento!",
      duration: 4000,
    });
  };

  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Experiencia Laboral</span> & Portafolio
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Proyectos que demuestran mis habilidades técnicas y capacidad para crear soluciones digitales efectivas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl overflow-hidden card-hover group"
            >
              <div className="relative overflow-hidden">
                <img 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={`Proyecto ${project.title}`}
                 src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={handleProjectClick}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                  <button
                    onClick={handleProjectClick}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="text-sm text-[var(--primary)] font-medium">{project.company}</span>
                </div>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="tech-badge px-3 py-1 rounded-full text-xs font-medium text-white flex items-center gap-1.5"
                    >
                      <TechIcon technology={tech} className="w-3.5 h-3.5" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;