import React from "react";

function ProfitCard({ title, countno, color, icon }) {
  // Define a mapping of colors to Tailwind CSS classes
  const colorClasses = {
    red: "border-red-500",
    green: "border-green-500",
    blue: "border-blue-500",
    orange: "border-orange-500",
    // Add more colors as needed
  };

  // Select the CSS class based on the color prop
  const borderColorClass = colorClasses[color] || "border-gray-500"; // Default to gray if color is not found

  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-4 px-4 sm:px-1">
      <div
        className={`h-24 w-30 rounded-md bg-white ${borderColorClass} border-l-2 border-r-2 flex items-center justify-center px-8 cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-out m-2`}
      >
        <div className="text-center">
          <h1 className="text-gray-800 text-lg leading-6 font-bold mt-1">
            {countno}
          </h1>
          <h2 className="text-indigo-700 text-sm leading-5 font-bold">
            {title}
          </h2>
        </div>
        <div className="ml-6">{icon}</div>
      </div>
    </div>
  );
}

export default ProfitCard;
