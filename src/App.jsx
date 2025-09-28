import React from 'react';
import { Helmet } from 'react-helmet';
// import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Technologies from '@/components/Technologies';
import Values from '@/components/Values';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen gradient-bg">
      <Helmet>
        <title>Ian Rojas - Desarrollador Web Junior | Portafolio Profesional</title>
        <meta name="description" content="Desarrollador web junior con experiencia en CMS y competencias clave como adaptabilidad, planeación y orientación a resultados. Disponible para trabajar." />
        <meta name="keywords" content="desarrollador web, junior, frontend, backend, React, Laravel, WordPress, Ian Rojas" />
        <meta name="author" content="Ian Rojas" />
        <meta property="og:title" content="Ian Rojas - Desarrollador Web Junior" />
        <meta property="og:description" content="Portafolio profesional de desarrollador web junior especializado en tecnologías modernas" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Header />
      
      <main>
        <Hero />
        <Portfolio />
        <Technologies />
        <Values />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;