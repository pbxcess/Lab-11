//Part 1
class Product {
    constructor(name, price, quantity) {
        this.name = String(name);
        this.price = Number(price);
        this.quantity = Number(quantity);
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }

    //Part 3
    static applyDiscount(products, discount) {
        if (!Array.isArray(products)) {
            throw new TypeError("products must be an array");
        }
        if (typeof discount !== "number" || discount < 0 || discount > 0.9) {
            throw new RangeError("discount should be a decimal between 0 and 0.9");
        }

        for (const p of products) {
            if (!(p instanceof Product)) continue;
            p.price = Number((p.price * (1 - discount)).toFixed(2));
        }
    }
}



//Part 2:
class PerishableProduct extends Product {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = String(expirationDate);
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}


//Part 4 - Store mngmnt
class Store {
    constructor() {
        this.inventory = [];
    }

    addProduct(product) {
        if (!(product instanceof Product)) {
            throw new TypeError("Only Product or PerishableProduct can be added");
        }
        this.inventory.push(product);
    }

    getInventoryValue() {
        return this.inventory.reduce((sum, p) => sum + p.getTotalValue(), 0);
    }

    findProductByName(name) {
        const n = String(name).toLowerCase();
        return this.inventory.find(p => p.name.toLowerCase() === n) || null;
    }
}


//store and seed products
const store = new Store();
const p1 = new Product("Laptop", 1399.99, 5);
const p2 = new Product("Headphones", 149.99, 20);
const p3 = new PerishableProduct("Milk", 5.69, 30, "2025-09-18");
const p4 = new PerishableProduct("Bread", 2.99, 40, "2025-08-30");
const p5 = new Product("AAA Batteries (12-pack)", 12.99, 54);

for (const p of [p1, p2, p3, p4, p5]) store.addProduct(p);


//Part 5 -- Test Outputs
//The total before 15% discount
const before = store.getInventoryValue();
console.log("Total inventory value BEFORE 15% discount")

//Apply 15% discount to ALL products in store
Product.applyDiscount(store.inventory, 0.15);

//Total after 15% discount
const after = store.getInventoryValue();
console.log("Total inventory AFTER 15% discount:", after);

//Find % print a specific product by name
const found = store.findProductByName("Milk");
console.log("Find 'Milk':", store.findProductByName("Milk")?.toString());


// Test Runs
/*const testProduct = new Product("Laptop", 1399.99, 5);
console.log(testProduct.toString(), "Total Value:", testProduct.getTotalValue());


const milk = new PerishableProduct("Milk", 5.69, 30, "2025-09-18");
const bread = new PerishableProduct("Bread", 2.99, 40, "2025-08-30");
console.log(milk.toString());
console.log(bread.toString());

const headphones = new Product("Headphones", 149.99, 20);
const sampleArr = [testProduct, milk, headphones];
console.log("Before discount:", sampleArr.map(p => p.price));
Product.applyDiscount(sampleArr, 0.18);
console.log("After 18% discount:", sampleArr.map(p => p.price));*/

