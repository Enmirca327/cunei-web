import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Triangle, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) setHidden(true);
        else setHidden(false);
        if (latest > 50) setScrolled(true);
        else setScrolled(false);
    });

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { name: 'Soluciones', id: 'soluciones' },
        { name: 'Tecnología', id: 'tecnologia' },
        { name: 'Nosotros', id: 'nosotros' }
    ];

    return (
        <>
            <motion.nav
                variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={cn(
                    "fixed top-0 inset-x-0 z-50 h-24 w-full transition-all duration-300",
                    scrolled ? "bg-cunei-dark/90 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "bg-transparent"
                )}
            >
                <div className="flex items-center justify-between px-6 md:px-12 h-full max-w-7xl mx-auto">
                    {/* LOGO MEJORADO (Más grande, marco más fino) */}
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }} className="flex items-center gap-5 group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative flex items-center justify-center p-2.5 bg-white/5 rounded-xl border border-white/5 backdrop-blur-sm group-hover:bg-cunei-cyan/5 group-hover:border-cunei-cyan/30 transition-colors duration-300"
                        >
                            {/* Logo aumentado de tamaño */}
                            <img src="/logo.png" alt="CUNEI" className="h-10 w-auto md:h-12 object-contain hidden md:block" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                            <Triangle className="w-10 h-10 text-cunei-cyan fill-cunei-cyan/10 md:hidden" />
                        </motion.div>
                        <span className="text-2xl md:text-3xl font-bold tracking-widest font-heading text-cunei-text group-hover:text-white transition-colors">
                            CUNEI
                        </span>
                    </a>

                    {/* ENLACES DESKTOP (Con animación Hover real) */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((item) => (
                            <motion.button
                                key={item.name}
                                onClick={() => scrollToSection(item.id)}
                                whileHover={{ scale: 1.05, color: "#ffffff" }}
                                whileTap={{ scale: 0.95 }}
                                className="relative text-sm font-bold text-cunei-text/70 uppercase tracking-wider py-2"
                            >
                                {item.name}
                                {/* Línea inferior animada */}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cunei-cyan scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100" />
                            </motion.button>
                        ))}
                    </div>

                    {/* BOTÓN CTA (Física real con Framer Motion) */}
                    <div className="flex items-center gap-4">
                        <motion.button
                            onClick={() => scrollToSection('contacto')}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 212, 255, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:flex relative px-8 py-3 overflow-hidden bg-cunei-cyan text-cunei-dark font-black text-xs md:text-sm rounded-lg shadow-[0_0_15px_rgba(0,212,255,0.2)]"
                        >
                            {/* Brillo Pasando */}
                            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 animate-shine" />
                            <span className="relative z-10">AGENDAR AUDITORÍA</span>
                        </motion.button>

                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-cunei-text hover:text-cunei-cyan transition-colors p-2">
                            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="fixed inset-0 z-40 bg-cunei-dark/95 backdrop-blur-2xl md:hidden pt-32 px-8">
                        <div className="flex flex-col gap-10 text-center">
                            {navLinks.map((item) => (
                                <button key={item.name} onClick={() => scrollToSection(item.id)} className="text-3xl font-heading font-bold text-cunei-text hover:text-cunei-cyan uppercase tracking-widest">{item.name}</button>
                            ))}
                            <button onClick={() => scrollToSection('contacto')} className="mt-8 px-8 py-5 bg-gradient-to-r from-cunei-cyan to-blue-500 text-white font-black rounded-xl text-xl shadow-2xl active:scale-95 transition-transform">AGENDAR AUDITORÍA</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
export default Navbar;