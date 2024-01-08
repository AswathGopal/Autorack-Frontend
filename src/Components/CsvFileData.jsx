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
  // const [filters, setFilters] = useState({
  //   distance: {
  //     operator: FilterOperator.AND,
  //     constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
  //   },
  // });
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
          to={`/graph/${id}`}
          className="btn btn-success btn-sm px-3 py-2 mt-5 mr-8"
        >
          Show graph
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center  ">
        <div className="mt-10 ">
          <div className="btn btn-success btn-sm py-2 px-4 text-white mb-4">
            <CSVLink data={data}  className="text-white"  style={{ textDecoration: 'none', color: 'inherit' }}>Download csv</CSVLink>
          </div>
          <DataTable
            value={flattenedData}
            // paginator
            // rows={1}
            // rowsPerPageOptions={[1,5, 10, 25, 50]}
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
              field="lvdt_1"
              header="LVDT 1"
              sortable
              dataType="numeric"
              style={{ minWidth: "10rem" }}
              filter
              filterElement={distanceFilterTemplate}
            />
            <Column
              field="lvdt_2"
              header="LVDT 2"
              sortable
              dataType="numeric"
              style={{ minWidth: "10rem" }}
              filter
              filterElement={distanceFilterTemplate}
            />
            <Column
              field="lvdt_3"
              header="LVDT 3"
              sortable
              dataType="numeric"
              style={{ minWidth: "10rem" }}
              filter
              filterElement={distanceFilterTemplate}
            />
            <Column
              field="lvdt_4"
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
  );
};

export default CsvFileData;
