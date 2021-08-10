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
单独写 ++num 和 num++ 结果是一样的；与其他代码一起的时候，执行结果会不一样
前置递增 (递减) 运算符 先自己加 1，再进行运算
后置递增 (递减) 运算符 先进行运算，再加 1
我们一般使用后置递增 (递减) 运算符，且代码独占一行，例如：num++ num--

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

