import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export const OurBondingRootsSection = () => {
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
            Our Bonding Roots
          </h2>
          <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
            Family First Café was built on the belief that stronger families create stronger 
            communities. Guided by this vision, our foundation works to nurture connections, 
            inspire learning, and create meaningful shared experiences for families.
          </p>
        </motion.div>

        {/* Content Grid - Custom Layout */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* First Column - 2 rows */}
          <div className="flex flex-col gap-6">
            {/* The Vision */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 h-full hover:bg-white/15 transition-all duration-300">
                <CardBody className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Icon icon="lucide:eye" className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4">The Vision</h3>
                      <p className="text-white/90 leading-relaxed">
                        "To become the region's leading and most meaningful family café experience – 
                        where every visit fosters growth, empathy and community through food, play and presence."
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            {/* The Values */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 h-full hover:bg-white/15 transition-all duration-300">
                <CardBody className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Icon icon="lucide:heart" className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4">The Values</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-white font-semibold">Nourishment</h4>
                          <p className="text-white/80 text-sm">Wholesome food, student nutrition and culinary education</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">Connection</h4>
                          <p className="text-white/80 text-sm">Shared tables, family engagement events, community experiences</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">Learning</h4>
                          <p className="text-white/80 text-sm">Skills development (leadership, service, budgeting)</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">Kindness</h4>
                          <p className="text-white/80 text-sm">Integration of Jewels of Kindness values in everyday operation</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">Scalability</h4>
                          <p className="text-white/80 text-sm">Modular tiered approach for rapid network expansion</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>

          {/* Second Column - 3 rows */}
          <div className="flex flex-col gap-6">
            {/* The Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardBody className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Icon icon="lucide:target" className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4">The Mission</h3>
                      <p className="text-white/90 leading-relaxed">
                        "To create a space where family and friends come together through nourishing shared meals, 
                        stories and hands-on experiences led by students and boosted by education, sustainability and interaction."
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            {/* The Approach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardBody className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Icon icon="lucide:compass" className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4">The Approach</h3>
                      <p className="text-white/90 leading-relaxed">
                        "Offer a home away from home, designed for families to enjoy nourishing meals, 
                        quality drinks, and curated experiences that spark bonding and meaningful connection."
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            {/* The Experience */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 h-full hover:bg-white/15 transition-all duration-300">
                <CardBody className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Icon icon="lucide:users" className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4">The Experience</h3>
                      <p className="text-white/90 leading-relaxed">
                        "Families share food, stories, and laughter in a warm setting. 
                        Thoughtful menus and engaging activities transform simple moments into lasting memories and genuine togetherness."
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};