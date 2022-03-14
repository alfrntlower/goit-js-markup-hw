
// Автопроверки 3.10
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи,
// а в массив values все значения его свойств

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];
// // Change code below this line

// for ( const key in apartment){
//     //console.log(key);
//     //console.log(apartment[key]);
//     keys.push(key);
//     values.push(apartment[key]);

// }

// console.log(keys);
// console.log(values);


// Автопроверки 3.10
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств 
// объекта в параметре object.Используй переменную propCount для хранения количества свойств объекта.

// function countProps(object) {
//   let propCount = 0;
    
//     console.log(object);
    
//     for (const key in object) {

//         if (object.hasOwnProperty(key)) {
//             console.log(key);
//             propCount += 1;
//             console.log(`Answer ${propCount}`);
//         }
        
//     }

//     return propCount;
// }

// countProps({}) // 0
// countProps({ name: "Mango", age: 2 }) // 2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) // 3



// Автопроверки 3.13
// Перебери объект apartment используя метод Object.keys() и цикл for...of.Запиши в переменную 
// keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения 
// его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);

// for ( const key of keys){
//     //console.log(key);
//     values.push(apartment[key]);
//    // console.log(apartment[key]);
// }
// console.log(values);



// Автопроверки 3.16
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это 
// имя сотрудника, а значение свойства это зарплата.Функция должна рассчитать общую сумму зарплат 
// сотрудников и вернуть её.Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
    
//     const arraySalary = Object.values(salaries);

//     console.log(arraySalary);

//     for (const salary of arraySalary) {
//         //console.log(salary);
//         totalSalary += salary;
    
// }

//     console.log(totalSalary);

//   return totalSalary;
// }

// countTotalSalary({}) // 0
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) // 330
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) // 400



// Автопроверки 3.18
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название
// продукта.Функция ищет объект продукта с таким именем(свойство name) в массиве products и возвращает 
// его цену(свойство price).Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
    
//     for (const product of products) {

//         //console.log(product);

//         if (product.name === productName) {
//             // console.log("FIIIIIIIND");
//             //console.log(product.price);
//             return product.price;

//         }
        
//     }

//     return null;

// }

// getProductPrice("Radar") // 1300.
// getProductPrice("Grip") // 1200.
// getProductPrice("Scanner") // 2700.
// getProductPrice("Droid") // 400.
// getProductPrice("Engine") // null.



// Автопроверки 3.19
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя(ключ)
// свойства.Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта 
// в массиве products.Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
    
//     const resultArray =[];
    
//     for (const product of products) {

//         if (product[propName]) {
//             resultArray.push(product[propName]);
// }  
//     }

//     return resultArray;

//   // Change code above this line
// }


// getAllPropValues("name") // ["Radar", "Scanner", "Droid", "Grip"]
// getAllPropValues("quantity") // [4, 3, 7, 9]
// getAllPropValues("price") // [1300, 2700, 400, 1200]
// getAllPropValues("category") // []



// Автопроверки 3.20
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр
// productName - название товара.Функция должна вернуть общую стоимость(цена * количество) товара 
// с таким именем из массива products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//     let totalPrice= 0;    

//     for (const product of products) {

//         //console.log(productName);
//         //console.log(product.name);

//         if (productName !== product.name) {
//             console.log("NOT OUR PRODUCT");
//             //return totalPrice;
//         }
//         else {
            
//             totalPrice = product.price * product.quantity;
//             console.log(totalPrice);
//             console.log("our product");
//             //return totalPrice;
//         }
    
        
//     }
//     return totalPrice;


//   // Пиши код выше этой строки
// }

// calculateTotalPrice("Blaster") // 0
// calculateTotalPrice("Radar") // 5200
// calculateTotalPrice("Droid") // 2800
// calculateTotalPrice("Grip") // 10800
// calculateTotalPrice("Scanner") // 8100


// Автопроверки 3.26
// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур 
// на два дня следующего формата.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией 
// деструктуризации свойств объекта forecast.

