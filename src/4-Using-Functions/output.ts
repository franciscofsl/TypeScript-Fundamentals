const prefix = '☠️ ';

type ProductType = {
    id: number;
    name: string;
    icon?: string;
}

export default async function updateOutput(id: string) {
    
}

runTheLearningSamples();

function runTheLearningSamples(){
    
    function displayProductInfo(id: number, name: string){
        console.log(`${prefix} typed parameters`);
        console.log(`${prefix}Product ID: ${id}, Name: ${name}`);
    }

    displayProductInfo(10, 'pizza');

    console.log(`${prefix} function declaration`);
    console.log(addNumbersDeclaration(7, 11));

    function addNumbersDeclaration(a: number, b: number): number {
        const sum: number = a + b;
        return sum;
    }

    const addNumbersExpression = function(a: number, b: number) {
        const sum: number = a + b;
        return sum;
    }
    
    console.log(`${prefix} function expression`);
    console.log(addNumbersExpression(7, 11));

    // A function declaration is fully hoisted: you can call it before its definition.
    // A function expression is assigned to a variable, so only the variable is hoisted — not the function itself.
    // Calling a function expression before its definition will cause a runtime error.

    const sampleProducts = [
        {
            id: 10,
            name: 'Pizza slice',
            icon: 'fas fa-pizza-slice'
        },
        {
            id: 20,
            name: 'Burger',
            icon: 'fas fa-hamburger'
        },
        {
            id: 30,
            name: 'Sushi',
            icon: 'fas fa-fish'
        }
    ];

    function getProductNames(): string[]{
        return sampleProducts.map(p => p.name);
    }

    console.log(`${prefix} return array`);
    console.log(getProductNames());

    function getProductById(id: number): ProductType | undefined {
        return sampleProducts.find(p => p.id === id);
    }

    console.log(`${prefix} return ProductType`);
    console.log(getProductById(20));

    function displayProducts(products: ProductType[]): void {
        const productNames = products.map(p => p.name.toLocaleLowerCase());
        const msg = `Sample products include: ${productNames.join(', ')}`;
        console.log(msg);
    }

    displayProducts(sampleProducts);
}