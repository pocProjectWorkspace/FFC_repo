import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const CoffeesHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image from local folder */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/public/coffees/coffee-hero-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-white">
              A menu that brings 
            </span>
            <br />
            <span className="text-rose-300" style={{ color: '#f3818b' }}>
              families together
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At Family First Café, our menu is crafted to nourish both body and connection. From specialty coffee 
            blends roasted locally for freshness, to wholesome meals and snacks, every product reflects our 
            values of quality, care, and togetherness.
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explore our wide selection of café favorites and discover unique Family First coffee blends—designed 
            to bring people closer, one cup at a time.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-12 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="text-white/70 text-sm mb-2">Discover our offerings</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon icon="lucide:chevron-down" className="text-white text-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};