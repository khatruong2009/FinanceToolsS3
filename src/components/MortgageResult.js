import React from 'react';

function MortgageResult(props) {

  return (
    <div>
      <div style={{display: (props.hidden) ? "none" : "block"}}>
        <p>The down payment is ${props.downNum}.</p>
        <p>Your monthly mortgage payment is <strong>${props.mp}</strong>.</p>
      </div>
    </div>
  )
}

export default MortgageResult;