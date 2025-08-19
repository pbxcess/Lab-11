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

    static applyDiscount(products, discount) {
        if (!Array.isArray(products)) throw new TypeError("prodtcs must be an array");
        if (typeof discount !== "number" || discount < 0 || discount > 0.9);
            throw new RangeError("discount should be a decimal between 0 and 0.9");
    }
    for (const p of products) {
        if (!(p instanceof Product)) continue;
        p.price = Number((p.price * (1 - discount)).toFixed(2));
    }
}

const testProduct = new Product("Laptop", 1399.99, 5);
console.log(testProduct.toString(), "Total Value:", testProduct.getTotalValue());

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

const milk = new PerishableProduct("Milk", 5.69, 30, "2025-09-18");
const bread = new PerishableProduct("Bread", 2.99, 40, "2025-08-30");
console.log(milk.toString());
console.log(bread.toString());