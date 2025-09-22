import React, { useState } from "react";
import { Button } from "@heroui/react";
import { ResourceSection } from "../../pages/ResourcesPage";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

interface ResourcesNavProps {
  activeSection: ResourceSection;
  setActiveSection: (section: ResourceSection) => void;
}

export const ResourcesNav = ({ activeSection, setActiveSection }: ResourcesNavProps) => {
  const [isCalendarExpanded, setIsCalendarExpanded] = useState(false);

  const monthlyThemes = [
    { month: "January", theme: "Digital Wellbeing & Reflection", description: "Find balance, unplug, and reflect on what truly matters." },
    { month: "February", theme: "Empathy & Relationships", description: "Step into each other's shoes and grow deeper connections." },
    { month: "March", theme: "Sustainability & Responsibility", description: "Care for our planet and act with purpose for tomorrow." },
    { month: "April", theme: "Student Leadership & Vision", description: "Empower young voices to dream, lead, and shape the future." },
    { month: "May", theme: "Adaptability & Conflict Resolution", description: "Embrace change, solve challenges, and grow together as a team." },
    { month: "June", theme: "Kindness & Community Actions", description: "Small acts of kindness create ripples of change in our community." },
    { month: "July", theme: "Creativity & Storytelling", description: "Let imagination run wild through stories, art, and shared adventures." },
    { month: "August", theme: "Resilience & Self-Esteem", description: "Build confidence, bounce back stronger, and celebrate your unique strengths." },
    { month: "September", theme: "Respect & Dignity", description: "Learn the power of kindness, manners, and valuing one another." },
    { month: "October", theme: "Inclusion & Diversity", description: "Celebrate cultures, voices, and perspectives that make us richer together." },
    { month: "November", theme: "Gratitude & Healthy Habits", description: "Give thanks, nurture health, and savor mindful family moments." },
    { month: "December", theme: "Unity & Community", description: "Gather in joy, share traditions, and strengthen bonds that last." }
  ];

  return (
    <div className="bg-pomegranate-700/50 backdrop-blur-sm">
      {/* Monthly Theme Calendar - Expandable */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-pomegranate-600/30 rounded-2xl my-4">
          {/* Header with Toggle */}
          <button
            onClick={() => setIsCalendarExpanded(!isCalendarExpanded)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors rounded-t-2xl"
          >
            <h3 className="text-white font-semibold text-lg flex items-center gap-2">
              Family First Cafe - Monthly Themed Calendar
              <Icon 
                icon={isCalendarExpanded ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"} 
                className="text-xl transition-transform"
              />
            </h3>
          </button>

          {/* Expandable Content */}
          <AnimatePresence>
            {isCalendarExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  {/* Description */}
                  <p className="text-white/80 text-sm mb-6">
                    At Family First Café, each month has a special theme designed to inspire families, strengthen bonds, and encourage meaningful 
                    conversations. These themes guide our events, activations, and resources—helping families grow together in values, habits, and skills.
                  </p>

                  {/* Monthly Themes Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {monthlyThemes.map((item) => (
                      <div key={item.month} className="space-y-1">
                        <h4 className="text-white font-semibold">
                          {item.month} – {item.theme}
                        </h4>
                        <p className="text-white/70 text-sm">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <div className="text-center">
                    <Button
                      className="bg-white/20 text-white border-2 border-white/30 hover:bg-white hover:text-pomegranate font-semibold px-8 py-2 transition-all"
                      onClick={() => {
                        // Navigate to monthly themes page
                        window.location.href = "/monthly-themes";
                      }}
                    >
                      LEARN MORE!
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Collapsed State Info */}
          {!isCalendarExpanded && (
            <div className="px-6 pb-4">
              <p className="text-white/70 text-sm">
                Click to explore our monthly themes designed to inspire families and strengthen bonds.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Section Tabs */}
      <div className="border-t border-white/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center gap-0">
            <Button
              onClick={() => setActiveSection("books")}
              className={`rounded-none px-8 py-6 text-lg font-medium transition-all ${
                activeSection === "books"
                  ? "bg-pomegranate text-white border-b-4 border-white"
                  : "bg-transparent text-white/70 hover:text-white hover:bg-white/10"
              }`}
              variant="flat"
            >
              Books
            </Button>
            <Button
              onClick={() => setActiveSection("games")}
              className={`rounded-none px-8 py-6 text-lg font-medium transition-all ${
                activeSection === "games"
                  ? "bg-pomegranate text-white border-b-4 border-white"
                  : "bg-transparent text-white/70 hover:text-white hover:bg-white/10"
              }`}
              variant="flat"
            >
              Games
            </Button>
            <Button
              onClick={() => setActiveSection("quizzes")}
              className={`rounded-none px-8 py-6 text-lg font-medium transition-all ${
                activeSection === "quizzes"
                  ? "bg-pomegranate text-white border-b-4 border-white"
                  : "bg-transparent text-white/70 hover:text-white hover:bg-white/10"
              }`}
              variant="flat"
            >
              Quizzes
            </Button>
            <Button
              onClick={() => setActiveSection("challenges")}
              className={`rounded-none px-8 py-6 text-lg font-medium transition-all ${
                activeSection === "challenges"
                  ? "bg-pomegranate text-white border-b-4 border-white"
                  : "bg-transparent text-white/70 hover:text-white hover:bg-white/10"
              }`}
              variant="flat"
            >
              Challenges
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};