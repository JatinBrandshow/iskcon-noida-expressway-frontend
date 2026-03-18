const TempleLocation = () => {
    return (
        <>
            <section id="location" className="py-[80px] px-[5%] bg-[linear-gradient(180deg,#FFF8E7,#FFE4B5)]">
                <div className="max-w-[1300px] mx-auto">
                    {/* Header */}
                    <div className="text-center mb-[40px]">
                        <span className="inline-block bg-[linear-gradient(135deg,#FF6B00,#FFD700)] text-white px-4 py-[4px] rounded-full text-[0.75rem] font-bold tracking-[2px] mb-3">
                            📍 हमारा पता
                        </span>

                        <h2 className="text-primary font-bold text-[clamp(1.4rem,3vw,2.2rem)] mb-2">
                            ISKCON Noida Expressway का स्थान
                        </h2>

                        <div className="w-[80px] h-[3px] bg-[linear-gradient(90deg,#FF6B00,#FFD700)] mx-auto rounded"></div>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 gap-[40px] items-start">
                        {/* Left */}
                        <div>
                            {/* Address */}
                            <div className="bg-white rounded-[16px] p-7 shadow-[0_8px_30px_rgba(92,10,10,0.1)] mb-4">
                                <h4 className="text-secondary text-[0.75rem] uppercase tracking-[1px] mb-2">
                                    📍 पूरा पता
                                </h4>

                                <p className="text-quaternary text-[0.95rem] leading-[1.7]">
                                    ISKCON Noida Expressway <br />
                                    Noida-Greater Noida Expressway <br />
                                    Sector — Noida, Uttar Pradesh
                                </p>
                            </div>

                            {/* How to Reach */}
                            <div className="bg-white rounded-[16px] p-7 shadow-[0_8px_30px_rgba(92,10,10,0.1)] mb-4">
                                <h4 className="text-secondary text-[0.75rem] uppercase tracking-[1px] mb-3">
                                    🚇 कैसे पहुँचें
                                </h4>

                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-3">
                                        <span className="text-xl">🚇</span>
                                        <div>
                                            <strong className="text-primary text-[0.85rem]">Metro</strong>
                                            <p className="text-[0.8rem] text-[#7A5C4A]">
                                                Aqua Line — Sector 101 Station, फिर Auto/Cab
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <span className="text-xl">🚗</span>
                                        <div>
                                            <strong className="text-primary text-[0.85rem]">Car / Cab</strong>
                                            <p className="text-[0.8rem] text-[#7A5C4A]">
                                                Noida-Greater Noida Expressway — DND से 25 min
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <span className="text-xl">🚌</span>
                                        <div>
                                            <strong className="text-primary text-[0.85rem]">Bus</strong>
                                            <p className="text-[0.8rem] text-[#7A5C4A]">
                                                UP Roadways — Noida Bus Stand se direct
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Maps Button */}
                            <a
                                href="https://maps.google.com/?q=ISKCON+Noida+Expressway"
                                target="_blank"
                                className="flex items-center justify-center gap-2 bg-[linear-gradient(135deg,#FF6B00,#FF4500)] text-white py-[14px] px-7 rounded-full font-bold shadow-[0_6px_25px_rgba(255,107,0,0.4)] hover:scale-105 transition"
                            >
                                🗺️ Google Maps पर Directions लें
                            </a>
                        </div>

                        {/* Right */}
                        <div>
                            {/* Map Card */}
                            <div
                                onClick={() =>
                                    window.open("https://maps.google.com/?q=ISKCON+Noida+Expressway", "_blank")
                                }
                                className="w-full aspect-[4/3] bg-[linear-gradient(135deg,#5C0A0A,#8B1A1A)] rounded-[16px] flex flex-col items-center justify-center text-[4rem] border-[3px] border-secondary/40 shadow-[0_10px_40px_rgba(92,10,10,0.2)] cursor-pointer relative"
                            >
                                🗺️
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[rgba(26,5,5,0.9)] text-tertiary px-6 py-2 rounded-[20px] text-[0.85rem] font-bold border border-tertiary/30 whitespace-nowrap">
                                    📍 Click to Open Google Maps
                                </div>
                            </div>

                            {/* Features */}
                            <div className="grid grid-cols-2 gap-3 mt-4">
                                {[
                                    { icon: "🅿️", title: "Free Parking", desc: "500+ गाड़ियाँ" },
                                    { icon: "♿", title: "Wheelchair", desc: "Accessible" },
                                    { icon: "🍛", title: "Prasadam", desc: "Daily Free" },
                                    { icon: "🛍️", title: "Gift Shop", desc: "Books & More" },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-[12px] p-4 text-center shadow-[0_4px_15px_rgba(92,10,10,0.08)]"
                                    >
                                        <div className="text-[1.5rem] mb-1">{item.icon}</div>

                                        <div className="text-primary font-bold text-[0.85rem]">{item.title}</div>

                                        <div className="text-[#7A5C4A] text-[0.75rem]">{item.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TempleLocation;
