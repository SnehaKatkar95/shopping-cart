import Product from './product.js';

class WoMensProductList {
    getSarees() {
        const sarees =[];
        sarees.push(new Product(
            "Silk Saree",
            400,
            "1N",
            "Red",
            "women",
            "saree",
            "mysore",
            true,
        ))
        return sarees;
    }

    getKurtas() {
        const kurtas =[];
        kurtas.push(new Product(
            "Libas Kurta",
            1000,
            "1N",
            "Red",
            "men",
            "shorts",
            "Libas",
            true,
        ))
        return kurtas;
    }

}


export default WoMensProductList;
