import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const WhyVisitSection = () => {
  const benefits = [
    {
      icon: "lucide:users",
      title: "Built for Families",
      description: "From high chairs to shared seating to playful zones."
    },
    {
      icon: "lucide:heart",
      title: "Heartfelt Coffee & Food", 
      description: "Signature blends and nutritious menus made fresh daily."
    },
    {
      icon: "lucide:home",
      title: "Community Anchors",
      description: "Located in schools and communities where you already gather."
    },
    {
      icon: "lucide:calendar",
      title: "Always Something Happening",
      description: "Regular events and daily bonding activities."
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
            Why Visit a Family First Café?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/15 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-white/20">
                <Icon icon={benefit.icon} className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-white/80 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <blockquote className="text-3xl md:text-4xl font-light text-white italic mb-6 leading-relaxed">
              "You don't need a special occasion to reconnect. You just need the right space."
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-white/30"></div>
              <span className="text-white font-medium text-sm">Family First Café Philosophy</span>
              <div className="w-12 h-px bg-white/30"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};