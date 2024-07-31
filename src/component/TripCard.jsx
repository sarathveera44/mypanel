import React from "react";
import PropTypes from "prop-types";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
  FaCarAlt,
  FaIdCard,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TripCard = ({ trip }) => {
  const {
    route,
    details,
    time,
    pickup,
    assistant,
    driver,
    fare,
    distance,
    status,
    vehicle,
  } = trip;

  return (
    <section className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-red-700 text-white px-6 py-2">
        <div className="flex flex-col justify-between items-center sm:flex-row">
          <Link
          to={"/tripdetails"}
          >
            <h2 className="text-lg font-semibold">{route}</h2>
            <p className="text-sm">{details}</p>
          </Link>
          <FaCarAlt className="text-4xl" />
        </div>
      </header>

      {/* Details Section */}
      <section className="p-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <FaCalendarAlt className="text-gray-600 mr-2" />
            <div className="text-sm">
              <p className="text-gray-600">Time</p>
              <p>{time}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-gray-600 mr-2" />
            <div className="text-sm">
              <p className="text-gray-600">Pickup</p>
              <p>{pickup}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaUser className="text-gray-600 mr-2" />
            <div className="text-sm">
              <p className="text-gray-600">Assistant</p>
              <p className="text-sm">{assistant}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaIdCard className="text-gray-600 mr-2" />
            <div className="text-sm">
              <p className="text-gray-600">Driver</p>
              <p className="text-sm">{driver}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Fare and Distance */}
      <section className="flex justify-between px-4 bg-gray-200">
        <div className="text-gray-800 font-bold">{fare}</div>
        <div className="text-gray-600">{distance}</div>
      </section>
      {/* Divider */}
      <hr className="border-t border-gray-400" />
      {/* Footer Section */}
      <footer className="flex justify-between px-6 py-2 text-sm text-gray-600">
        <div>{status}</div>
        <Link className="font-semibold">{vehicle}</Link>
      </footer>
    </section>
  );
};

TripCard.propTypes = {
  trip: PropTypes.object.isRequired,
};

export default TripCard;
