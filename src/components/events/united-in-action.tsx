import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const UnitedInAction = () => {
  const activities = [
    {
      id: 1,
      title: "Cooking Classes",
      image: "/events/cooking-classes.jpg",
      description: "Learn family recipes and culinary skills together"
    },
    {
      id: 2,
      title: "Group Painting Lessons",
      image: "/events/painting-lessons.jpg",
      description: "Express creativity through collaborative art"
    },
    {
      id: 3,
      title: "Interactive Concerts",
      image: "/events/interactive-concerts.jpg",
      description: "Enjoy live music and participate in performances"
    },
    {
      id: 4,
      title: "Sports Meet-and-Greets",
      image: "/events/sports-meetups.jpg",
      description: "Connect with athletes and learn new skills"
    }
  ];

  return (
    <section className="py-20 px-4 bg-pomegranate">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-pomegranate-600/30 backdrop-blur-sm rounded-2xl p-8 md:p-12"
        >
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
              <Icon 
                icon="solar:users-group-two-rounded-bold" 
                className="text-white text-4xl"
              />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            United in Action
          </h2>

          {/* Description */}
          <p className="text-lg text-white/90 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            At Family First Café, partnerships bring the community even closer together. We collaborate with 
            organizations, artists, chefs, athletes, and musicians to design unique in-house events that 
            celebrate connection and creativity. These events not only enrich our monthly themes but also 
            strengthen community bonds in engaging ways. Offering memorable shared experiences that 
            go beyond the everyday café visit.
          </p>

          {/* Activities Grid - 2x2 Layout */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white font-semibold text-sm md:text-base lg:text-lg">
                      {activity.title}
                    </h3>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-pomegranate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <p className="text-white text-center text-sm md:text-base">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};