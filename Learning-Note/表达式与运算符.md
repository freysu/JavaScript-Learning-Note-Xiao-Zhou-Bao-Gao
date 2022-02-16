[toc]

## 表达式与运算符

### 字面量

`"hello world"`、`100`、`console.log(字面量)`

### 表达式

通过运算符将变量、字面量组合起来，就是表达式。每一个表达式都有一个固定返回值（表达式的结果）
`"hello" + "world"`、`10 - 20`

```js
console.log("hello world");
console.log("hello" + "world");
console.log(10 - 20);
```

```js
var s1 = "hello"; //将字面量赋值给变量
var s2 = "world";
var result = s1 + s2; // 将表达式赋值给变量，返回值："helloworld"
console.log(result); // helloworld
```

## 运算符

### 算数运算符

- 加法

  ```js
  console.log(20 + 10);
  ```

- 减法

  ```js
  console.log(20 - 10);
  ```

- 乘法

  ```js
  console.log(20 * 10);
  ```

- 除法

  ```js
  console.log(20 / 10);
  ```

- 系数

  求余

  ```js
  console.log(17 % 2);
  ```

  应用场景，可用于判断奇偶数

  ```js
  var num1 = 17,
    num2 = 188;
  console.log(num1 % 2); // 奇数 1
  console.log(num2 % 2); // 偶数 0
  ```

- **递增**

  ++ 代表了自增 1，n++ 返回的是自增之前的值，++n 返回的则是自增后的值。

  _单独写 ++n 和 n++， 输出结果是一样。如果是跟其他代码一起的话，结果会不一样。_

  因为 ++n 是**先加** 1，再进行运算。而 n++ 是先进行运算，**后加** 1。

  ```js
  var num1 = 188;
  console.log(++num1); // 189

  var num3 = 188;
  console.log(num3++); // 188
  console.log(num3); // 189
  ```

  **相关基础题**

  (num++) + (++num)，中间的加号是加法运算符。

  num++返回的是 188,这时候 num 已经变成 189.所以++num 就返回的是 190,所以答案就是 188+190=378。

  ```js
  //求返回结果是多少？ 378
  var num = 188;
  console.log(num++ + ++num);
  ```

- **递减**

  与递增同理，只不过是加变成减。

### 比较运算符

比较运算符在逻辑语句中使用，以判定变量或值是否相等。比较的时候要注意数据类型。

- \> 大于

  ```js
  console.log(10 > 20); //false
  ```

- < 小于

  ```js
  console.log(10 < 20); //true
  ```

- \>= 大于或等于

  ```js
  console.log(10 >= 10); //true
  console.log(100 >= 10); //true
  ```

- <= 小于或等于

  ```js
  console.log(10 <= 10); //true
  console.log(100 <= 10); //false
  ```

- == 等于

  _不比较数据类型，如果数据类型不同就会有内部的数据转换，转换成相同的数据类型再来比较（可能会影响性能）_

  ```js
  console.log(20 == 20); //true
  console.log(20 == 10); //fasle
  ```

  ```js
  console.log(20 == "20"); //true
  ```

- != 不等

  _不比较数据类型，如果数据类型不同就会有内部的数据转换，转换成相同的数据类型再来比较（可能会影响性能）_

  ```js
  console.log(1 != 2); //true
  console.log(1 != 1); //false
  ```

  ```js
  console.log(1 != "2"); //true
  console.log(1 != "1"); //false
  ```

- === 等值等型，值相等并且类型相等

  _全等于，比较数据类型，不会进行数据转换，（最佳实践，最优方式）_

  ```js
  console.log(20 === "20"); //false

  console.log(20 === 20); //true

  console.log(20 === 10); //false
  ```

- !== 不等值或不等型，值不相等或类型不相等

  比较数据类型，不会进行数据转换，（最佳实践，最优方式）

  ```js
  console.log(1 !== "2"); //true 最佳实践
  console.log(1 !== "1"); //true

  console.log(1 !== 2); //true

  console.log(1 !== 1); //false
  ```

