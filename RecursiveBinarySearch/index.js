const recursiveBinarySearch=(sortedArray,targetElement,leftIndex,rightIndex)=>{
return search(sortedArray,targetElement,0,sortedArray.length-1)
}
const search=(sortedArray,targetElement,leftIndex,rightIndex)=>{
    let middleIndex=Math.floor((leftIndex+rightIndex)/2);
    if(leftIndex>rightIndex){
        return -1;
    }
    if(targetElement===sortedArray[middleIndex]){
        return middleIndex
    }else if(targetElement<sortedArray[middleIndex]){
        return search(sortedArray,targetElement,leftIndex,middleIndex-1)
    }else if(targetElement>sortedArray[middleIndex]){
        return search(sortedArray,targetElement,middleIndex+1,rightIndex)
    }
}

// Big-O=O(log n)
console.log(recursiveBinarySearch([-5,-2,0,1,3,6,8,9,11],0));
console.log(recursiveBinarySearch([-5,-2,0,1,3,6,8,9,11],8));
console.log(recursiveBinarySearch([-5,-2,0,1,3,6,8,9,11],10));
console.log(recursiveBinarySearch([-5,-2,0,1,3,6,8,9,11],-5));
console.log(recursiveBinarySearch([-5,-2,0,1,3,6,8,9,11],11));