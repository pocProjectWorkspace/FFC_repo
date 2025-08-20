import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const CoffeesCTA = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#983a45' }}>
      {/* Pomegranate Overlay */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Experience Our Coffee?
          </h2>
          
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Discover the stories behind every cup and find your perfect blend for meaningful moments with family and friends.
          </p>
          
          {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              className="bg-white font-semibold px-8 py-6 text-lg hover:bg-rose-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              style={{ backgroundColor: 'white', color: '#983a45' }}
              radius="lg"
              startContent={<Icon icon="lucide:shopping-cart" />}
            >
              Explore Our Blends in the Shop
            </Button>
            
            <Button 
              size="lg"
              variant="bordered"
              className="border-2 border-white text-white font-semibold px-8 py-6 text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              radius="lg"
              startContent={<Icon icon="lucide:map-pin" />}
            >
              Visit a Family First Café
            </Button>
         </div> */}

          {/* Interactive Features Mention */}
          <motion.div 
            className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon icon="lucide:qr-code" className="text-white text-3xl mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">QR Code Stories</h4>
                <p className="text-white/80 text-sm">Scan blend cards for brewing tutorials and family stories</p>
              </div>
              
              <div>
                <Icon icon="lucide:play-circle" className="text-white text-3xl mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Video Guides</h4>
                <p className="text-white/80 text-sm">Watch barista-led brewing tutorials for each blend</p>
              </div>
              
              <div>
                <Icon icon="lucide:smartphone" className="text-white text-3xl mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">App Integration</h4>
                <p className="text-white/80 text-sm">Scan-to-brew features and Kindness Passport rewards</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};