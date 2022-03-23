/*
Автопроверки 5.1
Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта.
*/

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// console.log(pizzaPalace.order("Smoked")); // "Order accepted, preparing «Smoked» pizza"
// console.log(pizzaPalace.order("Four meats")); // "Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order("Big Mike")); // "Sorry, there is no pizza named «Big Mike»"
// console.log(pizzaPalace.order("Viennese")); // "Sorry, there is no pizza named «Viennese»"


/*
Автопроверки 5.2
Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего 
сервиса доставки еды. Выполни рефакторинг методов объекта customer, расставив отсутствующие 
this при обращении к свойствам объекта.

После объявления объекта мы добавили вызовы методов в той последовательности, в которой твой 
код будут проверять тесты. Пожалуйста ничего там не меняй.
*/

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]



/*
Автопроверки 5.3
Тестировщики нашли баги в коде сервиса хранения истории заказов еды. 
Тебе необходимо исправить их, правильно расставив this в методах объекта historyService, чтобы методы начали работать правильно.
*/

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// console.log(historyService.getOrdersLog()); //возвращает строку с перечислением данных всех заказов из свойства orders
// console.log(historyService.getEmails()); // возвращает массив всех уникальных почтовых адресов из свойства orders
// console.log(historyService.getOrdersByEmail("solomon@topmail.net")); // [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net")); // [{ email: "artemis@coldmail.net", dish: "Pizza" }]



/*
Автопроверки 5.4
*/



/*
Автопроверки 5.5
*/



/*
Автопроверки 5.6
*/



/*
Автопроверки 5.7
*/



/*
Автопроверки 5.8
*/



/*
Автопроверки 5.9
*/



/*
Автопроверки 5.10
*/



/*
Автопроверки 5.11
*/



/*
Автопроверки 5.12
*/



/*
Автопроверки 5.13
*/



/*
Автопроверки 5.14
*/



/*
Автопроверки 5.15
*/



/*
Автопроверки 5.16
*/



/*
Автопроверки 5.17
*/



/*
Автопроверки 5.18
*/




/*
Автопроверки 5.19
*/




/*
Автопроверки 5.20
*/
