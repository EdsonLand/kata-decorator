import {IProduct} from "./IProduct";

export class BasicProduct implements IProduct{
    constructor(private basePrice: number) {
    }

    getPrice(): number {
        return this.basePrice;
    }
}