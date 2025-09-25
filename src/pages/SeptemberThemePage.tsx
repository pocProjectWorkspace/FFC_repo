import React, { useState } from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { SeptemberThemeTabs } from "../components/monthly-themes/september-theme-tabs";

type TabType = "introduction" | "meaning" | "practice";

const SeptemberThemePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>("introduction");

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#983a45' }}>
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <Button
          onClick={() => navigate('/monthly-themes')}
          className="bg-white/20 text-white hover:bg-white/30 mb-6"
          startContent={<Icon icon="lucide:arrow-left" />}
        >
          Back
        </Button>

        <div className="text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">September</h1>
          <h2 className="text-3xl md:text-4xl">Respect & Dignity</h2>
        </div>

        {/* Tabs Component */}
        <SeptemberThemeTabs 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />
      </div>
    </div>
  );
};

export default SeptemberThemePage;