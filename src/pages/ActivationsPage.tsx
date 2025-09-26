import React, { useState } from "react";
import { ActivationsHero } from "../components/activations/activations-hero";
import { ThemeCalendar } from "../components/activations/theme-calendar";
import { LeadershipGemstones } from "../components/activations/leadership-gemstones";
import { ActivationsMenu } from "../components/activations/activations-menu";

const ActivationsPage = () => {
  // State management for the entire page
  const [selectedMonth, setSelectedMonth] = useState("september");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("4-8");
  const [activeTab, setActiveTab] = useState("activations"); // For tab navigation

  return (
    <div className="min-h-screen bg-pomegranate">
      {/* 1. Hero Section - Introduction text */}
      <ActivationsHero />
      
      {/* 2. Monthly Theme Calendar - Calendar button, tabs, and dropdowns */}
      <ThemeCalendar 
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedAgeGroup={selectedAgeGroup}
        setSelectedAgeGroup={setSelectedAgeGroup}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      
      {/* Conditional Content Based on Active Tab */}
      {activeTab === "activations" && (
        <>
          {/* 3. Leadership Gemstones - Now shows for ALL age groups with different content */}
          <LeadershipGemstones selectedAgeGroup={selectedAgeGroup} />
          
          {/* 4. Activations Menu - Shows age-specific activities */}
          <ActivationsMenu selectedAgeGroup={selectedAgeGroup} />
        </>
      )}
      
      {/* Audio Books Tab Content */}
      {activeTab === "audio" && (
        <section className="py-16" style={{ backgroundColor: '#983a45' }}>
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Audio Books</h2>
              <p className="text-lg mb-4">Coming Soon</p>
              <p className="text-white/80">Audio book content for {selectedAgeGroup} years age group</p>
            </div>
          </div>
        </section>
      )}
      
      {/* Poems & Artists Tab Content */}
      {activeTab === "poems" && (
        <section className="py-16" style={{ backgroundColor: '#983a45' }}>
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Poems & Artists</h2>
              <p className="text-lg mb-4">Coming Soon</p>
              <p className="text-white/80">Poems and artist content for {selectedAgeGroup} years age group</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ActivationsPage;