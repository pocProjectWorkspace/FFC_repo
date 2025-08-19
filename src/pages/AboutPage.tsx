import React from "react";
import { AboutHero } from "../components/about/about-hero";
import { FounderMessage } from "../components/about/founder-message";
import { OurStory } from "../components/about/our-story";
import { MissionValues } from "../components/about/mission-values";
import { FamilyBondingMatters } from "../components/about/family-bonding-matters";
import { OurImpact } from "../components/about/our-impact";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <FounderMessage />
      <OurStory />
      <MissionValues />
      <FamilyBondingMatters />
      <OurImpact />
    </>
  );
};

export default AboutPage;