// Task 1: Create the Necessary Variables
const letters = ["E", "D", "L", "T", "E", "P", "B", "N", "M", "E", "E", "W", "V", "0", " "];
const order = [11, 4, 6, 14, 1, 9, 12, 0, 2, 13, 5, 8, 10, 7, 3];

// Task 2: Prepare to Decrypt
let hiddenWord = "";

// Task 3: Decrypt the Code
for (let i = 0; i < order.length; i++) {
  hiddenWord += letters[order[i]];
  console.log(hiddenWord);
}
