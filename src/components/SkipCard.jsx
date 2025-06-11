import React from 'react';

const SkipCard = ({ skip, onSelect }) => {
  const priceWithVAT = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);

  // image path based on skip size
  const imagePath = `/images/skips/${skip.size}-yarder-skip.jpg`;

  return (
    <div className="bg-white rounded-xl shadow-card hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between max-w-sm mx-auto border border-gray-200">
      {/* Skip Image */}
      <div className="mb-4">
        <img
          src={imagePath}
          alt={`${skip.size}-yard skip`}
          onError={(e) => { e.target.src = "/images/skips/default.png"; }}
          className="w-full h-40 object-contain rounded-lg border border-gray-100"
        />
      </div>

      {/* Text Info */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-primary mb-2">
          {skip.size}-Yard Skip
        </h2>

        <ul className="text-sm text-gray-600 space-y-1 mb-4">
          <li>
            <span className="font-medium text-gray-800">Hire Period:</span> {skip.hire_period_days} days
          </li>
          <li>
            <span className="font-medium text-gray-800">On-Road Use:</span>{" "}
            <span className={skip.allowed_on_road ? "text-green-600 font-semibold" : "text-red-500 font-semibold"}>
              {skip.allowed_on_road ? "Allowed" : "Not Allowed"}
            </span>
          </li>
          <li>
            <span className="font-medium text-gray-800">Heavy Waste:</span>{" "}
            <span className={skip.allows_heavy_waste ? "text-green-600 font-semibold" : "text-red-500 font-semibold"}>
              {skip.allows_heavy_waste ? "Yes" : "No"}
            </span>
          </li>
        </ul>

        <p className="text-xl font-bold text-green-700 mb-4">
          £{priceWithVAT} <span className="text-sm text-gray-500">(incl. VAT)</span>
        </p>
      </div>

      <button
        onClick={() => onSelect(skip.id)}
        className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-300 shadow-md hover:shadow-lg"
      >
        Select Skip
      </button>
    </div>
  );
};

export default SkipCard;