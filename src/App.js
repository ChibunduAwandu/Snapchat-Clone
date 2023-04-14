import React from 'react';
import WebcamCapture from './WebcamCapture';
import Preview from "./Preview";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>

      <Route path="/preview" element={<Preview />} />
      
        <Route exact path="/" element={<WebcamCapture />} />
       
      </Routes>
    </BrowserRouter>


      
    </div>
  );
}

export default App;
