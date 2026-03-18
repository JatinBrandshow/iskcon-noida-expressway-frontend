import React from "react";

const contactItems = [
    {
        icon: "📍",
        title: "पता",
        content: (
            <>
                ISKCON Noida Expressway, Sector 44,
                <br />
                Noida Expressway, Noida — 201303,
                <br />
                Uttar Pradesh, India
            </>
        ),
    },
    {
        icon: "📞",
        title: "फोन",
        content: (
            <>
                +91 XXXXX XXXXX
                <br />
                +91 XXXXX XXXXX
            </>
        ),
    },
    {
        icon: "💬",
        title: "WhatsApp",
        content: (
            <a href="https://wa.me/91XXXXXXXXXX" className="text-secondary font-semibold" target="_blank">
                +91 XXXXX XXXXX पर मैसेज करें
            </a>
        ),
    },
    {
        icon: "✉️",
        title: "ईमेल",
        content: (
            <a href="mailto:info@example.com" className="text-secondary font-semibold">
                info@example.com
            </a>
        ),
    },
    {
        icon: "⏰",
        title: "मंदिर खुलने का समय",
        content: (
            <>
                प्रतिदिन प्रातः 4:30 AM — रात्रि 9:00 PM
                <br />
                365 दिन खुला रहता है
            </>
        ),
    },
];

const ContactUS = () => {
    return (
        <>
            <section id="contact" className="py-17.5 px-[4%] bg-[linear-gradient(180deg,#FFF8E7,#FFE4B5)]">
                <div className="max-w-325 mx-auto">
                    {/* Header */}
                    <div className="text-center mb-11.25">
                        <span className="inline-block bg-[linear-gradient(135deg,#FF6B00,#FFD700)] text-white px-4 py-1 rounded-full text-[0.72rem] font-bold tracking-[2px] mb-3">
                            हमसे मिलें
                        </span>

                        <h2 className="text-primary text-[clamp(1.3rem,2.8vw,2.2rem)] font-bold">संपर्क करें</h2>

                        <div className="w-17.5 h-0.75 bg-[linear-gradient(90deg,#FF6B00,#FFD700)] mx-auto mt-2 rounded"></div>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        {/* Contact Info */}
                        <div>
                            {contactItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 mb-4 p-4 bg-white rounded-xl shadow-[0_3px_12px_rgba(92,10,10,0.07)]"
                                >
                                    <span className="text-[1.4rem]">{item.icon}</span>

                                    <div>
                                        <h5 className="text-secondary text-[0.7rem] uppercase tracking-[1px] mb-1">
                                            {item.title}
                                        </h5>

                                        <p className="text-quaternary text-[0.87rem] leading-[1.6]">{item.content}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="mt-5">
                                <a
                                    href="https://wa.me/91XXXXXXXXXX"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 bg-[linear-gradient(135deg,#25D366,#128C7E)] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:-translate-y-1 transition"
                                >
                                    💬 अभी WhatsApp करें
                                </a>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="rounded-[14px] overflow-hidden shadow-[0_10px_35px_rgba(92,10,10,0.15)] border-2 border-secondary/30">
                            <iframe
                                src="https://www.google.com/maps?q=ISKCON%20Noida%20Expressway&output=embed"
                                className="w-full h-87.5"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUS;
