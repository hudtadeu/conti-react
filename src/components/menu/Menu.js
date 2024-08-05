/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faChevronRight, faChevronDown, faRightFromBracket, faAddressBook, faTasks, faMagnifyingGlass, faChartBar, faChartPie, faRepeat, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './styleMenu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [submenuOpen, setSubmenuOpen] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle('sidebar-closed', !isOpen);
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setSubmenuOpen('');
  };

  const handleMenuItemClick = (item, path) => {
    if (isOpen) {
      setActiveItem(item);
      setSubmenuOpen((prev) => (prev === item ? '' : item));
    } else {
      setActiveItem(item);
      setSubmenuOpen('');
    }
    navigate(path);
  };

  return (
    <nav id="sidebar" className={isOpen ? 'open-sidebar' : ''}>
      <div id="sidebar_content">
        <div id="logo">
          <img 
            src={isOpen ? "/conti_branca_transparente.png" : "/conti_branca_transparente_cc.png"} 
            id="conti_transparente" 
            alt="Logo" 
          />
        </div>
        <ul id="side_items">
          <li
            className={`side-item ${activeItem === 'Dashboard' ? 'active' : ''}`}
            onClick={() => handleMenuItemClick('Dashboard', '/dashboard')}
          >
            <a href="#">
              <FontAwesomeIcon icon={faChartPie} className="menu-icon" />
              <span className="item-description">Monitor Xml Loader</span>
            </a>
          </li>
          <li
            className={`side-item ${activeItem === 'Cadastros' ? 'active' : ''}`}
          >
            <a href="#" onClick={() => handleMenuItemClick('Cadastros', '/cadastros')}>
              <FontAwesomeIcon icon={faAddressBook} className="menu-icon" />
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
            <a href="#" onClick={() => handleMenuItemClick('Rotinas', '/rotinas')}>
              <FontAwesomeIcon icon={faRepeat} className="menu-icon" />
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
            <a href="#" onClick={() => handleMenuItemClick('Tarefas', '/tarefas')}>
              <FontAwesomeIcon icon={faTasks} className="menu-icon" />
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
            <a href="#" onClick={() => handleMenuItemClick('Consultas', '/consultas')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="menu-icon" />
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
            <a href="#" onClick={() => handleMenuItemClick('Relatórios', '/relatorios')}>
              <FontAwesomeIcon icon={faChartBar} className="menu-icon" />
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
            <a href="#" onClick={() => handleMenuItemClick('Configurações', '/configuracoes')}>
              <FontAwesomeIcon icon={faGear} className="menu-icon" />
              <span className="item-description">Configurações</span>
            </a>
          </li>
        </ul>
        <button id="open_btn" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronRight} id="open_btn_icon" />
        </button>
      </div>
      <div id="logout">
        <button id="logout_btn" className="fixed-logout-btn">
          <FontAwesomeIcon icon={faRightFromBracket} className="menu-icon" />
          <span className="item-description">Sair</span>
        </button>
      </div>
    </nav>
  );
};

export default Menu;
