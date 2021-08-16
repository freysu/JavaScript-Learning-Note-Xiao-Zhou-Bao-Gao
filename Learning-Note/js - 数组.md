[toc]

## 数组概述

数组是一个特殊的对象，可以按顺序存储数据。

创建数值类型的数组：

`var list = [1,2,3,4,5];`

存放字符串的数组

`var list = ["a","b","c"];`

## 获取数组中的元素

通过下标获取数组中的元素。

`list[0]`、`list[1]`、...

获取数组元素的个数：`list.length`

如果想获取数组中的某一个元素，可以通过下标来获取。 0 就是第一个元素

```js
//创建一个数组
//new 构造函数 第一种方法
var list = new Array("a", "b", "c");
//  第二种方法 是第一种f
var list = ["a", "b", "c"];


//  [index],索引是从0开始的。
var item = list[0];
var len = list.length;

console.log(item);
console.log(len); //3 说明数组有三个元素

//可以直接输出list 数组全部内容
console.log(list);
```

## 遍历数组

### 1. while 循环遍历

`i` 是 _索引_

```js
var list = ["a", "b", "c", "d", "e"];
//下标索引
var i = 0;
while (i < list.length) {
  console.log(list[i]);
  i++;
}
```

### 2. for 循环遍历数组

`i` 是 _索引_

```js
var list = ["a", "b", "c", "d", "e"];
for (var i = 0; i < list.length; i++) {
  console.log(list[i]);
}
```

### 3. for in 遍历（ i 为索引）

`var i in list`中`i` 为索引

```js
var list = ["a", "b", "c", "d", "e"];
for (var i in list) {
  console.log(list[i]);
}
```

### 4. for of 遍历（ i 为值）

`var i of list` 中`i` 为值

```
      var list = ["a", "b", "c", "d", "e"];
      for (var i of list) {
        console.log(i);
      }
```

### 5. map 方法遍历

数组自带的，map 方法的参数是函数，这种函数称为**回调函数**。_map 有两个参数。这是顺序—— 值 、索引_。

```js
var list = ["a", "b", "c", "d", "e"];
list.map(function (value, index) {
  // console.log(value);//value是list的元素
  // console.log(index);//index就是list的索引
  console.log("第" + (index + 1) + "个元素是" + value); //如 第a1个元素是0
});
```

## 数组的常用方法

### 1. map

遍历数组。

```js
var list = ["a", "b", "c", "d", "e"];
list.map(function (value, index) {
  // console.log(value);//value是list的元素
  // console.log(index);//index就是list的索引
  console.log("第" + (index + 1) + "个元素是" + value);
});
```

### 2. push

在结尾追加元素。

```js
var list = ["a", "b", "c", "d", "e"];
//push 在结尾追加元素
list.push("f");
console.log(list);
```

### 3. sort

排序。

\*数值：从小到大排序。

_字符串：按首字母从 a~z 来排序。_

```js
var list = [1, 3, 6, 5, 2];
// sort 排序，从小到大
list.sort();
console.log(list);
```

### 4. filter

过滤器。`newList = list.filter(function (item) {}`的`item`是数组的每个元素

#### 例子 - 将数组中大于等于 3 的元素放到新的数组

```js
var list = [1, 3, 6, 5, 2];
//定义一个新数组，将大于等于3的元素放到新的数组，return返回才实现过滤的效果，item是数组里的每个元素
var newList = list.filter(function (item) {
  if (item >= 3) {
    return item;
  }
});
console.log(newList); // [3, 6, 5]
```

### 5. join

连接数组。

不加参数时，默认加逗号。

```js
var list = ["a", "b", "c"];
var str = list.join();
console.log(str); //a,b,c
```

实现 abc，在 join 里面加参数，_空字符串可以设成空的连接符_

```js
var str = list.join("");
console.log(str); //abc
```

实现 a+b+c

```js
var str = list.join("+");
console.log(str); //a+b+c
```

## 字符串 string 的 split 方法

split 是字符串的拆分方法。

split 不设参数时，默认生成一个数组。

```js
var str = "banana";
var list = str.split();
console.log(list); // ["banana"]
```

_空字符串会拆分字符串_

```js
var list = str.split("");
console.log(list); // ["b","a","n","a","n","a"]
```

按字符来拆分

```js
var list = str.split("n"); //把 n 当成连接符来拆分
console.log(list); // ["ba","a","a"]
```

### 例子 - 把日期 “2021-8-15” 按 ”-“ 来拆分

```js
var str = "2021-8-15";
var list = str.split("-");
console.log(list); //["2021", "8", "15"]
```

> 以上内容编写于 2021 年 8 月 15 日 00 点 53 分。

## 结合数组与对象

```js
var list = [
  { name: "小明", age: 2, sex: "男" },
  { name: "小红", age: 2, sex: "女" },
  { name: "小亮", age: 2, sex: "男" },
];
```

获取数据：`list[0].name`

```js
//获取数组里第一个对象的年龄
console.log(list[0].age);
//获取数组里第一个对象的名字
console.log(list[0].name);
```

### 例子 - 找出所有男同学，放入一个新的数组。

方法 1 - 数组 filter 过滤器

```js
var list = [
  { name: "小明", age: 2, sex: "男" },
  { name: "小红", age: 2, sex: "女" },
  { name: "小亮", age: 2, sex: "男" },
];
var newList = list.filter(function (item) {
  if (item.sex === "男") {
    return item;
  }
});
console.log(newList);
```

方法 2 - 数组 push 添加

