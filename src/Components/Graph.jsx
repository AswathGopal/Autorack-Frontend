import React from 'react'
import { Line } from 'react-chartjs-2'
import "chart.js/auto";
import GetReq from './GetReq';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
const Graph = (props) => {
  const data= props.data
   const { id } = useParams();
     const parsedData = data.map((item) => {
      return {
        angle: item['Angle(Deg) '].map((value) => parseInt(value, 10)),
        lvdt_1: item['LVDT_1(Micron)'].map((value) => parseInt(value, 10)),
        lvdt_2: item['LVDT_2(Micron)'].map((value) => parseInt(value, 10)),
        lvdt_3: item['LVDT_3(Micron)'].map((value) => parseInt(value, 10)),
        lvdt_4: item['LVDT_4(Micron)'].map((value) => parseInt(value, 10)),
      };
    });

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
    }
        }}
        width={500}
      />
    </div>
  );
}

export default Graph
