// todo: Binary search always works on a sorted array(ascending | descending);
/*
1. Finding the middle element of that sorted array.
while(leftIndex<=rightIndex) so that sortedArray will non-empty.
2. At first determine the value of middleIndex with Math.floor() method.
3.if(targetEl===sortedArray[middleIndex]), then index will be required result.
4.if(targetEl<=sortedArray[middleIndex]), then rightIndex=middleIndex-1.
5.if(targetEl>=sortedArray[middleIndex]), then leftIndex=middleIndex+1.
6.if (targetEle doesn't include sortedArray(middleIndex)), then accurate index result will be -1
*/
const binarySearch = (sortedArray, targetElement) => {
    let leftIndex=0;
    let rightIndex=sortedArray.length-1;
    while(leftIndex<=rightIndex){//make sure that array is not empty i.e 0<=0, 0<=1, so on.
        let middleIndex=Math.floor((leftIndex+rightIndex)/2);
        if(targetElement===sortedArray[middleIndex]){
            return middleIndex;
        }
        if(targetElement<sortedArray[middleIndex]){
            rightIndex=middleIndex-1
        }else if(targetElement>sortedArray[middleIndex]){
leftIndex=middleIndex+1
        }
    }
    return -1
};
//! since the func has 1 loop(while) which expect Big-O is equal to O(n). But, the detail is inside the while loop where every iteration input size is reduced by 1/2.So,
// Big-O=O(log n)
 

console.log(binarySearch([-5, -2, 0, 3, 7, 9, 11, 12], 7));
console.log(binarySearch([-5, -2, 0, 3, 7, 9, 11, 12], 9));
console.log(binarySearch([-5, -2, 0, 3, 7, 9, 11, 12], -2));
console.log(binarySearch([-5, -2, 0, 3, 7, 9, 11, 12], -20));
