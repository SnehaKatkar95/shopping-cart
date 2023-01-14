import mensProductList from '../Product/mensProductList.js';
import womensProductList from '../Product/womensProductList.js';

class categoryList {
  get categories() {
    let mensObject = new mensProductList();
    mensObject = [mensObject.getShorts(), mensObject.getTees()];

    let womensObject = new womensProductList();
    womensObject = [womensObject.getKurtas, womensObject.getSarees];

    return {
      men: mensObject,
      women: womensObject,
    };
  }
}

export default categoryList;
