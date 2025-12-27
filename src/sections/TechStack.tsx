const technologies = [
    { name: "n8n", color: "#FF655A" },
    { name: "Python", color: "#3776AB" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Docker", color: "#2496ED" },
    { name: "PowerBI", color: "#F2C811" },
    { name: "Supabase", color: "#3ECF8E" },
    { name: "OpenAI", color: "#10A37F" },
    { name: "React", color: "#61DAFB" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Tailwind", color: "#38B2AC" },
    { name: "AWS", color: "#FF9900" },
    { name: "Linux", color: "#FCC624" }
];

const TechStack = () => {
    return (
        <section className="py-16 border-y border-cunei-text/5 bg-black/40 overflow-hidden relative">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-mono text-cunei-text/30 tracking-[0.3em] uppercase">
                    INFRAESTRUCTURA MODERNA
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group/track">
                {/* El carrusel se pausa al poner el mouse encima */}
                <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8 hover:[animation-play-state:paused]">

                    {[...technologies, ...technologies, ...technologies].map((tech, idx) => (
                        <div
                            key={idx}
                            className="group/item relative flex items-center justify-center cursor-default transition-transform duration-300 hover:scale-110"
                        >
                            {/* TEXTO BASE: Gris oscuro (Visible siempre) */}
                            <span
                                className="text-3xl md:text-5xl font-heading font-bold text-cunei-text/20 transition-all duration-300 group-hover/item:text-opacity-100"
                                style={{
                                    // Al hacer hover, toma el color real de la marca
                                    color: 'var(--tech-color)',
                                    textShadow: 'var(--tech-shadow)'
                                }}
                                // Pasamos las variables dinámicamente
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = tech.color;
                                    e.currentTarget.style.textShadow = `0 0 25px ${tech.color}`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = ''; // Vuelve al CSS original (gris)
                                    e.currentTarget.style.textShadow = 'none';
                                }}
                            >
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default TechStack;