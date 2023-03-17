let linearSearch = (arr, elem) => {
  //   console.log(arr);
  if (arr.length == 1) return arr[0] == elem ? "Found" : "Not Found";
  return arr[0] == elem ? "Found" : linearSearch(arr.slice(1), elem);
};

const arr = [5, 2, 20, 3];
const elem = 20;
console.log(linearSearch(arr, elem));
