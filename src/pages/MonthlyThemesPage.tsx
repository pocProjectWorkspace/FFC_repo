import React from "react";
import { useNavigate } from "react-router-dom";
import { MonthlyThemesHero } from "../components/monthly-themes/monthly-themes-hero";
import { MonthlyThemesGrid } from "../components/monthly-themes/monthly-themes-grid";

const MonthlyThemesPage = () => {
  const navigate = useNavigate();
  
  const handleMonthClick = (month: string) => {
    if (month === "September") {
      // Navigate to September detail page
      navigate('/monthly-themes/september');
    } else {
      // For other months, could show a coming soon message or navigate to placeholder
      console.log(`${month} content coming soon`);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <MonthlyThemesHero />

      {/* Monthly Themes Grid */}
      <MonthlyThemesGrid onMonthClick={handleMonthClick} />
    </div>
  );
};

export default MonthlyThemesPage;