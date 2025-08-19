import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const OurStory = () => {
  const storyElements = [
    {
      icon: "lucide:lightbulb",
      title: "The Vision",
      description: "Family First Café was born from Chairman Sunny Varkey's belief that stronger families create stronger communities. In today's fast-paced world, we recognized the urgent need for spaces where families can truly connect.",
      highlight: "Core Belief"
    },
    {
      icon: "lucide:heart",
      title: "The Mission",
      description: "We're dedicated to creating environments where families can share meaningful meals, engage in real conversations, and build lasting memories together - away from digital distractions.",
      highlight: "Our Purpose"
    },
    {
      icon: "lucide:users",
      title: "The Approach",
      description: "Every aspect of our concept is thoughtfully designed around family bonding - from comfortable seating arrangements to conversation-starting activities and carefully curated experiences.",
      highlight: "Family-Centered"
    },
    {
      icon: "lucide:coffee",
      title: "The Experience",
      description: "More than just a café, we're creating a movement where ethically sourced coffee, quality food, and meaningful connections come together to strengthen the fabric of our community.",
      highlight: "Beyond Coffee"
    }
  ];

  return (
    <section className="py-32 text-white relative overflow-hidden" style={{ backgroundColor: '#983a45' }}>
      {/* Consistent Pomegranate Overlay Effect */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      {/* Decorative Story/Journey Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        {/* Story/journey icons pattern */}
        <div className="absolute top-20 left-16 w-8 h-8">
          <Icon icon="lucide:book-open" className="text-white text-2xl rotate-12" />
        </div>
        <div className="absolute top-40 right-20 w-8 h-8">
          <Icon icon="lucide:lightbulb" className="text-white text-2xl -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-24 w-8 h-8">
          <Icon icon="lucide:map" className="text-white text-2xl rotate-45" />
        </div>
        <div className="absolute bottom-20 right-32 w-8 h-8">
          <Icon icon="lucide:rocket" className="text-white text-2xl -rotate-30" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6">
          <Icon icon="lucide:clock" className="text-white text-xl rotate-90" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6">
          <Icon icon="lucide:star" className="text-white text-xl -rotate-45" />
        </div>
        <div className="absolute top-3/4 left-1/2 w-6 h-6">
          <Icon icon="lucide:heart" className="text-white text-xl rotate-180" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-6 h-6">
          <Icon icon="lucide:compass" className="text-white text-xl rotate-45" />
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 left-20 w-80 h-80 rounded-full bg-white/10 backdrop-blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 12, 
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
            delay: 3
          }}
        />
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
              <Icon icon="lucide:book-open" className="text-white text-lg" />
              <span className="text-white font-medium text-sm tracking-wide uppercase">
                Our Story
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A Vision for Stronger Families
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Family First Café represents more than a business concept—it's a movement to strengthen the bonds that matter most in our communities
            </p>
          </motion.div>

          {/* Story Elements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {storyElements.map((element, index) => (
              <motion.div
                key={element.title}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/20 hover:bg-white/15 transition-all duration-300 group-hover:scale-105"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Highlight Badge */}
                  <div className="inline-block mb-4 px-3 py-1 bg-white/20 rounded-full">
                    <span className="text-white text-xs font-medium uppercase tracking-wide">
                      {element.highlight}
                    </span>
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <Icon icon={element.icon} className="text-white text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{element.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/90 leading-relaxed text-lg">
                    {element.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Current Status Section */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Icon icon="lucide:calendar-check" className="text-white text-lg" />
                <span className="text-white font-medium text-sm tracking-wide uppercase">Where We Are Today</span>
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Family Dining
              </h3>
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                After extensive development and planning, our concept is fully formed and we have identified two strategic locations in Dubai. 
                Family First Café is poised to begin creating the spaces where families can reconnect and build stronger bonds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:check-circle" className="text-white text-3xl" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Concept Perfected</h4>
                <p className="text-white/80 leading-relaxed">
                  Our vision has been carefully refined into a comprehensive concept that prioritizes family connection through thoughtfully designed spaces, meaningful activities, and community-focused experiences.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:map-pin" className="text-white text-3xl" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Locations Ready</h4>
                <p className="text-white/80 leading-relaxed">
                  Two prime locations in Dubai have been carefully selected to launch our family-first experience, chosen specifically for their ability to serve and strengthen local communities.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Simple Mission Statement */}
          <motion.div
            className="text-center mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">More Than Just a Café</h3>
            <p className="text-xl text-white/90 leading-relaxed">
              Family First Café represents a fundamental shift in how we think about dining spaces. We're creating community anchors where families can escape the rush of daily life and focus on what truly matters: each other.
            </p>
          </motion.div>

          {/* Simple Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Vision for Stronger Families
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              As we prepare to open our doors, we invite you to be part of a movement that puts families first.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-white text-pomegranate-700 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ color: '#983a45' }}
              >
                <Icon icon="lucide:bell" className="inline mr-2" />
                Get Opening Updates
              </motion.button>
              <motion.button
                className="px-8 py-4 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon icon="lucide:heart" className="inline mr-2" />
                Learn About Our Mission
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};