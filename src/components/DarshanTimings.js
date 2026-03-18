import React from "react";

const timings = [
    { title: "🌅 मंगल आरती", time: "4:30 AM", note: "Tulsi Puja sahit" },
    { title: "📖 भागवतम्", time: "5:00 AM", note: "Pravachan" },
    { title: "🎵 गुरु पूजा", time: "7:00 AM", note: "Bhajan Kirtan" },
    { title: "☀️ श्रृंगार आरती", time: "7:15 AM", note: "Shringar Darshan" },
    { title: "🌞 राजभोग आरती", time: "12:00 PM", note: "Rajbhog Aarti" },
    { title: "😴 विश्राम", time: "1:00 PM", note: "Madhyanha Vishram" },
    { title: "🌤️ उत्थापन", time: "4:30 PM", note: "Utthaapan Aarti" },
    { title: "🌆 संध्या आरती", time: "7:00 PM", note: "Gaura Aarti" },
    { title: "🌙 शयन आरती", time: "8:30 PM", note: "Shayana Aarti" },
];

const DarshanTimings = () => {
    return (
        <>
            <section
                id="timings"
                className="bg-[linear-gradient(135deg,#5C0A0A,#8B1A1A)] px-[4%] py-5 border-t-[3px] border-[#FFD700] border-b-[3px] border-[#FFD700]"
            >
                <div className="max-w-325 mx-auto">
                    {/* Title */}
                    <div className="text-center mb-3.5">
                        <span className="font-serif text-[#FFD700] text-[1rem] tracking-[2px]">
                            🕉️ दैनिक मंदिर कार्यक्रम — Daily Temple Program
                        </span>
                    </div>

                    {/* Grid */}
                    <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(140px,1fr))] max-w-325 mx-auto">
                        {timings.map((item, i) => (
                            <div
                                key={i}
                                className="text-center p-2.5 border-r border-[rgba(255,215,0,0.2)] last:border-r-0"
                            >
                                <h4 className="text-[#FFD700] text-[0.7rem] uppercase tracking-[1px] mb-1">
                                    {item.title}
                                </h4>

                                <div className="text-white text-[1rem] font-bold">{item.time}</div>

                                <small className="text-[rgba(255,240,160,0.6)] text-[0.68rem]">{item.note}</small>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Note */}
                    <div className="text-center mt-3">
                        <span className="text-[rgba(255,240,160,0.5)] text-[0.72rem]">
                            🏛️ मंदिर प्रतिदिन 4:30 AM से 9:00 PM तक खुला — 365 दिन
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DarshanTimings;
