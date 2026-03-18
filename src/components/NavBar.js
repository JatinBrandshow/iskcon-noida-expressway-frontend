"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnnouncementSlider from "./AnnouncementSlider";

const links = [
    { name: "दैनिक कार्यक्रम", href: "#program" },
    { name: "मंदिर निर्माण", href: "#project" },
    { name: "उत्सव", href: "#events" },
    { name: "गैलरी", href: "#gallery" },
    { name: "लाइव दर्शन", href: "#live" },
    { name: "सेवा करें", href: "#volunteer" },
    { name: "🏗️ निर्माण", href: "#construction" },
    { name: "📍 स्थान", href: "#location" },
    { name: "संपर्क", href: "#contact" },
];

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <AnnouncementSlider />
            <nav className="bg-white border-b-4 border-orange-500">
                <div className="max-w-325 mx-auto flex items-center justify-between p-3">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-14 h-14 overflow-hidden rounded-full border-2 border-orange-100 group-hover:border-orange-500 transition-all">
                                <Image
                                    src="/img/logo-iskcon.webp"
                                    alt="ISKCON Noida Logo"
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold leading-none text-orange-700">ISKCON</span>
                                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                                    Noida Expressway
                                </span>
                            </div>
                        </Link>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex items-center gap-1 flex-wrap">
                        {links.map((link, i) => (
                            <li key={i}>
                                <a
                                    href={link.href}
                                    className="text-secondary text-[13px] font-semibold px-3 py-2 rounded-md transition-all hover:text-orange-600"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}

                        <li>
                            <a
                                href="#donation"
                                className="ml-2 px-4 py-2 text-white rounded-full bg-tertiary font-semibold"
                            >
                                🙏 दान
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Hamburger */}
                    <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1">
                        <span className="w-6 h-0.5 bg-yellow-400"></span>
                        <span className="w-6 h-0.5 bg-yellow-400"></span>
                        <span className="w-6 h-0.5 bg-yellow-400"></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <ul className="md:hidden flex flex-col gap-2 pb-4 pt-2">
                        {links.map((link, i) => (
                            <li key={i}>
                                <a
                                    href={link.href}
                                    className="block text-secondary font-semibold px-3 py-2 rounded-md hover:text-orange-600"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}

                        <li>
                            <a
                                href="#donation"
                                className="block text-center mt-2 px-4 py-2 text-white rounded-full bg-tertiary"
                            >
                                🙏 दान
                            </a>
                        </li>
                    </ul>
                )}
            </nav>
        </>
    );
};

export default NavBar;
