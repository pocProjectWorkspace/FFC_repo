import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const FamilyBondingSection = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  
  const slides = [
    {
      image: "/bonding/bonding-1.jpg",
      title: "Family Cooking Classes",
      description: "Learn to prepare meals together with our expert chefs, creating memories one recipe at a time"
    },
    {
      image: "/bonding/bonding-2.jpg",
      title: "Grandparents' Coffee Club",
      description: "Special gatherings for the wisest family members to share stories and wisdom"
    },
    {
      image: "/bonding/bonding-3.jpg",
      title: "Kids' Creative Corner",
      description: "Fun activities while parents enjoy their coffee, fostering creativity and independence"
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="py-32 relative overflow-hidden bg-default-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23983a45' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Clean Header Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-primary-50 text-primary rounded-full text-sm font-medium">
            Our Philosophy
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-default-900 mb-8 leading-tight">
            Why Family Bonding Matters
          </h2>
          <p className="text-xl text-default-700 leading-relaxed">
            Research shows that families who spend quality time together develop stronger emotional connections, better communication skills, and increased resilience. In our cafés, we create the perfect environment for these meaningful interactions to flourish naturally.
          </p>
        </motion.div>

        {/* Research Stats - Simplified */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-3">85%</div>
            <p className="text-default-600">Families report stronger bonds after regular café visits</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-3">3x</div>
            <p className="text-default-600">More meaningful conversations during shared meals</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-3">92%</div>
            <p className="text-default-600">Children show improved social skills through family activities</p>
          </div>
        </motion.div>

        {/* Large Image Carousel - Fixed */}
        <div className="relative max-w-6xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute -top-8 -left-8 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl hidden lg:block"></div>
          <div className="absolute -bottom-8 -right-8 w-24 h-24 border-b-2 border-r-2 border-primary/30 rounded-br-3xl hidden lg:block"></div>
          
          {/* Image Container - Fixed positioning */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ height: '600px' }}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                  activeSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="max-w-2xl text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: activeSlide === index ? 1 : 0,
                        y: activeSlide === index ? 0 : 20
                      }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <div className="inline-block mb-4 px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
                        <span className="text-primary-300 text-sm font-medium uppercase tracking-wide">
                          Featured Program
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                        {slide.title}
                      </h3>
                      <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                        {slide.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  activeSlide === index 
                    ? "bg-primary w-12" 
                    : "bg-default-300 w-3 hover:bg-default-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Quote Section - Simplified */}
        <motion.div 
          className="text-center mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-default-200">
            <Icon icon="lucide:quote" className="text-primary text-3xl mb-6 mx-auto" />
            <blockquote className="text-2xl md:text-3xl font-medium text-default-900 mb-6 leading-relaxed italic">
              "When families eat together, they grow together. Every shared meal is an investment in stronger relationships."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-primary"></div>
              <span className="text-primary font-medium">Family Research Institute</span>
              <div className="w-12 h-px bg-primary"></div>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-16">
          <Button 
            color="primary" 
            radius="full"
            size="lg"
            className="font-medium shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6"
            startContent={<Icon icon="lucide:calendar" />}
          >
            Join Our Family Programs
          </Button>
          <Button 
            variant="flat"
            color="primary"
            radius="full"
            size="lg"
            className="font-medium transition-all duration-300 px-8 py-6"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            Explore All Activities
          </Button>
        </div>
      </div>
    </section>
  );
};