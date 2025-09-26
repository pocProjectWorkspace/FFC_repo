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
          className="text-4xl md:text-5xl font-bold text-white text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Family Bonding Matters
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              In today's fast-paced world, quality family time is harder to find. At 
              Family First Café, we've created spaces where real conversations 
              happen, where laughter fills the room, and where shared meals lead 
              to stronger relationships.
            </p>
            
            <p className="text-white/80 mb-8 leading-relaxed">
              Studies show that families who eat together regularly have 
              improved communication, emotional resilience, and overall 
              wellbeing. Our cafés are intentionally designed to support this — 
              from our seating arrangements and shareable menus to our curated 
              activities and events that encourage engagement.
            </p>

            {/* Stats */}
            <div className="flex gap-4 mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 flex-1">
                <CardBody className="text-center py-6">
                  <Icon icon="lucide:trending-up" className="text-white text-3xl mb-2" />
                  <p className="text-3xl font-bold text-white mb-1">40%</p>
                  <p className="text-white/80 text-sm">Improved Communication</p>
                </CardBody>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 flex-1">
                <CardBody className="text-center py-6">
                  <Icon icon="lucide:heart" className="text-white text-3xl mb-2" />
                  <p className="text-3xl font-bold text-white mb-1">60%</p>
                  <p className="text-white/80 text-sm">Stronger Emotional Bonds</p>
                </CardBody>
              </Card>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/home/family-eating-together.jpg" 
                alt="Family enjoying meal together"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 max-w-3xl mx-auto">
            <CardBody className="p-8 md:p-12">
              <Icon icon="lucide:quote" className="text-white/30 text-4xl mb-4" />
              <blockquote className="text-2xl md:text-3xl font-light text-white italic mb-4">
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
          className="text-center mt-12"
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