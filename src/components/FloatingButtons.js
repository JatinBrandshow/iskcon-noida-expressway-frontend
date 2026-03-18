"use client";

import { useEffect, useState } from "react";

const FloatingButtons = () => {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* WhatsApp Floating Icon */}
            <a
                href="https://wa.me/91XXXXXXXXXX?text=Hare%20Krishna!%20Main%20ISKCON%20Noida%20Expressway%20ke%20baare%20mein%20jaankari%20chahta%20hun."
                target="_blank"
                className="fixed bottom-22.5 right-7 bg-[linear-gradient(135deg,#25D366,#128C7E)] text-white w-14 h-14 rounded-full flex items-center justify-center text-[26px] shadow-[0_6px_25px_rgba(37,211,102,0.5)] z-999 animate-float"
            >
                💬
            </a>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/91XXXXXXXXXX?text=Hare%20Krishna!%20ISKCON%20Noida%20Expressway%20ke%20baare%20mein%20jaankari%20chahiye"
                target="_blank"
                className="fixed bottom-22.5 right-25 bg-[#25D366] text-white px-5 py-3 rounded-full font-extrabold text-[13px] shadow-[0_6px_25px_rgba(37,211,102,0.5)] flex items-center gap-2 animate-float"
            >
                💬 WhatsApp
            </a>

            {/* Donate Button */}
            <a
                href="#donation"
                className="fixed bottom-7 right-7 bg-[linear-gradient(135deg,#ff6b00,#FF4500)] text-white px-5 py-3 rounded-full font-extrabold text-[13px] shadow-[0_6px_25px_rgba(255,107,0,0.5)] flex items-center gap-2 z-999"
            >
                🙏 दान करें
            </a>

            {/* Scroll Top */}
            {showTop && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-7 left-7 bg-primary text-tertiary w-10.5 h-10.5 rounded-full flex items-center justify-center border-2 border-tertiary text-lg z-999"
                >
                    ↑
                </button>
            )}
        </>
    );
};

export default FloatingButtons;
