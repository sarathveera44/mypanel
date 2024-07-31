import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the components
Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, options }) => (
  <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">Pie Chart</h2>
      <div className="flex justify-center items-center  w-72 h-72"  >
        <Pie data={data} options={options} />
      </div>
  </div>
);

export default PieChart;
