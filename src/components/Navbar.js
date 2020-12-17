import React from 'react';

function Navbar() {
  return(
    //bootstrap navbar
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <a href="#" className="navbar-brand">Personal Finance Tools</a>
    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
        <div className="navbar-nav ml-auto">
            <a href="#" className="nav-item nav-link active">Home</a>
            <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Calculators</a>
                <div className="dropdown-menu">
                    <a href="#/tipcalc" className="dropdown-item">Tip Calculator</a>
                    <a href="#/rentvsbuycalc" className="dropdown-item">Rent vs Buy Calculator</a>
                    <a href="#/carloancalc" className="dropdown-item">Car Loan Calculator</a>
                    <a href="#/investmentcalc" className="dropdown-item">Investment Calculator</a>
                </div>
            </div>
            <a href="#/about" className="nav-item nav-link">About</a>
        </div>
    </div>
</nav>
  )
}

export default Navbar; 