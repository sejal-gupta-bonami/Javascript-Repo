//ARRAYS
//using constructor
let arr = new Array(10, 20, 30);
console.log(arr);
console.log(arr[2]);

//using literal notation
let arr2 = ["red", "black", "blue"];
console.log(arr2);
console.log(arr2[1]);

arr2[0] = "pink";
console.log(arr2);

//length
let arrr = [];
arrr[10] = "apple";
console.log(arrr.length);

//toString
let arr3 = [1, 2, 3];
console.log(String(arr3));

//push()
var arr1 = ["one", "two", "three"];
let r = arr1.push("four", "five");
console.log(r);

var arr22 = ["one", "two", "three"];
arr22.unshift("four", "five");
console.log(arr22);

//pop()
let q = arr1.pop();
console.log(q);

//unshift()
let c = arr1.unshift("nine");
console.log(c);

//shift
let p = arr1.shift();
console.log(p);


//splice
//remove
const color = ["pink", "white", "green"];
let f = color.splice(1, 2);
console.log(f); // returns deleted elements

//add
let color2 = ["pink", "white", "green"];
color2.splice(2, 0, "black");

//replace
let color3 = ["pink", "white", "green"];
color3.splice(2, 1, "black");
console.log(color3);

//negative index
let color4 = ["pink", "white", "green"];
color4.splice(-2, 1, "black");
console.log(color4);

//slice method
let numbers = [1, 2, 3, 4, 5, 6, 7];
let ans = numbers.slice(2, 5); // makes a copy of deleted array
console.log(numbers);
console.log(ans);

//some
const arr5 = [1, 2, 3, 4, 5];
let ans5 = arr5.some(function (x) {
  return x % 2 === 0;
});

console.log(ans5);

//map function

function double(x) {
  return x * 2;
}

let array1 = [2, 4, 6, 8, 10];
let ans1 = array1.map(double);
console.log(array1);
console.log(ans1);

//filter
let output = array1.filter((x) => {
  return;

  x % 2 === 0;
});
console.log(output);

//reduce method
const inputArr = [2, 3, 4, 5, 6];
let outputVal = inputArr.reduce(function (acc, curr) {
  if (curr < acc) {
    acc = curr;
  }
  return acc;
}, 0);
console.log(outputVal);

//reduce practice question
const person = [
  { firstname: "Rahul", lastname: "gupta", age: 25 },
  { firstname: "priya", lastname: "sharma", age: 50 },
  { firstname: "dinesh", lastname: "garg", age: 25 },
  { firstname: "shweta", lastname: "singh", age: 38 },
];

//print full name
//use map
var newArray = person.map(function (x) {
  return x.firstname + " " + x.lastname;
});

console.log(newArray);

//find number of persons according to age
//use reduce
//output - {25:2 ,50:1,38:1}
var ansObj = person.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age] + 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(ansObj);

//find first name of all the person whose age is less than 30

let ansArray = person.filter((x) => x.age < 30).map((x) => x.firstname);

console.log(ansArray);


//array desturcturing 
let a1 = [1, 2, 3, 4];
const [a, b] = a1;
console.log(a);
console.log(b);


//object destructuring 
let objj = {
    name: 'rahul',
    age: 22,
    gender :"male"
};

const { name, gender } = objj;
console.log(name);
console.log(gender);


//rest operator use 
//without rest 
function add(arr){
    let sum =0;
    for(let i =0;i<arr.length ;i++){
        sum+=arr[i];
    }
    return sum;
}

const arr6=[1,2,3,4,5,6];
console.log(add(arr6));

//with rest 
function add(...numbers){ 
    let sum=0;
  for(let i =0;i<numbers.length ;i++){
        sum+=numbers[i];
    }
    return sum;
}
console.log(add(1, 2, 3, 4, 5, 6));

//for loops
const student = [1, 2, 3, 4, 5, 6, 7];
//for loop
const newarray = [];
for (let i = 0; i < student.length; i++) {
  newarray[i].push(student[i]);
}

console.log(newarray);

//for each
student.forEach((element) => {
  console.log(element * 2);
});

//use of map
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}

//use of set
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert(set.size); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}






