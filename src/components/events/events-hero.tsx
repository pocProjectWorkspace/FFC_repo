import React from "react";
import { motion } from "framer-motion";

export const EventsHero = () => {
  return (
    <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/events/events-hero.jpg"
          alt="Family making cookies together"
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
          {/* Content Box with Overlay Background - Made Longer */}
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-10 md:p-16 space-y-6">
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              Events
            </h1>

            {/* Description - Removed bold from "Bonding Talks" and "United in Action" */}
            <div className="space-y-4 text-white/95">
              <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                At Family First Café, our events are designed to spark connection, learning, and joy. From inspiring 
                speaker-led Bonding Talks that explore family values to creative partner-led experiences under United 
                in Action, each event strengthens relationships while celebrating culture, creativity, and community.
              </p>
              <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                Together, these moments transform cafés into hubs of shared stories, laughter, and lasting memories.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};