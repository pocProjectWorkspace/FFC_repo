import React, { useState } from "react";
import { Button, RadioGroup, Radio, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Quiz } from "./quizzes-section";

interface QuizQuestionsProps {
  quiz: Quiz;
  userAnswers: Record<number, any>;
  setUserAnswers: (answers: Record<number, any>) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export const QuizQuestions = ({ quiz, userAnswers, setUserAnswers, onSubmit, onBack }: QuizQuestionsProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleAnswer = (answer: any) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestion.id]: answer
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;
  const isAnswered = userAnswers[currentQuestion.id] !== undefined && userAnswers[currentQuestion.id] !== "";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
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
      <div className="bg-pomegranate-700/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white font-bold text-2xl">{quiz.title}</h2>
            <span className="text-white/60">
              Question {currentQuestionIndex + 1} of {quiz.questions.length}
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-white rounded-full h-2 transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-white text-xl font-medium mb-6">
            {currentQuestionIndex + 1}. {currentQuestion.question}
          </h3>

          {/* Answer Options */}
          {currentQuestion.type === "multiple-choice" && currentQuestion.options ? (
            <RadioGroup
              value={userAnswers[currentQuestion.id]?.toString()}
              onValueChange={(value) => handleAnswer(parseInt(value))}
              className="space-y-3"
            >
              {currentQuestion.options.map((option, index) => (
                <Radio
                  key={index}
                  value={index.toString()}
                  classNames={{
                    base: "bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all max-w-full",
                    label: "text-white",
                    wrapper: "border-white/50",
                    control: "bg-white group-data-[selected=true]:bg-white",
                  }}
                >
                  {option}
                </Radio>
              ))}
            </RadioGroup>
          ) : (
            <Textarea
              placeholder="Type your answer here..."
              value={userAnswers[currentQuestion.id] || ""}
              onChange={(e) => handleAnswer(e.target.value)}
              minRows={3}
              classNames={{
                input: "text-white placeholder:text-white/50",
                inputWrapper: "bg-white/10 border-white/30 hover:border-white/50"
              }}
            />
          )}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4">
          <Button
            onClick={handlePrevious}
            isDisabled={currentQuestionIndex === 0}
            variant="bordered"
            className="text-white border-white/30 hover:bg-white/10"
            startContent={<Icon icon="solar:arrow-left-linear" />}
          >
            Previous
          </Button>

          {isLastQuestion ? (
            <Button
              onClick={onSubmit}
              isDisabled={!isAnswered}
              className="bg-white text-pomegranate font-bold hover:bg-white/90"
              endContent={<Icon icon="solar:check-circle-bold" />}
            >
              Submit Quiz
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              isDisabled={!isAnswered}
              className="bg-white text-pomegranate font-bold hover:bg-white/90"
              endContent={<Icon icon="solar:arrow-right-linear" />}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};