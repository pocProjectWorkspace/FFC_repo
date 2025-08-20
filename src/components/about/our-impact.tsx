import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const OurImpact = () => {
  const impactAreas = [
    {
      icon: "lucide:users",
      title: "Families Connected",
      description: "Building stronger family relationships through shared dining experiences",
      metric: "1000+",
      metricLabel: "families served"
    },
    {
      icon: "lucide:map-pin",
      title: "Community Presence",
      description: "Establishing gathering places in communities across Dubai and the UAE",
      metric: "5+",
      metricLabel: "locations planned"
    },
    {
      icon: "lucide:calendar-heart",
      title: "Memorable Moments",
      description: "Creating opportunities for families to connect through events and activities",
      metric: "50+",
      metricLabel: "events hosted"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#983a45' }}>
      {/* Consistent Pomegranate Overlay Effect */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      {/* Decorative Impact/Growth Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        {/* Impact/growth icons pattern */}
        <div className="absolute top-20 left-16 w-8 h-8">
          <Icon icon="lucide:trending-up" className="text-white text-2xl rotate-12" />
        </div>
        <div className="absolute top-40 right-20 w-8 h-8">
          <Icon icon="lucide:heart" className="text-white text-2xl -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-24 w-8 h-8">
          <Icon icon="lucide:users" className="text-white text-2xl rotate-45" />
        </div>
        <div className="absolute bottom-20 right-32 w-8 h-8">
          <Icon icon="lucide:globe" className="text-white text-2xl -rotate-30" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6">
          <Icon icon="lucide:calendar-heart" className="text-white text-xl rotate-90" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6">
          <Icon icon="lucide:map-pin" className="text-white text-xl -rotate-45" />
        </div>
        <div className="absolute top-3/4 left-1/2 w-6 h-6">
          <Icon icon="lucide:award" className="text-white text-xl rotate-180" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-6 h-6">
          <Icon icon="lucide:star" className="text-white text-xl rotate-45" />
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
              <Icon icon="lucide:trending-up" className="text-white text-lg" />
              <span className="text-white font-medium text-sm tracking-wide uppercase">
                Making a Difference
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Growing Impact
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Every family we serve, every connection we facilitate, and every moment we create contributes 
              to stronger communities across the UAE
            </p>
          </motion.div>

          {/* Impact Areas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {impactAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/20 hover:bg-white/15 transition-all duration-300 group-hover:scale-105"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <Icon icon={area.icon} className="text-white text-3xl" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{area.metric}</div>
                  <p className="text-sm text-white/70 mb-4 uppercase tracking-wider">{area.metricLabel}</p>
                  <h3 className="text-xl font-bold text-white mb-4">{area.title}</h3>
                  <p className="text-white/80 leading-relaxed">{area.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Expanding Impact Vision */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Building Tomorrow's Communities</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Our impact extends far beyond the walls of our cafés. We're creating a ripple effect that 
                strengthens family bonds, supports local communities, and builds a foundation for healthier, 
                more connected societies.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                With each new location, we bring our mission of family-first values to more communities, 
                creating spaces where meaningful connections flourish and lasting memories are made.
              </p>

              {/* Future Goals */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-lg font-semibold text-white mb-4">Our 2025 Goals:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-white/80">
                    <Icon icon="lucide:check-circle" className="text-white text-lg flex-shrink-0" />
                    <span>Open 5 new café locations across the UAE</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Icon icon="lucide:check-circle" className="text-white text-lg flex-shrink-0" />
                    <span>Host 200+ family bonding events and activities</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Icon icon="lucide:check-circle" className="text-white text-lg flex-shrink-0" />
                    <span>Serve 5,000+ families in our growing community</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <Icon icon="lucide:check-circle" className="text-white text-lg flex-shrink-0" />
                    <span>Launch family education programs in partnership with schools</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <Icon icon="lucide:heart-handshake" className="text-white text-5xl mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-4">Community Impact</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Weekly Family Events</span>
                  <span className="text-white font-semibold">12+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Community Partnerships</span>
                  <span className="text-white font-semibold">8+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Local Suppliers Supported</span>
                  <span className="text-white font-semibold">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Volunteer Hours Organized</span>
                  <span className="text-white font-semibold">200+</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Success Stories Preview */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <motion.div
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Icon icon="lucide:users" className="text-white text-lg" />
                <span className="text-white font-medium text-sm tracking-wide uppercase">Success Story</span>
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Real Families, Real Impact
              </h3>
            </div>

            <div className="max-w-3xl mx-auto">
              <blockquote className="text-xl italic text-white/90 mb-6 text-center">
                "Family First Café has transformed our family dinners. Our teenagers actually put down their phones 
                and engage in real conversations now. The activities they provide give us new ways to connect 
                and create memories together."
              </blockquote>
              <cite className="text-white font-medium block text-center">
                — Sarah M., Mother of Three from Dubai
              </cite>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Movement
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Be part of a community that believes in the power of family connection. 
              Visit us today and experience the difference that quality time together can make.
            </p>
            
            {/* Additional CTA Options */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/70 mb-4">Ready to make a difference in your community?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
                <motion.button
                  className="px-6 py-2 text-white hover:text-white/80 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon icon="lucide:briefcase" className="inline mr-2" />
                  Partnership Opportunities
                </motion.button>
                <motion.button
                  className="px-6 py-2 text-white hover:text-white/80 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon icon="lucide:heart" className="inline mr-2" />
                  Volunteer With Us
                </motion.button>
                <motion.button
                  className="px-6 py-2 text-white hover:text-white/80 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon icon="lucide:users" className="inline mr-2" />
                  Join Our Community
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};