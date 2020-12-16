import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

//styles for material UI components
const useStyles = makeStyles({
  calcButton: {
    margin: "15px",
  },
});

function TipInput (props) {

  const classes = useStyles();

  //variables needed for the calculation
  const [inputBill, setInputBill] = useState();
  const [inputService, setInputService] = useState("Great");
  const [inputPeople, setInputPeople] = useState();

  //functions to handles changes in the inputs
  function changeBill(event) {
    setInputBill(event.target.value)
  } 

  function changeService(event) {
    setInputService(event.target.value)
  }

  function changePeople(event) {
    setInputPeople(event.target.value)
  }

  //calculates the totals using function passed down from props
  function handleClick() {
    props.calculate(Number(inputBill), inputService, Number(inputPeople));
  }

  return (
    <div>
      <div className="calculator-header">
        <h1>Tip Calculator</h1>
      </div>

      <div className="input">
      <div className="bill-amount">
        <TextField
          type="number"
          label="$ Total Bill Amount"
          value={inputBill}
          onChange={changeBill}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div className="service">
        <InputLabel>How was your service?</InputLabel>
        <Select
          className="select"
          value={inputService}
          onChange={changeService}
        >
          <MenuItem value="Great">Great</MenuItem>
          <MenuItem value="Good">Good</MenuItem>
          <MenuItem value="Okay">Okay</MenuItem>
          <MenuItem value="Poor">Poor</MenuItem>
        </Select>

      </div>

      <div className="people">
        <TextField
          type="number"
          label="People in Group"
          value={inputPeople}
          onChange={changePeople}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

        <Button className={classes.calcButton} onClick={handleClick} variant="contained" color="primary">
        Calculate
      </Button>
      </div>
    </div>
  )
}

export default TipInput;