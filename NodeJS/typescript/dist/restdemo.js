function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum);
}
addNumbers();
addNumbers(10, 20, 30);
addNumbers(10, 20, 30, 40, 50);
function userDetails(name, city) {
    if (city === void 0) { city = 'Bangalore'; }
    console.log('name', +name);
    console.log('city' + city);
    var greet = function (msg) {
        return msg;
    };
    console.log(greet('have a great day'));
    greet = function (msg) {
        return 'welcome' + msg;
    };
    console.log(greet('hello'));
}
var show = function () { return console.log('Hi'); };
console.log(show());
var checkType = function (a, b) {
    console.log(a + b);
};
checkType(10, 20);
checkType(10, 'Ram');
checkType('Ram', 'Tom');
