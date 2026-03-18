"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { API_NODE_URL, IMAGE_PATH } from "@/configs/config";
import { ArrowRight, CalendarDays, Search, ChevronLeft, ChevronRight, Loader2, Clock, MapPin } from "lucide-react";

// --- ISKCON Default Events List ---
const DEFAULT_EVENTS_LIST = [
    {
        _id: "def-list-1",
        name: "श्री कृष्ण जन्माष्टमी महोत्सव 2026",
        tag1: "महा-महोत्सव",
        date: "2026-08-26",
        description: "इस्कॉन नोएडा एक्सप्रेसवे में वर्ष का सबसे बड़ा उत्सव। भव्य अभिषेक, सांस्कृतिक कार्यक्रम और मध्यरात्रि महा-आरती का आनंद लें।",
        banner_img: "https://images.unsplash.com/photo-1578403040944-39e7667ca02f?auto=format&fit=crop&q=80&w=800",
        path: "/event/janmashtami-2026",
        isDefault: true
    },
    {
        _id: "def-list-2",
        name: "श्री राधाष्टमी व्रत एवं उत्सव",
        tag1: "विशेष पर्व",
        date: "2026-09-11",
        description: "श्रीमती राधारानी के चरणों के दर्शन का वर्ष में केवल एक बार मिलने वाला दुर्लभ अवसर। महा-अभिषेक और कीर्तन का आयोजन।",
        banner_img: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=800",
        path: "/event/radhashtami",
        isDefault: true
    },
    {
        _id: "def-list-3",
        name: "कार्तिक दीपदान एवं दामोदर मास",
        tag1: "भक्ति मास",
        date: "2026-10-18",
        description: "पूरे कार्तिक मास के दौरान शाम को भगवान दामोदर को दीप दान करें। प्रतिदिन दामोदराष्टकम का गायन और विशेष प्रवचन।",
        banner_img: "https://images.unsplash.com/photo-1511130328761-090f7797745b?auto=format&fit=crop&q=80&w=800",
        path: "/event/kartik-month",
        isDefault: true
    }
];

