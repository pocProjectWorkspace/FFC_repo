import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const WelcomeMessage = () => {
  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#983a45' }}>
      {/* Consistent Pomegranate Overlay Effect */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      {/* Decorative Welcome/Community Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        {/* Welcome/community icons pattern */}
        <div className="absolute top-20 left-16 w-8 h-8">
          <Icon icon="lucide:users" className="text-white text-2xl rotate-12" />
        </div>
        <div className="absolute top-40 right-20 w-8 h-8">
          <Icon icon="lucide:heart" className="text-white text-2xl -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-24 w-8 h-8">
          <Icon icon="lucide:coffee" className="text-white text-2xl rotate-45" />
        </div>
        <div className="absolute bottom-20 right-32 w-8 h-8">
          <Icon icon="lucide:home" className="text-white text-2xl -rotate-30" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6">
          <Icon icon="lucide:star" className="text-white text-xl rotate-90" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6">
          <Icon icon="lucide:smile" className="text-white text-xl -rotate-45" />
        </div>
        <div className="absolute top-3/4 left-1/2 w-6 h-6">
          <Icon icon="lucide:handshake" className="text-white text-xl rotate-180" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-6 h-6">
          <Icon icon="lucide:graduation-cap" className="text-white text-xl rotate-45" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Icon icon="lucide:users" className="text-white text-lg" />
              <span className="text-white font-medium text-sm tracking-wide uppercase">
                Welcome Message
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Welcome to Our Community
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                <p>
                  We're delighted to welcome you to the GEMS Education community. We hope you enjoyed your 
                  GEMS Awareness Day experience and are excited to embark on your journey with one of the most 
                  dynamic education organisations in the world.
                </p>
                
                <p>
                  As part of this welcome, we're sharing something close to our hearts – a taste of 
                  <span className="font-semibold text-white"> Family First Café</span>.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-white">
                  <p className="italic text-white font-medium">
                    "Our vision is to create spaces where parents, children, and teachers can connect over 
                    fresh, wholesome food and exceptional coffee, fostering bonds that last a lifetime."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Visual Element */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Decorative Background */}
                <div className="absolute -inset-6 bg-white/10 backdrop-blur-sm rounded-3xl transform rotate-3 border border-white/20"></div>
                <div className="absolute -inset-6 bg-white/5 backdrop-blur-sm rounded-3xl transform -rotate-2 border border-white/10"></div>
                
                {/* Content Card */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                      <Icon icon="lucide:coffee" className="text-white text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">GEMS Network Integration</h3>
                    <p className="text-white/80 leading-relaxed">
                      Rolling out across the GEMS Education school network, each location serves as a 
                      vibrant hub for family bonding and community connection.
                    </p>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <Icon icon="lucide:heart" className="text-white text-xl" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};