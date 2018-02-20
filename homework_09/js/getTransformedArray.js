
function getTransformedArray(arr, callback) {
	const result = [];
	forEach(arr, (el) => {
		result.push(callback(el))
	});

	return result;	
}


