"use client";

import React, { useState } from "react";
import Image from "next/image";

const galleryItems = [
  {
    title: "श्री कृष्ण — दिव्य दर्शन",
    image: "/img/main-section.webp",
    icon: "🛕",
    large: true,
  },
  {
    title: "संध्या आरती",
    // image: "/img/main-section.webp",
    icon: "🪔",
  },
  {
    title: "श्री विग्रह श्रृंगार",
    image: "/img/main-section.webp",
    icon: "🌺",
  },
  {
    title: "कीर्तन महोत्सव",
    icon: "🥁",
  },
  {
    title: "पुष्प सेवा",
    image: "/img/main-section.webp",
    icon: "🌸",
  },
  {
    title: "महाप्रसाद",
    icon: "🍛",
  },
  {
    title: "मंदिर निर्माण",
    icon: "🛕",
  },
];

const GalleryItem = ({ item }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`group relative cursor-pointer rounded-lg overflow-hidden border border-tertiary/20 aspect-square transition-transform duration-300 hover:scale-105
      ${item.large ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      {/* Image */}
      {item.image && !imgError ? (
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex items-center justify-center h-full text-5xl bg-primary text-white">
          {item.icon}
        </div>
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
        <span className="text-white text-xs font-semibold">
          {item.title}
        </span>
      </div>
    </div>
  );
};

const TempleGallery = () => {
  return (
    <section className="py-[70px] px-[4%] bg-senary">

      {/* Header */}
      <div className="max-w-[1300px] mx-auto mb-10 text-center">
        <span className="inline-block bg-secondary/20 text-secondary border border-secondary px-4 py-1 rounded-full text-xs font-semibold mb-3">
          फोटो गैलरी
        </span>

        <h2 className="text-[clamp(1.5rem,3vw,2.3rem)] font-bold text-tertiary mb-3">
          दिव्य दर्शन
        </h2>

        <div className="w-20 h-1 bg-tertiary mx-auto rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[1300px] mx-auto">
        {galleryItems.map((item, index) => (
          <GalleryItem key={index} item={item} />
        ))}
      </div>

    </section>
  );
};

export default TempleGallery;