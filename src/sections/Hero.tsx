import { motion } from 'framer-motion';
import { ArrowRight, Database, LayoutDashboard, Zap } from 'lucide-react';

const Hero = () => {
    const scrollToContact = () => {
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToStack = () => {
        document.getElementById('tecnologia')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cunei-dark pt-20">

            {/* FONDO ANIMADO */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cunei-cyan/5 via-cunei-dark to-cunei-dark" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                {/* Iconos flotantes más relevantes */}
                <motion.div animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-10 md:left-1/4 text-cunei-cyan/20"><Database size={64} /></motion.div>
                <motion.div animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/4 right-10 md:right-1/4 text-cunei-bronze/10"><LayoutDashboard size={80} /></motion.div>
            </div>

            <div className="container relative z-10 px-6 mx-auto text-center">

                {/* TAG DE VALOR (Ya no es código raro, es valor de negocio) */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-cunei-cyan bg-cunei-cyan/5 border border-cunei-cyan/20 rounded-full uppercase">
                    <Zap size={14} /><span>Automatización & Datos para Empresas</span>
                </motion.div>

                {/* TÍTULO ENFOCADO EN SOLUCIÓN */}
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-cunei-text mb-6">
                    Sistemas que <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cunei-cyan via-white to-cunei-cyan animate-gradient-x bg-300%">escalan tu negocio.</span>
                </motion.h1>

                {/* SUBTÍTULO DIRECTO */}
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="max-w-2xl mx-auto text-lg md:text-xl text-cunei-text/70 mb-10 leading-relaxed">
                    Transformamos procesos manuales y hojas de cálculo desordenadas en
                    <span className="text-white font-semibold"> flujos de datos autónomos</span>.
                    Sin interrupciones, sin errores humanos.
                </motion.p>

                {/* BOTONES INTERACTIVOS REALES */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10"
                >
                    {/* BOTÓN 1: PRINCIPAL */}
                    <motion.button
                        onClick={scrollToContact}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-10 py-5 bg-cunei-cyan text-cunei-dark font-black text-sm tracking-[0.2em] uppercase rounded-lg overflow-hidden"
                    >
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 animate-shine" />
                        <span className="relative z-10 flex items-center gap-2">
                            Auditar mi Proceso <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </motion.button>

                    {/* BOTÓN 2: SECUNDARIO */}
                    <motion.button
                        onClick={scrollToStack}
                        whileHover={{ scale: 1.05, borderColor: "#C5A059", color: "#C5A059", backgroundColor: "rgba(197, 160, 89, 0.05)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-white/5 border border-white/10 backdrop-blur-sm text-cunei-text font-bold text-sm tracking-[0.2em] uppercase rounded-lg transition-colors"
                    >
                        Ver Cómo Funciona
                    </motion.button>
                </motion.div>
            </div>

            {/* Decoración Inferior */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cunei-dark to-transparent z-10 pointer-events-none" />
        </section>
    );
};
export default Hero;
