import React from "react";
import { EventsHero } from "../components/events/events-hero";
import { BondingTalks } from "../components/events/bonding-talks";
import { UnitedInAction } from "../components/events/united-in-action";
import { EventsNewsletter } from "../components/events/events-newsletter";

const EventsPage = () => {
  return (
    <div className="min-h-screen">
      <EventsHero />
      <BondingTalks />
      <UnitedInAction />
      <EventsNewsletter />
    </div>
  );
};

export default EventsPage;