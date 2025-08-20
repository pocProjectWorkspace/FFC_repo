import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const FounderMessage = () => {
  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#983a45' }}>
      {/* Consistent Pomegranate Overlay Effect */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      {/* Decorative Leadership/Quote Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        {/* Leadership/message icons pattern */}
        <div className="absolute top-20 left-16 w-8 h-8">
          <Icon icon="lucide:quote" className="text-white text-2xl rotate-12" />
        </div>
        <div className="absolute top-40 right-20 w-8 h-8">
          <Icon icon="lucide:message-circle-heart" className="text-white text-2xl -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-24 w-8 h-8">
          <Icon icon="lucide:crown" className="text-white text-2xl rotate-45" />
        </div>
        <div className="absolute bottom-20 right-32 w-8 h-8">
          <Icon icon="lucide:heart-handshake" className="text-white text-2xl -rotate-30" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6">
          <Icon icon="lucide:users" className="text-white text-xl rotate-90" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6">
          <Icon icon="lucide:globe" className="text-white text-xl -rotate-45" />
        </div>
        <div className="absolute top-3/4 left-1/2 w-6 h-6">
          <Icon icon="lucide:coffee" className="text-white text-xl rotate-180" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-6 h-6">
          <Icon icon="lucide:star" className="text-white text-xl rotate-45" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Icon icon="lucide:message-circle-heart" className="text-white text-lg" />
              <span className="text-white font-medium text-sm tracking-wide uppercase">
                From Our Founder
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              A Personal Message from Our Founder
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              The vision behind Family First Café and our commitment to strengthening families across the UAE
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Founder Image Side */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Decorative Background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl transform rotate-2"></div>
                <div className="absolute -inset-4 bg-gradient-to-tl from-white/5 to-transparent rounded-3xl transform -rotate-1"></div>
                
                {/* Main Image */}
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                  <img 
                    src="/about/founder/sunny-varkey.jpg" 
                    alt="Sunny Varkey, Chairman and Founder of GEMS Education" 
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>

                {/* Floating Quote Icon */}
                <motion.div
                  className="absolute -top-6 -right-6 w-16 h-16 bg-white text-pomegranate-700 rounded-full flex items-center justify-center shadow-xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  style={{ color: '#983a45' }}
                >
                  <Icon icon="lucide:quote" className="text-2xl" />
                </motion.div>
              </div>
            </motion.div>

            {/* Message Content Side */}
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Quote Content */}
              <div className="space-y-8">
                {/* Opening Quote Mark */}
                <div className="text-6xl md:text-7xl text-white/20 font-serif leading-none">"</div>
                
                {/* Main Quote Text */}
                <motion.div 
                  className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed -mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p className="italic">
                    Family is the foundation of everything we build in life. With Family First Café, we are investing not only in the UAE's families, but in the wellbeing and connection of communities around the world, creating spaces where bonds are strengthened and memories are made from the youngest age.
                  </p>
                  
                  <p className="italic">
                    This is a unique and powerful platform that nurtures relationships early, setting a new standard for family dining experiences. In line with our promise to see the potential in every family, our mission is to identify, cultivate, and fully support meaningful connections through the simple act of sharing a meal.
                  </p>
                  
                  <p className="italic font-medium">
                    This landmark initiative marks a transformative moment for family bonding in the UAE and globally.
                  </p>
                </motion.div>

                {/* Signature */}
                <motion.div 
                  className="pt-8 border-t border-white/20"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-lg font-semibold text-white mb-2">Sunny Varkey</div>
                  <div className="text-white/80 text-sm uppercase tracking-wider">Chairman & Founder</div>
                  <div className="text-white/70 text-sm mt-1">GEMS Education & Family First Café</div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                  className="pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                >
               </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Vision Statement */}
          <motion.div
            className="mt-20 pt-16 border-t border-white/20 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Icon icon="lucide:target" className="text-white text-lg" />
              <span className="text-white font-medium text-sm tracking-wide uppercase">Our Mission</span>
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Building Stronger Communities, One Family at a Time
            </h3>
            <p className="text-lg text-white/80 leading-relaxed">
              Through thoughtfully designed spaces and meaningful experiences, we're creating a global movement 
              that puts families first, fostering connections that last a lifetime and strengthen the fabric of our communities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};