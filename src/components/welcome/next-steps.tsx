import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const NextSteps = () => {
  return (
    <section className="py-32 text-white relative overflow-hidden" style={{ backgroundColor: '#983a45' }}>
      {/* Consistent Pomegranate Overlay Effect */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      {/* Decorative Next Steps Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        {/* Next steps/journey icons pattern */}
        <div className="absolute top-20 left-16 w-8 h-8">
          <Icon icon="lucide:arrow-right" className="text-white text-2xl rotate-12" />
        </div>
        <div className="absolute top-40 right-20 w-8 h-8">
          <Icon icon="lucide:map-pin" className="text-white text-2xl -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-24 w-8 h-8">
          <Icon icon="lucide:external-link" className="text-white text-2xl rotate-45" />
        </div>
        <div className="absolute bottom-20 right-32 w-8 h-8">
          <Icon icon="lucide:rocket" className="text-white text-2xl -rotate-30" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6">
          <Icon icon="lucide:coffee" className="text-white text-xl rotate-90" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6">
          <Icon icon="lucide:heart" className="text-white text-xl -rotate-45" />
        </div>
        <div className="absolute top-3/4 left-1/2 w-6 h-6">
          <Icon icon="lucide:star" className="text-white text-xl rotate-180" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-6 h-6">
          <Icon icon="lucide:compass" className="text-white text-xl rotate-45" />
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
              <Icon icon="lucide:arrow-right" className="text-white text-lg" />
              <span className="text-white font-medium text-sm tracking-wide uppercase">
                What's Next
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Your Journey Begins Here
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              We invite you to explore more about Family First Café, our mission, and our upcoming 
              cafés across the GEMS network. Your coffee today is just the beginning.
            </p>
          </motion.div>

          {/* Main CTA Section */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Icon icon="lucide:coffee" className="text-white text-6xl mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">We Can't Wait to Welcome You</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  Follow the link below to learn more about our upcoming cafés across the GEMS network. 
                  Discover our full story, mission, and the exciting future we're building together.
                </p>
              </div>

              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-white text-pomegranate-700 hover:bg-white/90 font-semibold px-8 py-3 text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  startContent={<Icon icon="lucide:external-link" />}
                  onPress={() => {
                    window.open('https://www.familyfirstcafe.com/GAD', '_blank');
                  }}
                  style={{ color: '#983a45' }}
                >
                  Explore Family First Café
                </Button>
                
                <Button
                  size="lg"
                  variant="bordered"
                  className="font-semibold px-8 py-3 text-lg border-white/30 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  startContent={<Icon icon="lucide:map-pin" />}
                >
                  Find GEMS Locations
                </Button>
              </div> */}
            </div>
          </motion.div>

          {/* Closing Message */}
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Quote Marks */}
              <div className="absolute -top-4 -left-4 text-6xl text-white/20 font-serif">"</div>
              <div className="absolute -bottom-4 -right-4 text-6xl text-white/20 font-serif">"</div>
              
              {/* Main Quote */}
              <blockquote className="text-2xl md:text-3xl font-light italic text-white/90 leading-relaxed px-8 text-center">
                Here's to great coffee, meaningful moments, and a shared future together.
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};