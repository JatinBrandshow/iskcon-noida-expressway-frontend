"use client";

import React from "react";

const TempleDailyProgram = () => {
  return (
    <section
      id="program"
      className="py-[80px] px-[5%] bg-[linear-gradient(180deg,#1A0505_0%,#2C0A0A_100%)]"
    >
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="text-center mb-[45px]">
          <span className="inline-block bg-[linear-gradient(135deg,#FF6B00,#FFD700)] text-white px-4 py-[4px] rounded-full text-[0.72rem] font-bold tracking-[2px] mb-3">
            प्रतिदिन
          </span>

          <h2 className="text-[clamp(1.3rem,2.8vw,2.2rem)] text-tertiary font-bold mb-2">
            दैनिक मंदिर कार्यक्रम
          </h2>

          <div className="w-[70px] h-[3px] bg-[linear-gradient(90deg,#FF6B00,#FFD700)] mx-auto rounded"></div>

          <p className="text-[rgba(255,248,231,0.6)] mt-3 text-[0.95rem]">
            ISKCON Noida Expressway — प्रतिदिन का आध्यात्मिक कार्यक्रम
          </p>
        </div>

        {/* Program Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">

          {/* Morning */}
          <div className="bg-[rgba(255,215,0,0.05)] border border-[rgba(255,215,0,0.2)] rounded-[16px] p-6 border-l-[4px] border-tertiary">
            <div className="text-tertiary text-[0.7rem] uppercase tracking-[2px] mb-4 font-bold">
              🌅 प्रातः काल
            </div>

            <div className="flex flex-col gap-3">

              <ProgramItem name="🪔 मंगल आरती" time="4:30 AM" color="text-tertiary" />
              <ProgramItem name="📿 तुलसी पूजा" time="5:00 AM" color="text-tertiary" />
              <ProgramItem name="📖 श्रीमद् भागवतम् क्लास" time="5:15 AM" color="text-tertiary" />
              <ProgramItem name="🌸 श्रृंगार दर्शन" time="7:15 AM" color="text-tertiary" />
              <ProgramItem name="🎵 गुरु पूजा / कीर्तन" time="7:25 AM" color="text-tertiary" last />

            </div>
          </div>

          {/* Afternoon */}
          <div className="bg-[rgba(255,107,0,0.05)] border border-[rgba(255,107,0,0.2)] rounded-[16px] p-6 border-l-[4px] border-secondary">
            <div className="text-secondary text-[0.7rem] uppercase tracking-[2px] mb-4 font-bold">
              ☀️ मध्याह्न
            </div>

            <div className="flex flex-col gap-3">

              <ProgramItem name="🍛 राजभोग आरती" time="12:00 PM" color="text-secondary" />
              <ProgramItem name="🚪 दोपहर विश्राम (बंद)" time="1:00 PM" color="text-secondary" />
              <ProgramItem name="🛕 मंदिर पुनः खुलता है" time="4:00 PM" color="text-secondary" />
              <ProgramItem name="🎓 भगवद् गीता क्लास" time="5:00 PM" color="text-secondary" last />

            </div>
          </div>

          {/* Evening */}
          <div className="bg-[rgba(255,143,171,0.05)] border border-[rgba(255,143,171,0.2)] rounded-[16px] p-6 border-l-[4px] border-pink-400">
            <div className="text-pink-400 text-[0.7rem] uppercase tracking-[2px] mb-4 font-bold">
              🌆 सायंकाल
            </div>

            <div className="flex flex-col gap-3">

              <ProgramItem name="🪔 उत्थापन आरती" time="4:15 PM" color="text-pink-400" />
              <ProgramItem name="🥁 संध्या आरती / कीर्तन" time="7:00 PM" color="text-pink-400" />
              <ProgramItem name="🍛 महाप्रसाद वितरण" time="7:45 PM" color="text-pink-400" />
              <ProgramItem name="🌙 शयन आरती" time="8:30 PM" color="text-pink-400" last />

            </div>
          </div>

        </div>

        {/* Footer Note */}
        <p className="text-center text-[rgba(255,248,231,0.4)] text-[0.8rem] mt-6">
          * समय में परिवर्तन त्योहारों के अनुसार हो सकता है
        </p>

      </div>
    </section>
  );
};

const ProgramItem = ({ name, time, color, last }) => {
  return (
    <div
      className={`flex justify-between items-center pb-2 ${
        !last ? "border-b border-[rgba(255,215,0,0.1)]" : ""
      }`}
    >
      <span className="text-white text-[0.9rem]">{name}</span>
      <span className={`${color} font-bold text-[0.9rem]`}>{time}</span>
    </div>
  );
};

export default TempleDailyProgram;