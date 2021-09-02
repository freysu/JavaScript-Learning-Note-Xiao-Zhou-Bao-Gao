[toc]

## 节点类型

- 元素节点
- 属性节点
- 文本节点

网页效果：操作元素节点、属性节点、文本节点，以及修改元素的样式。

## document 对象

DOM 通过 document 对象，为开发者提供了大量的接口（API）来操作 DOM 树。

### 获取节点

- `document.getElementById();`
  通过 ID 来获取元素，其返回值是一个 DOM 节点。

  ```js
  let aH1 = document.getElementById("title");
  console.log(aH1);
  ```

- `document.getElementByClassName();`
  通过类名来获取元素，其返回值是一个 DOM 节点的集合。

  ```js
  let btns = document.getElementsByClassName("btn");
  console.log(btns);
  ```

- `document.querySelector();`
  获取一个节点。不管能找到多少个，返回值都是一个 DOM 节点。如果是多个元素，它会返回第一个。
  "#elementName"

  ```js
  // document.querySelector
  let aH1 = document.querySelector("#title");
  aH1.innerHTML = "你好世界";
  console.log(aH1);
  ```

- `document.querySelectorAll();`
  获取多个节点。".className"

  ```js
  let btns = document.querySelectorAll(".btn");
  for (let i in btns) {
    btns[i].innerHTML = "test";
  }
  ```

- `element.innerHTML` ：
  DOM 节点的属性。获取和设置元素内所有的内容。

  ```js
  let aH1_1 = document.getElementById("title");
  aH1_1.innerHTML = "你好世界";
  console.log(aH1_1);
  ```

  因为获取的是一个 DOM 节点的集合，所以要遍历。i 是索引。

  ```js
  let btns = document.getElementsByClassName("btn");
  for (let i in btns) {
    btns[i].innerHTML = "test";
  }
  ```

### 事件类型

当...时候，做...事。

- click
  `onclick`
  点击事件

  ```js
  let btn = document.querySelector("button");
  // 事件监听函数
  btn.onclick = function () {
    console.log("hello btn");
  };
  ```

- mouseenter
  `onmouseenter`
  鼠标移入元素

  ```js
  let divBox = document.querySelector(".box");
  // 鼠标移入元素
  divBox.onmouseenter = function () {
    console.log("hello red");
  };
  // 鼠标移出元素
  divBox.onmouseleave = function () {
    console.log("hello box");
  };
  ```

- mouseleave
  `onmouseleave`
  鼠标移出元素

  ```js
  let divBox = document.querySelector(".box");
  // 鼠标移入元素
  divBox.onmouseenter = function () {
    console.log("hello red");
  };
  // 鼠标移出元素
  divBox.onmouseleave = function () {
    console.log("hello box");
  };
  ```

### 设置样式

`element.style.color`

`element.style.backgroundColor`

通过 click、mouseenter、mouseleave 事件控制样式。

#### 例子 - 设置 .box 的样式

```js
let divBox = document.querySelector(".box");
// 鼠标移入元素
divBox.onmouseenter = function () {
  //console.log(this);// <div class="box"></div>
  // js 多个单词是用驼峰命名。css 多个单词是斜杠连接。
  this.style.backgroundColor = "blue";
};
// 鼠标移出元素
divBox.onmouseleave = function () {
  this.style.backgroundColor = "red";
};
```

#### 例子 - 设置 button 的样式

```js
//
let btn = document.querySelector("button");
// 点击事件监听函数
btn.onclick = function () {
  this.style.backgroundColor = "yellow";
};
```

> 以上内容编写于 2021 年 9 月 3 日 01 点 30 分。

### 设置属性

element.src

element.id

点击数字列表切换图片

## 示例代码

### 获取节点

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>获取节点</title>
  </head>
  <body>
    <h1 id="title">hello world</h1>
    <button class="btn">1</button>
    <button class="btn">2</button>
    <button class="btn">3</button>
    <h1 class="title1">hello world1</h1>
    <h1 class="title1">hello world1</h1>
    <h1 class="title1">hello world1</h1>
    <script>
      // // 通过 ID 来获取元素
      // // getElementById 返回值是一个 DOM 节点
      // let aH1 = document.getElementById("title");
      // console.log(aH1);

      // // 通过类名来获取元素
      // // getElementsByClassName 返回值是一个 DOM 节点的集合。
      // let btns = document.getElementsByClassName("btn");
      // console.log(btns);

      // // element.innerHTML ：DOM节点的属性。获取和设置元素内所有的内容。
      // let aH1_1 = document.getElementById("title");
      // aH1_1.innerHTML = "你好世界";
      // console.log(aH1_1);

      // // 因为获取的是一个DOM节点的集合，所以要遍历，i是索引
      // let btns = document.getElementsByClassName("btn");
      // for(let i in btns){
      //     btns[i].innerHTML = "test";
      // }

      // // document.querySelector #elementName
      // let aH1 = document.querySelector("#title");
      // aH1.innerHTML = "你好世界";
      // console.log(aH1);

      // document.querySelectorAll .className
      let btns = document.querySelectorAll(".btn");
      for (let i in btns) {
        btns[i].innerHTML = "test";
      }
    </script>
  </body>
</html>
```

### 事件类型、设置样式

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>事件类型、设置样式</title>
    <style>
      .box {
        width: 100px;
        height: 100px;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <button>按钮</button>
    <div class="box"></div>
    <script>
      // let btn = document.querySelector("button");
      // // 点击事件监听函数
      // btn.onclick = function () {
      //     console.log("hello btn");
      // }

      // // document.querySelector 不管能找到多少个，返回值都是一个DOM节点。如果是多个box，它会返回第一个
      // let divBox = document.querySelector(".box");
      // // 鼠标移入元素
      // divBox.onmouseenter = function () {
      //     console.log("hello red");
      // }
      // // 鼠标移出元素
      // divBox.onmouseleave = function () {
      //     console.log("hello box");
      // }

      // // 设置 .box 的样式
      // let divBox = document.querySelector(".box");
      // // 鼠标移入元素
      // divBox.onmouseenter = function () {
      //     //console.log(this);// <div class="box"></div>
      //     // js 多个单词是用驼峰命名。css 多个单词是斜杠连接。
      //     this.style.backgroundColor = "blue";
      // }
      // // 鼠标移出元素
      // divBox.onmouseleave = function () {
      //     this.style.backgroundColor = "red";
      // }

      // 设置 button 的样式
      let btn = document.querySelector("button");
      // 点击事件监听函数
      btn.onclick = function () {
        this.style.backgroundColor = "yellow";
      };
    </script>
  </body>
</html>
```
