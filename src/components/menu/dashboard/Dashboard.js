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
            return opts.w.globals.series[opts.seriesIndex]
          },
          style: {
            colors: ['#FFF']
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
    responsive: [{
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
    }],
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
      title: "XML's Recebidos a (x Dias)"
    },
    {
      series: [34, 23, 3],
      options: {
        ...commonOptions,
        labels: ['Fiscal', 'Suprimentos', 'PCP'],
        colors: ['#375a7f', '#00a65a', '#f39c12'],
      },
      title: "Ocorrências por Área de Negócio"
    },
    {
      series: [23, 16, 9, 9, 15, 9, 17],
      options: {
        ...commonOptions,
        labels: ['Falta Pedido Compra', 'Aprovação', 'Diferença Valor', 'Diferença Quantidade', 'Conversao Un. Medida', 'Falta Ordem Produção', 'Cadastro ERP Datasul'],
        colors: ['#375a7f', '#00a65a', '#f39c12', '#dd4b39', '#00c0ef', '#f39c12', '#8a8f98'],
      },
      title: "Auditoria"
    },
    {
      series: [180, 120, 45],
      options: {
        ...commonOptions,
        labels: ['Nfe', 'CTe', 'NFs'],
        colors: ['#375a7f', '#00a65a', '#f39c12'],
      },
      title: "Ocorrências por Tipo de Doctos Fiscais"
    },
    {
      series: [66, 20, 10, 14, 3, 24],
      options: {
        ...commonOptions,
        labels: ['Matéria Prima', 'Uso e Consumo', 'Aplicação Direta', 'Manutenção', 'Facility', 'Embalagens'],
        colors: ['#375a7f', '#00a65a', '#f39c12', '#dd4b39', '#00c0ef', '#8a8f98'],
      },
      title: "Ocorrências por Linhas de Produtos"
    },
    {
      series: [80, 35, 60],
      options: {
        ...commonOptions,
        labels: ['Contagem', 'Betim', 'Curitiba'],
        colors: ['#375a7f', '#00a65a', '#f39c12'],
      },
      title: "Fluxo Doc. Fiscais por Estabelecimento"
    },
    {
      series: [80, 12, 20],
      options: {
        ...commonOptions,
        labels: ['Em Trânsito', 'Na Empresa', 'Dentro da Fábrica'],
        colors: ['#375a7f', '#00a65a', '#f39c12'],
      },
      title: "Controle Chegada na Empresa"
    },
    {
      series: [80, 12, 20],
      options: {
        ...commonOptions,
        labels: ['Nfe', 'CTe', 'NFSe'],
        colors: ['#375a7f', '#00a65a', '#f39c12'],
      },
      title: "Documentos Atualizados no Dia"
    },
  ];

  const handleChartClick = (chartData) => {
    setSelectedChart(chartData);
  };

  const closeModal = () => {
    setSelectedChart(null);
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
            <Chart options={chartData.options} series={chartData.series} type="donut" height="290" />
          </div>
        </div>
      ))}
       {selectedChart && (
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
                    <label>Período de Tempo Docto Parado:</label>
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

export default Dashboard;
