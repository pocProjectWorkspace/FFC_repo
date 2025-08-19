import React from "react";
import { motion } from "framer-motion";
import { Button, Input } from "@heroui/react";
import { Icon } from "@iconify/react";

const EventsPage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#983a45' }}>
      {/* Pomegranate Overlay */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        <div className="absolute top-20 left-16 w-8 h-8">
          <Icon icon="lucide:calendar" className="text-white text-2xl rotate-12" />
        </div>
        <div className="absolute top-40 right-20 w-8 h-8">
          <Icon icon="lucide:party-popper" className="text-white text-2xl -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-24 w-8 h-8">
          <Icon icon="lucide:users" className="text-white text-2xl rotate-45" />
        </div>
        <div className="absolute bottom-20 right-32 w-8 h-8">
          <Icon icon="lucide:heart" className="text-white text-2xl -rotate-30" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6">
          <Icon icon="lucide:sparkles" className="text-white text-xl rotate-90" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6">
          <Icon icon="lucide:gift" className="text-white text-xl -rotate-45" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Icon */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/15 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto border border-white/20">
              <Icon icon="lucide:calendar-heart" className="text-white text-4xl" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Family Events
          </motion.h1>

          {/* Main Message */}
          <motion.p 
            className="text-2xl md:text-3xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Starting in September
          </motion.p>

          <motion.p 
            className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Subscribe to our newsletter for early bird notifications!
          </motion.p>

          {/* Newsletter Signup */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get Early Access to Our Events</h3>
            <p className="text-white/80 mb-8 leading-relaxed">
              Be the first to know about our exciting family events, workshops, and special celebrations. From pancake picnics to storytelling sessions, we're planning activities that bring families closer together.
            </p>
            
            {/* Newsletter Form */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email address"
                variant="bordered"
                radius="lg"
                className="flex-1"
                classNames={{
                  input: "text-white placeholder:text-white/60",
                  inputWrapper: "border-white/30 bg-white/10 backdrop-blur-sm hover:border-white/50 focus-within:border-white/70"
                }}
                startContent={<Icon icon="lucide:mail" className="text-white/60" />}
              />
              <Button 
                size="lg"
                className="bg-white font-semibold hover:bg-rose-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
                style={{ backgroundColor: 'white', color: '#983a45' }}
                radius="lg"
                endContent={<Icon icon="lucide:send" />}
              >
                Subscribe
              </Button>
            </div>
          </motion.div>

          {/* Upcoming Events Preview */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { icon: "lucide:coffee", title: "Pancake Picnics", desc: "Weekend family brunches" },
              { icon: "lucide:book-open", title: "Story Time", desc: "Interactive reading sessions" },
              { icon: "lucide:palette", title: "Family Crafts", desc: "Creative activities together" }
            ].map((event, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + (index * 0.1) }}
                viewport={{ once: true }}
              >
                <Icon icon={event.icon} className="text-white text-3xl mx-auto mb-4" />
                <h4 className="text-white font-bold text-lg mb-2">{event.title}</h4>
                <p className="text-white/70 text-sm">{event.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button 
              size="lg"
              className="bg-white font-semibold px-8 py-6 text-lg hover:bg-rose-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              style={{ backgroundColor: 'white', color: '#983a45' }}
              radius="lg"
              startContent={<Icon icon="lucide:map-pin" />}
            >
              Visit Our Cafés
            </Button>
            
            <Button 
              size="lg"
              variant="bordered"
              className="border-2 border-white text-white font-semibold px-8 py-6 text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              radius="lg"
              startContent={<Icon icon="lucide:instagram" />}
            >
              Follow Us for Updates
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;