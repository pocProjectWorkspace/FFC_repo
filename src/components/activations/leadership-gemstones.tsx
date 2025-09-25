import React from "react";
import { motion } from "framer-motion";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

interface LeadershipGemstonesProps {
  className?: string;
}

export const LeadershipGemstones: React.FC<LeadershipGemstonesProps> = ({ 
  className = "" 
}) => {
  return (
    <section className={`py-12 ${className}`} style={{ backgroundColor: '#983a45' }}>
      {/* Background Pattern (optional) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-20 w-32 h-32">
          <Icon icon="lucide:gem" className="text-white text-[128px] rotate-12" />
        </div>
        <div className="absolute bottom-10 right-20 w-32 h-32">
          <Icon icon="lucide:sparkles" className="text-white text-[128px] -rotate-12" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Card Container */}
          <Card className="bg-pomegranate-700/30 border border-white/20 backdrop-blur-sm">
            <CardBody className="p-8 md:p-12">
              {/* Title with Icon */}
              <div className="text-center mb-8">
                <motion.div
                  className="inline-flex items-center gap-3 mb-4"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon icon="lucide:gem" className="text-white text-3xl" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Leadership Gemstones
                  </h2>
                  <Icon icon="lucide:gem" className="text-white text-3xl" />
                </motion.div>
                
                {/* Description */}
                <motion.p 
                  className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Write a letter to a family member. This could be someone they 
                  haven't seen for some time, or a reflection of time spent over the 
                  vacation etc.
                </motion.p>
              </div>
              
              {/* Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-8 overflow-hidden rounded-2xl"
              >
                <img 
                  src="/activations/kids-group.jpg" 
                  alt="Children participating in Leadership Gemstones activity"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
              
              {/* Additional Activity Ideas (Optional) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <Icon icon="lucide:mail" className="text-white/80 text-2xl mb-2 mx-auto" />
                    <p className="text-white/70 text-sm">Write Letters</p>
                  </div>
                  <div className="text-center">
                    <Icon icon="lucide:heart" className="text-white/80 text-2xl mb-2 mx-auto" />
                    <p className="text-white/70 text-sm">Share Memories</p>
                  </div>
                  <div className="text-center">
                    <Icon icon="lucide:users" className="text-white/80 text-2xl mb-2 mx-auto" />
                    <p className="text-white/70 text-sm">Connect Family</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Everyday Bonds Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Button
                  size="lg"
                  className="bg-white/20 text-white border-2 border-white/40 hover:bg-white/30 hover:border-white/60 transition-all px-8"
                  startContent={<Icon icon="lucide:sparkles" className="text-xl" />}
                  endContent={<Icon icon="lucide:arrow-right" className="text-lg" />}
                >
                  Everyday Bonds
                </Button>
              </motion.div>

              {/* Optional: Age Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center mt-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm">
                  <Icon icon="lucide:users" className="text-base" />
                  Recommended for ages 4-8
                </span>
              </motion.div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

// Export as default for easy importing
export default LeadershipGemstones;