import React from "react";
import { AboutHero } from "../components/about/about-hero";
import { FounderMessage } from "../components/about/founder-message";
import { FamilyBondingMatters } from "../components/about/family-bonding-matters";
import { OurMissionValuesSection } from "../components/about/our-mission-values-section";
import { ReadyToTransformSection } from "../components/about/ready-to-transform-section";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <FounderMessage />
      <FamilyBondingMatters />
      <OurMissionValuesSection />
      <ReadyToTransformSection />
    </>
  );
};

export default AboutPage;