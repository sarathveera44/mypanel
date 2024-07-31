import React, { Fragment, useState } from "react";
import {
  FaEdit,
  FaEllipsisV,
  FaLocationArrow,
  FaPlusCircle,
} from "react-icons/fa";

function VehicleMini({ vehicle }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  if (!vehicle) {
    return null; // or handle loading state
  }

  const {
    imageSrc,
    brandName,
    model,
    vehicleNumber,
    vehicleType,
    bgColor,
    checkupStatus,
  } = vehicle;

  return (
    <Fragment>
      <div className="max-w-sm bg-zinc-100 p-4 text-fixblack">
        <div className="flex flex-wrap items-center justify-between">
          <img
            src={imageSrc}
            alt="VehicleImg"
            className="rounded-full w-10 h-10"
          />
          <div className="relative">
            <FaEllipsisV
              size={16}
              className="cursor-pointer"
              onClick={toggleMenu}
            />
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-100 border border-gray-300 shadow-lg rounded-md z-10">
                <div className="p-2">
                  <MenuItem icon={<FaLocationArrow />} title="Track">
                    Easily track your vehicle
                  </MenuItem>
                  <MenuItem icon={<FaPlusCircle />} title="Add Driver">
                    Add/Remove Driver
                  </MenuItem>
                  <MenuItem icon={<FaEdit />} title="Edit">
                    Build profile with amenities
                  </MenuItem>
                </div>
              </div>
            )}
          </div>
        </div>
        <hr className="bg-fixblack h-0.5 my-2" />

        <div className="flex flex-col flex-wrap justify-between py-1">
          <p className="text-fixblack">
            <b>Brand:</b> {brandName}
          </p>
          <span>
            <b>Model:</b> {model}
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2">
          <p className="text-fixblack">
            <b>Vehicle Number:</b> {vehicleNumber}
          </p>
          <span>
            <b>Type:</b> {vehicleType}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <button className={`${bgColor} rounded-sm px-2 py-1 text-fixwhite`}>
            {checkupStatus}
          </button>
        </div>
        <div className="flex justify-end">
          <button className="border-2 border-gray-300 rounded px-2 py-1 m-2 w-full bg-white font-bold">
            View Assigned Driver
          </button>
        </div>
      </div>
    </Fragment>
  );
}

function MenuItem({ icon, title, children }) {
  return (
    <div>
      <h2 className="flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h2>
      <span className="ml-5 block">{children}</span>
    </div>
  );
}

export default VehicleMini;
