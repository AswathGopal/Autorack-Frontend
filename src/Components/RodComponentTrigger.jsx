//import necessary modules
import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom';
const RodComponentTrigger = () => {
  //setting of the state values here
  const [startData,setStartData]=useState(" ");
  const [endData,setEndData]=useState(" ")
  //when pressing the start data button this function gets activated.
    const Start=async ()=>{
        const resp = await fetch("http://localhost:8000//apis/trigger?id=1", {
          method: "get",
        });
      const data= await resp.text()
      console.log(data)
      setStartData(data)
      setEndData(null);
    }
  //when pressing the stop data button this function gets activated.
     const Stop =async () => {
          const resp = await fetch("http://localhost:8000/apis/trigger?id=0", {
            method: "get",
          });
          const data1 = await resp.text();
          setEndData(data1)
          setStartData(null);
          console.log(data1);
     };
  return (
    <div className="min-h-screen backgroundImage">
      <div className="flex justify-end">
        {/* this home button is used to go to component page or rod information page*/}
        <Link
          to="/rodinfo"
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded flex items-center cursor-pointer mt-2 text-decoration-none mr-3 "
        >
          Home
        </Link>
      </div>
      <span className="flex justify-center items-center font-bold text-3xl mt-2 font-serif">
        Component Triggering
      </span>
      {/* it displays start and end value*/}
      <div className='flex justify-center items-center mt-5'>
      {startData &&<span className="data-text flex justify-center items-center font-bold text-3xl mt-2 font-serif ">
        {startData}
      </span>}
      {endData &&<span  className="data-text flex justify-center items-center font-bold text-3xl mt-2 font-serif ">
        {endData}
      </span>}
      </div>
      {/*button used for starting and ending of the data*/}
      <div className="flex justify-center items-center h-screen ">
        <span className="btn btn-success px-5 py-2 mr-3" onClick={Start}>
          Start
        </span>
        <span className="btn btn-success px-5 py-2 ml-3" onClick={Stop}>
          Stop
        </span>
      </div>
    </div>
  );
};

export default RodComponentTrigger
