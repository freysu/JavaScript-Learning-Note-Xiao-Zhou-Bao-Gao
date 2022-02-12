// // 复习函数知识点
// function fun(n, m) {
//   return n + m;
// }
// let result1 = fun(10, 20);
// let result2 = fun(100, 200);
// console.log(result1);
// console.log(result2);
// // 函数声明提升
// function fun(n, m) {
//   return n + m;
// }

// //匿名函数，一个函数如果不需要多次调用那么可以写成匿名函数
// //例如setInterval的匿名函数，又叫回调函数，将匿名函数作为参数传递给另外一个函数或方法。
// setInterval(function () {
//   console.log("hello");
// }, 1000);
// //相当于
// function fun() {
//   console.log("hello");
// }
// setInterval(fun, 1000);

// //函数表达式，没有函数声明提升的特性。
// const fun = function (n, m) {
//   return n + m;
// };
// let result = fun(10, 20);
// console.log(result);

// //方法：属于某一对象的函数
// const cat = {
//   name: "miaomiao",
//   // sayName: function(){
//   //     console.log(this.name);
//   // }
//   // 简写
//   sayName() {
//     console.log(this.name);
//   },
// };
// cat.sayName();

// // 函数进阶
// // 1. 设置默认参数值
// // ES2015的语法可以为函数的参数设置默认值。
// // - 未传递参数和未设置默认参数值时
// function fun(n, m) {
//   console.log(n); // undefind
//   console.log(m); // undefind
//   return n + m;
// }
// let result = fun();
// // NaN: not a Number
// console.log(result); // NaN

// // - 未传递参数但设置默认参数值时
// function fun(n = 100, m = 200) {
//   console.log(n); // 100
//   console.log(m); // 200
//   return n + m;
// }
// let result = fun();
// console.log(result); // 300

// // - 传递参数也设置默认参数值时
// function fun(n = 100, m = 200) {
//   console.log(n); // 10
//   console.log(m); // 200
//   return n + m;
// }
// let result1 = fun(10);
// console.log(result1); // 210

// // 2. 立即执行函数
// // 功能：代码封装
// (function () {
//   let a = 10;
//   let b = 20;
//   console.log(a + b);
// })();

// console.log(a);

// // // 作用域链
// // e.g.1
// let str = "hello";

// function fun1() {
//   let str = "world";
//   console.log(str);
// }
// fun1(); // world
// console.log(str); // hello

// // e.g.2
// let str = "hello";

// function fun1() {
//   let str = "world";
//   let num = 10; //执行完成就会被销毁

//   function fun2() {
//     console.log(str); //world
//     console.log(num); //10
//   }
//   fun2();
// }
// fun1(); // world
// //         10
// console.log("num :" + num); ////执行完成就会被销毁 所以会报错。

// // 闭包
// function fun1() {
//   function fun2() {
//     console.log("I'm fun2");
//   }
//   return fun2;
// }
// const f = fun1(); //fun1的运行结果是fun2

// // 闭包
// // 利用闭包实现了代码的封装。
// // 闭包的特性： 内部函数未执行完，外部函数即使执行完成，外部函数中的变量也不会被销毁。
// function fun1() {
//   let n = 10;
//   let m = 20;

//   function fun2() {
//     return n + m;
//   }
//   return fun2;
// }
// const f = fun1(); //fun1的运行结果是fun2
// const result = f();
// console.log(result);

// // 代码封装
// // ES5 的一个模块化的语法。
// const module = (function () {
//   let a = 10;
//   let b = 20;

//   function add() {
//     return a + b;
//   }
//   return add;
// })();

// // 箭头函数
// //作用: 简化写法
// const fun = function (x) {
//   return x * x;
// };
// let result = fun(2);
// console.log(result);
// //简化
// const fun = (x) => {
//   return x * x;
// };
// //简化
// //         参数   返回值
// const fun = (x) => x * x;
// let result = fun(2);
// console.log(result);

