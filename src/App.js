import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Dashboard from './components/menu/dashboard/Dashboard';
import ComparativeParameters from './components/menu/cadastros/ComparativeParameters';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/comparative-parameters/:chartType/:dataPointIndex" element={<ComparativeParameters />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
