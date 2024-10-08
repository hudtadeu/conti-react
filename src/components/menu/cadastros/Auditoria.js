import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck, faEllipsisH, faTimes } from '@fortawesome/free-solid-svg-icons';
import './styleAuditoria.css';

const Auditoria = () => {
  const navigate = useNavigate();
  const { chartType, dataPointIndex } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChart, setSelectedChart] = useState(null);

  const getChartData = (chartType, dataPointIndex) => {
    const data = {
      2: {
        title: "Auditoria",
        columns: [
          { name: 'Tipo', label: 'Tipo' },
          { name: 'Situacao', label: 'Situação' },
          { name: 'Localizacao', label: 'Localização' },
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
            Localizacao: 'Na Empresa',
            Entrega: 'Entrega',
            Status: 'Pendente',
            TempoStatus: '11 dias',
            NotaFiscal: '0000922',
            Serie: '236',
            Emissao: '28/07/2024',
            RazaoSocial: 'JIAINDY INDÚSTRIA DE PLÁSTICOS LTDA.',
            Produto: true,
            Quantidade: true,
            UnidMedida: true,
            PrecoUnitario: true,
            Desconto: true,
            CondPagamento: true,
            CFOP: false,
            OrdemCompra: true,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: true,
            IPI: true,
            CSTPIS: true,
            PIS: true,
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
          {
            Tipo: 'CT-e',
            Situacao: 'Autorizada',
            Localizacao: 'Em Trânsito',
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
            PrecoUnitario: false,
            Desconto: true,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: true,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: false,
            IPI: true,
            CSTPIS: true,
            PIS: true,
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
          {
            Tipo: 'CT-e',
            Situacao: 'Autorizada',
            Localizacao: 'Em Trânsito',
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
            PrecoUnitario: false,
            Desconto: true,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: true,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: false,
            IPI: true,
            CSTPIS: true,
            PIS: true,
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
          {
            Tipo: 'CT-e',
            Situacao: 'Autorizada',
            Localizacao: 'Em Trânsito',
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
            PrecoUnitario: false,
            Desconto: true,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: true,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: false,
            IPI: true,
            CSTPIS: true,
            PIS: true,
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
          {
            Tipo: 'CT-e',
            Situacao: 'Autorizada',
            Localizacao: 'Em Trânsito',
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
            PrecoUnitario: false,
            Desconto: true,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: true,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: false,
            IPI: true,
            CSTPIS: true,
            PIS: true,
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
          {
            Tipo: 'CT-e',
            Situacao: 'Autorizada',
            Localizacao: 'Em Trânsito',
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
            PrecoUnitario: false,
            Desconto: true,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: true,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: false,
            IPI: true,
            CSTPIS: true,
            PIS: true,
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
          {
            Tipo: 'CT-e',
            Situacao: 'Autorizada',
            Localizacao: 'Em Trânsito',
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
            PrecoUnitario: false,
            Desconto: true,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: true,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: false,
            IPI: true,
            CSTPIS: true,
            PIS: true,
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
          {
            Tipo: 'CT-e',
            Situacao: 'Autorizada',
            Localizacao: 'Em Trânsito',
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
            PrecoUnitario: false,
            Desconto: true,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: true,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: false,
            IPI: true,
            CSTPIS: true,
            PIS: true,
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
          {
            Tipo: 'CT-e',
            Situacao: 'Autorizada',
            Localizacao: 'Em Trânsito',
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
            PrecoUnitario: false,
            Desconto: true,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: true,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: false,
            IPI: true,
            CSTPIS: true,
            PIS: true,
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
          {
            Tipo: 'CT-e',
            Situacao: 'Autorizada',
            Localizacao: 'Em Trânsito',
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
            PrecoUnitario: false,
            Desconto: true,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: true,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: false,
            IPI: true,
            CSTPIS: true,
            PIS: true,
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
          {
            Tipo: 'CT-e',
            Situacao: 'Autorizada',
            Localizacao: 'Em Trânsito',
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
            PrecoUnitario: false,
            Desconto: true,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: true,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: false,
            IPI: true,
            CSTPIS: true,
            PIS: true,
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
    value ? <FontAwesomeIcon icon={faCheck} className="icon-check" /> : <FontAwesomeIcon icon={faCheck} className="icon-minus" />
  );

  const openModal = () => {
    setSelectedChart(chartData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedChart(null);
  };

  const navigateToDetails = (id) => {
    navigate(`/detalhes-xml/${id}`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="page-container">
      <div className="comparative-parameters">
        <div className="header-comparative">
          <h1>Auditoria</h1>
          <button className="btn-back" onClick={handleGoBack}>
            <FontAwesomeIcon icon={faArrowLeft} /> Voltar
          </button>
        </div>
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
              {chartData.rows && chartData.rows.slice(0, 11).map((row, index) => (
                <tr key={index}>
                  {chartData.columns.map((col, colIndex) => (
                    <td key={colIndex}>
                      {typeof row[col.name] === 'boolean' ? renderBooleanIcon(row[col.name]) : row[col.name]}
                    </td>
                  ))}
                  <td className="table-actions">
                    <button className="btn-details" onClick={() => navigateToDetails(index)}>Detalhes</button>
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
                    <label>Estabelecimento:</label>
                    <select>
                      <option value="estabelecimento1">Estabelecimento 1</option>
                      <option value="estabelecimento2">Estabelecimento 2</option>
                      <option value="estabelecimento3">Estabelecimento 3</option>
                    </select>
                  </div>
                  <div className="filter">
                    <label>Área de Negócio:</label>
                    <select>
                      <option value="suprimento">Suprimento</option>
                      <option value="fiscal">Fiscal</option>
                      <option value="pcp">PCP</option>
                      <option value="qualidade">Qualidade</option>
                    </select>
                  </div>
                  <div className="filter">
                    <label>Tipo Documento Fiscal:</label>
                    <select>
                      <option value="nfe">NFe</option>
                      <option value="nfs">Nfs</option>
                      <option value="cte">CTe</option>
                    </select>
                  </div>
                  <div className="filter">
                    <label>Fornecedor:</label>
                    <input type="text" />
                  </div>
                  <div className="filter">
                    <label>Dias Pendentes:</label>
                    <input type="number" />
                  </div>
                  <div className="filter">
                    <label>Localização:</label>
                    <select>
                      <option value="emTransito">Em Trânsito</option>
                      <option value="naEmpresa">Na Empresa</option>
                      <option value="dentroDaFabrica">Dentro da Fábrica</option>
                    </select>
                  </div>
                  <div className="filter">
                    <label>Linha de Produtos:</label>
                    <select>
                      <option value="grupo1">Grupo 1</option>
                      <option value="grupo2">Grupo 2</option>
                      <option value="grupo3">Grupo 3</option>
                    </select>
                  </div>
                </div>
                <button className="button-save">Salvar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auditoria;
