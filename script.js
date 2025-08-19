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
}