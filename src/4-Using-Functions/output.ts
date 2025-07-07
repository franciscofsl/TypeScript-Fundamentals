import { productsURL } from "../lib";

const prefix = '☠️ ';

type ProductType = {
    id: number;
    name: string;
    icon?: string;
}

export default async function updateOutput(id: string) {
    const products = await getProducts();
    const output = document.querySelector(`#${id}`);
    const html = layoutProducts(products);
    if (output && html) {
        output.innerHTML = html;
    }
}

function layoutProducts(products: ProductType[]) {
    const items = products.map((p) => {
        const productHtml = `
<span class="card-id">#${p.id}</span>
<i class="card-icon ${p.icon} fa-lg"></i>
<span class="card-name">${p.name}</span>
        `;

        const cardHtml = `
<li>
    <div class="card">
        <div class="card-content">
            <div class="content">
                ${productHtml}
            </div>
        </div>
    </div>
</li>
        `;

        return cardHtml;
    });

    let productsHtml = `<ul>${items.join('')}</ul>`;
    return productsHtml;
}


async function getProducts(): Promise<ProductType[]> {
    const response: Response = await fetch(productsURL);
    const products: ProductType[] = await response.json();
    return products;
}

runTheLearningSamples();

function runTheLearningSamples() {

    function displayProductInfo(id: number, name: string) {
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

    const addNumbersExpression = function (a: number, b: number) {
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

    function getProductNames(): string[] {
        return sampleProducts.map(p => p.name);
    }

    console.log(`${prefix} return array`);
    console.log(getProductNames());

    function getProductById(id: number): ProductType | undefined {
        // return sampleProducts.find(p => p.id === id);

        return sampleProducts.find(function (p) {
            return p.id === id;
        });
    }

    const getProductById2 = (id: number): ProductType | undefined => sampleProducts.find(p => p.id === id);

    console.log(`${prefix} return ProductType`);
    console.log(getProductById(20));

    function displayProducts(products: ProductType[]): void {
        const productNames = products.map(p => p.name.toLocaleLowerCase());
        const msg = `Sample products include: ${productNames.join(', ')}`;
        console.log(msg);
    }

    displayProducts(sampleProducts);


    const getRandomInt = (max: number = 1000) => Math.floor(Math.random() * max);

    function createProduct(name: string, icon?: string): ProductType {
        const id = getRandomInt(1000);

        const product: ProductType = { id, name };
        return { id, name, icon };
    }

    console.log(`${prefix} Optional Parameters`);
    let pineapple = createProduct('Pineapple', 'fas fa-pineapple');
    let mango = createProduct('Mango');
    console.log(pineapple, mango);

    function createProductWithDefault(
        name: string,
        icon: string = 'generic-fruit.jpg') : ProductType {
        const id = getRandomInt();

        // If icon is not provided, use a default value
        if (!icon) {
            icon = 'fas fa-question';
        }

        const product: ProductType = { id, name, icon };
        return product;
    }

    console.log(`${prefix} Default Parameters`);
    pineapple = createProductWithDefault('Pineapple', 'fas fa-pineapple');
    mango = createProductWithDefault('Mango');
    console.log(pineapple, mango);

    function buildAddress(street: string, city: string, ...restOfAddress: string[]): string {
        console.table(restOfAddress);
        const address = `${street}, ${city} ${restOfAddress.join(' ')}`;
        return address;
    }

    const someAddress = buildAddress('1 monkey d luffy', 'villa foosha', 'East Blue', 'Wano');
    console.log(`${prefix} Rest Parameters`);
    console.log(someAddress);
}