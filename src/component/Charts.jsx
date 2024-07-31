// src/components/Dashboard.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  const data = {
    labels: ['18 Feb', '19 Feb', '20 Feb', '21 Feb', '22 Feb', '23 Feb', '24 Feb'],
    datasets: [
      {
        label: 'All trips',
        data: [8, 6, 5, 3, 2, 1, 0],
        fill: false,
        backgroundColor: 'rgba(0, 71, 171, 1)',  // Blue color without transparency
        borderColor: 'rgba(0, 51, 171, 1)',        // Matching border color
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <div className="p-4  overflow-hidden">
        <div className="flex justify-between my-2 items-center">
          <h2 className="text-sm font-bold uppercase text-gray-800">Inventory Dashboard</h2>
          <a href="#v" className="text-fixblue text-sm font-bold uppercase">VIEW MORE</a>
        </div>
        <hr className="border-t-1 border-gray-300 mb-2" />
        <div className="flex justify-center space-x-2  text-fixwhite">
          <button className="bg-fixblue px-4 py-1 rounded-md">Hatchback</button>
          <button className="bg-fixblue  px-4 py-1 rounded-md">Sedan</button>
          <button className="bg-fixblue  px-4 py-1 rounded-md">SUV</button>
        </div>
        <Line data={data} className="mt-4" />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Card title="One way Trips" count="12" />
          <Card title="Round Trips" count="2" />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, count, bgColor }) => (
  <div className={`p-4 rounded-lg shadow-lg ${bgColor}`}>
    <h3 className="text-center text-sm font-medium">{title}</h3>
    <p className="text-center text-xl font-semibold mt-2">{count}</p>
  </div>
);

export default Charts;
