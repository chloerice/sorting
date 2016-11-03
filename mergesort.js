function split(wholeArray) {

	var firstHalf = wholeArray.slice(0,wholeArray.length/2);
	var secondHalf = wholeArray.slice(wholeArray.length/2);

	if (firstHalf.length === 1 && secondHalf.length === 1) {
		return [firstHalf, secondHalf];
	}

	if (firstHalf.length > 1) {
		firstHalf = firstHalf.concat(split(firstHalf));
	}

	if (secondHalf.length > 1) {
		secondHalf = secondHalf.concat(split(secondHalf));
	}
	// console.log("firstHalf" ${firstHalf}, "secondHalf" ${secondHalf});
}
