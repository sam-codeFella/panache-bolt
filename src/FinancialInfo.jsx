import React from 'react';

    function FinancialInfo({ info }) {
      return (
        <div>
          <h2>Financial Information</h2>
          <p>{info.financial}</p>
          <h2>Qualitative Information</h2>
          <p>{info.qualitative}</p>
        </div>
      );
    }

    export default FinancialInfo;
