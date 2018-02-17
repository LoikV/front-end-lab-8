let getClosestToZero=(...arg) =>{
	if(arg.length !== 0){
		let arr=arg;
		let sorting = arr.sort( (a,b) => Math.abs(a) - Math.abs(b) );
		//probably here it was necessary to check for zero?
		return sorting[0];
	}else{
	 	return undefined;
	}
}