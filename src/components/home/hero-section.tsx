import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const backgroundImages = [
  {
    url: "/hero/hero-image-1.jpg",
    alt: "Family enjoying breakfast together at Family First Café"
  },
  {
    url: "/hero/hero-image-2.jpg", 
    alt: "Children engaging in creative activities"
  },
  {
    url: "/hero/hero-image-3.jpg",
    alt: "Parents and children sharing meaningful moments"
  }
];

export const HeroSection = () => {
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
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-pomegranate-700" style={{ backgroundColor: '#983a45' }}>
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
      
      {/* Lighter Pomegranate Overlay - Images Still Visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-pomegranate-800/60 via-pomegranate-700/40 to-pomegranate-600/30" style={{ 
        background: `linear-gradient(to right, rgba(152, 58, 69, 0.6), rgba(152, 58, 69, 0.4), rgba(152, 58, 69, 0.3))` 
      }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" style={{ 
        background: `linear-gradient(to bottom, rgba(152, 58, 69, 0.4), transparent, rgba(152, 58, 69, 0.3))` 
      }}></div>

      {/* Decorative Coffee & Heart Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        {/* Coffee beans pattern */}
        <div className="absolute top-20 left-16 w-8 h-8">
          <Icon icon="lucide:coffee" className="text-white text-2xl rotate-12" />
        </div>
        <div className="absolute top-40 right-20 w-8 h-8">
          <Icon icon="lucide:heart" className="text-white text-2xl -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-24 w-8 h-8">
          <Icon icon="lucide:coffee" className="text-white text-2xl rotate-45" />
        </div>
        <div className="absolute bottom-20 right-32 w-8 h-8">
          <Icon icon="lucide:heart" className="text-white text-2xl -rotate-30" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6">
          <Icon icon="lucide:coffee" className="text-white text-xl rotate-90" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6">
          <Icon icon="lucide:heart" className="text-white text-xl -rotate-45" />
        </div>
        <div className="absolute top-3/4 left-1/2 w-6 h-6">
          <Icon icon="lucide:coffee" className="text-white text-xl rotate-180" />
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

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Brand Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/15 backdrop-blur-sm rounded-full border border-white/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Icon icon="lucide:heart" className="text-rose-400 text-lg" style={{ color: '#f3818b' }} />
            <span className="text-white font-medium text-sm tracking-wide uppercase">
              Where Families Connect
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-white">
              Bringing Families Together Through
            </span>
            <br />
            <span className="text-rose-300 drop-shadow-lg" style={{ color: '#f3818b' }}>
              Food, Coffee, and Connection
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Family First Café is more than a café — it's a movement to strengthen family bonds through everyday moments, shared meals, and meaningful experiences.
          </motion.p>

          {/* Introduction Text */}
          <motion.p 
            className="text-lg md:text-xl text-white/80 mb-12 max-w-4xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Welcome to Family First Café, where every cup of coffee and every shared meal is designed to bring families closer. Our founder, Chairman Sunny Varkey, believes deeply in the importance of strong families in building compassionate communities. Family First Café is our answer to the busy, disconnected world — a place where parents, children, grandparents, and caregivers can all feel at home.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-white font-semibold px-8 py-4 text-lg hover:bg-rose-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              style={{ backgroundColor: 'white', color: '#983a45' }}
              radius="lg"
            >
              <Icon icon="lucide:map-pin" className="text-xl mr-2" />
              Find a Café Near You
            </Button>
            
            <Button
              size="lg"
              variant="bordered"
              className="border-2 border-white text-white font-semibold px-8 py-4 text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              radius="lg"
            >
              <Icon icon="lucide:utensils" className="text-xl mr-2" />
              Explore the Menu
            </Button>

            <Button
              size="lg"
              variant="flat"
              className="bg-white/15 backdrop-blur-sm text-white font-semibold px-8 py-4 text-lg hover:bg-white/25 transition-all duration-300 border border-white/30"
              radius="lg"
            >
              <Icon icon="lucide:smartphone" className="text-xl mr-2" />
              Download the App - coming soon
            </Button>
          </motion.div>

          {/* Optional: Scroll Down Indicator */}
          <motion.div
            className="flex flex-col items-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon icon="lucide:chevron-down" className="text-white/60 text-xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};