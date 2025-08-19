import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const KindredBlend = () => {
  const flavorNotes = [
    {
      icon: "lucide:coffee",
      name: "Rich Dark Chocolate",
      description: "Deep, luxurious cocoa notes that provide a robust foundation"
    },
    {
      icon: "lucide:heart",
      name: "Sweet Caramel",
      description: "Smooth caramel sweetness that adds warmth and comfort"
    },
    {
      icon: "lucide:grape",
      name: "Ripe Berries",
      description: "Subtle hints of berries that brighten each sip"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#983a45' }}>
      {/* Consistent Pomegranate Overlay Effect */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      {/* Decorative Coffee/Blend Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        {/* Coffee/blend icons pattern */}
        <div className="absolute top-20 left-16 w-8 h-8">
          <Icon icon="lucide:coffee" className="text-white text-2xl rotate-12" />
        </div>
        <div className="absolute top-40 right-20 w-8 h-8">
          <Icon icon="lucide:heart" className="text-white text-2xl -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-24 w-8 h-8">
          <Icon icon="lucide:grape" className="text-white text-2xl rotate-45" />
        </div>
        <div className="absolute bottom-20 right-32 w-8 h-8">
          <Icon icon="lucide:star" className="text-white text-2xl -rotate-30" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6">
          <Icon icon="lucide:cloud" className="text-white text-xl rotate-90" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6">
          <Icon icon="lucide:droplet" className="text-white text-xl -rotate-45" />
        </div>
        <div className="absolute top-3/4 left-1/2 w-6 h-6">
          <Icon icon="lucide:smile" className="text-white text-xl rotate-180" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-6 h-6">
          <Icon icon="lucide:sun" className="text-white text-xl rotate-45" />
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
              <Icon icon="lucide:heart" className="text-white text-lg" />
              <span className="text-white font-medium text-sm tracking-wide uppercase">
                Signature Blend
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Kindred Blend
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              A signature expression of warmth and connection, crafted to be the perfect companion 
              to meaningful conversations and shared moments.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            
            {/* Coffee Bag Visual */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Decorative Background */}
                <div className="absolute -inset-8 bg-white/10 backdrop-blur-sm rounded-3xl transform rotate-2 border border-white/20"></div>
                <div className="absolute -inset-8 bg-white/5 backdrop-blur-sm rounded-3xl transform -rotate-1 border border-white/10"></div>
                
                {/* Coffee Bag Mockup */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 text-white text-center">
                  <div className="mb-6">
                    <Icon icon="lucide:coffee" className="text-white text-6xl mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Kindred Blend</h3>
                    <p className="text-white/80">Family First Café</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <p className="text-sm text-white/80">Premium Drip Coffee Bags</p>
                    <p className="text-xs text-white/60 mt-1">Locally Roasted in UAE</p>
                  </div>
                </div>

                {/* Floating Steam Effect */}
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  animate={{ 
                    y: [-10, -20, -10],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <Icon icon="lucide:cloud" className="text-white/40 text-3xl" />
                </motion.div>
              </div>
            </motion.div>

            {/* Description Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Smooth, Balanced & Comforting
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  Kindred is crafted to be smooth, balanced, and comforting – the perfect companion 
                  to good conversation. Every sip tells a story of skilled farmers, expert roasters, 
                  and the joy of sharing coffee with others.
                </p>
              </div>

              {/* Story Quote */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-white">
                <blockquote className="text-lg italic text-white/90 mb-3">
                  "Every sip tells a story of skilled farmers, expert roasters, and the joy of sharing coffee with others."
                </blockquote>
                <cite className="text-white font-medium">— Family First Café</cite>
              </div>

              {/* Brewing Suggestion */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <Icon icon="lucide:lightbulb" className="text-white text-2xl" />
                  <h4 className="text-lg font-bold text-white">Perfect Pairing</h4>
                </div>
                <p className="text-white/80">
                  Best enjoyed during morning conversations, afternoon breaks, or evening reflections. 
                  Ideal for sharing moments with family and friends.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Flavor Notes */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {flavorNotes.map((note, index) => (
              <motion.div
                key={note.name}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <Icon icon={note.icon} className="text-white text-2xl" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{note.name}</h4>
                <p className="text-white/80 text-sm leading-relaxed">{note.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};