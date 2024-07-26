import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUserCircle, faGear, faChevronRight, faRightFromBracket, faDoorOpen, faWarehouse, faCubes, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import './styleMenu.css';

const Menu = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav id="topbar">
      <div id="topbar_content">
        <div id="logo">
          <img src="/conti_transparente.png" id="conti_transparente" alt="Logo" />
        </div>
        <ul id="top_items">
          <li className={`top-item ${activeItem === 'Dashboard' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Dashboard')}>
            <a href="#">
              <FontAwesomeIcon icon={faChartLine} />
              <span className="item-description">Dashboard</span>
            </a>
          </li>
          <li className={`top-item ${activeItem === 'Portaria' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Portaria')}>
            <a href="#">
              <FontAwesomeIcon icon={faDoorOpen} />
              <span className="item-description">Portaria</span>
            </a>
          </li>
          <li className={`top-item ${activeItem === 'Almoxarifado' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Almoxarifado')}>
            <a href="#">
              <FontAwesomeIcon icon={faWarehouse} />
              <span className="item-description">Almoxarifado</span>
            </a>
          </li>
          <li className={`top-item ${activeItem === 'Suprimentos' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Suprimentos')}>
            <a href="#">
              <FontAwesomeIcon icon={faCubes} />
              <span className="item-description">Suprimentos</span>
            </a>
          </li>
          <li className={`top-item ${activeItem === 'Fiscal' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Fiscal')}>
            <a href="#">
              <FontAwesomeIcon icon={faFileInvoiceDollar} />
              <span className="item-description">Fiscal</span>
            </a>
          </li>
          <li className={`top-item ${activeItem === 'Configurações' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Configurações')}>
            <a href="#">
              <FontAwesomeIcon icon={faGear} />
              <span className="item-description">Configurações</span>
            </a>
          </li>
        </ul>
        <div id="logout">
          <button id="logout_btn">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span className="item-description">Sair</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
