const isPrime = (n) => {
  if (n < 2) {
    return `${n} is NoT Prime`;
  }
  //   for (let i = 2; i < n; i++) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return `${n} is NoT Prime`;
    }
  }
  return `${n} is Prime`;
};
//* Big-O=O(n)
console.log(isPrime(2));
console.log(isPrime(12));
console.log(isPrime(1));
console.log(isPrime(0));
console.log(isPrime(-13));
console.log(isPrime(11));
console.log(isPrime(121));
