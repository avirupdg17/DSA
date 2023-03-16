let isSorted = (arr) => {
  if (arr.length == 0 || arr.length == 1) return true;
  if (arr[0] > arr[1]) return false;
  else return isSorted(arr.slice(1));
};

console.log(isSorted([7, 7, 7, 7]));
