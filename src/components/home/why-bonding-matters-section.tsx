import React from "react";
import { motion } from "framer-motion";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const WhyBondingMattersSection = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#983a45' }}>
      <div className="container mx-auto px-4">
        {/* Badge */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
            <Icon icon="lucide:heart" className="text-white" />
            <span className="text-white font-medium text-sm uppercase tracking-wide">
              Our Philosophy
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Family Bonding Matters
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-white/90 text-lg leading-relaxed">
              In today's fast-paced world, quality family time is harder to find. At 
              Family First Café, we've created spaces where real conversations 
              happen, where laughter fills the room, and where shared meals lead 
              to stronger relationships.
            </p>
            
            <p className="text-white/80 leading-relaxed">
              Studies show that families who eat together regularly have 
              improved communication, emotional resilience, and overall 
              wellbeing. Our cafés are intentionally designed to support this — 
              from our seating arrangements and shareable menus to our curated 
              activities and events that encourage engagement.
            </p>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Icon icon="lucide:users" className="text-rose-300 text-2xl mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">73%</div>
                <div className="text-sm text-white/70">Better Communication</div>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Icon icon="lucide:heart" className="text-rose-300 text-2xl mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">60%</div>
                <div className="text-sm text-white/70">Stronger Bonds</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Family Dining Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/intro/family-dining.jpg" 
                alt="Multi-generational family sharing a meal at Family First Café"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white/90 text-sm font-medium">
                  Families connecting over shared meals at Family First Café
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote Card - Now centered below the main content */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
            <CardBody className="p-8 text-center">
              <Icon icon="lucide:quote" className="text-white/50 text-3xl mb-4" />
              <blockquote className="text-xl md:text-2xl text-white italic mb-4">
                "When we eat together, we grow together."
              </blockquote>
              <p className="text-white/80 font-medium">
                — Family First Café Philosophy —
              </p>
            </CardBody>
          </Card>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            as={Link}
            to="/about"
            size="lg"
            variant="solid"
            className="bg-white text-pomegranate font-semibold px-8 py-6 hover:bg-rose-50 transition-all duration-300"
            radius="full"
          >
            Read More
          </Button>
        </motion.div>
      </div>
    </section>
  );
};