### 逻辑运算符

逻辑运算符用于判定变量或值之间的逻辑。

- **&& 逻辑与**

  _如果左右两个都是 true，返回结果就是 true，如果其中一个有 false,返回结果就是 false_

  true && true → true

  true && false → false

  ```js
  console.log(true && true); // true

  console.log(true && false); // false

  console.log(false && true); // false
  ```

  _应用场景 如登录账户密码判断_

  ```js
  var username = "admin";
  var password = "123456";
  //当账号、密码都正确时，返回true
  console.log(username === "admin" && password === "123456"); //true
  //当账号、密码其中有一个错时，返回false
  console.log(username === "aadmin" && password === "123456"); //false
  console.log(username === "admin" && password === "1234567"); //false
  ```

- **|| 逻辑或**

  _左右两个中只要有一个 true，返回结果就是 true，当两个都是 true 时返回 true，除非两个都是 false，返回结果才是 false_

  true || false → true

  ```js
  console.log(true || true); //true

  console.log(true || false); //true

  console.log(false || true); //true

  console.log(false || false); //false
  ```

  _逻辑或 的应用场景 如登录账户密码判断_

  ```js
  //如果用户填的满足两个条件其中一个那么就返回true，如果两个条件都不满足那么就返回false。
  var username = "aadmin"; //假设是用户自己填的
  console.log(username === "admin" || username === "test"); //false

  var username = "admin"; //假设是用户自己填的
  console.log(username === "admin" || username === "test"); //true

  var username = "test"; //假设是用户自己填的
  console.log(username === "admin" || username === "test"); //true
  ```

- ! 逻辑非，_遇到的时候再应用_
  true → false

  false → true

  ```js
  console.log(!true); // false

  console.log(!false); // true
  ```

### 赋值运算符

- = 赋值
  把 10 赋值给 X
  x = 10 → 无

  ```js
  var x = 10;
  var y;
  y = x;
  console.log(y); //10
  ```

- **_+= 加并赋值(常用)_**
  x += y → x = x + y

  ```js
  var x = 10;
  var y = 20;
  y += x; // 等于 y = y + x; 先看表达式的右边y+x，将20赋值给y，将10赋值给x，此时y+x等于30，最后将30赋值给表达式左边的y,此时y已被覆盖掉。
  console.log(y); //30
  ```

- -= 减并赋值 _同理_
  x -= y → x = x - y

  ```js
  var x = 10;
  var y = 20;
  y -= x; // 等于 y = y - x;
  console.log(y); //10
  ```

- \*= 乘并赋值 同理
  x \*= y → x = x \* y

  ```js
  var x = 10;
  var y = 20;
  y *= x; // 等于 y = y * x;
  console.log(y); //200
  ```

- /= 除并赋值
  x /= y → x = x / y

  ```js
  var x = 10;
  var y = 20;
  y /= x; // 等于 y = y / x;
  console.log(y); //2
  ```

## 比较不同的类型

比较不同类型的数据也许会出现不可预料的结果。

如果将字符串与数字进行比较，那么在做比较时 JavaScript 会把字符串转换为数值。空字符串将被转换为 0。非数值字符串将被转换为始终为 false 的 NaN。

| 案例        | 值    |
| :---------- | :---- |
| 2 < 12      | true  |
| 2 < "12"    | true  |
| 2 < "John"  | false |
| 2 > "John"  | false |
| 2 == "John" | false |
| "2" < "12"  | false |
| "2" > "12"  | true  |
| "2" == "12" | false |

当比较两个字符串时，"2" 大于 "12"，因为（_按照字母排序_）1 小于 2。

## 练习代码

