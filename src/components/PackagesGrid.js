import React from "react";
import GridHeader from "./GridHeader";
import PackageCard from "./PackageCard";

export default function PackagesGrid({ packages, onPriceChange }) { 


  return (
    <section className="w-full lg:max-w-[984px] h-auto mx-auto flex flex-col gap-[24px]">
      <GridHeader packages={packages} onPriceChange={onPriceChange} /> 
      {packages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              photo={pkg.photo}
              name={pkg.name}
              city={pkg.city}
              meal_plan={pkg.meal_plan}
              price={pkg.price}
            />
          ))}
        </div>
      ) : (
        <p>No packages available.</p>
      )}
    </section>
  );
}
