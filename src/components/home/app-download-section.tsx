import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const AppDownloadSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#983a45' }}>
      {/* Consistent Pomegranate Overlay Effect */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      {/* Decorative Tech/Digital Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        {/* Tech/digital icons pattern */}
        <div className="absolute top-20 left-16 w-8 h-8">
          <Icon icon="lucide:smartphone" className="text-white text-2xl rotate-12" />
        </div>
        <div className="absolute top-40 right-20 w-8 h-8">
          <Icon icon="lucide:wifi" className="text-white text-2xl -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-24 w-8 h-8">
          <Icon icon="lucide:qr-code" className="text-white text-2xl rotate-45" />
        </div>
        <div className="absolute bottom-20 right-32 w-8 h-8">
          <Icon icon="lucide:download" className="text-white text-2xl -rotate-30" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6">
          <Icon icon="lucide:heart" className="text-white text-xl rotate-90" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6">
          <Icon icon="lucide:coffee" className="text-white text-xl -rotate-45" />
        </div>
        <div className="absolute top-3/4 left-1/2 w-6 h-6">
          <Icon icon="lucide:bell" className="text-white text-xl rotate-180" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-6 h-6">
          <Icon icon="lucide:calendar" className="text-white text-xl rotate-45" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Coming Soon Badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Icon icon="lucide:smartphone" className="text-lg" style={{ color: '#f3818b' }} />
              <span className="text-white font-medium text-sm tracking-wide uppercase">
                Coming Soon
              </span>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Your Family's
              <br />
              <span style={{ color: '#f3818b' }}>Digital Companion</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              className="text-xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              The Family First Café app brings our community to your fingertips. 
              Book tables, discover events, meet Beanie our AI assistant, and earn 
              family rewards – all designed to enhance your connection experience.
            </motion.p>

            {/* Features List */}
            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                { icon: "lucide:calendar", text: "Easy table booking & event RSVP" },
                { icon: "lucide:heart", text: "Family rewards & Kindness Points" },
                { icon: "lucide:bot", text: "Chat with Beanie, our friendly AI" },
                { icon: "lucide:users", text: "Connect all family members" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon icon={feature.icon} className="text-white text-lg" />
                  </div>
                  <span className="text-white/90 font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Notify Me Button */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-white font-semibold px-8 py-4 text-lg hover:bg-rose-50 transition-all duration-300 shadow-xl hover:scale-105"
                style={{ backgroundColor: 'white', color: '#983a45' }}
                radius="lg"
              >
                <Icon icon="lucide:bell" className="text-xl mr-2" />
                Notify Me When Ready
              </Button>
              
              <Button
                size="lg"
                variant="bordered"
                className="border-2 border-white text-white font-semibold px-8 py-4 text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                radius="lg"
              >
                <Icon icon="lucide:play-circle" className="text-xl mr-2" />
                Watch Preview
              </Button>
            </motion.div>
          </motion.div>

          {/* App Preview Image Placeholder */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Glow Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl blur-2xl transform scale-110"></div>
              
              {/* App Preview Image Container */}
              <motion.div
                className="relative bg-white/10 backdrop-blur-sm p-4 rounded-3xl border border-white/20 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  {/* Actual App Preview Image */}
                  <img 
                    src="/app/Mobile-app.png" 
                    alt="Family First Café Mobile App Preview"
                    className="w-80 h-auto max-w-full drop-shadow-2xl"
                  />
                  
                  {/* Floating Feature Icons */}
                  <motion.div
                    className="absolute -top-3 -left-3 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <Icon icon="lucide:heart" className="text-white text-xl" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-3 -right-3 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                    animate={{ 
                      y: [0, 8, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  >
                    <Icon icon="lucide:coffee" className="text-white text-lg" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-1/2 -right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                    animate={{ 
                      x: [0, 6, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <Icon icon="lucide:bell" className="text-white text-sm" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};