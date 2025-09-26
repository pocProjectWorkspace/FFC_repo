import React from "react";
import { motion } from "framer-motion";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

interface LeadershipGemstonesProps {
  selectedAgeGroup: string;
  className?: string;
}

export const LeadershipGemstones: React.FC<LeadershipGemstonesProps> = ({ 
  selectedAgeGroup,
  className = "" 
}) => {
  // Content data for each age group
  const contentByAgeGroup: Record<string, { description: string; image: string }> = {
    "4-8": {
      description: "Write a letter to a family member. This could be someone they haven't seen for some time, or a reflection of time spent over the vacation etc.",
      image: "/activations/bonding-1.png"
    },
    "9-13": {
      description: "Write a letter to a family member. This could be someone they haven't seen for some time, or a reflection of time spent over the vacation etc.",
      image: "/activations/bonding-2.png"
    },
    "14-18": {
      description: "Write a letter to a family member. This could be someone they haven't seen for some time, or a reflection of time spent over the vacation etc.",
      image: "/activations/bonding-3.png"
    }
  };

  // Get content for current age group (default to 4-8 if not found)
  const currentContent = contentByAgeGroup[selectedAgeGroup] || contentByAgeGroup["4-8"];

  return (
    <section className={`py-12 ${className}`} style={{ backgroundColor: '#983a45' }}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Main Container */}
          <div className="text-center">
            {/* Title */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Leadership Gemstones
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {currentContent.description}
            </motion.p>
            
            {/* Image Container */}
            <motion.div
              key={selectedAgeGroup} // Key prop to trigger re-animation on age group change
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-8 overflow-hidden rounded-2xl max-w-4xl mx-auto"
            >
              <img 
                src={currentContent.image}
                alt={`Children participating in Leadership Gemstones activity for ages ${selectedAgeGroup}`}
                className="w-full h-auto object-cover"
              />
            </motion.div>
            
            {/* Everyday Bonds Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button
                size="lg"
                className="bg-pomegranate-800/50 text-white border border-white/20 hover:bg-pomegranate-800/70 transition-all px-8"
                startContent={<Icon icon="lucide:sparkles" className="text-lg" />}
              >
                Everyday Bonds
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Export as default for easy importing
export default LeadershipGemstones;