```js
//   字面量和表达式
// console.log("hello world");
// console.log("hello" + "world");
// console.log(10 - 20);
// var s1 = "hello"; //将字面量赋值给变量
// var s2 = "world";
// var result = s1 + s2; // 将表达式赋值给变量，返回值："helloworld"
// console.log(result); // helloworld

//算数运算符
// console.log(20 + 10);
// console.log(20 - 10);
// console.log(20 * 10);
// console.log(20 / 10);
// 求余
//   console.log(17 % 2);
//   var num1 = 17,
//     num2 = 188;
//   console.log(num1 % 2); // 奇数 1
//   console.log(num2 % 2); // 偶数 0
// 自增 自减
//   var num1 = 188;
//   console.log(++num1); // 189
//   var num2 = 188;
//   console.log(--num2); // 187
//   var num3 = 188;
//   console.log(num3++); // 188
//   console.log(num3); // 189

// var num = 188;
// console.log(num++ + ++num);
//求返回结果是多少？ 378
//188 + 190=378

// //比较运算符，返回值是一个布尔类型：true\false
// console.log(10 > 20)//false
// console.log(10 >= 10)//true
// console.log(100 >= 10);//true
// console.log(20 == 10);//fasle
// console.log(1 != "1");//false
// console.log(1 !== 2);//true
// console.log(20 === 10);//false
// console.log(1 !== 1);//false
// console.log(1 !== "1");//true
// console.log(10 <= 10)//true
// console.log(100 <= 10)//false
// //不比较数据类型，如果数据类型不同就会有内部的数据转换，转换成相同的数据类型再来比较（可能会影响性能）
// console.log(20 == "20")//true
// //全等于，不会进行数据转换，（最佳实践，最优方式）
// console.log(20 === "20")//false
// //不等于
// console.log(1 != 2)//true
// console.log(1 != 1)//false
// console.log(1 != "2")//true
// console.log(1 !== "2")//true 最佳实践

//逻辑运算符

// && 逻辑与 如果左右两个都是true，返回结果就是true，如果其中一个有false,返回结果就是false
// console.log(true && true)// true
// console.log(true && false)// false
// console.log(false && true)// false
// // 逻辑与 的应用场景 如登录账户密码判断
// var username = "admin";
// var password = "123456";
// //当账号、密码都正确时，返回true
// console.log(username === "admin" && password === "123456");
// //当账号、密码其中有一个错时，返回false
// console.log(username === "aadmin" && password === "123456");
// console.log(username === "admin" && password === "1234567");

// || 逻辑或 左右两个中只要有一个true，返回结果就是true，当两个都是true时返回true，除非两个都是false，返回结果才是false
// console.log(true || true); //true
// console.log(true || false); //true
// console.log(false || true); //true
// console.log(false || false); //false
// // 逻辑或 的应用场景 如登录账户密码判断 var username ="";//用户自己填
//如果用户填的满足两个条件其中一个那么就返回true，如果两个条件都不满足那么就返回false。
// var username = "aadmin";
// console.log(username === "admin" || username === "test");//false
// var username = "admin";
// console.log(username === "admin" || username === "test");//true
// var username = "test";
// console.log(username === "admin" || username === "test");//true

// ! 逻辑非，遇到的时候再应用
// console.log(!true)// false
// console.log(!false)// true

//赋值运算符
// = 赋值
var x = 10;
var y;
y = x;
console.log(y); //10
//+= 加并赋值(常用)
var x = 10;
var y = 20;
y += x; // 等于 y = y + x; 先看表达式的右边y+x，将20赋值给y，将10赋值给x，此时y+x等于30，最后将30赋值给表达式左边的y,此时y已被覆盖掉。
console.log(y); //30

//-= 减并赋值 同理
var x = 10;
var y = 20;
y -= x; // 等于 y = y - x;
console.log(y); //10

//*= 乘并赋值 同理
var x = 10;
var y = 20;
y *= x; // 等于 y = y * x;
console.log(y); //200

///= 除并赋值 同理
var x = 10;
var y = 20;
y /= x; // 等于 y = y / x;
console.log(y); //2
```
