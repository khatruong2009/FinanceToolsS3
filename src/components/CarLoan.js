import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Input, Menu } from '@material-ui/core';

//styles for material ui components
const useStyles = makeStyles({
  calcButton: {
    margin: "15px",
  },

  input: {
    margin: "0px 15px 15px 15px",
  },

  topLabel: {
    marginTop: "4vh"
  }
});

function CarLoan() {

  const classes = useStyles();

  //variables to hold inputs for calculations
  const [loan, setLoan] = useState();
  const [ir, setIr] = useState();
  const [term, setTerm] = useState();

  const [mp, setMp] = useState();

  const [hidden, setHidden] = useState(true);

  //formatting functions
  function twoDecimal(x) {
    return Number.parseFloat(x).toFixed(2);
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //functions to handle inputs
  function changeLoan(e) {
    setLoan(parseInt(e.target.value));
  }

  function changeIr(e) {
    setIr(parseFloat(e.target.value));
  }

  function changeTerm(e) {
    setTerm(parseInt(e.target.value));
  }

  //function to handle calculation
  function handleClick() {
    let top = ir/1200;
    let bottom = (1 - (Math.pow((1 + top), (term * -1))));

    let monthly = (loan * (top/bottom));
    setMp(monthly);
    setHidden(false);
  }

  return (
    <div style={{textAlign: "center"}}>
      <h1>Car Loan Calculator</h1>

      <InputLabel className={classes.topLabel}>Loan Amount:</InputLabel>
      <TextField
        type="number"
        value={loan}
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.input}
        onChange={changeLoan}
      />

      <InputLabel>Interest Rate:</InputLabel>
        <TextField
          type="number"
          value={ir}
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.input}
          onChange={changeIr}
        />

      <InputLabel>Loan Term (months):</InputLabel>
        <Select value={term} className={classes.select} onChange={changeTerm}>
          <MenuItem value="36">36</MenuItem>
          <MenuItem value="48">48</MenuItem>
          <MenuItem value="60">60</MenuItem>
          <MenuItem value="72">72</MenuItem>
          <MenuItem value="84">84</MenuItem>
        </Select>

          <div>
            <Button variant="contained" color="Primary" className={classes.calcButton} onClick={handleClick}>Calculate</Button>
          </div>
        
        <div style={{display : (hidden) ? "none" : "block"}}>
          <p>Monthly Payment: <strong>${numberWithCommas(twoDecimal(mp))}</strong></p>
        </div>

    </div>
  )
}

export default CarLoan;