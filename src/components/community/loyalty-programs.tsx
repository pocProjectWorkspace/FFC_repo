import React from "react";
import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";

export const LoyaltyPrograms = () => {
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
          <h2 className="text-3xl font-bold text-white mb-2">Our Gifts</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white text-center mb-8">
              Our Loyalty Programs
            </h3>
            
            <p className="text-lg text-white/90 text-center mb-8 max-w-4xl mx-auto">
              At Family First Café, every visit is more than just coffee—it's a step toward stronger family connections. 
              Our Loyalty Program rewards you for being part of our community. Each purchase, activation, or event 
              you attend earns you stickers toward exclusive benefits. From free treats to special access at family events, 
              your loyalty is our way of celebrating your commitment to bonding, belonging, and togetherness.
            </p>
            
            <p className="text-lg text-white text-center mb-12">
              Join today and make every moment at Family First Café more rewarding—for you and your family.
            </p>

            {/* Loyalty Card Section */}
            <Card className="bg-pomegranate-700/40 border border-white/20">
              <CardBody className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src="/community/loyalty-card.png" 
                      alt="Family First Café Loyalty Card"
                      className="w-full max-w-sm mx-auto"
                    />
                  </div>
                  <div className="text-white">
                    <h4 className="text-3xl font-bold mb-4">Available at Cafes Now</h4>
                    <h5 className="text-2xl font-semibold mb-6">Your 9th Cup is Free!</h5>
                    
                    <p className="mb-4">
                      Sip, savor, and save with Family First Café. Collect a stamp with every 
                      coffee or tea, and your 9th cup is on us.
                    </p>
                    
                    <p className="mb-4">
                      Enjoy specialty coffee roasted locally for freshness and quality, and a 
                      thoughtful selection of organic teas.
                    </p>
                    
                    <p className="font-medium">
                      Pick up your loyalty card at any Family First Café location and make every 
                      visit a moment of family bonding.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};