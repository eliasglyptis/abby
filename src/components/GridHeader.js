import React, { useState } from "react";

export default function GridHeader() {
  const [selectedOption, setSelectedOption] = useState("Δημοφιλή");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center h-auto gap-4 mb-6 overflow-hidden px-4">
      <div className="text-16-bold font-roboto text-black">
        139 διαθέσιμα πακέτα διακοπών
      </div>

      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="relative flex-1 min-w-0 overflow-hidden">
          <select
            className="w-full h-[42px] bg-translucent-bg border border-field-border rounded-lg px-4 py-2 text-field-text-14 font-roboto text-black appearance-none cursor-pointer overflow-ellipsis"
            value={selectedOption}
            onChange={handleDropdownChange}
          >
            <option value="Δημοφιλή">Filters by price</option>
            <option value="Destination">Another filter</option>
          </select>
          <i className="material-icons absolute right-4 top-3 text-field-text-14 text-black pointer-events-none">
            expand_more
          </i>
        </div>

        <button className="md:hidden flex-shrink-0 w-auto h-[48px] py-[16px] px-[16px] flex items-center justify-center text-accent-green border border-accent-green rounded-lg overflow-hidden">
          <i className="material-icons text-[16px] leading-none">tune</i>
          <span className="ml-2">Filter</span>
        </button>
      </div>
    </div>
  );
}
