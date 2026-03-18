import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
 
const timings = [
    { title: "🌅 मंगल आरती", time: "04:30", displayTime: "4:30 AM", note: "Tulsi Puja sahit", type: "morning" },
    { title: "📖 भागवतम्", time: "05:00", displayTime: "5:00 AM", note: "Pravachan", type: "morning" },
    { title: "🎵 गुरु पूजा", time: "07:00", displayTime: "7:00 AM", note: "Bhajan Kirtan", type: "morning" },
    { title: "☀️ श्रृंगार आरती", time: "07:15", displayTime: "7:15 AM", note: "Shringar Darshan", type: "morning" },
    { title: "🌞 राजभोग आरती", time: "12:00", displayTime: "12:00 PM", note: "Rajbhog Aarti", type: "noon" },
    { title: "😴 विश्राम", time: "13:00", displayTime: "1:00 PM", note: "Madhyanha Vishram", type: "afternoon" },
    { title: "🌤️ उत्थापन", time: "16:30", displayTime: "4:30 PM", note: "Utthaapan Aarti", type: "afternoon" },
    { title: "🌆 संध्या आरती", time: "19:00", displayTime: "7:00 PM", note: "Gaura Aarti", type: "evening" },
    { title: "🌙 शयन आरती", time: "20:30", displayTime: "8:30 PM", note: "Shayana Aarti", type: "night" },
];
 
const DarshanTimings = () => {
    const [activeIdx, setActiveIdx] = useState(null);
 
    // Logic to highlight the next upcoming event
    useEffect(() => {
        const now = new Date();
        const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        const nextIndex = timings.findIndex(item => item.time > currentTime);
        setActiveIdx(nextIndex !== -1 ? nextIndex : 0);
    }, []);
 
    return (
        <section className="relative bg-[#0a0a0a] py-20 px-6 overflow-hidden font-serif">
            {/* Animated Spiritual Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-700 rounded-full blur-[120px] animate-pulse" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-orange-500 text-sm tracking-[0.3em] uppercase mb-2"
                    >
                        ॥ नित्य सेवा समय ॥
                    </motion.h2>
                    <h1 className="text-4xl md:text-6xl text-white font-bold italic">
                        Daily <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-yellow-200">Rhythms</span>
                    </h1>
                </div>

                <div className="relative">
                    {/* Central Vertical Line (The Path) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-linear-to-b from-orange-500/0 via-orange-500/50 to-orange-500/0" />

                    <div className="space-y-12">
                        {timings.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`relative flex items-center justify-between w-full ${i % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
                            >
                                {/* Time Marker Dot */}
                                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-20 border-2 border-orange-500 ${activeIdx === i ? 'bg-white shadow-[0_0_15px_rgba(251,146,60,0.8)]' : 'bg-[#0a0a0a]'}`} />

                                {/* Content Card */}
                                <div className={`w-[42%] ${i % 2 === 0 ? "text-left" : "text-right"}`}>
                                    <div className={`group p-6 rounded-2xl transition-all duration-500 border ${activeIdx === i ? 'bg-orange-600/10 border-orange-500' : 'bg-white/5 border-white/10'}`}>
                                        <span className="text-orange-400 font-mono text-lg">{item.displayTime}</span>
                                        <h3 className="text-white text-2xl font-bold mt-1 group-hover:text-orange-300 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mt-2 italic tracking-wide">
                                            {item.note}
                                        </p>
                                    </div>
                                </div>
 
                                {/* Spacer for the other side */}
                                <div className="w-[42%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-block px-8 py-4 border border-orange-500/30 rounded-full bg-orange-500/5 text-orange-200 text-sm backdrop-blur-md">
                        🏛️ Temple Doors Open: 4:30 AM — 9:00 PM • 365 Days
                    </div>
                </div>
            </div>
        </section>
    );
};
 
export default DarshanTimings;
 
