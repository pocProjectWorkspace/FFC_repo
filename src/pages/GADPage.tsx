import React from "react";
import { WelcomeHero } from "../components/welcome/welcome-hero";
import { WelcomeMessage } from "../components/welcome/welcome-message";
import { CoffeeExperience } from "../components/welcome/coffee-experience";
import { KindredBlend } from "../components/welcome/kindred-blend";
import { NextSteps } from "../components/welcome/next-steps";

const GADPage = () => {
  return (
    <>
      <WelcomeHero />
      <WelcomeMessage />
      <CoffeeExperience />
      <KindredBlend />
      <NextSteps />
    </>
  );
};

export default GADPage;