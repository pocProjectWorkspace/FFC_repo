import React from "react";
import { AboutHero } from "../components/about/about-hero";
import { FounderMessage } from "../components/about/founder-message";
import { OurBondingRootsSection } from "../components/about/our-bonding-roots-section";
import { FamilyBondingMatters } from "../components/about/family-bonding-matters";
import { OurImpact } from "../components/about/our-impact";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <FounderMessage />
      <OurBondingRootsSection />
      <FamilyBondingMatters />
      <OurImpact />
    </>
  );
};

export default AboutPage;