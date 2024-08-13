import React, { useState } from "react";

export default function GridHeader() {
  const [selectedOption, setSelectedOption] = useState("Δημοφιλή");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-full flex justify-between items-center h-auto gap-0 mb-6">
      <div className="text-16-bold font-roboto text-black">
        139 διαθέσιμα πακέτα διακοπών
      </div>

      <div className="relative">
        <select
          className="w-[200px] h-[42px] bg-translucent-bg border border-field-border rounded-lg px-4 py-2 text-field-text-14 font-roboto text-black appearance-none cursor-pointer"
          value={selectedOption}
          onChange={handleDropdownChange}
        >
          <option value="Δημοφιλή">Δημοφιλή</option>
          <option value="Destination">Destination</option>
        </select>
        <i className="material-icons absolute right-4 top-3 text-field-text-14 text-black pointer-events-none">
          expand_more
        </i>
      </div>
    </div>
  );
}
