import React, { useState } from "react";
import { Button, Input, Select, SelectItem, Accordion, AccordionItem, Checkbox } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const GamesSection = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchGame, setSearchGame] = useState("");
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const bondingCardQuestions = [
    {
      question: "What is your earliest memory of home—what could you see, hear or smell?",
      category: "Family & Relationships"
    },
    {
      question: "If you could have dinner with any three people, living or dead, who would they be and why?",
      category: "Life Questions"
    },
    {
      question: "What's one tradition from your childhood that you'd like to pass on?",
      category: "Family & Relationships"
    }
  ];

  const themes = [
    { category: "Theme", items: ["Family & Relationships", "Food & Cooking Life", "Dreams & Desires", "Legacy & Wisdom"] },
    { category: "Life Stage", items: ["Early Childhood (0-6)", "School Years & Adolescence (7-18)", "Launching Adulthood (19-28)", "Building Family & Career (30-50)"] },
    { category: "Life Activities", items: ["Milestones & Achievements", "Play, Hobbies & Passions", "Friendships & Relationships", "School & Learning"] },
    { category: "Life Lessons", items: ["Maths & Meaning (16-40)", "Lean Life & Legacy (60+)", "Wild Card"] }
  ];

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % bondingCardQuestions.length);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prev) => (prev - 1 + bondingCardQuestions.length) % bondingCardQuestions.length);
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Description */}
        <p className="text-white/90 text-center mb-8 max-w-3xl mx-auto">
          Family-friendly games designed to spark laughter, teamwork, and bonding. These activities provide a fun 
          way for children and parents to spend quality time together, both in our cafés and at home.
        </p>

        <div className="flex gap-8">
          {/* Filters Sidebar (if enabled) */}
          {showFilters && (
            <div className="w-64 space-y-4">
              <h3 className="text-white font-bold text-lg mb-4">Filters</h3>
              
              {/* Search Game */}
              <Input
                placeholder="Search Game"
                value={searchGame}
                onChange={(e) => setSearchGame(e.target.value)}
                startContent={<Icon icon="solar:magnifer-linear" className="text-white/50" />}
                classNames={{
                  input: "text-white placeholder:text-white/50",
                  inputWrapper: "bg-pomegranate-700/50 border-white/30 hover:border-white/50"
                }}
              />

              {/* Monthly Theme Accordion */}
              <Accordion 
                className="bg-pomegranate-700/50 rounded-lg"
                itemClasses={{
                  title: "text-white",
                  content: "text-white",
                  trigger: "text-white"
                }}
              >
                <AccordionItem key="themes" title="Monthly Theme">
                  <div className="space-y-4 max-h-60 overflow-y-auto">
                    {themes.map((category) => (
                      <div key={category.category}>
                        <p className="text-white/70 text-sm font-medium mb-2">{category.category}</p>
                        <div className="space-y-1">
                          {category.items.map((item) => (
                            <Checkbox
                              key={item}
                              size="sm"
                              isSelected={selectedThemes.includes(item)}
                              onValueChange={(isSelected) => {
                                if (isSelected) {
                                  setSelectedThemes([...selectedThemes, item]);
                                } else {
                                  setSelectedThemes(selectedThemes.filter(t => t !== item));
                                }
                              }}
                              classNames={{
                                label: "text-white/80 text-xs",
                                wrapper: "border-white/50"
                              }}
                            >
                              {item}
                            </Checkbox>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">
            {/* Bonding Cards Section */}
            <div className="bg-pomegranate-700/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left: Description and Image */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      Bonding Cards
                    </h2>
                    <p className="text-white/90 leading-relaxed">
                      A fun, family bonding card game where every question sparks stories, laughter, 
                      and connection. Perfect for all ages, it uses simple conversation and meaningful 
                      moments shared across the table.
                    </p>
                  </div>
                  
                  <div className="relative group">
                    <img
                      src="/resources/bonding-cards.png"
                      alt="Bonding Cards"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-6">
                      <p className="text-white font-medium">Start playing with your family</p>
                    </div>
                  </div>
                </div>

                {/* Right: Interactive Question Card */}
                <div className="space-y-6">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, rotateY: 180 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-pomegranate-600 to-pomegranate-800 rounded-xl p-8 shadow-2xl"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <Icon icon="solar:question-circle-bold" className="text-white/80 text-3xl" />
                      <span className="text-white/60 text-sm">
                        Question {currentQuestion + 1} of {bondingCardQuestions.length}
                      </span>
                    </div>
                    
                    <div className="min-h-[120px] flex items-center">
                      <p className="text-white text-lg font-medium leading-relaxed">
                        {bondingCardQuestions[currentQuestion].question}
                      </p>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <p className="text-white/60 text-sm">
                        Category: {bondingCardQuestions[currentQuestion].category}
                      </p>
                    </div>
                  </motion.div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between gap-4">
                    <Button
                      onClick={handlePreviousQuestion}
                      variant="bordered"
                      className="flex-1 text-white border-white/30 hover:bg-white/10"
                      startContent={<Icon icon="solar:arrow-left-linear" />}
                    >
                      Previous
                    </Button>
                    <Button
                      onClick={handleNextQuestion}
                      className="flex-1 bg-white text-pomegranate font-semibold hover:bg-white/90"
                      endContent={<Icon icon="solar:arrow-right-linear" />}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Toggle Filters Button */}
            <div className="mt-8 text-center">
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="bordered"
                className="text-white border-white/30 hover:bg-white/10"
                startContent={<Icon icon={showFilters ? "solar:filter-bold" : "solar:filter-linear"} />}
              >
                {showFilters ? "Hide Filters" : "Show More Games (Coming Soon)"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};