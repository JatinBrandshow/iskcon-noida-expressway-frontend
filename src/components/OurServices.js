"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarCheck, BookOpen, Utensils, ShoppingBag, Heart, CloudSun, Map, Baby, ArrowUpRight } from "lucide-react";

const services = [
    {
        icon: <CalendarCheck />,
        title: "पूजा बुकिंग",
        desc: "विशेष पूजा, अभिषेक और आरती के लिए ऑनलाइन बुकिंग।",
        color: "from-amber-500/20",
    },
    {
        icon: <BookOpen />,
        title: "भागवत कथा",
        desc: "श्रीमद् भागवतम् और गीता की प्रवचन माला।",
        color: "from-orange-500/20",
    },
    { icon: <Utensils />, title: "महाप्रसाद", desc: "प्रतिदिन निःशुल्क महाप्रसाद वितरण।", color: "from-yellow-600/20" },
    {
        icon: <ShoppingBag />,
        title: "ऑनलाइन स्टोर",
        desc: "पुस्तकें, माला, तुलसी, प्रसाद ऑनलाइन मंगवाएँ।",
        color: "from-amber-600/20",
    },
    {
        icon: <Heart />,
        title: "वैदिक विवाह",
        desc: "मंदिर परिसर में वैदिक रीति-रिवाज से विवाह।",
        color: "from-rose-500/20",
    },
    {
        icon: <CloudSun />,
        title: "योग एवं ध्यान",
        desc: "प्रतिदिन प्रातः भक्ति योग और ध्यान कक्षाएँ।",
        color: "from-orange-400/20",
    },
    {
        icon: <Map />,
        title: "तीर्थ यात्रा",
        desc: "वृंदावन, मथुरा, द्वारका तीर्थ यात्रा व्यवस्था।",
        color: "from-amber-400/20",
    },
    {
        icon: <Baby />,
        title: "बाल संस्कार",
        desc: "बच्चों के लिए वैदिक संस्कार और मूल्य शिक्षा।",
        color: "from-yellow-500/20",
    },
];

const OurServices = () => {
    return (
        <section className="relative min-h-screen flex items-center px-6 bg-[#1A0505] overflow-hidden">
            {/* Background Divine Glows */}
            <div className="absolute top-[-10%] right-[-5%] w-150 h-150 bg-orange-900/20 blur-[140px] rounded-full" />
            <div className="absolute bottom-[-10%] left-[-5%] w-125 h-125 bg-amber-900/10 blur-[120px] rounded-full" />

            <div className="max-w-325 mx-auto w-full relative z-10 py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block px-5 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-200/80 text-[0.7rem] font-bold tracking-[0.3em] uppercase mb-4 backdrop-blur-sm"
                    >
                        Sacred Offerings
                    </motion.span>

                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                        Explore Our{" "}
                        <span className="bg-linear-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent italic">
                            Divine Services
                        </span>
                    </h2>

                    <div className="w-24 h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent mx-auto" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group relative bg-white/2 hover:bg-white/5 p-8 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden cursor-pointer transition-all duration-500"
                        >
                            {/* Animated Inner Glow on Hover */}
                            <div
                                className={`absolute inset-0 bg-linear-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                            />

                            <div className="relative z-10">
                                {/* Icon Container */}
                                <div className="w-14 h-14 bg-white/[0.07] rounded-2xl flex items-center justify-center text-amber-400 mb-6 group-hover:bg-amber-400 group-hover:text-[#1A0505] transition-all duration-500 shadow-xl border border-white/5">
                                    {React.cloneElement(service.icon, {
                                        size: 26,
                                        strokeWidth: 1.5,
                                    })}
                                </div>

                                {/* Title */}
                                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                                    {service.title}
                                </h4>

                                {/* Description */}
                                <p className="text-stone-400 text-sm leading-relaxed mb-6 group-hover:text-stone-300 transition-colors">
                                    {service.desc}
                                </p>

                                {/* Link */}
                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-amber-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                    View Details <ArrowUpRight size={14} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mt-16">
                    <p className="text-stone-500 italic text-sm">
                        Seeking a personalized ritual or guidance?
                        <span className="text-amber-400/80 font-bold ml-2 cursor-pointer border-b border-amber-400/20 hover:text-amber-400 transition-colors">
                            Speak with our Seva Desk
                        </span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default OurServices;
