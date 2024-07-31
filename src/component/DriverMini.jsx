import React, { Fragment, useState } from "react";
import {
  FaEdit,
  FaEllipsisV,
  FaLocationArrow,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function DriverMini({ driver }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  if (!driver) {
    return null; // or render a loading state or handle accordingly
  }

  const {
    imageSrc,
    name,
    experience,
    checkupStatus,
    lastProcessed,
    currentlyAtLink,
    lastSeen,
  } = driver;

  return (
    <Fragment>
      <div className="max-w-sm bg-zinc-100 p-2 text-fixblack">
        <div className="flex flex-wrap items-center justify-between">
          <img
            src={imageSrc}
            alt="driverimg"
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
                <div className="px-4 py-2">
                  <Link to="/admin/track" className="hover:text-fixblue cursor-pointer">
                    <MenuItem icon={<FaLocationArrow />} title="Track">
                      Locate your driver
                    </MenuItem>
                  </Link>
                  <Link
                    to="/admin/checkup"
                    className="hover:text-fixblue  cursor-pointer"
                  >
                    <MenuItem icon={<FaShieldAlt />} title="Check Up">
                      Complete your driver routine check up
                    </MenuItem>
                  </Link>

                  <Link
                    to="/admin/editprofile"
                    className="hover:text-fixblue  cursor-pointer"
                  >
                    <MenuItem icon={<FaEdit />} title="Edit">
                      Build profile with amenities
                    </MenuItem>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <hr className="bg-fixblack h-0.5 my-2" />

        <div className="flex flex-col flex-wrap justify-between py-1">
          <p className="text-fixblack">Name: {name}</p>
          <span>Experience: ({experience} exp)</span>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2">
          <button className="bg-green-400 rounded-none p-0.5">
            {checkupStatus}
          </button>
          <p className="text-xs">Last Processed: {lastProcessed}</p>
        </div>
        <div className="flex flex-wrap justify-between">
          <a href={currentlyAtLink} className="break-all">
            Currently At:{" "}
            <span className="text-fixblue underline">{currentlyAtLink}</span>
          </a>
          <span className="text-xs">Last Seen: {lastSeen}</span>
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

export default DriverMini;
