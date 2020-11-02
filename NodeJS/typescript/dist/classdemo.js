var MyStudent1 = /** @class */ (function () {
    function MyStudent1(name, mobile, city, company, age) {
        var _this = this;
        if (company === void 0) { company = "ABc"; }
        this.name = name;
        this.mobile = mobile;
        this.city = city;
        this.company = company;
        this.age = age;
        this.printDetails = function () {
            var hobbies = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                hobbies[_i] = arguments[_i];
            }
            console.log(_this.name + " is from " + _this.city);
            console.log("" + _this.age);
            console.log(hobbies);
        };
    }
    return MyStudent1;
}());
var stud7 = new MyStudent1('Raju', 1290, 'Bangalore', 'ABC', 28);
stud7.printDetails('Sports', 'Music');
var stud8 = new MyStudent1('Raju', 1290, '', '', 23);
stud8.printDetails();
