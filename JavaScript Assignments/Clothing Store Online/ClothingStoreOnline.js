// Create the shop object
let shop = {
  shopName: "Marcrist Store",
  address: "595 South Boundary Tungkop Minglanilla",
  code: "SB595",
  users: [],
  items: []
};

// Function to add users
function addUser(firstName, lastName, age, birthday) {
  let user = {
      firstName,
      lastName,
      age,
      birthday,
      cart: []
  };
  shop.users.push(user);
}

// Function to add items
function addItem(name, category, price, stockQuantity) {
  let item = {
      name,
      category,
      price,
      stockQuantity
  };
  shop.items.push(item);
}

// Function to add items to the cart
function addItemToCart(userIndex, itemName) {
  const itemIndex = shop.items.findIndex(item => item.name === itemName);
  if (shop.users[userIndex] && itemIndex !== -1) {
      shop.users[userIndex].cart.push(itemIndex);
  }
}

// Function to confirm an order, deduct items from stocks, calculate change, and show receipt
function confirmOrder(userIndex, payment) {
  const user = shop.users[userIndex];
  if (!user || user.cart.length === 0) {
      console.log("No items in cart or user not found.");
      return;
  }

  let totalCost = 0;
  let productsBought = {};
  
  for (let itemIndex of user.cart) {
      totalCost += shop.items[itemIndex].price;
      shop.items[itemIndex].stockQuantity--;
      
      if (productsBought[shop.items[itemIndex].name]) {
          productsBought[shop.items[itemIndex].name]++;
      } else {
          productsBought[shop.items[itemIndex].name] = 1;
      }
  }

  if (payment < totalCost) {
      console.log("Insufficient payment.");
      return;
  }

  const change = payment - totalCost;
  console.log(`Confirmed order for ${user.firstName} ${user.lastName}`);
  console.log("Receipt:");
  for (let itemName in productsBought) {
      const quantity = productsBought[itemName];
      const itemIndex = shop.items.findIndex(item => item.name === itemName);
      const itemCost = shop.items[itemIndex].price * quantity;
      console.log(`${quantity}x ${itemName} - $${itemCost.toFixed(2)}`);
  }
  console.log(`Total cost: $${totalCost.toFixed(2)}`);
  console.log(`Change: $${change.toFixed(2)}`);
  
  user.cart = []; // Empty the cart after successful order
}

// Add users using the function
addUser("Marlo", "Alfanta", 22, "09.18.2001");
addUser("Cristal Mea", "Andales", 23, "04.19.2000");
addUser("Kenny Jaen", "Alforque", 27, "04.06.1996");
addUser("Tiker", "Gomez", 25, "01.20.1998");
addUser("Julia", "Caballia", 18, "08.06.2005");
addUser("Mariane", "Alfanta", 25, "07.18.1998");
addUser("Angelina", "Jolie", 48, "4.06.1975");
addUser("Brad", "Pitt", 60, "12.18.1963");

// Add items using the function
addItem("White Printed Shirt", "Men's Clothing", 20, 200);
addItem("Pink High Neck Top","Women's Clothing", 15.89, 400);
addItem("Black Leather Jacket","Women's Clothing", 101.02, 250);
addItem("Blue Polka Dot Socks","Kid's Clothing", 5, 120);
addItem( "White Hand Bag","Women's Accessories", 59.78, 200);
addItem("Red dress", "Dresses", 80, 320);

// Add items to the cart for users
addItemToCart(1, "White Printed Shirt");
addItemToCart(2, "Pink High Neck Top");
addItemToCart(3, "Black Leather Jacket");
addItemToCart(4, "Blue Polka Dot Socks");
addItemToCart(4, "Blue Polka Dot Socks");
addItemToCart(4, "Blue Polka Dot Socks");
addItemToCart(4, "Blue Polka Dot Socks");
addItemToCart(5, "White Hand Bag");
addItemToCart(0, "Red dress");
addItemToCart(0, "Red dress");
addItemToCart(0, "Red dress");

// Confirm orders for users and show receipts
confirmOrder(0, 500); 
confirmOrder(1, 80);  
confirmOrder(2, 80);  
confirmOrder(3, 80);  
confirmOrder(4, 80);  
confirmOrder(5, 80);  

console.log(shop); // Print the updated shop object
