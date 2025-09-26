import React from "react";
import { HeroSection } from "../components/home/hero-section";
import { WhyBondingMattersSection } from "../components/home/why-bonding-matters-section";
import { CreatingBondingMomentsSection } from "../components/home/creating-bonding-moments-section";
import { FamilyTableSection } from "../components/home/family-table-section";
import { OurCommunitySection } from "../components/home/our-community-section";

const HomePage = () => {
  return (
    <>
      {/* Hero Section - Updated with new content */}
      <HeroSection />
      
      {/* Why Family Bonding Matters - With Read More button to About */}
      <WhyBondingMattersSection />
      
      {/* Creating Bonding Moments - Events, Activations, Resources */}
      <CreatingBondingMomentsSection />
      
      {/* On the Family Table - Menu Section */}
      <FamilyTableSection />
      
      {/* Our Community - Purpose Section */}
      <OurCommunitySection />
    </>
  );
};

export default HomePage;