"use client";

import React from "react";
import { MessageCircle, Play, Radio, Bell } from "lucide-react";

const LiveDarshan = () => {
    const openLive = () => {
        window.open("https://www.youtube.com/@ISKCONNoidaExpressway", "_blank");
    };

    return (
        <section
            className="relative px-6 overflow-hidden flex items-center justify-center bg-[#ea580c] py-7"
            style={{
                backgroundImage: "url('/img/cube-design.png')",
            }}
        >
            {/* Soft Gradient Overlay (to balance orange) */}
            <div className="absolute inset-0 bg-linear-to-br from-[#fb923c] via-[#ea580c] to-[#c2410c] opacity-50" />

            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-[#1f2937]/70" />

            {/* Glow Effects */}
            <div className="absolute top-0 right-0 w-125 h-125 bg-[#facc15]/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-125 h-125 bg-black/40 blur-[120px] rounded-full" />

            <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center">
                {/* Header */}
                <div className="mb-6">
                    <div className="inline-flex items-center gap-2 bg-[#facc15]/10 border border-[#facc15]/40 text-[#facc15] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                        <Radio size={14} className="animate-pulse" />
                        Live Now
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-3">
                        दिव्य{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#facc15] to-white italic">
                            लाइव दर्शन
                        </span>
                    </h2>

                    <p className="text-white/80 max-w-lg mx-auto text-sm md:text-base">
                        घर बैठे श्री श्री जगन्नाथ बलदेव सुभद्रा के दिव्य स्वरूप का आनंद लें।
                    </p>
                </div>

                {/* Video Card */}
                <div
                    onClick={openLive}
                    className="group relative w-full max-w-4xl aspect-video rounded-4xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] border border-white/20 backdrop-blur-xl bg-white/5 shadow-2xl"
                >
                    {/* Image */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545063017-91da4539d817?q=80&w=2070')] bg-cover bg-center opacity-50 group-hover:opacity-70 transition duration-700" />

                    {/* Overlays */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-linear-to-br from-[#ea580c]/30 to-transparent" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-[#facc15]/30 animate-ping" />
                            <div className="absolute inset-0 rounded-full bg-[#facc15]/20 scale-150" />

                            <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition">
                                <Play fill="#ea580c" className="w-8 h-8 md:w-10 md:h-10 ml-1 text-[#ea580c]" />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-center bg-linear-to-t from-black/80 to-transparent">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-[#ea580c] flex items-center justify-center text-white font-bold">
                                I
                            </div>
                            <div className="text-left">
                                <p className="text-white font-semibold text-sm">ISKCON Noida</p>
                                <p className="text-[#facc15] text-xs">● Live Aarti & Kirtan</p>
                            </div>
                        </div>

                        <span className="hidden md:block text-white/50 text-xs uppercase">Click to Watch</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6 flex-wrap justify-center">
                    <a
                        href="https://www.youtube.com/@ISKCONNoidaExpressway"
                        target="_blank"
                        className="flex items-center gap-2 bg-white text-[#1f2937] px-6 py-3 rounded-full font-bold transition hover:bg-[#facc15] shadow-lg"
                    >
                        <Bell size={18} />
                        Subscribe
                    </a>

                    <a
                        href="#"
                        className="flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full font-bold transition hover:bg-white hover:text-[#1f2937]"
                    >
                        <MessageCircle size={18} />
                        WhatsApp
                    </a>
                </div>

                {/* Footer */}
                <p className="mt-4 text-white/60 text-xs italic font-serif">"हरि नाम ही केवलम"</p>
            </div>
        </section>
    );
};

export default LiveDarshan;
