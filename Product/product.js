class Product {
  name = null;
  price = 0;
  qty = null;
  color = null;
  company = null;
  desc = null;

  constructor(name, price, qty, color, company, desc) {
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.color = color;
    this.company = company;
    this.desc = desc;
  }
}

export default Product;
