import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import './styleDashboard.css';

const Dashboard = () => {
  const [selectedChart, setSelectedChart] = useState(null);

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
        },
        donut: {
          size: '60%',
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
          width: 200
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'left',
        },
      }
    }],
    legend: {
      show: false,
    },
    grid: {
      padding: {
        bottom: 1
      }
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
        labels: ['Falta Pedido Compra', 'Aprovação', 'Diferença Valor', 'Diferença Quantidade', 'Conversao Unidade Medida', 'Falta Ordem Produção', 'Cadastro ERP Datasul'],
        colors: ['#375a7f', '#00a65a', '#f39c12', '#dd4b39', '#00c0ef', '#f39c12', '#d2d6de'],
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
        colors: ['#375a7f', '#00a65a', '#f39c12', '#dd4b39', '#00c0ef', '#d2d6de'],
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
        <div key={index} className="chart-container" onClick={() => handleChartClick(chartData)}>
          <h2 className="chart-title">{chartData.title}</h2>
          <div className="chart-wrapper">
            <Chart options={chartData.options} series={chartData.series} type="donut" height="290" />
          </div>
        </div>
      ))}
      {selectedChart && (
        <div className="modal">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>X</button>
            <h2 className="chart-title-modal">{selectedChart.title}</h2>
            <div className="modal-body">
              <div className="chart-wrapper-modal">
                <Chart 
                  options={{
                    ...selectedChart.options,
                    legend: { 
                      show: true,
                      position: 'bottom',
                      horizontalAlign: 'right',
                      fontSize: '12px',
                    },
                  }} 
                  series={selectedChart.series} 
                  type="donut" 
                  height="600" 
                  width="440"
                />
              </div>
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
                    <option value="cte">Cte</option>
                    <option value="nfe">Nfe</option>
                    <option value="nfse">NFSe</option>
                    <option value="nfe3">NFe3</option>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;