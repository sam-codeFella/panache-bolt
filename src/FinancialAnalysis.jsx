import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FinancialAnalysis() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await fetch('/');
      const data = await response.text();
      console.log(data); // "Hello World"
      navigate('/insights');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="icon">
        <span>Panache<span className="dot-ai">.ai</span></span>
      </div>
      <div className="container">
        <h1>Financial Analysis</h1>
        <p className="tagline">Turbocharge your research</p>
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>Let's go</button>
      </div>
    </div>
  );
}

export default FinancialAnalysis;
