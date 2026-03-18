"use client";

import React, { useState } from "react";

const sevaTypes = [
    "🌸 पुष्प सेवा",
    "🍛 प्रसाद सेवा",
    "📚 शिक्षा सेवा",
    "🎵 कीर्तन सेवा",
    "🛕 मंदिर सफाई",
    "💻 IT / Media",
    "🚗 परिवहन सेवा",
    "🏗️ निर्माण सेवा",
    "📢 प्रचार सेवा",
    "👶 बाल शिक्षा",
];

const ServiceOpportunities = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
    return (
        <>
            <section id="volunteer" className="py-[70px] px-[4%] bg-[linear-gradient(180deg,#FFF8E7,#FFE4B5)]">
                <div className="max-w-[1300px] mx-auto">
                    {/* Header */}
                    <div className="text-center mb-[45px]">
                        <span className="inline-block bg-[linear-gradient(135deg,#FF6B00,#FFD700)] text-white px-4 py-[4px] rounded-full text-[0.72rem] font-bold tracking-[2px] mb-3">
                            सेवा अवसर
                        </span>

                        <h2 className="text-primary text-[clamp(1.3rem,2.8vw,2.2rem)] font-bold">
                            स्वयंसेवक बनें — सेवा करें
                        </h2>

                        <div className="w-[70px] h-[3px] bg-[linear-gradient(90deg,#FF6B00,#FFD700)] mx-auto mt-2 rounded"></div>

                        <p className="text-[#7A5C4A] mt-3 text-[0.9rem]">
                            भगवान की सेवा में अपना समय और प्रतिभा अर्पित करें
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 gap-[50px] items-start">
                        {/* LEFT SIDE */}
                        <div>
                            <h3 className="text-primary text-[1.2rem] font-bold mb-4">सेवा के अवसर</h3>

                            <p className="text-[#5C3D2E] leading-[1.8] mb-5">
                                ISKCON Noida Expressway में अनेक प्रकार की सेवाएँ उपलब्ध हैं। आप अपनी रुचि और क्षमता के
                                अनुसार सेवा चुन सकते हैं।
                            </p>

                            <div className="grid grid-cols-2 gap-3">
                                {sevaTypes.map((seva, i) => (
                                    <div
                                        key={i}
                                        className="bg-white rounded-[10px] p-3 shadow-[0_3px_12px_rgba(92,10,10,0.07)] text-[0.85rem] text-primary font-semibold"
                                    >
                                        {seva}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6">
                                <a
                                    href="https://wa.me/91XXXXXXXXXX?text=Hare%20Krishna!"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 bg-[linear-gradient(135deg,#25D366,#128C7E)] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:-translate-y-1 transition"
                                >
                                    💬 WhatsApp पर संपर्क करें
                                </a>
                            </div>
                        </div>

                        {/* RIGHT SIDE FORM */}
                        <div className="bg-white rounded-[20px] p-8 shadow-[0_10px_40px_rgba(92,10,10,0.12)] border border-secondary/20">
                            {!submitted ? (
                                <form onSubmit={handleSubmit}>
                                    <h3 className="text-primary text-center text-[1rem] font-bold mb-5">
                                        🙏 सेवक पंजीकरण फॉर्म
                                    </h3>

                                    <div className="grid grid-cols-2 gap-3 mb-3">
                                        <input
                                            required
                                            placeholder="पूरा नाम"
                                            className="border rounded px-3 py-2 text-sm"
                                        />

                                        <input
                                            type="number"
                                            placeholder="आयु"
                                            className="border rounded px-3 py-2 text-sm"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 mb-3">
                                        <input
                                            required
                                            placeholder="मोबाइल नंबर"
                                            className="border rounded px-3 py-2 text-sm"
                                        />

                                        <input
                                            type="email"
                                            placeholder="ईमेल"
                                            className="border rounded px-3 py-2 text-sm"
                                        />
                                    </div>

                                    <input
                                        required
                                        placeholder="पता / शहर"
                                        className="border rounded px-3 py-2 text-sm w-full mb-3"
                                    />

                                    <select className="border rounded px-3 py-2 text-sm w-full mb-3">
                                        <option>सेवा चुनें</option>
                                        {sevaTypes.map((s, i) => (
                                            <option key={i}>{s}</option>
                                        ))}
                                    </select>

                                    <select className="border rounded px-3 py-2 text-sm w-full mb-3">
                                        <option>प्रतिदिन</option>
                                        <option>सप्ताहांत (शनि-रवि)</option>
                                        <option>केवल त्योहारों पर</option>
                                        <option>जब भी आवश्यकता हो</option>
                                    </select>

                                    <textarea
                                        rows="3"
                                        placeholder="अपने बारे में बताएं..."
                                        className="border rounded px-3 py-2 text-sm w-full mb-4"
                                    />

                                    <button
                                        type="submit"
                                        className="w-full bg-[linear-gradient(135deg,#FF6B00,#FF4500)] text-white py-3 rounded-full font-bold hover:-translate-y-1 transition"
                                    >
                                        🙏 पंजीकरण करें — सेवा में आएं
                                    </button>
                                </form>
                            ) : (
                                <div className="text-center">
                                    <span className="text-[3rem] block mb-2">🙏</span>

                                    <h3 className="text-primary font-bold text-lg">हरे कृष्ण!</h3>

                                    <p className="text-[#5C3D2E] mt-2">आपका पंजीकरण सफलतापूर्वक हो गया।</p>

                                    <p className="text-secondary text-sm mt-2">सेवा ही पूजा है 🌸</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceOpportunities;
