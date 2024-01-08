import "./style.css";
import React from "react";
import { useState ,useEffect} from "react";
import { Link ,useParams} from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputNumber } from "primereact/inputnumber";
const CsvFileInfo = () => {
 const { id } = useParams();
  const data = [
    {
      csv_file_serial_num: "1",
      creation_time: "12:20:37",
      x_distance: "200",
      servo_angle: "180",
      max_deflection: "1180",
    },
    {
      csv_file_serial_num: "2",
      creation_time: "12:20:37",
      x_distance: "30",
      servo_angle: "190",
      max_deflection: "1180",
    },
  ];
  const [RodData, setRodData] = useState({
    serialnumber: "",
    DateFrom: "",
    DateTo: "",
    TimeFrom: "",
    TimeTo: "",
  });
  const [receivedData, setReceivedData] = useState([]);
  const [Loading, setLoading] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(RodData);
    const formData = new FormData();
    formData.append("cmpserialno",id)
    formData.append("SerialNo", RodData.serialNo);
    formData.append("DateFrom", RodData.DateFrom);
    formData.append("DateTo", RodData.DateTo);
    formData.append("TimeFrom", RodData.TimeFrom);
    formData.append("TimeTo", RodData.TimeTo);
    console.log(formData);
    // dei ithu vanthu form input data ku entha route set pannaume set panni data receive pannidu
    // fetch("http://localhost:8000/fetch-csv-file/", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) =>console.log("response", response.json()))
    //   .then((data) => {
    //     console.log(data);
    //     setReceivedData(data);
    //     setLoading(true);
    //   });
  };
   const [filters, setFilters] = useState({
     distance: {
       operator: FilterOperator.AND,
       constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
     },
   });
   const actionTemplate = (rowData) => {
    const id = rowData.csv_file_serial_num;
     return (
       <Link
         to={`/csvfiledata/${id}`}
         className="btn btn-info btn-sm px-3 py-2"
       >
         Click
       </Link>
     );
   };
     const distanceFilterTemplate = (options) => {
       return (
         <InputNumber
           style={{
             padding: "2px",
             border: "1px solid #ced4da ",
           }}
           value={options.value}
           onChange={(e) => options.filterCallback(e.value, options.index)}
           placeholder="Search"
         />
       );
     };
   
   
  return (
    <div className="min-h-screen backgroundImage">
      <div className="flex flex-col justify-center items-center  ">
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
          <DataTable
            value={data}
            // paginator
            // rows={1}
            // rowsPerPageOptions={[1,5, 10, 25, 50]}
          >
            <Column
              field="csv_file_serial_num"
              header="ID"
              className="border-b px-4 "
              sortable
            />
            <Column
              field="creation_time"
              header="Creation Time"
              className="border-b px-4"
              sortable
            />
            <Column
              field="x_distance"
              header="X distance"
              dataType="numeric"
              style={{ minWidth: "10rem" }}
              filter
              filterElement={distanceFilterTemplate}
              sortable
              className="border-b px-4"
            />
            <Column
              field="servo_angle"
              header="Servo Angle"
              className="border-b"
              dataType="numeric"
              style={{ minWidth: "10rem" }}
              filter
              filterElement={distanceFilterTemplate}
              sortable
            />
            <Column
              field="max_deflection"
              header="Max Deflection"
              className="border-b px-4"
              dataType="numeric"
              style={{ minWidth: "10rem" }}
              filter
              filterElement={distanceFilterTemplate}
              sortable
            />
            <Column
              header="Action"
              body={actionTemplate}
              className="border-b px-4"
            ></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default CsvFileInfo;
