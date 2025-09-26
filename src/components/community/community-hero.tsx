import React from "react";
import { motion } from "framer-motion";

export const CommunityHero = () => {
  return (
    <section className="relative h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/community/hero.png" 
          alt="Family dining together at cafe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Community
          </h1>
          <p className="text-lg md:text-xl text-white/95 mb-4 leading-relaxed">
            At Family First Café, community is at the heart of everything we do. Our Community is where families, 
            students, staff, and partners come together to share experiences, values, and memories.
          </p>
          <p className="text-lg text-white/90 mb-4">
            Here, you can join our growing network by filling in a simple form to connect with us, stay updated, 
            and enjoy exclusive benefits. Discover how our Loyalty Cards reward your visits and participation, 
            while also creating meaningful opportunities to engage.
          </p>
          <p className="text-lg text-white/90">
            This is more than coffee—it's belonging, bonding, and building stronger families together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};