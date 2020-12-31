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
    console.log(ir, principal, frequency, contr, years);
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

        <div>
          <p></p>
        </div>

    </div>
  )
}

export default InvestmentCalc;