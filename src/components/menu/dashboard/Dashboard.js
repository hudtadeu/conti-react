import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './styleDashboard.css';

const Dashboard = () => {
  const [selectedChart, setSelectedChart] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleDataPointClick = (event) => {
      const target = event.target;
      const chartContainer = target.closest('.chart-container');

      if (chartContainer) {
        const chartIndex = chartContainer.getAttribute('data-chart-index');
        if (target && target.getAttribute('index')) {
          const dataPointIndex = target.getAttribute('j');
          if (chartIndex === '0') {
            navigate(`/xml-recebidos/${chartIndex}/${dataPointIndex}`);
          } else if (chartIndex === '1') {
            navigate(`/ocorrencias-negocio/${chartIndex}/${dataPointIndex}`);
          } else if (chartIndex === '2') {
            navigate(`/auditoria/${chartIndex}/${dataPointIndex}`);
          } else if (chartIndex === '3') {
            navigate(`/ocorrencias-tipo-doc-fiscais/${chartIndex}/${dataPointIndex}`);
          } else if (chartIndex === '4') {
            navigate(`/ocorrencias-linhas-produtos/${chartIndex}/${dataPointIndex}`);
          } else if (chartIndex === '5') {
            navigate(`/fluxo-doc-fiscais-estabelecimento/${chartIndex}/${dataPointIndex}`);
          } else if (chartIndex === '6') {
            navigate(`/controle-chegada-empresa/${chartIndex}/${dataPointIndex}`);
          } else if (chartIndex === '7') {
            navigate(`/documentos-atualizados-dia/${chartIndex}/${dataPointIndex}`);
          } else if (chartIndex === '8') {
            navigate(`/documentos-nao-corrigidos/${chartIndex}/${dataPointIndex}`);
          } else if (chartIndex === '9') {
            navigate(`/pendencias-comprador/${chartIndex}/${dataPointIndex}`);
          }
        }
      }
    };

    document.addEventListener('click', handleDataPointClick);

    return () => {
      document.removeEventListener('click', handleDataPointClick);
    };
  }, [navigate]);

  const commonOptions = {
    chart: {
      type: 'pie',
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 5,
        left: 5,
        blur: 5,
        opacity: 0.2,
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5,
          formatter: (val, opts) => {
            return opts.w.globals.series[opts.seriesIndex];
          },
          style: {
            colors: ['#FFF'],
          },
        },
        donut: {
          size: '73%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '14px',
              fontWeight: 600,
            },
            value: {
              show: true,
              fontSize: '18px',
              fontWeight: 500,
            },
            total: {
              show: true,
              fontSize: '14px',
              fontWeight: 600,
              label: 'Total',
            },
          },
        },
      },
    },
    labels: [],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
            horizontalAlign: 'center',
          },
        },
      },
    ],
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '10px',
      markers: {
        width: 8,
        height: 8,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 2,
      },
    },
    grid: {
      padding: {
        bottom: 1,
      },
    },
    fill: {
      type: 'solid',
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      formatter: (val, opts) => {
        return opts.w.globals.series[opts.seriesIndex];
      },
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        colors: ['#fff'],
      },
    },
  };

  const data = [
    {
      series: [70, 22, 28, 45],
      options: {
        ...commonOptions,
        labels: ['Até 1 dia', 'Até 3 dias', 'Até 7 dias', 'Acima 7 dias'],
        colors: ['#375a7f', '#00a65a', '#f39c12', '#dd4b39'],
      },
      title: "XML's Recebidos a (x Dias)",
      filters: [
        { label: 'Estabelecimento', type: 'text' },
        { label: 'Tipo de Documento', type: 'select', options: ['NFe', 'CTe', 'NFSe'] },
        { label: 'Fornecedor', type: 'text' },
        { label: 'Dias Pendentes', type: 'number' },
        { label: 'Localização', type: 'select', options: ['Em Trânsito', 'Na empresa', 'Dentro da Fábrica'] },
        { label: 'Linha de Produtos', type: 'select', options: ['Produto 1', 'Produto 2', 'Produto 3'] },
        { label: 'Área de Negócio', type: 'select', options: ['Suprimento', 'Fiscal', 'PCP', 'Qualidade'] },
      ],
    },
    {
      series: [34, 23, 3],
      options: {
        ...commonOptions,
        labels: ['Fiscal', 'Suprimentos', 'PCP'],
        colors: ['#375a7f', '#00a65a', '#f39c12'],
      },
      title: 'Ocorrências por Área de Negócio',
      filters: [
        { label: 'Estabelecimento', type: 'text' },
        { label: 'Área de Negócio', type: 'select', options: ['Suprimento', 'Fiscal', 'PCP', 'Qualidade'] },
        { label: 'Tipo de Documento', type: 'select', options: ['NFe', 'CTe', 'NFSe'] },
        { label: 'Fornecedor', type: 'text' },
        { label: 'Dias Pendentes', type: 'number' },
        { label: 'Localização', type: 'select', options: ['Em Trânsito', 'Na empresa', 'Dentro da Fábrica'] },
        { label: 'Linha de Produtos', type: 'select', options: ['Produto 1', 'Produto 2', 'Produto 3'] },
      ],
    },
    {
      series: [23, 16, 9, 9, 15, 9, 17],
      options: {
        ...commonOptions,
        labels: ['Falta Pedido Compra', 'Aprovação', 'Diferença Valor', 'Diferença Quantidade', 'Conversao Un. Medida', 'Falta Ordem Produção', 'Cadastro ERP Datasul'],
        colors: ['#375a7f', '#00a65a', '#f39c12', '#dd4b39', '#00c0ef', '#f39c12', '#8a8f98'],
      },
      title: 'Auditoria',
      filters: [
        { label: 'Estabelecimento', type: 'text' },
        { label: 'Tipo de Erro', type: 'select', options: ['Erro 1', 'Erro 2', 'Erro 3'] },
        { label: 'Área de Negócio', type: 'select', options: ['Suprimento', 'Fiscal', 'PCP', 'Qualidade'] },
        { label: 'Tipo de Documento', type: 'select', options: ['NFe', 'CTe', 'NFSe'] },
        { label: 'Fornecedor', type: 'text' },
        { label: 'Dias Pendentes', type: 'number' },
        { label: 'Localização', type: 'select', options: ['Em Trânsito', 'Na empresa', 'Dentro da Fábrica'] },
        { label: 'Linha de Produtos', type: 'select', options: ['Produto 1', 'Produto 2', 'Produto 3'] },
      ],
    },
    {
      series: [180, 120, 45],
      options: {
        ...commonOptions,
        labels: ['Nfe', 'CTe', 'NFs'],
        colors: ['#375a7f', '#00a65a', '#f39c12'],
      },
      title: 'Ocorrências por Tipo de Doctos Fiscais',
      filters: [
        { label: 'Estabelecimento', type: 'text' },
        { label: 'Tipo de Documento', type: 'select', options: ['NFe', 'CTe', 'NFSe'] },
        { label: 'Tipo de Erro', type: 'select', options: ['Erro 1', 'Erro 2', 'Erro 3'] },
        { label: 'Área de Negócio', type: 'select', options: ['Suprimento', 'Fiscal', 'PCP', 'Qualidade'] },
        { label: 'Fornecedor', type: 'text' },
        { label: 'Dias Pendentes', type: 'number' },
        { label: 'Localização', type: 'select', options: ['Em Trânsito', 'Na empresa', 'Dentro da Fábrica'] },
        { label: 'Linha de Produtos', type: 'select', options: ['Produto 1', 'Produto 2', 'Produto 3'] },
      ],
    },
    {
      series: [66, 20, 10, 14, 3, 24],
      options: {
        ...commonOptions,
        labels: ['Matéria Prima', 'Uso e Consumo', 'Aplicação Direta', 'Manutenção', 'Facility', 'Embalagens'],
        colors: ['#375a7f', '#00a65a', '#f39c12', '#dd4b39', '#00c0ef', '#8a8f98'],
      },
      title: 'Ocorrências por Linhas de Produtos',
      filters: [
        { label: 'Estabelecimento', type: 'text' },
        { label: 'Linha de Produtos', type: 'select', options: ['Produto 1', 'Produto 2', 'Produto 3'] },
        { label: 'Tipo de Documento', type: 'select', options: ['NFe', 'CTe', 'NFSe'] },
        { label: 'Tipo de Erro', type: 'select', options: ['Erro 1', 'Erro 2', 'Erro 3'] },
        { label: 'Área de Negócio', type: 'select', options: ['Suprimento', 'Fiscal', 'PCP', 'Qualidade'] },
        { label: 'Fornecedor', type: 'text' },
        { label: 'Dias Pendentes', type: 'number' },
        { label: 'Localização', type: 'select', options: ['Em Trânsito', 'Na empresa', 'Dentro da Fábrica'] },
      ],
    },
    {
      series: [80, 35, 60],
      options: {
        ...commonOptions,
        labels: ['Contagem', 'Betim', 'Curitiba'],
        colors: ['#375a7f', '#00a65a', '#f39c12'],
      },
      title: 'Fluxo Doc. Fiscais por Estabelecimento',
      filters: [
        { label: 'Estabelecimento', type: 'text' },
        { label: 'Linha de Produtos', type: 'select', options: ['Produto 1', 'Produto 2', 'Produto 3'] },
        { label: 'Tipo de Documento', type: 'select', options: ['NFe', 'CTe', 'NFSe'] },
        { label: 'Tipo de Erro', type: 'select', options: ['Erro 1', 'Erro 2', 'Erro 3'] },
        { label: 'Área de Negócio', type: 'select', options: ['Suprimento', 'Fiscal', 'PCP', 'Qualidade'] },
        { label: 'Fornecedor', type: 'text' },
        { label: 'Dias Pendentes', type: 'number' },
        { label: 'Localização', type: 'select', options: ['Em Trânsito', 'Na empresa', 'Dentro da Fábrica'] },
      ],
    },
    {
      series: [80, 12, 20],
      options: {
        ...commonOptions,
        labels: ['Em Trânsito', 'Na Empresa', 'Dentro da Fábrica'],
        colors: ['#375a7f', '#00a65a', '#f39c12'],
      },
      title: 'Controle Chegada na Empresa',
      filters: [
        { label: 'Estabelecimento', type: 'text' },
        { label: 'Localização', type: 'select', options: ['Em Trânsito', 'Na empresa', 'Dentro da Fábrica'] },
        { label: 'Linha de Produtos', type: 'select', options: ['Produto 1', 'Produto 2', 'Produto 3'] },
        { label: 'Tipo de Documento', type: 'select', options: ['NFe', 'CTe', 'NFSe'] },
        { label: 'Tipo de Erro', type: 'select', options: ['Erro 1', 'Erro 2', 'Erro 3'] },
        { label: 'Área de Negócio', type: 'select', options: ['Suprimento', 'Fiscal', 'PCP', 'Qualidade'] },
        { label: 'Fornecedor', type: 'text' },
        { label: 'Dias Pendentes', type: 'number' },
      ],
    },
    {
      series: [80, 12, 20],
      options: {
        ...commonOptions,
        labels: ['Nfe', 'CTe', 'NFSe'],
        colors: ['#375a7f', '#00a65a', '#f39c12'],
      },
      title: 'Documentos Atualizados no Dia',
      filters: [
        { label: 'Estabelecimento', type: 'text' },
        { label: 'Localização', type: 'select', options: ['Em Trânsito', 'Na empresa', 'Dentro da Fábrica'] },
        { label: 'Linha de Produtos', type: 'select', options: ['Produto 1', 'Produto 2', 'Produto 3'] },
        { label: 'Tipo de Documento', type: 'select', options: ['NFe', 'CTe', 'NFSe'] },
        { label: 'Tipo de Erro', type: 'select', options: ['Erro 1', 'Erro 2', 'Erro 3'] },
        { label: 'Área de Negócio', type: 'select', options: ['Suprimento', 'Fiscal', 'PCP', 'Qualidade'] },
        { label: 'Fornecedor', type: 'text' },
        { label: 'Dias Pendentes', type: 'number' },
      ],
    },
    {
      series: [45, 20],
      options: {
        ...commonOptions,
        labels: ['Atualizados', 'Não Corrigidos'],
        colors: ['#375a7f', '#dd4b39'],
      },
      title: 'Documentos Atualizados e Não Corrigidos',
      filters: [
        { label: 'Estabelecimento', type: 'text' },
        { label: 'Tipo de Documento', type: 'select', options: ['NFe', 'CTe', 'NFSe'] },
        { label: 'Fornecedor', type: 'text' },
        { label: 'Dias Pendentes', type: 'number' },
        { label: 'Área de Negócio', type: 'select', options: ['Suprimento', 'Fiscal', 'PCP', 'Qualidade'] },
      ],
    },
    {
      series: [30, 70],
      options: {
        ...commonOptions,
        labels: ['Pendentes', 'Resolvidos'],
        colors: ['#f39c12', '#00a65a'],
      },
      title: 'Pendências do Comprador',
      filters: [
        { label: 'Estabelecimento', type: 'text' },
        { label: 'Comprador', type: 'text' },
        { label: 'Tipo de Documento', type: 'select', options: ['NFe', 'CTe', 'NFSe'] },
        { label: 'Fornecedor', type: 'text' },
        { label: 'Dias Pendentes', type: 'number' },
        { label: 'Área de Negócio', type: 'select', options: ['Suprimento', 'Fiscal', 'PCP', 'Qualidade'] },
      ],
    },
  ];

  const handleChartClick = (chartData) => {
    setSelectedChart(chartData);
  };

  const closeModal = () => {
    setSelectedChart(null);
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  return (
    <div id="dashboard">
      {data.map((chartData, index) => (
        <div key={index} className="chart-container" data-chart-index={index}>
          <div className="chart-header">
            <h2 className="chart-title">{chartData.title}</h2>
            <div className="chart-menu" onClick={() => handleChartClick({ ...chartData, index })}>
              <FontAwesomeIcon icon={faEllipsisH} className="chart-menu-icon" title="Filtrar Gráfico" />
            </div>
          </div>
          <div className="chart-wrapper">
            <Chart options={chartData.options} series={chartData.series} type="donut" height="320" />
          </div>
        </div>
      ))}
      {selectedChart && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2 className="chart-title-modal">{selectedChart.title}</h2>
            <div className="modal-body">
              <div className="filters">
                {selectedChart.filters.map((filter, index) => (
                  <div className="filter" key={index}>
                    <label>{filter.label}:</label>
                    {filter.type === 'text' && <input type="text" />}
                    {filter.type === 'number' && <input type="number" />}
                    {filter.type === 'select' && (
                      <select>
                        <option value="">Selecione</option>
                        {filter.options.map((option, idx) => (
                          <option key={idx} value={option.toLowerCase()}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                ))}
              </div>
              <button className="button-save">Salvar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
