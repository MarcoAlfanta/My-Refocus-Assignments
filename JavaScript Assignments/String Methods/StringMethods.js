function findFirstUppercase(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase() && text[i] !== text[i].toLowerCase()) {
      return text[i];
    }
  }
  return "No uppercase letters found in the text.";
}

const text1 = "there is a storm coming to the East of the Philippines";
const result1 = findFirstUppercase(text1);
console.log("Text 1:", result1);

const text2 = "no more rainy days here, sun is about to show up";
const result2 = findFirstUppercase(text2);
console.log("Text 2:", result2);
