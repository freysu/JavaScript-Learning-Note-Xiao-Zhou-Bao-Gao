[toc]

## 数学函数

```
f(x) = 3x + 4;

当 x = 5 时；求 f(x)的值。

f(5)= 3\*5 + 4 = 19
```

5：实参

x：形参

```
f(x , y) = 3x + 4y + 5;

当 x = 2, y = 3 时；求 f(x , y)的值。

f(2 , 3)= 3\*2 + 4\*3 + 5 = 23

函数运行的结果是 23
```

## 函数概述

函数是一个可执行的语句块（通过`function`关键字声明）。

声明的时候不执行语句块，调用函数时执行。

_声明之后可以反复调用，提高代码的复用能力。_

`//声明函数 `

`function fun(){`

` //语句...`

`} `

`//调用函数`

`fun();`

## 传递参数

通过参数可以让函数的功能更具扩展性。

形参：声明函数的时候可以定义。

实参：调用函数的时候传递实参。

### 例子 - 一个参数

```js
//函数声明的语法
function fun(x) {
  var result = 3 * x + 4;
  console.log(result);
}
//调用函数
fun(5);
```

## 例子 - 两个参数

```js
//多个参数的函数
function fun1(x, y) {
  var result = 3 * x + 4 * y + 5;
  console.log(result);
}
//调用函数
fun1(2, 3);
```

### 例子 - 定义一个计算四则运算的函数

```js
function computed(n, m, op) {
  switch (op) {
    case "+":
      return n + m;
      break;
    case "-":
      return n - m;
      break;
    case "*":
      return n * m;
      break;
    case "/":
      return n / m;
      break;
  }
}
var result = computed(3, 5, "*");
console.log(result); //15
```

## 返回值

返回值表示函数运作之后的结果。

将返回值赋值给变量。

记住关键字 `return`

```js
function fun2(x, y) {
  var result = 3 * x + 4 * y + 5;
  return result;
}
console.log(fun2(2, 3));
```

### 例子 - 检查用户名、密码是否正确

如果用户名为 admin，密码为 123456，提示登录成功，否则登录失败

```js
//如果用户名为admin，密码为123456，提示登录成功，否则登录失败
function checkLogin(username, password) {
  if (username === "admin" && password === "123456") {
    return true;
  } else {
    return false;
  }
}
//定义存放结果的变量 result，通过 if 语句来判断 result 的真假再打印输出登录是否成功。
var result = checkLogin("admin", "123456");
//result 本来就是 boolean 值，所以不用写 result === true
//if (result === true){
if (result) {
  console.log("登录成功");
} else {
  console.log("登录失败");
}
```

## 理解函数

可以把函数理解为一个生产车间。传递进来的参数可以多个，但是返回值只有一个。

## 课后练习

### 1. 编写一个函数，参数为一个正整数 n，计算 1~n 所有正整数的加和。

```js
function allSum(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(allSum(100));
```

### 2. 编写一个函数，参数为一个正整数 n，计算 1~n 之间所有奇数。

```js
function printAllJishu(n) {
  for (var i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}
printAllJishu(100);
```

> 以上内容编写于 2021 年 8 月 14 日 00 点 48 分
