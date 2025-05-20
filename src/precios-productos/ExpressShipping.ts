import {ProductDecorator} from "./ProductDecorator";

export class ExpressShipping extends ProductDecorator{
    getPrice(): number {
        console.log(`Envío exprés: $10`)
        return this.product.getPrice() + 10;
    }
}