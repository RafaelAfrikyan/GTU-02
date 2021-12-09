// Try to guess, test, and then understand following examples.

console.log(null + undefined); // NaN
console.log(null + true); // 1 -- type of null is number, true in number type is 1
console.log(null + false); // 0
console.log(null + 3); // 3
console.log(null + NaN); // NaN
console.log(null + "Hello"); // 'nullHello'
console.log(null + a + b + c + d + e + f); // reference error, couse latter is not definife
console.log(undefined + true); // NaN
console.log(undefined + false); //NaN
console.log(undefined + 5); //NaN
console.log(undefined + NaN); //NaN
console.log(undefined + "Hello"); // 'undefinedHello'
console.log(undefined + a + b + c + d + e + f); // reference error
console.log(true + false); // 1
console.log(true + 2); // 3
console.log(true + NaN); // NaN
console.log(true + "hello"); // 'truehello'
console.log(true + a + b + c + d + e + f); // reference error
console.log(false + 4); // 4
console.log(false + NaN); // NaN
console.log(false + "hello"); // 'falsehello'
console.log(false + a + b + c + d + e + f); //reference error
console.log(5 + 3); // 8
console.log(5 + NaN); // NaN
console.log(5 + a + b + c + d + e + f); //reference error
console.log("hello" + NaN); // 'helloNan'
console.log("hello" + a + b + c + d + e + f); // reference error
