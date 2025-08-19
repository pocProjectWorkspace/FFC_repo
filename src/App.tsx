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
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cafes" element={<CafesPage />} />
            <Route path="/coffees" element={<CoffeesPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/GAD" element={<GADPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            {/* Future routes */}
            {/* <Route path="/shop" element={<ShopPage />} /> */}
            {/* <Route path="/activities" element={<ActivitiesPage />} /> */}
            {/* <Route path="/news" element={<NewsPage />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}