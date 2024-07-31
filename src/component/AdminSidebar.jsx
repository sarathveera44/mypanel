import React from "react";
import { FaTachometerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const AdminSidebar = ({ sidebarToggle }) => {
  const sidebarClass = `w-48 bg-gray-800 h-full fixed px-4 py-6 transition-all duration-300  ${
    sidebarToggle ? "-left-full" : "left-0  overflow-y-auto"
  }`;

  const sectionTitleClass =
    "text-xs uppercase text-gray-400 font-bold tracking-wider";

  const linkClass =
    "block py-2 pl-3 pr-4 text-sm text-center item-center justify-center text-gray-300 hover:bg-blue-700 hover:text-white rounded-lg";

  return (
    <div className={sidebarClass}>
      {/* Dashboard */}
      <div className="flex items-center justify-center mb-6">
        <FaTachometerAlt color="white" size={20} className="mr-3" />
        <h1 className="text-lg font-semibold text-white">
          <Link to="/dashboard">Dashboard</Link>
        </h1>
      </div>
      {/* Menu Sections */}
      <div>
        {/* Activities Area */}
        <div className="mb-6">
          <p className={sectionTitleClass}>Main Area</p>
          <ul className="mt-2">
            <li>
              <Link to="#" className={linkClass}>
                Fleet Panel
              </Link>
            </li>
            <li>
              <Link to="#" className={linkClass}>
                My Vendors
              </Link>
            </li>
            <li>
              <Link to="#" className={linkClass}>
                My Drivers
              </Link>
            </li>
            <li>
              <Link to="#" className={linkClass}>
                My Vehicles
              </Link>
            </li>
          </ul>
          <hr className="my-2" />
        </div>
        {/* Activate and Approve */}
        <div className="mb-6">
          <p className={sectionTitleClass}>Permission Area</p>
          <ul className="mt-2">
            <li>
              <Link to="/signup" className={linkClass}>
                Signup
              </Link>
            </li>
            <li>
              <Link to="/signin" className={linkClass}>
                Signin
              </Link>
            </li>
          </ul>
          <hr className="my-2" />
        </div>
        {/* Invoicing */}
        <div className="mb-6">
          <p className={sectionTitleClass}>Invoicing</p>
          <ul className="mt-2">
            <li>
              <Link to="/admin/invoice" className={linkClass}>
                Invoice
              </Link>
            </li>
          </ul>
          <hr className="my-2" />
        </div>

        {/* Trips */}
        <div className="mb-6">
          <p className={sectionTitleClass}>Trips Details</p>
          <ul className="mt-2">
            <li>
              <Link to="#" className={linkClass}>
                TripPanel
              </Link>
            </li>
            <li>
              <Link to="" className={linkClass}>
                TripTotal
              </Link>
            </li>
          </ul>
          <hr className="my-2" />
        </div>

        {/* Performance */}
        <div className="mb-6">
          <p className={sectionTitleClass}>Performance</p>
          <ul className="mt-2">
            <li>
              <Link to="#" className={linkClass}>
                Feedback
              </Link>
            </li>
            <li>
              <Link to="#" className={linkClass}>
                Reviews
              </Link>
            </li>
          </ul>
          <hr className="my-2" />
        </div>

        {/* Support */}
        <div>
          <p className={sectionTitleClass}>Support</p>
          <ul className="mt-2">
            <li>
              <Link to="#" className={linkClass}>
                Help & Support
              </Link>
            </li>
          </ul>
          <hr className="my-2" />
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
