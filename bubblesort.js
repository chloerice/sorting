var bubbleSort = function (arr) {
  var loop = true;

  while (loop) {
    loop = false;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        var smaller = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = smaller;
        loop = true;
      }
    }
  }
  return arr;
}
