import React from "react";

const services = [
    {
        icon: "🙏",
        title: "पूजा बुकिंग",
        desc: "विशेष पूजा, अभिषेक और आरती के लिए ऑनलाइन बुकिंग।",
    },
    {
        icon: "📚",
        title: "भागवत कथा",
        desc: "श्रीमद् भागवतम् और गीता की प्रवचन माला।",
    },
    {
        icon: "🍛",
        title: "महाप्रसाद",
        desc: "प्रतिदिन निःशुल्क महाप्रसाद वितरण।",
    },
    {
        icon: "🛍️",
        title: "ऑनलाइन स्टोर",
        desc: "पुस्तकें, माला, तुलसी, प्रसाद ऑनलाइन मंगवाएँ।",
    },
    {
        icon: "💒",
        title: "वैदिक विवाह",
        desc: "मंदिर परिसर में वैदिक रीति-रिवाज से विवाह।",
    },
    {
        icon: "🧘",
        title: "योग एवं ध्यान",
        desc: "प्रतिदिन प्रातः भक्ति योग और ध्यान कक्षाएँ।",
    },
    {
        icon: "🚌",
        title: "तीर्थ यात्रा",
        desc: "वृंदावन, मथुरा, द्वारका तीर्थ यात्रा व्यवस्था।",
    },
    {
        icon: "👶",
        title: "बाल संस्कार",
        desc: "बच्चों के लिए वैदिक संस्कार और मूल्य शिक्षा।",
    },
];

const OurServices = () => {
    return (
        <>
            <section id="services" className="py-[70px] px-[4%] bg-quinary">
                <div className="max-w-[1300px] mx-auto">
                    {/* Header */}
                    <div className="text-center mb-[45px]">
                        <span className="inline-block bg-[linear-gradient(135deg,#FF6B00,#FFD700)] text-white px-4 py-[4px] rounded-full text-[0.72rem] font-bold tracking-[2px] mb-3">
                            मंदिर सेवाएँ
                        </span>

                        <h2 className="text-primary text-[clamp(1.3rem,2.8vw,2.2rem)] font-bold">हमारी सेवाएँ</h2>

                        <div className="w-[70px] h-[3px] bg-[linear-gradient(90deg,#FF6B00,#FFD700)] mx-auto mt-2 rounded"></div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[18px]">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[14px] p-[24px_18px] text-center shadow-[0_5px_20px_rgba(92,10,10,0.07)] border-2 border-transparent hover:border-secondary transition-all hover:-translate-y-[5px] cursor-pointer"
                            >
                                <span className="text-[2.5rem] block mb-[12px]">{service.icon}</span>

                                <h4 className="text-primary text-[0.85rem] font-bold mb-[8px]">{service.title}</h4>

                                <p className="text-[0.78rem] text-[#7A5C4A] leading-[1.6]">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurServices;
