import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUserCircle, faGear, faChevronRight, faRightFromBracket, faDoorOpen, faWarehouse, faCubes, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import './styleMenu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav id="sidebar" className={isOpen ? 'open-sidebar' : ''}>
      <div id="sidebar_content">
        <div id="logo">
          <img src="/conti_transparente.png" id="conti_transparente" alt="Logo" />
          <div id="welcome">
            <FontAwesomeIcon icon={faUserCircle} />
            <span className="item-description">Fulano de tal</span>
          </div>
        </div>
        <ul id="side_items">
          <li className={`side-item ${activeItem === 'Dashboard' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Dashboard')}>
            <a href="#">
              <FontAwesomeIcon icon={faChartLine} />
              <span className="item-description">Dashboard</span>
            </a>
          </li>
          <li className={`side-item ${activeItem === 'Portaria' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Portaria')}>
            <a href="#">
              <FontAwesomeIcon icon={faDoorOpen} />
              <span className="item-description">Portaria</span>
            </a>
          </li>
          <li className={`side-item ${activeItem === 'Almoxarifado' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Almoxarifado')}>
            <a href="#">
              <FontAwesomeIcon icon={faWarehouse} />
              <span className="item-description">Almoxarifado</span>
            </a>
          </li>
          <li className={`side-item ${activeItem === 'Suprimentos' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Suprimentos')}>
            <a href="#">
              <FontAwesomeIcon icon={faCubes} />
              <span className="item-description">Suprimentos</span>
            </a>
          </li>
          <li className={`side-item ${activeItem === 'Fiscal' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Fiscal')}>
            <a href="#">
              <FontAwesomeIcon icon={faFileInvoiceDollar} />
              <span className="item-description">Fiscal</span>
            </a>
          </li>
          <li className={`side-item ${activeItem === 'Configurações' ? 'active' : ''}`} onClick={() => handleMenuItemClick('Configurações')}>
            <a href="#">
              <FontAwesomeIcon icon={faGear} />
              <span className="item-description">Configurações</span>
            </a>
          </li>
        </ul>
        <button id="open_btn" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faChevronRight} id="open_btn_icon" />
        </button>
      </div>
      <div id="logout">
        <button id="logout_btn">
          <FontAwesomeIcon icon={faRightFromBracket} />
          <span className="item-description">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Menu;
