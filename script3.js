// let p = new Promise((resolve, reject) => {
//   resolve("the promise is resolved");
// });

// function greetings() {
//   return "good morning";
// }

// const user = greetings();
// console.log(user);

let mypromise = new Promise((resolve, reject) => {
  resolve("resolved");
});

const ans = mypromise;
console.log(ans);
ans.then((result) => {
  console.log(result);
});
