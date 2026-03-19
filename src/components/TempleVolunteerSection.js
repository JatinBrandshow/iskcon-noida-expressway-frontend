"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flower2, Utensils, Music, GraduationCap, Hammer, Cpu, Send, User, Phone, Mail, Briefcase } from "lucide-react";

const TempleVolunteerSection = () => {
    const sevaTypes = [
        { icon: <Flower2 className="w-5 h-5" />, title: "पुष्प सेवा", desc: "Floral Decoration" },
        { icon: <Utensils className="w-5 h-5" />, title: "भोग सेवा", desc: "Kitchen Support" },
        { icon: <Music className="w-5 h-5" />, title: "कीर्तन सेवा", desc: "Devotional Music" },
        { icon: <GraduationCap className="w-5 h-5" />, title: "शिक्षा सेवा", desc: "Vedic Education" },
        { icon: <Hammer className="w-5 h-5" />, title: "निर्माण सेवा", desc: "Temple Building" },
        { icon: <Cpu className="w-5 h-5" />, title: "डिजिटल सेवा", desc: "Tech & Social" },
    ];

    return (
        <section className="relative min-h-[90vh] max-h-screen overflow-hidden px-[5%] py-6 bg-white flex items-center">
            {/* Soft Gradient Background */}
            <div className="absolute inset-0 bg-temple-gradient opacity-5" />

            <div className="max-w-7xl mx-auto relative z-10 w-full max-h-[92vh] overflow-y-auto pr-2">
                {/* Header */}
                <div className="text-center mb-8">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase mb-4"
                    >
                        Seva Opportunities
                    </motion.span>

                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-2">
                        Become a <span className="text-primary italic text-4xl md:text-6xl">Sevaka</span>
                    </h2>

                    <div className="w-20 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent mx-auto mb-4" />

                    <p className="text-gray-600 max-w-lg mx-auto text-sm md:text-base">
                        Offer your time and talents in the service of the Lord.
                    </p>
                </div>

                {/* Seva Cards */}
                <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
                    {sevaTypes.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -4 }}
                            className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition group"
                        >
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-2 group-hover:bg-primary group-hover:text-[#facc15] transition">
                                {item.icon}
                            </div>

                            <h3 className="text-secondary text-xs font-bold mb-1">{item.title}</h3>
                            <p className="text-gray-500 text-[10px] uppercase">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Content */}
                <div className="grid lg:grid-cols-5 gap-6 items-center">
                    {/* Left Quote */}
                    <div className="lg:col-span-2 space-y-6 hidden lg:block">
                        <div className="p-6 rounded-2xl bg-primary border border-primary/20">
                            <h4 className="text-lg font-serif text-white mb-2 italic">
                                "The best way to find yourself is to lose yourself in the service of others."
                            </h4>
                            <p className="text-tertiary text-sm font-medium">— Srila Prabhupada</p>
                        </div>

                        <div className="flex items-center gap-3 text-gray-600">
                            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-primary">
                                <Send size={16} />
                            </div>
                            <p className="text-xs">Our coordinator will contact you via WhatsApp.</p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-3">
                        <motion.div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-lg">
                            <div className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <Input icon={<User size={14} />} placeholder="Full Name" />
                                    <Input icon={<Phone size={14} />} placeholder="WhatsApp Number" />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <Input icon={<Mail size={14} />} placeholder="Email Address" />
                                    <Input icon={<Briefcase size={14} />} placeholder="Profession" />
                                </div>

                                <textarea
                                    rows="3"
                                    placeholder="How would you like to help?"
                                    className="w-full p-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-primary/50 placeholder:text-gray-400 resize-none"
                                />

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-3 bg-primary hover:bg-orange-600 text-white font-bold rounded-xl text-sm shadow-md transition"
                                >
                                    🙏 Register for Seva
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Input = ({ icon, placeholder }) => (
    <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>
        <input
            type="text"
            placeholder={placeholder}
            className="w-full pl-9 pr-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-primary/50 placeholder:text-gray-400"
        />
    </div>
);

export default TempleVolunteerSection;
