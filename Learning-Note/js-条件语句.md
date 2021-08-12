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

```js
//最简单的例子
if (true) {
  console.log("hello world1"); //打印
}
if (false) {
  console.log("hello world2"); //不打印
}
```

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

##### 条件运算符

**条件（三元）运算符**是 JavaScript 仅有的使用三个操作数的运算符。一个条件后面会跟一个问号（?），如果条件为 `truthy `，则问号后面的表达式 A 将会执行；表达式 A 后面跟着一个冒号（:），如果条件为`falsy`，则冒号后面的表达式 B 将会执行。本运算符经常作为 `if` 语句的简捷形式来使用。

`boolean ? value1 : value2`

```js
//if语句的应用场景。假如要判断两个数的大小
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

相关基础题

```js
//求c的值，a的值。
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

```js
//switch语句,一对一比较的情况。
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

### 循环执行

