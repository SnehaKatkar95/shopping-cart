import Product from './product.js';

class mensProductList {
  getTees() {
    const tees = [];
    tees.push(
      new Product(
        'Levis T-shirt',
        'Levis',
        2000,
        '1N',
        'white',
        'Men',
        'tee',
        'true'
      )
    );
    return tees;
  }

  getShorts() {
    const shorts = [];
    shorts.push(
      new Product(
        'Levis Shorts',
        'Levis',
        1500,
        '1N',
        'black',
        'Men',
        'shorts',
        'true'
      )
    );
    return shorts;
  }
}

export default mensProductList;
