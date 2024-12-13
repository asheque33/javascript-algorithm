const linearSearch=(array,targetElement)=>{

    for(let i=0;i<array.length;i++){
        if(array[i]===targetElement)
    return i;
        }
        return -1;

};
// Big-O=O(n); As the size of the array increases, the no. of times the if condition also increases.
const result=linearSearch([5,4,-2,0,-7,3,9,1],0);
console.log("result",result);
console.log(linearSearch([-5,4,-2,0,-7,3,9,1],0));
console.log(linearSearch([-5,4,-2,0,-7,3,9,1],10));
console.log(linearSearch([-5,4,-2,0,-7,3,9,1],-5));
console.log(linearSearch([-5,4,-2,0,-7,3,9,1],-7));
console.log(linearSearch([-5,4,-2,0,-7,3,9,1],1));