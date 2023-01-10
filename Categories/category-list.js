// import ProductList from '../Product/product-list.js';
import MensProductList from '../Product/MensProductList.js';
import WomenProductList from '../Product/WomenProductList.js';

class CategoryList {


    getCategories() {
        let mensObject = new MensProductList();
        mensObject = [mensObject.getTees(), mensObject.getShorts()];

        let womensObject = new WomenProductList();
        womensObject = [womensObject.getSarees(), womensObject.getKurtas()]

        return {
            men: mensObject,
            women: womensObject,
        }
    }
}

export  default  CategoryList;
