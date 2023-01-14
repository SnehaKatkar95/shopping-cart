import mensProductList from '../product/mensProductList.js';
import womensProductList from '../product/womensProductList.js';

class categoryList{
get categories(){
  let mensObject = new mensProductList();
  mensObject = [mensObject.getShorts(), mensObject.getTees()];

  let womensObject = new womensProductList();
  womensObject = [womensObject.getKurtas, ]
}
}