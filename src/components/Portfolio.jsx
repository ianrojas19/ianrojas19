import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import TechIcon from '@/components/TechIcon';
import plantimecImg from '@/assets/img/plantimec.webp';
import iqnImg from '@/assets/img/iqn.webp';
import covaoImg from '@/assets/img/covao.webp';
import yfseImg from '@/assets/img/yfse.webp';
import saoImg from '@/assets/img/sao.webp';
import camaraImg from '@/assets/img/camara.webp';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Sitio Web Oficial + Agenda de Citas en Línea",
      company: "Plantimec Costa Rica",
      description: "Desarrollo de sitio web corporativo e informativo con sistema de gestión de citas en línea para clientes existentes y potenciales.",
      technologies: ["WordPress", "PHP", "NodeJS (ExpressJS)", "Java", "Bootstrap", "Git", "Github"],
      image: plantimecImg
    },
    {
      id: 2,
      title: "Sitio Web Oficial + Formulario de reclutamiento",
      company: "Importadora Química Del Norte S.A",
      description: "Diseño y desarrollo de sitio web y galeria de inventario, además de implementación de formulario de reclutamiento en línea para facilitar la captación de talento.",
      technologies: ["HTML", "CSS", "TailwindCSS", "JS", "PHP", "MySQL", "Git", "Github"],
      image: iqnImg
    },
    {
      id: 3,
      title: "Sistema de Administración Institucional",
      company: "COVAO | Colegio Vocacional de Artes y Oficios",
      description: "Sistema Institucional con capacidad de procesar +500 solicitudes diarias (retiros, devoluciones, prestamos) de aulas, gestionar usuarios, roles y permisos, y generar reportes administrativos.",
      technologies: ["PHP", "HTML", "CSS", "Bootstrap", "JS", "jQuery", "MySQL"],
      image: covaoImg
    },
    {
      id: 4,
      title: "Sitio Web para ONG Internacional",
      company: "YFSE | Youth for a Sustainable Earth",
      description: "Rediseño y desarrollo del sitio web oficial de la ONG YFSE de forma voluntaria, con integración de blog, eventos y donaciones en línea.",
      technologies: ["WordPress", "PHP", "JavaScript", "Elementor", "AWS", "Linux"],
      image: yfseImg
    },
    {
      id: 5,
      title: "Tema Dinámico para SAO CRM",
      company: "PROCOM S.A",
      description: "Rediseño y desarrollo de un tema personalizado y dinámico para SAO CRM (top productos de PROCOM), mejorando la experiencia del usuario y la interfaz de usuario.",
      technologies: ["EspoCRM", "Bootstrap", "CSS", "JS", "PHP", "HTML", "Git", "GitLab"],
      image: saoImg
    },
    {
      id: 6,
      title: "Asesoramiento Sitio Web Actualizado",
      company: "Cámara de Comercio de Cartago",
      description: "Consultoría y asesoramiento en la actualización y modernización del sitio web oficial de la Cámara de Comercio de Cartago, mejorando su funcionalidad de contacto y reservas de salas.",
      technologies: ["WordPress", "MySQL", "GoDaddy Deploy", "PHP", "HTML", "CSS", "JS"],
      image: camaraImg
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
            Proyectos principales que demuestran mis habilidades técnicas y capacidad para crear soluciones digitales efectivas en las distintas empresas donde he colaborado
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
                 src={project.image} />
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
                <div className="flex flex-col justify-between mb-3">
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