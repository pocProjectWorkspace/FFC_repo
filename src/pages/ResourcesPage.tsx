import React, { useState } from "react";
import { ResourcesHero } from "../components/resources/resources-hero";
import { ResourcesNav } from "../components/resources/resources-nav";
import { BooksSection } from "../components/resources/books-section";
import { GamesSection } from "../components/resources/games-section";
import { QuizzesSection } from "../components/resources/quizzes-section";
import { ChallengesSection } from "../components/resources/challenges-section";

export type ResourceSection = "books" | "games" | "quizzes" | "challenges";

const ResourcesPage = () => {
  const [activeSection, setActiveSection] = useState<ResourceSection>("books");

  return (
    <div className="min-h-screen bg-pomegranate">
      <ResourcesHero />
      <ResourcesNav activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Section Content */}
      <div className="bg-pomegranate min-h-[600px]">
        {activeSection === "books" && <BooksSection />}
        {activeSection === "games" && <GamesSection />}
        {activeSection === "quizzes" && <QuizzesSection />}
        {activeSection === "challenges" && <ChallengesSection />}
      </div>
    </div>
  );
};

export default ResourcesPage;