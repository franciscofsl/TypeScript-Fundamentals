let  firstName: string;
firstName = 'Dan';

let age: number;
age = 45;

let hasPurchased = true;

let productName: string[] = ['Basketball', 'Racket', 'Food'];
productName.push('Swim Glasses');

let petCount: number[] = [];
petCount.push(5);

console.log(firstName, age, hasPurchased, petCount);

let productType = 'Sports';
if (productType === 'Sports') {
    console.log('This is a sports product');
}

enum ProductType {
    Sports = 50,
    HomeGoods = 51,
    Groceries = 52
}

let pt = ProductType.Sports;

if (pt === ProductType.Sports) {    
    console.log('This is a sports product');
}