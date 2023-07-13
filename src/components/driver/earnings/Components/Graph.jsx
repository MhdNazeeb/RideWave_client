import React from 'react';
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

export function GraphComponents({count,earnings,monthname}) {

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Earnings',
    },
  },
};

const labels = monthname;
console.log(count,'count')

 const data = {
  labels,
  datasets: [
    // {
    //   label: 'Trips',
    //   data: count?.map((val)=> val*100),
    //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
    // },
    {
      label: 'Earnings',
      data: earnings,
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

  return <Bar options={options} data={data} />;
}
