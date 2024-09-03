//THIS keyword in object method 

//normal function
let student = {
    name: 'John',
    age: 25,
    x: function () {
        console.log(this);
    }
};
student.x();

//arrow function 
let car2 = {
  color: "red",
  model: 5,
  speed: () => {
    console.log(this);
  },
};
car2.speed();

//nested arrow function
let car3 = {
    color: "black",
    model: 7,
    work : function(){
        const hello = () => { 
            console.log(this);
        }
        hello();
    }
}
car3.work();
//the enclosing lexical context for this arrow function is work function so it will return the object itself , not the window object



//this keyword with object property
let student2 = {
    name: 'John',
    age: 25,
    x: function () {
        console.log(this.name);
    }
};

student2.x();


//this keyword with arrow functions
let obj1 = {
    a: 10,
    x: () => {
        console.log(this);
    }
};

obj1.x();



//normal function vs arrow function 

//return statement 
//normal function 
let p = 5;
function show(x) {
    return x;
}
console.log(show(p));

//arrow function 
let h = 15;
const func2 = (num) => num + num; //if block is defined use return keyword
console.log(func2(h));

//accessing arguments
//normal function
function sum(ar1, ar2) {
  console.log(arguments);
}
sum(5, 9);

//arrow function
const addit = (...args) => {
  console.log(args);
};
addit(10, 20);

//hoisitng difference
//regular function
regfunction();
function regfunction() {
  console.log("regular function");
}
//arrow function
// arrowfunc(); // thows error
const arrowfunc = () => {
  console.log("arrow function");
};
arrowfunc();

//CALL() method
var employee1 = {
  name: "jane",
  surname: "doe",
};

var employee2 = {
  name: "louis",
  surname: "mark",
};

function printing(greet1, greet2) {
  console.log(greet1 + " " + this.name + " " + this.surname + " " + greet2);
}

printing.call(employee1, "hello", "morning");
printing.call(employee2, "hi", "afternoon");


//APPLY() method 
var ob1 = {
  id: 3,
  age: 20,
};
var ob2 = {
  id: 5,
  age: 30,
};

function details(val1, val2) {
  console.log(
    this.id +
      " " +
      this.age +
      " " +
      "location : " +
      val1 +
      " " +
      "gender " +
      val2
  );
}

details.apply(ob1, ["agra", "F"]);
details.apply(ob2, ["delhi", "M"]);

//BIND() method
//makes a copy of function

//object.assign() method
var Target = {
  course: "Web programming",
};

var source = {
  grade: 70,
};

Object.assign(Target, source);
console.log(Target);

//object.freeze()
var object11 = {
  age: 20,
};

Object.freeze(object11);

object11.age = 30;

//object.entries
var entryobj = {
  name: "sejal",
  course: "MCA",
};

console.log(Object.entries(entryobj));


//Object.fromEntries
var entryobj2 = [["name","sejal"],["age","23"]];
  
  console.log(entryobj2);
console.log(Object.fromEntries(entryobj2));
  

//Object.seal()
var newobj = {
    name: "sejal",
    age: 23
}

Object.seal(newobj);

newobj.gender = 'f';

console.log(newobj);


//object.values
var obb = {
    a: "something",
    b: 10,
    c:true
}
  
console.log(Object.values(obb));
