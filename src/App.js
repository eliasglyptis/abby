import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import { fetchPackages } from "./services/api";

export default function App() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    async function loadPackages() {
      try {
        const response = await fetchPackages();
        setPackages(response.data); // Use the correct data structure
      } catch (error) {
        console.error("Failed to load packages", error);
      }
    }
    loadPackages();
  }, []);

  return (
    <div className="bg-white text-black font-roboto">
      <Hero />
      <MainContent packages={packages} />
    </div>
  );
}
