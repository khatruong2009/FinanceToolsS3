import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
require('dotenv').config();

const API_KEY = process.env.REACT_APP_FINANCE_API_KEY;

const useStyles = makeStyles({
  calcButton: {
    margin: "15px",
  },

  input: {
    margin: "0px 15px 15px 15px",
  },
});

function Home() {

  const classes = useStyles();

  //puts commas for numbers that are 4 digits or more
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //rounds number to two decimal places
  function twoDecimal(x) {
    return Number.parseFloat(x).toFixed(2);
  }

  const [quote, setQuote] = useState();
  const [diff, setDiff] = useState();
  const [DC, setDC] = useState();
  const [MD, setMD] = useState();
  const [VA, setVA] = useState();
  const [total, setTotal] = useState(0);
  const [headline, setHeadline] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [artNum, setArtNum] = useState(0);

  // Finance API
  const finnhub = require('finnhub');
  
  const api_key = finnhub.ApiClient.instance.authentications['api_key'];
  api_key.apiKey = `${API_KEY}` 
  const finnhubClient = new finnhub.DefaultApi();

  // SP500 index api
  finnhubClient.quote("SPY", (error, data, response) => { 
    //setting current prices to states so that they can be displayed
    let spy = numberWithCommas(data.c);
    let newSpy = twoDecimal(spy);
    setQuote(newSpy);

    //setting previous close prices to states so that they can be displayed
    let prevSpy = numberWithCommas(data.pc);
    let newPrev = twoDecimal(prevSpy);

    //calculating the price change from the previous day
    let change = newSpy - newPrev;
    setDiff(twoDecimal(change/newPrev * 100));
    });

  // covid 19 cases api
  finnhubClient.covid19((error, data, response) => {
    setDC(data[32].case);
    setMD(data[17].case);
    setVA(data[21].case);
    setTotal(numberWithCommas(DC + MD + VA));
  });

  // General news
  finnhubClient.generalNews("general", {}, (error, data, response) => {
    setImage(data[artNum].image);
    setHeadline(data[artNum].headline);
    setBody(data[artNum].summary);
    setUrl(data[artNum].url);
    console.log(data);
  });

  function handleClick() {
    setArtNum(artNum + 1);
  }

  return(
    <div className="home">
      <div className="hero">
        <h1>Home</h1>
        <h3>Daily Financial Updates:</h3>
        <p>The S&P 500 Index is currently at ${quote}, <span style={{color: (diff >= 0? "green" : "red")}}>{diff}%</span> {diff >= 0? "higher" : "lower"} than the previous close.</p>
        <p>The total amount of Covid 19 cases in the DMV area is {total}.</p>
        <hr></hr>
      </div>
      

      <div className="news">
        <h2>Financial News</h2>
        <img className="headline-img" src={image}></img>
        <h3>{headline}</h3>
        <p>{body}</p>
        <p><a href={url} target="_blank">Click here to read the full article.</a></p>
        <Button className={classes.calcButton} variant="contained" color="primary" onClick={handleClick}>Next Article</Button>
      </div>
    </div>
  )
}

export default Home;