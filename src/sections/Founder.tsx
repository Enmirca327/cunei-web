import { motion } from 'framer-motion';
import { Network, Award, CheckCircle2 } from 'lucide-react';

const Founder = () => {
    const credentials = [
        "Arquitectura de Datos Escalable",
        "Automatización de Procesos (n8n & Python)",
        "Ingeniería de Telecomunicaciones",
        "Infraestructura de Servidores Privados"
    ];

    return (
        <section className="py-32 relative overflow-hidden bg-cunei-dark">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-b from-cunei-bronze/5 to-transparent skew-x-12 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Lado Izquierdo: Imagen Abstracta/Profesional */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-5/12 relative"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                            <div className="absolute inset-0 border border-cunei-bronze/20 rounded-2xl rotate-6 translate-x-4 translate-y-4"></div>
                            <div className="absolute inset-0 border border-cunei-cyan/20 rounded-2xl -rotate-3 -translate-x-4 -translate-y-4"></div>

                            <div className="absolute inset-0 bg-cunei-dark/90 backdrop-blur-xl border border-cunei-text/10 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center group hover:shadow-cunei-cyan/20 transition-all duration-500">
                                <div className="text-center p-10">
                                    <div className="w-32 h-32 mx-auto bg-cunei-cyan/5 rounded-full flex items-center justify-center mb-6 border border-cunei-cyan/20 group-hover:scale-110 transition-transform duration-500">
                                        <Network size={64} className="text-cunei-cyan" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Ing. Enrique Miranda</h3>
                                    <p className="font-mono text-sm text-cunei-bronze">LEAD ENGINEER</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Lado Derecho: Propuesta de Valor Humana */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-7/12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-cunei-bronze bg-cunei-bronze/10 border border-cunei-bronze/20 rounded-full uppercase">
                            <Award size={14} />
                            <span>Enfoque Técnico, No Publicitario</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-cunei-text mb-8 leading-tight">
                            Más allá del <span className="text-cunei-cyan">Hype de la IA.</span>
                        </h2>

                        <p className="text-lg md:text-xl text-cunei-text/70 mb-8 leading-relaxed">
                            Cualquiera puede conectar un chatbot. El verdadero reto es construir sistemas que sostengan la operación de una empresa día tras día sin fallar.
                            <br /><br />
                            Vengo del mundo de las <strong>telecomunicaciones críticas</strong> (sí, satélites y redes que no pueden caerse).
                            No traigo "magia", traigo esa misma <strong>disciplina de ingeniería</strong> para ordenar tus datos y automatizar tu negocio con seriedad.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            {credentials.map((cred, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-cunei-cyan shrink-0" size={20} />
                                    <span className="text-cunei-text/80 font-medium">{cred}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Founder;