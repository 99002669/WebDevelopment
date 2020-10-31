var Employee = function(){
    Employee.prototype.name = 'Tejasvi';
    Employee.prototype.printName = function(){
        console.log('welcome '+this.name);
    };
    emp1 = new Employee('Akash');
    emp1.printName();
     
    var Product = function(){
        Product.prototype={
            name:'Laptop',
            showDesc:function(){
                console.log('15 inch 12GB '+this.name);
            },
            printStock:function(stock){
                console.log('stock available '+stock);
            }
        }
    }}