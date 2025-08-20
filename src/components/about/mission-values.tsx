import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const MissionValues = () => {
  const values = [
    {
      icon: "lucide:heart",
      title: "Family First",
      description: "Every decision we make prioritizes the strengthening of family bonds and connections."
    },
    {
      icon: "lucide:users",
      title: "Inclusive Community",
      description: "We welcome families from all backgrounds, creating spaces where everyone belongs."
    },
    {
      icon: "lucide:star",
      title: "Quality Excellence",
      description: "From our coffee to our service, we maintain the highest standards in everything we do."
    },
    {
      icon: "lucide:globe",
      title: "Global Impact",
      description: "Building stronger families to create stronger communities across the UAE and beyond."
    },
    {
      icon: "lucide:leaf",
      title: "Sustainable Future",
      description: "Responsible sourcing and practices that protect the world we're leaving for our children."
    },
    {
      icon: "lucide:sparkles",
      title: "Meaningful Moments",
      description: "Creating opportunities for families to connect, learn, and grow together every day."
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#983a45' }}>
      {/* Consistent Pomegranate Overlay Effect */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      {/* Decorative Mission/Values Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        {/* Mission/values icons pattern */}
        <div className="absolute top-20 left-16 w-8 h-8">
          <Icon icon="lucide:compass" className="text-white text-2xl rotate-12" />
        </div>
        <div className="absolute top-40 right-20 w-8 h-8">
          <Icon icon="lucide:target" className="text-white text-2xl -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-24 w-8 h-8">
          <Icon icon="lucide:flag" className="text-white text-2xl rotate-45" />
        </div>
        <div className="absolute bottom-20 right-32 w-8 h-8">
          <Icon icon="lucide:award" className="text-white text-2xl -rotate-30" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6">
          <Icon icon="lucide:heart" className="text-white text-xl rotate-90" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6">
          <Icon icon="lucide:star" className="text-white text-xl -rotate-45" />
        </div>
        <div className="absolute top-3/4 left-1/2 w-6 h-6">
          <Icon icon="lucide:sparkles" className="text-white text-xl rotate-180" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-6 h-6">
          <Icon icon="lucide:globe" className="text-white text-xl rotate-45" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
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
              <Icon icon="lucide:compass" className="text-white text-lg" />
              <span className="text-white font-medium text-sm tracking-wide uppercase">
                Our Foundation
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mission & Values
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              The core principles that guide everything we do at Family First Café
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div 
            className="text-center mb-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
              <motion.div
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Icon icon="lucide:target" className="text-white text-lg" />
                <span className="text-white font-medium text-sm tracking-wide uppercase">Our Mission</span>
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Building Connections That Last a Lifetime</h3>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed italic">
                "To create exceptional spaces where families can connect, learn, and grow together through 
                the simple pleasure of sharing quality food, beverages, and meaningful experiences that 
                strengthen bonds and build lasting memories."
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full group-hover:scale-105"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <Icon icon={value.icon} className="text-white text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                  <p className="text-white/80 leading-relaxed">{value.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action Section */}
          <motion.div
            className="mt-20 pt-16 border-t border-white/20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Experience Our Values in Action?
            </h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Visit one of our café locations and discover how we bring these values to life in every interaction, 
              every meal, and every moment you spend with us.
            </p>
          </motion.div>

          {/* Impact Statistics */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">Ethically Sourced Coffee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">Family Activities Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">Family Support Available</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};