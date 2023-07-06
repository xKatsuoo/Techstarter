function bubbleSort(arr) {
    var len = arr.length;
    var swapped;
    
    do {
      swapped = false;
      
      for (var i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          var temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    
    return arr;
  }
  
//  var unsortedArray = [5, 1, 9, 4, 2];
//  var sortedArray = bubbleSort(unsortedArray);
  
//  console.log("Sortiertes Array: ", sortedArray);
  

module.exports = bubbleSort;