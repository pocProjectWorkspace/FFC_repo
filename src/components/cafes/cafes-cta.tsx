import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const CafesCTA = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#983a45' }}>
      {/* Pomegranate Overlay */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Find your nearest Family First Café and start your bonding journey today.
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <Button 
              size="lg"
              className="bg-white font-semibold px-8 py-6 text-lg hover:bg-rose-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              style={{ backgroundColor: 'white', color: '#983a45' }}
              radius="lg"
              startContent={<Icon icon="lucide:map-pin" />}
            >
              Explore Our Cafés
            </Button>
            
            <Button 
              size="lg"
              variant="bordered"
              className="border-2 border-white text-white font-semibold px-8 py-6 text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              radius="lg"
              startContent={<Icon icon="lucide:smartphone" />}
            >
              Download Our App
            </Button>

            <Button 
              size="lg"
              variant="flat"
              className="bg-white/15 backdrop-blur-sm text-white font-semibold px-8 py-6 text-lg hover:bg-white/25 transition-all duration-300 border border-white/30"
              radius="lg"
              startContent={<Icon icon="lucide:phone" />}
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};