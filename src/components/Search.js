import React from "react";

export default function Search() {
  return (
    <div className="gap-4 text-sm flex bg-white backdrop-blur-lg bg-white border border-stroke rounded-lg w-full flex-col p-2">
      <div className="flex items-center flex-col px-3 lg:flex-row lg:space-y-0 space-y-4 lg:space-x-4">
        
        <div className="w-full">
          <div className="w-full autocomplete relative z-50">
            <label className="text-sm" htmlFor="destination">Προορισμός</label>
            <input
              className="bg-transparent pt-2 !outline-0 leading-4 relative rounded-lg text-mid-gray text-base placeholder-gray-500 w-full focus:ring-0"
              type="text"
              id="destination"
              placeholder="Write your destination"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="w-full lg:hidden h-[1px] bg-field-border"></div>

        <div className="w-full flex flex-col lg:flex-row lg:gap-2 gap-4">
          <div className="flex-[3]">
            <div className="w-full autocomplete relative z-50">
              <label className="text-sm" htmlFor="date-range">Dates</label>
              <input
                className="bg-transparent pt-2 !outline-0 leading-4 relative rounded-lg text-mid-gray text-base placeholder-gray-500 w-full focus:ring-0"
                type="text"
                id="date-range"
                placeholder="Select date range"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </div>
          </div>

          <div className="w-full lg:hidden h-[1px] bg-field-border"></div>

          <div className="flex-[2]">
            <div className="w-full autocomplete relative z-50">
              <label className="text-sm" htmlFor="guests">Αριθμός ατόμων</label>
              <input
                className="bg-transparent pt-2 !outline-0 leading-4 relative rounded-lg text-mid-gray text-base placeholder-gray-500 w-full focus:ring-0"
                type="number"
                id="guests"
                placeholder="Number of Guests"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:hidden h-[1px] bg-field-border"></div>

        <div className="flex-none w-full lg:w-auto">
          <button className="w-full h-[48px] py-[16px] px-[32px] flex items-center justify-center bg-accent-green text-white rounded-lg">
            <i className="material-icons text-[16px] leading-none">search</i>
            <span>Αναζήτηση</span>
          </button>
        </div>
      </div>
    </div>
  );
}
