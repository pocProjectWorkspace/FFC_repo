import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.4)), url('/home/family-bonding-hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Icon icon="lucide:heart" className="text-white" />
            <span className="text-white font-medium text-sm uppercase tracking-wide">
              Where Families Connect
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            More than a café
            <br />
            - <span className="text-rose-300">a home for</span>
            <br />
            <span className="text-rose-300">family bonding</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg text-white/90 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Family First Café is more than a café — it's a movement to strengthen family bonds 
            through everyday moments, shared meals, and meaningful experiences.
          </motion.p>

          <motion.p
            className="text-base text-white/80 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Welcome to Family First Café, where every cup of coffee and every shared meal is designed to bring 
            families closer. Our founder, Chairman Sunny Varkey, believes deeply in the importance of strong 
            families in building compassionate communities. Family First Café is our answer to the busy, 
            disconnected world — a place where parents, children, grandparents, and caregivers can all feel at home.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              as={Link}
              to="/community"
              size="lg"
              className="bg-white text-pomegranate font-semibold px-8 py-6 text-lg hover:bg-rose-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
              radius="full"
            >
              Join our Community
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};