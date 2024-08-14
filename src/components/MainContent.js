import React, { useState, useEffect } from 'react';
import SidebarFilters from './SidebarFilters';
import PackagesGrid from './PackagesGrid';

export default function MainContent({ packages }) {
  const [filteredPackages, setFilteredPackages] = useState(packages);
  const [sortOrder, setSortOrder] = useState('desc'); // Default to descending
  const [filterMealPlan, setFilterMealPlan] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);

  useEffect(() => {
    setFilteredPackages(packages);
  }, [packages]);

  const handlePriceChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
    applyFiltersAndSorting(min, max, sortOrder, filterMealPlan);
  };

  const handleDropdownChange = (option) => {
    let newSortOrder = sortOrder;
    let newFilterMealPlan = filterMealPlan;

    if (option === 'Price descending') {
      newSortOrder = 'desc';
    } else if (option === 'Price Ascending') {
      newSortOrder = 'asc';
    } else if (option === 'Must include meal plan') {
      newFilterMealPlan = true;
    } else {
      newFilterMealPlan = false;
    }

    setSortOrder(newSortOrder);
    setFilterMealPlan(newFilterMealPlan);
    applyFiltersAndSorting(minPrice, maxPrice, newSortOrder, newFilterMealPlan);
  };

  const applyFiltersAndSorting = (min, max, order, mealPlan) => {
    let filtered = packages.filter(pkg => pkg.price >= min && pkg.price <= max);

    if (mealPlan) {
      filtered = filtered.filter(pkg => pkg.meal_plan);
    }

    const sorted = filtered.sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });

    setFilteredPackages(sorted);
  };

  return (
    <main className="container mx-auto mt-10 flex">
      <SidebarFilters packages={filteredPackages} onPriceChange={handlePriceChange} />
      <PackagesGrid 
        packages={filteredPackages} 
        onPriceChange={handlePriceChange} 
        onDropdownChange={handleDropdownChange} 
      />
    </main>
  );
}
