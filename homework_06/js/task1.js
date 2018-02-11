const a=+prompt("enter the length of the first side");
const b=+prompt("enter the length of the second side");
const c=+prompt("enter the length of the third side");
const arr=[a, b, c];

function sorting(a, b) {
	return a - b;
}
arr.sort(sorting);

if (arr[2] - arr[1] - arr[0] < 0) {
	const p = (a + b + c) * 0.5;
	let square = Math.sqrt(p*(p-a)*(p-b)*(p-c));
	square = Number.isInteger(square)? square : square.toFixed(2);
	let type = '';
	
	if (Math.pow(arr[2], 2) === Math.pow(arr[1],2) + Math.pow(arr[0],2)) {
		type = 'right';
	}
	else if (a === b && a === c){
		type = 'equilateral';
	}
	else if(a === b || a === c || b === c){
		type = 'isosceles';
	} else {
		type = 'scalene';
	}

	console.log(`Type of triangle is ${type} triangle and square is ${square}`);
} else {
	console.log("Incorrect data");
};