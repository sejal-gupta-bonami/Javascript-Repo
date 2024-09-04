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

console.log(arr1.length);