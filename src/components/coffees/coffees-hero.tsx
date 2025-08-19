import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const backgroundImages = [
  {
    url: "/coffees/coffees-hero-1.jpg",
    alt: "Coffee beans and brewing equipment at Family First Café"
  },
  {
    url: "/coffees/coffees-hero-2.jpg", 
    alt: "Family enjoying coffee together"
  },
  {
    url: "/coffees/coffees-hero-3.jpg",
    alt: "Barista crafting specialty coffee blends"
  }
];

export const CoffeesHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Debug: Log the current image URL
  useEffect(() => {
    console.log("Current coffee image URL:", backgroundImages[currentImageIndex].url);
  }, [currentImageIndex]);

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
    <section className="relative min-h-[80vh] flex items-center overflow-hidden" style={{ backgroundColor: '#983a45' }}>
      {/* Background Images Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('${backgroundImages[currentImageIndex].url}')`, 
            filter: "brightness(0.3)"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
      
      {/* Pomegranate Overlay */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.8), rgba(152, 58, 69, 0.6), rgba(152, 58, 69, 0.7))` 
      }}></div>

      {/* Decorative Coffee Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        <div className="absolute top-20 left-16 w-8 h-8">
          <Icon icon="lucide:coffee" className="text-white text-2xl rotate-12" />
        </div>
        <div className="absolute top-40 right-20 w-8 h-8">
          <Icon icon="lucide:leaf" className="text-white text-2xl -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-24 w-8 h-8">
          <Icon icon="lucide:coffee" className="text-white text-2xl rotate-45" />
        </div>
        <div className="absolute bottom-20 right-32 w-8 h-8">
          <Icon icon="lucide:heart" className="text-white text-2xl -rotate-30" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6">
          <Icon icon="lucide:sparkles" className="text-white text-xl rotate-90" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6">
          <Icon icon="lucide:coffee" className="text-white text-xl -rotate-45" />
        </div>
        <div className="absolute top-3/4 left-1/2 w-6 h-6">
          <Icon icon="lucide:leaf" className="text-white text-xl rotate-180" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-6 h-6">
          <Icon icon="lucide:heart" className="text-white text-xl rotate-45" />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-6 -translate-y-1/2 z-20 hidden md:block">
        <Button
          isIconOnly
          variant="flat"
          color="default"
          radius="full"
          className="bg-white/15 backdrop-blur-sm border-white/30 text-white hover:bg-white/25 transition-all duration-300 shadow-lg"
          onPress={goToPrevious}
          aria-label="Previous image"
        >
          <Icon icon="lucide:chevron-left" className="text-xl" />
        </Button>
      </div>
      
      <div className="absolute top-1/2 right-6 -translate-y-1/2 z-20 hidden md:block">
        <Button
          isIconOnly
          variant="flat"
          color="default"
          radius="full"
          className="bg-white/15 backdrop-blur-sm border-white/30 text-white hover:bg-white/25 transition-all duration-300 shadow-lg"
          onPress={goToNext}
          aria-label="Next image"
        >
          <Icon icon="lucide:chevron-right" className="text-xl" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-20">
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

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/15 backdrop-blur-sm rounded-full border border-white/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Icon icon="lucide:coffee" className="text-rose-400 text-lg" style={{ color: '#f3818b' }} />
            <span className="text-white font-medium text-sm tracking-wide uppercase">
              Our Coffee Program
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Our Coffees:
            <br />
            <span className="text-rose-300 drop-shadow-lg" style={{ color: '#f3818b' }}>
              Crafted to Connect
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Coffee holds a quiet power. It brings people to the table. It starts conversations. It signals a moment to slow down, share a thought, or reflect.
          </motion.p>

          <motion.p 
            className="text-lg md:text-xl text-white/80 mb-12 max-w-4xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            At Family First Café, our coffee program is rooted in these values. Every blend we serve is carefully sourced, skillfully roasted, and presented with purpose — to turn every cup into an opportunity for connection.
          </motion.p>
        </div>
      </div>
    </section>
  );
};