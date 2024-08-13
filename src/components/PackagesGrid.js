import React from "react";
import GridHeader from "./GridHeader";
import PackageCard from "./PackageCard";

export default function PackagesGrid({ packages }) {
  console.log("Packages in grid:", packages);

  return (
    <section className="w-full max-w-[984px] h-auto mx-auto flex flex-col gap-[24px]">
      <GridHeader />
      {packages.length > 0 ? (
        <div className="grid grid-cols-3 gap-6">
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
