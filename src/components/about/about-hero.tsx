import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden" style={{ backgroundColor: '#983a45' }}>
      {/* Consistent Pomegranate Overlay Effect */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      {/* Decorative About/Family Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        {/* Family/heart icons pattern */}
        <div className="absolute top-20 left-16 w-8 h-8">
          <Icon icon="lucide:heart" className="text-white text-2xl rotate-12" />
        </div>
        <div className="absolute top-40 right-20 w-8 h-8">
          <Icon icon="lucide:users" className="text-white text-2xl -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-24 w-8 h-8">
          <Icon icon="lucide:home" className="text-white text-2xl rotate-45" />
        </div>
        <div className="absolute bottom-20 right-32 w-8 h-8">
          <Icon icon="lucide:handshake" className="text-white text-2xl -rotate-30" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6">
          <Icon icon="lucide:coffee" className="text-white text-xl rotate-90" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6">
          <Icon icon="lucide:heart" className="text-white text-xl -rotate-45" />
        </div>
        <div className="absolute top-3/4 left-1/2 w-6 h-6">
          <Icon icon="lucide:users" className="text-white text-xl rotate-180" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-6 h-6">
          <Icon icon="lucide:star" className="text-white text-xl rotate-45" />
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full bg-white/10 backdrop-blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-white/15 backdrop-blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white/5 backdrop-blur-3xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Icon icon="lucide:heart" className="text-lg" />
            <span className="font-medium text-sm">Our Story</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A Movement to Bring{" "}
            <span className="text-white/90 block">
              Families Together
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Family First Café is more than a café. It is a vision brought to life by Chairman Sunny Varkey, 
            who believes that stronger families create stronger communities. In a world that moves too fast, 
            we offer a space to pause, share, and connect, one meal, one moment, and one conversation at a time.
          </motion.p>

 {/* Stats Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">3+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Café Locations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Families Connected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">4</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Signature Blends</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};