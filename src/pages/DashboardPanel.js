import React, { Fragment, useState } from "react";
import {
  FaRegTimesCircle,
  FaSync,
  FaUserCircle,
  FaUserCog,
} from "react-icons/fa";
import AdminLayout from "../component/AdminLayout";
import MiniDash from "../component/MiniDash";
import ProfitCard from "../component/ProfitCard";
import DashCard from "../component/DashCard";
import Charts from "../component/Charts";
import PieChart from "../component/PieChart";
import TripCard from "../component/TripCard";

function DashboardPanel() {
  const [selectedOption, setSelectedOption] = useState("today");
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  // Profit card data
  const profitData = [
    {
      countno: "102",
      title: "Total Rides",
      color: "green",
      icon: <FaUserCircle fontSize={33} color="green" />,
    },
    {
      countno: "117",
      title: "Total Drivers",
      color: "brown",
      icon: <FaUserCog fontSize={33} color="brown" />,
    },
    {
      countno: "106",
      title: "Total No of Ride",
      color: "blue",
      icon: <FaSync fontSize={33} color="blue" />,
    },
    {
      countno: "167",
      title: "Cancelled Ride",
      color: "red",
      icon: <FaRegTimesCircle fontSize={33} color="red" />,
    },
  ];

  // DashCard data
  const cardData = [
    { title: "New Booking(DOC)", data: "10" },
    { title: "Vacant Drivers", data: "20" },
    { title: "Vacant Cabs", data: "50" },
    { title: "Total Booking(Price)", data: "Rs.11011.00" },
  ];

  const dummyTrips = [
    {
      route: "Airport to Downtown",
      details: "Morning trip",
      time: "10:00 AM",
      pickup: "JFK Airport",
      assistant: "Sarah Connor",
      driver: "John Doe",
      fare: "$45.00",
      distance: "25 miles",
      status: "Completed",
      vehicle: "Toyota Prius",
    },
    {
      route: "Downtown to Midtown",
      details: "Business trip",
      time: "2:00 PM",
      pickup: "Central Park",
      assistant: "Emily Clark",
      driver: "James Smith",
      fare: "$30.00",
      distance: "15 miles",
      status: "In Progress",
      vehicle: "Honda Accord",
    },
    {
      route: "Midtown to Airport",
      details: "Evening trip",
      time: "7:00 PM",
      pickup: "Times Square",
      assistant: "Laura Wilson",
      driver: "Michael Johnson",
      fare: "$50.00",
      distance: "30 miles",
      status: "Scheduled",
      vehicle: "Ford Explorer",
    },
  ];

  const extraTravelData = {
    labels: [
      "Less than 10Kms",
      "Between 10-50 Kms",
      "Between 51-100 Kms",
      "More than 100 Kms",
    ],
    datasets: [
      {
        data: [300, 50, 100, 40],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384"],
      },
    ],
  };

  return (
    <Fragment>
      <AdminLayout>
        {/* Main content */}
        <div className="bg-gray-200 min-h-screen p-4">
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex flex-col items-center mt-2 sm:mt-0">
                <label
                  htmlFor="date-select"
                  className="text-gray-700 mr-2 mb-1 text-xl font-semibold "
                >
                  Select View:
                </label>
                <select
                  id="date-select"
                  value={selectedOption}
                  onChange={handleOptionChange}
                  className="border border-gray-300 bg-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="today">Today</option>
                  <option value="tomorrow">Tomorrow</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="lastweek">Last Week</option>
                  <option value="lastmonth">Last Month</option>
                </select>
              </div>
              <div className="text-gray-700">
                <h1 className="text-xl font-semibold">SarathPanel</h1>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>
          <hr className="my-4 border-b-2 border-black" />
          <div className="flex flex-wrap justify-center sm:justify-start">
            {profitData.map((data, index) => (
              <ProfitCard
                key={index}
                title={data.title}
                countno={data.countno}
                color={data.color}
                icon={data.icon}
              />
            ))}
          </div>
          <hr className="my-4 border-b-2 border-black" />

          <div className="flex flex-wrap justify-center sm:justify-start">
            {cardData.map((card, index) => (
              <DashCard key={index} title={card.title} data={card.data} />
            ))}
          </div>
          <hr className="my-4 border-b-2 border-black" />

          {/* Mini Dashboards */}
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              <div className="flex flex-col bg-white rounded-lg shadow-lg p-2 w-full">
                <MiniDash
                  tripPanelHeading="Trip Panel"
                  viewMoreHeading="View More"
                  miniData={[
                    { color: "bg-teal-500", heading: "Ongoing", data: "04" },
                    { color: "bg-green-500", heading: "Completed", data: "06" },
                    { color: "bg-red-500", heading: "Cancelled", data: "01" },
                    {
                      color: "bg-yellow-500",
                      heading: "Unassigned",
                      data: "00",
                    },
                    { color: "bg-orange-500", heading: "Upcoming", data: "00" },
                    { color: "bg-gray-500", heading: "GRT", data: "00" },
                  ]}
                />
              </div>
              <div className="flex flex-col bg-white rounded-lg shadow-lg p-2 w-full">
                <MiniDash
                  tripPanelHeading="Fleet Panel"
                  viewMoreHeading="View More"
                  miniData={[
                    { color: "bg-teal-500", heading: "Total", data: "40" },
                    { color: "bg-pink-500", heading: "Available", data: "34" },
                    {
                      color: "bg-green-500",
                      heading: "Reg Progress",
                      data: "06",
                    },
                    {
                      color: "bg-gray-500",
                      heading: "Checkup Pending",
                      data: "04",
                    },
                    { color: "bg-blue-500", heading: "On trip", data: "08" },
                    { color: "bg-orange-500", heading: "Logout", data: "04" },
                  ]}
                />
              </div>
              <div className="flex flex-col bg-white rounded-lg shadow-lg p-2 w-full">
                <MiniDash
                  tripPanelHeading="Vehicles Panel"
                  viewMoreHeading="View More"
                  miniData={[
                    { color: "bg-teal-500", heading: "Total", data: "48" },
                    { color: "bg-yellow-500", heading: "Unassign", data: "26" },
                    { color: "bg-green-500", heading: "On trip", data: "05" },
                    {
                      color: "bg-orange-500",
                      heading: "Logged out",
                      data: "08",
                    },
                    {
                      color: "bg-green-500",
                      heading: "Reg progress",
                      data: "03",
                    },
                    {
                      color: "bg-gray-500",
                      heading: "Checkup pending",
                      data: "03",
                    },
                    {
                      color: "bg-red-500",
                      heading: "Blocked for trip",
                      data: "02",
                    },
                    {
                      color: "bg-pink-500",
                      heading: "Driver login pending",
                      data: "03",
                    },
                  ]}
                />
              </div>
              <div className="flex flex-col bg-white rounded-lg shadow-lg p-2 w-full">
                <Charts />
              </div>
              <div className="flex flex-col bg-white rounded-lg shadow-lg p-2 w-full">
                <MiniDash
                  tripPanelHeading="Review"
                  viewMoreHeading="View More"
                  miniData={[
                    { color: "bg-yellow-500", heading: "kumar", data: "3" },
                    { color: "bg-teal-500", heading: "ram", data: "4" },
                    { color: "bg-green-500", heading: "raja", data: "5" },
                  ]}
                />
              </div>
              <div className="flex flex-col text-center items-center justify-center bg-white rounded-lg shadow-lg p-2">
                <PieChart
                  data={extraTravelData}
                  options={{ responsive: true, maintainAspectRatio: false }}
                />
              </div>
            </div>
            <hr className="my-4 border-b-2 border-black" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              <div className="flex flex-col bg-white rounded-lg shadow-lg p-2 w-full">
                <TripCard trip={dummyTrips[0]} />
              </div>
              <div className="flex flex-col bg-white rounded-lg shadow-lg p-2 w-full">
                <TripCard trip={dummyTrips[1]} />
              </div>
              <div className="flex flex-col bg-white rounded-lg shadow-lg p-2 w-full">
                <TripCard trip={dummyTrips[2]} />
              </div>
            </div>
          </div>
          <hr className="my-4 border-b-2 border-black" />
        </div>
      </AdminLayout>
    </Fragment>
  );
}

export default DashboardPanel;
