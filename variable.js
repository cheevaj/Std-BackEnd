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

// var obj = {
//   name: "Chi",
//   age: 25,
//   isMarried: true
// };
// let {age, name,isMarried} = obj;
// console.log(age,name,isMarried ? 'Married':'Not Married')
// console.log(`Name:${obj.name},Age:${obj.age},Status:${obj.isMarried ? 'Married' : 'Not Married'}`)

// function sayHello(name){
//     return `Hello, ${name}`
// }
// console.log(sayHello('Chee'))

// let sayHello1 = (name) => `Hello, ${name}`
// console.log(sayHello1('Chee'))

// let arr = ['chi',15,23];
// let [name , age1,age2] = arr;
// console.log(name , age1,age2)

// let arr = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];
// let arr3 = [...arr,...arr2];
// console.log(arr3)

// let obj = {name:'chi',age:25}
// let obj2 = {married:true};
// let obj3 = {...obj,...obj2};
// console.log(obj3)

// function getName(...args){
//     return args.join(' ');
// }
// console.log(getName('Jonh', 'Doe'))
// console.log(getName(18))

// function getNum(a=1,b=2,c){
//     console.log(a,b,c)
// }
// getNum();
// getNum(4,5,0)

// let obj = [{name:'chi',age:24},{name:'chi1',age:25},{name:'chi2',age:26}];
// console.log(obj[1].name)

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// let arrLoop = [1,2,3,4,5];
// arr.forEach((value,index)=>{
//     console.log(value,index)
// })

// let arrLoop = [1,2,3,4,5];
// for (let value of arrLoop){
//     console.log(value)
// }

// let obj = {
//   name: "Chi",
//   age: 25,
//   isMarried: true,
// };
// for (let key in obj) {
//   console.log(key + ":", obj[key]);
// }

// let arrPush = [1,2,3,4,5,6,7];
// arrPush.push(8,9)
// console.log(arrPush)
// arrPush.pop()
// console.log(arrPush)
// arrPush.unshift(0);
// console.log(arrPush);
// arrPush.shift();
// console.log(arrPush)
let arrPush1 = [1,2,3,4,5,6,7];
let arrPush2 = [9,10,11,12];
// console.log(arrPush1.concat(arrPush2));
// console.log(arrPush1.slice(1,3));
// console.log(arrPush1.splice(1,4));
// console.log(arrPush1.copyWithin(0,2))
console.log(arrPush1.reverse())
console.log(arrPush1.sort())
