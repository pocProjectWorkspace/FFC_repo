
import React from "react";
import { WelcomeHero } from "./welcome-hero";
import { WelcomeMessage } from "./welcome-message";
import { CoffeeExperience } from "./coffee-experience";
import { KindredBlend } from "./kindred-blend"
import { NextSteps } from "./next-steps";

const WelcomePage = () => {
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

export default WelcomePage;