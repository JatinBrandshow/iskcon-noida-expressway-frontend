"use client";

import Image from "next/image";
import { Users, Plane, Car, Hotel, Send, Instagram, Facebook } from "lucide-react";

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

const NewsDetail = () => {
    return (
        <>
            <section className="relative h-[60vh] w-full flex items-end text-white">
                {/* Background Image */}
                <Image src="/img/main-section.webp" alt="News Hero" fill priority className="object-cover" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/70 to-black/30"></div>

                {/* Content */}
                <div className="relative max-w-6xl mx-auto px-6 pb-12 w-full">
                    {/* Breadcrumb */}
                    <p className="text-sm text-gray-300 mb-4">Home / News / Events</p>

                    {/* Category */}
                    <span className="inline-block bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        Campus News
                    </span>

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mb-4">
                        Workshop on Yoga and Meditation Organized at Accurate Institute
                    </h1>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                        <span>📅 March 14, 2026</span>

                        <span>✍️ Accurate Institute</span>

                        <span>⏱ 3 min read</span>
                    </div>
                </div>
            </section>
            <section className="bg-black text-white py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Title */}
                    <div className="flex items-center justify-center mb-16">
                        <div className="flex-1 h-0.5 bg-gray-600"></div>
                        <h2 className="px-6 text-2xl tracking-widest font-semibold">ABOUT THE TOUR</h2>
                        <div className="flex-1 h-0.5 bg-gray-600"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Left Content */}
                        <div className="space-y-12">
                            <p className="text-gray-300 leading-relaxed">
                                We've planned a simple and convenient 10-day itinerary for your trip to Japan. You'll
                                visit three cities
                                <span className="text-yellow-400"> Osaka, Kyoto, and Tokyo.</span>
                            </p>

                            <p className="text-gray-300 leading-relaxed">
                                No need to worry about routes, schedules, or finding places — everything is already
                                organized. We'll show you where to go, what to see, and where to eat, so you can simply
                                enjoy
                                <span className="text-yellow-400"> the journey.</span>
                            </p>
                        </div>

                        {/* Timeline */}
                        <div className="relative">
                            {/* vertical line */}
                            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-500 -translate-x-1/2"></div>

                            <div className="space-y-20">
                                {/* Osaka */}
                                <div className="relative flex items-center">
                                    <div className="w-1/2 pr-8 text-right">
                                        <p className="text-gray-400 text-sm">Days 1–3</p>
                                        <h3 className="text-xl font-semibold">Osaka</h3>
                                    </div>

                                    <div className="absolute left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2"></div>

                                    <div className="w-1/2 pl-8">
                                        <Image
                                            src="/img/main-section.webp"
                                            alt="Osaka"
                                            width={160}
                                            height={120}
                                            className="rounded-lg shadow-lg"
                                        />
                                    </div>
                                </div>

                                {/* Kyoto */}
                                <div className="relative flex items-center">
                                    <div className="w-1/2 pr-8 text-right">
                                        <Image
                                            src="/img/main-section.webp"
                                            alt="Kyoto"
                                            width={160}
                                            height={120}
                                            className="rounded-lg shadow-lg ml-auto"
                                        />
                                    </div>

                                    <div className="absolute left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2"></div>

                                    <div className="w-1/2 pl-8">
                                        <p className="text-gray-400 text-sm">Days 4–6</p>
                                        <h3 className="text-xl font-semibold">Kyoto</h3>
                                    </div>
                                </div>

                                {/* Tokyo */}
                                <div className="relative flex items-center">
                                    <div className="w-1/2 pr-8 text-right">
                                        <p className="text-gray-400 text-sm">Days 7–10</p>
                                        <h3 className="text-xl font-semibold">Tokyo</h3>
                                    </div>

                                    <div className="absolute left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2"></div>

                                    <div className="w-1/2 pl-8">
                                        <Image
                                            src="/img/main-section.webp"
                                            alt="Tokyo"
                                            width={160}
                                            height={120}
                                            className="rounded-lg shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-24 text-white">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1526481280691-3c469c13e6d9?q=80&w=2070')",
                    }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/80"></div>

                <div className="relative max-w-6xl mx-auto px-6">
                    {/* Heading */}
                    <div className="flex items-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-wider">WHAT'S INCLUDED</h2>
                        <div className="flex-1 h-0.5 bg-gray-600 ml-6"></div>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-600 rounded-xl p-6 backdrop-blur-md bg-white/5 hover:bg-white/10 transition"
                            >
                                <div className="mb-4">{item.icon}</div>

                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative h-[90vh] w-full flex items-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1526481280691-3c469c13e6d9?q=80&w=2070')",
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
                    {/* Contact Card */}
                    <div className="backdrop-blur-lg bg-white/20 p-10 rounded-2xl w-105 text-white shadow-xl">
                        <h2 className="text-3xl font-light leading-snug mb-6">
                            Want to join us,
                            <br />
                            but still have questions?
                        </h2>

                        <p className="text-lg mb-6 opacity-90">Leave a request</p>

                        <form className="space-y-6">
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full bg-transparent border-b border-white/60 focus:outline-none py-2 placeholder-white/70"
                            />

                            <input
                                type="text"
                                placeholder="Phone number"
                                className="w-full bg-transparent border-b border-white/60 focus:outline-none py-2 placeholder-white/70"
                            />

                            <textarea
                                placeholder="Comment"
                                className="w-full bg-transparent border-b border-white/60 focus:outline-none py-2 placeholder-white/70 resize-none"
                            />

                            <button
                                type="submit"
                                className="w-full bg-white text-black py-3 rounded-md font-medium hover:bg-gray-200 transition flex items-center justify-center gap-2"
                            >
                                Send <Send size={18} />
                            </button>
                        </form>
                    </div>

                    {/* Social Icons */}
                    <div className="absolute bottom-8 right-8 flex gap-4 text-white">
                        <a className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition">
                            <Instagram size={18} />
                        </a>

                        <a className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition">
                            <Facebook size={18} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsDetail;
