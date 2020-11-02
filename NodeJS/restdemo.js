var sumOfNums = function(...arguments){
    var sum = 0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
 } 
 console.log(sumOfNums(10,20));