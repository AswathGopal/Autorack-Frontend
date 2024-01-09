import "./style.css";
import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link} from "react-router-dom";
import {DataTable} from 'primereact/datatable'
import {Column}  from 'primereact/column'
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputNumber } from "primereact/inputnumber";
import { CSVLink} from "react-csv";
import Graph from "./Graph";

const CsvFileData = () => {
  const [clicked,setClicked]=useState(false)
  const [originaldata, setoriginalData] = useState([]);
  const ButtonClick=()=>{
  setClicked(true)
}
  const {id} =  useParams()
  const [receivedData,setReceivedData]=useState([])
 
  
  const [filters, setFilters] = useState({
    distance: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8000/apis/file-data-page?id=${id}`, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("data",data)
        setoriginalData(data)
         if (!data || data.length === 0) {
           // Handle the case where the data is empty or not in the expected format
           console.error("Invalid data structure");
           return;
         }

         const flattenedData = data[0]['Angle(Deg) '].map((_, index) => ({
           angle: data[0]['Angle(Deg) '][index],
           LVDT_1: data[0]['LVDT_1(Micron)'] && data[0]['LVDT_1(Micron)'][index],
           LVDT_2: data[0]['LVDT_2(Micron)'] && data[0]['LVDT_2(Micron)'][index],
           LVDT_3: data[0]['LVDT_3(Micron)'] && data[0]['LVDT_3(Micron)'][index],
           LVDT_4: data[0]['LVDT_4(Micron)'] && data[0]['LVDT_4(Micron)'][index],
         }));
         console.log("flatten",flattenedData) 
        setReceivedData(
          flattenedData
        );
       console.log("received inside",receivedData)
        // Do something with the data
      } catch (error) {
        console.error("error caused here", error);
        // Handle errors
      }
    }

    fetchData();
    
  }, []);
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


 
  return (<div>
    <div className="min-h-screen backgroundImage ">
      <div className="flex justify-end ">
      <button
            className="btn btn-success btn-sm px-3 py-2 mt-5 mr-8"
            onClick={ButtonClick}
          >
            Show graph
            
          </button>
      </div>
      <div className="flex flex-col justify-center items-center  ">
        <div className="mt-10 ">
          <div className="btn btn-success btn-sm py-2 px-4 text-white mb-4">
            <CSVLink
              data={receivedData}
              className="text-white"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Download csv
            </CSVLink>
          </div>
          <DataTable
            value={receivedData}
            paginator
            rows={10}
            rowsPerPageOptions={[1,5, 10, 25, 50]}
          >
            <Column
              field="angle"
              header="Angle"
              sortable
              dataType="numeric"
              style={{ minWidth: "10rem" }}
              filter
              filterElement={distanceFilterTemplate}
            />
            <Column
              field="LVDT_1"
              header="LVDT 1"
              sortable
              dataType="numeric"
              style={{ minWidth: "10rem" }}
              filter
              filterElement={distanceFilterTemplate}
            />
            <Column
              field="LVDT_2"
              header="LVDT 2"
              sortable
              dataType="numeric"
              style={{ minWidth: "10rem" }}
              filter
              filterElement={distanceFilterTemplate}
            />
            <Column
              field="LVDT_3"
              header="LVDT 3"
              sortable
              dataType="numeric"
              style={{ minWidth: "10rem" }}
              filter
              filterElement={distanceFilterTemplate}
            />
            <Column
              field="LVDT_4"
              header="LVDT 4"
              sortable
              dataType="numeric"
              style={{ minWidth: "10rem" }}
              filter
              filterElement={distanceFilterTemplate}
            />
          </DataTable>
        </div>
      </div>
    </div>
    {clicked && originaldata && <Graph data={originaldata} />}
    </div>
  );
};

export default CsvFileData;
