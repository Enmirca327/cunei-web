import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import BentoGrid from './sections/BentoGrid';
import TechStack from './sections/TechStack';
import Founder from './sections/Founder';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cunei-dark text-cunei-text font-sans selection:bg-cunei-cyan/30 overflow-x-hidden">
      {/* 1. Navegación */}
      <Navbar />

      <main>
        {/* 2. Portada (Hero) */}
        <div id="inicio">
          <Hero />
        </div>

        {/* 3. Servicios (Grilla) */}
        <div id="soluciones">
          <BentoGrid />
        </div>

        {/* 4. Tecnologías (Carrusel) */}
        <div id="tecnologia">
          <TechStack />
        </div>

        {/* 5. Fundador (Nosotros) - ESTE ES EL QUE FALTABA */}
        <div id="nosotros">
          <Founder />
        </div>

        {/* 6. Formulario */}
        <div id="contacto">
          <Contact />
        </div>
      </main>

      {/* 7. Pie de página */}
      <Footer />
    </div>
  );
}

export default App;