import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import PageTitle from "./PageTitle";
import SearchSection from "./SearchSection";

export default function Hero() {
  return (
    <div className="w-full max-w-[1920px] h-auto flex flex-col items-center px-8 gap-4"> 
      <div className="w-full max-w-[1096px] flex justify-center">
        <Breadcrumbs />
      </div>
      <div className="w-full max-w-[648px] flex justify-center mt-[64px]"> 
        <PageTitle />
      </div>
      <div className="w-full max-w-[1096px] flex justify-center mt-[64px]"> 
        <SearchSection />
      </div>
    </div>
  );
}
