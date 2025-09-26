import React from "react";
import { motion } from "framer-motion";

export const EventsHero = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/events/events-hero.jpg"
          alt="Family making cookies together"
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
            Events
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
            At Family First Café, our events are designed to spark connection, learning, and joy. From inspiring 
            speaker-led Bonding Talks that explore family values to creative partner-led experiences under United 
            in Action, each event strengthens relationships while celebrating culture, creativity, and community.
          </p>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Together, these moments transform cafés into hubs of shared stories, laughter, and lasting memories.
          </p>
        </motion.div>
      </div>
    </section>
  );
};