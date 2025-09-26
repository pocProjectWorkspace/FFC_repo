import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export const OurMissionValuesSection = () => {
  const values = [
    {
      icon: "lucide:heart",
      title: "Family First",
      description: "Every decision we make prioritizes the strengthening of family bonds and connections."
    },
    {
      icon: "lucide:users",
      title: "Inclusive Community",
      description: "We welcome families from all backgrounds, creating spaces where everyone belongs."
    },
    {
      icon: "lucide:star",
      title: "Quality Excellence",
      description: "From our coffee to our service, we maintain the highest standards in everything we do."
    },
    {
      icon: "lucide:globe",
      title: "Global Impact",
      description: "Building stronger families to create stronger communities across the UAE and beyond."
    },
    {
      icon: "lucide:leaf",
      title: "Sustainable Future",
      description: "Responsible sourcing and practices that protect the world we're leaving for our children."
    },
    {
      icon: "lucide:sparkles",
      title: "Meaningful Moments",
      description: "Creating opportunities for families to connect, learn, and grow together every day."
    }
  ];

  return (
    <section className="py-20 relative" style={{ backgroundColor: '#983a45' }}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Icon icon="lucide:compass" className="text-white text-lg" />
            <span className="text-white font-medium text-sm uppercase tracking-wide">
              Our Mission
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Building Connections That Last a Lifetime
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed italic">
            "To create exceptional spaces where families can connect, learn, and grow together 
            through the simple pleasure of sharing quality food, beverages, and meaningful 
            experiences that strengthen bonds and build lasting memories."
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 h-full hover:bg-white/15 transition-all duration-300 group">
                <CardBody className="p-8 text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/15 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <Icon icon={value.icon} className="text-white text-2xl" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/80 leading-relaxed">
                    {value.description}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};