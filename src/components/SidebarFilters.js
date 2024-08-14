import React, { useState } from "react";
import ReactSlider from "react-slider";

export default function SidebarFilters({ packages, onPriceChange }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [selectedRange, setSelectedRange] = useState('');

  const priceRanges = [
    { label: 'Έως 50 €', value: '0-50', min: 0, max: 50 },
    { label: '50 - 150 €', value: '50-150', min: 50, max: 150 },
    { label: '150 - 500 €', value: '150-500', min: 150, max: 500 }
  ];

  const handlePriceChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
    onPriceChange(min, max);
  };

  const handleRangeChange = (range) => {
    setSelectedRange(range.value);
    setMinPrice(range.min);
    setMaxPrice(range.max);
    onPriceChange(range.min, range.max);
  };

  return (
    <aside className="w-[312px] bg-white p-4 shadow-md rounded-lg mr-2 mt-[90px]">
      <h2 className="text-h5 font-bold mb-4">Φίλτρα</h2>

      <div className="mb-6">
        <h3 className="text-h7 font-bold mb-2">Εύρος Τιμής</h3>

        <div className="flex gap-2 mb-4">
          <div className="flex-1">
            <label className="block text-small-text-12 text-black mb-1" htmlFor="minPrice">
              Από
            </label>
            <input
              type="number"
              id="minPrice"
              value={minPrice}
              onChange={(e) => handlePriceChange(Number(e.target.value), maxPrice)}
              placeholder="€"
              className="w-full h-[40px] p-[12px] bg-translucent-bg border border-field-border rounded-lg focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block text-small-text-12 text-black mb-1" htmlFor="maxPrice">
              Έως
            </label>
            <input
              type="number"
              id="maxPrice"
              value={maxPrice}
              onChange={(e) => handlePriceChange(minPrice, Number(e.target.value))}
              placeholder="€"
              className="w-full h-[40px] p-[12px] bg-translucent-bg border border-field-border rounded-lg focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center w-full h-[48px] px-[2px] gap-[2px]">
          <ReactSlider
            value={[minPrice, maxPrice]}
            onChange={(values) => handlePriceChange(values[0], values[1])}
            min={0}
            max={500}
            className="w-full h-[4px] bg-accent-blue rounded-full"
            thumbClassName="custom-thumb"
            trackClassName="custom-track"
            renderThumb={(props, state) => <div {...props} className="custom-thumb"></div>}
          />
        </div>

        <div className="mt-4">
          {priceRanges.map((range, index) => (
            <label key={index} className="flex items-center gap-2 mb-4 cursor-pointer">
              <input
                type="radio"
                value={range.value}
                checked={selectedRange === range.value}
                onChange={() => handleRangeChange(range)}
                className="w-[16px] h-[16px] border border-field-border rounded-full cursor-pointer"
              />
              <span className="text-field-text-14 text-black">{range.label}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
