import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const FamilyTableSection = () => {
  const menuCategories = [
    {
      title: "Hot Drinks",
      image: "/menu/hot-drinks.jpg",
      icon: "solar:cup-hot-linear"
    },
    {
      title: "Cold Drinks", 
      image: "/menu/cold-drinks.jpg",
      icon: "solar:cup-linear"
    },
    {
      title: "Merchandise",
      image: "/menu/merchandise.jpg",
      icon: "lucide:shopping-bag"
    },
    {
      title: "Food",
      image: "/menu/food.jpg",
      icon: "lucide:utensils"
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#983a45' }}>
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
            <Icon icon="lucide:coffee" className="text-white" />
            <span className="text-white font-medium text-sm uppercase tracking-wide">
              Menu
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          On the Family Table
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-white/90 text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Family First Café is where food, coffee, and connection bring families closer. Explore 
          our menu and discover experiences crafted to nourish, inspire, and strengthen family 
          bonds daily.
        </motion.p>

        {/* Menu Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {menuCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <CardBody className="p-0">
                  {/* Image Container */}
                  <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-rose-100 to-rose-50">
                    <div 
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        backgroundImage: `url('${category.image}')`,
                        backgroundColor: '#fef2f2'
                      }}
                    >
                      {/* Fallback Icon */}
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-100/80 to-rose-50/80">
                        <Icon icon={category.icon} className="text-pomegranate text-5xl" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <div className="p-4 text-center">
                    <h3 className="text-pomegranate font-bold">
                      {category.title}
                    </h3>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            as={Link}
            to="/coffees"
            size="lg"
            variant="solid"
            className="bg-white text-pomegranate font-semibold px-8 py-6 hover:bg-rose-50 transition-all duration-300"
            radius="full"
          >
            Explore
          </Button>
        </motion.div>
      </div>
    </section>
  );
};