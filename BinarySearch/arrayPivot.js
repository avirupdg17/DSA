let pivotIndex = function (nums) {
  let total = nums.reduce((curr, acc) => curr + acc, 0);
  //console.log(total)
  let index = -1;
  let left = 0;
  let right = total;
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    right -= temp;
    if (left === right) {
      index = i;
      break;
    }
    left += temp;
  }
  //console.log(index);
  return index;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
