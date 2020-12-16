import React, { useState } from 'react';
import MortgageInput from "./MortgageInput";
import MortgageResult from "./MortgageResult";
import BuyInput from "./BuyInput";
import RentInput from "./RentInput";

function RentvsBuyCalc() {

  //variables to calculate mortgage
  const [downNum, setDownNum] = useState();
  const [mp, setMp] = useState();

  //monthly payment not formatted
  const [monthlyRaw, setMonthlyRaw] = useState();

  //total monthly payment for buying a house
  const [buyTotal, setBuyTotal] = useState();

  //variables used to show or hide results
  const [hidden, setHidden] = useState(true);
  const [buyHidden, setBuyHidden] = useState(true);
  const [rentHidden, setRentHidden] = useState(true);

  //formats numbers with commas
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //formats numbers to two decimals
  function twoDecimal(x) {
    return Number.parseFloat(x).toFixed(2);
  }

  //calculates the mortgage monthly payment
  function Calculate(ir, price, down, term) {
    let monthlyIR = ir/1200;
    let borrowed = price - (down/100 * price);

    let top = borrowed * monthlyIR * ((1 + monthlyIR) ** (term * 12));
    let bottom = ((1 + monthlyIR) ** (term * 12)) - 1;

    let monthly = numberWithCommas(twoDecimal(top/bottom));
    setMonthlyRaw(top/bottom);
    setMp(monthly);

    setDownNum(numberWithCommas(down/100 * price));
    setHidden(false);
  }

  //adds mortgage with other inputs
  function BuyTotal(mort, tax, insurance, maint, util, hoa) {

    let mortgage = monthlyRaw;
    let monthlyTax = tax/12;
    let monthlyInsurance = insurance/12;
    let monthlyMaint = maint/12;
    let monthlyUtil = parseInt(util);
    let monthlyHoa = parseInt(hoa);

    setBuyTotal(twoDecimal(mortgage + monthlyTax + monthlyInsurance + monthlyMaint + monthlyUtil + monthlyHoa));
    setBuyHidden(false);
  }

  //adds rent inputs 
  const [totalRent, setTotalRent] = useState();
  function RentTotal(rent, pet, trash, util, amen, insur, park, misc) {
    setTotalRent(parseInt(rent) + parseInt(pet) + parseInt(trash) + parseInt(util) + parseInt(amen) + parseInt(insur) + parseInt(park) + parseInt(misc));
    setRentHidden(false);
    console.log(mp);
    console.log(totalRent);
  }

  return(
    <div className="rvb">
      <MortgageInput
        Calculate={Calculate}
      />

      <MortgageResult 
        hidden={hidden}
        downNum={downNum}
        mp={mp}
      />

      <BuyInput 
      mortgage={mp}
      BuyTotal={BuyTotal}
      />

      <p style={{display: (buyHidden) ? "none" : "block"}}>The total monthly cost to own the house is <strong>${buyTotal}</strong>.</p>
      <hr></hr>

      <RentInput 
        calculate={RentTotal}
      />
      <p style={{display: (rentHidden) ? "none" : "block"}}>The total monthly cost to rent is <strong>${totalRent}</strong>.</p>
      <p style={{display: (rentHidden) ? "none" : "block"}}>{(buyTotal > totalRent) ? "It costs less per month to rent." : "It costs less per month to own."}</p>
    </div>
  )
}

export default RentvsBuyCalc;