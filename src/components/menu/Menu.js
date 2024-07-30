import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUserCircle, faGear, faChevronRight, faChevronDown, faRightFromBracket, faDoorOpen, faWarehouse, faCubes, faFileInvoiceDollar, faAddressBook, faTasks, faMagnifyingGlass, faChartBar, faChartPie, faRepeat } from '@fortawesome/free-solid-svg-icons';
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
    setSubmenuOpen('');
  };

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
    setSubmenuOpen((prev) => (prev === item ? '' : item));
  };

  return (
    <nav id="sidebar" className={isOpen ? 'open-sidebar' : ''}>
      <div id="sidebar_content">
        <div id="logo">
          <img src="/conti_transparente.png" id="conti_transparente" alt="Logo" />
          <div id="welcome">
            <FontAwesomeIcon icon={faUserCircle} />
            <span className="item-description">Bem vindo, </span>
          </div>
        </div>
        <ul id="side_items">
          <li
            className={`side-item ${activeItem === 'Dashboard' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('Dashboard')}
          >
            <a href="#">
              <FontAwesomeIcon icon={faChartPie} />
              <span className="item-description">Painel de Controle</span>
            </a>
          </li>
          <li
            className={`side-item ${activeItem === 'Cadastros' ? 'active' : ''}`}
          >
            <a href="#" onClick={() => handleMenuItemClick('Cadastros')}>
              <FontAwesomeIcon icon={faAddressBook} />
              <span className="item-description">Cadastros</span>
              {isOpen && (
                <FontAwesomeIcon
                  icon={submenuOpen === 'Cadastros' ? faChevronDown : faChevronRight}
                  className="submenu-icon"
                />
              )}
            </a>
            {submenuOpen === 'Cadastros' && (
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
            className={`side-item ${activeItem === 'Rotinas' ? 'active' : ''}`}
          >
            <a href="#" onClick={() => handleMenuItemClick('Rotinas')}>
              <FontAwesomeIcon icon={faRepeat} />
              <span className="item-description">Rotinas</span>
              {isOpen && (
                <FontAwesomeIcon
                  icon={submenuOpen === 'Rotinas' ? faChevronDown : faChevronRight}
                  className="submenu-icon"
                />
              )}
            </a>
            {submenuOpen === 'Rotinas' && (
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
            className={`side-item ${activeItem === 'Tarefas' ? 'active' : ''}`}
          >
            <a href="#" onClick={() => handleMenuItemClick('Tarefas')}>
              <FontAwesomeIcon icon={faTasks} />
              <span className="item-description">Tarefas</span>
              {isOpen && (
                <FontAwesomeIcon
                  icon={submenuOpen === 'Tarefas' ? faChevronDown : faChevronRight}
                  className="submenu-icon"
                />
              )}
            </a>
            {submenuOpen === 'Tarefas' && (
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
            className={`side-item ${activeItem === 'Consultas' ? 'active' : ''}`}
          >
            <a href="#" onClick={() => handleMenuItemClick('Consultas')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span className="item-description">Consultas</span>
              {isOpen && (
                <FontAwesomeIcon
                  icon={submenuOpen === 'Consultas' ? faChevronDown : faChevronRight}
                  className="submenu-icon"
                />
              )}
            </a>
            {submenuOpen === 'Consultas' && (
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
            className={`side-item ${activeItem === 'Relatórios' ? 'active' : ''}`}
          >
            <a href="#" onClick={() => handleMenuItemClick('Relatórios')}>
              <FontAwesomeIcon icon={faChartBar} />
              <span className="item-description">Relatórios</span>
              {isOpen && (
                <FontAwesomeIcon
                  icon={submenuOpen === 'Relatórios' ? faChevronDown : faChevronRight}
                  className="submenu-icon"
                />
              )}
            </a>
            {submenuOpen === 'Relatórios' && (
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
