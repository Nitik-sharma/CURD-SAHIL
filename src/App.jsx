import React ,{ useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Read from './components/Read'
import Update from './components/Update'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/read/:id"} element={<Read />} />
        <Route path={"/update/:id"} element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
