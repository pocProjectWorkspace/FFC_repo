import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Quiz } from "./quizzes-section";

interface QuizDetailProps {
  quiz: Quiz;
  onStart: () => void;
  onBack: () => void;
}

export const QuizDetail = ({ quiz, onStart, onBack }: QuizDetailProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      {/* Back Button */}
      <Button
        onClick={onBack}
        variant="light"
        className="text-white hover:bg-white/10 mb-8"
        startContent={<Icon icon="solar:arrow-left-linear" className="text-xl" />}
      >
        Back
      </Button>

      {/* Quiz Card */}
      <div className="bg-pomegranate-700/50 backdrop-blur-sm rounded-2xl overflow-hidden">
        {/* Header Image */}
        <div className="relative h-64 bg-gradient-to-br from-pomegranate-600 to-pomegranate-800">
          <img
            src="/resources/kindness-counts.png"
            alt={quiz.title}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Icon icon="solar:question-square-bold" className="text-white/80 text-6xl mb-4" />
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {quiz.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <p className="text-white/90 text-lg mb-8">
            {quiz.description}
          </p>

          {quiz.lessons.length > 0 && (
            <div className="mb-8">
              <h2 className="text-white font-bold text-xl mb-4">Lesson</h2>
              <ul className="space-y-3">
                {quiz.lessons.map((lesson, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Icon 
                      icon="solar:star-bold" 
                      className="text-white/60 text-sm mt-1 flex-shrink-0"
                    />
                    <span className="text-white/90 leading-relaxed">
                      {lesson}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Button */}
          <div className="text-center">
            {quiz.questions.length > 0 ? (
              <Button
                onClick={onStart}
                size="lg"
                className="bg-white text-pomegranate font-bold hover:bg-white/90 px-12"
                endContent={<Icon icon="solar:arrow-right-bold" className="text-xl" />}
              >
                Start Quiz
              </Button>
            ) : (
                            <p className="text-white/60
                            ">
                              No questions available for this quiz.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              };