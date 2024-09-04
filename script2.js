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
let color = ['pink', 'white', 'green'];
let f = color.splice(1, 2);
console.log(f); // returns deleted elements

//add
let color2 = ['pink', 'white', 'green'];
color2.splice(2, 0,'black');

//replace
let color3= ['pink', 'white', 'green'];
color3.splice(2, 1, 'black');
console.log(color3);

//negative index 
let color4= ['pink', 'white', 'green'];
color4.splice(-2, 1, 'black');
console.log(color4);