import React, { useState } from "react";
import { Input, Checkbox } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Quiz } from "./quizzes-section";

interface QuizListProps {
  quizzes: Quiz[];
  onSelectQuiz: (quiz: Quiz) => void;
}

// Map quiz IDs to specific icons
const quizIcons: Record<string, string> = {
  "1": "lucide:heart", // Kindness Counts
  "2": "lucide:globe", // My Planet, My Home  
  "3": "lucide:message-circle", // Let's Talk!
  "4": "lucide:utensils", // Table Manners 101
  "5": "lucide:handshake", // Respect for All
  "6": "lucide:users", // The Power of Teamwork
  "7": "lucide:sparkles" // Gratitude Everyday
};

export const QuizList = ({ quizzes, onSelectQuiz }: QuizListProps) => {
  const [searchQuiz, setSearchQuiz] = useState("");
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);

  const themes = [
    "Adaptability & Conflict Resolution",
    "Creativity & Storytelling",
    "Digital Wellbeing & Reflection",
    "Empathy & Relationships",
    "Gratitude & Healthy Habits",
    "Inclusion & Diversity",
    "Kindness & Community Actions",
    "Resilience & Self-Esteem",
    "Respect & Dignity",
    "Student Leadership & Vision",
    "Sustainability & Responsibility",
    "Unity & Community"
  ];

  const filteredQuizzes = quizzes.filter(quiz => {
    const matchesSearch = !searchQuiz || 
      quiz.title.toLowerCase().includes(searchQuiz.toLowerCase()) ||
      quiz.description.toLowerCase().includes(searchQuiz.toLowerCase());
    const matchesTheme = selectedThemes.length === 0 || 
      selectedThemes.includes(quiz.theme);
    return matchesSearch && matchesTheme;
  });

  return (
    <>
      {/* Description */}
      <p className="text-white/90 text-center mb-8 max-w-3xl mx-auto">
        Engaging quizzes aligned with our monthly themes. They encourage curiosity, reflection, and conversation—
        helping families learn together while turning screen time into a meaningful, interactive experience.
      </p>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <div className="w-72">
          <div className="bg-pomegranate-700/40 rounded-2xl p-6 border border-white/20">
            <h3 className="text-white font-bold text-xl mb-6">Filters</h3>
            
            <div className="space-y-5">
              {/* Search Quiz */}
              <div>
                <label className="text-white/80 text-sm font-medium mb-2 block">Search Quiz</label>
                <div className="relative">
                  <Input
                    placeholder=""
                    value={searchQuiz}
                    onChange={(e) => setSearchQuiz(e.target.value)}
                    classNames={{
                      input: "text-white placeholder:text-white/40 pr-10",
                      inputWrapper: "bg-pomegranate-800/50 border border-white/30 hover:border-white/50 data-[hover=true]:bg-pomegranate-800/60"
                    }}
                  />
                  <Icon icon="lucide:search" className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 text-lg pointer-events-none" />
                </div>
              </div>

              {/* Monthly Theme Filter */}
              <div>
                <h4 className="text-white/80 text-sm font-medium mb-3">Monthly Theme</h4>
                <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
                  {themes.map((theme) => (
                    <label key={theme} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedThemes.includes(theme)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedThemes([...selectedThemes, theme]);
                          } else {
                            setSelectedThemes(selectedThemes.filter(t => t !== theme));
                          }
                        }}
                        className="w-4 h-4 rounded border-white/50 bg-transparent checked:bg-white checked:border-white"
                      />
                      <span className="text-white/80 text-sm">{theme}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quiz Cards */}
        <div className="flex-1">
          <div className="space-y-4">
            {filteredQuizzes.map((quiz, index) => (
              <motion.div
                key={quiz.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-pomegranate-700/50 backdrop-blur-sm rounded-xl p-6 cursor-pointer hover:bg-pomegranate-700/60 transition-all duration-300 group"
                onClick={() => onSelectQuiz(quiz)}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon 
                      icon={quizIcons[quiz.id] || "lucide:help-circle"} 
                      className="text-white text-2xl" 
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-white/90">
                      {quiz.title}
                    </h3>
                    <p className="text-white/80 mb-3">
                      {quiz.description}
                    </p>
                    <p className="text-white/60 text-sm">
                      Theme: {quiz.theme}
                    </p>
                  </div>
                  
                  {/* Arrow */}
                  <Icon 
                    icon="lucide:arrow-right" 
                    className="text-white/50 text-2xl group-hover:text-white group-hover:translate-x-1 transition-all"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};