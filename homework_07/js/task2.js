var check1=confirm("you are ready");

if(check1===false){
	alert("You did not become a millionaire");
}
else{
	
	while(check1){
		var min=0;
		var max=5;
		var attempts =0;
		var prize=10;
		var changeOfPrize=10;
		var sumPrize=[];
		var num=Math.floor(Math.random()*(max-min+1));
		var result=0;
	
		while(attempts <3){
			var a=+prompt(` Enter a number from ${min} to ${max} \n Attempts left: ${attempts} \n Total prize: ${result}$ \n Possibly prize on current attempt: ${changeOfPrize}`);
		
			if(a===num&&!isNaN(parseFloat(a))){
				var check2=confirm("Do you want to continue a game?");

				if(check2){
					sumPrize.push(changeOfPrize)
					prize*=3;
					max*=2;
					changeOfPrize=prize;
					num=Math.floor(Math.random()*(max-min+1));
					result = sumPrize.reduce(function(sum, current) {
  						return sum + current;
						}, 0);
					attempts=-1
				}else{
					sumPrize.push(changeOfPrize)
					alert(`Thank you for a game. Your prize is: ${result}`)
					check1=confirm("Do you want to play a game?");
					}

			}else{
			changeOfPrize=Math.floor(changeOfPrize/2);
			}

			attempts++;
			if(attempts===3){
				alert(`Thank you for a game. Your prize is: ${result}`);
				check1=confirm("Do you want to play a game?");
			}
		} 
	}
}

