import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const CreatingBondingMomentsSection = () => {
  const experiences = [
    {
      icon: "lucide:calendar",
      title: "Events",
      description: "Inspiring talks and workshops bringing families closer through stories, wisdom, and shared experiences.",
      path: "/events"
    },
    {
      icon: "lucide:puzzle",
      title: "Activations", 
      description: "Interactive, themed activities in our cafés designed to spark bonding, creativity, and togetherness.",
      path: "/activations"
    },
    {
      icon: "lucide:book-open",
      title: "Resources",
      description: "Books, quizzes, and activities to support family bonding and learning beyond the café.",
      path: "/resources"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pomegranate to-pomegranate-700">
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
            <Icon icon="lucide:sparkles" className="text-white" />
            <span className="text-white font-medium text-sm uppercase tracking-wide">
              Experiences
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Creating
          <br />
          Bonding Moments
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-white/90 text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Crafted with care, our experiences inspire family bonding, celebrate unity, and 
          strengthen connections through meaningful shared moments.
        </motion.p>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 h-full hover:bg-white/15 transition-all duration-300">
                <CardBody className="p-8 text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/15 rounded-full flex items-center justify-center">
                    <Icon icon={experience.icon} className="text-white text-2xl" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {experience.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/80 text-sm mb-6 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  {/* CTA Button */}
                  <Button
                    as={Link}
                    to={experience.path}
                    variant="flat"
                    className="bg-white/20 text-white border border-white/30 hover:bg-white/30"
                    radius="full"
                  >
                    Explore
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Theme Calendar Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Family First Café Theme Calendar
          </h3>
          
          <p className="text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Our Theme Calendar introduces monthly values guiding families. Each theme powers 
            Family First Café's events, activations, and resources—deepening bonds, sparking 
            unity, and inspiring meaningful shared experiences together.
          </p>

          <Button
            as={Link}
            to="/events"
            size="lg"
            variant="solid"
            className="bg-white text-pomegranate font-semibold px-8 py-6 hover:bg-rose-50 transition-all duration-300"
            radius="full"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
};