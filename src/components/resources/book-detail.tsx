import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface BookDetailProps {
  book: {
    id: string;
    title: string;
    author: string;
    forAge: string;
    grade: string;
    monthlyTheme: string;
    description: string;
    image: string;
  };
  onBack: () => void;
}

export const BookDetail = ({ book, onBack }: BookDetailProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Button
          onClick={onBack}
          variant="light"
          className="text-white hover:bg-white/10 mb-8"
          startContent={<Icon icon="solar:arrow-left-linear" className="text-xl" />}
        >
          Back
        </Button>

        {/* Book Card */}
        <div className="bg-pomegranate-700/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Book Cover */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-64 h-96 object-cover rounded-lg shadow-xl"
                />
                {/* Decorative element */}
                <div className="absolute -z-10 -bottom-4 -right-4 w-64 h-96 bg-pomegranate-800/50 rounded-lg"></div>
              </div>
            </div>

            {/* Book Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {book.title}
                </h1>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-white/70 text-sm">Author</label>
                  <p className="text-white text-lg">{book.author}</p>
                </div>

                <div>
                  <label className="text-white/70 text-sm">For</label>
                  <p className="text-white text-lg">{book.forAge}</p>
                </div>

                <div>
                  <label className="text-white/70 text-sm">Year/Grade</label>
                  <p className="text-white text-lg">{book.grade}</p>
                </div>

                <div>
                  <label className="text-white/70 text-sm">Monthly Theme</label>
                  <p className="text-white text-lg">{book.monthlyTheme}</p>
                </div>
              </div>

              <div>
                <label className="text-white/70 text-sm block mb-2">Description</label>
                <p className="text-white/90 leading-relaxed">
                  {book.description}
                </p>
              </div>

              {/* Note about availability */}
              <div className="pt-4 border-t border-white/20">
                <p className="text-white/70 text-sm italic">
                  All information is available, description will be shared at a later stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};