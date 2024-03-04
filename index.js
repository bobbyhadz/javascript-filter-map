// EXAMPLE 1 - Filter a Map in JavaScript

const map1 = new Map([
  ['num1', 1],
  ['num2', 2],
  ['num3', 3],
]);

map1.forEach((value, key) => {
  if (value > 1) {
    map1.delete(key);
  }
});

// 👇️ {'num1' => 1}
console.log(map1);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Filter a Map using `filter()`

// const map1 = new Map([
//   ['num1', 1],
//   ['num2', 2],
//   ['num3', 3],
// ]);

// const filtered = new Map(
//   Array.from(map1).filter(([_key, value]) => {
//     if (value > 1) {
//       return true;
//     }

//     return false;
//   }),
// );

// // 👇️ {'num2' => 2, 'num3' => 3}
// console.log(filtered);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Filter a Map using `for...of`

// const map1 = new Map([
//   ['num1', 1],
//   ['num2', 2],
//   ['num3', 3],
//   ['num3', 4],
// ]);

// for (const [key, value] of map1) {
//   if (value > 1) {
//     map1.delete(key);
//   }
// }

// // 👇️ {'num1' => 1}
// console.log(map1);
