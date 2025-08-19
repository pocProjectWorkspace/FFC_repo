import React from "react";
import { HeroSection } from "../components/home/hero-section";
import { MissionSection } from "../components/home/intro-section";
import { FeatureTilesSection } from "../components/home/feature-tiles-section";
import { EventsSection } from "../components/home/events-section";
import { AppDownloadSection } from "../components/home/app-download-section";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <FeatureTilesSection />
      <EventsSection />
      <AppDownloadSection />
    </>
  );
};

export default HomePage;