```js
var list = [
  { name: "小明", age: 2, sex: "男" },
  { name: "小红", age: 2, sex: "女" },
  { name: "小亮", age: 2, sex: "男" },
];

var newList = [];
for (var i = 0; i < list.length; i++) {
  if (list[i].sex === "男") {
    newList.push(list[i]);
  }
}
console.log(newList);
```

## 课后练习

### 1. 找出数组 [1,3,4,6,7,8,11,12,15,16,19,20] 的所有奇数，并放在一个新数组中。

方法一 - `filter`

```js
var list = [1, 3, 4, 6, 7, 8, 11, 12, 15, 16, 19, 20];
var newList = list.filter(function (item) {
  if (item % 2 === 1) {
    return item;
  }
});
console.log(newList); //[1, 3, 7, 11, 15, 19]
```

方法二 - `push`

```js
var list = [1, 3, 4, 6, 7, 8, 11, 12, 15, 16, 19, 20];
var newList = [];
for (var i = 0; i < list.length; i++) {
  if (list[i] % 2 === 1) {
    newList.push(list[i]);
  }
}
console.log(newList); //[1, 3, 7, 11, 15, 19]
```

### 2. 找出数组 [4,6,1,2,3,7,5] 中的最大值的索引。

```js
var list = [4, 6, 1, 2, 3, 7, 5];
var max = list[0];
var maxIndex = 0;
list.map(function (value, index) {
  if (value > max) {
    max = value;
    maxIndex = index;
  }
});
console.log(max); // 7 即最大值是7
console.log(maxIndex); //5 即最大值的索引是7
```

## 练习代码

```js
//   //创建一个数组
//   var list = [1, 2, 3, 4, 5];
//   // var list1 = ["a","b","c"];
//   // var list2 = new Array(1,2,3,4,5);

//   var item = list[0]; //数组中第一个元素（索引：第0个） list[0]
//   var len = list.length; //数组的长度 list.length;
//   console.log(item); // 数组中第一个元素（索引：第0个）为 1
//   console.log(len); // 数组的长度为5，有5个元素

//   // 1. while遍历数组 索引
//   var list = ["a", "b", "c", "d", "e"];
//   //i 为索引
//   var i = 0;
//   while (i < list.length) {
//     console.log(list[i]);
//     i++;
//   }

//   // 2. for遍历数组 索引
//   var list = ["a", "b", "c", "d", "e"];
//   for (var i = 0; i < list.length; i++) {
//     console.log(list[i]);
//   }

//   // 3. for in遍历数组 索引
//   var list = ["a", "b", "c", "d", "e"];
//   // `var i in list` = `var i = 0; i < list.length; i++`
//   for (var i in list) {
//     console.log(list[i]);
//   }

//   // 4.for of 遍历数组 值
//   var list = ["a", "b", "c", "d", "e"];
//   // `var i of list` = 数组的每个值
//   for (var i of list) {
//     console.log(i);
//   }

//   //5. map 方法遍历
//   var list = ["a", "b", "c", "d", "e"];
//   // map 有两个参数， 值     索引
//   list.map(function (value, index) {
//     // console.log(value);
//     // console.log(index);
//     console.log("第" + (index + 1) + "个元素是" + value);
//   });

//   // 数组的常用方法
//   // 1. map 遍历数组
//   var list = ["a", "b", "c", "d", "e"];
//   list.map(function (listValue, listIndex) {
//     console.log("第" + (listIndex + 1) + "个元素是" + listValue);
//   });

//   //2. push 在结尾添加元素
//   var list = ["a", "b", "c", "d", "e"];
//   list.push("f");
//   console.log(list);

//   //3. sort 数值：从小到大排序, 字符串：按首字母从a~z来排序
//   var list = [4, 2, 3, 1, 5];
//   var list = ["a", "c", "b", "de", "e"];
//   list.sort();
//   console.log(list);

//   // 4. filter 过滤器
//   //将数组中大于等于 3 的元素放到新的数组
//   var list = [1, 3, 6, 5, 2];
//   var newList = list.filter(function (item) {
//     if (item >= 3) {
//       return item;
//     }
//   });
//   console.log(newList);

//   // 5. join 连接数组
//   var list = ["a", "b", "c"];
//   var str = list.join();
//   console.log(str); //a,b,c
//   var str1 = list.join("");
//   console.log(str1); //abc
//   var str2 = list.join("+");
//   console.log(str2); //a+b+c

//   // string字符串的 split 拆分
//   var str = "banana";
//   var list = str.split();
//   console.log(list); //["banana"]
//   var list1 = str.split("");
//   console.log(list1); //["b", "a", "n", "a", "n", "a"]
//   var list2 = str.split("n");
//   console.log(list2); // ["ba", "a", "a"]
//   // 把日期 “2021-8-16” 按 ”-“ 来拆分
//   var str = "2021-8-16";
//   var list = str.split("-");
//   console.log(list); // ["2021", "8", "16"]

// 结合数组与对象
var list = [
  {
    name: "xiaoming",
    age: 2,
    sex: "man",
  },
  {
    name: "xiaohong",
    age: 2,
    sex: "woman",
  },
  {
    name: "xiaoliang",
    age: 2,
    sex: "man",
  },
];
console.log(list[0].name);
console.log(list[0].sex);
//   找出所有男同学，放入一个新的数组。
// 1. filter
var newList = list.filter(function (item) {
  if (item.sex === "man") {
    return item;
  }
});
console.log(newList);
// 2. push
var newList1 = [];
for (var i = 0; i < list.length; i++) {
  if (list[i].sex === "man") {
    newList1.push(list[i]);
  }
}
console.log(newList1);
```

> 以上内容编写于 2021 年 8 月 16 日 02 点 37 分。
