import React from "react";

export default function Breadcrumbs() {
  return (
    <div className="flex items-center justify-center gap-2 my-4">
      <span className="text-small-text-12 font-roboto font-light text-center text-black">
        Αρχική
      </span>
      <span className="w-4 h-4 flex items-center justify-center">
        <i className="material-icons text-accent-green">chevron_right</i>
      </span>
      <span className="text-small-text-12 font-roboto font-light text-center text-black">
        Ελλάδα
      </span>
      <span className="w-4 h-4 flex items-center justify-center">
        <i className="material-icons text-accent-green">chevron_right</i>
      </span>
      <span className="text-small-text-12 font-roboto font-light text-center text-black">
        Πακέτα
      </span>
    </div>
  );
}