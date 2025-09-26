import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const CafesHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.3), transparent), url('/cafes/cafe-hero-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Icon icon="lucide:map-pin" className="text-rose-300" />
            <span className="text-white font-medium text-sm uppercase tracking-wide">
              Find Your Café
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Our Cafés:</span>
            <br />
            <span className="text-rose-300">Spaces Made for</span>
            <br />
            <span className="text-rose-300">Togetherness</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Every Family First Café is created with one goal in mind: to bring families 
            closer. From our flagship locations in schools to future sites in malls and 
            community hubs, our cafés are vibrant, welcoming spaces that turn everyday 
            moments into meaningful memories.
          </motion.p>

          <motion.p
            className="text-base text-white/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Whether you're grabbing a morning Kindred coffee or settling in for a weekend family brunch, 
            you'll find that everything here is designed to support connection.
          </motion.p>
        </div>
      </div>
    </section>
  );
};