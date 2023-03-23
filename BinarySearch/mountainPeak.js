let findPeak = (arr, start, end) => {
  //base case
  if (start === end) return arr[start];
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] < arr[mid + 1]) return findPeak(arr, mid + 1, end);
  else return findPeak(arr, start, mid);
};

const arr = [0, 1, 3, 5, 6, 0, -1];
const peak = findPeak(arr, 0, arr.length);
console.log(peak);
