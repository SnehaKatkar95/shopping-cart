class Product {
    name = null;
    brand = null;
    price = 0;
    qty = null;
    color = null;
    category = null;
    desc = null;
    inStock = false;
    constructor(name, price, qty, color, category, desc, brand, inStock) {
        this.name = name;
        this.price = price;
        this.qty = qty;
        this.color = color;
        this.category = category;
        this.desc = desc;
        this.brand = brand;
        this.inStock = inStock
    }
}

export default Product;
