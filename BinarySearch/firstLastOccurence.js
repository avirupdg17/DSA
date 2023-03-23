// let leftOccur = (arr, elem, start, end, index) => {
//   //console.log(start, end, index);
//   if (end < start) return index;
//   if (start === end) return arr[start] == elem ? start : index;
//   const mid = Math.floor((start + end) / 2);
//   if (arr[mid] === elem) {
//     index = mid;
//     return leftOccur(arr, elem, start, mid - 1, index);
//   } else if (arr[mid] < elem) return leftOccur(arr, elem, mid + 1, end, index);
//   else return leftOccur(arr, elem, start, mid - 1, index);
// };
// let rightOccur = (arr, elem, start, end, index) => {
//   //console.log(start, end, index);
//   if (end < start) return index;
//   if (start === end) return arr[start] == elem ? start : index;
//   const mid = Math.floor((start + end) / 2);
//   if (arr[mid] === elem) {
//     index = mid;
//     return rightOccur(arr, elem, mid + 1, end, index);
//   } else if (arr[mid] < elem) return rightOccur(arr, elem, mid + 1, end, index);
//   else return rightOccur(arr, elem, start, mid - 1, index);
// };

let findOcc = (arr, elem, start, end, index, rightOrLeft) => {
  //console.log(start, end, index);
  if (end < start) return index;
  if (start === end) return arr[start] == elem ? start : index;
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === elem) {
    index = mid;
    return rightOrLeft
      ? findOcc(arr, elem, start, mid - 1, index)
      : findOcc(arr, elem, mid + 1, end, index);
  } else if (arr[mid] < elem) return findOcc(arr, elem, mid + 1, end, index);
  else return findOcc(arr, elem, start, mid - 1, index);
};

const arr = [2, 3, 3, 3, 5];
const elem = 3;
let leftIndex = -1;
let right, left;
left = findOcc(arr, elem, 0, arr.length - 1, leftIndex, true);
if (left === -1) right = -1;
else right = findOcc(arr, elem, left + 1, arr.length - 1, left, false);

console.log(left, right);
const total = right - left - 1;
console.log(`Total Occurrence ${total}`);
