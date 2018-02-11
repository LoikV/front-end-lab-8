var evaluateEur=33.2324;
var evaluateUsd=27.1240;
var euro=+prompt("Enter your euro amount");
var dollar=+prompt("enter your dollar amount");

function getAmountView(amount) {
	return Number.isInteger(amount) ? amount : amount.toFixed(2);
}

if (euro >= 0 && dollar >= 0) {
	var euroRes=getAmountView(euro*evaluateEur);
	var dollarRes=getAmountView(dollar*evaluateUsd);
	var euroToDollar=getAmountView(evaluateEur/evaluateUsd);

	console.log(` ${euro} are equal ${euroRes} UAH, ${dollar} dollars are equal ${dollarRes} UAH, one euro is equal ${euroToDollar} dollars.`)
} else {
	console.log("Incorrect data");
}





















