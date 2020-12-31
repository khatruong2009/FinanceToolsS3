import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Input, Menu } from '@material-ui/core';

const useStyles = makeStyles({
  calcButton: {
    margin: "15px",
  },

  input: {
    margin: "0px 15px 15px 15px",
  },

  topLabel: {
    marginTop: "4vh"
  },

  select: {
    margin: "0px 15px 15px 15px",
  }
});

function InvestmentCalc () {

  const classes = useStyles();

  // Variables Needed:
  // future value
  // present value
  // interest rate
  // contribution frequency
  // contribution amount

  const [fv, setFv] = useState();
  const [principal, setPrincipal] = useState();
  const [ir, setIr] = useState();
  const [frequency, setFrequency] = useState();
  const [contr, setContr] = useState();  
  const [years, setYears] = useState();

  const [hidden, setHidden] = useState(true);

    //formatting functions
    function twoDecimal(x) {
      return Number.parseFloat(x).toFixed(2);
    }
  
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

  function changeFv(e) {
    setFv(parseInt(e.target.value));
  }

  function changePrincipal(e) {
    setPrincipal(parseInt(e.target.value));
  }

  function changeIr(e) {
    setIr(parseFloat(e.target.value));
  }

  function changeFrequency(e) {
    setFrequency(parseInt(e.target.value));
  }

  function changeContr(e) {
    setContr(parseInt(e.target.value));
  }

  function changeYears(e) {
    setYears(parseInt(e.target.value));
  }

  function handleClick() {

    var rate = ir/100;
    var multiplier = years * frequency;
    var pvMultiplier = (1 + (rate/frequency))
    var result1 = (principal) * Math.pow(pvMultiplier, multiplier);

    var result2 = (contr) * ((Math.pow(pvMultiplier, multiplier) - 1) / (rate/frequency)); 

    var final = result1 + result2;

    setFv(final);

    console.log(result1, result2, result1 + result2);
    setHidden(false);
  }


  return (
    <div style={{textAlign: "center"}}>
      <h1>Investment Calculator</h1>

      <InputLabel className={classes.topLabel}>Starting Amount:</InputLabel>
      <TextField
        type="number"
        value={principal}
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.input}
        onChange={changePrincipal}
      />

      <InputLabel>Rate of Return:</InputLabel>
        <TextField
          type="number"
          value={ir}
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.input}
          onChange={changeIr}
        />

      <InputLabel>Contribution Amount:</InputLabel>
        <TextField
          type="number"
          value={contr}
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.input}
          onChange={changeContr}
        />

      <InputLabel>Contribution Frequency:</InputLabel>
        <Select value={frequency} className={classes.select} onChange={changeFrequency}>
          <MenuItem value="12">Monthly</MenuItem>
          <MenuItem value="1">Annually</MenuItem>
        </Select>

        <InputLabel>Years Invested:</InputLabel>
        <TextField
          type="number"
          value={years}
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.input}
          onChange={changeYears}
        />

        <div>
          <Button variant="contained" color="Primary" className={classes.calcButton} onClick={handleClick}>Calculate</Button>
        </div>

        <div style={{display: (hidden) ? "none" : "block" }}>
          <p>The value of your investment after {years} years is ${numberWithCommas(twoDecimal(fv))}.</p>
        </div>

    </div>
  )
}

export default InvestmentCalc;