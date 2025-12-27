import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, Database, ChevronDown } from 'lucide-react';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulación
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 2000);
    };

    return (
        <section className="py-24 relative overflow-hidden bg-cunei-dark">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="glass-card p-8 md:p-14 text-center border-t border-cunei-cyan/20 shadow-2xl shadow-cunei-dark">

                    <div className="inline-flex justify-center mb-6 p-4 bg-cunei-cyan/10 rounded-full border border-cunei-cyan/20 animate-pulse-slow">
                        <Database className="w-8 h-8 text-cunei-cyan" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-cunei-text mb-6">
                        Inicia tu <span className="text-cunei-cyan">Transformación</span>
                    </h2>
                    <p className="text-cunei-text/60 mb-12 max-w-xl mx-auto text-lg">
                        Déjanos tus datos. Un ingeniero analizará tu infraestructura y te contactará en menos de 24 horas.
                    </p>

                    {success ? (
                        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center p-8 bg-green-500/10 rounded-xl border border-green-500/20">
                            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                            <h3 className="text-2xl font-bold text-cunei-text">¡Datos Recibidos!</h3>
                            <p className="text-cunei-text/70 mt-2">Tu solicitud ha entrado en nuestra cola de procesamiento.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 text-left max-w-lg mx-auto">
                            {/* Inputs con estilo glass */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-cunei-cyan mb-2 tracking-wider">NOMBRE</label>
                                    <input type="text" required className="w-full bg-black/20 border border-cunei-text/10 rounded-lg px-4 py-3 focus:border-cunei-cyan focus:ring-1 focus:ring-cunei-cyan outline-none transition-all text-white placeholder-white/20" placeholder="Ing. Enrique Miranda" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-cunei-cyan mb-2 tracking-wider">EMAIL</label>
                                    <input type="email" required className="w-full bg-black/20 border border-cunei-text/10 rounded-lg px-4 py-3 focus:border-cunei-cyan focus:ring-1 focus:ring-cunei-cyan outline-none transition-all text-white placeholder-white/20" placeholder="contacto@empresa.com" />
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-xs font-bold text-cunei-cyan mb-2 tracking-wider">SECTOR</label>
                                <div className="relative">
                                    {/* FIX: Agregamos 'bg-cunei-dark' y 'appearance-none' para control total */}
                                    <select
                                        className="w-full bg-black/20 border border-cunei-text/10 rounded-lg px-4 py-3 focus:border-cunei-cyan focus:ring-1 focus:ring-cunei-cyan outline-none transition-all text-white appearance-none cursor-pointer"
                                        style={{ colorScheme: 'dark' }} // Truco para obligar al navegador a usar menú oscuro
                                    >
                                        <option value="" disabled selected>Seleccione una opción...</option>
                                        <option className="bg-cunei-dark text-white">Banca & Finanzas</option>
                                        <option className="bg-cunei-dark text-white">Minería & Industria</option>
                                        <option className="bg-cunei-dark text-white">Agroindustria</option>
                                        <option className="bg-cunei-dark text-white">SaaS / Tech</option>
                                    </select>
                                    {/* Icono de flecha personalizado para asegurar visibilidad */}
                                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cunei-cyan pointer-events-none" size={20} />
                                </div>
                            </div>

                            {/* BOTÓN SUBMIT "SHINY" */}
                            <button disabled={loading} type="submit" className="group relative w-full bg-cunei-bronze hover:bg-cunei-bronze/90 text-cunei-dark font-black py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-cunei-bronze/20">
                                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine" />

                                <span className="relative z-10 flex items-center gap-2">
                                    {loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                                    {loading ? "PROCESANDO..." : "SOLICITAR AUDITORÍA"}
                                </span>
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};
export default Contact;