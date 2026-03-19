"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hammer, Landmark, Heart, Check, ArrowRight, SquareStack } from "lucide-react";

const sevas = [
    {
        id: "brick",
        title: "Sacred Brick Seva",
        description: "Donate a brick for the holy temple construction.",
        icon: SquareStack,
        amount: "₹501",
        tag: "Most Popular",
    },
    {
        id: "sqft",
        title: "Square Foot Seva",
        description: "Sponsor one square foot of the temple foundation.",
        icon: Landmark,
        amount: "₹2,501",
        tag: "Impactful",
    },
    {
        id: "pillar",
        title: "Pillar Seva",
        description: "Support the pillars that uphold the sacred temple.",
        icon: Landmark,
        amount: "₹5,001",
    },
    {
        id: "kitchen",
        title: "Deity Kitchen Seva",
        description: "Help build the kitchen for preparing bhoga.",
        icon: Hammer,
        amount: "₹11,000",
        tag: "Spiritual Legacy",
    },
    {
        id: "annadan",
        title: "Annadan Seva",
        description: "Sponsor prasadam distribution for devotees.",
        icon: Heart,
        amount: "₹1,100",
        tag: "Blessings",
    },
    {
        id: "gaushala",
        title: "Gaushala Seva",
        description: "Support care and feeding of sacred cows.",
        icon: Heart,
        amount: "₹2,100",
    },
    {
        id: "aarti",
        title: "Aarti Seva",
        description: "Sponsor daily aarti rituals in the temple.",
        icon: Heart,
        amount: "₹701",
    },
    {
        id: "deepdan",
        title: "Deepdaan Seva",
        description: "Light lamps for divine blessings.",
        icon: Heart,
        amount: "₹301",
    },
    {
        id: "abhishek",
        title: "Abhishek Seva",
        description: "Participate in sacred deity bathing rituals.",
        icon: Heart,
        amount: "₹2,500",
    },
    {
        id: "festival",
        title: "Festival Seva",
        description: "Contribute towards grand festival celebrations.",
        icon: Heart,
        amount: "₹5,100",
    },
    {
        id: "flowers",
        title: "Flower Seva",
        description: "Offer fresh flowers for daily deity decoration.",
        icon: Heart,
        amount: "₹501",
    },
    {
        id: "vastra",
        title: "Vastra Seva",
        description: "Sponsor divine clothes for the deities.",
        icon: Heart,
        amount: "₹3,100",
    },
    {
        id: "bhog",
        title: "Bhog Seva",
        description: "Offer meals to the Lord.",
        icon: Heart,
        amount: "₹1,501",
    },
    {
        id: "seating",
        title: "Devotee Seating Seva",
        description: "Help build seating areas for devotees.",
        icon: Landmark,
        amount: "₹4,100",
    },
    {
        id: "lighting",
        title: "Temple Lighting Seva",
        description: "Illuminate the temple with divine lighting.",
        icon: Hammer,
        amount: "₹6,500",
    },
    {
        id: "sound",
        title: "Sound System Seva",
        description: "Support kirtan and pravachan sound setup.",
        icon: Hammer,
        amount: "₹7,500",
    },
    {
        id: "library",
        title: "Spiritual Library Seva",
        description: "Help build a library of sacred scriptures.",
        icon: Landmark,
        amount: "₹8,100",
    },
    {
        id: "education",
        title: "Gurukul Education Seva",
        description: "Support spiritual education for children.",
        icon: Heart,
        amount: "₹3,500",
    },
    {
        id: "water",
        title: "Water Facility Seva",
        description: "Provide drinking water for visitors.",
        icon: Hammer,
        amount: "₹2,200",
    },
    {
        id: "maintenance",
        title: "Temple Maintenance Seva",
        description: "Support ongoing upkeep of the temple.",
        icon: Hammer,
        amount: "₹1,001",
    },
];

const DonationCTA = () => {
    const [selected, setSelected] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const visibleSevas = showAll ? sevas : sevas.slice(0, 4);

    return (
        <section className="py-24 bg-white text-stone-900">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        Leave Your <span className="text-primary italic">Eternal Mark</span>
                    </h2>
                    <p className="text-stone-500 text-lg">
                        Choose a Seva category to support the ongoing construction of the ISKCON Mandir.
                    </p>
                </div>

                {/* Seva Grid */}
                <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {visibleSevas.map((seva) => {
                        const Icon = seva.icon;

                        return (
                            <motion.div
                                layout
                                key={seva.id}
                                whileHover={{ y: -8 }}
                                onClick={() => setSelected(seva.id)}
                                className={`relative cursor-pointer p-6 md:p-8 rounded-4xl border-2 transition-all duration-300 ${
                                    selected === seva.id
                                        ? "border-orange-500 bg-orange-50/30 shadow-xl shadow-orange-500/10"
                                        : "border-stone-100 bg-white hover:border-orange-200"
                                }`}
                            >
                                {/* Selected Tick */}
                                {selected === seva.id && (
                                    <div className="absolute top-4 right-4 bg-orange-500 text-white p-1 rounded-full">
                                        <Check size={14} />
                                    </div>
                                )}

                                {/* Tag */}
                                {seva.tag && (
                                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-[10px] uppercase tracking-widest font-bold rounded-full mb-4">
                                        {seva.tag}
                                    </span>
                                )}

                                {/* Icon */}
                                <div
                                    className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 ${
                                        selected === seva.id
                                            ? "bg-orange-500 text-white"
                                            : "bg-stone-100 text-stone-600"
                                    }`}
                                >
                                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg md:text-xl font-bold mb-2">{seva.title}</h3>
                                <p className="text-stone-500 text-xs md:text-sm mb-4">{seva.description}</p>

                                <div className="text-lg md:text-2xl font-serif font-bold">{seva.amount}</div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Toggle Button */}
                {sevas.length > 8 && (
                    <div className="text-center mb-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-8 py-3 rounded-full border border-orange-500 text-primary font-semibold hover:bg-orange-500 hover:text-white transition"
                        >
                            {showAll ? "Show Less" : "View All Sevas"}
                        </button>
                    </div>
                )}

                {/* Dynamic Action Section */}
                <AnimatePresence mode="wait">
                    {selected && (
                        <motion.div
                            key={selected}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex flex-col items-center gap-6 p-8 rounded-[3rem] bg-stone-900 text-white text-center"
                        >
                            <div className="flex items-center gap-3 text-orange-400">
                                <Heart size={20} fill="currentColor" />
                                <span className="font-medium">
                                    You are supporting: {sevas.find((s) => s.id === selected)?.title}
                                </span>
                            </div>

                            <button className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all flex items-center gap-3 shadow-lg shadow-orange-500/40">
                                Proceed to Secure Donation <ArrowRight size={20} />
                            </button>

                            <p className="text-stone-500 text-xs uppercase">
                                Tax Exempted under Section 80G • Secure Encryption
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default DonationCTA;
