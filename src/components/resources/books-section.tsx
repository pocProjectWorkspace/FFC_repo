import React, { useState } from "react";
import { Input, Select, SelectItem, Accordion, AccordionItem, Checkbox } from "@heroui/react";
import { Icon } from "@iconify/react";
import { BookDetail } from "./book-detail";
import { motion } from "framer-motion";

interface Book {
  id: string;
  title: string;
  author: string;
  forAge: string;
  grade: string;
  monthlyTheme: string;
  description: string;
  image: string;
}

export const BooksSection = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [searchBook, setSearchBook] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  const [selectedUser, setSelectedUser] = useState("children");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);

  // Sample books data - organized alphabetically
  const books: Book[] = [
    // Column A
    { id: "1", title: "A Black Hole Is Not a Hole", author: "Carolyn Cinami DeCristofano", forAge: "Children", grade: "Grade 5-8", monthlyTheme: "Creativity & Storytelling", description: "An exploration of black holes...", image: "/resources/books/black-hole.jpg" },
    { id: "2", title: "A Brief History of Time", author: "Stephen Hawking", forAge: "Children", grade: "Grade 11 / Year 12", monthlyTheme: "Sustainability & Responsibility", description: "A Brief History of Time is Stephen Hawking's groundbreaking exploration of the universe...", image: "/resources/books/brief-history.jpg" },
    { id: "3", title: "A Concise History of the Modern World", author: "William Woodruff", forAge: "Adults", grade: "Grade 9+", monthlyTheme: "Unity & Community", description: "A comprehensive look at modern history...", image: "/resources/books/concise-history.jpg" },
    { id: "4", title: "A Great Big Cuddle (Poetry)", author: "Michael Rosen", forAge: "Children", grade: "Pre-K-2", monthlyTheme: "Empathy & Relationships", description: "A collection of heartwarming poems...", image: "/resources/books/great-cuddle.jpg" },
    
    // Column B
    { id: "5", title: "Becoming", author: "Michelle Obama", forAge: "Adults", grade: "Grade 10+", monthlyTheme: "Student Leadership & Vision", description: "Michelle Obama's inspiring memoir...", image: "/resources/books/becoming.jpg" },
    { id: "6", title: "Beegu", author: "Alexis Deacon", forAge: "Children", grade: "Pre-K-2", monthlyTheme: "Inclusion & Diversity", description: "A story about belonging and friendship...", image: "/resources/books/beegu.jpg" },
    { id: "7", title: "Billy and the Beast", author: "Nadia Shireen", forAge: "Children", grade: "Grade 1-3", monthlyTheme: "Kindness & Community Actions", description: "An adventurous tale of friendship...", image: "/resources/books/billy-beast.jpg" },
    { id: "8", title: "Blink: The Power of Thinking Without Thinking", author: "Malcolm Gladwell", forAge: "Adults", grade: "Grade 10+", monthlyTheme: "Adaptability & Conflict Resolution", description: "Understanding rapid decision-making...", image: "/resources/books/blink.jpg" },
    { id: "9", title: "Bobby Bains Plays a Blinder", author: "Bali Rai", forAge: "Children", grade: "Grade 4-6", monthlyTheme: "Respect & Dignity", description: "A story about determination and teamwork...", image: "/resources/books/bobby-bains.jpg" },
    { id: "10", title: "Boy in the Tower", author: "Polly Ho-Yen", forAge: "Children", grade: "Grade 5-7", monthlyTheme: "Gratitude & Healthy Habits", description: "A gripping story of survival...", image: "/resources/books/boy-tower.jpg" },
    
    // Column C
    { id: "11", title: "Can I Build Another Me?", author: "Shinsuke Yoshitake", forAge: "Children", grade: "Grade 1-3", monthlyTheme: "Digital Wellbeing & Reflection", description: "A philosophical exploration for young minds...", image: "/resources/books/another-me.jpg" },
    { id: "12", title: "Can You See Me?", author: "Libby Scott", forAge: "Children", grade: "Grade 4-7", monthlyTheme: "Inclusion & Diversity", description: "A story about autism and acceptance...", image: "/resources/books/can-you-see.jpg" },
    { id: "13", title: "Charlotte Sometimes", author: "Penelope Farmer", forAge: "Children", grade: "Grade 5-8", monthlyTheme: "Creativity & Storytelling", description: "A time-travel adventure...", image: "/resources/books/charlotte.jpg" },
    { id: "14", title: "Check Mates", author: "Stewart Foster", forAge: "Children", grade: "Grade 5-8", monthlyTheme: "Empathy & Relationships", description: "Chess, friendship, and understanding...", image: "/resources/books/check-mates.jpg" },
  ];

  const grades = [
    "Pre-K/FS 1", "KG 1/FS 2", "KG 2/Year 1", 
    "Grade 1/Year 2", "Grade 2/Year 3", "Grade 3/Year 4",
    "Grade 4/Year 5", "Grade 5/Year 6", "Grade 6/Year 7",
    "Grade 7/Year 8", "Grade 8/Year 9", "Grade 9/Year 10",
    "Grade 10/Year 11", "Grade 11/Year 12", "Grade 12/Year 13"
  ];

  const monthlyThemes = [
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

  // Filter books based on search criteria
  const filteredBooks = books.filter(book => {
    const matchesBook = !searchBook || book.title.toLowerCase().includes(searchBook.toLowerCase());
    const matchesAuthor = !searchAuthor || book.author.toLowerCase().includes(searchAuthor.toLowerCase());
    const matchesTheme = !selectedTheme || book.monthlyTheme === selectedTheme;
    const matchesGrade = selectedGrades.length === 0 || selectedGrades.some(grade => book.grade.includes(grade));
    return matchesBook && matchesAuthor && matchesTheme && matchesGrade;
  });

  // Group books alphabetically
  const groupedBooks = filteredBooks.reduce((acc, book) => {
    const firstLetter = book.title[0].toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(book);
    return acc;
  }, {} as Record<string, Book[]>);

  if (selectedBook) {
    return <BookDetail book={selectedBook} onBack={() => setSelectedBook(null)} />;
  }

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Description */}
        <p className="text-white/90 text-center mb-8 max-w-3xl mx-auto">
          Discover a carefully curated list of books for children and parents, organized by age group and monthly 
          theme. Parents can find inspiring reads for their children from Read like a CEO collection while also exploring 
          thoughtful suggestions for themselves that tie back to each month's focus.
        </p>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 space-y-4">
            <h3 className="text-white font-bold text-lg mb-4">Filters</h3>
            
            {/* Search Book */}
            <Input
              placeholder="Search Book"
              value={searchBook}
              onChange={(e) => setSearchBook(e.target.value)}
              startContent={<Icon icon="solar:magnifer-linear" className="text-white/50" />}
              classNames={{
                input: "text-white placeholder:text-white/50",
                inputWrapper: "bg-pomegranate-700/50 border-white/30 hover:border-white/50"
              }}
            />

            {/* Search Author */}
            <Input
              placeholder="Search Author"
              value={searchAuthor}
              onChange={(e) => setSearchAuthor(e.target.value)}
              startContent={<Icon icon="solar:magnifer-linear" className="text-white/50" />}
              classNames={{
                input: "text-white placeholder:text-white/50",
                inputWrapper: "bg-pomegranate-700/50 border-white/30 hover:border-white/50"
              }}
            />

            {/* User Type */}
            <Select
              label="User"
              selectedKeys={[selectedUser]}
              onSelectionChange={(keys) => setSelectedUser(Array.from(keys)[0] as string)}
              classNames={{
                trigger: "bg-pomegranate-700/50 border-white/30 text-white hover:border-white/50",
                label: "text-white/70",
                value: "text-white"
              }}
            >
              <SelectItem key="children">Children</SelectItem>
              <SelectItem key="adults">Adults</SelectItem>
            </Select>

            {/* Monthly Theme */}
            <Select
              label="Monthly Theme"
              placeholder="Select theme"
              selectedKeys={selectedTheme ? [selectedTheme] : []}
              onSelectionChange={(keys) => setSelectedTheme(Array.from(keys)[0] as string || "")}
              classNames={{
                trigger: "bg-pomegranate-700/50 border-white/30 text-white hover:border-white/50",
                label: "text-white/70",
                value: "text-white"
              }}
            >
              {monthlyThemes.map((theme) => (
                <SelectItem key={theme}>{theme}</SelectItem>
              ))}
            </Select>

            {/* Year/Grade Accordion */}
            <Accordion 
              className="bg-pomegranate-700/50 rounded-lg"
              itemClasses={{
                title: "text-white",
                content: "text-white",
                trigger: "text-white"
              }}
            >
              <AccordionItem key="grades" title="Year/Grade">
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {grades.map((grade) => (
                    <Checkbox
                      key={grade}
                      isSelected={selectedGrades.includes(grade)}
                      onValueChange={(isSelected) => {
                        if (isSelected) {
                          setSelectedGrades([...selectedGrades, grade]);
                        } else {
                          setSelectedGrades(selectedGrades.filter(g => g !== grade));
                        }
                      }}
                      classNames={{
                        label: "text-white/80 text-sm",
                        wrapper: "border-white/50"
                      }}
                    >
                      {grade}
                    </Checkbox>
                  ))}
                </div>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Books Grid */}
          <div className="flex-1">
            <h3 className="text-white font-bold text-xl mb-6">Books</h3>
            <div className="grid grid-cols-5 gap-4">
              {['A', 'B', 'C', 'D', 'E'].map((letter) => (
                <div key={letter} className="space-y-3">
                  <h4 className="text-white font-bold text-lg border-b border-white/30 pb-2">{letter}</h4>
                  {groupedBooks[letter]?.map((book) => (
                    <motion.div
                      key={book.id}
                      whileHover={{ scale: 1.02 }}
                      className="cursor-pointer"
                      onClick={() => setSelectedBook(book)}
                    >
                      <p className="text-white/80 text-sm hover:text-white transition-colors">
                        • {book.title}
                      </p>
                    </motion.div>
                  )) || <p className="text-white/40 text-sm italic">No books</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};