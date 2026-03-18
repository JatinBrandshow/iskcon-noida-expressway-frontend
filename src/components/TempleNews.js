"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { API_NODE_URL, IMAGE_PATH } from "@/configs/config";
import { ArrowRight } from "lucide-react";

// --- Default Data for ISKCON Temple ---
const DEFAULT_NEWS = [
  {
    id: "default-1",
    day: "25",
    month: "मार्च",
    tag: "उत्सव",
    title: "श्री गौर पूर्णिमा महोत्सव की तैयारी",
    description: "इस्कॉन नोएडा एक्सप्रेसवे में श्री चैतन्य महाप्रभु के आविर्भाव दिवस की भव्य तैयारियाँ शुरू हो चुकी हैं। इसमें महा-अभिषेक और संकीर्तन का आयोजन होगा।",
    image: "https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?auto=format&fit=crop&q=80&w=800", // Placeholder
    path: "/news/gaura-purnima-2024"
  },
  {
    id: "default-2",
    day: "12",
    month: "अप्रैल",
    tag: "प्रवचन",
    title: "श्रीमद्भागवत कथा सप्ताह",
    description: "आगामी सप्ताह में वरिष्ठ वैष्णवों द्वारा श्रीमद्भागवत के प्रथम स्कंध पर विशेष चर्चा की जाएगी। सभी भक्त सादर आमंत्रित हैं।",
    image: "https://images.unsplash.com/photo-1604543411306-4447781f5791?auto=format&fit=crop&q=80&w=800", // Placeholder
    path: "/news/bhagwat-katha"
  },
  {
    id: "default-3",
    day: "05",
    month: "मई",
    tag: "सेवा",
    title: "अक्षय तृतीया चंदन यात्रा",
    description: "भगवान श्री श्री राधा गोविंद देव जी को भीषण गर्मी से राहत दिलाने के लिए 21 दिनों तक चलने वाली चंदन यात्रा का शुभारंभ होने जा रहा है।",
    image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=800", // Placeholder
    path: "/news/chandan-yatra"
  }
];

const TempleNews = () => {
  const [news, setNews] = useState(DEFAULT_NEWS); // Initialize with default data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${API_NODE_URL}slug/getbytype?type=News`, {
          credentials: "include",
        });
        const result = await response.json();
        
        if (result.status && result.data && result.data.length > 0) {
          const transformedNews = result.data.map(item => {
            const date = new Date(item.addedon || item.date);
            return {
              id: item._id,
              day: date.getDate().toString(),
              month: date.toLocaleString('hi-IN', { month: 'short' }),
              tag: item.tag1 || "न्यूज़",
              title: item.name,
              description: item.description || item.shortdesc || "",
              image: item.banner_img ? `${IMAGE_PATH}${item.banner_img}` : null,
              path: item.path || "#"
            };
          });
          setNews(transformedNews.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching news, staying with default data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className="py-[70px] px-[4%] bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-500 font-novaReg">समाचार लोड हो रहे हैं...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-[4%] bg-[#faf9f6]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="inline-block bg-primary/10 text-primary border border-primary/20 px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
              मंदिर समाचार
            </span>
            <h2 className="text-3xl md:text-4xl font-novaBold text-secondary leading-tight">
              नवीनतम <span className="text-primary">अपडेट और समाचार</span>
            </h2>
            <p className="text-gray-500 mt-4 font-novaReg">
              इस्कॉन नोएडा एक्सप्रेसवे की गतिविधियों और महत्वपूर्ण घोषणाओं से जुड़े रहें।
            </p>
          </div>
          <a 
            href="/news" 
            className="flex items-center gap-2 text-primary font-novaBold hover:gap-3 transition-all"
          >
            सभी समाचार देखें • View All <ArrowRight size={18} />
          </a>
        </div>

        {/* News Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 bg-secondary overflow-hidden">
                {item.image ? (
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                     No Image Available
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Date Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white rounded-lg px-2 py-1 text-center min-w-[45px] shadow-lg">
                    <div className="text-lg font-bold text-secondary leading-none">
                      {item.day}
                    </div>
                    <div className="text-[9px] font-bold text-gray-500 uppercase">
                      {item.month}
                    </div>
                  </div>
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-novaBold text-secondary mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <div 
                  className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-6 flex-grow font-novaReg"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
                <a
                  href={item.path}
                  className="inline-flex items-center gap-2 text-secondary font-novaSemi text-sm group/link hover:text-primary transition-colors"
                >
                  पूरा पढ़ें • Read More
                  <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
              
              <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TempleNews;