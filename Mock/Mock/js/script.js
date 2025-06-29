// Objects for café data
const cafe = {
    name: "Brew & Bean",
    location: "123 Coffee Street",
    phone: "(555) 123-4567",
    hours: "7AM - 8PM"
};

const menu = {
    espresso: { name: "Espresso", price: 3.50, description: "Rich and bold single shot" },
    cappuccino: { name: "Cappuccino", price: 4.50, description: "Perfect blend with foam" },
    latte: { name: "Latte", price: 4.00, description: "Smooth with steamed milk" },
    mocha: { name: "Mocha", price: 5.00, description: "Chocolate and espresso" },
    americano: { name: "Americano", price: 3.75, description: "Espresso with hot water" }
};

const discountMessage = "Happy Monday! Get 20% off your favorite latte between 2–4 PM today!";

alert(discountMessage);

alert("Welcome to " + cafe.name + "!\n\nOur Coffee Menu:\n1. " + menu.espresso.name + " - $" + menu.espresso.price + "\n2. " + menu.cappuccino.name + " - $" + menu.cappuccino.price + "\n3. " + menu.latte.name + " - $" + menu.latte.price + "\n4. " + menu.mocha.name + " - $" + menu.mocha.price + "\n5. " + menu.americano.name + " - $" + menu.americano.price);

// Take customer name input
let customerName = prompt("What's your name?");
alert("Hello " + customerName + "! Welcome to " + cafe.name + "!");

// Create customer object
const customer = {
    name: customerName,
    orderHistory: [],
    totalSpent: 0
};

// Take coffee order input
let coffeeChoice = prompt("What would you like to order?\n1. " + menu.espresso.name + " - $" + menu.espresso.price + "\n2. " + menu.cappuccino.name + " - $" + menu.cappuccino.price + "\n3. " + menu.latte.name + " - $" + menu.latte.price + "\n4. " + menu.mocha.name + " - $" + menu.mocha.price + "\n5. " + menu.americano.name + " - $" + menu.americano.price);
alert("Great choice! You selected: " + coffeeChoice);

// Take quantity input
let quantity = prompt("How many would you like?");
alert("Order confirmed: " + quantity + " " + coffeeChoice + "(s)");

// Calculate total amount
let coffeeIndex = parseInt(coffeeChoice) - 1;
let coffeeItems = [menu.espresso, menu.cappuccino, menu.latte, menu.mocha, menu.americano];
let selectedCoffee = coffeeItems[coffeeIndex];

let unitPrice = selectedCoffee.price;
let subtotal = unitPrice * quantity;
let tax = subtotal * 0.1;
let total = subtotal + tax;

// Create order object
const order = {
    customer: customer.name,
    item: selectedCoffee.name,
    quantity: parseInt(quantity),
    unitPrice: unitPrice,
    subtotal: subtotal,
    tax: tax,
    total: total,
    orderTime: new Date().toLocaleString()
};

// Add order to customer history
customer.orderHistory.push(order);
customer.totalSpent += total;

alert("Order Summary:\n" + order.quantity + "x " + order.item + "\nUnit Price: $" + order.unitPrice.toFixed(2) + "\nSubtotal: $" + order.subtotal.toFixed(2) + "\nTax (10%): $" + order.tax.toFixed(2) + "\nTotal: $" + order.total.toFixed(2));

console.log("=== CAFÉ OBJECT ===");
console.log("Café:", cafe);
console.log("=== CUSTOMER OBJECT ===");
console.log("Customer:", customer);
console.log("=== ORDER OBJECT ===");
console.log("Order:", order);
console.log("=== MENU OBJECT ===");
console.log("Menu:", menu);
