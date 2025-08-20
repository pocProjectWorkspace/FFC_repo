import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const backgroundImages = [
  {
    url: "/cafes/cafe1.jpg",
    alt: "Family enjoying meals together at Family First Café"
  },
  {
    url: "/cafes/cafe2.jpg", 
    alt: "Children and parents in our welcoming café space"
  },
  {
    url: "/cafes/cafe3.jpg",
    alt: "Community connections at Family First Café"
  }
];

export const CafesHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % backgroundImages.length
    );
  };

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* BACKGROUND IMAGE WITH INTEGRATED OVERLAY EFFECT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `
              linear-gradient(
                to right, 
                rgba(0, 0, 0, 0.4), 
                rgba(0, 0, 0, 0.1), 
                rgba(0, 0, 0, 0.3)
              ),
              linear-gradient(
                to bottom, 
                rgba(152, 58, 69, 0.25), 
                transparent, 
                rgba(152, 58, 69, 0.2)
              ),
              url('${backgroundImages[currentImageIndex].url}')
            `,
            zIndex: 5
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
      
      {/* Navigation Controls - VERY HIGH Z-INDEX */}
      <div className="absolute top-1/2 left-6 -translate-y-1/2 hidden md:block" style={{ zIndex: 100 }}>
        <Button
          isIconOnly
          variant="flat"
          color="default"
          radius="full"
          className="bg-black/50 backdrop-blur-sm border-white/30 text-white hover:bg-black/70 transition-all duration-300 shadow-lg"
          onPress={goToPrevious}
          aria-label="Previous image"
        >
          <Icon icon="lucide:chevron-left" className="text-xl" />
        </Button>
      </div>
      
      <div className="absolute top-1/2 right-6 -translate-y-1/2 hidden md:block" style={{ zIndex: 100 }}>
        <Button
          isIconOnly
          variant="flat"
          color="default"
          radius="full"
          className="bg-black/50 backdrop-blur-sm border-white/30 text-white hover:bg-black/70 transition-all duration-300 shadow-lg"
          onPress={goToNext}
          aria-label="Next image"
        >
          <Icon icon="lucide:chevron-right" className="text-xl" />
        </Button>
      </div>

      {/* Slide Indicators - VERY HIGH Z-INDEX */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3" style={{ zIndex: 100 }}>
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImageIndex === index 
                ? 'bg-white shadow-lg' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content - VERY HIGH Z-INDEX */}
      <div className="relative container mx-auto px-4 py-20" style={{ zIndex: 50 }}>
        <div className="max-w-4xl">
          {/* Brand Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-black/70 backdrop-blur-sm rounded-full border border-white/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Icon icon="lucide:map-pin" className="text-rose-400 text-lg" style={{ color: '#f3818b' }} />
            <span className="text-white font-medium text-sm tracking-wide uppercase">
              Find Your Café
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-white drop-shadow-2xl" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}>
              Our Cafés:
            </span>
            <br />
            <span className="text-rose-300 drop-shadow-2xl" style={{ color: '#f3818b', textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}>
              Spaces Made for Togetherness
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-white mb-4 max-w-4xl leading-relaxed font-light">
              Every Family First Café is created with one goal in mind: to bring families closer. From our flagship locations in schools to future sites in malls and community hubs, our cafés are vibrant, welcoming spaces that turn everyday moments into meaningful memories.
            </p>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
              Whether you're grabbing a morning Kindred coffee or settling in for a weekend family brunch, you'll find that everything here is designed to support connection.
            </p>
          </motion.div>

         {/* Scroll Down Indicator */}
          <motion.div
            className="flex flex-col items-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="text-white text-sm mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9)' }}>Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon icon="lucide:chevron-down" className="text-white text-xl" style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.9))' }} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};