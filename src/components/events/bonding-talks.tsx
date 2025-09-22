import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const BondingTalks = () => {
  return (
    <section className="py-20 px-4 bg-pomegranate">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-pomegranate-600/30 backdrop-blur-sm rounded-2xl p-8 md:p-12"
        >
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
              <Icon 
                icon="solar:microphone-3-bold" 
                className="text-white text-4xl"
              />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Bonding Talks
          </h2>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image - Left Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group order-2 md:order-1"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/events/bonding-talks-speaker.jpg"
                  alt="Speaker at Bonding Talks event"
                  className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-6">
                <p className="text-white font-semibold">Discover Inspiring Speakers</p>
              </div>
            </motion.div>

            {/* Text Content - Right Side */}
            <div className="space-y-4 text-white/90 order-1 md:order-2">
              <p className="text-lg leading-relaxed">
                Join inspiring speaker events where renowned figures share insights on family bonding and explore themes like resilience, 
                respect, empathy, unity, and creativity, all part of our themed yearly calendar.
              </p>
              <p className="text-lg leading-relaxed">
                From masterclasses and interactive talks to panels and hands-on workshops, these experiences spark learning, connection, and 
                meaningful conversations for families that will strengthen bonds.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};