// function calculateMeanTemperature(forecast) {

//     const { today: { low: todayLow, high: todayHigh }, tomorrow : { low:tomorrowLow, high:tomorrowHigh} } = forecast;
    
// //   const todayLow = forecast.today.low;
// //   const todayHigh = forecast.today.high;
// //   const tomorrowLow = forecast.tomorrow.low;
// //   const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//     console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4);
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }) // 28.5
// calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } }) // 37



// Автопроверки 3.30
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. 
// В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority,
//     могут отсутствовать.Тогда, в новом объекте задачи, в свойствах category и priority должны 
//     быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// function makeTask(data) {
// // const completed = false;
// // const category = "General";
// // const priority = "Normal";
//   // Change code below this line
    
 
//     const { category="General", priority="Normal", text, completed = false } = data;
//     //const { text } = data;
    

//     console.log(category);
//     console.log(priority);
//     console.log(completed);

//     const newData = {category, priority, text, completed};
    
    
//     console.log(data);
//     console.log(newData);
//     return newData;
//   // Change code above this line
// }

//makeTask({}) // { category: "General", priority: "Normal", completed: false }
//makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) // { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
//makeTask({ category: "Finance", text: "Take interest" }) // { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
//makeTask({ priority: "Low", text: "Choose shampoo" }) // { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
//makeTask({ text: "Buy bread" }) // { category: "General", priority: "Normal", text: "Buy bread", completed: false }



// Автопроверки 3.31
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество
// аргументов, считала и возвращала их сумму.

// function add(...args) {

//   let sum = 0;
//   console.log(args);

//   for (const arg of args) {
//     sum += arg;
//   }
//   console.log(`Sum of all array elements = ${sum}`);

//   return sum;
//   // Change code above this line
// }

//  add(15, 27) // 42
//  add(12, 4, 11, 48) // 75
//  add(32, 6, 13, 19, 8) // 78
//  add(74, 11, 62, 46, 12, 36) // 241



// Автопроверки 3.32
// Функция addOverNum() считает сумму всех аргументов.Измени параметры и тело функции addOverNum() так,
// чтобы она считала сумму только тех аргументов, которые больше чем заданное число.Это число должно 
// быть первым параметром функции.

// function addOverNum(firstElement, ...args) {
//   let total = 0;

//   console.log(`Array = ${args}`);
//   console.log(`First element : ${firstElement}`);

//   for (const arg of args) {

//     if (firstElement < arg) {
//       //console.log(`Element ${arg} > ${firstElement}`);
//       total += arg;
//     }
    
//   }

//   console.log(`Total = ${total}`);
//   return total;
//   // Change code above this line
// }

// addOverNum(50, 15, 27) // 0
// addOverNum(10, 12, 4, 11, 48, 10, 8) // 71
// addOverNum(15, 32, 6, 13, 19, 8) // 51
// addOverNum(20, 74, 11, 62, 46, 12, 36) // 218



// Автопроверки 3.33
// Функция findMatches() принимает произвольное количество аргументов.Первым аргументом всегда будет массив чисел,
// а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная 
// со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив[1, 2], потому что только они есть 
// в массиве первого аргумента.

// function findMatches(array,...args) {
//   const matches = []; // Don't change this line

//   console.log(array);
//   console.log(args);

//   for (const element of array) {
    
//     for (const arg of args) {
      
//       if (element === arg) {
//         console.log(`MATCHES : ${arg}`);
//         matches.push(arg);
//     }

//     }

//   }

//   console.log(`New Array : ${matches}`);
//   // Change code above this line
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) // [1, 2]
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) // [17, 89, 2]
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) // [24, 9, 41]
// findMatches([63, 11, 8, 29], 4, 7, 16) // []



