import {ProductDecorator} from "./ProductDecorator";

export class GiftWrap extends ProductDecorator {
    getPrice(): number {
        console.log(`Envoltura de regalo: $5`)
        return this.product.getPrice() + 5;
    }
}