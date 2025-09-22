import React from "react";
import { motion } from "framer-motion";

export const ResourcesHero = () => {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/resources/resources-hero.jpg"
          alt="Family reading together"
          className="h-full w-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto w-full"
        >
          {/* Content Box with Overlay Background */}
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 space-y-4">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Resources
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-white/95">
              Our Resources are designed to keep the spirit of Family First Café alive long after your visit. Explore 
              our hand-picked collection of children's books that celebrate family, values, and imagination. Dive into 
              fun and thoughtful quizzes that spark learning and reflection across all ages. Take on family 
              challenges that bring everyone together, encouraging teamwork, kindness, and creativity. Whether at 
              the café or at home, our resources inspire families to bond, grow, and enjoy meaningful moments 
              every single month.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};