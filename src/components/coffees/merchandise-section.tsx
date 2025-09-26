import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const MerchandiseSection = () => {
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
            Our Merchandise
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover our thoughtful merchandise—mugs, reusable water bottles, wristbands, and more. Each item is 
            designed to extend the spirit of Family First Café beyond our spaces. Available now in-store, with exciting 
            new products on the way.
          </p>
        </motion.div>

        {/* Mugs Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Mugs
            </h3>
            <p className="text-white/80 text-center mb-8 max-w-2xl mx-auto">
              A full range of mugs for both hot drinks and cold drinks, 
              different colors and different functionalities.
            </p>

            {/* Mug Display - Single Image */}
            <div className="relative max-w-2xl mx-auto">
              <div 
                className="aspect-[16/9] rounded-2xl bg-cover bg-center shadow-2xl"
                style={{ 
                  backgroundImage: `url('/coffees/mugs-collection.jpg')` 
                }}
              >
                <div className="w-full h-full bg-gradient-to-t from-black/40 to-transparent rounded-2xl flex items-end p-6">
                  <div className="text-white">
                    <h4 className="text-xl font-bold mb-1">Premium Collection</h4>
                    <p className="text-white/80 text-sm">Available in multiple colors and sizes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-rose-500/20 to-amber-500/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
              Coming Soon!
            </h3>
            <p className="text-white/90 text-center mb-8 max-w-3xl mx-auto">
              Our upcoming merchandise collection is designed with thoughtful messages that spark 
              connection and inspire family bonding. From everyday essentials to keepsakes, each piece 
              carries reminders to pause, share, and celebrate together.
            </p>

            {/* Coming Soon Items Grid with Images */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  item: "Love Muffin Collection",
                  description: "Adorable mugs and accessories with heartfelt messages",
                  image: "/coffees/love-muffin-merch.jpg",
                  icon: "lucide:heart"
                },
                {
                  item: "Here For You Series",
                  description: "Water bottles and totes promoting presence and support",
                  image: "/coffees/here-for-you-merch.jpg",
                  icon: "lucide:users"
                },
                {
                  item: "You Are Enough Line",
                  description: "Empowering merchandise celebrating self-worth",
                  image: "/coffees/you-are-enough-merch.jpg",
                  icon: "lucide:star"
                }
              ].map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 h-full overflow-hidden group">
                    <CardBody className="p-0">
                      <div 
                        className="aspect-[4/3] bg-cover bg-center"
                        style={{ 
                          backgroundImage: `url('${product.image}')` 
                        }}
                      >
                        <div className="w-full h-full bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300" />
                      </div>
                      <div className="p-6 text-center">
                        <div className="w-12 h-12 mx-auto mb-3 bg-pomegranate/10 rounded-full flex items-center justify-center">
                          <Icon icon={product.icon} className="text-pomegranate text-xl" />
                        </div>
                        <h4 className="text-lg font-bold text-pomegranate mb-2">{product.item}</h4>
                        <p className="text-default-600 text-sm">{product.description}</p>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-10">
              <Button
                size="lg"
                className="bg-white text-pomegranate font-semibold px-8 py-6 text-lg hover:bg-rose-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
                radius="full"
                startContent={<Icon icon="lucide:bell" />}
              >
                Get Notified When Available
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};