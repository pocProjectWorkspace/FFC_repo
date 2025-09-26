import React from "react";
import { CafesHero } from "../components/cafes/cafes-hero";
import { DesignedForMomentsSection } from "../components/cafes/designed-for-moments-section";
//import { MeetOurChampionsSection } from "../components/cafes/meet-our-champions-section";

const CafesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with new design */}
      <CafesHero />
      
      {/* Designed for Meaningful Moments Section */}
      <DesignedForMomentsSection />
      
    </div>
  );
};

export default CafesPage;