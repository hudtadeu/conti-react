import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div className="app-container">
      <Menu />
      <div className="content">
        <h1>Conteúdo Principal</h1>
        <p>Este é um exemplo de menu responsivo com tema dark em React.</p>
      </div>
    </div>
  );
}

export default App;
