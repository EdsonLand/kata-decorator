import {GiftWrap} from "./GiftWrap";
import {BasicProduct} from "./BasicProduct";
import {ExpressShipping} from "./ExpressShipping";
import {IProduct} from "./IProduct";

//Producto base
let product: IProduct = new BasicProduct(100);
console.log('Precio base: $100');

// Aplicar decoradores
product = new GiftWrap(product)
product = new ExpressShipping(product)

const total = product.getPrice();

console.log(`Precio total: $${total}`);