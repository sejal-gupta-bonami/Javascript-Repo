//practise  question
const arrayOne = [
  { name: "abc", grade: "A" },
  { name: "def", grade: "C" },
  { name: "ghi", grade: "B" },
  { name: "jkl", grade: "C" },
  { name: "mno", grade: "B" },
];

let objectans = arrayOne.reduce(function (acc, curr) {
  if (acc[curr.grade]) {
    acc[curr.grade] = [];
  }

  acc[curr.grade].push(curr.name);
  
  return acc;
}, {});

console.log(objectans);
