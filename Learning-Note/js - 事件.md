[toc]

## 内容概述

1. 事件绑定
2. 事件流
3. 事件对象扩展
4. 事件委托
5. 事件类型

## 事件绑定

1. `addEventListener(“eventType”,function(){})`

   ```html
   <button>按钮</button>

   <script>
     let btn = document.querySelector("button");
     // addEventListener 在同一元素上的同一事件类型添加多个事件，不会被覆盖。
     btn.addEventListener("click", function () {
       console.log("hello world");
     });
     btn.addEventListener("click", function () {
       console.log("hello script");
     });
     // 执行结果如下：
     // hello world
     // hello script
   </script>
   ```

2. `element.onEventType = function(){}`

   ```html
   <button>按钮</button>
   
   <script>
     let btn = document.querySelector("button");
     // onEventType 会被下一个同一事件类型的事件覆盖。
     btn.onclick = function () {
       console.log("hello world");
     };
     btn.onclick = function () {
       console.log("hello script");
     };
     // 执行结果如下：
     // hello script
   </script>
   ```

两者区别：

1. `addEventListener` 在同一元素上的同一事件类型添加多个事件，不会被覆盖。

2. `addEventListener` 可以设置元素在捕获阶段触发事件，而 `onEventType` 不能。

**应用场景：修改别人代码、添加功能的时候用`addEventListener`会方便很多。**

## 事件流

三个 div 嵌套，都绑定 click 事件，点击最内层的元素，事件如何执行。—— (b).

a：只执行最内层

b：从内到外都执行

c：从外到内都执行

