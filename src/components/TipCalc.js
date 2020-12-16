import React, {useState} from "react";
import TipInput from "./TipInput";
import TipResult from "./TipResult";

function TipCalc() {

  const [totalBill, setTotalBill] = useState();
  const [totalTip, setTotalTip] = useState();
  const [totalShare, setTotalShare] = useState();

  const [hidden, setHidden] = useState(true);

  var fullBill, tip, share, tipPercentage;

  //changing the tip percentage based on the input for the customer service
  function Calculate(bill, service, people) {
    if (service === "Great") {
      tipPercentage = .20;
    } else if (service === "Good") {
      tipPercentage = .18;
    } else if (service === "Okay") {
      tipPercentage = .165;
    } else tipPercentage = .15;

    //calculating the amounts of the tip, bill, and amount to pay per person
    tip = (tipPercentage * bill);
    fullBill = (bill + tip);
    share = (fullBill / people);

    //rounding the numbers to two decimal places
    setTotalTip(tip.toFixed(2));
    setTotalBill(fullBill.toFixed(2));
    setTotalShare(share.toFixed(2));

    //displaying the results after the calculate button is clicked
    setHidden(false);
  }
  
  return (
    <div className="tip-calc">
      <TipInput 
        calculate={Calculate}
      />

      <TipResult
        totalTip={totalTip}
        totalBill={totalBill}
        totalShare={totalShare}
        hidden={hidden}
      />
    </div>
  )
}

export default TipCalc;