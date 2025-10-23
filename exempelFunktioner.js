/*
// Beskriv denna funktion...
function hello() {
	console.log('Hallå eller!')
	console.log('Välkommen till funktionernas underbara värld')
}


hello();
console.log('------------------------------')
hello();
*/

/*
var input, output;

// Beskriv denna funktion...
function hello(input) {
  console.log('Hallå eller!')
  console.log(input)
}

// Beskriv denna funktion...
function giveMeFive() {
  return 5;
}


hello('gul');
hello('röd');
*/

var balance, interest, years;

// Beskriv denna funktion...
function calculateInterest(balance, interest, years) {
  console.log('Räknar ut nya saldot på kontot...')
  for (var count = 0; count < years; count++) {
    balance = balance * interest;
  }
  return balance;
}


console.log((calculateInterest(100, 1.05, 20)))
