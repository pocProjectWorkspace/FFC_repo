import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const CoffeeExperience = () => {
  const features = [
    {
      icon: "lucide:leaf",
      title: "Locally Roasted",
      description: "Our coffee is roasted locally here in the UAE to ensure maximum freshness"
    },
    {
      icon: "lucide:recycle",
      title: "Sustainable Sourcing",
      description: "Supporting sustainable sourcing practices and reducing our environmental footprint"
    },
    {
      icon: "lucide:coffee",
      title: "Quality Commitment",
      description: "Every cup reflects our commitment to quality and the values of togetherness"
    },
    {
      icon: "lucide:heart-handshake",
      title: "Community Focus",
      description: "Designed to bring people together across the GEMS Education network"
    }
  ];

  return (
    <section className="py-32 text-white relative overflow-hidden" style={{ backgroundColor: '#983a45' }}>
      {/* Consistent Pomegranate Overlay Effect */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      {/* Decorative Coffee/Experience Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        {/* Coffee/experience icons pattern */}
        <div className="absolute top-20 left-16 w-8 h-8">
          <Icon icon="lucide:coffee" className="text-white text-2xl rotate-12" />
        </div>
        <div className="absolute top-40 right-20 w-8 h-8">
          <Icon icon="lucide:leaf" className="text-white text-2xl -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-24 w-8 h-8">
          <Icon icon="lucide:recycle" className="text-white text-2xl rotate-45" />
        </div>
        <div className="absolute bottom-20 right-32 w-8 h-8">
          <Icon icon="lucide:heart-handshake" className="text-white text-2xl -rotate-30" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6">
          <Icon icon="lucide:star" className="text-white text-xl rotate-90" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6">
          <Icon icon="lucide:award" className="text-white text-xl -rotate-45" />
        </div>
        <div className="absolute top-3/4 left-1/2 w-6 h-6">
          <Icon icon="lucide:droplet" className="text-white text-xl rotate-180" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-6 h-6">
          <Icon icon="lucide:sun" className="text-white text-xl rotate-45" />
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
            duration: 14, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-white/15 backdrop-blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
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
              <Icon icon="lucide:coffee" className="text-white text-lg" />
              <span className="text-white font-medium text-sm tracking-wide uppercase">
                Coffee Excellence
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our Coffee Experience
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              From locally roasted beans to sustainable practices, every aspect of our coffee program 
              reflects our commitment to quality, community, and environmental responsibility.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 h-full group-hover:scale-105"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <Icon icon={feature.icon} className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Drip Coffee Highlight */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Icon icon="lucide:gift" className="text-white text-3xl" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Your Welcome Gift</h3>
                </div>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  As our special welcome gift, you've received a pack of Family First Café drip coffee bags – 
                  a simple, convenient way to enjoy barista-quality coffee anywhere.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon icon="lucide:check-circle" className="text-white text-xl mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Pre-measured & Fresh</h4>
                      <p className="text-white/80 text-sm">Freshly roasted ground coffee sealed for freshness</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon icon="lucide:check-circle" className="text-white text-xl mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1 text-white">No Equipment Required</h4>
                      <p className="text-white/80 text-sm">Just place over your cup and pour hot water</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon icon="lucide:check-circle" className="text-white text-xl mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Barista Quality</h4>
                      <p className="text-white/80 text-sm">Professional taste experience at home</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                  <Icon icon="lucide:coffee" className="text-white text-6xl mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2 text-white">Simple Brewing Steps</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Place drip bag over cup → Pour hot water slowly → Let aromas fill the room → Enjoy!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};