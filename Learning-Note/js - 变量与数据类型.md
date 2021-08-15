[toc]

## 变量

语句结束加分号 加不加其实都可以 但为了规范要加分号。

## 加减乘除 `+` `-` `*` `/`

```js
var n1 = 20,
  n2 = 10;
// 加减乘除 + - * /
var result = n1 / n2;
// var result = n1 * n2;
// var result = n1 - n2;
// var result = n1 + n2;
console.log(result);
```

```js
var s1 = "hello",
  s2 = "world";
var result = s1 + s2;
console.log(result); // helloworld

var s3 = "100",
  s4 = "200";
var result1 = s3 + s4;
console.log(result1); // 100200
```

### var 声明变量

s 是 string 字符串的缩写，常用 s 来定义字符串
”=“ 变量赋值：将右侧的数据赋值给左侧的变量,不是等于的意思。
var 声明 定义多个变量，要用逗号隔开

```js
var s = "hello world";
console.log(s);
```

### 变量命名规范

- 变量名要见名知意思（要有语义）
- 变量名可以是
  - 字母、下划线、$，还有数字，但是不能以数字开头。
  - 不可以用关键字、保留字命名。
  - 小写字母开头，多个单词，第二个单词首字母大写（驼峰命名，例如 firstName）

## 数据类型

数据类型就是存储在变量中的数据，是有不同类型的。
六种数据类型：

- 字符串 String : "hello world" "你好世界"
- 数值 Number : 100,1,2,3
- 布尔数据类型 Boolean ：真 true, 假 false。
- 未定义 Undefined : underfined
- 空 Null : null
- 对象 Object ：{}

## 练习代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      console.log("world");
      // var 声明变量
      //   var s = "hello world";
      //   console.log(s);
      // var 声明 定义多个变量，要用逗号隔开

      //数据类型
      //   var s1 = "hello",
      //     s2 = "world"; //字符串类型
      //   console.log(s1);
      //   console.log(s2);
      //   var n = 100; //数值类型
      //   console.log(n);
      //   var b = true; //布尔值布尔数据类型

      var n1 = 20,
        n2 = 10;
      // 加减乘除 + - * /
      var result = n1 / n2;
      // var result = n1 * n2;
      // var result = n1 - n2;
      // var result = n1 + n2;
      // console.log(result);

      var s1 = "hello",
        s2 = "world";
      var result = s1 + s2;
      console.log(result); // helloworld

      var s3 = "100",
        s4 = "200";
      var result1 = s3 + s4;
      console.log(result1); // 100200
    </script>
  </body>
</html>
```
