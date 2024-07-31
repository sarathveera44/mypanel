import React from "react";

function MiniDash({ tripPanelHeading, viewMoreHeading, miniData }) {
  return (
    <div className="p-4 w-full">
      <div className="flex justify-between p-2">
        <h2 className="text-gray-800 text-sm font-bold uppercase">
          {tripPanelHeading}
        </h2>
        <a
          href="#view-more"
          className="text-fixblue text-sm font-bold uppercase"
        >
          {viewMoreHeading}
        </a>
      </div>
        <hr className="border-1 border-gray-300 p-2"/>
        <div className="grid grid-cols-2 gap-2">
          {miniData.map((data, index) => (
            <div key={index} className={`border-gray-300 border-[1px] rounded-sm text-center`}>
              <h3 className={`text-gray-800 bg-${data.color}-400 p-1  text-sm font-semibold text-white uppercase`}>{data.heading}</h3>
              <p className="text-gray-500 text-md font-bold p-1">{data.data}</p>
            </div>
          ))}
        </div>
      </div>
  );
}

export default MiniDash;
