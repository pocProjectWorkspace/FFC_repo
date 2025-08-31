import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layouts/navbar";
import { Footer } from "./components/layouts/footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CafesPage from "./pages/CafesPage";
import CoffeesPage from "./pages/CoffeesPage";
import LocationsPage from "./pages/LocationsPage";
import EventsPage from "./pages/EventsPage";
import GADPage from "./pages/GADPage";
import WelcomePage from "./components/welcome/WelcomePage";

export default function App() {
  return (
    <Router>
      <div className="font-sans text-default-700 overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            {/* Main Routes - Accept both with and without trailing slashes */}
            <Route path="/" element={<HomePage />} />
            
            {/* About */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/" element={<AboutPage />} />
            
            {/* Cafes */}
            <Route path="/cafes" element={<CafesPage />} />
            <Route path="/cafes/" element={<CafesPage />} />
            
            {/* Coffees */}
            <Route path="/coffees" element={<CoffeesPage />} />
            <Route path="/coffees/" element={<CoffeesPage />} />
            
            {/* Locations */}
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/locations/" element={<LocationsPage />} />
            
            {/* Events */}
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/" element={<EventsPage />} />
            
            {/* GAD */}
            <Route path="/GAD" element={<GADPage />} />
            <Route path="/GAD/" element={<GADPage />} />
            
            {/* Welcome */}
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/welcome/" element={<WelcomePage />} />
            
            {/* Future routes */}
            {/* <Route path="/shop" element={<ShopPage />} /> */}
            {/* <Route path="/shop/" element={<ShopPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}