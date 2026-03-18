"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { API_NODE_URL, IMAGE_PATH } from "@/configs/config";
import { ArrowRight, CalendarDays, Search, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

const Event = () => {
    const [eventsData, setEventsData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchEvents = async () => {
        try {
            setLoading(true);
            // Fetching from the list-detail-page/all endpoint for events
            const response = await fetch(
                `${API_NODE_URL}list-detail-page/all?page=${page}&limit=9&search=${searchTerm}&type=Event`, {
                credentials: "include",
            }
            );
            const data = await response.json();
            if (data.status && data.data) {
                setEventsData(data.data);
                setTotalPages(data.pagination.totalPages);
            } else {
                setEventsData([]);
                setTotalPages(1);
            }
        } catch (error) {
            console.error("Failed to fetch events:", error);
            setEventsData([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const delaySearch = setTimeout(() => {
            fetchEvents();
        }, 500); // 500ms debounce for search

        return () => clearTimeout(delaySearch);
    }, [page, searchTerm]);

    const formatDate = (dateString) => {
        if (!dateString) return "Upcoming";
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString("hi-IN", options);
    };

    const stripHtml = (html) => {
        if (!html) return "";
        // SSR safe regex-based HTML stripping
        return html
            .replace(/<[^>]*>/g, "")
            .replace(/&nbsp;/g, " ")
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .trim();
    };

    return (
        <div className="bg-[#faf9f6] min-h-screen">
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
                            <span className="text-3xl md:text-5xl opacity-90">Sacred Gatherings</span>
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
                        <p className="text-gray-500 font-novaReg">Explore our upcoming and past spiritual gatherings</p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-96">
                        <input 
                            type="text" 
                            placeholder="आयोजन खोजें... Search events..."
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm font-novaReg"
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
                                <div key={event._id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden bg-gray-100">
                                        {event.banner_img && (
                                            <Image 
                                                src={`${IMAGE_PATH}${event.banner_img}`}
                                                alt={event.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        )}
                                        <div className="absolute top-4 left-4">
                                            <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm border border-primary/10">
                                                {event.tag1 || "महोत्सव"}
                                            </div>
                                        </div>
                                        <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            <button className="bg-primary text-white p-3 rounded-full shadow-lg">
                                                <ArrowRight size={20} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-2 text-primary text-sm font-novaBold mb-3">
                                            <CalendarDays size={16} />
                                            <span>{formatDate(event.date)}</span>
                                        </div>
                                        
                                        <h3 className="text-xl font-novaBold text-secondary mb-3 leading-tight group-hover:text-primary transition-colors">
                                            {event.name}
                                        </h3>

                                        <p className="text-gray-500 text-sm font-novaReg line-clamp-3 mb-6 flex-grow">
                                            {stripHtml(event.description || event.shortdesc)}
                                        </p>

                                        <Link 
                                            href={event.path || "#"}
                                            className="inline-flex items-center gap-2 text-secondary font-novaSemi text-sm group/link hover:text-primary transition-colors"
                                        >
                                            विवरण देखें • View Details
                                            <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                                        </Link>
                                    </div>
                                    
                                    {/* Bottom Accent */}
                                    <div className="h-1.5 w-full bg-gradient-to-r from-primary to-tertiary"></div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center mt-16 gap-4">
                                <button 
                                    onClick={() => setPage(p => Math.max(1, p - 1))}
                                    disabled={page === 1}
                                    className="p-3 rounded-2xl border border-gray-200 bg-white text-secondary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors shadow-sm"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                
                                <div className="flex bg-white border border-gray-200 rounded-2xl p-1 shadow-sm">
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button 
                                            key={i + 1}
                                            onClick={() => setPage(i + 1)}
                                            className={`w-12 h-12 rounded-xl text-sm font-novaBold transition-all ${
                                                page === i + 1 
                                                ? "bg-primary text-white shadow-md shadow-primary/20" 
                                                : "text-gray-500 hover:bg-gray-50"
                                            }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>

                                <button 
                                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                                    disabled={page === totalPages}
                                    className="p-3 rounded-2xl border border-gray-200 bg-white text-secondary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors shadow-sm"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-gray-200 shadow-sm">
                        <div className="text-5xl mb-4">🕉️</div>
                        <h3 className="text-2xl font-novaBold text-secondary mb-2">कोई आयोजन नहीं मिला</h3>
                        <p className="text-gray-500 font-novaReg">विभिन्न खोज शब्दों के साथ पुनः प्रयास करें।</p>
                        <button 
                            onClick={() => {setSearchTerm(""); setPage(1);}}
                            className="mt-6 px-6 py-2 bg-primary text-white rounded-full font-novaSemi hover:opacity-90 transition-opacity"
                        >
                            सभी देखें • Show All
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Event;
