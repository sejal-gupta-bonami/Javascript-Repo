//THIS keyword in object method 
let student = {
    name: 'John',
    age: 25,
    x: function () {
        console.log(this);
    }
};

student.x();

//this keyword with object property
let student2 = {
    name: 'John',
    age: 25,
    x: function () {
        console.log(this.name);
    }
};

student2.x();

//call() method 
let name = {
    firstname: 'sejal',
    lastname: 'gupta',
    print: function () {
        console.log(this.firstname + " " + this.lastname);
    }
};

name.print();

let name2 = {
    firstname: 'akshay',
    lastname: 'saini',
    
};

name.print.call(name2);

//this keyword with arrow functions
let obj1 = {
    a: 10,
    x: () => {
        console.log(this);
    }
};

obj1.x();