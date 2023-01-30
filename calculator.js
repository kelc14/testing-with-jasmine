
window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    // update();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return values = {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").defaultValue = 10000;
  document.getElementById("loan-years").defaultValue = 3;
  document.getElementById("loan-rate").defaultValue = 5;
  getCurrentUIValues();
  let periodicInterestRate = ((values.rate/100) / 12)
  let n = values.years * 12
  let topCalc = values.amount*periodicInterestRate
  let bottomCalc = 1 - ((1+periodicInterestRate)**(-1*n))
  
  let monthly = (topCalc/bottomCalc);
  monthly = monthly.toFixed(2);
  console.log(monthly)

  let monthlyDisplay = document.getElementById('monthly-payment');
  monthlyDisplay.innerText = monthly}

// Get the current values from the UI
// Update the monthly payment
function update() {
  getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment());
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment() {
  let periodicInterestRate = ((values.rate/100) / 12)
  let n = values.years * 12
  let topCalc = values.amount*periodicInterestRate
  let bottomCalc = 1 - ((1+periodicInterestRate)**(-1*n))
  
  let monthly = (topCalc/bottomCalc);
  monthly = monthly.toFixed(2);
  console.log(monthly)

  return `${monthly}`
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(str) {
  let monthlyDisplay = document.getElementById('monthly-payment');
  monthlyDisplay.innerText = str
  console.log(str)
}
