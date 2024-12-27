import React,{useState,useEffect, lazy, Suspense,startTransition } from 'react';

import { Routes,Route,BrowserRouter} from "react-router-dom";
import "./App.css";

import Exam from './component/Exam.js';
import Navbars from './component/Navbar.js'
const App = () => {
  return(
  <BrowserRouter>
    
  <div className="App">
      <Routes>
       <Route path="/" element={
        <div>
          <Navbars/>

        <Exam/>
        </div>
        }/>
      

      </Routes>
      
  </div>
  
  </BrowserRouter>
  )
}
export default App;
