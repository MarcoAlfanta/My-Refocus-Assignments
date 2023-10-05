const arr = [
  "Web Developer",
  "Refocus",
  "Web Developer",
  "Web Developer",
  "Refocus",
  "Awesome",
];

const countMap = {};
arr.forEach(item => {
  if (countMap[item]) {
    countMap[item]++;
  } else {
    countMap[item] = 1;
  }
});

console.log(countMap);

let InvoiceList = [
  "Invoice 008",
  "Invoice 007",
  "Invoice 006",
  "Invoice 005"
];

function insertToBottom(item) {
  InvoiceList.push(item);
}

function reverseList() {
  InvoiceList = InvoiceList.reverse();
}

InvoiceList.push("Invoice 004");
InvoiceList.push("Invoice 003");
InvoiceList.push("Invoice 002");
InvoiceList.push("Invoice 001");

console.log(InvoiceList.join(" "));
reverseList();
console.log(InvoiceList.join(" "));
