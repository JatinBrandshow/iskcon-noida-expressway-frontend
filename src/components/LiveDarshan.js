"use client";

import React from "react";

const LiveDarshan = () => {
    const openLive = () => {
        window.open("https://www.youtube.com/@ISKCONNoidaExpressway", "_blank");
    };

    return (
        <section id="live" className="py-[70px] px-[4%] text-center bg-temple-gradient">
            {/* LIVE Badge */}
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-[5px] rounded-full text-[0.78rem] font-bold mb-4 animate-pulse">
                🔴 LIVE
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-tertiary mb-2">लाइव दर्शन</h2>

            {/* Subtitle */}
            <p className="text-[rgba(255,248,231,0.7)] max-w-[500px] mx-auto text-[0.92rem]">
                घर बैठे श्री श्री जगन्नाथ बलदेव सुभद्रा के दिव्य दर्शन करें।
            </p>

            {/* Video Placeholder */}
            <div
                onClick={openLive}
                className="max-w-[760px] mx-auto mt-[26px] aspect-video rounded-[14px] flex items-center justify-center cursor-pointer border border-tertiary/30 bg-[linear-gradient(135deg,#1A0505,#5c0a0a)] hover:border-tertiary transition-all relative overflow-hidden"
            >
                {/* Play Button */}
                <div className="w-[72px] h-[72px] bg-secondary rounded-full flex items-center justify-center text-[1.8rem] border-[3px] border-white">
                    ▶
                </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 justify-center flex-wrap mt-5">
                <a
                    href="https://www.youtube.com/@ISKCONNoidaExpressway"
                    target="_blank"
                    className="bg-secondary text-white text-[0.85rem] px-5 py-[10px] rounded-full font-semibold transition hover:scale-105"
                >
                    🔔 YouTube Subscribe
                </a>

                <a
                    href="https://wa.me/91XXXXXXXXXX"
                    target="_blank"
                    className="bg-green-500 text-white text-[0.85rem] px-5 py-[10px] rounded-full font-semibold transition hover:scale-105"
                >
                    💬 WhatsApp Updates
                </a>
            </div>
        </section>
    );
};

export default LiveDarshan;
