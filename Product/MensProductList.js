import Product from './product.js';

class MensProductList {
    getTees() {
        const tees =[];
        tees.push(new Product(
            "Levis Tee",
            400,
            "1N",
            "Red",
            "men",
            "Tee",
            "Levis",
            true,
        ))
        return tees;
    }

    getShorts() {
        const shorts =[];
        shorts.push(new Product(
            "Levis Shorts",
            1000,
            "1N",
            "Red",
            "men",
            "shorts",
            "Levis",
            true,
        ))
        return shorts;
    }

}


export default MensProductList;
