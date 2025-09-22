import React, { useState } from "react";
import { QuizList } from "./quiz-list";
import { QuizDetail } from "./quiz-detail";
import { QuizQuestions } from "./quiz-questions";
import { QuizResults } from "./quiz-results";

export interface Quiz {
  id: string;
  title: string;
  description: string;
  theme: string;
  lessons: string[];
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  type: "multiple-choice" | "text";
  options?: string[];
  correctAnswer: string | number;
}

export type QuizView = "list" | "detail" | "questions" | "results";

export const QuizzesSection = () => {
  const [currentView, setCurrentView] = useState<QuizView>("list");
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
  const [score, setScore] = useState(0);

  // Sample quizzes data
  const quizzes: Quiz[] = [
    {
      id: "1",
      title: "Kindness Counts",
      description: "Learn simple, daily ways to show kindness everywhere you go.",
      theme: "Kindness & Community Actions",
      lessons: [
        "Kindness means being nice to others through words and actions.",
        "You can show kindness by helping someone, smiling, or saying nice things.",
        "Kindness makes others feel good—and you feel good too.",
        "We can practice kindness every day at home, at school, and even with strangers.",
        "Helping others without being asked is a powerful form of kindness.",
        "Being kind to animals, the environment, and yourself is also important.",
        "Apologizing when you make a mistake is part of being kind.",
        "Small actions like holding the door or sharing your toys can mean a lot.",
        "Kindness is like a boomerang—it always comes back to you!"
      ],
      questions: [
        {
          id: 1,
          question: "What is Kindness?",
          type: "multiple-choice",
          options: ["Being mean to others", "Helping and being nice", "Ignoring people"],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "Can a smile be an act of kindness?",
          type: "multiple-choice",
          options: ["Yes", "No"],
          correctAnswer: 0
        },
        {
          id: 3,
          question: "What is one way you were kind this week?",
          type: "text",
          correctAnswer: "any" // Any text answer is acceptable
        },
        {
          id: 4,
          question: "Should you only be kind to people you know?",
          type: "multiple-choice",
          options: ["Yes", "No"],
          correctAnswer: 1
        },
        {
          id: 5,
          question: "What should you say if you accidentally bump into someone?",
          type: "multiple-choice",
          options: ["Nothing", "Watch Out!", "I'm sorry!"],
          correctAnswer: 2
        },
        {
          id: 6,
          question: "Is feeding a hungry animal a kind thing to do?",
          type: "multiple-choice",
          options: ["Yes", "No"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "2",
      title: "My Planet, My Home",
      description: "Fun lessons on protecting Earth through recycling, saving, and caring.",
      theme: "Sustainability & Responsibility",
      lessons: [
        "Earth is our shared home and we all need to take care of it.",
        "Recycling helps reduce waste and protects our environment.",
        "Saving water and electricity helps preserve resources.",
        "Plants and trees give us oxygen and make our planet beautiful.",
        "Every small action counts in protecting our environment."
      ],
      questions: [
        {
          id: 1,
          question: "What can we do to help our planet?",
          type: "multiple-choice",
          options: ["Throw trash anywhere", "Recycle and save water", "Use more plastic"],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "Why are trees important?",
          type: "multiple-choice",
          options: ["They give us oxygen", "They look nice", "Both"],
          correctAnswer: 2
        }
      ]
    },
    {
      id: "3",
      title: "Let's Talk!",
      description: "Practice listening, speaking kindly, and showing interest when communicating.",
      theme: "Empathy & Relationships",
      lessons: [
        "Good communication starts with listening.",
        "Speaking kindly makes conversations better.",
        "Showing interest in others strengthens relationships.",
        "Body language is part of communication too."
      ],
      questions: []
    },
    {
      id: "4",
      title: "Table Manners 101",
      description: "Practice listening, speaking kindly, and showing interest when communicating.",
      theme: "Respect & Dignity",
      lessons: [],
      questions: []
    },
    {
      id: "5",
      title: "Respect for All",
      description: "Explore how respect builds harmony for people, property, and nature.",
      theme: "Respect & Dignity",
      lessons: [],
      questions: []
    },
    {
      id: "6",
      title: "The Power of Teamwork",
      description: "Discover how working together makes challenges easier and fun.",
      theme: "Unity & Community",
      lessons: [],
      questions: []
    },
    {
      id: "7",
      title: "Gratitude Everyday",
      description: "Celebrate thankfulness for life's little blessings, people, and moments.",
      theme: "Gratitude & Healthy Habits",
      lessons: [],
      questions: []
    }
  ];

  const handleSelectQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setCurrentView("detail");
    setUserAnswers({});
    setScore(0);
  };

  const handleStartQuiz = () => {
    if (selectedQuiz && selectedQuiz.questions.length > 0) {
      setCurrentView("questions");
    }
  };

  const handleSubmitQuiz = () => {
    if (!selectedQuiz) return;
    
    // Calculate score
    let correctCount = 0;
    selectedQuiz.questions.forEach((question) => {
      if (question.type === "text" && userAnswers[question.id]) {
        correctCount++; // Any text answer counts as correct
      } else if (userAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    
    setScore(correctCount);
    setCurrentView("results");
  };

  const handleRetakeQuiz = () => {
    setUserAnswers({});
    setScore(0);
    setCurrentView("questions");
  };

  const handleBackToList = () => {
    setCurrentView("list");
    setSelectedQuiz(null);
    setUserAnswers({});
    setScore(0);
  };

  const handleBackToDetail = () => {
    setCurrentView("detail");
    setUserAnswers({});
    setScore(0);
  };

  return (
    <div className="py-12 px-4 min-h-[600px]">
      <div className="max-w-6xl mx-auto">
        {currentView === "list" && (
          <QuizList 
            quizzes={quizzes} 
            onSelectQuiz={handleSelectQuiz}
          />
        )}
        
        {currentView === "detail" && selectedQuiz && (
          <QuizDetail
            quiz={selectedQuiz}
            onStart={handleStartQuiz}
            onBack={handleBackToList}
          />
        )}
        
        {currentView === "questions" && selectedQuiz && (
          <QuizQuestions
            quiz={selectedQuiz}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
            onSubmit={handleSubmitQuiz}
            onBack={handleBackToDetail}
          />
        )}
        
        {currentView === "results" && selectedQuiz && (
          <QuizResults
            score={score}
            totalQuestions={selectedQuiz.questions.length}
            onRetake={handleRetakeQuiz}
            onBack={handleBackToList}
          />
        )}
      </div>
    </div>
  );
};