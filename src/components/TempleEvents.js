"use client";
import React, { useState, useEffect } from "react";
import { API_NODE_URL, IMAGE_PATH } from "@/configs/config";


const TempleEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${API_NODE_URL}slug/getbytype?type=Event`);
        const result = await response.json();
        console.log("TempleEvents API Response:", result);
        if (result.status && result.data) {
          const transformedEvents = result.data.map(event => {
            const eventDate = new Date(event.date);
            return {
              day: eventDate.getDate().toString(),
              month: eventDate.toLocaleString('hi-IN', { month: 'long' }),
              tag: event.tag1 || "महोत्सव",
              title: event.name,
              desc: event.shortdesc || "",
              description: event.description || "",
              meta: `⏰ ${event.param1 || ""}  📍 ${event.param2 || "मुख्य मंदिर"}`,
              image: event.featured_img ? `${IMAGE_PATH}${event.featured_img}` : null
            };
          });
          setEvents(transformedEvents.slice(0, 3)); // Only show top 3 for the section
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <section className="py-[70px] px-[4%] bg-quinary">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary mx-auto"></div>
          <p className="mt-4 text-primary">उत्सव लोड हो रहे हैं...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-[70px] px-[4%] bg-quinary">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary/20 text-secondary border border-secondary px-4 py-1 rounded-full text-xs font-semibold mb-3">
            आगामी उत्सव
          </span>
          <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold text-primary mb-3">
            वैष्णव पर्व एवं उत्सव
          </h2>
          <div className="w-20 h-1 bg-tertiary mx-auto rounded-full"></div>
        </div>

        {/* Events Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition hover:-translate-y-2"
            >
              {/* Date & Image Banner */}
              <div className="relative h-48 bg-secondary overflow-hidden group">
                {event.image && (
                  <Image 
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white rounded-md px-3 py-1 text-center min-w-[55px] shadow-lg">
                    <div className="text-lg font-extrabold text-secondary leading-none">
                      {event.day}
                    </div>
                    <div className="text-[10px] font-semibold text-quaternary uppercase">
                      {event.month}
                    </div>
                  </div>
                  <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-[11px] font-bold border border-primary/20 backdrop-blur-sm shadow-sm leading-none">
                    {event.tag}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <h4 className="text-sm font-bold text-primary mb-2">
                  {event.title}
                </h4>
                <div 
                  className="text-[13px] text-quaternary leading-relaxed line-clamp-2 mb-3"
                  dangerouslySetInnerHTML={{ __html: event.description || event.desc }}
                />
                <div className="text-[12px] text-secondary font-semibold">
                  {event.meta}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <a
            href="/event"
            className="bg-secondary hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            📅 सभी उत्सव देखें
          </a>
        </div>
      </div>
    </section>
  );
};

export default TempleEvents;