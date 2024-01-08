import React from 'react'
import { Line } from 'react-chartjs-2'
import { useLocation } from 'react-router-dom';
import "chart.js/auto";
const Graph = () => {
     const data=[{
      angle: ["1","2","3"],
      lvdt_1:["1123","2234","2313"],
      lvdt_2:["2445","3452","5432"],
      lvdt_3:["2561","6532","3421"],
      lvdt_4:["3452","2341","3456"]
    }];
    const parsedData = data.map((item) => {
      return {
        angle: item.angle.map((value) => parseInt(value, 10)),
        lvdt_1: item.lvdt_1.map((value) => parseInt(value, 10)),
        lvdt_2: item.lvdt_2.map((value) => parseInt(value, 10)),
        lvdt_3: item.lvdt_3.map((value) => parseInt(value, 10)),
        lvdt_4: item.lvdt_4.map((value) => parseInt(value, 10)),
      };
    });

    console.log(parsedData[0].angle);
    const state = {
      labels: parsedData[0].angle,
      datasets: [
        {
          label: "lvdt1",
          // fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(0, 0, 255, 0.71)",
          borderColor: "rgba(0, 0, 255)",
          data: parsedData[0].lvdt_1,
        },
        {
          label: "lvdt2",
          // fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "#FF0000",
          data: parsedData[0].lvdt_2,
        },
        {
          label: "lvdt3",
          // fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          data: parsedData[0].lvdt_3,
        },
        {
          label: "lvdt4",
          lineTension: 0.5,
          backgroundColor: "rgba(208, 136, 32, 0.5)",
          borderColor: "rgba(208, 136, 32)",
          data: parsedData[0].lvdt_4,
        },
      ],
    };
  return (
    <div className='flex justify-center items-center mt-10  min-h-screen'>
      <Line
        data={state}
        options={{
          // title: {
          //   display: true,
          //   text: "Bend Graph",
          //   fontSize: 20,
          // },
          // legend: {
          //   display: true,
          //   position: "right",
          // },
          // responsive:true,
          responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Bend Graph'
      }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      // y1: {
      //   type: 'linear',
      //   display: true,
      //   position: 'right',

        // grid line settings
      //   grid: {
      //     drawOnChartArea: false, // only want the grid lines for one axis to show up
      //   },
      // },
    }
        }}
        width={500}
      />
    </div>
  );
}

export default Graph
