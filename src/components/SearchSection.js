import React from "react";
import Tabs from "./Tabs";
import Search from "./Search";

export default function SearchSection() {
  return (
    <div className="flex flex-col gap-2 w-[1096px] h-auto mx-auto items-center">
      <Tabs />
      <Search />
    </div>
  );
}
