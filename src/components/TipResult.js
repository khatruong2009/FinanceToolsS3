import React from 'react';  

function TipResult(props) {
  return (
    <div className="result" style={{display: (props.hidden) ? "none" : null}}>
        <p>The total tip for the bill is ${props.totalTip}.</p>
        <p>The total bill (including tip) for the group is ${props.totalBill}.</p>
        <p>The share of the bill for each person is ${props.totalShare}.</p>
     </div>
  )
}

export default TipResult;