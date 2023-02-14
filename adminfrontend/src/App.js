import "./App.css";
import "./Components/Component.css";
import Navbar from "./Components/navbar";
import Home from "./Components/queries";
import './Components/remaining';
import Record from "./Components/Record";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
 
  return (

    <>  
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/feedback" element={<Home />} />
          <Route path="/record" element={<Record/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;