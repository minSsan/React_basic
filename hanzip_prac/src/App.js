import InvestQ from "./pages/InvestQuestion/Investq";
import Login from "./pages/login/Login";
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/invest_q" element={<InvestQ/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
