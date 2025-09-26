import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface Challenge {
  id: number;
  title: string;
  task: string;
  treasure: string;
  gift: string;
  image: string;
  icon: string;
}

export const ChallengesSection = () => {
  const challenges: Challenge[] = [
    {
      id: 1,
      title: "Compliment a Stranger",
      task: "Say something kind to someone you don't know (e.g., 'I love your smile').",
      treasure: "Builds confidence and spreads positivity.",
      gift: "A short sweet note or video saying what you said and how the person reacted.",
      image: "/resources/compliment-a-stranger.png",
      icon: "solar:heart-bold"
    },
    {
      id: 2,
      title: "Call Your Grandparents",
      task: "Make a phone or video call to your grandparents to ask about their day or share something exciting.",
      treasure: "Strengthens family connections across generations.",
      gift: "A photo or screenshot of the call, or a drawing of what you talked about.",
      image: "/resources/call-your-grandparents.png",
      icon: "solar:phone-bold"
    },
    {
      id: 3,
      title: "Plant Something Green",
      task: "Plant a seed or small plant in a pot or garden.",
      treasure: "Teaches care for the environment and responsibility.",
      gift: "A photo of your plant with your name and the date planted.",
      image: "/resources/plant-something-green.png",
      icon: "solar:leaf-bold"
    },
    {
      id: 4,
      title: "Make a 'Thank You' Card",
      task: "Create a handmade card for someone who helps you (e.g., a teacher, cleaner, security guard).",
      treasure: "Teaches gratitude and artistic expression.",
      gift: "Photo of the card and the person receiving it, or the card being placed somewhere.",
      image: "/resources/make-a-card.png",
      icon: "solar:card-bold"
    }
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Description */}
        <p className="text-white/90 text-center mb-12 max-w-3xl mx-auto">
          Engaging challenges aligned with our monthly themes. They encourage curiosity, reflection, and conversation—
          helping families learn together while turning screen time into a meaningful, interactive experience.
        </p>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-pomegranate-700/50 backdrop-blur-sm rounded-2xl overflow-hidden group hover:bg-pomegranate-700/60 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={challenge.image}
                  alt={challenge.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pomegranate-900/80 to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon icon={challenge.icon} className="text-white text-2xl" />
                  </div>
                </div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-white font-bold text-xl">
                    {challenge.title}
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                {/* The Task */}
                <div>
                  <h4 className="text-white/70 text-sm font-medium mb-1">The Task</h4>
                  <p className="text-white/90">
                    {challenge.task}
                  </p>
                </div>

                {/* The Treasure */}
                <div>
                  <h4 className="text-white/70 text-sm font-medium mb-1">The Treasure</h4>
                  <p className="text-white/90">
                    {challenge.treasure}
                  </p>
                </div>

                {/* The Gift */}
                <div>
                  <h4 className="text-white/70 text-sm font-medium mb-1">The Gift</h4>
                  <p className="text-white/90">
                    {challenge.gift}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Monthly Theme Note */}
        <div className="mt-12 text-center">
          <p className="text-white/70 text-sm italic">
            New challenges are added monthly aligned with our themes
          </p>
        </div>
      </div>
    </div>
  );
};