import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const BeaniePromoSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-primary-50 rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto flex items-center justify-center">
              <div className="relative w-full h-full">
                <img 
                  src="https://img.heroui.chat/image/ai?w=500&h=500&u=beanie-assistant" 
                  alt="Beanie AI Assistant" 
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 bg-rose/20 w-24 h-24 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 bg-primary/20 w-32 h-32 rounded-full blur-xl"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-default-900 mb-6">Meet Beanie, Your Family Assistant</h2>
            <p className="text-lg mb-6 text-default-700">
              Beanie is our AI-powered family assistant, designed to help you make the most of your family time. From suggesting activities based on your children's ages to recommending menu items that everyone will enjoy, Beanie is here to enhance your Family First experience.
            </p>
            
            <div className="bg-default-50 p-6 rounded-lg mb-6 border border-default-100">
              <h3 className="font-medium text-default-900 mb-2">Beanie can help you:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Icon icon="lucide:check-circle" className="text-primary mt-1" />
                  <span>Find age-appropriate activities for your children</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon icon="lucide:check-circle" className="text-primary mt-1" />
                  <span>Suggest menu items based on dietary preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon icon="lucide:check-circle" className="text-primary mt-1" />
                  <span>Recommend family bonding exercises</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon icon="lucide:check-circle" className="text-primary mt-1" />
                  <span>Book tables and register for events</span>
                </li>
              </ul>
            </div>
            
            <Button 
              color="primary" 
              size="lg"
              radius="full"
              startContent={<Icon icon="lucide:message-circle" />}
              className="font-medium"
            >
              Talk to Beanie
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};