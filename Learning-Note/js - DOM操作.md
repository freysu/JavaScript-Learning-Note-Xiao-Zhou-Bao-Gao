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
