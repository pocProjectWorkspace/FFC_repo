import React from "react";
import { motion } from "framer-motion";

export const ActivationsHero = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/activations/hero.png" 
          alt="Children playing together"
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
            Activations
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
            At Family First Café, we believe cafés are more than places to eat—they're spaces where families bond, 
            share, and grow together. That's why we've designed a yearly calendar of monthly themes, each 
            brought to life with family-friendly activations and events.
          </p>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
            Every month, our cafés host interactive activities—some playful, some reflective, all designed to help 
            families connect in meaningful ways. From creative challenges to community projects, there's always 
            something new to discover.
          </p>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Everyone is welcome—parents, kids, grandparents, and friends. Whether you join for a quick activity 
            or spend the whole afternoon, you'll always find ways to laugh, learn, and grow together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};