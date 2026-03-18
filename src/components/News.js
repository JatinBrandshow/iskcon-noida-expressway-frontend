"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { API_NODE_URL, IMAGE_PATH } from "@/configs/config";
import { ArrowRight, Search, ChevronLeft, ChevronRight, Loader2, Clock } from "lucide-react";

// --- ISKCON Default Data ---
const DEFAULT_NEWS_LIST = [
  {
    _id: "def-1",
    name: "श्री चैतन्य महाप्रभु का आविर्भाव महोत्सव (गौर पूर्णिमा)",
    tag1: "उत्सव",
    addedon: new Date().toISOString(),
    description: "इस्कॉन नोएडा एक्सप्रेसवे में इस वर्ष गौर पूर्णिमा का उत्सव अत्यंत भव्य रूप में मनाया जाएगा। भक्तों द्वारा 1008 भोग अर्पित किए जाएंगे और हरिनाम संकीर्तन से पूरा वातावरण गुंजायमान रहेगा।",
    banner_img: "https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?auto=format&fit=crop&q=80&w=800",
    path: "/news/gaura-purnima",
    isDefault: true
  },
  {
    _id: "def-2",
    name: "वैदिक सांस्कृतिक केंद्र का नया प्रकल्प",
    tag1: "विकास",
    addedon: new Date().toISOString(),
    description: "समाज के युवाओं को आध्यात्मिक शिक्षा और जीवन कौशल प्रदान करने के लिए मंदिर परिसर में एक नए वैदिक लर्निंग सेंटर की आधारशिला रखी गई है।",
    banner_img: "https://images.unsplash.com/photo-1604543411306-4447781f5791?auto=format&fit=crop&q=80&w=800",
    path: "/news/vedic-center",
    isDefault: true
  },
  {
    _id: "def-3",
    name: "वृक्षारोपण और पर्यावरण सेवा अभियान",
    tag1: "सेवा",
    addedon: new Date().toISOString(),
    description: "इस्कॉन नोएडा एक्सप्रेसवे द्वारा 'गो-ग्रीन' अभियान के तहत मंदिर के आसपास के क्षेत्रों में 500 से अधिक फलदार और छायादार वृक्ष लगाने का संकल्प लिया गया है।",
    banner_img: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=800",
    path: "/news/environment-service",
    isDefault: true
  }
];

const News = () => {
    const [newsData, setNewsData] = useState(DEFAULT_NEWS_LIST); // Start with default
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchNews = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `${API_NODE_URL}list-detail-page/all?page=${page}&limit=9&search=${searchTerm}&type=News`, {
                credentials: "include",
            }
            );
            const data = await response.json();
            
            if (data.status && data.data && data.data.length > 0) {
                setNewsData(data.data);
                setTotalPages(data.pagination.totalPages);
            } else {
                // If searching and no results, show empty. If first page and no results, show default.
                setNewsData(searchTerm ? [] : DEFAULT_NEWS_LIST);
                setTotalPages(1);
            }
        } catch (error) {
            console.error("Failed to fetch news:", error);
            setNewsData(searchTerm ? [] : DEFAULT_NEWS_LIST);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const delaySearch = setTimeout(() => {
            fetchNews();
        }, 500);

        return () => clearTimeout(delaySearch);
    }, [page, searchTerm]);

    const formatDate = (dateString) => {
        if (!dateString) return "Recent";
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
        <div className="bg-[#faf9f6] min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/img/main-section.webp"
                        alt="ISKCON News"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl">
                        <div className="inline-block px-4 py-1.5 mb-6 bg-secondary/30 backdrop-blur-md border border-tertiary/30 rounded-full text-tertiary text-sm font-bold tracking-widest uppercase">
                            ताज़ा समाचार • Latest Updates
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-novaBold text-white uppercase leading-tight mb-4">
                            इस्कॉन <span className="text-tertiary">समाचार</span> <br />
                            <span className="text-3xl md:text-5xl opacity-90 font-novaReg">Temple Chronicles</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl font-novaReg max-w-lg mb-8">
                            इस्कॉन नोएडा एक्सप्रेसवे की नवीनतम गतिविधियों, उपलब्धियों और महत्वपूर्ण घोषणाओं से अवगत रहें।
                        </p>
                    </div>
                </div>
            </section>

            {/* News List Section */}
            <section className="py-16 md:py-24 container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-novaBold text-secondary mb-2">समाचार और अपडेट</h2>
                        <p className="text-gray-500 font-novaReg">Stay connected with our community through the latest news</p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-96">
                        <input 
                            type="text" 
                            placeholder="समाचार खोजें... Search news..."
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
                        <p className="text-gray-500 font-novaSemi animate-pulse">समाचार लोड हो रहे हैं...</p>
                    </div>
                ) : newsData.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {newsData.map((news) => (
                                <div key={news._id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden bg-gray-100">
                                        <Image 
                                            src={news.isDefault ? news.banner_img : `${IMAGE_PATH}${news.banner_img}`}
                                            alt={news.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            unoptimized={news.isDefault} // Helpful for external placeholder images
                                        />
                                        <div className="absolute top-4 left-4">
                                            <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm border border-primary/10 uppercase tracking-wide">
                                                {news.tag1 || "न्यूज़"}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-2 text-primary text-sm font-novaBold mb-3">
                                            <Clock size={16} />
                                            <span>{formatDate(news.addedon)}</span>
                                        </div>
                                        
                                        <h3 className="text-xl font-novaBold text-secondary mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                            {news.name}
                                        </h3>

                                        <p className="text-gray-500 text-sm font-novaReg line-clamp-3 mb-6 flex-grow">
                                            {stripHtml(news.description || news.shortdesc)}
                                        </p>

                                        <Link 
                                            href={news.path || "#"}
                                            className="inline-flex items-center gap-2 text-secondary font-novaSemi text-sm group/link hover:text-primary transition-colors"
                                        >
                                            पूरा पढ़ें • Read More
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
                                
                                <div className="flex bg-white border border-gray-200 rounded-2xl p-1 shadow-sm overflow-x-auto max-w-[250px] md:max-w-none">
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button 
                                            key={i + 1}
                                            onClick={() => setPage(i + 1)}
                                            className={`min-w-[48px] h-12 rounded-xl text-sm font-novaBold transition-all ${
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
                        <div className="text-5xl mb-4">📰</div>
                        <h3 className="text-2xl font-novaBold text-secondary mb-2">कोई समाचार नहीं मिला</h3>
                        <p className="text-gray-500 font-novaReg">"{searchTerm}" के लिए कोई परिणाम नहीं मिले।</p>
                        <button 
                            onClick={() => {setSearchTerm(""); setPage(1);}}
                            className="mt-6 px-8 py-3 bg-primary text-white rounded-full font-novaBold hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95"
                        >
                            सभी समाचार देखें • Show All News
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default News;