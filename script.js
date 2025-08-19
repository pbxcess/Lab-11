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

}

const testProduct = new Product("Laptop", 1399.99, 5);
console.log(testProduct.toString(), "Total Value:", testProduct.getTotalValue());