function RecursiveFactorial(n) {
  if (n === 0) {
    //Base case(মূল শর্ত)
    return 1;
  }
  return n * RecursiveFactorial(n - 1);
}
//! Big 0= O(n)
// console.log(RecursiveFactorial(60));
console.log(RecursiveFactorial(1));
console.log(RecursiveFactorial(0));
console.log(RecursiveFactorial(7));
console.log(RecursiveFactorial(6));
// todo: Recursion means the function calls himself i.e self calling function
/*
!কাজ করার ধাপ:
todo: (যখন 𝑛=0)
n=0 হয়, তখন ফাংশন 1 রিটার্ন করে। এটিকে বেস কেস(মূল শর্ত) বলে। 
todo: 𝑛>0
n>0 এর ক্ষেত্রে, ফাংশন নিজেকে n−1 দিয়ে রিকল করে যতক্ষণ না n=0 হয়।
প্রতিবার রিটার্ন ভ্যালু গুণ হয়ে ফিরে আসে।
*/
