import React from "react";

export default function PackageCard({ photo, name, city, price, meal_plan }) {
  return (
    <div className="bg-translucent-bg rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <img
        src={photo}
        alt={name}
        className="w-full h-[282px] object-cover rounded-xl"
      />

      <div className="p-5 flex flex-col flex-1">
        <p className="text-small-text-12 text-gray mb-2">{meal_plan} | {city}</p>

        <h3 className="text-h6 font-semibold text-black uppercase mb-4">{name}</h3>

        <div className="flex-1"></div>

        <div className="flex justify-between items-center mt-auto">
          <div className="text-h6 font-semibold text-black">
            <span className="text-small-text-12 font-bold text-black">ΑΠΟ </span>
            {price}€
          </div>
          <button className="bg-accent-green text-white py-2 px-4 rounded-lg">
            Κράτηση
          </button>
        </div>
      </div>
    </div>
  );
}
