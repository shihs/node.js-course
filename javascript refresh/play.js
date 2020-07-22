// https://medium.com/@realdennis/閒聊-var與let的懶人包-javascript-b5a3f40ee28d
// let v.s. var: 作用域不一樣，var的作用域(scope)在函數 (function) 裡，let的作用域(scope)則是在區塊 (block) 裡。
// var 在作用域(scope)可以被重複宣告， let / const 在作用域(scope)內重複宣告會報錯，暫時性死區
// var的作用域(scope)比let還要大，然而「蛋越大跨出步伐越容易扯到蛋」，當你使用var來宣告變數時，會遇到哪些操蛋的事，以及使用let後如何解決。

// var name = 'Jo';
// var age = 28;
// var hasHobbies = true;
let name = 'Jo';
let age = 28;
let hasHobbies = true;


// console.log(name);
// different ways of creating a function
// function summarizeUser(userName, userAge, userHobby) {
// const summarizeUser = function(userName, userAge, userHobby) {	
const summarizeUser = (userName, userAge, userHobby) => {		
	return (
		'Name is ' + 
		userName + 
		', age is ' + 
		userAge + 
		' and the user has hobbies: ' +
		userHobby
	);
};

// console.log(summarizeUser(name, age, hasHobbies));

// #=======================================================

// object
const person = {
	name: 'Jo',
	age: 28,
	// function
	greet() {
		console.log('Hi, I am ' +  this.name);
	}
};


// const printName = (personData) => {
// 	console.log(personData.name);
// };
// const printName = ({ name }) => {
// 	console.log(name);
// };

// printName(person);

// not working 
// const { name, age } = person;
// console.log(name, age);

// console.log(person)
// person.greet();


// const hobbies = ['Sports', 'Cooking'];

// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

// // console.log(hobbies)
// // for (let hobby of hobbies) {
// // 	console.log(hobby);
// // };

// // console.log(hobbies.map(hobby => {
// // 	return 'Hobby: ' + hobby;
// // }));


// // add a new element
// hobbies.push('Programming')
// console.log(hobbies);

// // copy the array
// // const copiedArray = hobbies.slice(); 
// const copiedArray = [...hobbies]; // 取出 hobbies 的 element 再將 element 塞回 [] 中
// console.log(copiedArray);

// console.log(person);
// const copiedPerson = {...person};
// console.log(copiedPerson);


// // 彈性給予 args 
// const toArray = (...args) => {
// 	return args;
// }

// console.log(toArray(1, 2, 3, 4));

// #=======================================================

// callback: https://matthung0807.blogspot.com/2019/05/javascript-callback-callback-function.html

// asynchronous code
// 同步(Synchronous)是指程式必須等待前面的程式執行完才能執行。
// 非同步(Asynchronous)是指程式不須等待前面的程式執行完就能執行。

// setTimeout(): Asynchronous, 第一個參數為時間到時要被執行的程式，第二個參數為要延遲的時間（毫秒）

setTimeout(() => {
	console.log('Timer is done!')
}, 1);

console.log('Hello');
console.log('Hi');














