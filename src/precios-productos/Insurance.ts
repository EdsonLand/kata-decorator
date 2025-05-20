import {ProductDecorator} from "./ProductDecorator";

export class Insurance extends ProductDecorator{
    getPrice(): number {
        console.log(`Seguro: $15`)
        return this.product.getPrice() + 15;
    }
}