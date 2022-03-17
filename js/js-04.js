
/*
Автопроверки 4.3
Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом 
инлайн колбэк - функцию eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".
*/

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// //makePizza("Ultracheese");
// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`)
// });



/* 
Автопроверки 4.4
Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он 
принимал вторым и третим параметрами два колбэка onSuccess и onError.

Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать 
результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать 
результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.
*/

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {

//         if (this.pizzas.includes(pizzaName)) {

//             return console.log(onSuccess(pizzaName));
//         }
                
//         else return console.log(onError(`There is no pizza with a name ${pizzaName} in the assortment.`));  

//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError) // "Your order is accepted. Cooking pizza Smoked."
// pizzaPalace.order("Four meats", makePizza, onOrderError) // "Your order is accepted. Cooking pizza Four meats."
// pizzaPalace.order("Big Mike", makePizza, onOrderError) // "Error! There is no pizza with a name Big Mike in the assortment."
// pizzaPalace.order("Vienna", makePizza, onOrderError) // "Error! There is no pizza with a name Vienna in the assortment."



/* 
Автопроверки 4.5
Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, 
и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
*/

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//     console.log(`Array : ${orderedItems}`);

//     orderedItems.forEach(function (number, index) {
//         totalPrice += number;
//     });

//     console.log(`Total Price = ${totalPrice}`);
//   // Change code above this line
//   return totalPrice;
// }

// calculateTotalPrice([12, 85, 37, 4]) // 138
// calculateTotalPrice([164, 48, 291]) // 503
// calculateTotalPrice([412, 371, 94, 63, 176]) // 1116



/* 
Автопроверки 4.6
Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, 
в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach
*/



/* */



/* */



/* */



/* */



/* */



/* */



/* */



/* */


