import React from "react";

export default function Search() {
  return (
    <div className="flex items-center w-full bg-white border border-stroke rounded-lg">
      <div className="flex items-center justify-between w-full">
        <input
          type="text"
          placeholder="Προορισμός"
          className="w-[328px] h-[64px] p-2 px-[32px] bg-white rounded-l-lg focus:outline-none"
        />
        <div className="w-[1px] h-[32px] bg-field-border"></div>
        <input
          type="date"
          placeholder="Check In"
          className="w-[218.5px] h-[64px] p-2 px-[32px] bg-white focus:outline-none"
        />
        <div className="w-[1px] h-[32px] bg-field-border"></div>
        <input
          type="date"
          placeholder="Check Out"
          className="w-[218.5px] h-[64px] p-2 px-[32px] bg-white focus:outline-none"
        />
        <div className="w-[1px] h-[32px] bg-field-border"></div>
        <input
          type="number"
          placeholder="Αριθμός ατόμων"
          className="w-[172px] h-[64px] p-2 px-[16px] bg-white focus:outline-none"
        />

        
      </div>
    <button className="w-[142px] h-[48px] py-[16px] px-[32px] flex items-center justify-center bg-accent-green text-white rounded-lg  mr-2 gap-2">
      <i className="material-icons text-[16px] leading-none">search</i>
      <span>Αναζήτηση</span>
    </button>


      
    </div>
  );
}