// Автопроверки 3.34
// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии 
// с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени.Возвращает строку "Deleting book <имя книги>",
// где < имя книги > это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на новое.Возвращает строку
// "Updating book <старое имя> to <новое имя>", где < старое имя > и < новое имя > это значения параметров 
// oldName и newName соотвественно.

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
  
//   getBooks() {
//     return "Returning all books";
//   },

//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },

//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },

//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   }

//   // Change code above this line
// };

// bookShelf.getBooks()  // "Возвращаем все книги"

// //Значение свойства bookShelf.addBook это метод объекта

// bookShelf.addBook("Haze") //  "Adding book Haze"

// //Значение свойства bookShelf.removeBook это метод объекта

// bookShelf.removeBook("Red sunset")  // "Deleting book Red sunset"

// //Значение свойства bookShelf.updateBook это метод объекта

// bookShelf.updateBook("Sands of dune", "Dune")  // "Updating book Sands of dune to Dune"



// Автопроверки 3.35
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в 
// свойстве books.Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы 
// заменить этот элемент

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line

//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
    
//     // Change code above this line
//   },
// };


// bookShelf.updateBook("Haze", "Dungeon chronicles"); // значение свойства books это массив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// bookShelf.updateBook("The last kingdom", "Dune") // значение свойства books это массив ["Dune", "Haze", "The guardian of dreams"]



// Автопроверки 3.38
// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line

//     this.potions.push(potionName);

//     // Change code above this line
//   },
// };

// atTheOldToad.addPotion("Invisibility") // ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
// atTheOldToad.addPotion("Power potion") // ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]


// Автопроверки 3.39
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line

//     console.log(`Frist Potions : ${this.potions}`);
//     const potionNameIndex = this.potions.indexOf(potionName);
//     console.log(`The index of the desired element :${potionNameIndex}`);

//     this.potions.splice(potionNameIndex, 1)

//    console.log(`New Potions : ${this.potions}`);
    
//     // Change code above this line
//   },
// };

// atTheOldToad.removePotion("Dragon breath") // ["Speed potion", Stone skin"]
// atTheOldToad.removePotion("Speed potion") // ["Stone skin"]



// Автопроверки 3.40
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line

//     console.log(`Frist Potions : ${this.potions}`);
//     const indexOldName = this.potions.indexOf(oldName);
//     console.log(`The index of the desired element :${indexOldName}`);

//     this.potions.splice(indexOldName, 1, newName);

//     console.log(`New Potions : ${this.potions}`);

//     // Change code above this line
//   },
// };

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")// ["Speed potion", "Polymorth", "Stone skin"]
// atTheOldToad.updatePotionName("Stone skin", "Invisibility")// ["Speed potion", "Polymorth", "Invisibility"]



// Автопроверки 3.41
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. 
// Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion(уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. 
// В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//   for (const key of this.potions) {
//       if (key.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//   }
    
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potionIndex = [i];
//       if (potionName === this.potions[i].name) {
//         this.potions.splice(potionIndex, 1);
//         return this.potions;
//       }
//     }
//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {

//     const array = [];

//     for (const key of this.potions) {
//       array.push(key.name);
      
//     }

//     const potionIndex = array.indexOf(oldName);
//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }
//     else {
//       this.potions[potionIndex].name = newName;
//       return this.potions;
//     }

//   },
//   // Change code above this line
// };


// atTheOldToad.getPotions() // [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 }) // в массиве potions последним элементом будет этот объект
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Power potion", price: 270 }) // в массиве potions последним элементом будет этот объект
// console.log(atTheOldToad.potions);

// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })// массив potions не изменяется
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 })// массив potions не изменяется
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })// "Error! Potion Dragon breath is already in your inventory!"
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 })// "Error! Potion Stone skin is already in your inventory!"
// console.log(atTheOldToad.potions);

// atTheOldToad.removePotion("Dragon breath")// [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// console.log(atTheOldToad.potions);
// atTheOldToad.removePotion("Speed potion")// [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")// [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")// [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
// console.log(atTheOldToad.potions);
