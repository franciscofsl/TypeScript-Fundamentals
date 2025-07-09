import { Product } from './interfaces';

// This will act as the foundation for other Product type classes (FoodProduct, SportingProduct)
abstract class ProductBase implements Product {
  // Properties
  constructor(public id: number, public name: string, public icon: string) {} // properties in constructor are auto implemented
  validate(): boolean {
    throw new Error('Not implemented');
  }
}

export class FoodProduct extends ProductBase {
  validate(): boolean {
    return !!this.id && !!this.name && !!this.icon;
  }
}


class SportingGoodsProduct extends ProductBase {
  constructor(id: number, name: string, icon: string) { // custom consturctor, then should use super, like base in c#
    super(id, name, icon);
  }
}