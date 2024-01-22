import './style.css'
import React from 'react'
import { useState} from 'react';
import { Link } from 'react-router-dom';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {modifyTimestamp2} from './UtcToIst'

const RodInfo = () => {

    const [RodData,setRodData] = useState({
        serialnumber:"",
        DateFrom:"",
        DateTo:"",
        TimeFrom:"",
        TimeTo:""
    });
    const [receivedData,setReceivedData]= useState([])
    const [clicked, setClicked] = useState(false);

    async function handleSubmit(e) {
      e.preventDefault();
      console.log(RodData);
      const formData = new FormData();
      formData.append("serialnumber", RodData.serialnumber);
      formData.append("datefrom", RodData.DateFrom);
      formData.append("dateto", RodData.DateTo);
      formData.append("timefrom", RodData.TimeFrom);
      formData.append("timeto", RodData.TimeTo);
      console.log(formData);
      const resp = await fetch('http://localhost:8000/apis/fetch-components/', {
        method : "post",
        body: formData
      })
      console.log(resp);
      const data= await resp.json()
      console.log(data);
      if (Array.isArray(data)) {
        data.forEach((item) => {
          item.start_time = modifyTimestamp2(item.start_time)
          item.end_time= modifyTimestamp2(item.end_time)
        });
      }
      setReceivedData(data)
      setClicked(true)
    }


    const actionTemplate = (rowData) => {
      const id = rowData.component_serial_num;
      return (
        <Link
          to={`/csvfileinfo/${id}`}
          className="btn btn-info btn-sm px-3 py-2"
        >
          Click
        </Link>
      );
    };


  return (
    <div className="min-h-screen backgroundImage">
      <div className="flex flex-col justify-center items-center">
        <div className="p-3 rounded w-50">
          <h3 className="text-center">ROD INFORMATION</h3>
          <form className="row gap-1" onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="name" className="font-semibold form-label">
                Serial No
              </label>
              <input
                type="text"
                className="form-control rounded-0 border border-black"
                id="serial"
                placeholder="Serial No"
                onChange={(e) =>
                  setRodData({ ...RodData, serialnumber: e.target.value })
                }
              />
            </div>
            <div className="">
              <label htmlFor="datefrom" className="font-semibold form-label">
                Date From
              </label>
              <input
                type="date"
                className="form-control rounded-0 border border-black"
                id="date"
                placeholder="Date"
                onChange={(e) =>
                  setRodData({ ...RodData, DateFrom: e.target.value })
                }
              />
            </div>

            <div className="">
              <label htmlFor="dateto" className="font-semibold form-label">
                Date To
              </label>
              <input
                type="date"
                className="form-control rounded-0 border border-black"
                id="date"
                onChange={(e) =>
                  setRodData({ ...RodData, DateTo: e.target.value })
                }
              />
            </div>

            <div className="">
              <label htmlFor="timefrom" className="font-semibold form-label">
                Time From
              </label>
              <input
                type="time"
                className="form-control rounded-0 border border-black"
                id="time"
                onChange={(e) =>
                  setRodData({ ...RodData, TimeFrom: e.target.value })
                }
              />
            </div>

            <div className="">
              <label htmlFor="timeto" className="font-semibold form-label">
                Time To
              </label>
              <input
                type="time"
                className="form-control rounded-0 border border-black"
                id="time"
                onChange={(e) =>
                  setRodData({ ...RodData, TimeTo: e.target.value })
                }
              />
            </div>
            <div className="mt-3 ">
              <button
                type="submit"
                className="btn btn-success w-100"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="mt-3 mb-5 ">
         {clicked &&(<DataTable
            value={receivedData}
            paginator
            rows={10}
            rowsPerPageOptions={[1,5, 10, 25, 50,100]}
          >
            <Column field="component_serial_num" header="ID" sortable />
            <Column field="start_time" header="Start Time" sortable />
            <Column field="end_time" header="End time" sortable />
            <Column header="Action" body={actionTemplate}></Column>
          </DataTable>)}    
        </div>
      </div>
    </div>
  );
};
export default RodInfo

