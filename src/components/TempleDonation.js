"use client";

import React, { useState } from "react";

const donationMethods = [
    {
        icon: "🛕",
        title: "मंदिर निर्माण",
        desc: "नए मंदिर के निर्माण में सहयोग करें",
    },
    {
        icon: "🍛",
        title: "अन्नदान सेवा",
        desc: "गरीबों को प्रसाद खिलाएं",
    },
    {
        icon: "🐄",
        title: "गौ सेवा",
        desc: "गायों की सेवा में दान करें",
    },
    {
        icon: "🎓",
        title: "शिक्षा दान",
        desc: "वैदिक शिक्षा के प्रसार में सहयोग",
    },
];

const TempleDonation = () => {
    const [activeAmount, setActiveAmount] = useState("₹501");

    const amounts = ["₹101", "₹501", "₹1,001", "₹5,001", "₹11,000", "अन्य राशि"];
    return (
        <>
            <section
                id="donation"
                className="py-[70px] px-[4%] text-center bg-[linear-gradient(135deg,#FF6B00,#FF4500,#5C0A0A)]"
            >
                {/* Header */}
                <div className="max-w-[900px] mx-auto mb-10">
                    <h2 className="text-white text-[clamp(1.4rem,3vw,2.2rem)] font-bold mb-3">
                        भगवान की सेवा में दान करें
                    </h2>

                    <p className="text-white/90 text-[1rem] max-w-[600px] mx-auto leading-[1.7]">
                        आपका दान मंदिर निर्माण, अन्नदान और वैदिक शिक्षा में लगता है। 80G Tax Benefit उपलब्ध है।
                    </p>
                </div>

                {/* Donation Methods */}
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 max-w-[900px] mx-auto mb-10">
                    {donationMethods.map((item, i) => (
                        <a
                            key={i}
                            href="https://www.iskconnoida.org/donate"
                            target="_blank"
                            className="bg-white/10 border border-white/30 rounded-[14px] p-5 text-white hover:bg-white/20 transition transform hover:-translate-y-1"
                        >
                            <span className="text-[2.2rem] block mb-2">{item.icon}</span>

                            <h4 className="font-bold text-[0.95rem] mb-1">{item.title}</h4>

                            <p className="text-[0.78rem] opacity-80">{item.desc}</p>
                        </a>
                    ))}
                </div>

                {/* Amount Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                    {amounts.map((amount, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveAmount(amount)}
                            className={`px-5 py-2 rounded-full border-2 text-[0.95rem] font-bold transition
            ${
                activeAmount === amount
                    ? "bg-white text-secondary border-white"
                    : "bg-white/15 text-white border-white/40 hover:bg-white"
            }`}
                        >
                            {amount}
                        </button>
                    ))}
                </div>

                {/* Donate Button */}
                <a
                    href="https://www.iskconnoida.org/donate"
                    target="_blank"
                    className="inline-block bg-white text-secondary px-11 py-4 rounded-full text-[1rem] font-extrabold shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition"
                >
                    🙏 अभी दान करें (UPI / Card / Net Banking)
                </a>

                {/* Note */}
                <p className="text-white/60 text-[0.78rem] mt-4">
                    80G Tax Exemption उपलब्ध | सभी भुगतान सुरक्षित | रसीद मिलेगी
                </p>
            </section>
        </>
    );
};

export default TempleDonation;
