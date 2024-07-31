import React from "react";

function DashCard({ title, data }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 sm:px-1">
      <div
        className={`h-24 w-18 rounded-sm bg-white border-green-200 border-[1px] flex items-center justify-center  cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-out m-2`}
      >
        <div className="text-center">
          <h2 className="text-blue-800 text-md font-bold">{title}</h2>
          <span className="text-gray-600 text-xl font-bold mt-1">
            {data}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DashCard;
