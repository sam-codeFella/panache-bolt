import React, { useState } from 'react';
    import FinancialInfo from './FinancialInfo';

    function App() {
      const [query, setQuery] = useState('');
      const [info, setInfo] = useState(null);

      const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate fetching data
        setInfo({
          financial: 'Financial data for ' + query,
          qualitative: 'Qualitative data for ' + query,
        });
      };

      return (
        <div>
          <h1>Financial Analysis</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What's on your mind"
              required
            />
            <button type="submit">Get Info</button>
          </form>
          <p>Research made faster</p>
          {info && <FinancialInfo info={info} />}
        </div>
      );
    }

    export default App;
