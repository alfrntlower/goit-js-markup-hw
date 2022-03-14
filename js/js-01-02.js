

// const a = 5;
// const b = 7;

// const result = a + b;

// console.log(result);

// const ethRate = prompt("What is ETH rate now?");
// const ethQuantity = prompt("How many EHT do you have?");

// console.log(`ETH Rate = ${ethRate}`);
// console.log(`ETH Quantity = ${ethQuantity}`);

// const balance = ethRate * ethQuantity;

// console.log(`You have ${balance} USD`);


// if (balance > 1000) {
//     console.log("You are goog investor");
// } else {
//     console.log("You are LOH");
// }



// const name = prompt();
// const check = name.toLowerCase();


// console.log(check);

// let message = "Get best Sale offers now!"

// let result;

// message = message.toLowerCase();
// console.log(message);

// result = message.includes("sale");
// console.log(result);

// if (result === true) {
//     console.log("Get rid of sPaM emails. Our book in on sale!");
// }


// Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

// const fruits = ["apple", "plum", "pear", "orange"];

// const plumElement = "plum";
// const orangeElement = "orange";

// const plumIndex = fruits.indexOf(plumElement);
// console.log("index of plum:", plumIndex);

// const orangeIndex = fruits.indexOf(orangeElement);
// console.log("index of orange:", orangeIndex);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(`${[i]} : ${fruits[i]}`);

//     if (i === plumIndex) {
//         console.log(`find ${plumElement}`);
//         //fruits[i] = "peach";

//         fruits.splice(plumIndex, 1, "peach");
//     }

//     if (i === orangeIndex) {
//         console.log(`find ${orangeElement}`);
//         fruits[i] = "banana";
//     }
   
// }

// console.log(fruits);



// Автопроверки 2.11
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в 
//зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, 
//состоящую из слов разделённых только пробелами(параметр message) и цену гравировки одного 
//слова(параметр pricePerWord).

// const message = "JavaScript is in my blood";

// const pricePerWord = 10;

// let words;

// words =  message.split(" ");
// console.log(words);
  
// const countWords = words.length;

// console.log(countWords);

// const totalPrice = pricePerWord * countWords;

// console.log(totalPrice);



// Автопроверки 2.16
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со 
// всеми элементами двух исходных firstArray и secondArray.Параметр maxLength содержит максимально 
// допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива 
// длиной maxLength элементов.В противном случае функция должна вернуть новый массив целиком.


// const firstArray = ["Mango", "Poly"];
// const secondArray = ["Ajax", "Chelsea"];

// const maxLength = 3;

// let newArray = [0];

// newArray = firstArray.concat(secondArray);

// newArray = newArray.slice(0, maxLength);

// console.log(newArray);



// Автопроверки 2.18
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) 
// и возвращает сумму всех целых чисел от единицы и до этого числа.Например, если number равно 3,
// то сумма это 1 + 2 + 3, то есть 6.

// const number = 3;
// let total = 0;

// for (let i = 1; i <= number; i++) {
//     console.log(i);
//     total += i;

// }

// console.log(total);



// Автопроверки 2.20
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел,
// и рассчитывает общую сумму его элементов.Общая сумма элементов должна сохраняться в переменной
// total, которая возвращается, как результат работы функции.


// const order = [12, 85, 37, 4];

// let total = 0;

// for (let i = 0; i < order.length; i++) {
//     console.log(order[i]);

//     total += order[i];
// }

// console.log(total);



// Автопроверки 2.21
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только 
// из слов разделённых пробелом(параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   // Change code below this line
//     console.log(string);
    
//     let words = string.split(" ");
//     //console.log(words);

//     let longestWord = " ";

//     let longestLetters = 0;

//     longestWord = words[1].length;

//    // console.log(longestWord);

//     for (const word of words) {
        
//         //console.log(`Word : " ${word} " have - ${word.length} letters`);

