[toc]

## 复习函数知识点

1. 声明函数
   - 一次声明，多次使用的语句块。
   - 参数：形参、实参。
   - 返回值：函数运行的结果。
2. 函数声明提升
   ```js
   function fun(n, m) {
     return n + m;
   }
   let result1 = fun(10, 20);
   let result2 = fun(100, 200);
   console.log(result1);
   console.log(result2);
   // 函数声明提升
   function fun(n, m) {
     return n + m;
   }
   ```
3. 匿名函数
   一个函数如果不需要多次调用那么可以写成匿名函数。
   例如 `setInterval` 的匿名函数。
   `setInterval` 这种函数又叫回调函数，将匿名函数作为参数传递给另外一个函数或方法。
   ```js
   setInterval(function () {
     console.log("hello");
   }, 1000);
   //相当于
   function fun() {
     console.log("hello");
   }
   setInterval(fun, 1000);
   ```
4. 函数表达式

   函数表达式没有函数声明提升的特性。

   ```js
   const fun = function (n, m) {
     return n + m;
   };
   let result = fun(10, 20);
   console.log(result); // 30
   ```

5. 方法：属于某一对象的函数。

   ```js
   const cat = {
     name: "miaomiao",
     // sayName: function(){
     //     console.log(this.name);
     // }
     // 简写
     sayName() {
       console.log(this.name);
     },
   };
   cat.sayName();
   ```

> 以上内容编写于 2021 年 8 月 20 日 02 点 04 分。

## 函数进阶

1. 设置默认参数值
2. 立即执行函数
3. 闭包
4. 箭头函数

### 设置默认参数值

ES2015 的语法可以为函数的参数设置默认值。

```js
function fun(x = 10, y = 20) {
  return x + y;
}
```

例如

- 未传递参数和未设置默认参数值时

  ```js
  function fun(n, m) {
    console.log(n); // undefind
    console.log(m); // undefind
    return n + m;
  }
  let result = fun();
  // NaN: not a Number
  console.log(result); // NaN
  ```

- 未传递参数但设置默认参数值时

  ```js
  function fun(n = 100, m = 200) {
    console.log(n); // 100
    console.log(m); // 200
    return n + m;
  }
  let result = fun();
  console.log(result); // 300
  ```

- 传递参数也设置默认参数值时

  ```js
  function fun(n = 100, m = 200) {
    console.log(n); // 10
    console.log(m); // 200
    return n + m;
  }
  let result1 = fun(10);
  console.log(result1); // 210
  ```

### 立即执行函数

功能：封装代码。

- 声明之后可以直接调用；
- 不可以多次调用；
- 某些第三方库实现封装。

```js
(function () {
  let a = 10;
  let b = 20;
  console.log(a + b);
})();
```

_ES2015 有模块化的语法，所以立即执行函数现在也不常用了。_

### 作用域链

- 每一个函数都会创建一个新的作用域。
- 函数外部无法访问函数内部的值。
- 函数内部的值可以访问函数外部的值。

_如果内部找不到值就去外部找。_

#### 例 1

```js
let str = "hello";
function fun1() {
  let str = "world";
  console.log(str);
}
fun1(); // world
console.log(str); // hello
```

#### 例 2

```js
let str = "hello";
function fun1() {
  let str = "world";
  let num = 10; //执行完成就会被销毁

  function fun2() {
    console.log(str); //world
    console.log(num); //10
  }
  fun2();
}
fun1(); // world
//         10
console.log("num :" + num); ////执行完成就会被销毁 所以会报错。
```

例 2 的树状图

```
|-window
| |-str
| |-fun1
| | |-str
| | |-num
| | |-fun2
| | | |-str
| | | |-num
```

> 以上内容编写于 2021 年 8 月 24 日 01 点 11 分。

### 闭包

闭包函数：声明在一个函数中的函数，叫做闭包函数。

闭包：内部函数总是可以访问其所在的外部函数中声明的参数和变量，即使在其外部函数被返回之后。

闭包的特性： 内部函数未执行完，外部函数即使执行完成，外部函数中的变量也不会被销毁。

```js
function fun1() {
  function fun2() {
    console.log("I'm fun2");
  }
  return fun2;
}
const f = fun1(); //fun1的运行结果是fun2
```

利用闭包实现了代码的封装。

```js
function fun1() {
  let n = 10;
  let m = 20;
  function fun2() {
    return n + m;
  }
  return fun2;
}
const f = fun1(); //fun1的运行结果是fun2
const result = f();
console.log(result);
```

#### 代码封装

ES5 的一个模块化的语法。

```js
const module = (function () {
  let a = 10;
  let b = 20;
  function add() {
    return a + b;
  }
  return add;
})();
```

### 箭头函数

作用： 简化写法。

```js
const add = (x) => {
  return x * x;
};
// 再次简化
const add = (x) => x * x;
```

```js
const fun = function (x) {
  return x * x;
};
//简化
const fun = (x) => {
  return x * x;
};
//简化
//         参数   返回值
const fun = (x) => x * x;
```

#### 例子 - 每秒输出一次名字

```js
const cat = {
  name: "miaomiao",
  // sayName() {
  //     let self = this
  //     setInterval(function () {
  //         console.log(self.name);
  //     }, 1000)
  // }
  sayName() {
    //window调用的setInterval
    setInterval(() => {
      console.log(this.name);
    }, 1000);
  },
};
cat.sayName();
```

使用 `function` 定义的函数， `this` 取决于调用的函数。

使用箭头函数， `this` 取决于函数定义的位置。

箭头函数和普通函数的`this` 指向不同。

普通函数指向的是调用该函数的对象。

箭头函数：在哪里定义，`this` 就指向谁。

## 课后练习

1. 使用箭头函数延迟调用 `cat.sayName`， 输出 cat 对象的 `name` 属性。

   ```js
   const cat = {
     name: "miaomiao",
     sayName() {
       setInterval(() => {
         console.log(this.name);
       }, 1000);
     },
   };
   cat.sayName();
   ```

> 以上内容编写于 2021 年 8 月 25 日 02 点 31 分。
