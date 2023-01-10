import Product from './Product/product.js';
import productList from './Product/productList.js';

const product = new Product('Mac Kajal', 150, '1', 'black', 'MAC', 'kajal');

const xyz = new productList();
const kajal = xyz.getKajals();
const blush = xyz.getBlushes();
const powder = xyz.getPowder();
const lipstick = xyz.getLipstick();
