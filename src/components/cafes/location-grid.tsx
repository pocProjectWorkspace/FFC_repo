import React from "react";
import { motion } from "framer-motion";
import { Button, Card, CardBody, CardHeader, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

interface Location {
  id: number;
  name: string;
  type: string;
  emirate: string;
  address: string;
  image: string;
  description: string;
  fullDescription: string;
  hours: {
    weekdays: string;
    weekend: string;
  };
  features: string[];
  events: string[];
  highlight: string;
}

interface LocationGridProps {
  locations: Location[];
}

export const LocationGrid: React.FC<LocationGridProps> = ({ locations }) => {
  return (
    <section className="py-20" style={{ backgroundColor: '#983a45' }}>
      {/* Pomegranate Overlay */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer">
                <CardHeader className="p-0 relative overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={location.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Chip 
                      color={location.highlight === "Flagship Location" ? "primary" : location.highlight === "Coming Soon" ? "warning" : "success"}
                      variant="flat"
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm text-white border border-white/30"
                    >
                      {location.highlight}
                    </Chip>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </CardHeader>
                
                <CardBody className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{location.name}</h3>
                    <p className="text-sm text-white/70 mb-2 flex items-center gap-2">
                      <Icon icon="lucide:map-pin" className="text-rose-400" style={{ color: '#f3818b' }} />
                      {location.address}
                    </p>
                    <p className="text-white/80 leading-relaxed">{location.description}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <Icon icon="lucide:clock" className="text-rose-400" style={{ color: '#f3818b' }} />
                      <span>{location.hours.weekdays}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {location.features.slice(0, 3).map((feature, idx) => (
                        <Chip 
                          key={idx} 
                          size="sm" 
                          variant="flat" 
                          className="bg-white/20 text-white border border-white/30"
                        >
                          {feature}
                        </Chip>
                      ))}
                      {location.features.length > 3 && (
                        <Chip 
                          size="sm" 
                          variant="flat" 
                          className="bg-white/20 text-white border border-white/30"
                        >
                          +{location.features.length - 3} more
                        </Chip>
                      )}
                    </div>
                  </div>

                  <Button 
                    size="lg"
                    className="w-full bg-white font-semibold hover:bg-rose-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                    style={{ backgroundColor: 'white', color: '#983a45' }}
                    radius="lg"
                    endContent={<Icon icon="lucide:arrow-right" />}
                  >
                    View Location Details
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {locations.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Icon icon="lucide:search-x" className="text-6xl text-white/60 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No cafés found</h3>
            <p className="text-white/70">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};