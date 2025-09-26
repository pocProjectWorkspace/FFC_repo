import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export const OurCoffeesSection = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#983a45' }}>
      {/* Pomegranate Overlay */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Coffees
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Every blend in our collection tells a story of connection, heritage, and moments that matter. From the 
            balanced warmth of Kindred to the hospitality of Unity, our coffee brings families together one cup at a 
            time.
          </p>
          <p className="text-base text-white/80 max-w-2xl mx-auto mt-4">
            Crafted with care and roasted locally for freshness, each cup is more than just a drink—it's a reason to 
            pause, share, and enjoy meaningful moments together. Whether bold, smooth, or comforting, our 
            blends bring families closer, one sip at a time.
          </p>
        </motion.div>

        {/* Banner */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-white font-semibold text-xl text-center">
            Our branded offer is available in all cafes now!
          </p>
        </motion.div>

        {/* Warmth in Every Cup Section */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-white text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Warmth in Every Cup
          </motion.h3>
          <motion.p
            className="text-white/80 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            From rich espressos to creamy lattes, our hot drinks are crafted to bring families 
            together—one comforting sip at a time.
          </motion.p>

          {/* Coffee Types Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Espresso",
                description: "Bold Flavor, Pure Energy",
                image: "/coffees/espresso.jpg",
                icon: "solar:cup-hot-linear"
              },
              {
                name: "Americano",
                description: "Classic Coffee, Modern Style",
                image: "/coffees/americano.jpg",
                icon: "solar:cup-linear"
              },
              {
                name: "Classic Milk Drinks",
                description: "Creamy Comfort, Every Time",
                image: "/coffees/latte.jpg",
                icon: "solar:cup-star-linear"
              }
            ].map((coffee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardBody className="p-0">
                    <div 
                      className="aspect-square bg-cover bg-center"
                      style={{ 
                        backgroundImage: `url('${coffee.image}')` 
                      }}
                    >
                      <div className="w-full h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                        <Icon icon={coffee.icon} className="text-3xl text-white" />
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <h4 className="text-xl font-bold text-pomegranate mb-2">{coffee.name}</h4>
                      <p className="text-default-600 text-sm">{coffee.description}</p>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note */}
        <motion.p
          className="text-white/70 text-center text-sm italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Feel free to make enhancements on the menu design
        </motion.p>
      </div>
    </section>
  );
};