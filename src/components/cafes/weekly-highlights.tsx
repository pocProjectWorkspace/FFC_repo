import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export const WeeklyHighlights = () => {
  const highlights = [
    {
      location: "FirstPoint School Café",
      event: "Family Quiz Brunch",
      time: "Every Saturday at 11 AM",
      icon: "lucide:brain",
      image: "/weekly-highlights/highlights-1.jpg", // Add this image to public/highlights/ folder
      description: "Test your knowledge while enjoying delicious brunch"
    },
    {
      location: "Dubai American Academy",
      event: "Kids' Barista Workshop",
      time: "Featuring Ember blend",
      icon: "lucide:coffee",
      image: "/weekly-highlights/highlights-2.jpg", // Add this image to public/highlights/ folder
      description: "Young coffee enthusiasts learn the art of brewing"
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#983a45' }}>
      {/* Pomegranate Overlay */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            This Week's Highlights
          </h2>
          <p className="text-lg text-white/80">
            Special events and activities happening at our cafés
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer overflow-hidden">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={highlight.image} 
                    alt={highlight.event}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                    <Icon icon={highlight.icon} className="text-white text-2xl" />
                  </div>

                  {/* Event Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
                      {highlight.event}
                    </h3>
                  </div>
                </div>

                <CardBody className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:map-pin" className="text-rose-400 text-sm" style={{ color: '#f3818b' }} />
                      <span className="text-white font-semibold text-lg">{highlight.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:clock" className="text-rose-400 text-sm" style={{ color: '#f3818b' }} />
                      <span className="text-white/80 font-medium">{highlight.time}</span>
                    </div>

                    <p className="text-white/70 leading-relaxed mt-3">
                      {highlight.description}
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};