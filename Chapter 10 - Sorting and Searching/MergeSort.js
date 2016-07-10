//Merge Sort | Runtime: O (n log(n)) average and worst case. Memory: Depends.

//Merge sort divides the array in half, sorts each of those halves, and then merges them back together. Each of those halves has the same sorting algorithm applied to it. Eventually, you are merging just two single-element arrays. It is the "merge" part that does all the heavy lifting.
//The merge method operates by copying all the elements from the target array segment into a helper array, keeping track of where the start of the left and right halves should be (helperLeft and helperRight). We then iterate through helper, copying the smaller element from each half into the array. At the end we copy any remaining elements into the target array.

// //function takes in an array
// function mergeSort (arr) {
//   //check for a valid array
//   if (arr.length < 2) {
//     return arr;
//   }

//   //get the middle index of the array
//   var mid = Math.floor(arr.length/2);
//   var left = mergeSort(arr.slice(0, mid));
//   var right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// };

// //merge takes in 1st and 2nd half of array
// function merge(a,b) {
//   //create results array to hold items that are sorted
//   var results = [];
//   //loop as long as there are items in both arrays
//   while (a.length > 0 && b.length > 0) {
//     results.push( a[0] < b[0] ? a.shift() : b.shift());
//   }
//   return results.concat(a.length ? a : b);
// };


var mergeSort = function(array){
    //Arrays that are [] or [x] are already sorted, so we can just return them.
    if(array.length <= 1){
        return array;
    }
    //split the array into two halves
    var half = Math.floor(array.length/2);
    left = array.slice(0, half);
    right = array.slice(half);

    //continue to split both sides until sorted, then merge
    // var sortedLeft = mergeSort(left);
    // var sortedRight = mergeSort(right);
    // console.log('left', left);
    // console.log('mergeSort(left)', mergeSort(left));
    console.log('right', right);
    console.log('mergeSort(right)', mergeSort(right));

    return merge(mergeSort(left), mergeSort(right));

};

var merge = function(left, right) { //pass in an array of two sorted arrays
    var i = 0; j = 0, result = []; //initialize our counters
    //while there is something left in both arrays to push to 'result'..
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]){
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    //one array is already pushed to result,
    //so add the rest of the other array
    var remaining = i === left.length ? right.slice(j) : left.slice(i);
    return result.concat(remaining);
};

var test = [1,2,9,3,2,5,14,0];
console.log('result', mergeSort(test));
