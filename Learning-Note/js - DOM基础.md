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

`element.src`

`element.id`

例如

`img.src="images/1.png"`

点击数字列表切换图片

### 通过 class 属性设置样式

`element.className`

点击原始、设置激活的背景色

#### 例 1 - 将 h1 元素的类名改成"active"。

HTML 代码

```html
<h1 class="title">hello world</h1>
```

JS 代码

```js
let h1 = document.querySelector("h1");
h1.className = "active";
// console.log(h1.className);// title
```

#### 例 2 - 点击 h1 时将 h1 的背景色设成红色。

HTML 代码

```html
<h1 class="title">hello world</h1>
```

JS 代码

```js
let h1 = document.querySelector("h1");
h1.onclick = function () {
  this.className = "active";
};
```

#### 例 3 - 点击 h2 时选中（红色背景色），再点击就取消选中（默认背景色）。

HTML 代码

```html
<h2>hello world</h2>
<h2>hello world</h2>
<h2>hello world</h2>
<h2>hello world</h2>
```

JS 代码

```js
let h2List = document.querySelectorAll("h2");
for (let i in h2List) {
  h2List[i].onclick = function () {
    if (this.className === "active") {
      this.className = "";
    } else {
      this.className = "active";
    }
  };
}
```

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

## 课后练习

### 1. 实现一个点击数字列表，切换图片的效果。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      img {
        width: 640px;
        height: 320px;
      }
    </style>
  </head>

  <body>
    <div class="swiper">
      <div class="imgContainer">
        <img src="images/1.png" alt="" />
      </div>
      <div class="buttonList">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </div>

    <script>
      let img = document.querySelector("img");
      let btns = document.querySelectorAll(".buttonList button");
      let imgSrcList = ["images/1.png", "images/2.png", "images/3.png"];
      for (let i in btns) {
        console.log(i);
        btns[i].onclick = function () {
          // console.log(i);
          img.src = imgSrcList[i];
        };
      }
    </script>
  </body>
</html>
```

### 2. 实现一个轮播图效果（CSS3）。

先布局再写样式再写脚本

- div.swiper
  - div.imgConatainer
    - img
    - img
    - img
  - div.numberList
    - button
    - button
    - button

CSS 代码

```css
.swiper {
  position: relative;
  width: 640px;
  height: 320px;
  /* 超出的内容隐藏 */
  overflow: hidden;
}

.imgContainer {
  /* 横向显示 */
  display: flex;
  width: 1920px;
  height: 320px;
  /* 过度 */
  transition: transform 0.3s;
}

.imgContainer img {
  width: 640px;
  height: 320px;
}

.numberList {
  /* 固定按钮 */
  position: absolute;
  bottom: 0;
}
```

HTML 代码

```html
<div class="swiper">
  <div class="imgContainer">
    <img src="images/1.png" alt="" />
    <img src="images/2.png" alt="" />
    <img src="images/3.png" alt="" />
  </div>
  <div class="numberList">
    <button>1</button>
    <button>2</button>
    <button>3</button>
  </div>
</div>
```

JS 代码

```js
let btnList = document.querySelectorAll(".numberList button");
let imgContainer = document.querySelector(".imgContainer");
for (let i in btnList) {
  btnList[i].onclick = function () {
    // 0 * -640 = 0;
    // 1 * -640 = -640;
    // 2 * -640 = -1280;
    // 形变-平移
    imgContainer.style.transform = `translate(${-640 * i}px)`;
  };
}
```

> 以上内容编写于 2021 年 9 月 5 日 00 点 41 分。
