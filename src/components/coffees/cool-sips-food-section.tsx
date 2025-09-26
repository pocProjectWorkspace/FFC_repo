import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export const CoolSipsFoodSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-pomegranate to-pomegranate-700">
      <div className="container mx-auto px-4">
        {/* Cool Sips Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Cool Sips, Fresh Moments
            </h2>
            <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">
              Refreshing, energizing, and perfect for every season. Our cold drinks are designed to 
              keep conversations flowing and connections growing.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {[
                {
                  name: "Iced Latte",
                  image: "/coffees/iced-latte.jpg",
                  icon: "solar:cup-linear"
                },
                {
                  name: "Iced Espresso",
                  image: "/coffees/iced-espresso.jpg",
                  icon: "solar:cup-hot-linear"
                }
              ].map((drink, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 group">
                    <CardBody className="p-0">
                      <div 
                        className="aspect-[4/3] bg-cover bg-center"
                        style={{ 
                          backgroundImage: `url('${drink.image}')` 
                        }}
                      >
                        <div className="w-full h-full bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                          <Icon icon={drink.icon} className="text-2xl text-white" />
                        </div>
                      </div>
                      <div className="p-6 text-center">
                        <h4 className="text-xl font-bold text-pomegranate">{drink.name}</h4>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Food Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Food
            </h2>
            <p className="text-white/80 text-center mb-12 max-w-3xl mx-auto">
              Wholesome meals crafted for families—nourishment that fuels connection, joy, and 
              meaningful moments at Family First Café.
            </p>

            {/* Food Items Grid with Images */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Pastries & Baked Goods",
                  description: "Fresh daily selections",
                  image: "/coffees/pastries.jpg",
                  icon: "solar:donut-bitten-linear"
                },
                {
                  name: "Sandwiches & Wraps",
                  description: "Nutritious and delicious",
                  image: "/coffees/sandwiches.jpg",
                  icon: "solar:chef-hat-linear"
                },
                {
                  name: "Family Sharing Platters",
                  description: "Perfect for gathering",
                  image: "/coffees/platters.jpg",
                  icon: "solar:dish-linear"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 group h-full">
                    <CardBody className="p-0">
                      <div 
                        className="aspect-[4/3] bg-cover bg-center"
                        style={{ 
                          backgroundImage: `url('${item.image}')` 
                        }}
                      >
                        <div className="w-full h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                          <Icon icon={item.icon} className="text-2xl text-white" />
                        </div>
                      </div>
                      <div className="p-6 text-center">
                        <h4 className="text-lg font-bold text-pomegranate mb-2">{item.name}</h4>
                        <p className="text-default-600 text-sm">{item.description}</p>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};