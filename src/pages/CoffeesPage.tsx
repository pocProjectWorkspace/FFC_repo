import React from "react";
import { CoffeesHero } from "../components/coffees/coffees-hero";
import { BlendShowcase } from "../components/coffees/blend-showcase";
import { SingleOriginDiscovery } from "../components/coffees/single-origin-discovery";
import { WhyCoffeeMatters } from "../components/coffees/why-coffee-matters";
import { CoffeesCTA } from "../components/coffees/coffees-cta";

const CoffeesPage = () => {
  return (
    <div className="min-h-screen">
      <CoffeesHero />
      <BlendShowcase />
      <SingleOriginDiscovery />
      <WhyCoffeeMatters />
      <CoffeesCTA />
    </div>
  );
};

export default CoffeesPage;