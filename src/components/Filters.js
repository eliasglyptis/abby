import React from "react";

function PriceRangeFilter() {
  return (
    <div className="w-full h-auto flex flex-col gap-6">
      <h3 className="text-h7 font-roboto font-semibold text-black">
        Ευρος τιμης
      </h3>
      <div className="flex gap-4">
        <div className="flex flex-col w-[128px]">
          <label className="text-small-text-12 font-roboto text-black">
            Από
          </label>
          <input
            type="text"
            placeholder="€"
            className="w-full h-[40px] p-[12px] bg-translucent-bg border border-field-border rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col w-[128px]">
          <label className="text-small-text-12 font-roboto text-black">
            Έως
          </label>
          <input
            type="text"
            placeholder="€"
            className="w-full h-[40px] p-[12px] bg-translucent-bg border border-field-border rounded-md focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default function Filters() {
  return (
    <div className="w-[312px] h-auto bg-translucent-bg p-[24px] rounded-lg">
      <h2 className="text-h5 font-roboto font-semibold text-black">
        ΦΙΛΤΡΑ
      </h2>
      <PriceRangeFilter />
    </div>
  );
}
