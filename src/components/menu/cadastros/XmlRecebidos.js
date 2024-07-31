import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMinus, faCog, faChevronDown, faEye, faEdit, faCopy, faFileExport, faTrash } from '@fortawesome/free-solid-svg-icons';
import DropdownPortal from '../../DropdownPortal';  // Import the DropdownPortal component
import './styleXmlRecebidos.css';

const XmlRecebidos = () => {
  const { chartType, dataPointIndex } = useParams();
  const [activeRow, setActiveRow] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const getChartData = (chartType, dataPointIndex) => {
    const data = {
      0: {
        title: "XML's Recebidos a (x Dias)",
        columns: [
          { name: 'Usuario', label: 'Usuário' },
          { name: 'Estabelecimento', label: 'Estabelecimento' },
          { name: 'Importa', label: 'Importa' },
          { name: 'Elimina', label: 'Elimina' },
          { name: 'Cancela', label: 'Cancela' },
          { name: 'Altera', label: 'Altera' },
          { name: 'Atualiza', label: 'Atualiza' },
          { name: 'Efetua', label: 'Efetua' },
          { name: 'Arquiva', label: 'Arquiva' },
          { name: 'Manifesta', label: 'Manifesta' },
          { name: 'Prioriza', label: 'Prioriza' },
          { name: 'RecFiscal', label: 'Rec.Fiscal' },
          { name: 'RecFisico', label: 'Rec.Físico' },
        ],
        rows: [
          { 
            Usuario: 'User1', 
            Estabelecimento: 'Estabelecimento 1', 
            Importa: true, 
            Elimina: false, 
            Cancela: true, 
            Altera: false, 
            Atualiza: true, 
            Efetua: true, 
            Arquiva: false, 
            Manifesta: true, 
            Prioriza: false, 
            RecFiscal: true, 
            RecFisico: false 
          },
          { 
            Usuario: 'User2', 
            Estabelecimento: 'Estabelecimento 2', 
            Importa: false, 
            Elimina: true, 
            Cancela: false, 
            Altera: true, 
            Atualiza: false, 
            Efetua: true, 
            Arquiva: true, 
            Manifesta: false, 
            Prioriza: true, 
            RecFiscal: false, 
            RecFisico: true 
          },
        ],
      },
    };
    return data[chartType] || {};
  };

  const chartData = getChartData(chartType, dataPointIndex);

  const renderBooleanIcon = (value) => (
    value ? <FontAwesomeIcon icon={faCheck} className="icon-check" /> : <FontAwesomeIcon icon={faMinus} className="icon-minus" />
  );

  const handleDropdownToggle = (index, event) => {
    const rect = event.target.getBoundingClientRect();
    setDropdownPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    setActiveRow(index === activeRow ? null : index);
  };

  return (
    <div className="comparative-parameters">
      <h1>XML's Recebidos</h1>
      <button className="btn-new">Criar Novo</button>
      <div className="comparative-table-container">
        <table className="comparative-table">
          <thead>
            <tr>
              {chartData.columns && chartData.columns.map((col, index) => (
                <th key={index}>{col.label}</th>
              ))}
              <th className="config-icon-container">
                <FontAwesomeIcon icon={faCog} className="config-icon" />
              </th>
            </tr>
          </thead>
          <tbody>
            {chartData.rows && chartData.rows.map((row, index) => (
              <tr key={index}>
                {chartData.columns.map((col, colIndex) => (
                  <td key={colIndex}>
                    {typeof row[col.name] === 'boolean' ? renderBooleanIcon(row[col.name]) : row[col.name]}
                  </td>
                ))}
                <td className="table-actions">
                  <div className="dropdown-container">
                    <button className="btn-actions" onClick={(event) => handleDropdownToggle(index, event)}>
                      Ações <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                    {activeRow === index && (
                      <DropdownPortal>
                        <div className="dropdown-menu" style={{ top: dropdownPosition.top, left: dropdownPosition.left }}>
                          <ul>
                            <li><FontAwesomeIcon icon={faEye} /> Visualizar</li>
                            <li><FontAwesomeIcon icon={faEdit} /> Editar</li>
                            <li><FontAwesomeIcon icon={faCopy} /> Duplicar</li>
                            <li><FontAwesomeIcon icon={faFileExport} /> Exportar</li>
                            <li className="delete-action"><FontAwesomeIcon icon={faTrash} /> Excluir</li>
                          </ul>
                        </div>
                      </DropdownPortal>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default XmlRecebidos;
