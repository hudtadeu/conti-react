import React from 'react';
import Menu from './components/menu/Menu';
import Dashboard from './components/menu/dashboard/Dashboard';

const App = () => {
  return (
    <div className="app-container">
      <Menu />
      <div className="content">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;

