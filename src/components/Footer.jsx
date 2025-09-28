import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Heart } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-black/40 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">Ian Rojas</h3>
            <p className="text-gray-400">Desarrollador Web Junior</p>
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="flex justify-center gap-6">
            <a href="mailto:ian.rsq@gmail.com" className="p-3 glass-effect rounded-full hover:bg-[var(--primary)]/20 transition-colors group" aria-label="Enviar email">
              <Mail className="w-5 h-5 text-gray-400 group-hover:text-[var(--primary)] transition-colors" />
            </a>
            <a href="#" onClick={e => {
            e.preventDefault();
            // Toast notification for GitHub
          }} className="p-3 glass-effect rounded-full hover:bg-[var(--primary)]/20 transition-colors group" aria-label="Ver GitHub">
              <Github className="w-5 h-5 text-gray-400 group-hover:text-[var(--primary)] transition-colors" />
            </a>
            <a href="#" onClick={e => {
            e.preventDefault();
            // Toast notification for LinkedIn
          }} className="p-3 glass-effect rounded-full hover:bg-[var(--primary)]/20 transition-colors group" aria-label="Ver LinkedIn">
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-[var(--primary)] transition-colors" />
            </a>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} viewport={{
          once: true
        }} className="text-center md:text-right">
            <p className="text-gray-400 mb-2"></p>
            <a href="mailto:ian.rsq@gmail.com" className="text-[var(--primary)] hover:text-purple-400 transition-colors font-medium">
              ian.rsq@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.6
      }} viewport={{
        once: true
      }} className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Ian Rojas. Desarrollado con 
            <Heart className="w-4 h-4 text-red-500" />
            y mucho café
          </p>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;