"use client";

import React from "react";
import { Camera, Sparkles, Sprout, Music, Utensils, Construction } from "lucide-react";

const galleryItems = [
    {
        title: "श्री कृष्ण — दिव्य दर्शन",
        image: "/img/main-section.webp",
        icon: <Sparkles className="w-8 h-8" />,
        span: "md:col-span-2 md:row-span-2",
        color: "from-[#ea580c]/25",
    },
    {
        title: "मंदिर निर्माण",
        image: "/img/main-section-1.webp",
        icon: <Construction className="w-6 h-6" />,
        span: "md:col-span-2 md:row-span-1",
        color: "from-[#ea580c]/20",
    },
    {
        title: "संध्या आरती",
        image: "/img/main-section-2.webp",
        icon: <Sparkles className="w-6 h-6" />,
        span: "md:col-span-1 md:row-span-1",
        color: "from-[#facc15]/25",
    },
    {
        title: "श्री विग्रह श्रृंगार",
        image: "/img/main-section-3.webp",
        icon: <Sprout className="w-6 h-6" />,
        span: "md:col-span-1 md:row-span-1",
        color: "from-[#ea580c]/15",
    },
    {
        title: "कीर्तन महोत्सव",
        image: "/img/main-section-4.webp",
        icon: <Music className="w-6 h-6" />,
        span: "md:col-span-1 md:row-span-1",
        color: "from-[#facc15]/15",
    },
    {
        title: "महाप्रसाद",
        image: "/img/main-section-5.webp",
        icon: <Utensils className="w-6 h-6" />,
        span: "md:col-span-1 md:row-span-1",
        color: "from-[#facc15]/20",
    },
    {
        title: "मंदिर निर्माण",
        image: "/img/main-section-6.webp",
        icon: <Construction className="w-6 h-6" />,
        span: "md:col-span-2 md:row-span-1",
        color: "from-[#ea580c]/20",
    },
];

const GalleryItem = ({ item }) => {
    return (
        <div
            className={`group relative h-full w-full overflow-hidden rounded-4xl border border-white/10 bg-[#111827] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[#ea580c]/20 ${item.span}`}
        >
            {/* Image / Placeholder */}
            {item.image ? (
                <>
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${item.color} to-transparent opacity-60`} />
                </>
            ) : (
                <div
                    className={`flex h-full w-full flex-col items-center justify-center space-y-4 bg-gradient-to-br ${item.color} to-[#111827]`}
                >
                    <div className="text-[#ea580c]">{item.icon}</div>
                </div>
            )}

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
                <p className="text-xs font-bold uppercase tracking-widest text-[#facc15] mb-1 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    ISKCON NOIDA
                </p>

                <h3 className="text-lg md:text-xl font-serif font-bold text-white translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    {item.title}
                </h3>

                <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-[#ea580c] to-[#facc15] transition-all duration-500 group-hover:w-full" />
            </div>

            <div className="absolute inset-0 border-2 border-[#ea580c]/0 transition-colors duration-500 group-hover:border-[#ea580c]/30 rounded-4xl" />
        </div>
    );
};

const TempleGallery = () => {
    return (
        <section className="relative h-[120vh] py-10 px-6 overflow-hidden flex flex-col bg-[#0f172a]">

            {/* Subtle Primary Glow */}
            <div className="absolute top-0 right-0 h-96 w-96 bg-[#ea580c]/10 blur-[140px] rounded-full" />

            {/* Subtle Tertiary Glow */}
            <div className="absolute bottom-0 left-0 h-96 w-96 bg-[#facc15]/10 blur-[140px] rounded-full" />

            <div className="relative mx-auto max-w-7xl flex flex-col h-full">
                
                {/* Header */}
                <div className="mb-8 flex flex-col items-center text-center shrink-0">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-px w-8 bg-[#facc15]" />
                        <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#facc15]">
                            Visual Journey
                        </span>
                        <div className="h-px w-8 bg-[#facc15]" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        दिव्य{" "}
                        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#facc15]">
                            दर्शन
                        </span>{" "}
                        गैलरी
                    </h2>

                    <p className="max-w-xl text-white/70 text-sm md:text-base">
                        मंदिर की भव्यता और आध्यात्मिक गतिविधियों के कुछ मनमोहक दृश्य।
                    </p>
                </div>

                {/* Grid */}
                <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3">
                    {galleryItems.map((item, index) => (
                        <GalleryItem key={index} item={item} />
                    ))}
                </div>

                {/* Button */}
                <div className="mt-6 text-center shrink-0">
                    <button className="group relative px-8 py-3 text-white font-bold transition-all">
                        <span className="relative z-10 flex items-center gap-2 justify-center">
                            <Camera size={20} className="text-[#facc15]" />
                            See All Moments
                        </span>
                        <div className="absolute inset-0 border border-white/20 rounded-full transition-all group-hover:border-[#facc15] group-hover:scale-105" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TempleGallery;