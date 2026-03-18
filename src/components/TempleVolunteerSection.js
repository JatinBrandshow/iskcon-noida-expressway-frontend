"use client";

const TempleVolunteerSection = () => {
    return (
        <section id="volunteer" className="py-[80px] px-[5%] bg-[linear-gradient(180deg,#2C0A0A,#1A0505)]">
            <div className="max-w-[1100px] mx-auto">
                {/* Header */}
                <div className="text-center mb-[45px]">
                    <span className="inline-block bg-[linear-gradient(135deg,#FF6B00,#FFD700)] text-white px-4 py-[4px] rounded-full text-[0.72rem] font-bold tracking-[2px] mb-2">
                        सेवा अवसर
                    </span>

                    <h2 className="text-[clamp(1.4rem,3vw,2.2rem)] text-tertiary font-bold">
                        स्वयंसेवक बनें — सेवा में जुड़ें
                    </h2>

                    <div className="w-[70px] h-[3px] bg-[linear-gradient(90deg,#FF6B00,#FFD700)] mx-auto mt-2 rounded"></div>

                    <p className="text-[rgba(255,248,231,0.6)] mt-3">
                        भगवान की सेवा में अपना समय और प्रतिभा अर्पित करें
                    </p>
                </div>

                {/* Seva Types */}
                <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4 mb-[40px]">
                    {[
                        { icon: "🌺", title: "पुष्प सेवा", desc: "फूल सजाना" },
                        { icon: "🍛", title: "भोग सेवा", desc: "रसोई सहायता" },
                        { icon: "🎵", title: "कीर्तन सेवा", desc: "भजन गाना" },
                        { icon: "📚", title: "शिक्षा सेवा", desc: "बच्चों को पढ़ाना" },
                        { icon: "🏗️", title: "निर्माण सेवा", desc: "मंदिर निर्माण" },
                        { icon: "💻", title: "डिजिटल सेवा", desc: "Social Media" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-tertiary/5 border border-tertiary/20 rounded-[14px] p-[18px] text-center"
                        >
                            <div className="text-[2rem] mb-2">{item.icon}</div>
                            <div className="text-tertiary text-[0.85rem] font-semibold">{item.title}</div>
                            <div className="text-[rgba(255,248,231,0.5)] text-[0.72rem] mt-1">{item.desc}</div>
                        </div>
                    ))}
                </div>

                {/* Volunteer Form */}
                <div className="bg-white/5 border border-tertiary/20 rounded-[24px] p-[40px] max-w-[700px] mx-auto">
                    <h3 className="text-tertiary text-center font-semibold text-[1.1rem] mb-2">सेवक पंजीकरण फॉर्म</h3>

                    <p className="text-center text-[rgba(255,248,231,0.5)] text-[0.82rem] mb-[28px]">
                        अपनी जानकारी भरें — हमारी सेवा टीम आपसे संपर्क करेगी
                    </p>

                    {/* Name + Phone */}
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="text-tertiary/80 text-[0.78rem] block mb-1">पूरा नाम *</label>
                            <input
                                type="text"
                                placeholder="आपका नाम"
                                className="w-full px-4 py-[11px] bg-white/10 border border-tertiary/30 rounded-[10px] text-white outline-none focus:border-tertiary"
                            />
                        </div>

                        <div>
                            <label className="text-tertiary/80 text-[0.78rem] block mb-1">मोबाइल नंबर *</label>
                            <input
                                type="tel"
                                placeholder="WhatsApp नंबर"
                                className="w-full px-4 py-[11px] bg-white/10 border border-tertiary/30 rounded-[10px] text-white outline-none focus:border-tertiary"
                            />
                        </div>
                    </div>

                    {/* Email + Job */}
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="text-tertiary/80 text-[0.78rem] block mb-1">ईमेल</label>
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="w-full px-4 py-[11px] bg-white/10 border border-tertiary/30 rounded-[10px] text-white outline-none focus:border-tertiary"
                            />
                        </div>

                        <div>
                            <label className="text-tertiary/80 text-[0.78rem] block mb-1">पेशा / व्यवसाय</label>
                            <input
                                type="text"
                                placeholder="Doctor, Engineer..."
                                className="w-full px-4 py-[11px] bg-white/10 border border-tertiary/30 rounded-[10px] text-white outline-none focus:border-tertiary"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                        <label className="text-tertiary/80 text-[0.78rem] block mb-1">कोई विशेष संदेश</label>
                        <textarea
                            rows="3"
                            placeholder="अपने बारे में कुछ बताएं..."
                            className="w-full px-4 py-[11px] bg-white/10 border border-tertiary/30 rounded-[10px] text-white outline-none resize-none focus:border-tertiary"
                        ></textarea>
                    </div>

                    {/* Button */}
                    <button className="w-full bg-secondary py-[14px] rounded-full font-bold text-white hover:opacity-90 transition">
                        🙏 सेवा के लिए पंजीकरण करें
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TempleVolunteerSection;
