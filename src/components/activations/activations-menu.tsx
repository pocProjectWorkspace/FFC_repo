import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { activationsByAge } from "./activations-data";

interface ActivationsMenuProps {
  selectedAgeGroup: string;
}

export const ActivationsMenu: React.FC<ActivationsMenuProps> = ({ 
  selectedAgeGroup 
}) => {
  // Get activations for the selected age group
  const currentActivations = activationsByAge[selectedAgeGroup];
  
  if (!currentActivations) {
    return null; // Return nothing if no data for selected age group
  }

  return (
    <section className="py-16" style={{ backgroundColor: '#983a45' }}>
      <div className="container mx-auto px-4">
        {/* Everyday Bonds Button */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-pomegranate-800/50 text-white border border-white/20 hover:bg-pomegranate-800/70 transition-all px-8"
            startContent={<Icon icon="lucide:sparkles" className="text-lg" />}
          >
            Everyday Bonds
          </Button>
        </motion.div>

        {/* Title */}
        <motion.h2 
          className="text-4xl font-bold text-white text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Activations Menu
        </motion.h2>

        {/* Age Group Label */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-lg font-medium border border-white/20">
            <Icon icon="lucide:users" className="text-xl" />
            Age Group: {selectedAgeGroup} years
          </span>
        </motion.div>

        {/* Menu Grid - 3 columns */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Starters Column */}
          <motion.div 
            className="bg-pomegranate-700/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8 uppercase">
              Starters
            </h3>
            <div className="space-y-6">
              {currentActivations.starters.map((item, index) => (
                <div key={`starter-${index}`} className="pb-6">
                  <h4 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-white/90 text-sm leading-relaxed mb-2">
                    {item.description}
                  </p>
                  <p className="text-white/70 text-sm font-medium">
                    ({item.duration})
                  </p>
                  {index < currentActivations.starters.length - 1 && (
                    <div className="border-b border-white/10 mt-6"></div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mains Column */}
          <motion.div 
            className="bg-pomegranate-700/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8 uppercase">
              Mains
            </h3>
            <div className="space-y-6">
              {currentActivations.mains.map((item, index) => (
                <div key={`main-${index}`} className="pb-6">
                  <h4 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-white/90 text-sm leading-relaxed mb-2">
                    {item.description}
                  </p>
                  <p className="text-white/70 text-sm font-medium">
                    ({item.duration})
                  </p>
                  {index < currentActivations.mains.length - 1 && (
                    <div className="border-b border-white/10 mt-6"></div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Desserts Column */}
          <motion.div 
            className="bg-pomegranate-700/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8 uppercase">
              Desserts
            </h3>
            <div className="space-y-6">
              {currentActivations.desserts.map((item, index) => (
                <div key={`dessert-${index}`} className="pb-6">
                  <h4 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-white/90 text-sm leading-relaxed mb-2">
                    {item.description}
                  </p>
                  <p className="text-white/70 text-sm font-medium">
                    ({item.duration})
                  </p>
                  {index < currentActivations.desserts.length - 1 && (
                    <div className="border-b border-white/10 mt-6"></div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};