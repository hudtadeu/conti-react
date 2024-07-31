import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import './styleComparativeParameters.css';

const ComparativeParameters = () => {
  const { chartType, dataPointIndex } = useParams();

  const getChartData = (chartType, dataPointIndex) => {
    // Fetch or get chart data based on chartType and dataPointIndex
    // Example data
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
          // Example row data
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
          // ... other rows
        ],
      },
      // ... other chart types
    };
    return data[chartType] || {};
  };

  const chartData = getChartData(chartType, dataPointIndex);

  const renderBooleanIcon = (value) => (
    value ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />
  );

  return (
    <div className="comparative-parameters">
      <h1>Parâmetros comparativo XML</h1>
      <button className="btn-new">Novo</button>
      <table className="comparative-table">
        <thead>
          <tr>
            {chartData.columns && chartData.columns.map((col, index) => (
              <th key={index}>{col.label}</th>
            ))}
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparativeParameters;
