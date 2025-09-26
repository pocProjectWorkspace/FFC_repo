import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  // Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of hero images
  const heroImages = [
    '/hero/hero-image-1.jpg',
    '/hero/hero-image-2.jpg', 
    '/hero/hero-image-3.jpg',
    '/hero/hero-image-4.jpg'
  ];

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Manual navigation functions
  const goToPrevious = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? heroImages.length - 1 : currentImageIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(
      currentImageIndex === heroImages.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Carousel Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.4)), url('${heroImages[currentImageIndex]}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group"
        aria-label="Previous image"
      >
        <Icon 
          icon="lucide:chevron-left" 
          className="text-white text-xl md:text-2xl group-hover:scale-110 transition-transform" 
        />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group"
        aria-label="Next image"
      >
        <Icon 
          icon="lucide:chevron-right" 
          className="text-white text-xl md:text-2xl group-hover:scale-110 transition-transform" 
        />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentImageIndex
                ? 'w-8 h-2 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white/70'
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Icon icon="lucide:heart" className="text-white" />
            <span className="text-white font-medium text-sm uppercase tracking-wide">
              Where Families Connect
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            More than a café
            <br />
            - <span className="text-rose-300">a home for</span>
            <br />
            <span className="text-rose-300">family bonding</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg text-white/90 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Family First Café is more than a café — it's a movement to strengthen family bonds 
            through everyday moments, shared meals, and meaningful experiences.
          </motion.p>

          <motion.p
            className="text-base text-white/80 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Welcome to Family First Café, where every cup of coffee and every shared meal is designed to bring 
            families closer. Our founder, Chairman Sunny Varkey, believes deeply in the importance of strong 
            families in building compassionate communities. Family First Café is our answer to the busy, 
            disconnected world — a place where parents, children, grandparents, and caregivers can all feel at home.
          </motion.p>

          {/* CTA Buttons - Updated to match the image */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              as={Link}
              to="/community"
              size="lg"
              className="bg-white text-pomegranate font-semibold px-8 py-6 text-lg hover:bg-rose-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
              radius="full"
            >
              Join our Community
            </Button>
 
         </motion.div>
        </div>
      </div>

      {/* Mobile secondary links */}
      <div className="md:hidden absolute bottom-20 left-0 right-0 z-10">
        <div className="flex justify-center gap-4 text-white/80 text-sm px-4">
          <Link to="/activations" className="hover:text-white transition-colors">
            Activations
          </Link>
          <span className="text-white/50">|</span>
          <Link to="/resources" className="hover:text-white transition-colors">
            Resources
          </Link>
        </div>
      </div>
    </section>
  );
};