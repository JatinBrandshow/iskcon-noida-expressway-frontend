"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { API_NODE_URL, IMAGE_PATH } from "@/configs/config";


const Event = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(`${API_NODE_URL}slug/getbytype?type=Event`);
                const result = await response.json();
                console.log("Event Page API Response:", result.data);
                if (result.status && result.data) {
                    const transformedEvents = result.data.map(event => {
                        const eventDate = new Date(event.date);
                        return {
                            title: event.name,
                            category: event.tag1 || "Festival",
                            date: eventDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                            location: event.param2 || "Main Temple",
                            image: event.featured_img ? `${IMAGE_PATH}${event.featured_img}` : "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&q=80",
                            button: event.param3 || "Details",
                            desc: event.shortdesc || "",
                            description: event.description || ""
                        };
                    });
                    setEvents(transformedEvents);
                }
            } catch (error) {
                console.error("Error fetching events:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const categories = ["All", ...new Set(events.map((event) => event.category))];
    const eventsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const filteredEvents = events.filter((event) => {
        const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;

        const matchesSearch =
            searchTerm.length < 3 ||
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.location.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesDate = !selectedDate || event.date.includes(selectedDate);

        return matchesCategory && matchesSearch && matchesDate;
    });

    const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

    const startIndex = (currentPage - 1) * eventsPerPage;

    const currentEvents = filteredEvents.slice(startIndex, startIndex + eventsPerPage);

    if (loading) {
        return (
            <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mb-4"></div>
                <p className="text-xl font-semibold text-primary font-novaBold italic">
                    Fetching divine moments...
                </p>
            </div>
        );
    }

    return (
        <>
            {/* HERO SECTION */}

            <section className="relative h-[90vh] flex items-center text-white overflow-hidden">
                {/* Background Image */}

                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/img/main-section.webp"
                        alt="Lord Krishna"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>

                {/* Dark Overlay */}

                <div className="absolute inset-0 bg-primary/80 -z-10"></div>

                {/* Gradient Overlay */}

                <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent -z-10"></div>

                {/* Hero Content */}

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center w-full">
                    <div className="space-y-6 md:space-y-8">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-white text-sm font-semibold tracking-wide uppercase">
                            Upcoming Festival
                        </span>

                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
                            Celebrating <span className="text-tertiary">Sri Krishna Janmashtami</span>
                        </h1>

                        <p className="text-xl text-gray-200 max-w-xl">
                            Join us for a divine evening of devotion, cultural performances, and spiritual discourse as
                            we celebrate the birth of Lord Krishna.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="px-8 py-4 rounded-xl bg-secondary hover:bg-orange-700 text-white font-bold text-lg transition shadow-lg">
                                Register for Event
                            </button>

                            <button className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-lg backdrop-blur-sm border border-white/20 transition">
                                View Event Details
                            </button>
                        </div>

                        {/* Event Info */}

                        <div className="flex items-center gap-10 pt-8 border-t border-white/10 text-gray-300">
                            <div className="flex items-center gap-3">
                                <svg
                                    className="w-7 h-7 text-tertiary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                <div>
                                    <p className="font-semibold text-white">August 26, 2024</p>
                                    <p className="text-sm">Starts 6:00 PM onwards</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <svg
                                    className="w-7 h-7 text-tertiary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div>
                                    <p className="font-semibold text-white">Community Hall</p>
                                    <p className="text-sm">Central Park, City Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EVENTS SECTION */}

            <section className="bg-senary text-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* FILTER BAR */}
                    <div className="mb-8 bg-primary/30 border border-secondary/30 rounded-xl p-4 flex gap-6 items-center">
                        {/* LEFT SIDE (70%) */}

                        <div className="w-full lg:w-[80%] flex gap-2 items-center">
                            {/* CATEGORY */}

                            <div className="relative w-48">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => {
                                        setSelectedCategory(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    className="w-full bg-primary/40 text-white px-4 py-3 rounded-lg appearance-none focus:outline-none focus:border-yellow-400 border border-[#2a2e55]"
                                >
                                    {categories.map((cat, index) => (
                                        <option key={index} value={cat}>
                                            {cat}
                                        </option>
                                    ))}
                                </select>

                                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    ▼
                                </div>
                            </div>

                            {/* SEARCH */}

                            <input
                                type="text"
                                placeholder="Search events..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="flex-1 min-w-55 bg-[#1d2145] border border-[#2a2e55] px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-yellow-400"
                            />

                            {/* SEARCH BUTTON */}

                            <button className="bg-secondary text-white hover:opacity-90 px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 transition">
                                Search
                            </button>

                            {/* CLEAR */}

                            <button
                                onClick={() => {
                                    setSelectedCategory("All");
                                    setSearchTerm("");
                                    setSelectedDate("");
                                    setCurrentPage(1);
                                }}
                                className="border border-gray-600 px-5 py-3 rounded-lg text-sm hover:bg-white hover:text-black transition"
                            >
                                Clear
                            </button>
                        </div>

                        {/* RIGHT SIDE (30%) */}

                        <div className="w-full lg:w-[20%] flex justify-center">
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="w-full lg:w-64 bg-[#1d2145] border border-[#2a2e55] px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-yellow-400"
                            />
                        </div>
                    </div>

                    {/* EVENTS GRID */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {currentEvents.map((event, index) => (
                            <div
                                key={index}
                                className="bg-primary/40 border border-secondary/20 rounded-2xl overflow-hidden hover:scale-[1.03] transition duration-300"
                            >
                                <div className="relative h-48 w-full">
                                    <Image src={event.image} alt={event.title} fill className="object-cover" />

                                    <span className="absolute top-4 left-4 bg-secondary text-white text-xs px-3 py-1 rounded-full">
                                        {event.category}
                                    </span>
                                </div>

                                <div className="p-6">
                                    <p className="text-xs text-gray-400 mb-2">{event.date}</p>

                                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>

                                    <div 
                                        className="text-sm text-gray-300 line-clamp-2 mb-3"
                                        dangerouslySetInnerHTML={{ __html: event.description || event.desc }}
                                    />

                                    <p className="text-xs text-secondary font-medium mb-4 flex items-center gap-1">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {event.location}
                                    </p>

                                    <button className="w-full border border-secondary text-secondary py-2 rounded-lg hover:bg-secondary hover:text-white transition">
                                        {event.button}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* PAGINATION */}

                    <div className="flex justify-center mt-12 gap-3 flex-wrap">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-white hover:text-black"
                        >
                            Prev
                        </button>

                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`px-4 py-2 rounded-lg border ${
                                    currentPage === i + 1
                                        ? "bg-secondary text-white"
                                        : "border-gray-600 hover:bg-white hover:text-black"
                                }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-white hover:text-black"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Event;
