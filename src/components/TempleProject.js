"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, Landmark } from "lucide-react";
import { X } from "lucide-react";

const TempleProject = () => {
    const [showDonation, setShowDonation] = useState(false);
    return (
        <section className="relative py-24 px-[6%] bg-[#0f172a] text-white overflow-hidden font-serif">
            {/* 🔶 Background Elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-orange-500/40 via-transparent to-transparent" />

            {/* Floating Glow */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-24 -left-24 w-96 h-96 bg-orange-600/20 blur-[120px] rounded-full"
            />

            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-600/10 blur-[120px] rounded-full"
            />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* 🔥 TOP CENTER BADGE */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block bg-linear-to-r from-orange-600/20 to-transparent border border-orange-500/30 text-orange-200 text-sm font-bold tracking-[0.2em] uppercase px-6 py-2 rounded-full backdrop-blur-md shadow-md">
                        🚧 निर्माण जारी है
                    </span>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* LEFT CONTENT */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.2 } },
                        }}
                        className="text-left"
                    >
                        {/* Heading */}
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="text-4xl md:text-6xl font-bold leading-[1.2] mb-8"
                        >
                            नया भव्य <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 via-orange-400 to-orange-600">
                                मंदिर निर्माण परियोजना
                            </span>
                        </motion.h2>

                        {/* Paragraph */}
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="text-lg text-slate-300 leading-relaxed mb-10 max-w-lg"
                        >
                            ISKCON Noida Expressway पर एक भव्य मंदिर का निर्माण प्रारंभ हो गया है। श्री श्री जगन्नाथ
                            बलदेव सुभद्रा के इस दिव्य धाम में हजारों भक्त एक साथ दर्शन कर सकेंगे।
                            <span className="text-yellow-400 italic"> आपके दान से यह स्वप्न साकार होगा।</span>
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="flex flex-wrap gap-4"
                        >
                            <button
                                onClick={() => setShowDonation(true)}
                                className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all hover:-translate-y-1 flex items-center gap-2"
                            >
                                <Heart size={18} fill="currentColor" />
                                मंदिर निर्माण में दान करें
                            </button>

                            <button className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 rounded-full font-bold transition-all flex items-center gap-2">
                                <MessageCircle size={18} />
                                WhatsApp पर जानकारी लें
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT CARD */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 border border-orange-500/20 rounded-[40px] rotate-3 pointer-events-none" />

                        <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-4xl p-8 md:p-12 shadow-2xl">
                            {/* Progress */}
                            <div className="flex justify-between items-end mb-6">
                                <span className="text-4xl font-bold text-white">
                                    35%
                                    <span className="text-sm text-slate-400 uppercase tracking-widest block">
                                        निर्माण प्रगति
                                    </span>
                                </span>
                                <Landmark className="text-orange-500 mb-2" size={32} />
                            </div>

                            {/* Animated Progress Bar */}
                            <div className="relative w-full h-3 bg-slate-800 rounded-full mb-12 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "35%" }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    className="h-full bg-linear-to-r from-orange-600 to-yellow-400 rounded-full shadow-[0_0_15px_rgba(234,88,12,0.6)]"
                                />
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-8 mb-8 border-t border-white/5 pt-8">
                                <div>
                                    <div className="text-yellow-500/80 text-xs uppercase font-bold tracking-wider mb-1">
                                        🏁 शुभारंभ
                                    </div>
                                    <div className="text-xl font-bold text-white">1200+</div>
                                    <p className="text-xs text-slate-400">दानदाता परिवार</p>
                                </div>

                                <div>
                                    <div className="text-yellow-500/80 text-xs uppercase font-bold tracking-wider mb-1">
                                        🛕 लोकार्पण
                                    </div>
                                    <div className="text-xl font-bold text-white">2026</div>
                                    <p className="text-xs text-slate-400">अपेक्षित वर्ष</p>
                                </div>
                            </div>

                            {/* Donation */}
                            <div className="bg-orange-600/10 rounded-2xl p-4 flex items-center gap-4 border border-orange-500/20">
                                <div className="h-10 w-10 bg-orange-600 rounded-full flex items-center justify-center font-bold text-white">
                                    ₹
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">अब तक एकत्रित दान</p>
                                    <p className="text-xl font-bold text-white">₹2.5 Cr+</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <AnimatePresence>
                    {showDonation && (
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="mt-16 flex justify-center"
                        >
                            <div className="relative max-w-2xl w-full">
                                <button
                                    onClick={() => setShowDonation(false)}
                                    className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500/80 text-white transition backdrop-blur-md shadow-md hover:scale-110"
                                >
                                    <X size={18} />
                                </button>

                                <div className="text-center bg-[linear-gradient(135deg,rgba(255,107,0,0.2),rgba(255,215,0,0.1))] border border-white/10 rounded-[20px] p-9 backdrop-blur-xl">
                                    <h3 className="text-yellow-400 text-[1.2rem] font-semibold mb-3">
                                        🙏 मंदिर निर्माण में सहयोग करें
                                    </h3>

                                    <p className="text-slate-300 text-[0.9rem] max-w-138 mx-auto mb-6 leading-[1.7]">
                                        आपका एक-एक रुपया इस भव्य मंदिर के निर्माण में लगेगा। ईंट सेवा से लेकर पूर्ण कक्ष
                                        तक हर स्तर पर सहयोग का अवसर है।
                                    </p>

                                    {/* Donation Options */}
                                    <div className="flex gap-3 justify-center flex-wrap mb-5">
                                        {[
                                            { amount: "₹1,001", label: "ईंट सेवा" },
                                            { amount: "₹11,000", label: "स्तंभ सेवा" },
                                            { amount: "₹51,000", label: "कक्ष सेवा" },
                                            { amount: "₹5,00,000+", label: "प्रमुख दानदाता" },
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="bg-white/10 border border-yellow-400/30 rounded-xl px-5 py-3 text-center min-w-30"
                                            >
                                                <div className="text-yellow-400 font-bold text-[1.1rem]">
                                                    {item.amount}
                                                </div>
                                                <div className="text-slate-400 text-[0.72rem] mt-1">{item.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href="#donation"
                                        className="inline-block bg-linear-to-r from-orange-600 to-orange-500 text-white px-10 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition"
                                    >
                                        🙏 मंदिर निर्माण हेतु दान करें
                                    </a>

                                    <p className="text-slate-500 text-[0.75rem] mt-3">
                                        80G Tax Exemption | सभी दानदाताओं का नाम मंदिर में अंकित किया जाएगा
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default TempleProject;
