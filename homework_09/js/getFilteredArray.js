
function getFilteredArray(arr, predicate) {
	const result = [];

	forEach(arr, (el) => {
		if (predicate(el)){
			result.push(el);
		}
	});
	return result;
}