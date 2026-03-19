"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { API_NODE_URL, IMAGE_PATH } from "@/configs/config";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

// --- ISKCON Default Events Data ---
const DEFAULT_EVENTS = [
  {
    _id: "def-1",
    day: "26",
    month: "अगस्त",
    tag: "महा-महोत्सव",
    title: "श्री कृष्ण जन्माष्टमी",
    desc: "भगवान श्री कृष्ण का प्राकट्य दिवस भव्य अभिषेक, कीर्तन और छप्पन भोग के साथ मनाया जाएगा।",
    time: "पूरे दिन",
    location: "मुख्य मंदिर हॉल",
    image: "https://images.unsplash.com/photo-1578403040944-39e7667ca02f?auto=format&fit=crop&q=80&w=800",
    path: "/event/janmashtami",
    isDefault: true
  },
  {
    _id: "def-2",
    day: "11",
    month: "सितंबर",
    tag: "विशेष पर्व",
    title: "श्री राधाष्टमी महोत्सव",
    desc: "हमारी स्वामिनी श्रीमती राधारानी का आविर्भाव दिवस। विशेष पुष्प बंगला और चरणों के दर्शन का अवसर।",
    time: "12:00 PM",
    location: "मंदिर प्रांगण",
    image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=800",
    path: "/event/radhashtami",
    isDefault: true
  },
  {
    _id: "def-3",
    day: "18",
    month: "अक्टूबर",
    tag: "कार्तिक मास",
    title: "दामोदर दीपदान महोत्सव",
    desc: "अत्यंत शुभ कार्तिक मास का प्रारंभ। प्रतिदिन संध्या काल में भगवान को दीप दान करने का सौभाग्य।",
    time: "07:00 PM",
    location: "दीपदान वेदी",
    image: "https://images.unsplash.com/photo-1511130328761-090f7797745b?auto=format&fit=crop&q=80&w=800",
    path: "/event/damodar-ashtakam",
    isDefault: true
  }
];

const TempleEvents = () => {
  const [events, setEvents] = useState(DEFAULT_EVENTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${API_NODE_URL}slug/getbytype?type=Event`);
        const result = await response.json();
        
        if (result.status && result.data && result.data.length > 0) {
          const transformedEvents = result.data.map(event => {
            const eventDate = new Date(event.date);
            return {
              _id: event._id,
              day: eventDate.getDate().toString(),
              month: eventDate.toLocaleString('hi-IN', { month: 'long' }),
              tag: event.tag1 || "महोत्सव",
              title: event.name,
              desc: event.shortdesc || "",
              time: event.param1 || "TBA",
              location: event.param2 || "मुख्य मंदिर",
              image: event.banner_img ? `${IMAGE_PATH}${event.banner_img}` : null,
              path: event.path || `/event/${event._id}`,
              isDefault: false
            };
          });
          setEvents(transformedEvents.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching events, showing defaults:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-[4%] bg-[#fffcf7]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-500 font-novaReg">उत्सवों की सूची लोड हो रही है...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-[4%] bg-[#fffcf7] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="inline-block bg-primary/10 text-primary border border-primary/20 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Upcoming Festivals
            </span>
            <h2 className="text-3xl md:text-5xl font-novaBold text-secondary leading-tight">
              वैष्णव <span className="text-primary">पर्व एवं उत्सव</span>
            </h2>
            <div className="w-20 h-1.5 bg-primary mt-4 rounded-full"></div>
          </div>
          <Link 
            href="/event" 
            className="group flex items-center gap-2 text-secondary font-novaBold hover:text-primary transition-all underline underline-offset-8 decoration-primary/30"
          >
            सभी उत्सव देखें <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event._id}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
            >
              {/* Image Banner */}
              <div className="relative h-52 overflow-hidden">
                <Image 
                  src={event.image || "https://images.unsplash.com/photo-1604543411306-4447781f5791"}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized={event.isDefault}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-2 text-center min-w-[60px] shadow-xl">
                  <div className="text-xl font-novaBold text-primary leading-none">
                    {event.day}
                  </div>
                  <div className="text-[10px] font-bold text-secondary uppercase mt-1">
                    {event.month}
                  </div>
                </div>

                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {event.tag}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-xl font-novaBold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-1">
                  {event.title}
                </h4>
                
                <p className="text-gray-500 text-sm font-novaReg line-clamp-2 mb-6 flex-grow">
                  {event.desc}
                </p>

                {/* Info List */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-gray-600 font-novaSemi">
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-primary">
                      <Clock size={16} />
                    </div>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 font-novaSemi">
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-primary">
                      <MapPin size={16} />
                    </div>
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* THE PARTICULAR BUTTON */}
                <Link
                  href={event.path}
                  className="w-full py-4 bg-secondary text-white rounded-2xl font-novaBold text-sm flex items-center justify-center gap-2 group/btn hover:bg-primary transition-all shadow-lg shadow-secondary/10 hover:shadow-primary/20 active:scale-[0.98]"
                >
                  विवरण देखें • View Details
                  <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TempleEvents;