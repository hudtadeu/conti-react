import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck, faEllipsisH, faTimes } from '@fortawesome/free-solid-svg-icons';
import './styleXmlRecebidos.css';

const XmlRecebidos = () => {
  const navigate = useNavigate();
  const { chartType, dataPointIndex } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChart, setSelectedChart] = useState(null);

  const getChartData = (chartType, dataPointIndex) => {
    const data = {
      0: {
        title: "XML's Recebidos a (x Dias)",
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
            UnidMedida: false,
            PrecoUnitario: true,
            Desconto: true,
            CondPagamento: false,
            CFOP: true,
            OrdemCompra: false,
            CSTICMS: true,
            ICMS: false,
            ST: true,
            CSTIPI: true,
            IPI: true,
            CSTPIS: false,
            PIS: true,
            CSTCOFINS: true,
            COFINS: true,
            NCM: true,
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
            Status: 'Cancelado',
            TempoStatus: '1 dia',
            NotaFiscal: '0000923',
            Serie: '236',
            Emissao: '28/07/2024',
            RazaoSocial: 'JIAINDY INDÚSTRIA DE PLÁSTICOS LTDA.',
            Produto: true,
            Quantidade: true,
            UnidMedida: false,
            PrecoUnitario: true,
            Desconto: false,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: false,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: true,
            IPI: true,
            CSTPIS: false,
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
            Tipo: 'NF-e',
            Situacao: 'Autorizada',
            Localizacao: 'Em Trânsito',
            Entrega: 'Entrega',
            Status: 'Atualizado',
            TempoStatus: '1 dia',
            NotaFiscal: '0000923',
            Serie: '236',
            Emissao: '28/07/2024',
            RazaoSocial: 'JIAINDY INDÚSTRIA DE PLÁSTICOS LTDA.',
            Produto: true,
            Quantidade: true,
            UnidMedida: false,
            PrecoUnitario: true,
            Desconto: false,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: false,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: true,
            IPI: true,
            CSTPIS: false,
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
            UnidMedida: false,
            PrecoUnitario: true,
            Desconto: false,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: false,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: true,
            IPI: true,
            CSTPIS: false,
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
            Tipo: 'NF3e',
            Situacao: 'Autorizada',
            Localizacao: 'Dentro da Fábrica',
            Entrega: 'Entrega',
            Status: 'Cancelado',
            TempoStatus: '1 dia',
            NotaFiscal: '0000923',
            Serie: '236',
            Emissao: '28/07/2024',
            RazaoSocial: 'JIAINDY INDÚSTRIA DE PLÁSTICOS LTDA.',
            Produto: true,
            Quantidade: true,
            UnidMedida: false,
            PrecoUnitario: true,
            Desconto: false,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: false,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: true,
            IPI: true,
            CSTPIS: false,
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
            Tipo: 'NFS-e',
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
            UnidMedida: false,
            PrecoUnitario: true,
            Desconto: false,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: false,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: true,
            IPI: true,
            CSTPIS: false,
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
            Tipo: 'NF-e',
            Situacao: 'Autorizada',
            Localizacao: 'Na Empresa',
            Entrega: 'Entrega',
            Status: 'Atualizado',
            TempoStatus: '1 dia',
            NotaFiscal: '0000923',
            Serie: '236',
            Emissao: '28/07/2024',
            RazaoSocial: 'JIAINDY INDÚSTRIA DE PLÁSTICOS LTDA.',
            Produto: true,
            Quantidade: true,
            UnidMedida: false,
            PrecoUnitario: true,
            Desconto: false,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: false,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: true,
            IPI: true,
            CSTPIS: false,
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
            Tipo: 'NFS-e',
            Situacao: 'Autorizada',
            Localizacao: 'Dentro da Fábrica',
            Entrega: 'Entrega',
            Status: 'Pendente',
            TempoStatus: '1 dia',
            NotaFiscal: '0000923',
            Serie: '236',
            Emissao: '28/07/2024',
            RazaoSocial: 'JIAINDY INDÚSTRIA DE PLÁSTICOS LTDA.',
            Produto: true,
            Quantidade: true,
            UnidMedida: false,
            PrecoUnitario: true,
            Desconto: false,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: false,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: true,
            IPI: true,
            CSTPIS: false,
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
            Tipo: 'CT-e OS',
            Situacao: 'Autorizada',
            Localizacao: 'Na Empresa',
            Entrega: 'Entrega',
            Status: 'Pendente',
            TempoStatus: '1 dia',
            NotaFiscal: '0000923',
            Serie: '236',
            Emissao: '28/07/2024',
            RazaoSocial: 'JIAINDY INDÚSTRIA DE PLÁSTICOS LTDA.',
            Produto: true,
            Quantidade: true,
            UnidMedida: false,
            PrecoUnitario: true,
            Desconto: false,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: false,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: true,
            IPI: true,
            CSTPIS: false,
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
            Localizacao: 'Na Empresa',
            Entrega: 'Entrega',
            Status: 'Cancelado',
            TempoStatus: '1 dia',
            NotaFiscal: '0000923',
            Serie: '236',
            Emissao: '28/07/2024',
            RazaoSocial: 'JIAINDY INDÚSTRIA DE PLÁSTICOS LTDA.',
            Produto: true,
            Quantidade: true,
            UnidMedida: false,
            PrecoUnitario: true,
            Desconto: false,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: false,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: true,
            IPI: true,
            CSTPIS: false,
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
            Status: 'Atualizado',
            TempoStatus: '1 dia',
            NotaFiscal: '0000923',
            Serie: '236',
            Emissao: '28/07/2024',
            RazaoSocial: 'JIAINDY INDÚSTRIA DE PLÁSTICOS LTDA.',
            Produto: true,
            Quantidade: true,
            UnidMedida: false,
            PrecoUnitario: true,
            Desconto: false,
            CondPagamento: true,
            CFOP: true,
            OrdemCompra: false,
            CSTICMS: true,
            ICMS: true,
            ST: true,
            CSTIPI: true,
            IPI: true,
            CSTPIS: false,
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
  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
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
          <h1>XML's Recebidos</h1>
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
          <div className="modal" onClick={handleModalClick}>
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
                      <option value="estab1">Estabelecimento 1</option>
                      <option value="estab2">Estabelecimento 2</option>
                      <option value="estab3">Estabelecimento 3</option>
                    </select>
                  </div>
                  <div className="filter">
                    <label>Tipo Documento Fiscal:</label>
                    <select>
                      <option value="nfe">NFe</option>
                      <option value="nf3e">NF3e</option>
                      <option value="cte">CTe</option>
                      <option value="cteos">CT-e OS</option>
                      <option value="nfse">NFS-e</option>
                    </select>
                  </div>
                  <div className="filter">
                    <label>Código Fornecedor:</label>
                    <input type="text" />
                  </div>
                  <div className="filter">
                    <label>Dias Pendentes:</label>
                    <input type="number" />
                  </div>
                  <div className="filter">
                    <label>Localização:</label>
                    <select>
                      <option value="local1">Localização 1</option>
                      <option value="local2">Localização 2</option>
                      <option value="local3">Localização 3</option>
                    </select>
                  </div>
                  <div className="filter">
                    <label>Linha de Produtos:</label>
                    <select>
                      <option value="linha1">Linha 1</option>
                      <option value="linha2">Linha 2</option>
                      <option value="linha3">Linha 3</option>
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

export default XmlRecebidos;
