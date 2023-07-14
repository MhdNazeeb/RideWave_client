import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

export function LineChart({monthlyEarning,monthname}) {

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' 
    },
    title: {
      display: true,
      text: 'Report',
    },
  },
};

const labels = monthname;

 const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'monthly earnings',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: monthlyEarning,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

  return <Line options={options} data={data} />;
}
