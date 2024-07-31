import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Dashboard from './components/menu/dashboard/Dashboard';
import XmlRecebidos from './components/menu/cadastros/XmlRecebidos';
import OcorrenciasNegocio from './components/menu/cadastros/OcorrenciasNegocio';
import Auditoria from './components/menu/cadastros/Auditoria';
import OcorrenciasTipoDocFiscais from './components/menu/cadastros/OcorrenciasTipoDocFiscais';
import OcorrenciasLinhasProdutos from './components/menu/cadastros/OcorrenciasLinhasProdutos';
import FluxoDocFiscaisEstabelecimento from './components/menu/cadastros/FluxoDocFiscaisEstabelecimento';
import ControleChegadaEmpresa from './components/menu/cadastros/ControleChegadaEmpresa';
import DocumentosAtualizadosDia from './components/menu/cadastros/DocumentosAtualizadosDia';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/xml-recebidos/:chartType/:dataPointIndex" element={<XmlRecebidos />} />
            <Route path="/ocorrencias-negocio/:chartType/:dataPointIndex" element={<OcorrenciasNegocio />} />
            <Route path="/auditoria/:chartType/:dataPointIndex" element={<Auditoria />} />
            <Route path="/ocorrencias-tipo-doc-fiscais/:chartType/:dataPointIndex" element={<OcorrenciasTipoDocFiscais />} />
            <Route path="/ocorrencias-linhas-produtos/:chartType/:dataPointIndex" element={<OcorrenciasLinhasProdutos />} />
            <Route path="/fluxo-doc-fiscais-estabelecimento/:chartType/:dataPointIndex" element={<FluxoDocFiscaisEstabelecimento />} />
            <Route path="/controle-chegada-empresa/:chartType/:dataPointIndex" element={<ControleChegadaEmpresa />} />
            <Route path="/documentos-atualizados-dia/:chartType/:dataPointIndex" element={<DocumentosAtualizadosDia />} />
            {/* Adicione mais rotas conforme necessário */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
