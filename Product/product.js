class Product {
  name = null;
  brand = null;
  price = 0;
  qty = null;
  color = null;
  category = null;
  desc = null;
  inStock = false;

  constructor(name, brand, price, qty, color, category, desc, inStock) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.qty = qty;
    this.color = color;
    this.category = category;
    this.desc = desc;
    this.inStock = inStock;
  }
}

export default Product;
