import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faEllipsisH, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import './styleDetalhesXml.css';

const DetalhesXml = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [selectedRow, setSelectedRow] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const data = {
    title: "Detalhes do XML",
    generalInfo: [
      { name: 'Tipo', value: 'NF-e' },
      { name: 'Nota Fiscal', value: '0001' },
      { name: 'Serie', value: '01' },
      { name: 'Emissao', value: '2024-07-28' },
      { name: 'Razao Social', value: 'JIAINDY INDÚSTRIA DE PLÁSTICOS LTDA.' },
      { name: 'Chave Acesso', value: '12345678901234567890123456789012345678901234' },
      { name: 'Situacao', value: 'Autorizada' },
      { name: 'Localizacao', value: 'Na Empresa' },
      { name: 'Entrega', value: 'Entrega' },
      { name: 'Status', value: 'Pendente' },
      { name: 'Tempo no Status', value: '5 dias' },
    ],
    columns: [
      { name: 'Origem', label: 'Origem' },
      { name: 'Produto', label: 'Produto' },
      { name: 'Descricao', label: 'Descrição' },
      { name: 'UN', label: 'U.N' },
      { name: 'Quantidade', label: 'Quantidade' },
      { name: 'OdleConvertida', label: 'Qde Convertida' },
      { name: 'PrecoUnitario', label: 'Preço Unitário' },
      { name: 'Desconto', label: 'Desconto' },
      { name: 'PrecoTotal', label: 'Preço Total' },
      { name: 'CFOP', label: 'CFOP' },
      { name: 'PedidoControle', label: 'Pedido ou Controle de Compra' },
      { name: 'OrdemCompra', label: 'Ordem Compra' },
      { name: 'Parc', label: 'Parc' },
      { name: 'SitTribICMS', label: 'Sit Trib ICMS (CST)' },
      { name: 'BaseICMS', label: 'Base ICMS' },
      { name: 'ICMSPerc', label: '% ICMS' },
      { name: 'ValorICMS', label: 'Valor ICMS' },
      { name: 'BaseICMSST', label: 'Base ICMS/ST' },
      { name: 'ICMSSTPerc', label: '% ICMS ST' },
      { name: 'ValorICMSST', label: 'Valor ICMS/ST' },
      { name: 'CSTIPI', label: 'CST IPI' },
      { name: 'BaseIPI', label: 'Base IPI' },
      { name: 'IPIPerc', label: '% IPI' },
      { name: 'ValorIPI', label: 'Valor IPI' },
      { name: 'CSTPIS', label: 'CST PIS' },
      { name: 'BasePIS', label: 'Base PIS' },
      { name: 'PISPerc', label: '% PIS' },
      { name: 'ValorPIS', label: 'Valor PIS' },
      { name: 'CSTCOFINS', label: 'CST COFINS' },
      { name: 'BaseCOFINS', label: 'Base COFINS' },
      { name: 'COFINSPerc', label: '% COFINS' },
      { name: 'ValorCOFINS', label: 'Valor COFINS' },
      { name: 'NCM', label: 'NCM' },
      { name: 'CEST', label: 'CEST' },
      { name: 'TipoServico', label: 'Tipo Serviço' },
      { name: 'EAN', label: 'EAN' },
      { name: 'VI', label: 'VI' },
      { name: 'Seguro', label: 'Seguro' },
      { name: 'Vlfrete', label: 'Vl Frete' },
      { name: 'OutrasDespesas', label: 'Outras Desp.' },
      { name: 'Acoes', label: 'Ações' }, // Nova coluna
    ],
    rows: [
      {
        Origem: 'Compras',
        Produto: 'Produto A',
        Descricao: 'Descrição do Produto A',
        UN: 'UN',
        Quantidade: 10.000,
        OdleConvertida: 10.000,
        PrecoUnitario: 20.00,
        Desconto: 0.00,
        PrecoTotal: 200.00,
        CFOP: '5102',
        PedidoControle: '123456',
        OrdemCompra: '654321',
        Parc: 1,
        SitTribICMS: '000',
        BaseICMS: 200.00,
        ICMSPerc: 18.00,
        ValorICMS: 36.00,
        BaseICMSST: 0.00,
        ICMSSTPerc: 0.00,
        ValorICMSST: 0.00,
        CSTIPI: '00',
        BaseIPI: 200.00,
        IPIPerc: 5.00,
        ValorIPI: 10.00,
        CSTPIS: '01',
        BasePIS: 200.00,
        PISPerc: 1.65,
        ValorPIS: 3.30,
        CSTCOFINS: '01',
        BaseCOFINS: 200.00,
        COFINSPerc: 7.60,
        ValorCOFINS: 15.20,
        NCM: '12345678',
        CEST: '123456',
        TipoServico: 'Tipo A',
        EAN: '1234567890123',
        VI: 0.00,
        Seguro: 0.00,
        Vlfrete: 0.00,
        OutrasDespesas: 0.00,
      },
      {
        Origem: 'Fornecedor',
        Produto: 'Produto A',
        Descricao: 'Descrição do Produto A',
        UN: 'UN',
        Quantidade: 10.000,
        OdleConvertida: 10.000,
        PrecoUnitario: 20.00,
        Desconto: 0.00,
        PrecoTotal: 200.00,
        CFOP: '5102',
        PedidoControle: '123456',
        OrdemCompra: '654321',
        Parc: 1,
        SitTribICMS: '000',
        BaseICMS: 200.00,
        ICMSPerc: 18.00,
        ValorICMS: 36.00,
        BaseICMSST: 0.00,
        ICMSSTPerc: 0.00,
        ValorICMSST: 0.00,
        CSTIPI: '00',
        BaseIPI: 200.00,
        IPIPerc: 5.00,
        ValorIPI: 10.00,
        CSTPIS: '01',
        BasePIS: 200.00,
        PISPerc: 1.65,
        ValorPIS: 3.30,
        CSTCOFINS: '01',
        BaseCOFINS: 200.00,
        COFINSPerc: 7.60,
        ValorCOFINS: 15.20,
        NCM: '12345678',
        CEST: '123456',
        TipoServico: 'Tipo A',
        EAN: '1234567890123',
        VI: 0.00,
        Seguro: 0.00,
        Vlfrete: 0.00,
        OutrasDespesas: 0.00,
      },
      {
        Origem: 'Compras',
        Produto: 'Produto A',
        Descricao: 'Descrição do Produto A',
        UN: 'UN',
        Quantidade: 10.000,
        OdleConvertida: 10.000,
        PrecoUnitario: 20.00,
        Desconto: 0.00,
        PrecoTotal: 200.00,
        CFOP: '5102',
        PedidoControle: '123456',
        OrdemCompra: '654321',
        Parc: 1,
        SitTribICMS: '000',
        BaseICMS: 200.00,
        ICMSPerc: 18.00,
        ValorICMS: 36.00,
        BaseICMSST: 0.00,
        ICMSSTPerc: 0.00,
        ValorICMSST: 0.00,
        CSTIPI: '00',
        BaseIPI: 200.00,
        IPIPerc: 5.00,
        ValorIPI: 10.00,
        CSTPIS: '01',
        BasePIS: 200.00,
        PISPerc: 1.65,
        ValorPIS: 3.30,
        CSTCOFINS: '01',
        BaseCOFINS: 200.00,
        COFINSPerc: 7.60,
        ValorCOFINS: 15.20,
        NCM: '12345678',
        CEST: '123456',
        TipoServico: 'Tipo A',
        EAN: '1234567890123',
        VI: 0.00,
        Seguro: 0.00,
        Vlfrete: 0.00,
        OutrasDespesas: 0.00,
      },
      {
        Origem: 'Fornecedor',
        Produto: 'Produto A',
        Descricao: 'Descrição do Produto A',
        UN: 'UN',
        Quantidade: 10.000,
        OdleConvertida: 10.000,
        PrecoUnitario: 20.00,
        Desconto: 0.00,
        PrecoTotal: 200.00,
        CFOP: '5102',
        PedidoControle: '123456',
        OrdemCompra: '654321',
        Parc: 1,
        SitTribICMS: '000',
        BaseICMS: 200.00,
        ICMSPerc: 18.00,
        ValorICMS: 36.00,
        BaseICMSST: 0.00,
        ICMSSTPerc: 0.00,
        ValorICMSST: 0.00,
        CSTIPI: '00',
        BaseIPI: 200.00,
        IPIPerc: 5.00,
        ValorIPI: 10.00,
        CSTPIS: '01',
        BasePIS: 200.00,
        PISPerc: 1.65,
        ValorPIS: 3.30,
        CSTCOFINS: '01',
        BaseCOFINS: 200.00,
        COFINSPerc: 7.60,
        ValorCOFINS: 15.20,
        NCM: '12345678',
        CEST: '123456',
        TipoServico: 'Tipo A',
        EAN: '1234567890123',
        VI: 0.00,
        Seguro: 0.00,
        Vlfrete: 0.00,
        OutrasDespesas: 0.00,
      },
      {
        Origem: 'Compras',
        Produto: 'Produto A',
        Descricao: 'Descrição do Produto A',
        UN: 'UN',
        Quantidade: 10.000,
        OdleConvertida: 10.000,
        PrecoUnitario: 20.00,
        Desconto: 0.00,
        PrecoTotal: 200.00,
        CFOP: '5102',
        PedidoControle: '123456',
        OrdemCompra: '654321',
        Parc: 1,
        SitTribICMS: '000',
        BaseICMS: 200.00,
        ICMSPerc: 18.00,
        ValorICMS: 36.00,
        BaseICMSST: 0.00,
        ICMSSTPerc: 0.00,
        ValorICMSST: 0.00,
        CSTIPI: '00',
        BaseIPI: 200.00,
        IPIPerc: 5.00,
        ValorIPI: 10.00,
        CSTPIS: '01',
        BasePIS: 200.00,
        PISPerc: 1.65,
        ValorPIS: 3.30,
        CSTCOFINS: '01',
        BaseCOFINS: 200.00,
        COFINSPerc: 7.60,
        ValorCOFINS: 15.20,
        NCM: '12345678',
        CEST: '123456',
        TipoServico: 'Tipo A',
        EAN: '1234567890123',
        VI: 0.00,
        Seguro: 0.00,
        Vlfrete: 0.00,
        OutrasDespesas: 0.00,
      },
      {
        Origem: 'Fornecedor',
        Produto: 'Produto A',
        Descricao: 'Descrição do Produto A',
        UN: 'UN',
        Quantidade: 10.000,
        OdleConvertida: 10.000,
        PrecoUnitario: 20.00,
        Desconto: 0.00,
        PrecoTotal: 200.00,
        CFOP: '5102',
        PedidoControle: '123456',
        OrdemCompra: '654321',
        Parc: 1,
        SitTribICMS: '000',
        BaseICMS: 200.00,
        ICMSPerc: 18.00,
        ValorICMS: 36.00,
        BaseICMSST: 0.00,
        ICMSSTPerc: 0.00,
        ValorICMSST: 0.00,
        CSTIPI: '00',
        BaseIPI: 200.00,
        IPIPerc: 5.00,
        ValorIPI: 10.00,
        CSTPIS: '01',
        BasePIS: 200.00,
        PISPerc: 1.65,
        ValorPIS: 3.30,
        CSTCOFINS: '01',
        BaseCOFINS: 200.00,
        COFINSPerc: 7.60,
        ValorCOFINS: 15.20,
        NCM: '12345678',
        CEST: '123456',
        TipoServico: 'Tipo A',
        EAN: '1234567890123',
        VI: 0.00,
        Seguro: 0.00,
        Vlfrete: 0.00,
        OutrasDespesas: 0.00,
      },
      {
        Origem: 'Compras',
        Produto: 'Produto A',
        Descricao: 'Descrição do Produto A',
        UN: 'UN',
        Quantidade: 10.000,
        OdleConvertida: 10.000,
        PrecoUnitario: 20.00,
        Desconto: 0.00,
        PrecoTotal: 200.00,
        CFOP: '5102',
        PedidoControle: '123456',
        OrdemCompra: '654321',
        Parc: 1,
        SitTribICMS: '000',
        BaseICMS: 200.00,
        ICMSPerc: 18.00,
        ValorICMS: 36.00,
        BaseICMSST: 0.00,
        ICMSSTPerc: 0.00,
        ValorICMSST: 0.00,
        CSTIPI: '00',
        BaseIPI: 200.00,
        IPIPerc: 5.00,
        ValorIPI: 10.00,
        CSTPIS: '01',
        BasePIS: 200.00,
        PISPerc: 1.65,
        ValorPIS: 3.30,
        CSTCOFINS: '01',
        BaseCOFINS: 200.00,
        COFINSPerc: 7.60,
        ValorCOFINS: 15.20,
        NCM: '12345678',
        CEST: '123456',
        TipoServico: 'Tipo A',
        EAN: '1234567890123',
        VI: 0.00,
        Seguro: 0.00,
        Vlfrete: 0.00,
        OutrasDespesas: 0.00,
      },
      {
        Origem: 'Fornecedor',
        Produto: 'Produto A',
        Descricao: 'Descrição do Produto A',
        UN: 'UN',
        Quantidade: 10.000,
        OdleConvertida: 10.000,
        PrecoUnitario: 20.00,
        Desconto: 0.00,
        PrecoTotal: 200.00,
        CFOP: '5102',
        PedidoControle: '123456',
        OrdemCompra: '654321',
        Parc: 1,
        SitTribICMS: '000',
        BaseICMS: 200.00,
        ICMSPerc: 18.00,
        ValorICMS: 36.00,
        BaseICMSST: 0.00,
        ICMSSTPerc: 0.00,
        ValorICMSST: 0.00,
        CSTIPI: '00',
        BaseIPI: 200.00,
        IPIPerc: 5.00,
        ValorIPI: 10.00,
        CSTPIS: '01',
        BasePIS: 200.00,
        PISPerc: 1.65,
        ValorPIS: 3.30,
        CSTCOFINS: '01',
        BaseCOFINS: 200.00,
        COFINSPerc: 7.60,
        ValorCOFINS: 15.20,
        NCM: '12345678',
        CEST: '123456',
        TipoServico: 'Tipo A',
        EAN: '1234567890123',
        VI: 0.00,
        Seguro: 0.00,
        Vlfrete: 0.00,
        OutrasDespesas: 0.00,
      },
      {
        Origem: 'Compras',
        Produto: 'Produto A',
        Descricao: 'Descrição do Produto A',
        UN: 'UN',
        Quantidade: 10.000,
        OdleConvertida: 10.000,
        PrecoUnitario: 20.00,
        Desconto: 0.00,
        PrecoTotal: 200.00,
        CFOP: '5102',
        PedidoControle: '123456',
        OrdemCompra: '654321',
        Parc: 1,
        SitTribICMS: '000',
        BaseICMS: 200.00,
        ICMSPerc: 18.00,
        ValorICMS: 36.00,
        BaseICMSST: 0.00,
        ICMSSTPerc: 0.00,
        ValorICMSST: 0.00,
        CSTIPI: '00',
        BaseIPI: 200.00,
        IPIPerc: 5.00,
        ValorIPI: 10.00,
        CSTPIS: '01',
        BasePIS: 200.00,
        PISPerc: 1.65,
        ValorPIS: 3.30,
        CSTCOFINS: '01',
        BaseCOFINS: 200.00,
        COFINSPerc: 7.60,
        ValorCOFINS: 15.20,
        NCM: '12345678',
        CEST: '123456',
        TipoServico: 'Tipo A',
        EAN: '1234567890123',
        VI: 0.00,
        Seguro: 0.00,
        Vlfrete: 0.00,
        OutrasDespesas: 0.00,
      },
      {
        Origem: 'Fornecedor',
        Produto: 'Produto A',
        Descricao: 'Descrição do Produto A',
        UN: 'UN',
        Quantidade: 10.000,
        OdleConvertida: 10.000,
        PrecoUnitario: 20.00,
        Desconto: 0.00,
        PrecoTotal: 200.00,
        CFOP: '5102',
        PedidoControle: '123456',
        OrdemCompra: '654321',
        Parc: 1,
        SitTribICMS: '000',
        BaseICMS: 200.00,
        ICMSPerc: 18.00,
        ValorICMS: 36.00,
        BaseICMSST: 0.00,
        ICMSSTPerc: 0.00,
        ValorICMSST: 0.00,
        CSTIPI: '00',
        BaseIPI: 200.00,
        IPIPerc: 5.00,
        ValorIPI: 10.00,
        CSTPIS: '01',
        BasePIS: 200.00,
        PISPerc: 1.65,
        ValorPIS: 3.30,
        CSTCOFINS: '01',
        BaseCOFINS: 200.00,
        COFINSPerc: 7.60,
        ValorCOFINS: 15.20,
        NCM: '12345678',
        CEST: '123456',
        TipoServico: 'Tipo A',
        EAN: '1234567890123',
        VI: 0.00,
        Seguro: 0.00,
        Vlfrete: 0.00,
        OutrasDespesas: 0.00,
      },
      {
        Origem: 'Compras',
        Produto: 'Produto A',
        Descricao: 'Descrição do Produto A',
        UN: 'UN',
        Quantidade: 10.000,
        OdleConvertida: 10.000,
        PrecoUnitario: 20.00,
        Desconto: 0.00,
        PrecoTotal: 200.00,
        CFOP: '5102',
        PedidoControle: '123456',
        OrdemCompra: '654321',
        Parc: 1,
        SitTribICMS: '000',
        BaseICMS: 200.00,
        ICMSPerc: 18.00,
        ValorICMS: 36.00,
        BaseICMSST: 0.00,
        ICMSSTPerc: 0.00,
        ValorICMSST: 0.00,
        CSTIPI: '00',
        BaseIPI: 200.00,
        IPIPerc: 5.00,
        ValorIPI: 10.00,
        CSTPIS: '01',
        BasePIS: 200.00,
        PISPerc: 1.65,
        ValorPIS: 3.30,
        CSTCOFINS: '01',
        BaseCOFINS: 200.00,
        COFINSPerc: 7.60,
        ValorCOFINS: 15.20,
        NCM: '12345678',
        CEST: '123456',
        TipoServico: 'Tipo A',
        EAN: '1234567890123',
        VI: 0.00,
        Seguro: 0.00,
        Vlfrete: 0.00,
        OutrasDespesas: 0.00,
      },
      {
        Origem: 'Fornecedor',
        Produto: 'Produto A',
        Descricao: 'Descrição do Produto A',
        UN: 'UN',
        Quantidade: 10.000,
        OdleConvertida: 10.000,
        PrecoUnitario: 20.00,
        Desconto: 0.00,
        PrecoTotal: 200.00,
        CFOP: '5102',
        PedidoControle: '123456',
        OrdemCompra: '654321',
        Parc: 1,
        SitTribICMS: '000',
        BaseICMS: 200.00,
        ICMSPerc: 18.00,
        ValorICMS: 36.00,
        BaseICMSST: 0.00,
        ICMSSTPerc: 0.00,
        ValorICMSST: 0.00,
        CSTIPI: '00',
        BaseIPI: 200.00,
        IPIPerc: 5.00,
        ValorIPI: 10.00,
        CSTPIS: '01',
        BasePIS: 200.00,
        PISPerc: 1.65,
        ValorPIS: 3.30,
        CSTCOFINS: '01',
        BaseCOFINS: 200.00,
        COFINSPerc: 7.60,
        ValorCOFINS: 15.20,
        NCM: '12345678',
        CEST: '123456',
        TipoServico: 'Tipo A',
        EAN: '1234567890123',
        VI: 0.00,
        Seguro: 0.00,
        Vlfrete: 0.00,
        OutrasDespesas: 0.00,
      },
      {
        Origem: 'Compras',
        Produto: 'Produto A',
        Descricao: 'Descrição do Produto A',
        UN: 'UN',
        Quantidade: 10.000,
        OdleConvertida: 10.000,
        PrecoUnitario: 20.00,
        Desconto: 0.00,
        PrecoTotal: 200.00,
        CFOP: '5102',
        PedidoControle: '123456',
        OrdemCompra: '654321',
        Parc: 1,
        SitTribICMS: '000',
        BaseICMS: 200.00,
        ICMSPerc: 18.00,
        ValorICMS: 36.00,
        BaseICMSST: 0.00,
        ICMSSTPerc: 0.00,
        ValorICMSST: 0.00,
        CSTIPI: '00',
        BaseIPI: 200.00,
        IPIPerc: 5.00,
        ValorIPI: 10.00,
        CSTPIS: '01',
        BasePIS: 200.00,
        PISPerc: 1.65,
        ValorPIS: 3.30,
        CSTCOFINS: '01',
        BaseCOFINS: 200.00,
        COFINSPerc: 7.60,
        ValorCOFINS: 15.20,
        NCM: '12345678',
        CEST: '123456',
        TipoServico: 'Tipo A',
        EAN: '1234567890123',
        VI: 0.00,
        Seguro: 0.00,
        Vlfrete: 0.00,
        OutrasDespesas: 0.00,
      },
      {
        Origem: 'Fornecedor',
        Produto: 'Produto A',
        Descricao: 'Descrição do Produto A',
        UN: 'UN',
        Quantidade: 10.000,
        OdleConvertida: 10.000,
        PrecoUnitario: 20.00,
        Desconto: 0.00,
        PrecoTotal: 200.00,
        CFOP: '5102',
        PedidoControle: '123456',
        OrdemCompra: '654321',
        Parc: 1,
        SitTribICMS: '000',
        BaseICMS: 200.00,
        ICMSPerc: 18.00,
        ValorICMS: 36.00,
        BaseICMSST: 0.00,
        ICMSSTPerc: 0.00,
        ValorICMSST: 0.00,
        CSTIPI: '00',
        BaseIPI: 200.00,
        IPIPerc: 5.00,
        ValorIPI: 10.00,
        CSTPIS: '01',
        BasePIS: 200.00,
        PISPerc: 1.65,
        ValorPIS: 3.30,
        CSTCOFINS: '01',
        BaseCOFINS: 200.00,
        COFINSPerc: 7.60,
        ValorCOFINS: 15.20,
        NCM: '12345678',
        CEST: '123456',
        TipoServico: 'Tipo A',
        EAN: '1234567890123',
        VI: 0.00,
        Seguro: 0.00,
        Vlfrete: 0.00,
        OutrasDespesas: 0.00,
      },
      // Outras linhas
    ],
  };

  const renderBooleanIcon = (value) => (
    value ? <FontAwesomeIcon icon={faCheck} className="icon-check" /> : <FontAwesomeIcon icon={faCheck} className="icon-minus" />
  );

  const openModal = (row) => {
    setSelectedRow(row);
  };

  const closeModal = () => {
    setSelectedRow(null);
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  const handleGoBack = () => {
    navigate(-1);  
  };

  const toggleDropdown = (index) => {
    if (dropdownVisible === index) {
      setDropdownVisible(null);
    } else {
      setDropdownVisible(index);
    }
  };

  return (
    <div className="detalhes-page-container">
      <div className="header-container">
        <h1>{data.title}</h1>
        <button className="back-button" onClick={handleGoBack}>
          <FontAwesomeIcon icon={faArrowLeft} /> Voltar
        </button>
      </div>
      <div className="general-info-container">
        <table className="general-info-table">
          <thead>
            <tr>
              {data.generalInfo.map((info, index) => (
                <th key={index}>{info.name}</th>
              ))}
              <th>Filtrar Documento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {data.generalInfo.map((info, index) => (
                <td key={index}>{info.value}</td>
              ))}
              <td>
                <FontAwesomeIcon icon={faEllipsisH} onClick={() => openModal(data.generalInfo)} className="icon-ellipsish" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="detalhes-table-container">
        <table className="detalhes-table">
          <thead>
            <tr>
              {data.columns.map((col, index) => (
                <th key={index}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, index) => (
              <tr key={index}>
                {data.columns.map((col, colIndex) => (
                  <td key={colIndex}>
                    {typeof row[col.name] === 'boolean' ? renderBooleanIcon(row[col.name]) : row[col.name]}
                    {col.name === 'Acoes' && row.Origem === 'Compras' && (
                      <div className="acoes-dropdown-container">
                        <FontAwesomeIcon icon={faBars} className="acoes-icon" onClick={() => toggleDropdown(index)} />
                        {dropdownVisible === index && (
                          <ul className="acoes-dropdown">
                            <li>Ação 1</li>
                            <li>Ação 2</li>
                            <li>Ação 3</li>
                            <li>Ação 4</li>
                            <li>Ação 5</li>
                          </ul>
                        )}
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedRow && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2 className="chart-title-modal">Detalhes Xml</h2>
            <div className="modal-body">
              <div className="filters">
                <div className="filter">
                  <label>Estabelecimento:</label>
                  <input type="text" />
                </div>
                <div className="filter">
                  <label>Código Fornecedor:</label>
                  <input type="text" />
                </div>
                <div className="filter">
                  <label>Tipo Documento Fiscal:</label>
                  <select>
                    <option value="">Selecione</option>
                    <option value="nfe">NFe</option>
                    <option value="nfs">Nfs</option>
                    <option value="cte">CTe</option>
                  </select>
                </div>
                <div className="filter">
                  <label>Período Inicial:</label>
                  <input type="date" />
                </div>
                <div className="filter">
                  <label>Período Final:</label>
                  <input type="date" />
                </div>
                <div className="filter">
                  <label>Por Departamento:</label>
                  <select>
                    <option value="suprimento">Suprimento</option>
                    <option value="fiscal">Fiscal</option>
                    <option value="producao">Produção</option>
                    <option value="almoxarifado">Almoxarifado</option>
                  </select>
                </div>
                <div className="filter">
                  <label>Por Tipo de Erro:</label>
                  <select>
                    <option value="suprimento">Suprimento</option>
                    <option value="fiscal">Fiscal</option>
                    <option value="producao">Produção</option>
                    <option value="almoxarifado">Almoxarifado</option>
                    <option value="pcp">PCP</option>
                    <option value="qualidade">Qualidade</option>
                  </select>
                </div>
                <div className="filter">
                  <label>Situação Documento Fiscal:</label>
                  <select>
                    <option value="pendente">Pendente</option>
                    <option value="atualizado">Atualizado</option>
                    <option value="cancelado">Cancelado</option>
                  </select>
                </div>
                <div className="filter">
                  <label>Localização Veículo:</label>
                  <input type="text" />
                </div>
                <div className="filter">
                  <label>Período de Tempo Documento Parado:</label>
                  <input type="text" />
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
export default DetalhesXml;
