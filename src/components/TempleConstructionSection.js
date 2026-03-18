"use client";

const TempleConstructionSection = () => {
    return (
        <section
            id="construction"
            className="py-[80px] px-[5%] relative overflow-hidden bg-[linear-gradient(135deg,#1A0505_0%,#3D0A0A_50%,#1A0505_100%)]"
        >
            <div className="max-w-[1300px] mx-auto relative z-[1]">
                {/* Header */}
                <div className="text-center mb-[50px]">
                    <div className="inline-block bg-[linear-gradient(135deg,#FF6B00,#FFD700)] text-white px-5 py-[6px] rounded-full text-[0.75rem] font-bold tracking-[2px] mb-4">
                        🏗️ निर्माण परियोजना
                    </div>

                    <h2 className="text-tertiary font-bold text-[clamp(1.4rem,3vw,2.4rem)] mb-2">
                        भव्य मंदिर निर्माण परियोजना
                    </h2>

                    <p className="text-[rgba(255,240,160,0.7)] max-w-[600px] mx-auto text-[1rem]">
                        श्री श्री जगन्नाथ बलदेव सुभद्रा — ISKCON Noida Expressway पर एक भव्य मंदिर का निर्माण शुरू हो
                        रहा है
                    </p>

                    <div className="w-[80px] h-[3px] bg-[linear-gradient(90deg,#FF6B00,#FFD700)] mx-auto mt-4 rounded"></div>
                </div>

                {/* Announcement Card */}
                <div className="bg-[linear-gradient(135deg,rgba(255,107,0,0.15),rgba(255,215,0,0.1))] border border-tertiary/40 rounded-[20px] p-[30px_40px] text-center mb-[40px]">
                    <div className="inline-flex items-center gap-2 bg-secondary text-white px-4 py-[6px] rounded-full text-[0.8rem] font-bold mb-4">
                        🔔 शुभारंभ घोषणा
                    </div>

                    <h3 className="text-tertiary text-[1.3rem] font-semibold mb-3">
                        भूमि पूजन एवं निर्माण कार्य प्रारंभ
                    </h3>

                    <p className="text-[rgba(255,248,231,0.8)] text-[0.95rem] leading-[1.8] max-w-[700px] mx-auto">
                        भगवान श्री जगन्नाथ, बलदेव एवं सुभद्रा की कृपा से ISKCON Noida Expressway पर एक भव्य मंदिर का
                        निर्माण कार्य शीघ्र प्रारंभ होने वाला है। यह मंदिर पूरे नोएडा-ग्रेटर नोएडा क्षेत्र के भक्तों के
                        लिए एक आध्यात्मिक तीर्थ बनेगा।
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 mb-[40px]">
                    {[
                        { icon: "📋", title: "Planning", desc: "वर्तमान चरण" },
                        { icon: "🏗️", title: "2025", desc: "निर्माण प्रारंभ" },
                        { icon: "🛕", title: "भव्य", desc: "मंदिर स्वरूप" },
                        { icon: "🙏", title: "10,000+", desc: "भक्त क्षमता" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-tertiary/20 rounded-[16px] p-6 text-center"
                        >
                            <div className="text-[2.5rem] mb-2">{item.icon}</div>
                            <div className="text-tertiary text-[1.6rem] font-bold">{item.title}</div>
                            <div className="text-[rgba(255,248,231,0.6)] text-[0.8rem] mt-1">{item.desc}</div>
                        </div>
                    ))}
                </div>

                {/* Progress */}
                <div className="bg-white/5 border border-tertiary/20 rounded-[16px] p-[30px] mb-[40px]">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-tertiary font-bold text-[1rem]">🏗️ निर्माण प्रगति</span>

                        <span className="text-secondary font-bold text-[1.1rem]">15%</span>
                    </div>

                    <div className="bg-white/10 rounded-full h-[16px] overflow-hidden mb-4">
                        <div className="h-full w-[15%] bg-[linear-gradient(90deg,#FF6B00,#FFD700)] relative rounded-full">
                            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-tertiary rounded-full shadow-[0_0_10px_rgba(255,215,0,0.8)]"></div>
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="flex justify-between flex-wrap gap-2 text-center text-[0.7rem]">
                        {["योजना ✅", "भूमि पूजन", "नींव कार्य", "निर्माण", "प्रतिष्ठा 🛕"].map((step, index) => (
                            <div key={index}>
                                <div
                                    className={`w-[12px] h-[12px] rounded-full mx-auto mb-1 ${
                                        index === 0 ? "bg-tertiary" : "bg-white/20"
                                    }`}
                                ></div>

                                <span
                                    className={`${
                                        index === 0 ? "text-[rgba(255,248,231,0.7)]" : "text-[rgba(255,248,231,0.4)]"
                                    }`}
                                >
                                    {step}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Donation Card */}
                <div className="text-center bg-[linear-gradient(135deg,rgba(255,107,0,0.2),rgba(255,215,0,0.1))] border border-secondary/40 rounded-[20px] p-[36px]">
                    <h3 className="text-tertiary text-[1.2rem] font-semibold mb-3">🙏 मंदिर निर्माण में सहयोग करें</h3>

                    <p className="text-[rgba(255,248,231,0.75)] text-[0.9rem] max-w-[550px] mx-auto mb-6 leading-[1.7]">
                        आपका एक-एक रुपया इस भव्य मंदिर के निर्माण में लगेगा। ईंट सेवा से लेकर पूर्ण कक्ष तक हर स्तर पर
                        सहयोग का अवसर है।
                    </p>

                    {/* Donation Options */}
                    <div className="flex gap-3 justify-center flex-wrap mb-5">
                        {[
                            { amount: "₹1,001", label: "ईंट सेवा" },
                            { amount: "₹11,000", label: "स्तंभ सेवा" },
                            { amount: "₹51,000", label: "कक्ष सेवा" },
                            { amount: "₹5,00,000+", label: "प्रमुख दानदाता" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/10 border border-tertiary/30 rounded-[12px] px-5 py-3 text-center min-w-[120px]"
                            >
                                <div className="text-tertiary font-bold text-[1.1rem]">{item.amount}</div>
                                <div className="text-[rgba(255,248,231,0.6)] text-[0.72rem] mt-1">{item.label}</div>
                            </div>
                        ))}
                    </div>

                    <a
                        href="#donation"
                        className="inline-block bg-[linear-gradient(135deg,#FF6B00,#FF4500)] text-white px-10 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition"
                    >
                        🙏 मंदिर निर्माण हेतु दान करें
                    </a>

                    <p className="text-[rgba(255,248,231,0.4)] text-[0.75rem] mt-3">
                        80G Tax Exemption | सभी दानदाताओं का नाम मंदिर में अंकित किया जाएगा
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TempleConstructionSection;
