"use client";

import Image from "next/image";
import { Users, Plane, Car, Hotel, Send, Instagram, Facebook, Calendar, User } from "lucide-react";
import { IMAGE_PATH } from "@/configs/config";
import Holder from "./Holder";

const items = [
    {
        icon: <Users className="text-yellow-400" size={28} />,
        title: "Guides",
        desc: "2 awesome guides who know everything about Japan!",
    },
    {
        icon: <Plane className="text-yellow-400" size={28} />,
        title: "Flights",
        desc: "Routes: Moscow — Osaka Tokyo — Moscow",
    },
    {
        icon: <Car className="text-yellow-400" size={28} />,
        title: "Transfers",
        desc: "From the airport to the hotels",
    },
    {
        icon: <Hotel className="text-yellow-400" size={28} />,
        title: "Hotels",
        desc: "Comfortable accommodation 2 people per room (breakfasts included)",
    },
];

const NewsDetail = ({ data }) => {
    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    const formatDate = (dateString) => {
        if (!dateString) return "Recent Update";
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString("en-US", options);
    };

    return (
        <div className="font-novaReg">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] w-full flex items-end text-white overflow-hidden">
                {/* Background Image */}
                <Image 
                    src={data.banner_img ? `${IMAGE_PATH}${data.banner_img}` : "/img/main-section.webp"} 
                    alt={data.name || "News Hero"} 
                    fill 
                    priority 
                    className="object-cover" 
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>

                {/* Content */}
                <div className="relative max-w-6xl mx-auto px-6 pb-16 w-full z-10">
                    {/* Category/Tag */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="inline-block bg-primary text-white text-xs font-novaBold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                            {data.tag1 || "Campus News"}
                        </span>
                        {data.tag2 && (
                            <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-novaBold px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/20">
                                {data.tag2}
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-novaBold leading-tight max-w-5xl mb-8">
                        {data.name}
                    </h1>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-8 text-sm text-gray-300 font-novaSemi">
                        <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-primary" />
                            <span>{formatDate(data.date || data.addedon)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={18} className="text-primary" />
                            <span>{data.addedby || "ISKCON Noida"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            <span>{data.metatitle || "Announcement"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-16">
                        {/* Left Content - The Article */}
                        <div className="lg:col-span-2 space-y-10">
                            {/* Short Description */}
                            {data.shortdesc && (
                                <div 
                                    className="text-xl md:text-2xl text-secondary font-novaSemi leading-relaxed border-l-4 border-primary pl-8 py-2 italic"
                                    dangerouslySetInnerHTML={{ __html: data.shortdesc }}
                                />
                            )}

                            {/* Main Description */}
                            <div 
                                className="prose prose-lg max-w-none text-gray-700 leading-loose space-y-6 font-novaReg prose-headings:font-novaBold prose-headings:text-secondary prose-p:mb-6"
                                dangerouslySetInnerHTML={{ __html: data.description }}
                            />

                            {/* Dynamic Holders (Extra Data) */}
                            {data.extraComponentData && (
                                <div className="mt-16 space-y-12">
                                    {Array.from({ length: 40 }, (_, index) => {
                                        const key = `holder${index}`;
                                        const holderData = data.extraComponentData[key];
                                        return holderData ? (
                                            <div key={key} className="bg-[#faf9f6] p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
                                                <h3 className="text-2xl font-novaBold text-secondary mb-8 border-b border-gray-200 pb-4">
                                                    {holderData.param}
                                                </h3>
                                                <Holder data={holderData} />
                                            </div>
                                        ) : null;
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Right Sidebar - Newsletter & Socials */}
                        <div className="space-y-10">
                            {/* Newsletter / Contact form in sidebar style */}
                            <div className="bg-secondary p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                                
                                <h3 className="text-2xl font-novaBold mb-6 relative z-10">Stay Connected</h3>
                                <p className="text-gray-300 mb-8 text-sm leading-relaxed relative z-10">
                                    Get the latest updates from ISKCON Noida Expressway directly in your inbox.
                                </p>
                                
                                <form className="space-y-6 relative z-10">
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full bg-white/10 border-b border-white/20 focus:outline-none focus:border-primary py-3 transition-colors placeholder-white/50 text-white"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full bg-white/10 border-b border-white/20 focus:outline-none focus:border-primary py-3 transition-colors placeholder-white/50 text-white"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-primary text-white py-4 rounded-xl font-novaBold hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-3 active:scale-95"
                                    >
                                        Subscribe <Send size={18} />
                                    </button>
                                </form>
                            </div>

                            {/* Share & Follow */}
                            <div className="p-8 rounded-[2.5rem] border-2 border-gray-50 bg-[#faf9f6]">
                                <h3 className="text-xl font-novaBold text-secondary mb-6 italic">Follow the Journey</h3>
                                <div className="flex gap-4">
                                    <a className="w-12 h-12 flex items-center justify-center border-2 border-gray-200 rounded-2xl text-secondary hover:bg-primary hover:border-primary hover:text-white transition-all cursor-pointer shadow-sm active:scale-90">
                                        <Instagram size={22} />
                                    </a>
                                    <a className="w-12 h-12 flex items-center justify-center border-2 border-gray-200 rounded-2xl text-secondary hover:bg-primary hover:border-primary hover:text-white transition-all cursor-pointer shadow-sm active:scale-90">
                                        <Facebook size={22} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section - From data if available */}
            {data.galleryimg && data.galleryimg.length > 0 && (
                <section className="py-24 bg-[#faf9f6]">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="flex items-center gap-6 mb-12">
                            <h2 className="text-3xl md:text-4xl font-novaBold text-secondary">Captured Moments</h2>
                            <div className="flex-1 h-px bg-gray-200"></div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {data.galleryimg.map((img, index) => (
                                <div key={index} className="aspect-square relative rounded-3xl overflow-hidden group shadow-md">
                                    <Image
                                        src={`${IMAGE_PATH}${img}`}
                                        alt={`Gallery Image ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default NewsDetail;
