import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const SingleOriginDiscovery = () => {
  const currentOrigin = {
    name: "Ethiopia Yirgacheffe",
    description: "Floral beginnings from the birthplace of coffee",
    notes: ["Jasmine", "Bergamot", "Lemon zest", "Tea-like finish"],
    brewMethod: "V60 pour-over",
    image: "/coffees/coffees-hero-4.jpg",
    region: "Yirgacheffe, Ethiopia",
    processing: "Washed",
    altitude: "1,700-2,200m"
  };

  const upcomingOrigins = [
    { name: "Colombia Huila", flag: "🇨🇴" },
    { name: "Guatemala Antigua", flag: "🇬🇹" },
    { name: "Kenya AA", flag: "🇰🇪" },
    { name: "Rwanda Bourbon", flag: "🇷🇼" }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#983a45' }}>
      {/* Pomegranate Overlay */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Single Origin Discovery Series
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Every month, we feature a new origin to celebrate learning, conversation, and the diversity of coffee
          </p>
        </motion.div>

        {/* Current Featured Origin */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 md:h-auto">
                <img 
                  src={currentOrigin.image} 
                  alt={currentOrigin.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                
                {/* Featured Badge */}
                <div className="absolute top-4 left-4">
                  <Chip 
                    color="warning"
                    variant="flat"
                    size="sm"
                    className="bg-white/20 backdrop-blur-sm text-white border border-white/30"
                    startContent={<Icon icon="lucide:star" />}
                  >
                    Featured This Month
                  </Chip>
                </div>
              </div>

              {/* Content Section */}
              <CardBody className="p-8 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {currentOrigin.name}
                  </h3>
                  <p className="text-white/80 italic text-lg">
                    "{currentOrigin.description}"
                  </p>
                </div>

                {/* Origin Details */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Icon icon="lucide:map-pin" className="text-rose-400" style={{ color: '#f3818b' }} />
                      Region
                    </h4>
                    <p className="text-white/80">{currentOrigin.region}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Icon icon="lucide:mountain" className="text-rose-400" style={{ color: '#f3818b' }} />
                      Altitude
                    </h4>
                    <p className="text-white/80">{currentOrigin.altitude}</p>
                  </div>
                </div>

                {/* Tasting Notes */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Icon icon="lucide:coffee" className="text-rose-400" style={{ color: '#f3818b' }} />
                    Tasting Notes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentOrigin.notes.map((note, idx) => (
                      <Chip 
                        key={idx} 
                        size="sm" 
                        variant="flat" 
                        className="bg-white/20 text-white border border-white/30"
                      >
                        {note}
                      </Chip>
                    ))}
                  </div>
                </div>

                {/* Brew Method */}
                <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Icon icon="lucide:droplets" className="text-rose-400" style={{ color: '#f3818b' }} />
                    Recommended Brew Method
                  </h4>
                  <p className="text-white/80">{currentOrigin.brewMethod}</p>
                </div>

                {/* CTA Buttons */}
                {/* <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    size="lg"
                    className="bg-white font-semibold hover:bg-rose-50 transition-all duration-300"
                    style={{ backgroundColor: 'white', color: '#983a45' }}
                    radius="lg"
                    startContent={<Icon icon="lucide:shopping-cart" />}
                  >
                    Try This Origin
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="bordered"
                    className="border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-300"
                    radius="lg"
                    startContent={<Icon icon="lucide:play" />}
                  >
                    Watch Brewing Guide
                  </Button>
                </div> */}
              </CardBody>
            </div>
          </Card>
        </motion.div>

        {/* Upcoming Origins */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Coming Soon</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {upcomingOrigins.map((origin, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                viewport={{ once: true }}
              >
                <div className="text-2xl mb-2 text-white font-bold">{origin.flag}</div>
                <p className="text-white font-semibold text-sm">{origin.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};