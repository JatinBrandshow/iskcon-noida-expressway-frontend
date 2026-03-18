"use client";

const   TempleConstructionProject = () => {
    return (
        <>
            <section
                id="temple-project"
                className="py-[80px] px-[5%] bg-[linear-gradient(135deg,#FFF8E7,#FFE4B5)]"
            >
                <div className="max-w-[1100px] mx-auto">

                    {/* Header */}
                    <div className="text-center mb-[45px]">
                        <span className="inline-block bg-[linear-gradient(135deg,#FF6B00,#FFD700)] text-white px-5 py-[4px] rounded-full text-[0.75rem] font-bold mb-3">
                            🏗️ नया निर्माण
                        </span>

                        <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] font-bold text-primary mb-2">
                            भव्य मंदिर निर्माण परियोजना
                        </h2>

                        <div className="w-[70px] h-[3px] bg-secondary mx-auto rounded"></div>
                    </div>

                    {/* Main Card */}
                    <div className="relative bg-[linear-gradient(135deg,#5C0A0A,#1A0505)] rounded-[26px] p-[40px] border border-tertiary/40 text-white overflow-hidden">

                        {/* Glow Circle */}
                        <div className="absolute -top-[60px] -right-[60px] w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle,rgba(255,215,0,0.1),transparent)]"></div>

                        <div className="grid md:grid-cols-2 gap-[40px] items-center">

                            {/* Left Side */}
                            <div>

                                <p className="text-tertiary text-[0.75rem] tracking-[3px] mb-3">
                                    🚧 निर्माण प्रगति पर है
                                </p>

                                <h3 className="text-[clamp(1.2rem,2.5vw,1.7rem)] font-bold text-tertiary mb-4 leading-[1.3]">
                                    श्री श्री जगन्नाथ बलदेव सुभद्रा
                                    <br />
                                    भव्य मंदिर परियोजना
                                </h3>

                                <p className="text-[rgba(255,248,231,0.8)] leading-[1.8] text-[0.95rem] mb-6">
                                    ISKCON Noida Expressway पर एक भव्य एवं दिव्य मंदिर का निर्माण
                                    शुरू हो रहा है। यह मंदिर श्री श्री जगन्नाथ बलदेव सुभद्रा जी को
                                    समर्पित होगा और हजारों भक्तों के लिए तीर्थस्थल बनेगा।
                                </p>

                                {/* Stats */}
                                <div className="flex flex-wrap gap-4">

                                    <div className="text-center px-6 py-4 bg-tertiary/10 border border-tertiary/20 rounded-xl">
                                        <div className="text-tertiary text-[1.7rem] font-black">
                                            2025
                                        </div>
                                        <div className="text-[rgba(255,248,231,0.6)] text-[0.75rem]">
                                            निर्माण आरंभ
                                        </div>
                                    </div>

                                    <div className="text-center px-6 py-4 bg-tertiary/10 border border-tertiary/20 rounded-xl">
                                        <div className="text-tertiary text-[1.7rem] font-black">
                                            5 एकड़
                                        </div>
                                        <div className="text-[rgba(255,248,231,0.6)] text-[0.75rem]">
                                            परिसर क्षेत्र
                                        </div>
                                    </div>

                                    <div className="text-center px-6 py-4 bg-tertiary/10 border border-tertiary/20 rounded-xl">
                                        <div className="text-tertiary text-[1.7rem] font-black">
                                            10,000+
                                        </div>
                                        <div className="text-[rgba(255,248,231,0.6)] text-[0.75rem]">
                                            भक्त क्षमता
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="space-y-5">

                                {/* Progress 1 */}
                                <div>
                                    <div className="flex justify-between text-[0.85rem] mb-[6px]">
                                        <span className="text-[rgba(255,248,231,0.8)]">
                                            📋 योजना एवं डिज़ाइन
                                        </span>
                                        <span className="text-tertiary font-bold">
                                            85%
                                        </span>
                                    </div>

                                    <div className="h-[10px] rounded-full bg-white/10 overflow-hidden">
                                        <div
                                            className="h-[10px] rounded-full bg-[linear-gradient(90deg,#FFD700,#FF6B00)]"
                                            style={{ width: "85%" }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Progress 2 */}
                                <div>
                                    <div className="flex justify-between text-[0.85rem] mb-[6px]">
                                        <span className="text-[rgba(255,248,231,0.8)]">
                                            💰 फंड संग्रह
                                        </span>
                                        <span className="text-tertiary font-bold">
                                            40%
                                        </span>
                                    </div>

                                    <div className="h-[10px] rounded-full bg-white/10 overflow-hidden">
                                        <div
                                            className="h-[10px] rounded-full bg-[linear-gradient(90deg,#FFD700,#FF6B00)]"
                                            style={{ width: "40%" }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Progress 3 */}
                                <div>
                                    <div className="flex justify-between text-[0.85rem] mb-[6px]">
                                        <span className="text-[rgba(255,248,231,0.8)]">
                                            🏗️ भूमि पूजन
                                        </span>
                                        <span className="text-tertiary font-bold">
                                            जल्द
                                        </span>
                                    </div>

                                    <div className="h-[10px] rounded-full bg-white/10 overflow-hidden">
                                        <div
                                            className="h-[10px] rounded-full bg-[linear-gradient(90deg,rgba(255,215,0,0.4),rgba(255,107,0,0.4))]"
                                            style={{ width: "15%" }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Button */}
                                <a
                                    href="#donation"
                                    className="inline-flex items-center gap-2 bg-secondary px-6 py-3 rounded-full font-bold text-[0.9rem] hover:scale-105 transition"
                                >
                                    🙏 मंदिर निर्माण में सहयोग करें
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default TempleConstructionProject;