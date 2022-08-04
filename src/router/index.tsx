import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Detail } from '../components/Detail';
import { Home } from '../components/Home';
 
export function Router(){
  return (
  <Routes>
    <Route path="/"   element={<Home/>} />
    <Route path="detail/:id" element={<Detail/>} />
  </Routes>
  )
}

export default Routes;