// //每一秒输出一次名字
// const cat = {
//   name: "miaomiao",
//   // sayName() {
//   //     let self = this
//   //     setInterval(function () {
//   //         console.log(self.name);
//   //     }, 1000)
//   // }

//   sayName() {
//     //window调用的setInterval
//     setInterval(() => {
//       console.log(this.name);
//     }, 1000);
//   },
// };
// cat.sayName();
// // 箭头函数和普通函数的this指向不同
// // 普通函数指向的是调用该函数的对象.
// // 箭头函数:在哪里定义,this就指向谁.

/*
面向对象
*/

// // ES5构造函数
// function Dog(name, age) {
//   this.name = name;
//   this.age = age;
// }
// var dog = new Dog("旺柴", 2); // 创建了一个对象，狗类的实例。
// console.log(dog.name);

// // ES5 prototype
// function Dog(name, age) {
//   this.name = name;
//   this.age = age;
// }
// // 通过原型对象，为构造函数生成的对象赋予新的方法。
// Dog.prototype.sayName = function () {
//   console.log(`我的名字是${this.name}`);
// }
// var dog = new Dog("旺柴", 2); // 创建了一个对象，狗类的实例。
// var bigDog = new Dog("二哈", 3);
// dog.sayName();
// bigDog.sayName();

// // var arr = [1,2,3];
// var arr = new Array(1, 2, 3, 4, 5);
// Array.prototype.sayHello = function () {
//   console.log(`我是一个数组，我的长度是${this.length}`);
// }
// arr.sayHello();

// // ES5 原型链（继承）
// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.sayName = function () {
//   console.log(`你好，我是${this.name}`);
// }

// Animal.prototype.sayHello = function () {
//   console.log("hello");
// }

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype = new Animal();

// var dog = new Dog("旺柴");
// dog.sayName();
// dog.sayHello();

// //ES2015 面向对象语法 class 关键字
// class Dog {
//   //ES2015的构造函数
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayName() {
//     console.log(`我是${this.name}`);
//   }
// }
// let dog = new Dog("旺柴", 2);
// dog.sayName();

// // ES2015 继承
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   sayName() {
//     console.log(`我是${this.name}`);
//   }

// }
// // ES2015 继承 extends关键字
// class Dog extends Animal {}

// let dog = new Dog("旺柴");
// dog.sayName();

// // ES2015 继承
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   sayName() {
//     console.log(`我是${this.name}`);
//   }

// }
// // ES2015 继承 extends关键字
// class Dog extends Animal {
//   constructor(name, age) {
//     //父级的属性 super关键字
//     super(name);
//     // 子级的就用this 关键字
//     this.age = age;
//   }
// }

// let dog = new Dog("旺柴", 2);
// dog.sayName(); //我是旺柴
// console.log(dog.age); //2

// // 作业1
// Date.prototype.dateFormate = function () {
//   let nowYear = this.getFullYear();
//   let nowMonth = this.getMonth();
//   let nowDay = this.getDate();
//   return `${nowYear}年${nowMonth + 1}月${nowDay}日`;
// }

// let nowDate = new Date("2021-9-2");
// let result = nowDate.dateFormate();
// console.log(result);

// // 作业2
// // ES5
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.getInformation = function () {
//   console.log(`我是${this.name}`);
// }

// function Student(name) {
//   this.name = name;
// }
// Student.prototype = new Person();

// function Teacher(name) {
//   this.name = name;
// }
// Teacher.prototype = new Person();

// var aMan = new Person("hh");
// var aStu = new Student("szf");
// var aTea = new Teacher("aaa");

// aMan.getInformation();
// aStu.getInformation();
// aTea.getInformation();

// //ES2015
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   getInformation() {
//     console.log(`我是${this.name}`);
//   }
// }

// class Student extends Person {
//   constructor(name) {
//     super(name);
//   }
// }

// class Teacher extends Person {
//   constructor(name) {
//     super(name);
//   }
// }

// let aPerson = new Person("s");
// let aStu = new Student("sb");
// let aTea = new Teacher("w");
// aPerson.getInformation();
// aStu.getInformation();
// aTea.getInformation();
