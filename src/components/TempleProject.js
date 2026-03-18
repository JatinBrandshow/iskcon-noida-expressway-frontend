"use client";

import React from "react";

const TempleProject = () => {
  return (
    <section className="py-[70px] px-[4%] bg-temple-gradient">
      <div className="max-w-[900px] mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary text-secondary px-5 py-1.5 rounded-full text-sm font-bold mb-6 animate-pulse">
          🚧 निर्माण जारी है
        </div>

        {/* Title */}
        <h2 className="text-[clamp(1.4rem,3vw,2.2rem)] font-bold text-tertiary mb-4">
          नया भव्य मंदिर निर्माण परियोजना
        </h2>

        {/* Description */}
        <p className="text-quinary/80 text-base leading-relaxed mb-8">
          ISKCON Noida Expressway पर एक भव्य मंदिर का निर्माण प्रारंभ हो गया है।
          श्री श्री जगन्नाथ बलदेव सुभद्रा के इस दिव्य धाम में हजारों भक्त एक साथ
          दर्शन कर सकेंगे। आपके दान से यह स्वप्न साकार होगा।
        </p>

        {/* Progress Bar */}
        <div className="bg-white/10 rounded-full h-[20px] border border-tertiary/30 overflow-hidden mb-2">
          <div className="relative h-full w-[35%] bg-gradient-to-r from-secondary to-tertiary rounded-full flex items-center justify-end pr-3 text-xs font-bold text-white">
            35%
          </div>
        </div>

        {/* Progress Labels */}
        <div className="flex justify-between text-tertiary/70 text-xs mb-8">
          <span>🏁 शुभारंभ</span>
          <span>निर्माण प्रगति — 35%</span>
          <span>🛕 लोकार्पण</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

          <div className="bg-white/5 border border-tertiary/30 rounded-xl p-4">
            <span className="text-2xl font-bold text-tertiary block">
              ₹2.5 Cr+
            </span>
            <small className="text-quinary/70 text-xs">
              अब तक एकत्रित दान
            </small>
          </div>

          <div className="bg-white/5 border border-tertiary/30 rounded-xl p-4">
            <span className="text-2xl font-bold text-tertiary block">
              1200+
            </span>
            <small className="text-quinary/70 text-xs">
              दानदाता परिवार
            </small>
          </div>

          <div className="bg-white/5 border border-tertiary/30 rounded-xl p-4">
            <span className="text-2xl font-bold text-tertiary block">
              2026
            </span>
            <small className="text-quinary/70 text-xs">
              अपेक्षित लोकार्पण वर्ष
            </small>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="#donation"
            className="bg-secondary hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            🙏 मंदिर निर्माण में दान करें
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hare%20Krishna!%20Main%20mandir%20nirman%20mein%20sahyog%20karna%20chahta%20hun."
            target="_blank"
            className="bg-primary hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            💬 WhatsApp पर जानकारी लें
          </a>

        </div>

      </div>
    </section>
  );
};

export default TempleProject;