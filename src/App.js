import React from "react";
import RodInfo from "./Components/RodInfo";
import Graph from "./Components/Graph";
import CsvFileInfo from "./Components/CsvFileInfo"
import CsvFileData from "./Components/CsvFileData";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Test from './Components/Test'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<RodInfo/>}></Route>
        <Route path='/graph' element={<Graph/>}></Route>
        <Route path="/csvfileinfo/:id" element={<CsvFileInfo/>}></Route>
        <Route path='/csvfiledata/:id' element={<CsvFileData/>}></Route>
        <Route path='/test' element={<Test/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
