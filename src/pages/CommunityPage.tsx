import React from "react";
import { CommunityHero } from "../components/community/community-hero";
import { CommunityInvitation } from "../components/community/community-invitation";
import { LoyaltyPrograms } from "../components/community/loyalty-programs";
import { OurInitiatives } from "../components/community/our-initiatives";
import { TestimonialsSection } from "../components/community/testimonials-section";
import { RecognitionAchievements } from "../components/community/recognition-achievements";

const CommunityPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <CommunityHero />
      
      {/* Join our Community Form */}
      <CommunityInvitation />
      
      {/* Loyalty Programs */}
      <LoyaltyPrograms />
      
      {/* Our Initiatives */}
      <OurInitiatives />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Recognition and Achievements */}
      <RecognitionAchievements />
    </div>
  );
};

export default CommunityPage;