//         if (word.length > longestLetters) {
//             longestLetters = word.length;
//             longestWord = word;
//             //console.log(longestWord);
//         }
//     }
//     return longestWord;

// }

//  //const string = "The quick brown fox jumped over the lazy dog";

// console.log(findLongestWord("Google do a roll"));



// Автопроверки 2.22 - обсудить с ментором ! ! !
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых 
// чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line

//     for (let i = min; i <= max; i++) {
//     //const numbers = numbers[i];

//     numbers.push(i);
//     console.log(` ${[i]} - ${numbers[i]}`);
 
// }
    
//   // Change code above this line
//   return numbers;
// }

// createArrayOfNumbers(29, 34);


// Автопроверки 2.23
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел(параметр numbers) 
// и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше 
// чем значение параметра value(число).

// function filterArray(numbers, value) {
//     console.log(numbers);
    
//     const newArray = [];
    
//     for (const number of numbers) {

//         if (number > value) {
//             newArray.push(number);
//         }
        
//     }

//     console.log(newArray);
//     return newArray;

// }

// filterArray([1, 2, 3, 4, 5], 3) // [4, 5]
// // filterArray([1, 2, 3, 4, 5], 4) // [5]
// // filterArray([1, 2, 3, 4, 5], 5) // []
// // filterArray([12, 24, 8, 41, 76], 38) // [41, 76]
// // filterArray([12, 24, 8, 41, 76], 20) // [24, 41, 76]



// Автопроверки 2.24
// Функция checkFruit(fruit) принимает строку с названием фрукта(параметр fruit), и проверяет 
// есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.


// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// checkFruit("plum") // true
// checkFruit("mandarin") // false
// checkFruit("pear") // true
// checkFruit("Pear") // false
// checkFruit("apple") // true



// Автопроверки 2.25
// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины 
// в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые 
// присутствуют в обоих исходных массивах.


// function getCommonElements(array1, array2) {
//   // Change code below this line
    
//     const newArray = [];

//     for (let element of array1) {
//         if (array1.includes(element) && array2.includes(element))
            
//             newArray.push(element);
        
//     }

//  // Change code above this line
//     return console.log(newArray);
// }



// getCommonElements([1, 2, 3], [2, 4]) // [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]) // [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) // [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) // [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]) // []


// Автопроверки 2.29
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start 
// до end.Чётным считается число которое делится на 2 без остатка(10 % 2 === 0).

// function getEvenNumbers(start, end) {
    
//     const array = [];
//     const newArray = [];

//     for (let i = start; i <= end; i++){
        
//        //console.log(i);

//         if (i % 2 === 0) {
//             //console.log("Четное");

//             newArray.push(i);
//         }
       
//     }

//     console.log(newArray);
//     return newArray;

// }

// getEvenNumbers(2, 5) // [2, 4]
// getEvenNumbers(3, 11) // [4, 6, 8, 10]
// getEvenNumbers(6, 12) // [6, 8, 10, 12]
// getEvenNumbers(8, 8) // [8]
// getEvenNumbers(7, 7) // []



// Автопроверки 2.32
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод 
// массива массив.includes(значение) - проверяет, есть ли в массиве array значение value,
//     возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать 
// метод массив.includes(значение).

// function includes(array, value) {
//   // Change code below this line

//     console.log(`Array "${array}" need to include "${value}"`);

//     for (let element of array) {
        
//         if (element === value) {
             
//             //return console.log(`This array have "${value}" : TRUE`);
//             return true;
//         }
        
//     }
    
//     //return console.log(`This array have "${value}" : FALSE`);
//     return false;

// }

// includes([1, 2, 3, 4, 5], 3) // true
// includes([1, 2, 3, 4, 5], 17) // false
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") // true
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") // false
// includes(["apple", "plum", "pear", "orange"], "plum") // true
// includes(["apple", "plum", "pear", "orange"], "kiwi") // false
