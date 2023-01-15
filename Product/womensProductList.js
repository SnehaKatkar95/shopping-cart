import Product from './product.js';

class womensProductList {
  getKurtas() {
    const kurta = [];
    kurta.push(
      new Product(
        'Libas Kurta',
        'Libas',
        3000,
        '1N',
        'pink',
        'women',
        'kurta',
        'true'
      )
    );
    return kurta;
  }

  getSarees() {
    const saree = [];
    saree.push(
      new Product(
        'Silk Sarees',
        'mysore',
        3500,
        '1N',
        'blue',
        'women',
        'saree',
        'true'
      )
    );

    return saree;
  }
}

export default womensProductList;
