[toc]

## 数据类型 - null

什么都没有（空），未初始化一个对象，可以暂时赋值为 `null`

```js
var student = null;
```

## 数据类型 - undefined

不赋值的变量就是 `undefined `数据类型，_尽量不要定义一个 `undefined` 变量_

注意不要写成 `var v = undefined`

```js
var v;
console.log(v); //undefined
```

## 世间万物皆对象

桌子：宽度、高度、颜色、用途

猫：名字、毛色、年龄、吃东西、睡觉

## 对象

六种数据类型中的一种。_对象可以重新设置属性_

定义：属性的无需集合。

```js
// 创建一个对象
var cat = {
  name: "miaomiao", //注意是逗号
  age: 2,
};
// "." 的 cat.name 猫的名字
console.log(cat.name);
// 特殊情况时可以使用这种方法，当cat.name获取不到的时候
// console.log(cat["name"]);
```

### 方法

属性的值是一个函数，则称为方法。可以传递参数，也可以不传递参数，还可以`return `返回值。

```js
var cat = {
  name: "mm",
  age: 2,
  sayName: function () {
    console.log("我是mm");
  },
};

cat.sayName();
```

```js
var cat = {
  name: "miaomiao",
  //方法 - 也可以不传递参数
  sayName: function () {
    console.log("我是miaomiao");
  }, // 注意逗号
  //方法 - 传递参数
  eat: function (food) {
    console.log("吃" + food);
  },
  //方法 - 返回值
  computed: function (n, m) {
    return n + m;
  },
};
//调用对象的`方法`
cat.sayName(); //我是miaomiao
cat.eat("鱼"); //吃鱼

var result = cat.computed(1, 2);
console.log(result); //3
```

### this 关键字

可以指向调用方法的对象。

```js
var cat = {
  name: "miaomiao",
  sayName: function () {
    // this.xxxx 可以指向调用方法的对象
    console.log("我是" + this.name);
  },
};
//对象可以重新设置属性
cat.name = "小白";
cat.sayName();
```

## 对象的分类

1. 自定义对象

   作用:封装

2. 内置对象（例如 Date，获取当前时间）

3. 宿主对象（document）

4. 第三方库的对象（jQuery、Vue 等）

## 练习代码

```js
// 创建一个对象
var cat = {
  name: "miaomiao",
  age: 2,
};
// "." 的 cat.name 猫的名字
console.log(cat.name);
// 特殊情况时可以使用这种方法，当cat.name获取不到的时候
// console.log(cat["name"]);

// null 什么都没有（空），未初始化一个对象，可以暂时赋值为null
var student = null;

// //不赋值的变量就是undefined数据类型，尽量不要定义一个undefined变量
var v;
console.log(v);

//方法
var cat = {
  name: "miaomiao",
  //方法 - 也可以不传递参数
  sayName: function () {
    console.log("我是miaomiao");
  },
  //方法 - 传递参数
  eat: function (food) {
    console.log("吃" + food);
  },
  //方法 - 返回值
  computed: function (n, m) {
    return n + m;
  },
};
//调用对象的`方法`
cat.sayName();
cat.eat("鱼");

var result = cat.computed(1, 2);
console.log(result);

//方法
var cat = {
  name: "miaomiao",
  //方法 - 也可以不传递参数
  sayName: function () {
    // this.xxxx 可以指向调用方法的对象
    console.log("我是" + this.name);
  },
  //方法 - 传递参数
  eat: function (food) {
    console.log("吃" + food);
  },
  //方法 - 返回值。
  computed: function (n, m) {
    return n + m;
  },
};
//对象可以重新设置属性
cat.name = "小白";
cat.sayName();
```

## 课后练习

掌握如何自定义对象，并获取属性，了解如何调用对象的方法，this 关键字的作用。

```js
//创建一个对象
var cat = {
  name: "mm",
  age: 2,
  sayName: function () {
    console.log("I'm " + this.name);
  },
  eat: function (food) {
    console.log("eat" + food);
  },
  computed: function (n, m) {
    return n + m;
  },
};

console.log(cat.name);
console.log(cat.age);
cat.name = "sb";
cat.sayName();
cat.eat("fish");

var result = cat.computed(2, 3);
console.log(result);
```

> 以上内容编写于 2021 年 8 月 14 日 20 点 24 分。
