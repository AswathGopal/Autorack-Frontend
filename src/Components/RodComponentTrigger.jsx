import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
const RodComponentTrigger = () => {
    const Start=async ()=>{
        const resp = await fetch("http://localhost:8000/trigger?trigger=1", {
          method: "get",
        });
      const data= await resp.json()
      console.log(data)
    }
     const Stop =async () => {
          const resp = await fetch("http://localhost:8000/trigger?trigger=0", {
            method: "get",
          });
          const data = await resp.json();
          console.log(data);
     };
  return (
    <div className="min-h-screen backgroundImage">
      <div className="flex justify-end">
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
