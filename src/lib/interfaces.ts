export interface Product {
  id: number;
  name: string;
  icon: string;
  description?: string;
  validate(): boolean;
}

// Examples of using a type alias
type ProductAlias =
  | string
  | number
  | {
      id: number;
      name: string;
      icon: string;
      description?: string;
    };

// Even though `Product` is an interface and cannot be instantiated with `new`,
// we can still use it to type-check object literals that match its structure.
// This does not create an instance of `Product`, it only ensures the object conforms to its shape.
// let product = new Product(); ❌ Error
let product: ProductAlias = 'Food';

// Using a type alias versus an enum
enum ProductType {
  Sporting,
  Home,
}

type ProductTypeList = 'SPORTING' | 'HOME';
let p: ProductTypeList = 'SPORTING';
