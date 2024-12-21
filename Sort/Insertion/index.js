function insertionSort(normalArr){
for(let i=1;i<normalArr.length;i++){
    let unsortedInitialElement=normalArr[i];
    // sorted elements can be more than one.we need logic to iterate over the sorted elements for that use while-loop.
    let sortedIndex=i-1;
    while(sortedIndex>=0 && normalArr[sortedIndex]>unsortedInitialElement){
        normalArr[sortedIndex+1]=normalArr[sortedIndex];//sortedElem > unsortedElem,then sortedElem insert to adjacent being duplicate
        sortedIndex=sortedIndex-1;// compare respectively every sortedElement with unsortedInitElem;
    }
normalArr[sortedIndex+1]=unsortedInitialElement;  //but unsortedElem>sortedElem,then unsorted will insert immediate right to the that sortedElem;  
}
return normalArr;
}
console.log(insertionSort([-5,-13,3,-1,4,0,-2,8,5]));