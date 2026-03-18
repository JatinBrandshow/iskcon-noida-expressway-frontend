"use client";

import React from "react";
import { Send } from "lucide-react";

const trending = [
    {
        title: "SpaceX Mars Mission Timeline",
        readers: "12.5k readers today",
    },
    {
        title: "Apple's M3 Chip Architecture",
        readers: "8.2k readers today",
    },
    {
        title: "Future of Web3 Ecosystem",
        readers: "5.9k readers today",
    },
    {
        title: "The Python vs Rust Debate",
        readers: "4.1k readers today",
    },
];

const tags = ["#Web3", "#Metaverse", "#Fintech", "#GreenTech", "#Blockchain", "#Startup"];

const NewsSideBar = () => {
    return (
        <>
            <aside className="space-y-10">
                {/* Trending Topics */}
                <div>
                    <h3 className="text-lg font-semibold mb-6 text-gray-900">Trending Topics</h3>

                    <div className="space-y-5">
                        {trending.map((item, index) => (
                            <div key={index} className="flex gap-4 group cursor-pointer">
                                <span className="text-gray-300 text-xl font-bold">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <div>
                                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
                                        {item.title}
                                    </p>

                                    <span className="text-sm text-gray-500">{item.readers}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-blue-900 to-black text-white p-6 rounded-2xl">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-lg mb-4">
                        <Send size={18} />
                    </div>

                    <h4 className="text-lg font-semibold mb-2">Stay Ahead</h4>

                    <p className="text-sm text-gray-300 mb-5">
                        Join 50,000+ tech enthusiasts. Get our weekly newsletter delivered to your inbox.
                    </p>

                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full mb-4 px-4 py-3 rounded-lg bg-white/10 border border-white/10 placeholder-gray-400 text-white focus:outline-none"
                    />

                    <button className="w-full bg-blue-500 hover:bg-blue-600 transition py-3 rounded-lg font-medium">
                        Subscribe Now
                    </button>

                    <p className="text-xs text-center text-gray-400 mt-3">NO SPAM. EVER.</p>
                </div>

                {/* Explore Tags */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Explore</h3>

                    <div className="flex flex-wrap gap-3">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-gray-200 rounded-md text-sm text-gray-700 hover:bg-blue-100 cursor-pointer transition"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
};

export default NewsSideBar;
