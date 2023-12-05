var bubbleSort = require('./bubblesort');

function mergeArrays(array1, array2) {
  var mergedArray = array1.concat(array2);
  var uniqueArray = [...new Set(mergedArray)];
  return uniqueArray;
}


var array1 = [1, 3, 5, 7];
var array2 = [3, 6, 9, 5];
var mergedAndSortedArray = bubbleSort(mergeArrays(array1, array2));

console.log("Vereintes und sortiertes Array: ", mergedAndSortedArray);
