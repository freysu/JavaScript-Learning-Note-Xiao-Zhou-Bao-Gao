[toc]

## 语句块

多条 JS 语句组成的语句，用大括号括起来，就是一个语句块。

```js
{
  var str = "hello world";
  console.log(str);
}
```

## 控制流程

程序执行流程主要分为三种：

1. 按顺序执行

2. 按条件执行

3. 循环执行

_注：此前学习的内容都是按顺序执行。以下是条件执行。_

### 按顺序执行

```js
var num1 = 10,
  num2 = 20;
var result = num1 + num2;
console.log(result); //30
```

### 按条件执行

#### 条件运算符

**条件（三元）运算符**是 JavaScript 仅有的使用三个操作数的运算符。一个条件后面会跟一个问号（?），如果条件为 `truthy `，则问号后面的表达式 A 将会执行；表达式 A 后面跟着一个冒号（:），如果条件为`falsy`，则冒号后面的表达式 B 将会执行。本运算符经常作为 `if` 语句的简捷形式来使用。

`boolean ? value1 : value2`

#### if 语句

分支语句

根据 if 后面的条件，决定是否执行后面的语句块。

Boolean：真 / 假

- if

  `if (boolean) {`

  ``//语句块`

  `}`

- if - else

  `if (boolean) {`

  `` //语句块1`

  ` } else {`

  `//语句块2`

  `}`

##### 最简单的例子

```js
if (true) {
  console.log("hello world1"); //打印
}
if (false) {
  console.log("hello world2"); //不打印
}
```

##### 例子 - 判断算术运算符

```js
var num1 = 10,
  num2 = 20,
  op = "+";
if (op === "+") {
  var result = num1 + num2;
  console.log(result); //30
}
//--------------------------------------
var num1 = 10,
  num2 = 20,
  op = "-";
//不执行，因为op不是加号。
if (op === "+") {
  var result = num1 + num2;
  console.log(result);
}
//--------------------------------------
var num1 = 10,
  num2 = 20,
  op = "/";
if (op === "+") {
  var result = num1 + num2;
  console.log(result);
} else if (op === "-") {
  var result = num1 - num2;
  console.log(result);
} else if (op === "*") {
  var result = num1 * num2;
  console.log(result);
} else if (op === "/") {
  var result = num1 / num2;
  console.log(result);
} else {
  console.log("请输入正确的操作符");
}

//--------------------------------------
//虽然能实现功能，但是浪费性能。最好不要写这种。
var num1 = 10,
  num2 = 20,
  op = "/";
if (op === "+") {
  var result = num1 + num2;
  console.log(result);
}
if (op === "-") {
  var result = num1 - num2;
  console.log(result);
}
if (op === "*") {
  var result = num1 * num2;
  console.log(result);
}
if (op === "/") {
  var result = num1 / num2;
  console.log(result);
}
```

##### 例子 - 判断两个数的大小

```js
var num1 = 10,
  num2 = 20;
if (num1 > num2) {
  console.log("num1 大于 num2");
} else {
  console.log("num1 小于或等于 num2");
}

//条件运算符，可以简化 if 语句
//          Boolean   ？ value1          :  value2
var str = num1 > num2 ? "num1 大于 num2" : "num1 小于或等于 num2";
// var str = (num1 > num2) ? "num1 大于 num2" : "num1 小于或等于 num2";
console.log(str);
```

##### 相关基础题 - 求 c 的值，a 的值。

```js
var a = 1,
  b = 2;
var c = b > 1 ? a++ : 0;
//先判断b是否大于1，因为结果是真，所以执行a++。
//又因为a++是先运算后加，所以此时的a还是1，所以把1赋值给c.
console.log(c); // c = 1
console.log(a); // a = 2
```

#### switch 语句

分支语句

可以实现多重选择，某些情况相对于 if 语句更简洁。

`switch (表达式) {`

`case 值1: 语句1; break;`

`case 值2: 语句2; break; `

`case 值3: 语句3; break; `

`default: 语句4; `

`}`

##### 例子 - 判断算术运算符

```js
var num1 = 10,
  num2 = 20,
  op = "+";
switch (op) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log("请输入正确的操作符");
}
```

> 以上为 2021 年 8 月 12 日学习内容。

### 循环执行

#### while

根据条件循环

`while(){`

` 语句;`

` 语句;`

` //根据需要在此放置更多语句`

``}`

##### 例子 - 死循环

```js
//小心使用
while (true) {
  console.log("hello world");
}
```

##### 例子 - 打印输出 1-10

```js
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

##### 例子 - 计算 100 以内所有正整数的加和

```js
// 直接计算
var n1 = 1,
  n2 = 100;
var result = (n1 + n2) * 50;
console.log(result);

// while循环
var i = 1,
  sum = 0;
while (i <= 100) {
  sum += i; //sum = sum + i;
  i++;
}
console.log(sum);
```

##### **例子 -** 在控制输出 100 以内所有奇数

```js
var i = 0;
while (i <= 100) {
  if (i % 2 === 1) {
    console.log(i);
  }
  i++;
}
```

#### do...while...

先执行一个语句块，然后再根据条件循环。

一定会执行 do 语句块，是否是循环执行就取决于 while 条件。

##### 例子 - 打印输出 1-10

```js
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
```

##### do...while...与 while 的区别

前者至少会执行一次，后者可能一次都不执行

#### for

根据条件循环。

大部分情况下，while 与 for 是可以互换的。

##### 例子 - 打印输出 1-10

```js
//   计数器的初值  条件    自加自减类的操作js
for (var i = 0; i < 10; i++) {
  console.log(i);
}
```

##### 例子 - 计算 100 以内所有正整数的加和

```js
var sum = 0;
for (var i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);
```

##### 例子 - 输出 100 以内的奇数

```js
for (var i = 0; i < 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
```

#### 中断循环

- break

  _跳出本次循环并且结束后续的循环_

  ```js
  for (var i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
    console.log(i);
  }
  //1
  //2
  //3
  //4
  ```

- continue

  _跳出本次循环但不结束后续的。_

  ```js
  for (var i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
    console.log(i);
  }
  //1
  //2
  //3
  //4
  //6
  //7
  //8
  //9
  //10
  ```

## 课后练习

### 1. 输出 100 以内所有奇数。

```js
//for
for (var i = 0; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
```

```js
//do...while...
var i = 0;
do {
  if (i % 2 === 1) {
    console.log(i);
  }
  i++;
} while (i <= 100);
```

```js
//while
var i = 0;
while (i <= 100) {
  if (i % 2 === 1) {
    console.log(i);
  }
  i++;
}
```

### 2. 计算 100 以内所有正整数加和。

```js
//for
var sum = 0;
for (i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);
```

```js
//do...while...
var i = 1,
  sum = 0;
do {
  sum += i;
  i++;
} while (i <= 100);
console.log(sum);
```

```js
//while
var i = 1,
  sum = 0;
while (i <= 100) {
  sum += i;
  i++;
}
console.log(sum);
```

> 以上内容编写于 2021 年 8 月 13 日 16 点 48 分。
