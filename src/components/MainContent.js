import React, { useState, useEffect } from 'react';
import SidebarFilters from './SidebarFilters';
import PackagesGrid from './PackagesGrid';

export default function MainContent({ packages }) {
  const [filteredPackages, setFilteredPackages] = useState(packages);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    console.log('Initial Packages:', packages); // Log the initial packages
    setFilteredPackages(packages); // Set the initial packages when component mounts
  }, [packages]);

  const handlePriceChange = (min, max) => {
    const filtered = packages.filter(pkg => pkg.price >= min && pkg.price <= max);
    console.log('Filtered Packages:', filtered); // Log the filtered packages
    setFilteredPackages(filtered);
  };

  const sortPackages = (order) => {
    const sortedPackages = [...filteredPackages].sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
    setFilteredPackages(sortedPackages);
  };

  const filterByMealPlan = (mealPlan) => {
    const filtered = packages.filter(pkg => pkg.meal_plan === mealPlan);
    setFilteredPackages(filtered);
  };

  return (
    <main className="container mx-auto mt-10 flex">
      <SidebarFilters packages={filteredPackages} onPriceChange={handlePriceChange} />
      <PackagesGrid packages={filteredPackages} onPriceChange={handlePriceChange} />
    </main>
  );
}