![image-20210909001917857](https://i.loli.net/2021/09/09/eTYiyDASIGNBEkL.png)

### 事件捕获与事件冒泡

默认情况下，事件会在冒泡阶段执行。

`addEventListener(eventType,fun,boolean);`

默认 false：冒泡阶段触发，true：捕获阶段触发。

#### 例 1 - 三个 div 嵌套，都绑定 click 事件，点击最内层的元素。

HTML 代码

```html
<div class="big">
  <div class="medium">
    <div class="small"></div>
  </div>
</div>
```

CSS 代码

```css
.big {
  width: 300px;
  height: 300px;
  background-color: red;
}

.medium {
  width: 200px;
  height: 200px;
  background-color: yellow;
}

.small {
  width: 100px;
  height: 100px;
  background-color: blue;
}
```

- 在事件冒泡阶段触发。

  JS 代码

  ```js
  let big = document.querySelector(".big");
  let medium = document.querySelector(".medium");
  let small = document.querySelector(".small");
  big.addEventListener("click", function () {
    console.log("Hi,I'm big");
  });
  medium.addEventListener("click", function () {
    console.log("Hi,I'm medium");
  });
  small.addEventListener("click", function () {
    console.log("Hi,I'm small");
  });
  // 在事件冒泡阶段触发。
  // 执行结果如下：
  // Hi,I'm small
  // Hi,I'm medium
  // Hi,I'm big
  ```

- 在事件捕获阶段触发。

  ```js
  let big = document.querySelector(".big");
  let medium = document.querySelector(".medium");
  let small = document.querySelector(".small");
  big.addEventListener(
    "click",
    function () {
      console.log("Hi,I'm big");
    },
    true
  );
  medium.addEventListener(
    "click",
    function () {
      console.log("Hi,I'm medium");
    },
    true
  );
  small.addEventListener(
    "click",
    function () {
      console.log("Hi,I'm small");
    },
    true
  );
  // 在事件捕获阶段触发。
  // 执行结果如下：
  // Hi,I'm big
  // Hi,I'm medium
  // Hi,I'm small
  ```

## 事件对象扩展

### 阻止事件冒泡

`e.stopPropagation();`

阻止事件冒泡执行。让外层的事件不被执行。

#### 例 1 - 三个 div 嵌套，都绑定 click 事件，点击最内层的元素。

HTML 代码

```html
<div class="big">
  <div class="medium">
    <div class="small"></div>
  </div>
</div>
```

CSS 代码

```css
.big {
  width: 300px;
  height: 300px;
  background-color: red;
}

.medium {
  width: 200px;
  height: 200px;
  background-color: yellow;
}

.small {
  width: 100px;
  height: 100px;
  background-color: blue;
}
```

JS 代码

```js
let big = document.querySelector(".big");
let medium = document.querySelector(".medium");
let small = document.querySelector(".small");
big.addEventListener("click", function () {
  console.log("Hi,I'm big");
});
medium.addEventListener("click", function () {
  console.log("Hi,I'm medium");
});
small.addEventListener("click", function (e) {
  console.log("Hi,I'm small");
  e.stopPropagation(); //阻止事件冒泡
});
// // 在事件冒泡阶段触发。
// // 三个 div 嵌套，都绑定 click 事件，点击最内层的元素，事件从内到外都执行。
// // 执行结果如下：
// // Hi,I'm small
```

#### 例 2 - 点击一个按钮，显示一个容器盒子。点击容器，容器背景颜色改变。点击容器中的按钮，容器隐藏。

HTML 代码

```html
<button class="show">显示</button>
<div class="box">
  <button class="close">关闭</button>
</div>
```

CSS 代码

```css
.box {
  width: 200px;
  height: 200px;
  background-color: yellow;
  display: none;
}
```

JS 代码

```js
let show = document.querySelector(`.show`);
let box = document.querySelector(`.box`);
let close = document.querySelector(`.close`);
show.onclick = function () {
  box.style.display = "block";
};
close.onclick = function (e) {
  box.style.display = "none";
  e.stopPropagation(); // 阻止事件冒泡，阻止隐藏盒子的时候将盒子变色。
};
box.onclick = function () {
  box.style.backgroundColor = "red";
};
```

### 事件默认行为

去掉事件默认行为。

1. `e.preventDefault();`
1. `return false;`

#### 例 1 - 为一个可以跳转到百度的 a 标签设置点击事件。

HTML 代码

```html
<a href="http://www.baidu.com/">baidu</a>
```

JS 代码

```js
let a = document.querySelector(`a`);
a.onclick = function (e) {
  console.log("hello world");
  e.preventDefault(); //阻止元素的默认行为，如果不阻止的话会执行完输出hello world然后跳转网页。
  // return false; // 也可以阻止元素的默认行为。
};
```

> 以上内容编写于 2021 年 9 月 9 日 01 点 29 分。

## 事件委托

通过`e.target` 将子元素的事件委托给父级处理。

### 例 1 - 实现一个水果列表，让后添加的元素也可以被删除。

HTML 代码

```html
<input type="text" name="" id="" />
<button>add</button>
<ul class="fruit-list">
  <li>banana</li>
  <li>apple</li>
  <li>pear</li>
</ul>
```

JS 代码

```js
let btn = document.querySelector("button");
let ul = document.querySelector(`.fruit-list`);
let inp = document.querySelector(`input`);
// 添加
btn.onclick = function () {
  let value = inp.value;
  let li = document.createElement(`li`);
  let txt = document.createTextNode(value);
  li.appendChild(txt);
  ul.appendChild(li);
};
// 删除
ul.onclick = function (e) {
  // 事件委托，不管是后加还是先加的都可以绑定到ul。
  // console.log(e.target);
  ul.removeChild(e.target);
};
```

## 事件类型

1. 鼠标事件
2. 键盘事件
3. 触屏事件

### 键盘事件

`e.keyCode`

键盘的每个按键都有绑定的键码。

例如，通过以下代码输出不同按键的键码。

```js
document.onkeydown = function (e) {
  console.log(e.keyCode);
};
```

#### 例 1 - 通过上下左右键控制元素移动。

偏移量

| 左偏移量   | 上偏移量  | 右偏移量    | 下偏移量   |
| ---------- | --------- | ----------- | ---------- |
| offsetLeft | offsetTop | offsetRight | offsetDown |

HTML 代码

```html
<div class="box"></div>
```

CSS 代码

```css
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
  top: 100px;
  left: 100px;
}
```

JS 代码

```js
let box = document.querySelector(`.box`);
document.onkeydown = function (e) {
  let code = e.keyCode;
  switch (code) {
    case 37:
      // 左移
      box.style.left = box.offsetLeft - 5 + "px";
      break;
    case 38:
      console.log("上");
      // 上移
      box.style.top = box.offsetTop - 5 + "px";
      break;
    case 39:
      console.log("右");
      // 右移
      box.style.left = box.offsetLeft + 5 + "px";
      break;
    case 40:
      console.log("下");
      // 下移
      box.style.top = box.offsetTop + 5 + "px";
      break;
  }
};
```

### 触屏事件

```js
let box = document.querySelector(`.box`);
// 当手指按下
box.ontouchstart = function () {
  console.log("start");
};
// 当手指抬起
box.ontouchend = function () {
  console.log("end");
};
// 当手指滑动
box.ontouchmove = function () {
  console.log("move");
};
```

> 以上内容编写于 2021 年 9 月 10 日 01 点 20 分。

## 课后练习

1. 实现以下功能（阻止事件冒泡）：
   - 点击一个按钮，显示一个容器盒子；
   - 点击容器，容器背景颜色改变；
   - 点击容器中的按钮，容器隐藏。
2. 实现一个水果列表，让后添加的元素也可以被删除（事件委托）
3. 通过上下左右键控制元素移动。
