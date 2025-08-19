import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const features = [
  {
    icon: "lucide:coffee",
    highlight: "FAMILY-FIRST SPACES",
    title: "Thoughtfully Designed Cafés",
    description: "Welcoming spaces crafted for families, with cozy seating arrangements that encourage conversation and connection across all generations."
  },
  {
    icon: "lucide:heart",
    highlight: "QUALITY FOR EVERYONE", 
    title: "Premium Coffee & Cuisine",
    description: "Expertly crafted beverages and nutritious meals designed to delight every palate, from adventurous toddlers to discerning adults."
  },
  {
    icon: "lucide:calendar-heart", 
    highlight: "COMING SOON",
    title: "Meaningful Activities",
    description: "Engaging programs and events that bring families together, fostering learning, creativity, and deeper bonds through shared experiences."
  },
  {
    icon: "lucide:users",
    highlight: "GROWING TOGETHER",
    title: "Community Connection",
    description: "A vibrant community where families from diverse backgrounds come together, creating lasting friendships and support networks."
  }
];

export const FeatureTilesSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#983a45' }}>
      {/* Consistent Pomegranate Overlay Effect */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      {/* Decorative Café & Service Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        {/* Café/service icons pattern */}
        <div className="absolute top-20 left-16 w-8 h-8">
          <Icon icon="lucide:coffee" className="text-white text-2xl rotate-12" />
        </div>
        <div className="absolute top-40 right-20 w-8 h-8">
          <Icon icon="lucide:sparkles" className="text-white text-2xl -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-24 w-8 h-8">
          <Icon icon="lucide:heart" className="text-white text-2xl rotate-45" />
        </div>
        <div className="absolute bottom-20 right-32 w-8 h-8">
          <Icon icon="lucide:calendar-heart" className="text-white text-2xl -rotate-30" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6">
          <Icon icon="lucide:smartphone" className="text-white text-xl rotate-90" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6">
          <Icon icon="lucide:users" className="text-white text-xl -rotate-45" />
        </div>
        <div className="absolute top-3/4 left-1/2 w-6 h-6">
          <Icon icon="lucide:utensils" className="text-white text-xl rotate-180" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-6 h-6">
          <Icon icon="lucide:award" className="text-white text-xl rotate-45" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Icon icon="lucide:sparkles" className="text-rose-300 text-lg" />
            <span className="text-white font-medium text-sm tracking-wide uppercase">
              What Makes Us Special
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Designed for
            <br />
            <span className="text-rose-300">Meaningful Moments</span>
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Every aspect of Family First Café is thoughtfully crafted to encourage connection, 
            conversation, and the kind of memories that last a lifetime.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group-hover:-translate-y-2 hover:shadow-2xl">
                <CardBody className="p-8 text-center">
                  {/* Icon */}
                  <motion.div 
                    className="w-20 h-20 mx-auto mb-6 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/25 transition-colors duration-300 border border-white/20"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon icon={feature.icon} className="text-white text-3xl" />
                  </motion.div>
                  
                  {/* Highlight Badge */}
                  <div className="inline-block mb-4 px-3 py-1 bg-rose-400/20 backdrop-blur-sm rounded-full border border-rose-300/30">
                    <span className="text-rose-200 text-xs font-medium uppercase tracking-wide">
                      {feature.highlight}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-rose-200 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/80 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="text-center mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
        </motion.div>
      </div>
    </section>
  );
};