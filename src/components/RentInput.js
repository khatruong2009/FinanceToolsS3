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

function RentInput(props) {

  const classes = useStyles();

  //variables for inputs and calculations
  const [rent, setRent] = useState();
  const [pet, setPet] = useState();
  const [trash, setTrash] = useState();
  const [util, setUtil] = useState();
  const [amen, setAmen] = useState();
  const [insur, setInsur] = useState();
  const [park, setPark] = useState();
  const [misc, setMisc] = useState();

  //functions for handling inputs and setting state
  function changeRent(e) {
    setRent(e.target.value)
  }

  function changePet(e) {
    setPet(e.target.value)
  }

  function changeTrash(e) {
    setTrash(e.target.value)
  }

  function changeUtil(e) {
    setUtil(e.target.value)
  }

  function changeAmen(e) {
    setAmen(e.target.value)
  }

  function changeInsur(e) {
    setInsur(e.target.value)
  }

  function changePark(e) {
    setPark(e.target.value)
  }

  function changeMisc(e) {
    setMisc(e.target.value)
  }

  function handleClick() {
    props.calculate(rent, pet, trash, util, amen, insur, park, misc)
  }

  return (
    <div>
      <h2>Renting a House</h2>

      <InputLabel>Rent:</InputLabel>
      <TextField
        type="number"
        value={rent}
        onChange={changeRent}
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.input}
      />

      <InputLabel>Pet Fee/Rent:</InputLabel>
      <TextField
        type="number"
        value={pet}
        onChange={changePet}
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.input}
      />

      <InputLabel>Trash Fee:</InputLabel>
      <TextField
        type="number"
        value={trash}
        onChange={changeTrash}
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.input}
      />

      <InputLabel>Utilities:</InputLabel>
      <TextField
        type="number"
        value={util}
        onChange={changeUtil}
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.input}
      />

      <InputLabel>Amenities Fee:</InputLabel>
      <TextField
        type="number"
        value={amen}
        onChange={changeAmen}
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.input}
      />

      <InputLabel>Renter's Insurance:</InputLabel>
      <TextField
        type="number"
        value={insur}
        onChange={changeInsur}
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.input}
      />

      <InputLabel>Parking Fee:</InputLabel>
      <TextField
        type="number"
        value={park}
        onChange={changePark}
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.input}
      />

      <InputLabel>Miscellaneous Fees:</InputLabel>
      <TextField
        type="number"
        value={misc}
        onChange={changeMisc}
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.input}
      />

      <br></br>
      <Button variant="contained" color="primary" className={classes.calcButton} onClick={handleClick}>Calculate</Button>
    </div>
  )
}

export default RentInput;