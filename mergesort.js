function split(wholeArray) {

	var firstHalf = wholeArray.slice(0,wholeArray.length/2);
	var secondHalf = wholeArray.slice(wholeArray.length/2);

	return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
	var mergedArr = [];

	for(var i = 0; i < arr1.length; i++ ) {
		if (arr1[i] > arr2[i]) {
			mergedArr.push(arr2[i]);
			mergedArr.push(arr1[i]);
		} else {
			mergedArr.push(arr1[i]);
			mergedArr.push(arr2[i]);
		}
	}

	return mergedArr;
}

function mergeSort (arr) {
	var splitArr = split(arr);
	var firstHalf = splitArr[0];
	var secondHalf = splitArr[1];

	//BASE CASE:
	if (arr.length < 2) {
		return arr;
	}

	return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}
