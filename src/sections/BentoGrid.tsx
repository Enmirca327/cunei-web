import { motion } from 'framer-motion';
import { Database, Lock, BarChart3, Workflow } from 'lucide-react';

const services = [
    {
        icon: <Workflow className="w-10 h-10 text-cunei-cyan" />,
        title: "Ops Automation & n8n",
        desc: "Diseñamos flujos de trabajo autónomos que conectan tu ERP, CRM y Bancos. Automatizamos conciliaciones, facturación y logística, reduciendo la carga operativa humana en un 60%.",
        colSpan: "md:col-span-2",
    },
    {
        icon: <Database className="w-10 h-10 text-cunei-bronze" />,
        title: "Data Pipelines ETL",
        desc: "Transformamos datos crudos y desordenados en activos de valor. Limpieza, estructuración y almacenamiento en PostgreSQL de alto rendimiento.",
        colSpan: "md:col-span-1",
    },
    {
        icon: <Lock className="w-10 h-10 text-cunei-cyan" />,
        title: "Servidores Privados",
        desc: "Privacidad total. Desplegamos modelos de IA (Llama/DeepSeek) en tu propia infraestructura (VPS/On-Premise). Tus datos nunca tocan servidores públicos.",
        colSpan: "md:col-span-1",
    },
    {
        icon: <BarChart3 className="w-10 h-10 text-cunei-bronze" />,
        title: "Business Intelligence",
        desc: "Dashboards ejecutivos en PowerBI o Looker Studio que se actualizan solos. Visualiza el ROI y detecta cuellos de botella en tiempo real.",
        colSpan: "md:col-span-2",
    },
];

const BentoGrid = () => {
    return (
        <section className="py-32 bg-cunei-dark relative z-20">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-cunei-text mb-6">
                        Soluciones de <span className="text-cunei-bronze">Ingeniería Real</span>
                    </h2>
                    <p className="text-lg text-cunei-text/60 leading-relaxed">
                        No vendemos "prompts". Construimos la infraestructura digital que soporta el crecimiento de empresas en Banca, Minería y Tecnología.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`glass-card p-10 group relative overflow-hidden flex flex-col justify-between min-h-[320px] ${service.colSpan} border-t border-white/10`}
                        >
                            {/* Fondo Gradiente Interactivo */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cunei-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10">
                                <div className="mb-8 p-4 bg-cunei-dark/50 w-fit rounded-xl border border-white/10 group-hover:scale-110 group-hover:border-cunei-cyan/50 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-300">
                                    {service.icon}
                                </div>

                                <h3 className="text-3xl font-heading font-bold text-cunei-text mb-4 group-hover:text-cunei-cyan transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-cunei-text/70 leading-relaxed text-base font-light">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Decoración Esquina */}
                            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-cunei-bronze/5 rounded-full blur-3xl group-hover:bg-cunei-cyan/10 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default BentoGrid;