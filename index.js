var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var menu = [
    { id: 1, name: "Margherita", price: 5.5 },
    { id: 2, name: "Pepperoni", price: 6.5 },
    { id: 3, name: "Hawaiian", price: 7.5 },
    { id: 4, name: "Meat Feast", price: 8.5 },
];
var nextOrderId = 1;
var nextPizzaId = 6;
var cashInRegister = 100;
var orderQueue = [];
var addNewPizza = function (pizzaObj) {
    var newPizza = __assign({ id: nextPizzaId++ }, pizzaObj);
    //pizzaObj.id = nextPizzaId++;
    menu.push(newPizza);
    return newPizza;
};
function addToArray(arr, value) {
    arr.push(value);
}
addToArray(menu, { id: 5, name: "Vegan Hog", price: 19.5 });
addToArray(orderQueue, { pizza: menu[3], status: "preparing", id: nextOrderId++ });
var placeOrder = function (pizzaName) {
    var selectedPizza = menu.find(function (pizza) { return pizza.name === pizzaName; });
    if (selectedPizza) {
        var order = { pizza: selectedPizza, status: "ordered", id: nextOrderId++ };
        orderQueue.push(order);
        cashInRegister += selectedPizza.price;
        return order;
    }
    return false;
};
var completeOrder = function (orderId) {
    //modify an order to have a status of "completed"
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (order) {
        order.status = "completed";
        return order;
    }
    return false;
};
//identifier variable can be number ID or string name
var getPizzaDetail = function (identifier) {
    if (typeof identifier === "number") {
        return menu.find(function (pizza) { return pizza.id === identifier; });
    }
    else if (typeof identifier === "string") {
        return menu.find(function (pizza) { return pizza.name.toLowerCase() === identifier.toLowerCase(); });
    }
    else {
        throw new TypeError("Identifier must be a number or string");
    }
};
addNewPizza({ name: "Veggie Supreme", price: 9.5 });
addNewPizza({ name: "Vegan Margherita", price: 8.5 });
placeOrder("Margherita");
completeOrder(1);
console.log(menu);
console.log(cashInRegister);
console.log(orderQueue);
