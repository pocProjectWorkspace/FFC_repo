import React from "react";
import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";

export const RecognitionAchievements = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#983a45' }}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Our Pride</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white text-center mb-8">
              Recognition and Achievements
            </h3>
            
            <p className="text-lg text-white/90 text-center mb-8">
              At Family First Café, we celebrate the milestones that reflect our vision of strengthening families and 
              communities. Every achievement—big or small—reminds us of the impact we create when families 
              connect, students take part, and values come alive through daily experiences.
            </p>
            
            <p className="text-lg text-white text-center mb-12">
              We are proud to recognize the contributions of our team, our schools, and our community partners who 
              make Family First Café more than just a café—it's a movement of bonding, belonging, and growth.
            </p>

            {/* Students in Action Program */}
            <Card className="bg-pomegranate-700/40 border border-white/20">
              <CardBody className="p-8">
                <h4 className="text-2xl font-bold text-white mb-6">
                  Students in Action Program
                </h4>
                
                <div className="mb-6">
                  <img 
                    src="/community/students-action.jpg" 
                    alt="Students working in cafe"
                    className="w-full rounded-xl"
                  />
                </div>
                
                <p className="text-white/90">
                  In our first year, over 50 students took part in operational roles at Family First Cafés through the Duke 
                  of Edinburgh program. From welcoming guests to hosting activities, they gained real-life skills while 
                  fostering community spirit.
                </p>
              </CardBody>
            </Card>

            {/* Note for hidden sections */}
            <div className="mt-8 text-center">
              <p className="text-white/60 text-sm italic">
                More achievements and recognitions coming soon as we continue to grow our impact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};