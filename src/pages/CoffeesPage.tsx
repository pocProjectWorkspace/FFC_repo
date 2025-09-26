import React from "react";
import { CoffeesHero } from "../components/coffees/coffees-hero";
import { OurCoffeesSection } from "../components/coffees/our-coffees-section";
import { CoolSipsFoodSection } from "../components/coffees/cool-sips-food-section";
import { MerchandiseSection } from "../components/coffees/merchandise-section";
import { BlendShowcase } from "../components/coffees/blend-showcase";
import { SingleOriginDiscovery } from "../components/coffees/single-origin-discovery";
import { WhyCoffeeMatters } from "../components/coffees/why-coffee-matters";
import { CoffeesCTA } from "../components/coffees/coffees-cta";

const CoffeesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Updated Hero Section */}
      <CoffeesHero />
      
      {/* New Section: Our Coffees (from Image 1) */}
      <OurCoffeesSection />
      
      {/* New Section: Cool Sips & Food (from Image 2) */}
      <CoolSipsFoodSection />
      
      {/* New Section: Merchandise (from Images 2 & 3) */}
      <MerchandiseSection />
      
      {/* Existing Section: Our Signature Blends */}
      <BlendShowcase />
      
      {/* Existing Section: Single Origin Discovery */}
      <SingleOriginDiscovery />
      
      {/* Existing Section: Why Coffee Matters */}
      <WhyCoffeeMatters />
      
      {/* Existing Section: Coming Soon CTA */}
      <CoffeesCTA />
      
    </div>
  );
};

export default CoffeesPage;