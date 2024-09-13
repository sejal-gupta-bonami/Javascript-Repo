// setTimeout(function () {
//   console.log("its a setTimeout function");
// }, 5000);

// function x(y) {
//   console.log(" inside x");
//   y();
// }

// x(function () {
//   console.log("inside y");
// });

//PROTOTYPE
// function myname() {
//   console.log("my name is consoled here.");
// }
// const obj1 = {
//   name: "rahul",
//   age: 22,
//   x: function () {
//     console.log(this.name + "'s age is :  " + this.age);
//   },
// };

// const obj2 = {
//   city: "Delhi",
// };
// Object.prototype.my = myname;
// console.log(obj1.x());

// console.log(obj2.__proto__);
// console.log(obj2.my());
// Object.prototype.a = obj1;
// console.log(obj2.__proto__);

console.log(Array.prototype);
const arr = [1, "hello", 3, 4, 5];
const arr2 = [];

Array.prototype.a = arr[1];
console.log(arr2.a);
