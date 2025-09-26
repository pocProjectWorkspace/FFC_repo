import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Card, CardBody } from "@heroui/react";

export const DesignedForMomentsSection = () => {
  const features = [
    {
      icon: "solar:cup-star-linear",
      title: "FAMILY-FIRST SPACES",
      heading: "Thoughtfully Designed Cafés",
      description: "Welcoming spaces crafted for families, with cozy seating arrangements that encourage conversation and connection across all generations."
    },
    {
      icon: "lucide:heart",
      title: "QUALITY FOR EVERYONE",
      heading: "Premium Coffee & Cuisine",
      description: "Expertly crafted beverages and nutritious meals designed to satisfy palates across generations—from adventurous toddlers to discerning adults."
    },
    {
      icon: "solar:calendar-linear",
      title: "COMING SOON",
      heading: "Meaningful Activities",
      description: "Engaging programs and events that bring families together, fostering learning, creativity, and deeper bonds through shared experiences."
    },
    {
      icon: "lucide:users",
      title: "GROWING TOGETHER",
      heading: "Community Connection",
      description: "A vibrant community where families from diverse backgrounds come together, creating lasting friendships and support networks."
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#983a45' }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Designed for
            <br />
            Meaningful Moments
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Every aspect of Family First Café is thoughtfully crafted to encourage connection, 
            conversation, and the kind of memories that last a lifetime.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 h-full hover:bg-white/15 transition-all duration-300">
                <CardBody className="p-6 text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/15 rounded-full flex items-center justify-center">
                    <Icon icon={feature.icon} className="text-white text-2xl" />
                  </div>
                  
                  {/* Label */}
                  <p className="text-rose-300 text-xs font-semibold uppercase tracking-wide mb-3">
                    {feature.title}
                  </p>
                  
                  {/* Heading */}
                  <h3 className="text-white font-bold text-lg mb-3">
                    {feature.heading}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/80 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 max-w-3xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-white italic mb-4">
              "You don't need a special occasion to reconnect. 
              <br />
              You just need the right space."
            </blockquote>
            <p className="text-white/80 font-medium">
              Family First Café Philosophy
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};