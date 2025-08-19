import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const LocationsPage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#983a45' }}>
      {/* Pomegranate Overlay */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        <div className="absolute top-20 left-16 w-8 h-8">
          <Icon icon="lucide:map-pin" className="text-white text-2xl rotate-12" />
        </div>
        <div className="absolute top-40 right-20 w-8 h-8">
          <Icon icon="lucide:building" className="text-white text-2xl -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-24 w-8 h-8">
          <Icon icon="lucide:compass" className="text-white text-2xl rotate-45" />
        </div>
        <div className="absolute bottom-20 right-32 w-8 h-8">
          <Icon icon="lucide:map" className="text-white text-2xl -rotate-30" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Icon */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/15 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto border border-white/20">
              <Icon icon="lucide:map-pin" className="text-white text-4xl" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Upcoming Locations
          </motion.h1>

          {/* Main Message */}
          <motion.p 
            className="text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Check back here for our up and coming locations
          </motion.p>

          {/* Additional Info */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              We're working on bringing Family First Café to new communities across the UAE and beyond. Our mission is to create spaces where families can connect, share meals, and build lasting memories together.
            </p>
            <p className="text-white/70">
              Stay tuned for exciting announcements about our expansion plans!
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button 
              size="lg"
              className="bg-white font-semibold px-8 py-6 text-lg hover:bg-rose-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              style={{ backgroundColor: 'white', color: '#983a45' }}
              radius="lg"
              startContent={<Icon icon="lucide:map-pin" />}
            >
              Visit Our Current Cafés
            </Button>
            
            <Button 
              size="lg"
              variant="bordered"
              className="border-2 border-white text-white font-semibold px-8 py-6 text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              radius="lg"
              startContent={<Icon icon="lucide:bell" />}
            >
              Get Notified of New Locations
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;