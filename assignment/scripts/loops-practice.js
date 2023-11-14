console.log("****** Loops Practice *******");

// 1. 'for' loop
console.log("---- 1. For loops ----");
// Example: a for loop to console.log numbers from 0 to 3
console.log("count from 0 to 3");
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i = 0; i < 4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
console.log("number 0-5");
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// change < to <=

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log("number 3-5");
for (let i = 3; i <= 5; i++) {
  console.log(i);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log("even number 2-10");
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0

console.log("countdown from 5 to 0:");
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// 2. For of loops
console.log("---- 2. For Of loop ----");

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array

const starArray = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb'];

for (const element of starArray) {
  console.log(element);
}

// 3. While loops
console.log("---- 3. While loop ----");

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log("each star using while:");
let starCount = 0;
while (starCount <= starArray.length) {
  console.log(starCount);
  console.log(starArray[starCount]);
  starCount++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log("count from 0 to 5");
let count = 0;
while (count <= 5) {
  console.log(count);
  count++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log("backwards from 10-5");
let backwardCount = 10;
while (backwardCount >= 5) {
  console.log(backwardCount);
  backwardCount--;
}
console.log("****** Loops Practice *******");

