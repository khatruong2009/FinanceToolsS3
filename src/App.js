import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import TipCalc from "./components/TipCalc";
import RentvsBuyCalc from "./components/RentvsBuyCalc";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import About from './components/About';
import CarLoan from "./components/CarLoan";

function App() {
  return (
    <div className="App">
      
      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/tipcalc" component={TipCalc} />
        <Route path="/rentvsbuycalc" component={RentvsBuyCalc} />
        <Route path="/carloancalc" component={CarLoan} />
        <Route path="/about" component={About} />
        {/* <Route component={Error} /> */}
      </Switch>

    </div>
  );
}

export default App;
