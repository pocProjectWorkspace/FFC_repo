import React from "react";
import { motion } from "framer-motion";

export const ResourcesHero = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/resources/resources-hero.jpg"
          alt="Family reading together"
          className="w-full h-full object-cover"
        />
        {/* Uniform overlay for all hero sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            Resources
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
            Our Resources are designed to keep the spirit of Family First Café alive long after your visit. Explore 
            our hand-picked collection of children's books that celebrate family, values, and imagination. Dive into 
            fun and thoughtful quizzes that spark learning and reflection across all ages.
          </p>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
            Take on family challenges that bring everyone together, encouraging teamwork, kindness, and creativity.
          </p>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Whether at the café or at home, our resources inspire families to bond, grow, and enjoy meaningful 
            moments every single month.
          </p>
        </motion.div>
      </div>
    </section>
  );
};