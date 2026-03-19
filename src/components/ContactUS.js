"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    MapPin,
    TrainFront,
    Car,
    Bus,
    Navigation,
    ParkingCircle,
    Accessibility,
    UtensilsCrossed,
    ShoppingBag,
    ExternalLink,
} from "lucide-react";
const travelModes = [
    {
        icon: <TrainFront className="w-5 h-5" />,
        title: "Metro",
        desc: "Aqua Line — Sector 101 Station, followed by a short Auto/Cab ride.",
    },
    {
        icon: <Car className="w-5 h-5" />,
        title: "Car / Cab",
        desc: "Via Noida-Greater Noida Expressway — approx. 25 min from DND Flyway.",
    },
    {
        icon: <Bus className="w-5 h-5" />,
        title: "Bus",
        desc: "Direct connectivity from Noida Bus Stand via UP Roadways.",
    },
];

const amenities = [
    { icon: <ParkingCircle />, title: "Free Parking", desc: "500+ Vehicles" },
    { icon: <Accessibility />, title: "Wheelchair", desc: "Full Access" },
    { icon: <UtensilsCrossed />, title: "Prasadam", desc: "Daily Hall" },
    { icon: <ShoppingBag />, title: "Gift Shop", desc: "Vedic Books" },
];

const ContactUS = () => {
    return (
        <>
            <section id="location" className="relative py-24 px-[5%] bg-[#FFFBF2] overflow-hidden">
                {/* Decorative Background Text or Pattern */}
                <div className="absolute inset-0 flex justify-end pointer-events-none select-none">
                    <motion.h1
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="text-[10rem] md:text-[14rem] font-serif font-bold text-orange-500/15"
                    >
                        श्री कृष्ण
                    </motion.h1>
                </div>

                <div className="max-w-325 mx-auto relative z-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-orange-600 font-bold tracking-[0.2em] text-xs uppercase block mb-4"
                            >
                                📍 Visit the Sanctuary
                            </motion.span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
                                Finding Your Way to <br />
                                <span className="text-orange-600 italic">ISKCON Noida Expressway</span>
                            </h2>
                        </div>
                        <div className="hidden md:block w-32 h-px bg-stone-300 mb-4" />
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        {/* Left Column: Information (5/12) */}
                        <div className="lg:col-span-5 space-y-6">
                            {/* Address Card */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-stone-100"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-stone-400 text-[0.7rem] uppercase tracking-widest font-bold mb-2">
                                            Location Address
                                        </h4>
                                        <p className="text-stone-800 text-lg leading-relaxed font-medium">
                                            ISKCON Noida Expressway, <br />
                                            Sector — Noida, <br />
                                            Uttar Pradesh, India
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Travel Modes */}
                            <div className="space-y-4">
                                <h4 className="text-stone-900 font-bold px-2">How to Reach</h4>
                                {travelModes.map((mode, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex items-center gap-5 p-4 bg-white/50 border border-stone-100 rounded-2xl hover:bg-white hover:shadow-md transition-all cursor-default"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#ea580c] hover:text-[#facc15]">
                                            {mode.icon}
                                        </div>
                                        <div>
                                            <span className="text-sm font-bold text-stone-900">{mode.title}</span>
                                            <p className="text-xs text-stone-500">{mode.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Primary Action */}
                            <motion.a
                                href="https://maps.google.com"
                                target="_blank"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-center gap-3 bg-stone-900 text-white py-5 px-8 rounded-2xl font-bold shadow-xl shadow-stone-900/20 hover:bg-orange-600 transition-colors"
                            >
                                <Navigation size={20} />
                                Open in Google Maps
                                <ExternalLink size={16} className="opacity-50" />
                            </motion.a>
                        </div>

                        {/* Right Column: Visual & Amenities (7/12) */}
                        <div className="lg:col-span-7">
                            {/* Map Preview Placeholder */}
                            <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white">
                                <div className="aspect-16/10 bg-stone-200 relative overflow-hidden">
                                    {/* Replace with an actual static Map Image or Interactive Map */}
                                    <img
                                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80"
                                        alt="Map Area"
                                        className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-stone-900/60 to-transparent" />

                                    {/* Map Floating Pin Overlay */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                        <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(234,88,12,0.5)] animate-bounce">
                                            <MapPin size={32} />
                                        </div>
                                        <div className="mt-4 bg-white px-4 py-2 rounded-full shadow-lg text-xs font-bold whitespace-nowrap">
                                            ISKCON Noida Expressway
                                        </div>
                                    </div>
                                </div>

                                <button className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-white text-stone-900 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-all">
                                    Click for Interactive Map
                                </button>
                            </div>

                            {/* Amenities Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                                {amenities.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white p-5 rounded-3xl text-center border border-stone-100 flex flex-col items-center gap-2"
                                    >
                                        <div className="text-orange-500">
                                            {React.cloneElement(item.icon, { size: 24 })}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-stone-900">{item.title}</p>
                                            <p className="text-[0.65rem] text-stone-400 uppercase tracking-tighter">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUS;
