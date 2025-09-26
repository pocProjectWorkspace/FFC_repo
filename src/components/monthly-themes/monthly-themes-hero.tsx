import React from "react";
import { motion } from "framer-motion";

export const MonthlyThemesHero = () => {
  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/monthly-themes/hero.png" 
          alt="Monthly themes calendar"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Monthly Themes
          </h1>
          <p className="text-lg md:text-xl text-white/95 mb-4 leading-relaxed">
            At Family First Café, each month has a special theme designed to inspire families, strengthen bonds, 
            and encourage meaningful conversations. These themes guide our events, activations, and resources 
            — helping families grow together in values, habits, and skills.
          </p>
          <p className="text-lg text-white/90 mb-4">
            These themes are also in line with the Leadership Gemstones that our students follow within school hours.
          </p>
          <p className="text-lg text-white/90">
            Every month brings a new theme - discover what it means, why it matters and how your family can 
            bring it to life through everyday actions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};