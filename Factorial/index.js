const Factorial = (n) => {
  if (n < 0) {
    return undefined;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
};
//* Big-O=O(n)
console.log(Factorial(0));
console.log(Factorial(1));
console.log(Factorial(-21));
console.log(Factorial(10));

//! 0!=1=1!
//! 6 != 6 * 5 * 4 * 3 * 2 * 1;
