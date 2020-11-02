// class Person{ 
//     constructor(name,city){ 
//         this.city =city; 
//         this.name = name; 
//     } 
//     getName(){ 
//         return this.name; 
//     } 
//     setName(name){ 
//         this.name = name; 
//     } 
// } 
// var person = new Person('Raju');
// person.setName('Marley'); 
// console.log(person.getName());

class Vehicle{
    constructor(brand,price){
        this.brand = brand;
        this.price = price;
    }
    set details(discount){
        this.brand.toUpperCase();
        this.price = this.price - discount;
    }
    get details(){
        return this.brand+" "+this.price;
    }
}
car = new Vehicle('Audi','2000000');
console.log(car);
car.details = '100000';
console.log(car.details);