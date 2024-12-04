type Pizza = {
  id: number;
  name: string;
  price: number;
}

type Address = {
  street: string;
  city: string;
  postCode: string;
}

type Order = {
  pizza: Pizza;
  status: 'ordered' | 'preparing' | 'cooking' | 'delivering' | 'completed';
  id: number;
}

const menu: Pizza[] = [
  {id: 1,name:"Margherita", price: 5.5},
  {id: 2, name:"Pepperoni", price: 6.5},
  {id: 3, name:"Hawaiian", price: 7.5},
  {id: 4, name:"Meat Feast", price: 8.5},
]
let nextOrderId : number = 1;
let nextPizzaId: number = 6;
let cashInRegister = 100;

const orderQueue: Order[] = []

const addNewPizza = (pizzaObj : Omit<Pizza,"id">) : Pizza => {
  const newPizza : Pizza = {id: nextPizzaId++, ...pizzaObj};
  //pizzaObj.id = nextPizzaId++;
  menu.push(newPizza);
  return newPizza;
}

function addToArray<T>(arr: T[], value: T): void {
  arr.push(value);
}

addToArray<Pizza>(menu, {id: 5, name: "Vegan Hog", price: 19.5});
addToArray<Order>(orderQueue, {pizza: menu[3], status: "preparing", id: nextOrderId++});


const placeOrder = (pizzaName:string) : Order | boolean => {
  const selectedPizza = menu.find(pizza => pizza.name === pizzaName);
  if (selectedPizza) {
    const order: Order = {pizza: selectedPizza, status: "ordered", id: nextOrderId++};
    orderQueue.push(order);
    cashInRegister += selectedPizza.price;
    return order;
  }
  return false
}

const completeOrder = (orderId:number) : Order | boolean => {

//modify an order to have a status of "completed"
  const order = orderQueue.find(order => order.id === orderId);
  if (order) {
    order.status = "completed";
    return order;
  }
  return false
}

//identifier variable can be number ID or string name
const getPizzaDetail = (identifier: number | string): Pizza | undefined => {
  if (typeof identifier === "number") {
    return menu.find(pizza => pizza.id === identifier);
  } else if (typeof identifier === "string") {
    return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
  }else{
    throw new TypeError("Identifier must be a number or string");
  }
}

addNewPizza({name: "Veggie Supreme", price: 9.5});
addNewPizza({name: "Vegan Margherita", price: 8.5});

placeOrder("Margherita");
completeOrder(1);

console.log(menu);
console.log(cashInRegister);
console.log(orderQueue);