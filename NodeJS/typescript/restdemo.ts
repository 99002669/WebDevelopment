function addNumbers(...nums:number[]){
    var sum=0;
    for(var i =0;i<nums.length;i++){
        sum+=nums[i];
    }
    console.log(sum);
}
addNumbers();
addNumbers(10,20,30);
addNumbers(10,20,30,40,50);

function userDetails(name:string,city:string='Bangalore'){
    console.log('name',+name);
    console.log('city'+city);

    var greet = function(msg:string){
        return msg;
    }
    console.log(greet('have a great day'));

    greet = (msg:string)=>{
        return 'welcome'+msg;
    }
    console.log(greet('hello'));
}


var show =() => console.log('Hi');
console.log(show());

var checkType=(a,b)=>{
    console.log(a+b);
}
checkType(10,20);
checkType(10,'Ram');
checkType('Ram','Tom');