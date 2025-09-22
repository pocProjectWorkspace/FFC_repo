import React, { useState } from "react";
import { Input, Select, SelectItem, Checkbox } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Quiz } from "./quizzes-section";

interface QuizListProps {
  quizzes: Quiz[];
  onSelectQuiz: (quiz: Quiz) => void;
}

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
        <div className="w-64 space-y-4">
          <h3 className="text-white font-bold text-lg mb-4">Filters</h3>
          
          {/* Search Quiz */}
          <Input
            placeholder="Search Quiz"
            value={searchQuiz}
            onChange={(e) => setSearchQuiz(e.target.value)}
            startContent={<Icon icon="solar:magnifer-linear" className="text-white/50" />}
            classNames={{
              input: "text-white placeholder:text-white/50",
              inputWrapper: "bg-pomegranate-700/50 border-white/30 hover:border-white/50"
            }}
          />

          {/* Monthly Theme Filter */}
          <div className="bg-pomegranate-700/50 rounded-lg p-4">
            <h4 className="text-white font-medium mb-3">Monthly Theme</h4>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {themes.map((theme) => (
                <Checkbox
                  key={theme}
                  size="sm"
                  isSelected={selectedThemes.includes(theme)}
                  onValueChange={(isSelected) => {
                    if (isSelected) {
                      setSelectedThemes([...selectedThemes, theme]);
                    } else {
                      setSelectedThemes(selectedThemes.filter(t => t !== theme));
                    }
                  }}
                  classNames={{
                    label: "text-white/80 text-xs",
                    wrapper: "border-white/50"
                  }}
                >
                  {theme}
                </Checkbox>
              ))}
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
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon icon="solar:question-square-bold" className="text-white text-2xl" />
                  </div>
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
                  <Icon 
                    icon="solar:arrow-right-linear" 
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