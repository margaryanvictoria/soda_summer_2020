function mergeSort(arr) {
    if (arr.length < 2)
        return arr;

    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

merge = (arrA, arrB) => {
	let helper = [];
	while(arrA.length && arrB.length) {
		arrA[0] < arrB[0] ? helper.push(arrA.shift()) : helper.push(arrB.shift());
	}
	return helper.concat(arrA, arrB);
}

console.log(mergeSort([168, 2, 5, 10, 57, 9, 12, 13]));
