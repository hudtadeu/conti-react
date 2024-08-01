import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMinus, faEllipsisH, faTimes } from '@fortawesome/free-solid-svg-icons';
import './styleOcorrenciasLinhasProdutos.css';

const OcorrenciasLinhasProdutos = () => {
  const { chartType, dataPointIndex } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChart, setSelectedChart] = useState(null);

  const getChartData = (chartType, dataPointIndex) => {
    const data = {
      4: {
        title: "Ocorrências por Linhas de Produtos",
        columns: [
          { name: 'Tipo', label: 'Tipo' },
          { name: 'Situacao', label: 'Situação' },
          { name: 'Faz', label: 'Faz' },
          { name: 'Entrega', label: 'Entrega' },
          { name: 'Status', label: 'Status' },
          { name: 'TempoStatus', label: 'Tempo no Status' },
          { name: 'NotaFiscal', label: 'Nota Fiscal' },
          { name: 'Serie', label: 'Série' },
          { name: 'Emissao', label: 'Emissão' },
          { name: 'RazaoSocial', label: 'Razão Social' },
          { name: 'Produto', label: 'Produto' },
          { name: 'Quantidade', label: 'Quantidade' },
          { name: 'UnidMedida', label: 'Unid Medida' },
          { name: 'PrecoUnitario', label: 'Preço Unitário' },
          { name: 'Desconto', label: 'Desconto' },
          { name: 'CondPagamento', label: 'Cond. Pagto' },
          { name: 'CFOP', label: 'CFOP' },
          { name: 'OrdemCompra', label: 'Ordem Compra' },
          { name: 'CSTICMS', label: 'CST ICMS' },
          { name: 'ICMS', label: 'ICMS' },
          { name: 'ST', label: 'ST' },
          { name: 'CSTIPI', label: 'CST IPI' },
          { name: 'IPI', label: 'IPI' },
          { name: 'CSTPIS', label: 'CST PIS' },
          { name: 'PIS', label: 'PIS' },
          { name: 'CSTCOFINS', label: 'CST COFINS' },
          { name: 'COFINS', label: 'COFINS' },
          { name: 'NCM', label: 'NCM' },
          { name: 'CEST', label: 'CEST' },
          { name: 'TipoServico', label: 'Tipo Serviço' },
          { name: 'EAN', label: 'EAN' },
          { name: 'Finalidade', label: 'Finalidade' },
          { name: 'Origem', label: 'Origem' },
          { name: 'SituacaoManifesto', label: 'Situação Manifesto' },
          { name: 'ConfirmadoPrioridade', label: 'Confirmado Prioridade' },
          { name: 'DataConfirm', label: 'Data Confirmação' },
          { name: 'UsuarioConfirm', label: 'Usuário Confirmação' },
        ],
        rows: [
          {
            Tipo: 'NF-e',
            Situacao: 'Autorizada',
            Faz: 'Aguardando',
            Entrega: 'Entrega',
            Status: 'Pendente',
            TempoStatus: '11 dias',
            NotaFiscal: '0000922',
            Serie: '236',
            Emissao: '28/07/2024',
            RazaoSocial: 'JIAINDY INDÚSTRIA DE PLÁSTICOS LTDA.',
            Produto: true,
            Quantidade: false,
            UnidMedida: true,
            PrecoUnitario: true,
            Desconto: true,
            CondPagamento: true,
            CFOP: false,
            OrdemCompra: false,
            CSTICMS: true,
            ICMS: true,
            ST: false,
            CSTIPI: true,
            IPI: true,
            CSTPIS: true,
            PIS: true,
            CSTCOFINS: true,
            COFINS: true,
            NCM: true,
            CEST: true,
            TipoServico: false,
            EAN: true,
            Finalidade: 'NF-e Normal',
            Origem: 'Download SEFAZ',
            SituacaoManifesto: 'Ciência',
            ConfirmadoPrioridade: 'Sim',
            DataConfirm: '28/07/2024',
            UsuarioConfirm: 'Clecia',
          },
          {
            Tipo: 'CT-e',
            Situacao: 'Autorizada',
            Faz: 'Em Trânsito',
            Entrega: 'Entrega',
            Status: 'Pendente',
            TempoStatus: '1 dia',
            NotaFiscal: '0000923',
            Serie: '236',
            Emissao: '28/07/2024',
            RazaoSocial: 'JIAINDY INDÚSTRIA DE PLÁSTICOS LTDA.',
            Produto: true,
            Quantidade: true,
            UnidMedida: true,
            PrecoUnitario: true,
            Desconto: false,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: true,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: false,
            IPI: true,
            CSTPIS: true,
            PIS: false,
            CSTCOFINS: true,
            COFINS: true,
            NCM: false,
            CEST: true,
            TipoServico: true,
            EAN: true,
            Finalidade: 'NF-e Normal',
            Origem: 'Download SEFAZ',
            SituacaoManifesto: 'Ciência',
            ConfirmadoPrioridade: 'Sim',
            DataConfirm: '28/07/2024',
            UsuarioConfirm: 'Clecia',
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

  const openModal = () => {
    setSelectedChart(chartData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedChart(null);
  };

  return (
    <div className="comparative-parameters">
      <h1>Ocorrências por Linhas de Produtos</h1>
      <button className="btn-new">Criar Novo</button>
      <div className="comparative-table-container">
        <table className="comparative-table">
          <thead>
            <tr className='title-table'>
              <th colSpan="10">Documento Fiscal</th>
              <th colSpan="22">Auditoria</th>
              <th colSpan="5">Situação do Documento</th>
              <th>
                <FontAwesomeIcon icon={faEllipsisH} className="config-icon" onClick={openModal} />
              </th>
            </tr>
            <tr>
              {chartData.columns && chartData.columns.map((col, index) => (
                <th key={index}>{col.label}</th>
              ))}
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {chartData.rows && chartData.rows.slice(0, 2).map((row, index) => (
              <tr key={index}>
                {chartData.columns.map((col, colIndex) => (
                  <td key={colIndex}>
                    {typeof row[col.name] === 'boolean' ? renderBooleanIcon(row[col.name]) : row[col.name]}
                  </td>
                ))}
                <td className="table-actions">
                  <button className="btn-details">Detalhes</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2 className="chart-title-modal">{selectedChart.title}</h2>
            <div className="modal-body">
              <div className="filters">
                <div className="filter">
                  <label>Período Inicial:</label>
                  <input type="date" />
                </div>
                <div className="filter">
                  <label>Período Final:</label>
                  <input type="date" />
                </div>
                <div className="filter">
                  <label>Estabelecimento:</label>
                  <input type="text" />
                </div>
                <div className="filter">
                  <label>Fornecedor:</label>
                  <input type="text" />
                </div>
                <div className="filter">
                  <label>Tipo de Documento:</label>
                  <select>
                    <option value="">Selecione</option>
                    <option value="99">Todos</option>
                    <option value="1">NF-e</option>
                    <option value="2">CT-e</option>
                    <option value="3">CT-e OS</option>
                    <option value="4">NFS-e</option>
                    <option value="5">NF3e</option>
                  </select>
                </div>
                <div className="filter">
                  <label>Tipos de Erros:</label>
                  <select>
                    <option value="suprimento">Suprimento</option>
                    <option value="fiscal">Fiscal</option>
                    <option value="producao">Produção</option>
                    <option value="almoxarifado">Almoxarifado</option>
                  </select>
                </div>
              </div>
              <button className="button-save">Salvar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OcorrenciasLinhasProdutos;
