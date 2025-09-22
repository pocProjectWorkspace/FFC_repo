import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRetake: () => void;
  onBack: () => void;
}

export const QuizResults = ({ score, totalQuestions, onRetake, onBack }: QuizResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  // Determine result type
  let resultType: "excellent" | "good" | "needsWork";
  let resultImage: string;
  let resultTitle: string;
  let resultMessage: string;
  
  if (percentage >= 70) {
    resultType = "excellent";
    resultImage = "/resources/quizzes/child-happy.jpg";
    resultTitle = "Congratulations!";
    resultMessage = "Keep learning and exploring more quizzes!";
  } else if (percentage >= 50) {
    resultType = "good";
    resultImage = "/resources/quizzes/child-surprised.jpg";
    resultTitle = "Very Close!";
    resultMessage = "You can re-take the quiz or explore more to keep learning!";
  } else {
    resultType = "needsWork";
    resultImage = "/resources/quizzes/child-thinking.jpg";
    resultTitle = "Ooops!";
    resultMessage = "We recommend you to take the quiz again. Keep learning!";
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
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

      {/* Results Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Result Card 1 - Main Result */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`bg-pomegranate-700/50 backdrop-blur-sm rounded-2xl p-8 text-center ${
            resultType === "excellent" ? "md:col-span-2" : ""
          }`}
        >
          {/* Image */}
          <div className="mb-6">
            <img
              src={resultImage}
              alt={resultTitle}
              className="w-48 h-48 object-cover rounded-xl mx-auto"
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-white mb-4">
            {resultTitle}
          </h2>

          {/* Score */}
          <p className="text-xl text-white/90 mb-4">
            You answered <span className="font-bold">{score}/{totalQuestions}</span> questions correctly.
          </p>

          {/* Message */}
          <p className="text-white/80 mb-8">
            {resultMessage}
          </p>

          {/* Score Circle */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="white"
                strokeWidth="12"
                fill="none"
                opacity="0.2"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="white"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${(percentage / 100) * 352} 352`}
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">{percentage}%</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Button
              onClick={onRetake}
              className="bg-white text-pomegranate font-bold hover:bg-white/90"
              startContent={<Icon icon="solar:refresh-circle-bold" />}
            >
              Re-take the Quiz
            </Button>
            <Button
              onClick={onBack}
              variant="bordered"
              className="text-white border-white/30 hover:bg-white/10"
            >
              Explore More
            </Button>
          </div>
        </motion.div>

        {/* Additional Result Cards for non-excellent scores */}
        {resultType !== "excellent" && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-pomegranate-700/50 backdrop-blur-sm rounded-2xl p-6 text-center"
            >
              <img
                src="/resources/quizzes/child-happy.jpg"
                alt="Success"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                Aim for Excellence!
              </h3>
              <p className="text-white/80 text-sm">
                Score 7/10 or more to achieve this level
              </p>
            </motion.div>

            {resultType === "needsWork" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-pomegranate-700/50 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <img
                  src="/resources/quizzes/child-surprised.jpg"
                  alt="Close"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">
                  Getting Closer!
                </h3>
                <p className="text-white/80 text-sm">
                  Score 5/10 or more to reach this milestone
                </p>
              </motion.div>
            )}
          </>
        )}
      </div>

      {/* Encouragement Message */}
      <div className="mt-12 text-center">
        <p className="text-white/70 italic">
          Every quiz is a chance to learn something new. Keep exploring and growing!
        </p>
      </div>
    </motion.div>
  );
};