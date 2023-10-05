let customer = {
    customer_name: "Johnny Manggo",
    points: 12300,
    cart:[
        {item:"Shampoo",quantity:2,price_$:1.5},
        {item:"Soap",quantity:2,price_$:1},
        {item:"Toothpaste",quantity:1,price_$:3}
    ]
}
console.log(`Hi, ${customer.customer_name}! We are happy to see you today.`);
console.log(`Your current points are: ${customer.points}.`);


let total_bill = 5;

console.log("Purchased Items:");
for (let item of customer.cart) {
    let itemTotal = item.quantity * item.price_$;
    console.log(`${item.quantity}x ${item.item} ---- $ ${itemTotal.toFixed(2)}`);
    total_bill += itemTotal;
}

console.log(`Total Bill: ${total_bill.toFixed(2)}`);

for (let item of customer.cart) {
    customer.points += item.quantity;
}

console.log(`New Total Points: ${customer.points}`);