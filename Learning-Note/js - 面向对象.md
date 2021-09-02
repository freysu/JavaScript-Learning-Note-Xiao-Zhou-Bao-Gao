[toc]

## 面向对象概述

面向对象是一种编程思想，这种编程思想可以当做一个学科来研究。

除了 JavaScript，例如 C++、Java、Python、PHP 等等编程语言都可以使用这种面向对象的编程思想来开发应用程序。

## 基本概念

类：类型、模板、统称。（狗类、鸟类）

对象：是类的一个实例，会具体到某一个事物上（天上飞的那只鸟，我加的那只猫）

继承：狗类继承至哺乳动物类，猫类也继承至哺乳动物类，继承后，子类可以使用父类的属性和方法。

## 新语法与旧语法

ES5 面向对象语法（prototype）

ES6(2015) 面向对象语法

## ES5 面向对象的知识

构造函数：用于创建对象的函数。

原型对象：prototype

原型链：实现继承

### ES5 构造函数

构造函数的函数名，首字母大写

构造函数是用来创建对象用的。

`function Dog(){}`

```js
// 构造函数
function Dog(name, age) {
  this.name = name;
  this.age = age;
}
var dog = new Dog("旺柴", 2); // 创建了一个对象，狗类的实例。
console.log(dog.name);
```

### 原型对象

通过设置构造函数的`prototype`属性，可以扩展构造函数生成的对象。
通过原型对象，为构造函数生成的对象赋予新的方法。

`Dog.prototype.sayName = function () {};`
`Array.prototype.sayHello = function () {`
`console.log(你好，我的长度是${this.length}!);`
`}`
`let arr = [1, 2, 3, 4, 5, 1, 2, 3];`
`arr.sayHello();`

```js
function Dog(name, age) {
  this.name = name;
  this.age = age;
}
Dog.prototype.sayName = function () {
  console.log(`我的名字是${this.name}`);
};
// 创建了一个对象，狗类的实例。
var dog = new Dog("旺柴", 2);
var bigDog = new Dog("二哈", 3);
dog.sayName();
bigDog.sayName();
```

### 原型链（继承）

`Dog.prototype = new Animal()`

```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.sayName = function () {
  console.log(`你好，我是${this.name}`);
};

Animal.prototype.sayHello = function () {
  console.log("hello");
};

function Dog(name) {
  this.name = name;
}

Dog.prototype = new Animal();

var dog = new Dog("旺柴");
dog.sayName();
dog.sayHello();
```

> 以上内容编写于 2021 年 8 月 31 日 0 点 30 分。

## ES2015 面向对象语法

ES2015 支持类的概念。

### Class 关键字

`constructor `(ES2015 的构造函数)

```js
class Dog {
  //ES2015的构造函数
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(`我是${this.name}`);
  }
}

let dog = new Dog("旺柴", 2);
dog.sayName();
```

### 继承

`extends `关键字

`super`

①

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(`我是${this.name}`);
  }
}
// ES2015 继承 extends关键字
class Dog extends Animal {}

let dog = new Dog("旺柴");
dog.sayName();
```

②

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(`我是${this.name}`);
  }
}
// ES2015 继承 extends关键字
class Dog extends Animal {
  constructor(name, age) {
    //父级的属性 super关键字
    super(name);
    // 子级的就用this 关键字
    this.age = age;
  }
}

let dog = new Dog("旺柴", 2);
dog.sayName(); //我是旺柴
console.log(dog.age); //2
```

## 课后练习

### 1. 扩展 Date 对象实现如下功能，实现 dateFormate 方法，返回值是“xxxx 年 xx 月 xx 日”；

```js
Date.prototype.dateFormate = function () {
  let nowYear = this.getFullYear();
  let nowMonth = this.getMonth();
  let nowDay = this.getDate();
  return `${nowYear}年${nowMonth + 1}月${nowDay}日`;
};

let nowDate = new Date("2021-9-2");
let result = nowDate.dateFormate();
console.log(result);
```

### 2. 定义一个 Person 类，让 Student 类和 Teacher 类继承 Person，为 Person 类添加 getInformation 方法，使 Student 类和 Teacher 类都可以通过此方法获取个人信息。

ES5

```js
function Person(name) {
  this.name = name;
}
Person.prototype.getInformation = function () {
  console.log(`我是${this.name}`);
};

function Student(name) {
  this.name = name;
}
Student.prototype = new Person();

function Teacher(name) {
  this.name = name;
}
Teacher.prototype = new Person();

var aMan = new Person("hh");
var aStu = new Student("szf");
var aTea = new Teacher("aaa");

aMan.getInformation();
aStu.getInformation();
aTea.getInformation();
```

ES2015

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  getInformation() {
    console.log(`我是${this.name}`);
  }
}

class Student extends Person {
  constructor(name) {
    super(name);
  }
}

class Teacher extends Person {
  constructor(name) {
    super(name);
  }
}

let aPerson = new Person("s");
let aStu = new Student("sb");
let aTea = new Teacher("w");
aPerson.getInformation();
aStu.getInformation();
aTea.getInformation();
```

> 以上内容编写于 2021 年 9 月 1 日 01 点 50 分。
