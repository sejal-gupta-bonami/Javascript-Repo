// //promise.all with all resolved values
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('The first promise has resolved');
//       resolve(10);
//     }, 1 * 1000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('The second promise has resolved');
//       resolve(20);
//     }, 2 * 1000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('The third promise has resolved');
//       resolve(30);
//     }, 3 * 1000);
//   });

//   Promise.all([p1, p2, p3]).then((results) => {
//   console.log(results)
//   });

// //promise.all with rejected promise
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("first resolved");
    resolve(10);
  }, 3000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("second resolved");
    reject("promise rejected");
  }, 2000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("third resolved");
    resolve(20);
  }, 1000);
});

Promise.all([pi, p2, p3]).then((res) => {
  console.log(res);
});

let promise1 = new Promise((resolve, reject) => {
  let a = true;
  setTimeout((a) => {
    if (a) {
      console.log("this is first promise");
      resolve(10);
    }
  }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
  let a = true;
  setTimeout((a) => {
    if (a) {
      console.log("this is second promise");
      resolve(10);
    }
  }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
  let a = true;
  setTimeout((a) => {
    if (a) {
      console.log("this is third promise");
      resolve(10);
    }
  }, 2000);
});

promise1.then(() => {
  console.log(promise2).then(() => {
    console.log(promise3);
  });
});
