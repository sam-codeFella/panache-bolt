import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import './styles.css';
    import FinancialAnalysis from './FinancialAnalysis';
    import CompanyInsights from './CompanyInsights';

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<FinancialAnalysis />} />
            <Route path="/insights" element={<CompanyInsights />} />
          </Routes>
        </Router>
      </React.StrictMode>
    );
