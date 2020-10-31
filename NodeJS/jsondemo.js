var stud={
    name:'Ram',
    empID:20,
    hobbies:['music','sports'],
    address:{
        city:'ban',
        state:'KA'
    }
}
var jsonstring = JSON.stringify(stud);
console.log(jsonstring);
var jsobj = JSON.parse(jsonstring);
console.log(jsobj);