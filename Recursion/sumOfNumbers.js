let sumOfNumbers = (arr) => {
  if (arr.length == 1) return arr[0];
  else return arr[0] + sumOfNumbers(arr.slice(1));
};

const arr = [5, 6, 20, 3];
console.log(sumOfNumbers(arr));
