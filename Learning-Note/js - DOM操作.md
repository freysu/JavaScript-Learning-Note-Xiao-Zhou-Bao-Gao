[toc]

## innerHTML

例如，在 ul 中添加 li 标签。

```js
ul.innerHTML = `
<li>香蕉</li>
<li>苹果</li>
<li>鸭梨</li>
`;
```

### 例子 - 通过按钮增加 li 元素。

HTML 代码

```html
<button>按钮</button>
<ul></ul>
```

JS 代码

```js
let btn = document.querySelector(`button`);
let ul = document.querySelector(`ul`);
btn.onclick = function () {
  let li = document.createElement("li");
  let txt = document.createTextNode("香蕉");
  ul.appendChild(li);
  li.appendChild(txt);
};
```

## 节点操作

- 创建元素节点：createElement

- 创建文本节点：createTextNode

- 添加节点：appendChild

- 删除节点：removeChild

例如，制作水果列表的添加与删除。

### 例 1 - 【增】通过 input 文本框添加 li 元素。

HTML 代码

```html
<input type="text" name="" id="" />
<button>按钮</button>
<ul></ul>
```

JS 代码

```js
let btn = document.querySelector(`button`);
let ul = document.querySelector(`ul`);
let inp = document.querySelector("input");
btn.onclick = function () {
  let value = inp.value;
  let li = document.createElement("li");
  let txt = document.createTextNode(value);
  ul.appendChild(li);
  li.appendChild(txt);
};
```

### 例 2 - 【删】删除已有的 li 元素。

HTML 代码

```html
<ul class="fruitList">
  <li>香蕉</li>
  <li>苹果</li>
  <li>鸭梨</li>
</ul>
```

JS 代码

```js
let ul = document.querySelector(`ul`);
let list = document.querySelectorAll(".fruitList li");

for (let i in list) {
  list[i].onclick = function () {
    ul.removeChild(this);
  };
}
```

> 以上内容编写于 2021 年 9 月 5 日 23 点 53 分。

## 事件对象

事件监听函数的形参可以获取事件对象。

通过事件对象可以获取鼠标坐标。

1. 获取 x 坐标：`e.clientX;`
2. 获取 y 坐标：`e.clientY;`

### 例 1 - 获取红色方块中鼠标点击的坐标。

HTML 代码

```html
<div class="box"></div>
```

CSS 代码

```css
.box {
  width: 200px;
  height: 200px;
  background-color: red;
}
```

JS 代码

```js
let box = document.querySelector(".box");
box.onclick = function (e) {
  // ClientX、ClientY获取X、Y坐标。
  console.log("(" + e.clientX + "," + e.clientY + ")");
  console.log(e.clientX);
  console.log(e.clientY);
};
```

### 例 2 - 随鼠标显示图片的大图。

HTML 代码

```html
<!-- 小图盒子 -->
<div class="smallPicList">
  <img src="images/1.png" alt="" />
  <img src="images/2.png" alt="" />
  <img src="images/3.png" alt="" />
</div>
<!-- 大图盒子 -->
<div class="bigPicList"></div>
```

CSS 代码

```css
.smallPicList img {
  width: 320px;
  height: 160px;
}

.bigPicList {
  position: absolute;
}

.bigPicList img {
  width: 640px;
  height: 320px;
}
```

JS 代码

```js
// 获取节点 - 小图盒子里所有小图
let imgList = document.querySelectorAll(`.smallPicList img`);
// 获取节点 - 大图盒子
let bigpicList = document.querySelector(`.bigPicList`);
for (let i in imgList) {
  // imgList[i].src 是每个小图的路径
  imgList[i].onmouseenter = function () {
    bigpicList.innerHTML = `<img src="${this.src}" alt="" />`;
  };
  imgList[i].onmouseleave = function () {
    //空字符串
    bigpicList.innerHTML = ``;
  };
}
// 获取节点 - 小图盒子
let smallPicList = document.querySelector(`.smallPicList`);
smallPicList.onmousemove = function (e) {
  let x = e.clientX;
  let y = e.clientY;
  // 因为获取的坐标是数字，所以要另外加px像素单位。
  bigpicList.style.top = y + 10 + `px`;
  bigpicList.style.left = x + 10 + `px`;
};
```

## 课后练习

### 1. 实现一个水果列表的添加和删除功能。

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
    <input type="text" name="" id="" />
    <button>Add</button>
    <ul></ul>
    <script>
      let ul = document.querySelector(`ul`);
      let inp = document.querySelector("input");
      let btn = document.querySelector("button");
      btn.onclick = function () {
        let value = inp.value;
        // console.log(value);
        // 创建元素节点：createElement
        let li = document.createElement(`li`);
        // 创建文本节点：createTextNode
        let txt = document.createTextNode(value);
        // 添加节点：appendChild
        ul.appendChild(li);
        li.appendChild(txt);
      };
    </script>
  </body>
</html>
```

### 2. 随鼠标显示放大图片的效果。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .smallPicList img {
        width: 320px;
        height: 160px;
      }

      .bigPicList {
        position: absolute;
      }

      .bigPicList img {
        width: 640px;
        height: 320px;
      }
    </style>
  </head>

  <body>
    <!-- 小图盒子 -->
    <div class="smallPicList">
      <img src="images/1.png" alt="" />
      <img src="images/2.png" alt="" />
      <img src="images/3.png" alt="" />
    </div>
    <!-- 大图盒子 -->
    <div class="bigPicList"></div>
    <script>
      // 获取节点 - 小图盒子里所有小图
      let imgList = document.querySelectorAll(`.smallPicList img`);
      // 获取节点 - 大图盒子
      let bigpicList = document.querySelector(`.bigPicList`);
      for (let i in imgList) {
        // imgList[i].src 是每个小图的路径
        imgList[i].onmouseenter = function () {
          bigpicList.innerHTML = `<img src="${this.src}" alt="" />`;
        };
        imgList[i].onmouseleave = function () {
          //空字符串
          bigpicList.innerHTML = ``;
        };
      }
      // 获取节点 - 小图盒子
      let smallPicList = document.querySelector(`.smallPicList`);
      smallPicList.onmousemove = function (e) {
        let x = e.clientX;
        let y = e.clientY;
        // 因为获取的坐标是数字，所以要另外加px像素单位。
        bigpicList.style.top = y + 10 + `px`;
        bigpicList.style.left = x + 10 + `px`;
      };
    </script>
  </body>
</html>
```

### 3. 思考题：为什么水果列表中后添加的数据不能删除。

因为新的 li 元素未被获取到。

> 以上内容编写于 2021 年 9 月 7 日 00 点 45 分。
