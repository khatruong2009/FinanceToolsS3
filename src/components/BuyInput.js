import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
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

function BuyInput(props) {

  const classes = useStyles();

  //variables to capture inputs and calculations
  const mortgage = props.mortgage;
  const [propTax, setPropTax] = useState();
  const [insurance, setInsurance] = useState();
  const [maint, setMaint] = useState();
  const [util, setUtil] = useState();
  const [hoa, setHoa] = useState();

  //functinos to handle changes and set state
  function changeTax(e) {
    setPropTax(e.target.value)
  }

  function changeInsurance(e) {
    setInsurance(e.target.value)
  }
  
  function changeMaint(e) {
    setMaint(e.target.value)
  }

  function changeUtil(e) {
    setUtil(e.target.value)
  }

  function changeHoa(e) {
    setHoa(e.target.value)
  }

  function calculate() {
    props.BuyTotal(mortgage, propTax, insurance, maint, util, hoa);
  } 

  return (
    <div>
      <p>Mortgage: <strong>${mortgage}</strong></p>

      <InputLabel>Annual Property Taxes (Between 1-2% of property value depending on location)</InputLabel>
      <TextField 
        value={propTax}
        type="number"
        onChange={changeTax}
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.input}
      />

      <InputLabel>Annual Home Owner's Insurance:</InputLabel>
      <TextField 
        value={insurance}
        type="number"
        onChange={changeInsurance}
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.input}
      />

      <InputLabel>Annual Maintenance / Repairs (1% per year is a general rule of thumb for this cost):</InputLabel>
      <TextField 
        value={maint}
        type="number"
        onChange={changeMaint}
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.input}
      />

      <InputLabel>Monthly Utilities:</InputLabel>
      <TextField 
        value={util}
        type="number"
        onChange={changeUtil}
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.input}
      />

      <InputLabel>Monthly HOA Fees (If applicable):</InputLabel>
      <TextField 
        value={hoa}
        type="number"
        onChange={changeHoa}
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.input}
      />

      <br></br>
      <Button className={classes.calcButton} variant="contained" color="primary" onClick={calculate}>Calculate</Button>
    </div>
  )
}

export default BuyInput;