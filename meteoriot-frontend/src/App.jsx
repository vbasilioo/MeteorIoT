import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard/Dashboard';

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;