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
}

// Test Runs

const testProduct = new Product("Laptop", 1399.99, 5);
console.log(testProduct.toString(), "Total Value:", testProduct.getTotalValue());


const milk = new PerishableProduct("Milk", 5.69, 30, "2025-09-18");
const bread = new PerishableProduct("Bread", 2.99, 40, "2025-08-30");
console.log(milk.toString());
console.log(bread.toString());

const headphones = new Product("Headphones", 149.99, 20);
const sampleArr = [testProduct, milk, headphones];
console.log("Before discount:", sampleArr.map(p => p.price));
Product.applyDiscount(sampleArr, 0.1);
console.log("After 10% discount:", sampleArr.map(p => p.price));
