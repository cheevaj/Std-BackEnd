// let age = 18;
// console.log("let:", age);
// let blue = 0x0000ff;
// console.log("color:", blue);
// let pi = 3.14;
// console.log("pi:", pi);

// let first_name = "Chi";
// let last_name = "Vang";
// console.log("Name:", first_name + " " + last_name);

// let isReading = true;
// let isSleeping = false;

// console.log("R:", isReading, "S:", isSleeping);

// let value = null;
// console.log("Null:", value);

// let sym1 = Symbol("fool");
// console.log("sym1:", sym1);

// let myCar = new Object();
// myCar.make = "Ford";
// myCar.model = "Mustang";
// console.log("My Car:", myCar);
// console.log("My Car model:", myCar.model);
// // use case sample of \n
// console.log("Hello\nWorld");
// // use case sample of \r
// console.log("Hello\rWorld");
// // use case sample of \t
// console.log("Hello\tWorld");
// console.log("I 'm Chi");
// let name = "Chi";
// let Age = 25;
// console.log(`Name:${name} ,Age:${Age}`);

var obj = {
  name: "Chi",
  age: 25,
  isMarried: true
};
// console.log(`Name:${obj.name},Age:${obj.age},Status:${obj.isMarried ? 'Married' : 'Not Married'}`)

// function sayHello(name){
//     return `Hello, ${name}`
// }
// console.log(sayHello('Chee'))

// let sayHello1 = (name) => `Hello, ${name}`
// console.log(sayHello1('Chee'))
let {age, name,isMarried} = obj;
console.log(age,name,isMarried)


