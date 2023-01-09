import Product from './product.js';
class productList {
  getKajals() {
    const kajal = [];
    for (let i = 1; i <= 10; i++) {
      kajal.push(
        new Product('Mac Kajal ' + i, 150, '1', 'black', 'MAC', 'kajal ' + i)
      );
    }
    return kajal;
  }

  getBlushes() {
    const blush = [];
    for (let i = 1; i <= 10; i++) {
      blush.push(
        new Product(
          'Face Shop Blush ' + i,
          200,
          '1',
          'pink',
          'Face Shop',
          'blush ' + i
        )
      );
    }
    return blush;
  }

  getPowder() {
    const powder = [];
    for (let i = 1; i <= 10; i++) {
      powder.push(
        new Product(
          'Lakme Powder ' + i,
          250,
          '1',
          'white',
          'Lakme',
          'powder ' + i
        )
      );
    }
    return powder;
  }

  getLipstick() {
    const lipstick = [];
    for (let i = 1; i <= 10; i++) {
      lipstick.push(
        new Product(
          'MAC Lipstick ' + i,
          300,
          '1',
          'red',
          'MAC',
          'lipstick ' + i
        )
      );
    }
    return lipstick;
  }
}

export default productList;
