import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const MissionSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#983a45' }}>
      {/* Pomegranate Overlay Effect */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      {/* Decorative Family & Dining Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        {/* Family/dining icons pattern */}
        <div className="absolute top-20 left-16 w-8 h-8">
          <Icon icon="lucide:users" className="text-white text-2xl rotate-12" />
        </div>
        <div className="absolute top-40 right-20 w-8 h-8">
          <Icon icon="lucide:utensils" className="text-white text-2xl -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-24 w-8 h-8">
          <Icon icon="lucide:home" className="text-white text-2xl rotate-45" />
        </div>
        <div className="absolute bottom-20 right-32 w-8 h-8">
          <Icon icon="lucide:heart-handshake" className="text-white text-2xl -rotate-30" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6">
          <Icon icon="lucide:baby" className="text-white text-xl rotate-90" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6">
          <Icon icon="lucide:coffee" className="text-white text-xl -rotate-45" />
        </div>
        <div className="absolute top-3/4 left-1/2 w-6 h-6">
          <Icon icon="lucide:users" className="text-white text-xl rotate-180" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-6 h-6">
          <Icon icon="lucide:heart" className="text-white text-xl rotate-45" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/15 backdrop-blur-sm rounded-full border border-white/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Icon icon="lucide:heart" className="text-rose-400 text-lg" style={{ color: '#f3818b' }} />
              <span className="text-white font-medium text-sm tracking-wide uppercase">
                Our Philosophy
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Why Family Bonding Matters
            </h2>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Left Column - Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                <p>
                  In today's fast-paced world, quality family time is harder to find. At Family First Café, we've created spaces where real conversations happen, where laughter fills the room, and where shared meals lead to stronger relationships.
                </p>
                
                <p>
                  Studies show that families who eat together regularly have improved communication, emotional resilience, and overall wellbeing. Our cafés are intentionally designed to support this — from our seating arrangements and shareable menus to our curated activities and events that encourage engagement.
                </p>
              </div>

              {/* Benefits Stats */}
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <motion.div 
                  className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Icon icon="lucide:trending-up" className="text-rose-400 text-3xl mx-auto mb-3" style={{ color: '#f3818b' }} />
                  <div className="text-2xl font-bold text-white mb-2">40%</div>
                  <div className="text-sm text-white/70">Improved Communication</div>
                </motion.div>
                
                <motion.div 
                  className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Icon icon="lucide:heart" className="text-rose-400 text-3xl mx-auto mb-3" style={{ color: '#f3818b' }} />
                  <div className="text-2xl font-bold text-white mb-2">60%</div>
                  <div className="text-sm text-white/70">Stronger Emotional Bonds</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/intro/family-dining.jpg" 
                  alt="Multi-generational family sharing a meal at Family First Café"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>

          {/* Quote Block */}
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="bg-white text-pomegranate-700 rounded-full p-4 shadow-lg" style={{ backgroundColor: 'white', color: '#983a45' }}>
                  <Icon icon="lucide:quote" className="text-2xl" />
                </div>
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-light text-white italic mb-6 leading-relaxed">
                "When we eat together, we grow together."
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-px bg-white/30"></div>
                <span className="text-white font-medium text-sm">Family First Café Philosophy</span>
                <div className="w-12 h-px bg-white/30"></div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg"
              className="bg-white font-semibold px-8 py-6 text-lg hover:bg-rose-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              style={{ backgroundColor: 'white', color: '#983a45' }}
              radius="lg"
              startContent={<Icon icon="lucide:calendar" />}
            >
              Join Our Family Events
            </Button>
            
            <Button 
              size="lg"
              variant="bordered"
              className="border-2 border-white text-white font-semibold px-8 py-6 text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              radius="lg"
              endContent={<Icon icon="lucide:arrow-right" />}
            >
              Explore All Activities
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};