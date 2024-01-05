import "./style.css";
import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link} from "react-router-dom";
import {DataTable} from 'primereact/datatable'
import {Column}  from 'primereact/column'
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputNumber } from "primereact/inputnumber";
import { CSVLink, CSVDownload } from "react-csv";
import { Button } from "primereact/button";
import Graph from "./Graph.jsx";
const CsvFileData = () => {
  const {id} =  useParams()
  // const navigate = useNavigate()
  const data = [
    {
      angle: ["1","2","3"],
      lvdt_1:["1123","2234","2313"],
      lvdt_2:["2445","3452","5432"],
      lvdt_3:["2561","6532","3421"],
      lvdt_4:["3452","2341","3456"]
    }];
  const flattenedData = data.flatMap((item) =>
    item.angle.map((_, index) => ({
      angle: item.angle[index],
      lvdt_1: item.lvdt_1[index],
      lvdt_2: item.lvdt_2[index],
      lvdt_3: item.lvdt_3[index],
      lvdt_4: item.lvdt_4[index],
    }))
  );
  const [filters, setFilters] = useState({distance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }});
  useEffect(()=>
    {
      // Dei ithu vanthu id send panrathuku athu enda route la set pannanumo panniru
      //      const formData = new FormData();
      //      formData.append("id", id);
      //      console.log(formData)
      //      fetch("http://localhost:8000/csv_file_data_fetch?id=id", {
      //        method: "GET",
      //      }).then((response) => console.log(response.json()));
    },
    []
  );
  // const SendData=()=>{
  //     console.log("hello")
  //     return <Graph data={data}/>

  // }
  const distanceFilterTemplate = (options)=>{
    
    return  <InputNumber
          style={{
            padding:"2px",
            border: "1px solid #ced4da ",
          }}
          value={options.value}
          onChange={(e) => options.filterCallback(e.value, options.index)}
          placeholder="Search"
        />
        };
  

 
  return (
    <div className="min-h-screen backgroundImage ">
      <div className="flex justify-end ">
        <Link
         to={{ pathname: '/graph', state: { data: data } }}
          className="btn btn-success btn-sm px-3 py-2 mt-5 mr-8"
        >
          Show graph
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center  ">
        <div className="mt-10 ">
          {/* <table className="min-w-full bg-white border border-gray-300 rounded">
            <thead>
              <tr className="bg-gray-200 ">
                <th className="py-2 px-4 border-b">Component Serial Number</th>
                <th className="py-2 px-4 border-b">Start Time</th>
                <th className="py-2 px-4 border-b">End Time</th>
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
                </tr>
              ))}
            </tbody>
          </table> */}
          {/* the below is prime react table */}
          <CSVLink data={data}>Download me</CSVLink>
          <DataTable
            value={flattenedData}
            // paginator
            // rows={1}
            // rowsPerPageOptions={[1,5, 10, 25, 50]}
          >
            <Column field="angle" header="Angle" sortable />
            <Column field="lvdt_1" header="LVDT 1" sortable />
            <Column field="lvdt_2" header="LVDT 2" sortable />
            <Column field="lvdt_3" header="LVDT 3" sortable />
            <Column field="lvdt_4" header="LVDT 4" sortable />
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default CsvFileData;
