import './style.css'
import React from 'react'
import { useState} from 'react';
import { Link } from 'react-router-dom';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
const RodInfo = () => {
  const   data = [
      {
        component_serial_num:"1",
        start_time: "12:20:37",
        end_time: "9.80.27",
      },
      {
          component_serial_num: "2",
          start_time: "12.50.34",
          end_time: "08:45:56"
      },
    ];
    const [RodData,setRodData] = useState({
        serialnumber:"",
        DateFrom:"",
        DateTo:"",
        TimeFrom:"",
        TimeTo:""
    });
    const [receivedData,setReceivedData]= useState([])
    const [Loading,setLoading] = useState(false)
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(RodData);
      const formData = new FormData();
      formData.append("SerialNo", RodData.serialNo);
      formData.append("DateFrom", RodData.DateFrom);
      formData.append("DateTo", RodData.DateTo);
      formData.append("TimeFrom", RodData.TimeFrom);
      formData.append("TimeTo", RodData.TimeTo);
      console.log(formData);
      setLoading(true);
      // dei ithu vanthu form input data ku entha route set pannaume set panni data receive pannidu
    //   fetch("http://localhost:8000/", {
    //     method: "POST",
    //     body: formData,
    //   })
    //     .then((response) =>console.log("response", response))
    //     .then((data) => {
    //       console.log("data",data);
    //       setReceivedData(data);
          
    //     });
    // };
    // Dei ithu vanthu id send panrathuku athu enda route la set pannanumo panniru
    //  function sendId (itemid){
    //      const formData = new FormData();
    //      formData.append("id", itemid);
    //      console.log(formData)
    //      fetch("http://localhost:8000/fetch-components/", {
    //        method: "POST",
    //        body: formData,
    //      }).then((response) => console.log(response.json()));
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
      <div className="flex flex-col justify-center items-center   ">
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
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="mt-3 mb-5 ">
          {/* <table className="min-w-full bg-white border border-gray-300 rounded">
            <thead>
              <tr className="bg-gray-200 ">
                <th className="py-2 px-4 border-b">Component Serial Number</th>
                <th className="py-2 px-4 border-b">Start Time</th>
                <th className="py-2 px-4 border-b">End Time</th>
                <th className="py-2 px-4 border-b">action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr className="bg-gray-100">
                  <td className="py-2 px-4 border-b">
                    {d.component_serial_num}
                  </td>
                  <td className="py-2 px-4 border-b">{d.start_time}</td>
                  <td className="py-2 px-4 border-b">{d.end_time}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="btn btn-info btn-sm px-3">click</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
          {/* the below is prime react table */}
         {Loading &&(<DataTable
            value={data}
            // paginator
            // rows={1}
            // rowsPerPageOptions={[1,5, 10, 25, 50]}
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