const Event = () => {
    const [eventsData, setEventsData] = useState(DEFAULT_EVENTS_LIST);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchEvents = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `${API_NODE_URL}list-detail-page/all?page=${page}&limit=9&search=${searchTerm}&type=Event`, {
                credentials: "include",
            }
            );
            const data = await response.json();
            if (data.status && data.data && data.data.length > 0) {
                setEventsData(data.data);
                setTotalPages(data.pagination.totalPages);
            } else {
                setEventsData(searchTerm ? [] : DEFAULT_EVENTS_LIST);
                setTotalPages(1);
            }
        } catch (error) {
            console.error("Failed to fetch events:", error);
            setEventsData(searchTerm ? [] : DEFAULT_EVENTS_LIST);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const delaySearch = setTimeout(() => {
            fetchEvents();
        }, 500);

        return () => clearTimeout(delaySearch);
    }, [page, searchTerm]);

    const formatDate = (dateString) => {
        if (!dateString) return "आगामी तिथि • Upcoming";
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString("hi-IN", options);
    };

    const stripHtml = (html) => {
        if (!html) return "";
        return html
            .replace(/<[^>]*>/g, "")
            .replace(/&nbsp;/g, " ")
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .trim();
    };

    return (
        <div className="bg-[#faf9f6] min-h-screen font-novaReg">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/img/main-section.webp"
                        alt="Devotees at ISKCON"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl">
                        <div className="inline-block px-4 py-1.5 mb-6 bg-secondary/30 backdrop-blur-md border border-tertiary/30 rounded-full text-tertiary text-sm font-bold tracking-widest uppercase">
                            दिव्य उत्सव • Divine Celebrations
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-novaBold text-white uppercase leading-tight mb-4">
                            धार्मिक <span className="text-tertiary">आयोजन</span> <br />
                            <span className="text-3xl md:text-5xl opacity-90 font-novaReg">Sacred Gatherings</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl font-novaReg max-w-lg mb-8">
                            इस्कॉन नोएडा एक्सप्रेसवे में होने वाले विशेष उत्सवों और कार्यक्रमों की सूची। भक्ति और सेवा के उत्सव में हमारे साथ जुड़ें।
                        </p>
                    </div>
                </div>
            </section>

            {/* Event List Section */}
            <section className="py-16 md:py-24 container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-novaBold text-secondary mb-2">उत्सव निर्देशिका</h2>
                        <p className="text-gray-500">Explore our upcoming and past spiritual gatherings</p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-96">
                        <input 
                            type="text" 
                            placeholder="आयोजन खोजें... Search events..."
                            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setPage(1);
                            }}
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-32 space-y-4">
                        <Loader2 className="w-12 h-12 text-primary animate-spin" />
                        <p className="text-gray-500 font-novaSemi animate-pulse">भक्तिमय कार्यक्रम लोड हो रहे हैं...</p>
                    </div>
                ) : eventsData.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {eventsData.map((event) => (
                                <div key={event._id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden bg-gray-100">
                                        <Image 
                                            src={event.isDefault ? event.banner_img : `${IMAGE_PATH}${event.banner_img}`}
                                            alt={event.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            unoptimized={event.isDefault}
                                        />
                                        <div className="absolute top-5 left-5">
                                            <div className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-primary shadow-sm border border-primary/10 uppercase tracking-widest">
                                                {event.tag1 || "महोत्सव"}
                                            </div>
                                        </div>
                                        
                                        {/* Floating Action Circle */}
                                        <div className="absolute bottom-5 right-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            <Link href={event.path || "#"} className="bg-primary text-white p-4 rounded-2xl shadow-xl flex items-center justify-center">
                                                <ArrowRight size={24} />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-2 text-primary text-sm font-novaBold mb-4">
                                            <CalendarDays size={18} />
                                            <span>{formatDate(event.date)}</span>
                                        </div>
                                        
                                        <h3 className="text-2xl font-novaBold text-secondary mb-4 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                            {event.name}
                                        </h3>

                                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-8 flex-grow">
                                            {stripHtml(event.description || event.shortdesc)}
                                        </p>

                                        {/* Row for Quick Info */}
                                        <div className="flex items-center gap-6 mb-8 py-4 border-y border-gray-50">
                                            <div className="flex items-center gap-2 text-xs text-gray-400 font-novaSemi">
                                                <Clock size={14} className="text-primary" />
                                                <span>Check Details</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-gray-400 font-novaSemi">
                                                <MapPin size={14} className="text-primary" />
                                                <span>Main Temple</span>
                                            </div>
                                        </div>

                                        <Link 
                                            href={event.path || "#"}
                                            className="w-full py-4 bg-secondary text-white rounded-2xl font-novaBold text-center text-sm group/link hover:bg-primary transition-all shadow-lg shadow-secondary/10 hover:shadow-primary/20 active:scale-[0.98]"
                                        >
                                            विवरण देखें • View Details
                                        </Link>
                                    </div>
                                    
                                    {/* Visual Accent */}
                                    <div className="h-2 w-full bg-gradient-to-r from-primary via-tertiary to-primary group-hover:animate-gradient-x"></div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center mt-20 gap-4">
                                <button 
                                    onClick={() => setPage(p => Math.max(1, p - 1))}
                                    disabled={page === 1}
                                    className="p-4 rounded-2xl border border-gray-200 bg-white text-secondary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors shadow-sm"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                
                                <div className="flex bg-white border border-gray-200 rounded-[1.5rem] p-1.5 shadow-sm overflow-x-auto max-w-[280px] md:max-w-none">
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button 
                                            key={i + 1}
                                            onClick={() => setPage(i + 1)}
                                            className={`min-w-[52px] h-12 rounded-xl text-sm font-novaBold transition-all ${
                                                page === i + 1 
                                                ? "bg-primary text-white shadow-lg shadow-primary/30" 
                                                : "text-gray-400 hover:bg-gray-50 hover:text-secondary"
                                            }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>

                                <button 
                                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                                    disabled={page === totalPages}
                                    className="p-4 rounded-2xl border border-gray-200 bg-white text-secondary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors shadow-sm"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-gray-100 shadow-sm">
                        <div className="text-6xl mb-6">🕉️</div>
                        <h3 className="text-3xl font-novaBold text-secondary mb-3">कोई आयोजन नहीं मिला</h3>
                        <p className="text-gray-500 max-w-sm mx-auto mb-8">"{searchTerm}" से संबंधित कोई आध्यात्मिक आयोजन नहीं मिला। कृपया पुनः प्रयास करें।</p>
                        <button 
                            onClick={() => {setSearchTerm(""); setPage(1);}}
                            className="px-10 py-4 bg-primary text-white rounded-2xl font-novaBold hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95"
                        >
                            सभी देखें • Show All Events
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Event;