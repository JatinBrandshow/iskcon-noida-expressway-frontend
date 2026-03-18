"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, PlayCircle } from "lucide-react";

const MainSection = () => {
    return (
        <section className="relative min-h-[94vh] flex items-center bg-white overflow-hidden px-5 py-20">
            {/* Soft Background */}
            <div
                className="absolute inset-0 opacity-[0.05] bg-center bg-cover"
                style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
            />

            <div className="max-w-[1500px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* LEFT SIDE → CONTENT */}
                <div className="space-y-6 text-center lg:text-left">
                    {/* Divider */}
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                        <div className="h-px w-16 bg-linear-to-r from-transparent to-primary" />
                        <span className="text-primary text-xl">🪷</span>
                        <div className="h-px w-16 bg-linear-to-l from-transparent to-primary" />
                    </div>

                    {/* Title */}
                    <h1 className="font-serif text-[clamp(1.8rem,4vw,3.5rem)] text-secondary leading-tight">
                        ISKCON Noida Expressway
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg text-primary font-semibold">श्री श्री जगन्नाथ बलदेव सुभद्रा मंदिर</p>

                    {/* Description */}
                    <p className="text-gray-600 max-w-lg mx-auto lg:mx-0">
                        Experience spiritual bliss and connect with divine energy through devotion, kirtan, and the
                        timeless wisdom of Bhagavad Gita.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                            href="/festivals"
                            className="px-7 py-3 bg-primary text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-secondary transition"
                        >
                            Upcoming Festivals
                            <ArrowRight size={18} />
                        </Link>

                        <Link
                            href="/media"
                            className="px-7 py-3 border-2 border-primary text-primary rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition"
                        >
                            <PlayCircle size={20} />
                            Live Aarti
                        </Link>
                    </div>

                    {/* Timings */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                        <div>
                            <p className="text-primary font-bold">4:30 AM</p>
                            <p className="text-xs text-gray-500">Mangala Aarti</p>
                        </div>
                        <div>
                            <p className="text-primary font-bold">12:30 PM</p>
                            <p className="text-xs text-gray-500">Raj Bhoga</p>
                        </div>
                        <div>
                            <p className="text-primary font-bold">7:00 PM</p>
                            <p className="text-xs text-gray-500">Gaura Aarti</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE → IMAGE + SVG */}
                <div className="relative flex justify-center items-center">
                    {/* Mandala SVG (BEHIND IMAGE) */}
                    <div className="absolute top-1/2 left-1/2 animate-mandala">
                        <svg className="w-150 h-150 md:w-175 md:h-175 opacity-[0.3]" viewBox="0 0 400 400" fill="none">
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

                    {/* Image */}
                    <div className="relative z-10 h-[400px] lg:h-[550px] w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/img/main-section.webp"
                            alt="ISKCON Temple Noida Expressway"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                        {/* Floating Card */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl flex items-center justify-between shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                                    <Calendar size={22} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase">Next Event</p>
                                    <p className="text-sm font-black text-gray-800">Sri Krishna Janmashtami</p>
                                </div>
                            </div>
                            <button className="text-orange-600 font-bold text-sm hover:underline">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainSection;
