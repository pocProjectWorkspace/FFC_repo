import React, { useState } from "react";
import { CafesHero } from "../components/cafes/cafes-hero";
import { CafesSearchFilters } from "../components/cafes/cafes-search-filters";
import { LocationGrid } from "../components/cafes/location-grid";
import { WhyVisitSection } from "../components/cafes/why-visit-section";
import { WeeklyHighlights } from "../components/cafes/weekly-highlights";
import { CafesCTA } from "../components/cafes/cafes-cta";

// Sample location data
const locations = [
  {
    id: 1,
    name: "Dubai American Academy",
    type: "school",
    emirate: "dubai",
    address: "Al Barsha, Dubai",
    image: "/locations/daa-cafe.jpg",
    description: "Our flagship café sets the benchmark for connection-driven design",
    fullDescription: "Located in the heart of Dubai, this flagship Family First Café brings our full concept to life. Designed with natural materials, soft lighting, and a blend of communal and private family seating, it's a space for bonding and relaxation.",
    hours: {
      weekdays: "7:30 AM – 6:00 PM (Sun–Thu)",
      weekend: "8:00 AM – 4:00 PM (Sat)"
    },
    features: ["Play area", "High chairs", "Stroller parking", "Family tables"],
    events: ["Pancake Picnics", "Family Chef Day", "After-School Clubs"],
    highlight: "Flagship Location"
  },
  {
    id: 2,
    name: "FirstPoint School",
    type: "school", 
    emirate: "dubai",
    address: "The Villa, Dubai",
    image: "/locations/firstpoint-cafe.jpg",
    description: "A cozy community hub for families in The Villa neighborhood",
    fullDescription: "Nestled in the heart of The Villa community, this café offers a warm, intimate setting perfect for family gatherings and quiet moments.",
    hours: {
      weekdays: "7:00 AM – 5:30 PM (Sun–Thu)",
      weekend: "8:30 AM – 3:30 PM (Sat)"
    },
    features: ["Reading corner", "Family lounge", "Outdoor seating", "Kids menu"],
    events: ["Family Quiz Brunch", "Storytelling Hours", "Weekend Workshops"],
    highlight: "Coming Soon"
  },
  {
    id: 3,
    name: "GEMS Modern Academy",
    type: "school",
    emirate: "dubai", 
    address: "Al Mizhar, Dubai",
    image: "/locations/modern-academy-cafe.jpg",
    description: "Modern design meets family comfort in this vibrant space",
    fullDescription: "A contemporary café space that balances modern aesthetics with family-friendly functionality, perfect for busy parents and active children.",
    hours: {
      weekdays: "7:45 AM – 5:45 PM (Sun–Thu)",
      weekend: "9:00 AM – 4:00 PM (Sat)"
    },
    features: ["Study nooks", "Activity corner", "Family booths", "Quick service"],
    events: ["Kids' Barista Workshop", "Parent Coffee Club", "Creative Saturdays"],
    highlight: "Coming Soon"
  }
];

const CafesPage = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedEmirate, setSelectedEmirate] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = locations.filter(location => {
    const matchesType = selectedType === "all" || location.type === selectedType;
    const matchesEmirate = selectedEmirate === "all" || location.emirate === selectedEmirate;
    const matchesSearch = location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         location.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesType && matchesEmirate && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <CafesHero />
      
      <CafesSearchFilters
        searchQuery={searchQuery}
        selectedType={selectedType}
        selectedEmirate={selectedEmirate}
        onSearchChange={setSearchQuery}
        onTypeChange={setSelectedType}
        onEmirateChange={setSelectedEmirate}
      />
      
      <LocationGrid locations={filteredLocations} />
      
      <WhyVisitSection />
      
      <WeeklyHighlights />
      
      <CafesCTA />
    </div>
  );
};

export default CafesPage;