import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

//styles for material ui components
const useStyles = makeStyles({
  calcButton: {
    margin: "15px",
  },

  input: {
    margin: "0px 15px 15px 15px",
  },
});

function MortgageInput(props) {

  const classes = useStyles();

  //variables for inputs and calculations
  const [price, setPrice] = useState();
  const [down, setDown] = useState();
  const [ir, setIr] = useState();
  const [term, setTerm] = useState(30);

  //functions for handling inputs and setting state
  function changeDown(e) {
    setDown(parseInt(e.target.value));
  }

  function changeIr(e) {
    setIr(parseFloat(e.target.value));
  }

  function changeTerm(e) {
    setTerm(parseInt(e.target.value));
  }

  function changePrice(e) {
    setPrice(parseInt(e.target.value));
  }

  function handleClick() {
    props.Calculate(ir, price, down, term)
  }
  
  return (
    <div className="mort-input">
      <h1>Rent vs Buy Calculator</h1>
      <hr></hr>
      <h2>Buying a House</h2>
      <h4 style={{marginTop: "2vh"}}>Mortgage</h4>

      <div>
        <InputLabel>Price of the Property:</InputLabel>
        <TextField
          type="number"
          value={price}
          onChange={changePrice}
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.input}
        />
      </div>
      
      <div>
        <InputLabel>Percent Down Payment:</InputLabel>
        <TextField 
          type="number"
          value={down}
          onChange={changeDown}
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.input}
        />
      </div>
      
      <div>
        <InputLabel>Interest rate of the loan:</InputLabel>
        <TextField 
          type="number"
          value={ir}
          onChange={changeIr}
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.input}
        />
      </div>
      
      <InputLabel>Loan Term (years):</InputLabel>
      <Select 
        className="select"
        value={term}
        onChange={changeTerm}
      >
        <MenuItem value="30">30</MenuItem>
        <MenuItem value="15">15</MenuItem>
      </Select>

      <br></br>
      <Button className={classes.calcButton} variant="contained" color="Primary" onClick={handleClick}>Calculate</Button>
    </div>
  )
}

export default MortgageInput;