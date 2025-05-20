import {IProduct} from "./IProduct";

export abstract class ProductDecorator implements IProduct {
    constructor(protected product: IProduct) {
    }

    abstract getPrice(): number;
}