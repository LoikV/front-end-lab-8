let reverseNumber = (number) =>{
	let str=number.toString().split('').reverse().join('');
	let num=parseInt(str)*Math.sign(number);
	return num; 
}
