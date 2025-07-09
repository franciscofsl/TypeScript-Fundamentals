import { productsURL, FoodProduct, customersURL } from '../lib';

const prefix = '🐉 ';

interface HasId {
  id: number;
}

class GenericModel<T extends HasId> { // like c# public class Repository<T> where T : IHasId
  public items: T[] | undefined;
  constructor(public url: string) { }

  async getItems(): Promise<T[]> {
    this.items = await getList<T>(this.url);
    return this.items;
  }

  getItemById(id: number): T | undefined {
    return this.items ? this.items.find((p) => (id === p.id)) : undefined;
  }
}

const foodModel = new GenericModel<FoodProduct>(productsURL);

export default async function updateOutput(id: string = 'output') {
  // const products = await getProducts();
 //  const products = await getList<FoodProduct>(productsURL);
  const products = await foodModel.getItems();

  const output = document.querySelector(`#${id}`);
  const html = layoutProducts(products);

  if (output && html) {
    output.innerHTML = html;
  }
}

function layoutProducts(products: FoodProduct[]): string {
  const items = products.map(({ id, name, icon }) => {
    const productHtml = `
    <span class="card-id">#${id}</span>
      <i class="card-icon ${icon} fa-lg"></i>
    <span class="card-name">${name}</span>
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

async function getProducts(): Promise<FoodProduct[]> {
  const response: Response = await fetch(productsURL);
  const products: FoodProduct[] = await response.json();
  return products;
}

async function getList<T>(url: string): Promise<T[]> {
  const response: Response = await fetch(url);
  const items: T[] = await response.json();
  return items;
}

/************************************************
 * Learning sample code.
 ***********************************************/

runTheLearningSamples();

async function runTheLearningSamples() {
  function whatIsIt_number(arg: number): number {
    return arg;
  }

  console.log(prefix + ' Generics Overview');
  console.log(whatIsIt_number(42)); 

   function whatIsIt_string(arg: string): string {
    return arg;
  }
  console.log(whatIsIt_string("String value")); 

  function whatIsIt_typed<T>(arg: T): T {
    return arg;
  }

  let n = whatIsIt_typed<number>(56);
  let s: string = whatIsIt_typed<string>("Hello, TypeScript!");
  let b: boolean = whatIsIt_typed<boolean>(true);
  console.log(n,s,b);


  interface Customer{
    id: number;
    name: string;
  }

  async function getData(){
    console.log(prefix + ' Generics Functions');
    
    const products = await getList<FoodProduct>(productsURL);
    console.table(products);

    const customers = await getList<Customer>(customersURL);
    console.table(customers);

  }
  await getData();

  interface Model<T>{
    items: T[] | undefined;
    getItems: () => Promise<T[]>;
    getItemById: (id: number) => T | undefined;
  }

  class FoodModel implements Model<FoodProduct> {
    public items: FoodProduct[] | undefined;

    constructor(public url: string) {}

    async getItems(): Promise<FoodProduct[]> {
      this.items = await getList<FoodProduct>(this.url);
      return this.items;
    }

    getItemById(id: number): FoodProduct | undefined {
      return this.items ? this.items.find((p) => (id === p.id)) : undefined;
    }
  }

  const foodModel = new FoodModel(productsURL);
  const foodProducts = await foodModel.getItems();
  
  console.log(prefix + ' Generics Classes');  
  console.table(foodProducts);


  const genericFoodModel = new GenericModel<FoodProduct>(productsURL);
  const genericCustomersModel = new GenericModel<Customer>(customersURL);

  await genericFoodModel.getItems();
  await genericCustomersModel.getItems();

  console.log(prefix + ' Generics Classe');
  console.table(genericFoodModel.items);
  console.table(genericCustomersModel.items);
}

