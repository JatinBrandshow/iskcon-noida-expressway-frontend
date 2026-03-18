"use client";

import React from "react";
import Image from "next/image";
import NewsSideBar from "@/components/NewsSideBar";

const newsData = [
    {
        category: "Gadgets",
        time: "2 hours ago",
        title: "Next-Gen VR Headsets Set to Bridge the Reality Gap This Holiday Season",
        desc: "The latest prototypes from major tech giants suggest a resolution leap that mimics human vision capabilities.",
        image: "/img/main-section.webp",
        color: "text-blue-500",
    },
    {
        category: "Sustainability",
        time: "4 hours ago",
        title: "The Hydrogen Battery Breakthrough That Could Power Entire Cities",
        desc: "Engineers have discovered a way to stabilize liquid hydrogen at room temperature, solving a decade-old problem.",
        image: "/img/main-section.webp",
        color: "text-green-500",
    },
    {
        category: "Cloud",
        time: "Yesterday",
        title: "Why Edge Computing is the Secret Weapon for Smart Cities",
        desc: "Processing data at the source is reducing latency and paving the way for autonomous traffic management.",
        image: "/img/main-section.webp",
        color: "text-blue-400",
    },
    {
        category: "Security",
        time: "Yesterday",
        title: "Quantum Encryption: The End of Traditional Hacking?",
        desc: "As quantum computers scale, the race for unhackable communication methods enters a critical new phase.",
        image: "/img/main-section.webp",
        color: "text-purple-500",
    },
];
const News = () => {
    return (
        <>
            <section className="py-12 px-6 bg-gray-100">
                <div className="max-w-375 mx-auto">
                    <div className="grid lg:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-md">
                        {/* Left Image */}
                        <div className="relative h-112.5 lg:h-auto">
                            <Image src="/img/main-section.webp" alt="AI News" fill className="object-cover" />

                            {/* Breaking Badge */}
                            <span className="absolute top-5 left-5 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                                BREAKING NEWS
                            </span>
                        </div>

                        {/* Right Content */}
                        <div className="p-10 flex flex-col justify-center">
                            {/* Category */}
                            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">
                                Artificial Intelligence
                            </span>

                            {/* Title */}
                            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
                                The Singularity: How Neural Networks are Redefining Human Creativity
                            </h1>

                            {/* Description */}
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                A comprehensive look at the intersection of generative models and artistic expression,
                                exploring how the latest breakthroughs in LLMs are enabling new forms of creativity and
                                collaboration.
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/news/author.jpg"
                                    alt="Author"
                                    width={45}
                                    height={45}
                                    className="rounded-full"
                                />

                                <div>
                                    <p className="font-semibold text-gray-900">Sarah Jenkins</p>
                                    <p className="text-sm text-gray-500">October 24, 2023 • 8 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8 bg-gray-100">
                <div className="max-w-375 mx-auto flex gap-10">
                    {/* LEFT SIDE (Recent News) */}
                    <div className="w-[80%]">
                        {/* Heading */}
                        <div className="flex items-center mb-10">
                            <h2 className="text-2xl font-bold text-gray-900">Recent News</h2>
                            <div className="flex-1 h-0.5 bg-gray-300 ml-6"></div>
                        </div>

                        {/* Grid */}
                        <div className="grid md:grid-cols-2 gap-10">
                            {newsData.map((item, index) => (
                                <div key={index} className="group">
                                    <div className="relative h-50 rounded-xl overflow-hidden mb-4">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition duration-500"
                                        />
                                    </div>

                                    <div className="flex justify-between text-sm mb-2">
                                        <span className={`font-semibold uppercase ${item.color}`}>{item.category}</span>
                                        <span className="text-gray-500">{item.time}</span>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE (Sidebar) */}
                    <aside className="w-[20%]">
                        <NewsSideBar />
                    </aside>
                </div>
            </section>
        </>
    );
};

export default News;
