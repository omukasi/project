// // Homework1
// let userName = "Jonh";
// let usenNumber = 25;
// userNumber = 24;

// let number = 4;
// let word = "Hello";
// let boolean = true;

// const obj = {
// 	name: "Jonh",
// 	age: 25,
// 	isMarried: false
// };

// console.log (obj.name);

// let arr = ["plum.png", "orange.jpg", "apple.bmp", 6, {}, []];
// console.log(arr[1]);


// // Homework2
// let storeName = "Koketka";
// const storeDescription = {
// 	budget: 1000,   
// 	employees: ["Petr", "Olga", "Dima"],
// 	products: {
// 		lemon: 25.55,
// 		orange: 34.33
// 	},
// 	open: true
// };

// Общение с пользователем

// alert("Hello");   //Cообщение просто всплывет при открытии страницы, как уведомление

// const result = confirm("Are you here?"); //при открытии страницы всплывет нотификация , где можно согласиться или не согласиться
// console.log(result); //true/false

// const answer = prompt("Are you 18?", "18"); //всплывет нотификация с возможностью ввести ответ
// console.log(answer); //в консоли выведется то , чо ввел пользователь

const answer = [];

answer[0] = prompt("What is your name?", "");
answer[1] = prompt("How old are you?", "");
answer[2] = prompt("What is your surname?", "");

console.log(typeof(answer));

const category = "toys";

console.log(`https://someyrl.com/${category}/5`);

const user = "Ivan";
alert(`Hello, ${user}`);

let incr = 10,
	decr = 10;
incr++;
decr--;

console.log(incr);
console.log(decr);

let number = 5;
let stringNumber = "8";
console.log(number + +stringNumber);