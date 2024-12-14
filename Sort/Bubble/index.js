//! Ascending Order(normalArr[i]>normalArr[i+1])
function BubbleSort(normalArr){
    let isSwapped;
do{
    isSwapped=false;
    for(let i=0;i<normalArr.length-1;i++){
    if(normalArr[i]>normalArr[i+1]){
        let tempoVar=normalArr[i];
        normalArr[i]=normalArr[i+1];
        normalArr[i+1]=tempoVar;
        isSwapped=true;
    }
}
}while(isSwapped)
    return normalArr;
}
console.log(BubbleSort([-5,3,-7,12,0,9,-1,4,-3]));
//* Big-O=O(n^2); As the number of element in the array increases, the number of comparison increases by square of the number.So, quadratic time complexity isn't great for sorting.
//! Descending Order(normalArr[i]<normalArr[i+1])
// function BubbleSort(normalArr){
//     let isSwapped;
// do{
//     isSwapped=false;
//     for(let i=0;i<normalArr.length-1;i++){
//     if(normalArr[i]<normalArr[i+1]){
//         let tempoVar=normalArr[i];
//         normalArr[i]=normalArr[i+1];
//         normalArr[i+1]=tempoVar;
//         isSwapped=true;
//     }
// }
// }while(isSwapped)
//     return normalArr;
// }
// console.log(BubbleSort([-5,3,-7,12,0,9,-1,4,-3]));