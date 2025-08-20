import React from "react";
import { motion } from "framer-motion";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export const EventsSection = () => {
  const [currentEventIndex, setCurrentEventIndex] = React.useState(0);

  const events = [
    {
      src: "/events/events-1.jpg",
      title: "Family Game Night",
      description: "Bring the whole family for board games, snacks, and friendly competition that sparks laughter and connection",
      ageGroup: "All Ages",
      icon: "lucide:gamepad-2",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      src: "/events/events-2.jpg",
      title: "Kids Baking Workshop",
      description: "Children learn to make cookies with our pastry chef while parents enjoy coffee and watch their little ones create",
      ageGroup: "Ages 5-12",
      icon: "lucide:cookie",
      color: "from-orange-500/20 to-pink-500/20"
    },
    {
      src: "/events/events-3.jpg",
      title: "Seasonal Cooking Classes",
      description: "Try our new autumn-inspired cooking experiences, perfect for cooler weather and seasonal family bonding",
      ageGroup: "Teens & Adults",
      icon: "lucide:chef-hat",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      src: "/events/events-4.jpg",
      title: "Grandparents' Coffee Morning",
      description: "Special gathering for grandparents to connect and share stories while building intergenerational friendships",
      ageGroup: "55+",
      icon: "lucide:coffee",
      color: "from-amber-500/20 to-yellow-500/20"
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % events.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [events.length]);

  const scrollToEvent = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentEventIndex((prev) => prev === 0 ? events.length - 1 : prev - 1);
    } else {
      setCurrentEventIndex((prev) => (prev + 1) % events.length);
    }
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#983a45' }}>
      {/* Consistent Pomegranate Overlay Effect */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      {/* Decorative Activity Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-10">
        {/* Activity icons pattern */}
        <div className="absolute top-20 left-16 w-8 h-8">
          <Icon icon="lucide:gamepad-2" className="text-white text-2xl rotate-12" />
        </div>
        <div className="absolute top-40 right-20 w-8 h-8">
          <Icon icon="lucide:cake" className="text-white text-2xl -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-24 w-8 h-8">
          <Icon icon="lucide:palette" className="text-white text-2xl rotate-45" />
        </div>
        <div className="absolute bottom-20 right-32 w-8 h-8">
          <Icon icon="lucide:music" className="text-white text-2xl -rotate-30" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6">
          <Icon icon="lucide:book-open" className="text-white text-xl rotate-90" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6">
          <Icon icon="lucide:puzzle" className="text-white text-xl -rotate-45" />
        </div>
        <div className="absolute top-3/4 left-1/2 w-6 h-6">
          <Icon icon="lucide:heart" className="text-white text-xl rotate-180" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-6 h-6">
          <Icon icon="lucide:coffee" className="text-white text-xl rotate-45" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Icon icon="lucide:calendar-heart" className="text-lg" style={{ color: '#f3818b' }} />
            <span className="text-white font-medium text-sm tracking-wide uppercase">
              Events & Activities
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Where Fun Meets
            <br />
            <span style={{ color: '#f3818b' }}>Family Connection</span>
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Join us for events designed to bring families together through shared experiences, 
            laughter, and memories that last a lifetime.
          </p>
        </motion.div>

        {/* Events Showcase - New Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Large Prominent Image Display */}
          <motion.div 
            className="mb-12"
            key={currentEventIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={events[currentEventIndex].src}
                alt={events[currentEventIndex].title}
                className="w-full h-full object-cover"
              />
              
              {/* Light overlay for text readability */}
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* Event Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                      <span className="text-sm font-medium" style={{ color: '#983a45' }}>
                        {events[currentEventIndex].ageGroup}
                      </span>
                    </div>
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon icon={events[currentEventIndex].icon} className="text-white text-lg" />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {events[currentEventIndex].title}
                  </h3>
                  <p className="text-white/90 leading-relaxed max-w-2xl">
                    {events[currentEventIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4 Event Cards - Stacked Neatly */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  currentEventIndex === index 
                    ? 'transform scale-105' 
                    : 'hover:transform hover:scale-102'
                }`}
                onClick={() => setCurrentEventIndex(index)}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Card className={`h-full overflow-hidden transition-all duration-300 ${
                  currentEventIndex === index 
                    ? 'bg-white/20 border-white/40 shadow-lg' 
                    : 'bg-white/10 border-white/20 hover:bg-white/15'
                }`}>
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={event.src}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-2 right-2">
                      <div className="w-6 h-6 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Icon icon={event.icon} className="text-white text-sm" />
                      </div>
                    </div>
                  </div>
                  <CardBody className="p-4">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-white/70 uppercase tracking-wide">
                        {event.ageGroup}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 leading-tight">
                      {event.title}
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                      {event.description.slice(0, 80)}...
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
        </motion.div>
      </div>
    </section>
  );
};