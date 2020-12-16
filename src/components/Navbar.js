import React from 'react';

function Navbar() {
  return(
    //bootstrap navbar
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <a href="#" class="navbar-brand">Personal Finance Tools</a>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
        <div class="navbar-nav ml-auto">
            <a href="#" class="nav-item nav-link active">Home</a>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Calculators</a>
                <div class="dropdown-menu">
                    <a href="#/tipcalc" class="dropdown-item">Tip Calculator</a>
                    <a href="#/rentvsbuycalc" class="dropdown-item">Rent vs Buy Calculator</a>
                    <a href="#/carloancalc" class="dropdown-item">Car Loan Calculator</a>
                </div>
            </div>
            <a href="#/about" class="nav-item nav-link">About</a>
        </div>
    </div>
</nav>
  )
}

export default Navbar; 