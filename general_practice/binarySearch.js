function binarySearch(arr, l, r, x) {
    let mid = Math.floor((r-l)/2 + l);
    
    if(arr[mid] == x) return mid;

    if(l == r || l == r-1) {
        return -1;
    } else if(arr[mid] > x) { //search left if key is smaller than mid val
        return binarySearch(arr, 0, mid, x);
    } else if(arr[mid] < x) { //search right
        return binarySearch(arr, mid, r, x);
    } else {
        return -1; //not found
    }
}

function binarySearchLowIndex(arr, l, r, x) {
    let mid = Math.floor((r-l)/2 + l);

    console.log(' ', l, r, '\n', "mid", mid, "val " + arr[mid])
    // for last index, just change -1 to +1
    if(arr[mid]==x && arr[mid-1] != x) return mid

    return (l == r || l == r-1) ? -1
        : (arr[mid] >= x) ? binarySearchLowIndex(arr, 0, mid, x)
            : (arr[mid] < x) ? binarySearchLowIndex(arr, mid, r, x)
                : -1
}

let arr = [ 0, 0, 1, 1, 1, 1, 1];
let x = 1;
let a = binarySearch(arr, 0, arr.length, x);
console.log(a)