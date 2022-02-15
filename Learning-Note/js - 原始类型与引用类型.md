[toc]

## JS数据类型

每种编程语言都具有内建的数据类型，而根据使用数据的方式从两个不同的维度将语言进行分类。

动态/静态：
动态类型：运行过程中需要检查数据类型
静态类型：使用之前就需要确认其变量数据类型
强/弱：
强类型：不支持隐式类型转换
弱类型：支持隐式类型转换
隐式类型转换 : 在赋值过程中, 编译器会把 int 型的变量转换为 bool 型的变量

每个变量只不过是一个用于保存任意值的命名占位符。

## 数据类型分类

### 六种数据类型：

数值 (Number)、字符串 (String)、布尔 (Boolean)、空 (Null)、未定义 (Undefined)、对象 (Object)。
数据类型分为原始类型与引用类型两大类，除了对象以外其他五个基础数据类型都是原始类型。

ECMAScript 有8 种数据类型

1. Undefined
2. Null
3. Boolean
4. String
5. Number
6. Symbol (ES6新增)
7. BigInt (ES2020新增)
8. Object (基本引用类型、)
根据数据存储位置的不同，我们将JS数据类型分为两大类：

基本数据类型(primary) 存放在栈内存中，类型1-7
复杂数据类型/引用类型 存放在堆内存中， 类型8

```JS
 let sy = Symbol('789'),
     bi = 789n;
 typeof sy; // "symbol"
 typeof bi; // "bigint"
```

特例分析： null值表示一个空对象指针。所以针对typeof null 返回了一个"object"。

### 原始类型

数值 (Number)、字符串 (String)、布尔 (Boolean)、空 (Null)、未定义 (Undefined)。

### 引用类型

对象 (Object)又有Array、Date、Math等等。

## 原始类型与引用类型的区别

1. 赋值的区别
原始类型赋值，引用类型赋的是引用。
2. 比较的区别
原始类型比较的是值，引用类型比较的是是否指向同一个对象。
3. 传参的区别
原始类型的传参不管怎样传都不会影响到外面的值的变化。
引用类型的传参，不管在内部还是外部，它指向都是同一个内存空间，同一个对象。

## 原始类型与引用类型的类型检测

1. 原始数据类型检测：typeof(值)
经常用来检测一个变量是不是最基本的数据类型
2. 引用数据类型检测：值 instanceof(类型)
用来判断某个构造函数的 prototype 属性所指向的对象是否存在于另外一个要检测对象的原型链上。简单说就是判断一个引用类型的变量具体是不是某种类型的对象。
3. Object.prototype.toString.call(xx)
若参数(xx)不为 null 或 undefined，则将参数转为对象，再作判断。转为对象后，取得该对象的 [Symbol.toStringTag] 属性值（可能会遍历原型链）作为 tag，然后返回 "[object " + tag + "]" 形式的字符串。

针对基本数据类型，通过装箱过程转为对象类型。

```JS
Object.prototype.toString.call(null) //[ojbect Null]
Object.prototype.toString.call(undefined) //[object Undefined]
Object.prototype.toString.call(true) // [object Boolean]
Object.prototype.toString.call(() => {}) // [object Function]
```

通过Object.prototype.toString可以将数据类型很容易的分开。但是，每次进行判断的时候，多了一堆额外的信息。所以，我们可以对该方法进行改进。

```JS
function getDataType(type) {
    return Object.prototype.toString.call(type)
        .split(' ')[1]
        .slice(0, -1)
        .toLocaleLowerCase();
}
getDataType(null) //null
getDataType(undefined) // undefined
getDataType(true) // boolean
getDataType(() => {}) // function
```

## 例1 数组存储学生列表

1. 数组StudentList
2. 点击按钮，将表单中【姓名】和【年龄】赋值给Student对象，并push到StudentList中。

## 课后练习

* 制作一个学生列表，要求如下：
    1. 在表单中输入【姓名】和【年龄】，点击添加【添加】按钮，创建Student对象。
    2. 将Student对象添加到列表中（ul li）。
