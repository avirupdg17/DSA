let binarySearch = (arr, start, end, elem) => {
  //console.log(start, end);
  if (end < start) return "Not Found";
  if (start === end) return arr[start] == elem ? start : "Not Found";
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === elem) return mid;
  else if (elem > arr[mid]) return binarySearch(arr, mid + 1, end, elem);
  else return binarySearch(arr, start, mid - 1, elem);
};

const arr = [2, 6, 6, 8, 8, 8];
const elem = 8;

console.log(binarySearch(arr, 0, arr.length - 1, elem));
