import React from 'react';
import PackagesGrid from './PackagesGrid';

export default function Results({ packages, onFilter, onSort }) {
  return (
    <div className="w-full max-w-[1320px] h-auto flex gap-6 mx-auto">
     
      <div className="w-full h-auto">
        <PackagesGrid packages={packages} />
      </div>
    </div>
  );
}
