import React, { useState } from 'react';
import './styleMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="menu-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul className="sidebar-menu">
          <li>Painel de Controle</li>
          <li>Portaria</li>
          <li>Almoxarifado</li>
          <li>Suprimentos</li>
          <li>Fiscal</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;

