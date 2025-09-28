import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Target, 
  TrendingUp, 
  Eye, 
  BookOpen, 
  RefreshCw 
} from 'lucide-react';

const Values = () => {
  const values = [
    {
      title: "Adaptabilidad",
      description: "Capacidad para ajustarme rápidamente a nuevas tecnologías, metodologías y entornos de trabajo.",
      icon: <RefreshCw className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Planeación y Organización",
      description: "Estructuro proyectos de manera eficiente, estableciendo prioridades y cumpliendo deadlines.",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Orientación a Resultados",
      description: "Enfoque constante en entregar soluciones que generen valor real y cumplan objetivos específicos.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Proactividad",
      description: "Tomo iniciativa para identificar oportunidades de mejora y proponer soluciones innovadoras.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Atención al Detalle",
      description: "Cuidado meticuloso en cada línea de código, garantizando calidad y funcionalidad óptima.",
      icon: <Eye className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Autodidacta",
      description: "Aprendizaje continuo y autónomo de nuevas tecnologías y mejores prácticas de desarrollo.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section id="values" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Valores</span> & Competencias Personales
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Competencias clave que me permiten destacar como desarrollador y colaborador efectivo en equipos de trabajo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-8 card-hover group text-center"
            >
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {value.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[var(--primary)] transition-colors">
                {value.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              ¿Listo para trabajar juntos?
            </h3>
            <p className="text-gray-400 mb-6 text-lg">
              Estas competencias, combinadas con mi pasión por el desarrollo web, me permiten contribuir 
              efectivamente a proyectos que generen impacto social y humano.
            </p>
            <a
              href="mailto:ian.rsq@gmail.com"
              className="btn-primary px-8 py-4 rounded-full text-white font-semibold inline-flex items-center gap-2"
            >
              Hablemos de tu proyecto
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;