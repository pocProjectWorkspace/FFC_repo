import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const WhyCoffeeMatters = () => {
  const coreValues = [
    {
      icon: "lucide:heart",
      title: "Ethically Sourced",
      description: "All coffees are ethically sourced through trusted supply partners"
    },
    {
      icon: "lucide:flame",
      title: "Carefully Roasted", 
      description: "Roasted with care to highlight unique origin profiles"
    },
    {
      icon: "lucide:home",
      title: "Home & Café Ready",
      description: "Served in formats that support both café use and at-home brewing"
    },
    {
      icon: "lucide:message-circle",
      title: "Sparks Connection",
      description: "Designed to spark conversation, curiosity, and comfort through storytelling"
    }
  ];

  const brewingMethods = [
    {
      method: "Espresso-based drinks",
      blends: ["Kindred", "Ember", "Haven"],
      icon: "lucide:zap"
    },
    {
      method: "Drip/batch brew",
      blends: ["Roots (morning service)"],
      icon: "lucide:droplets"
    },
    {
      method: "Pour-over",
      blends: ["Bloom", "Single Origin Series"],
      icon: "lucide:coffee"
    },
    {
      method: "Turkish Coffee",
      blends: ["Dawn"],
      icon: "lucide:sun"
    },
    {
      method: "Arabic Coffee",
      blends: ["Unity"],
      icon: "lucide:star"
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#983a45' }}>
      {/* Pomegranate Overlay */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Why Our Coffee Matters */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Why Our Coffee Matters
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              Our coffee blends are not only delicious — they're deeply meaningful. Every name tells a story rooted in family, from the grounding nature of Roots to the welcoming embrace of Unity.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              We celebrate diversity, tradition, and the simple joy of time spent together with every cup we serve.
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/15 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <Icon icon={value.icon} className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/80 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Brewing Methods Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Brewing Methods at Family First Café
            </h3>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Each blend is carefully paired with specific brewing methods to bring out the best flavors and create perfect moments of connection
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Methods Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {brewingMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  {/* Method Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white/15 rounded-full p-3 group-hover:bg-white/25 transition-all duration-300">
                      <Icon icon={method.icon} className="text-white text-2xl" />
                    </div>
                    <h4 className="text-white font-bold text-lg flex-1">{method.method}</h4>
                  </div>
                  
                  {/* Blends List */}
                  <div className="space-y-3">
                    {method.blends.map((blend, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-rose-400" style={{ backgroundColor: '#f3818b' }}></div>
                        <span className="text-white/90 font-medium">{blend}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visual Coffee Flow */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-white mb-4">The Perfect Coffee Journey</h4>
                <p className="text-white/80">From bean to cup, every step is crafted for connection</p>
              </div>

              {/* Coffee Process Flow */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: "lucide:leaf", title: "Ethically Sourced", desc: "Premium beans" },
                  { icon: "lucide:flame", title: "Carefully Roasted", desc: "Perfect profiles" },
                  { icon: "lucide:coffee", title: "Expertly Brewed", desc: "Right method" },
                  { icon: "lucide:heart", title: "Shared Together", desc: "Family moments" }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 border border-white/20">
                      <Icon icon={step.icon} className="text-white text-2xl" />
                    </div>
                    <h5 className="text-white font-semibold text-sm mb-1">{step.title}</h5>
                    <p className="text-white/70 text-xs">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <blockquote className="text-3xl md:text-4xl font-light text-white italic mb-6 leading-relaxed">
              "Every blend tells a story rooted in family connection."
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-white/30"></div>
              <span className="text-white font-medium text-sm">Family First Café Coffee Philosophy</span>
              <div className="w-12 h-px bg-white/30"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};