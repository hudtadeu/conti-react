import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUserCircle, faGear, faChevronRight, faChevronDown, faRightFromBracket, faDoorOpen, faWarehouse, faCubes, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import './styleMenu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [submenuOpen, setSubmenuOpen] = useState('');

  useEffect(() => {
    document.body.classList.toggle('sidebar-closed', !isOpen);
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setSubmenuOpen(''); // Close any open submenu when sidebar is toggled
  };

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
    setSubmenuOpen(''); // Close any open submenu when an item is clicked
  };

  const handleMouseEnter = (item) => {
    if (isOpen) {
      setSubmenuOpen(item);
    }
  };

  const handleMouseLeave = () => {
    if (isOpen) {
      setSubmenuOpen('');
    }
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
          <li
            className={`side-item ${activeItem === 'Dashboard' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('Dashboard')}
          >
            <a href="#">
              <FontAwesomeIcon icon={faChartLine} />
              <span className="item-description">Dashboard</span>
            </a>
          </li>
          <li
            className={`side-item ${activeItem === 'Portaria' ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter('Portaria')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" onClick={() => handleMenuItemClick('Portaria')}>
              <FontAwesomeIcon icon={faDoorOpen} />
              <span className="item-description">Portaria</span>
              {isOpen && (
                <FontAwesomeIcon
                  icon={submenuOpen === 'Portaria' ? faChevronDown : faChevronRight}
                  className="submenu-icon"
                />
              )}
            </a>
            {submenuOpen === 'Portaria' && (
              <ul className="submenu">
                <li className="submenu-item">
                  <a href="#">Submenu 1</a>
                </li>
                <li className="submenu-item">
                  <a href="#">Submenu 2</a>
                </li>
              </ul>
            )}
          </li>
          <li
            className={`side-item ${activeItem === 'Almoxarifado' ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter('Almoxarifado')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" onClick={() => handleMenuItemClick('Almoxarifado')}>
              <FontAwesomeIcon icon={faWarehouse} />
              <span className="item-description">Almoxarifado</span>
              {isOpen && (
                <FontAwesomeIcon
                  icon={submenuOpen === 'Almoxarifado' ? faChevronDown : faChevronRight}
                  className="submenu-icon"
                />
              )}
            </a>
            {submenuOpen === 'Almoxarifado' && (
              <ul className="submenu">
                <li className="submenu-item">
                  <a href="#">Submenu 1</a>
                </li>
                <li className="submenu-item">
                  <a href="#">Submenu 2</a>
                </li>
              </ul>
            )}
          </li>
          <li
            className={`side-item ${activeItem === 'Suprimentos' ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter('Suprimentos')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" onClick={() => handleMenuItemClick('Suprimentos')}>
              <FontAwesomeIcon icon={faCubes} />
              <span className="item-description">Suprimentos</span>
              {isOpen && (
                <FontAwesomeIcon
                  icon={submenuOpen === 'Suprimentos' ? faChevronDown : faChevronRight}
                  className="submenu-icon"
                />
              )}
            </a>
            {submenuOpen === 'Suprimentos' && (
              <ul className="submenu">
                <li className="submenu-item">
                  <a href="#">Submenu 1</a>
                </li>
                <li className="submenu-item">
                  <a href="#">Submenu 2</a>
                </li>
              </ul>
            )}
          </li>
          <li
            className={`side-item ${activeItem === 'Fiscal' ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter('Fiscal')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" onClick={() => handleMenuItemClick('Fiscal')}>
              <FontAwesomeIcon icon={faFileInvoiceDollar} />
              <span className="item-description">Fiscal</span>
              {isOpen && (
                <FontAwesomeIcon
                  icon={submenuOpen === 'Fiscal' ? faChevronDown : faChevronRight}
                  className="submenu-icon"
                />
              )}
            </a>
            {submenuOpen === 'Fiscal' && (
              <ul className="submenu">
                <li className="submenu-item">
                  <a href="#">Submenu 1</a>
                </li>
                <li className="submenu-item">
                  <a href="#">Submenu 2</a>
                </li>
              </ul>
            )}
          </li>
          <li
            className={`side-item ${activeItem === 'Configurações' ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter('Configurações')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" onClick={() => handleMenuItemClick('Configurações')}>
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
