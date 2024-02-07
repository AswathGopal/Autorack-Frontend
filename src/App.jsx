//it is the home where the route pages are added.
import React from "react";
import RodInfo from "./Components/RodInfo";
import CsvFileInfo from "./Components/CsvFileInfo"
import CsvFileData from "./Components/CsvFileData";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import RodComponentTrigger from "./Components/RodComponentTrigger";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/*adding routes*/}
        <Route path='/' element={<RodComponentTrigger/>}/>
        <Route path='/rodinfo' element={<RodInfo/>}></Route>
        <Route path="/csvfileinfo/:id" element={<CsvFileInfo/>}></Route>
        <Route path='/csvfiledata/:id' element={<CsvFileData/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
