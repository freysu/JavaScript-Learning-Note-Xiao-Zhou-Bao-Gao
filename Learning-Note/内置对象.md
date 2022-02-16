[toc]

## 内置对象概述

JavaScript 语言中提供了一些对象，让开发人员可以使用一些现成的功能。

## 常用的内置对象

- [Array - 数组](./js - 数组.md)

- Math - 数学

- Date - 日期

- RegExp - 正则表达式

### Math 对象

常用的方法

- `Math.floor()` : 向下取整

  去掉数值类型数据的小数部分，只保留整数部分。

  ```js
  var number = 3.14;
  var result = Math.floor(number);
  console.log(result); // 3
  ```

  ```js
  var number = 3.99;
  var result = Math.floor(number);
  console.log(result); // 3 不是四舍五入
  ```

  负数情况时，去掉小数部分，然后在整数部分减 1。

  ```js
  var number = -3.99;
  var result = Math.floor(number);
  console.log(result); // -4
  ```

- `Math.random()` : 获取 0~1 之间的随机数

  ```js
  var result = Math.random();
  console.log(result);
  ```

- `Math.abs()` : 绝对值

  ```js
  var number = -3.99;
  var result = Math.abs(number);
  console.log(result); // 3.99
  ```

- `Math.sqrt()` : 开方

  ```js
  var number = 9;
  var result = Math.sqrt(number);
  console.log(result); // 3
  ```

  ```js
  var number = 16;
  var result = Math.sqrt(number);
  console.log(result); // 4
  ```

- `Math.pow()` : 乘方

  `Math.pow(m,n)`中 m 底数，n 次方

  ```js
  var number = 2;
  var result = Math.pow(number, 4);
  console.log(result); // 16 2^4
  ```

#### 获取指定范围的随机数

##### 例子 - 如何获取 1-10 的随机数？

首先获取一个 0\~1 的随机数，`Math.random()`。

然后乘以 10，即 0\~10，`Math.random() * 10`。

又因为要从 1 开始，所以要再加 1，即 1\~11，`Math.random() * 10 + 1`。

但因为要的是整数，所以要向下取整，这样就不用担心会出现大于 10 的整数，`Math.floor(Math.random() * 10 + 1)`。

```js
var number = Math.floor(Math.random() * 10 + 1);
console.log(number);
```

扩展成一个公式 **Math.floor(Math.random() \* X + Y)**

X 指的是想取到 x 的随机数，y 指的是从 y 开始，不设时默认为 0

例如随机获取星期 1\~7,即 1~7 的整数

```js
var number = Math.floor(Math.random() * 7 + 1);
console.log(number);
```

##### 例子 - 针对下面的成员列表，随机选择一个人在控制台输出。

让随机数设成下标。

5 个超级英雄，他们的索引——0，1，2，3，4，即要生成 0\~5 之间的随机数,因为要向下取整，所以要 4+1。

因为数组的长度可能会变，所以要生成 0 \~ `list.length`之间的随机数。

```js
var list = ["钢铁侠", "绿巨人", "美国队长", "蜘蛛侠", "雷神"];
var index = Math.floor(Math.random() * list.length);
console.log(list[index]);
```

### Date 对象

`var d = new Date();`

Date() 不设参数时就是显示当前的星期 月 日 年 时：分：秒 时区

```js
var d = new Date();
console.log(d); // Mon Aug 16 2021 16:05:27 GMT+0800 (香港标准时间)
```

`var d_target = new Date("2021-1-1");`

自己设置时间

```js
var d1 = new Date("2021-1-1 12:00:30");
console.log(d1); // Fri Jan 01 2021 12:00:30 GMT+0800 (香港标准时间)
```

`d.getFullYear();`

获取年份

```js
var year = d.getFullYear(); //获取年份
console.log(year); // 2021
```

`d.getMonth();`

获取月份

```js
var month = d.getMonth();
console.log(month); // 7 实际上现在是8月 因为获取的月份是从0开始的 1月是0
```

自己设置时间，2021 年 1 月 1 日，1 月是 0

```js
var d1 = new Date("2021-1-1");
var month = d1.getMonth();
console.log(month); // 0 1月是0
```

`d.getDate();`

获取日期

```js
var date = d.getDate(); //获取日期
console.log(date);
```

`d.getHours();`

获取小时

`d.getMinutes();`

获取分钟

`d.getSeconds();`

获取秒数

``d.getTime(); `

获取时间戳。**时间戳是指格林威治时间 1970 年 01 月 01 日 00 时 00 分 00 秒起至现在的总毫秒数。**

应用场景：可用于计算时间的差值。

```js
var time = d.getTime();
console.log(time); // 1629102337282
```

#### 例子 - 打印显示当前时间

```js
var d = new Date();
var hours = d.getHours(); //获取小时
var minutes = d.getMinutes(); //获取分钟
var seconds = d.getSeconds(); //获取秒钟
console.log(hours + ":" + minutes + ":" + seconds); //打印显示当前时间
```

## 计时器方法 `setInterval`

`setInterval(function(){},ms);`

第一个参数：可以把一个函数作为一个参数传递给第一个参数。

第二个参数：毫秒数。

每隔 1 毫秒数调用一次函数。

### 例子 - 每隔 1 秒输出一次 hello world

```js
setInterval(function () {
  console.log("hello world");
}, 1000);
```

### 例子 - 简单计时器，每秒输出当前秒数。

```js
var n = 0;
setInterval(function () {
  console.log(n++);
}, 1000);
```

### 例子 - 在控制台输出当前时间，每秒输出一次。

正确代码。每一次都获取的时候才能改变控制台输出的时间。

```js
setInterval(function () {
  //   每一次都获取的时候才能改变控制台输出的时间
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  console.log(hours + ":" + minutes + ":" + seconds);
}, 1000);
```

错误代码，只会一直输出那时的时间。

```js
var d = new Date();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();
setInterval(function () {
  console.log(hours + ":" + minutes + ":" + seconds);
}, 1000);
```

## 课后练习

### 1. 将自己班级的同学添加到一个数组中，每次刷新页面，随机选择一名同学。

```js
var list = ["小红", "小明", "小亮", "小李", "小孙"];
var index = Math.floor(Math.random() * list.length);
console.log(list[index]);
```

### 2. 在控制台输出当前时间，每秒输出一次。

```js
setInterval(function () {
  var nowTime = new Date();
  var hours = nowTime.getHours();
  var minutes = nowTime.getMinutes();
  var seconds = nowTime.getSeconds();
  console.log(hours + ":" + minutes + ":" + seconds);
}, 1000);
```

> 以上内容编写于 2021 年 8 月 16 日 17 点 38 分。
