## 表达式与运算符

### 字面量

`"hello world"`
`100`
`console.log(字面量)`

### 表达式

通过运算符将变量、字面量组合起来，就是表达式。
每一个表达式都有一个固定返回值（表达式的结果）
`"hello" + "world"`
`10 - 20`

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

自增、自减总结

单独写 ++n 和 n++， 输出结果是一样。

如果是跟其他代码一起的话，结果会不一样。

因为 ++n 是先加 1，再进行运算。而 n++ 是先进行运算，再加 1。

就比如今天问你的那道题，(num++) + (++num)，中间的加号是加法运算符，

num++返回的是 188,这时候 num 已经变成 189.所以++num 就返回的是 190,所以答案就是 188+190=378

```js
// 加减乘除 + - * /
// console.log(20 + 10);
// console.log(20 - 10);
// console.log(20 * 10);
// console.log(20 / 10);
// 求余
// console.log(17 % 2);
// var num1 = 17,
//     num2 = 188;
// console.log(num1 % 2); // 奇数 1
// console.log(num2 % 2); // 偶数 0
// 自加 自减
//如果++放在前面，就是加完1后的结果，先加。++在后面就是后加。-- 同理。
//++ 代表了自增 1
//i++ 返回的是自增之前的值，++i 返回的则是自增后的值
// var num1 = 188;
// console.log(++num1); // 189
// var num2 = 188;
// console.log(--num2); // 187
// var num3 = 188
// console.log(num3++);// 188
// console.log(num3);// 189

//求返回结果是多少？ 378
//188 + 189 + 1 =188 + 190=378
var num = 188;
console.log(num++ + ++num);
```

> 以下内容为2021年8月11日学习内容，待完成。


### 比较运算符

比较运算符，返回值是一个布尔类型：true\false

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
  ```

- <= 小于或等于

  ```js
  console.log(10 <= 10); //true
  console.log(100 <= 10); //false
  ```

- == 等于

  ```js
  console.log(20 == "20");
  ```

- != 不等

  ```js

  ```

  ```

  ```

- === 等值等型，值相等并且类型相等

  ```js

  ```

- !== 不等值或不等型，值不相等或类型不相等

  ```js

  ```

### 逻辑运算符

- && 逻辑与
  true && true → true
  true && false → false
- || 逻辑或
  true || false → true
- ! 逻辑非
  true → false

### 赋值运算符

- = 赋值
  把 10 赋值给 X
  x = 10 → 无
- += 加并赋值
  x += y → x = x + y
- -= 减并赋值
  x -= y → x = x - y
- \*= 乘并赋值
  x \*= y → x = x \* y
- /= 除并赋值
  x /= y → x = x / y
