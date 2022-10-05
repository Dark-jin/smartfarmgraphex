import './App.css';
import React from 'react';
import {Routes,BrowserRouter,Route} from "react-router-dom";
import Doughnutchart from './Doughnutchart';
import Buttonpage from './Buttonpage';
import Realtime from './Realtime';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="buttonpage" element={<Buttonpage/>}/>
        <Route path="/doughnut" element={<Doughnutchart/>}/>
        <Route path="/linechart" element={<Realtime/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
