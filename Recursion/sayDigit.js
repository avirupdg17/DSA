const numbers = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
};
let finddigit = (n) => {
  n = Math.floor(n);
  if (n <= 0) return;

  finddigit(n / 10);
  console.log(numbers[n % 10]);
};
finddigit(4356);
