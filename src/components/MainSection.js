"use client";

const MainSection = () => {
    return (
        <section
            id="home"
            className="relative min-h-[94vh] flex items-center justify-center text-center px-5 py-20 overflow-hidden bg-white"
        >
            {/* Soft Background Pattern */}
            <div className="absolute inset-0 opacity-[0.05] bg-center bg-cover"
                style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
            />

            {/* Mandala SVG (Primary Color) */}
            <div className="absolute top-1/2 left-1/2 animate-mandala">
                <svg
                    className="w-150 h-150 md:w-175 md:h-175 opacity-[0.3]"
                    viewBox="0 0 400 400"
                    fill="none"
                >
                    <circle cx="200" cy="200" r="180" stroke="#ea580c" strokeWidth="1" />
                    <circle cx="200" cy="200" r="150" stroke="#ea580c" strokeWidth="0.5" />
                    <circle cx="200" cy="200" r="120" stroke="#ea580c" strokeWidth="1" />
                    <circle cx="200" cy="200" r="60" stroke="#ea580c" strokeWidth="1" />
                    <line x1="200" y1="20" x2="200" y2="380" stroke="#ea580c" strokeWidth="0.5" />
                    <line x1="20" y1="200" x2="380" y2="200" stroke="#ea580c" strokeWidth="0.5" />
                    <line x1="73" y1="73" x2="327" y2="327" stroke="#ea580c" strokeWidth="0.5" />
                    <line x1="327" y1="73" x2="73" y2="327" stroke="#ea580c" strokeWidth="0.5" />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-212.5">

                {/* Divider */}
                <div className="flex items-center justify-center gap-3 mb-5">
                    <div className="h-px w-17.5 bg-gradient-to-r from-transparent to-primary" />
                    <span className="text-primary text-xl">🪷</span>
                    <div className="h-px w-17.5 bg-gradient-to-l from-transparent to-primary" />
                </div>

                {/* Title */}
                <h1 className="font-serif text-[clamp(1.5rem,4vw,3.2rem)] text-secondary leading-tight mb-2">
                    ISKCON Noida Expressway
                </h1>

                {/* Subtitle */}
                <p className="text-lg text-primary mb-1 font-semibold">
                    श्री श्री जगन्नाथ बलदेव सुभद्रा मंदिर
                </p>

                {/* Tagline */}
                <p className="italic text-sm text-gray-500 mb-9">
                    "हरे कृष्ण की भक्ति में जीवन को समर्पित करें"
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-4">

                    {/* Primary Button */}
                    <a
                        href="#live"
                        className="px-7 py-3 rounded-full text-white font-bold bg-primary hover:bg-secondary transition-all"
                    >
                        🔴 लाइव दर्शन
                    </a>

                    {/* Secondary Button */}
                    <a
                        href="#project"
                        className="px-7 py-3 rounded-full text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all"
                    >
                        🛕 मंदिर निर्माण
                    </a>

                    {/* Accent Button */}
                    <a
                        href="#"
                        className="px-7 py-3 rounded-full text-secondary bg-tertiary font-semibold hover:bg-primary hover:text-white transition-all"
                    >
                        💬 WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MainSection;