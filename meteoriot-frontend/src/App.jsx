import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import CadastrarUsuario from './pages/Login/CadastrarUsuario';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/cadastrarUsuario' element={<CadastrarUsuario />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;