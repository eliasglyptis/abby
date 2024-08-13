import React from "react";

export default function Tabs() {
  return (
    <div className="flex w-[245px] h-[50px] p-[4px] gap-0 bg-translucent-bg border border-stroke rounded-full">
      <div className="w-[113px] h-[42px] p-[16px_24px] bg-white shadow-lg rounded-full flex items-center">
        <span className="text-button text-accent-green font-roboto font-medium leading-[16px]">
          Εκδρομές
        </span>
      </div>
      <div className="w-[124px] h-[42px] p-[16px_24px] flex items-center">
        <span className="text-button text-gray font-roboto font-medium leading-[16px]">
          Ξενοδοχεία
        </span>
      </div>
    </div>
  );
}
