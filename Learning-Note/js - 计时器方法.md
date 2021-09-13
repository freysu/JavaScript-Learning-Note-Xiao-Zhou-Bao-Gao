[toc]

## 计时器方法

1. `setInterval` 与 `clearInterval`
2. `setTimeout` 与 `clearTimeout`

### 1. `setInterval` 与 `clearInterval`

#### 例 1 - 每隔两秒钟输出一次

```js
setInterval(() => {
  console.log("hello world");
}, 2000);
```

#### 例 2 - 点击暂停按钮可以结束打印输出。

```js
// 每隔两秒钟输出一次
let timer = setInterval(() => {
  console.log("hello world");
}, 2000);
let btn = document.querySelector(`button`);
btn.onclick = function () {
  //暂停结束计时器Timer
  clearInterval(timer);
};
```

#### 例 3 - 在网页中显示当前时间。

HTML 代码

```html
<h1>0:00:00</h1>
```

JS 代码

```js
// 这个不用写在计时器里面，会影响性能。
let h1 = document.querySelector(`h1`);
setInterval(() => {
  // 因为需要每隔0.5秒获取一次当前时间，所以要放在计时器里面。
  let timeNow = new Date();
  let hours = timeNow.getHours();
  let minutes = timeNow.getMinutes();
  let seconds = timeNow.getSeconds();
  let time = `${hours}:${minutes}:${seconds}`;
  h1.innerHTML = time;
}, 500);
```

#### 例 4 - 在网页中制作一个秒表（开始功能、停止功能、重置）。

HTML 代码

```html
<button class="start">Start</button>
<button class="pause">Pause</button>
<button class="reset">Reset</button>
<h1 class="time">0:0</h1>
```

JS 代码

```js
let start = document.querySelector(`.start`);
let pause = document.querySelector(`.pause`);
let reset = document.querySelector(`.reset`);
let time = document.querySelector(`.time`);
// 定义计时器初值为空
let timer = null;
// 定义秒数初值，毫秒数初值
let initSeconds = 0;
let initMs = 0;
// 设置时间初值。
time.innerHTML = `${initSeconds}:${initMs}`;

// 开始功能
start.onclick = function () {
  // 避免多次点击开始按钮时，计时器变快的原因，每次都要把之前的计时器清零。
  clearInterval(timer);
  timer = setInterval(() => {
    // 判断当前毫秒数是否大于9，是的话就进一位。
    if (initMs === 9) {
      ++initSeconds;
      initMs = 0;
    }
    ++initMs;
    time.innerHTML = `${initSeconds}:${initMs}`;
  }, 100);
};

// 暂停功能
pause.onclick = function () {
  clearInterval(timer);
};

// 重置功能
reset.onclick = function () {
  initSeconds = 0;
  initMs = 0;
  time.innerHTML = `${initSeconds}:${initMs}`;
};
```

> 以上内容编写于 2021 年 9 月 14 日 00 点 44 分。
