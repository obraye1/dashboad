import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarCharts = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOption, setChartOption] = useState({});
  useEffect(() => {
    setChartData({
      labels: ['Mon', 'Tue', 'Wed ', 'Thur', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Sales $',
          data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
          borderColor: 'rgb( 53, 162, 235)',
          backgroundColor: 'rgba(30, 64, 175, 0.5)',
        },
      ],
    });
    setChartOption({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Daily Revenue',
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);
  return (
    <>
      <div className="w-full border md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 rounded-lg bg-white ">
        <Bar data={chartData} options={chartOption} />
      </div>
    </>
  );
};

export default BarCharts;
