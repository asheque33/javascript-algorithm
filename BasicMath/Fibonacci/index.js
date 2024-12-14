const Fibonacci = (n) => {
  const fib = [0, 1]; //fixed
  for (let i = 2; i < n; i++) {
    //ekhane i Fibonacci element er index hishebe kaj korbe
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};
//* Big-O=O(n)
console.log("fib(7)" + Fibonacci(7));
console.log("fib(6)" + Fibonacci(6));
// Fibonacci(7)=[0,1,1,2,3,5,8]
