import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const ReadyToTransformSection = () => {
  return (
    <section className="py-20 relative" style={{ backgroundColor: '#983a45' }}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.9), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.95))` 
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Card Container */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-12 md:p-16">
            {/* Badge */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-white font-medium text-sm uppercase tracking-wide">
                  Where we are today
                </span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Ready to Transform Family Dining
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-white/90 text-center max-w-4xl mx-auto mb-16 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We are redefining family dining by blending food and beverages with 
              education and experiences. Our unique proposition creates a home 
              away from home where meals spark learning, laughter, and deeper 
              family bonds.
            </motion.p>

            {/* Two Columns */}
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Left Column - A Perfected Concept */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Icon Circle */}
                <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:lightbulb" className="text-white text-4xl" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  A Perfected Concept
                </h3>
                
                <p className="text-white/80 leading-relaxed">
                  Thoughtfully designed cafés that combine quality menus, engaging activities, and a 
                  welcoming atmosphere to nurture and enhance family connection and bonding.
                </p>
              </motion.div>

              {/* Right Column - Experience-Driven Dining */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Icon Circle */}
                <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:rocket" className="text-white text-4xl" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  Experience-Driven Dining
                </h3>
                
                <p className="text-white/80 leading-relaxed">
                  Every visit integrates nourishing food with interactive events and educational activations, 
                  transforming routine meals into opportunities for growth and togetherness.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};