import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const OurCommunitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-pomegranate-700 to-pomegranate">
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
              Purpose
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Community
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-white/90 text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Our Community unites families, students, and staff through loyalty programs, 
          initiatives, testimonials, and achievements—celebrating connection, kindness, and 
          shared growth at Family First Café.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button
            as={Link}
            to="/community"
            size="lg"
            variant="solid"
            className="bg-white text-pomegranate font-semibold px-8 py-6 hover:bg-rose-50 transition-all duration-300"
            radius="full"
          >
            Explore
          </Button>
        </motion.div>
      </div>
    </section>
  );
};