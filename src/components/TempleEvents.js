"use client";

import React from "react";

const events = [
  {
    day: "16",
    month: "अगस्त",
    tag: "महोत्सव",
    title: "श्री कृष्ण जन्माष्टमी",
    desc: "भगवान श्री कृष्ण के जन्मोत्सव पर विशेष अभिषेक, रासलीला और मध्यरात्रि महाआरती।",
    meta: "⏰ रात 8 बजे से  📍 मुख्य मंदिर",
  },
  {
    day: "12",
    month: "सितम्बर",
    tag: "राधाष्टमी",
    title: "श्री राधाष्टमी महोत्सव",
    desc: "श्रीमती राधारानी के प्राकट्य उत्सव पर विशेष पूजा, भोग और भव्य कीर्तन।",
    meta: "⏰ सायं 6 बजे से  📍 मंदिर प्रांगण",
  },
  {
    day: "जुलाई",
    month: "2025",
    tag: "रथयात्रा",
    title: "श्री जगन्नाथ रथयात्रा",
    desc: "भगवान जगन्नाथ, बलदेव और सुभद्रा की भव्य रथयात्रा — सड़कों पर हर्षोल्लास।",
    meta: "⏰ प्रातः 9 बजे  📍 Noida Expressway",
  },
];

const TempleEvents = () => {
  return (
    <section className="py-[70px] px-[4%] bg-quinary">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <span className="inline-block bg-secondary/20 text-secondary border border-secondary px-4 py-1 rounded-full text-xs font-semibold mb-3">
            आगामी उत्सव
          </span>

          <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold text-primary mb-3">
            वैष्णव पर्व एवं उत्सव
          </h2>

          <div className="w-20 h-1 bg-tertiary mx-auto rounded-full"></div>

        </div>

        {/* Events Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition hover:-translate-y-2"
            >

              {/* Date Banner */}
              <div className="bg-secondary p-4 flex items-center gap-3">

                <div className="bg-white rounded-md px-3 py-1 text-center min-w-[55px]">
                  <div className="text-lg font-extrabold text-secondary leading-none">
                    {event.day}
                  </div>
                  <div className="text-[10px] font-semibold text-quaternary uppercase">
                    {event.month}
                  </div>
                </div>

                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-[11px] font-semibold">
                  {event.tag}
                </span>

              </div>

              {/* Body */}
              <div className="p-5">

                <h4 className="text-sm font-bold text-primary mb-2">
                  {event.title}
                </h4>

                <p className="text-[13px] text-quaternary leading-relaxed mb-3">
                  {event.desc}
                </p>

                <div className="text-[12px] text-secondary font-semibold">
                  {event.meta}
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Button */}
        <div className="text-center mt-10">

          <a
            href="#"
            className="bg-secondary hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            📅 सभी उत्सव देखें
          </a>

        </div>

      </div>
    </section>
  );
};

export default TempleEvents;