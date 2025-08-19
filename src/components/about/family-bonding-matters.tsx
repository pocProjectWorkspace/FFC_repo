import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const FamilyBondingMatters = () => {
  const statistics = [
    { number: "85%", label: "of families who eat together report stronger relationships", icon: "lucide:heart" },
    { number: "3x", label: "more likely to develop better communication skills", icon: "lucide:message-circle" },
    { number: "92%", label: "of children from connected families show increased resilience", icon: "lucide:shield" },
    { number: "70%", label: "reduction in behavioral issues when families dine together regularly", icon: "lucide:trending-up" }
  ];

  return (
    <section className="py-32 text-white relative overflow-hidden" style={{ backgroundColor: '#983a45' }}>
      {/* Consistent Pomegranate Overlay Effect */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      {/* Decorative Research/Family Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        {/* Research/family bonding icons pattern */}
        <div className="absolute top-20 left-16 w-8 h-8">
          <Icon icon="lucide:bar-chart" className="text-white text-2xl rotate-12" />
        </div>
        <div className="absolute top-40 right-20 w-8 h-8">
          <Icon icon="lucide:heart" className="text-white text-2xl -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-24 w-8 h-8">
          <Icon icon="lucide:users" className="text-white text-2xl rotate-45" />
        </div>
        <div className="absolute bottom-20 right-32 w-8 h-8">
          <Icon icon="lucide:brain" className="text-white text-2xl -rotate-30" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6">
          <Icon icon="lucide:trending-up" className="text-white text-xl rotate-90" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6">
          <Icon icon="lucide:shield" className="text-white text-xl -rotate-45" />
        </div>
        <div className="absolute top-3/4 left-1/2 w-6 h-6">
          <Icon icon="lucide:message-circle" className="text-white text-xl rotate-180" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-6 h-6">
          <Icon icon="lucide:book-open" className="text-white text-xl rotate-45" />
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-white/10 backdrop-blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/15 backdrop-blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
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
              <Icon icon="lucide:bar-chart" className="text-white text-lg" />
              <span className="text-white font-medium text-sm tracking-wide uppercase">
                Research-Backed
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Family Bonding Matters
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Scientific research consistently shows the profound impact of family dining on child development, 
              relationship strength, and overall family wellbeing
            </p>
          </motion.div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group-hover:scale-105"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <Icon icon={stat.icon} className="text-white text-2xl" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <p className="text-white/80 text-sm leading-relaxed">{stat.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Research Content */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">The Science of Connection</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Studies from Harvard, Columbia University, and the National Center on Addiction consistently 
                demonstrate that families who eat together regularly experience stronger emotional bonds, 
                better communication, and improved mental health outcomes.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                At Family First Café, we've designed every aspect of our spaces to facilitate these meaningful 
                connections, from our comfortable seating arrangements to our conversation-starting activities.
              </p>

              {/* Research Sources */}
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-3">Research Sources:</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <Icon icon="lucide:check-circle" className="text-white text-sm" />
                    Harvard Medical School Family Studies
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="lucide:check-circle" className="text-white text-sm" />
                    Columbia University Research Center
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="lucide:check-circle" className="text-white text-sm" />
                    National Center on Addiction
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <Icon icon="lucide:quote" className="text-white text-4xl mx-auto mb-4 opacity-50" />
              </div>
              <blockquote className="text-xl italic text-white/90 mb-6 text-center">
                "The family meal is the most important hour of a child's day. It's where values are transmitted, 
                stories are told, and connections are strengthened."
              </blockquote>
              <cite className="text-white font-medium block text-center">
                — Dr. Anne Fishel, Harvard Medical School
              </cite>
            </motion.div>
          </motion.div>

          {/* How We Support Family Bonding */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20"
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
                <Icon icon="lucide:coffee" className="text-white text-lg" />
                <span className="text-white font-medium text-sm tracking-wide uppercase">Our Approach</span>
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                How Family First Café Supports Connection
              </h3>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Every detail in our cafés is intentionally designed to encourage family bonding and meaningful conversations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:home" className="text-white text-2xl" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Thoughtful Spaces</h4>
                <p className="text-white/80 text-sm">Comfortable seating arrangements that encourage face-to-face conversations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:gamepad-2" className="text-white text-2xl" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Interactive Activities</h4>
                <p className="text-white/80 text-sm">Conversation starters and activities designed for all ages</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:users" className="text-white text-2xl" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Family Programs</h4>
                <p className="text-white/80 text-sm">Regular events and workshops focused on strengthening family bonds</p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Experience the Difference
            </h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of families who have discovered the joy of meaningful connection at Family First Café
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-white text-pomegranate-700 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ color: '#983a45' }}
              >
                <Icon icon="lucide:calendar" className="inline mr-2" />
                Join Our Family Programs
              </motion.button>
              <motion.button
                className="px-8 py-4 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon icon="lucide:arrow-right" className="inline mr-2" />
                Explore All Activities
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};