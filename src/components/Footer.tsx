

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/5 bg-deep-space text-center md:text-left">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <p className="text-off-white/40 text-sm">
                        &copy; 2025 CUNEI Engineering. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <span className="text-off-white/40 text-sm">La Paz, Bolivia</span>
                    <span className="w-1 h-1 bg-bronze rounded-full" />
                    <span className="text-off-white/40 text-sm">Global Operations</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
