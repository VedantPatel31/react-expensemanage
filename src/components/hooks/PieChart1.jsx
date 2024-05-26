// import React from 'react';
// import { Pie } from 'react-chartjs-2';

// const PieChart1 = () => {
//   const data = {
//     labels: ['Label 1', 'Label 2', 'Label 3'],
//     datasets: [
//       {
//         data: [30, 50, 20],
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   return (
//     <div>
//       <h2>Pie Chart Example</h2>
//       <Pie data={data} options={options} />
//     </div>
//   );
// };


import React from "react";
// import Chart from "chart.js/auto";
// import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Pie } from "react-chartjs-2";

export const PieChart1 = () => {
  const [data, setdata] = useState({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],

    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
  });

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <div style={{height:"500px",width:"500px"}}>
      <Pie
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            }
          }
        }}
      />
    </div>
    </div>
  );
};