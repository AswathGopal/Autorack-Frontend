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
import GetReq from "./GetReq.jsx";
const CsvFileData = () => {
  const {id} =  useParams()
  const [receivedData,setReceivedData]=useState([])
 
  const flattenedData = receivedData.flatMap((item) =>
    item.angle.map((_, index) => ({
      angle: item.angle[index],
      lvdt_1: item.lvdt_1[index],
      lvdt_2: item.lvdt_2[index],
      lvdt_3: item.lvdt_3[index],
      lvdt_4: item.lvdt_4[index],
    }))
  );
  const [filters, setFilters] = useState({
    distance: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
  });
  useEffect(()=>
    {
      setReceivedData(GetReq(id))
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
            <CSVLink
              data={receivedData}
              className="text-white"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Download csv
            </CSVLink>
          </div>
          <DataTable
            value={flattenedData}
            // paginator
            // rows={1}
            // rowsPerPageOptions={[1,5, 10, 25, 50]}
          >
            <Column
              field="Angle(Deg) "
              header="Angle"
              sortable
              dataType="numeric"
              style={{ minWidth: "10rem" }}
              filter
              filterElement={distanceFilterTemplate}
            />
            <Column
              field="LVDT_1(Micron)"
              header="LVDT 1"
              sortable
              dataType="numeric"
              style={{ minWidth: "10rem" }}
              filter
              filterElement={distanceFilterTemplate}
            />
            <Column
              field="LVDT_2(Micron)"
              header="LVDT 2"
              sortable
              dataType="numeric"
              style={{ minWidth: "10rem" }}
              filter
              filterElement={distanceFilterTemplate}
            />
            <Column
              field="LVDT_3(Micron)"
              header="LVDT 3"
              sortable
              dataType="numeric"
              style={{ minWidth: "10rem" }}
              filter
              filterElement={distanceFilterTemplate}
            />
            <Column
              field="LVDT_4(Micron)"
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
