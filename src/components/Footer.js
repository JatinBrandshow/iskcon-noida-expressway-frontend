const Footer = () => {
    return (
        <>
            <footer className="bg-[#1A0505] border-t-[3px] border-[#FFD700] px-[4%] pt-14 pb-7">
                {/* GRID */}
                <div className="max-w-325 mx-auto mb-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-9">
                    {/* BRAND */}
                    <div>
                        <img
                            src="https://iskconnoidaexpressway.com/wp-content/uploads/2020/12/ISKCON-NOIDA-Expressway-logo.png"
                            alt="logo"
                            className="h-16 invert sepia saturate-[4] hue-rotate-[5deg] brightness-125"
                        />
                        <p className="text-[rgba(255,248,231,0.55)] text-[13px] leading-[1.7] mb-5">
                            श्रील प्रभुपाद जी की कृपा से स्थापित यह मंदिर भक्ति, ज्ञान और वैराग्य का केंद्र है। हरे
                            कृष्ण आंदोलन के माध्यम से विश्व में प्रेम और शांति का प्रसार।
                        </p>

                        <div className="flex gap-2">
                            {["📘", "📸", "▶️", "🐦", "💬"].map((icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 bg-[rgba(255,215,0,0.08)] border border-[rgba(255,215,0,0.18)] rounded-lg flex items-center justify-center text-[16px] transition-all hover:bg-[#FF6B00] hover:border-[#FF6B00] hover:-translate-y-0.75"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h4 className="text-[#FFD700] text-[12px] uppercase tracking-[2px] mb-3.5">त्वरित लिंक</h4>

                        <ul className="space-y-2.25">
                            {[
                                ["दैनिक कार्यक्रम", "#program"],
                                ["मंदिर निर्माण", "#project"],
                                ["उत्सव कैलेंडर", "#events"],
                                ["गैलरी", "#gallery"],
                                ["लाइव दर्शन", "#live"],
                            ].map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link[1]}
                                        className="text-[rgba(255,248,231,0.55)] text-[13px] hover:text-[#FFD700] transition-colors"
                                    >
                                        {link[0]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SERVICES */}
                    <div>
                        <h4 className="text-[#FFD700] text-[12px] uppercase tracking-[2px] mb-3.5">सेवाएँ</h4>

                        <ul className="space-y-2.25">
                            {[
                                ["स्वयंसेवक बनें", "#volunteer"],
                                ["दान करें", "#donation"],
                                ["पूजा बुकिंग", "#services"],
                                ["ऑनलाइन स्टोर", "#services"],
                                ["संपर्क", "#contact"],
                            ].map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link[1]}
                                        className="text-[rgba(255,248,231,0.55)] text-[13px] hover:text-[#FFD700] transition-colors"
                                    >
                                        {link[0]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* NEWSLETTER */}
                    <div>
                        <h4 className="text-[#FFD700] text-[12px] uppercase tracking-[2px] mb-3.5">न्यूज़लेटर</h4>

                        <p className="text-[rgba(255,248,231,0.45)] text-[13px] mb-3">
                            उत्सव और कार्यक्रमों की जानकारी पाएँ।
                        </p>

                        <div>
                            <input
                                type="text"
                                placeholder="मोबाइल / ईमेल"
                                className="w-full p-[9px_12px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,215,0,0.18)] rounded-[7px] text-white text-[13px] mb-2 outline-none focus:border-[#FF6B00]"
                            />

                            <button className="w-full bg-[linear-gradient(135deg,#FF6B00,#FF4500)] text-white py-2.25 rounded-[7px] text-[13px] font-bold">
                                🙏 जुड़ें
                            </button>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="max-w-325 mx-auto border-t border-[rgba(255,215,0,0.1)] pt-5 text-center text-[rgba(255,248,231,0.35)] text-[12px]">
                    <p>
                        © 2025 <span className="text-[#FF6B00]">ISKCON Noida Expressway</span> | सभी अधिकार सुरक्षित
                        <br />
                        हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे 🙏
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
