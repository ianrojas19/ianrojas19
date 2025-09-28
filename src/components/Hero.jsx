import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ChevronDown, CheckCircle } from 'lucide-react';
const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Disponible Badge */}
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-8">
          <CheckCircle className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-medium">Disponible para trabajar</span>
        </motion.div>

        {/* Main Content */}
        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-gradient">Ian Rojas</span>
        </motion.h1>

        <motion.h2 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
          Desarrollador Web Junior
        </motion.h2>

        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">Desarrollador web junior orientado a crear soluciones funcionales, con facilidad para aprender y adaptarse a nuevos entornos.</motion.p>

        {/* Action Buttons */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.8
      }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="mailto:ian.rsq@gmail.com" className="btn-primary px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2 text-lg">
            <Mail className="w-5 h-5" />
            Contactar
          </a>
          
          <button onClick={scrollToPortfolio} className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--primary)] hover:text-white transition-all duration-300 text-lg">
            Explorar portafolio
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 1.5
      }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="cursor-pointer" onClick={scrollToPortfolio}>
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;