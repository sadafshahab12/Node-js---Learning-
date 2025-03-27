//Blocking vs Async
const fs = require("fs");
// console.log(`1. Starting of Script`);
// console.log(`2. Reading file Synchronously`);
// const dataSync = fs.readFileSync("user-details.txt", "utf-8");
// console.log(`3. synchronous read complete`);

// console.log(`4. Reading file asynchronously`);
// fs.readFile("user-details.txt", "utf-8", (error, dataAsync) => {
//   if (error) throw error;
//   console.log(`6. Asynchronous Read complete`);
// });
// console.log(`5. End of Script`);

// Event loop sequence
console.log(`1. Starting of Script`);
Promise.resolve().then(() => console.log(`2. Microtask 1`));
//timer queue
setTimeout(() => {
  console.log(`3. Timer 1`);
}, 0);

//I/O queue

fs.readFile("user-details.txt", "utf-8", () => {
  console.log(`4. I/O operation`);
});
//Check queue
setImmediate(() => console.log(`5. Immediate 1`));
//close queue

process.on("exit", (code) => {
  console.log(`6. Exit Event`);
});
console.log(`7. End of Script`);
