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

### 2. setTimeout 与 clearTimeout

#### 例 1 - 2 秒后输出 Hello world 点击停止按钮停止计时器

```JS
        let timer = null;
        document.querySelector('button').onclick = function() {
            console.log("stop")
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            console.log("Hello world");
        }, 2000);
```

#### 例 2 - 3 秒后跳转到百度

```JS
         setTimeout(() => {
             location.href = "http://www.baidu.com" // z注意要写http:// 或者https://
         }, 3000);
```

#### 防抖与节流

解决性能问题，开发中常会遇到。
防抖：对于短时间内多次触发事件的情况，可以使用防抖停止事件持续触发。
节流：防止短时间内多次触发事件的情况，但是间隔事件内，还是需要不断触发。
例如：window.onscroll 事件，input 输入搜索内容（当你一直输入的时候不会自动搜索内容，当你停止输入一会后才会自动搜索）

##### 防抖 (debounce)

多次触发事件的时候它一次也不会执行，等事件结束了才会执行。

例如，鼠标滚轮滚动事件不会连续触发

```JS
let timer = null;
window.onscroll = function() {
    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        console.log("hello world");
        timer = null;
    }, 2000);
}
```

##### 节流(throttle)

多次触发事件的时候每隔 x 秒会执行一次。
例如，鼠标滚轮滚动的事件按时间间隔触发

```JS
let mark = true;
window.onscroll = function() {
    if (mark) {
        setTimeout(() => {
            console.log("hello world");
            mark = true;
        }, 2000)
    }
    mark = false;
}
```

##### 返回顶部效果

1. `window.onscroll`事件：滚动条滚动事件

```JS
        window.onscroll = function() {
            console.log("hello world");
        };
```

2. `document.documentElement.scrollTop`: 页面滚动位置距离顶部距离
3. `window.scrollTo(0,0)`：让页面滚动条返回至顶部。
   `window.scrollTo(0,0)` 的 x 代表的是横向的滚动条，y 代表的是竖向的滚动条。

### 课后练习

1. 在网页中显示当前时间

```HTML
    <div>
        <p>当前时间：
            <span class="hour">0</span>
            <span>:</span>
            <span class="minute">00</span>
            <span>:</span>
            <span class="second">00</span>
        </p>
    </div>
    <script>
        let hour = document.querySelector(".hour");
        let minute = document.querySelector(".minute");
        let second = document.querySelector(".second");
        setInterval(() => {
            let date = new Date();
            let curHour = date.getHours();
            let curMinute = date.getMinutes();
            let curSecond = date.getSeconds();
            // console.log(curHour, curMinute, curSecond);
            hour.innerHTML = curHour;
            minute.innerHTML = curMinute;
            second.innerHTML = curSecond;
        }, 500);
    </script>
```

2. 在网页中制作一个秒表

```HTML
<div>
    <p>millisecondsTiming<br>
        <span class="seconds">00</span>
        <span>:</span>
        <span class="milliseconds">00</span>
    </p>
    <button class="start">Start</button>
    <button class="stop">Stop</button>
    <button class="end">End</button>
    <button class="reset">Reset</button>
</div>
<p class="toast-description"></p>
<script>
    let seconds = document.querySelector(".seconds");
    let milliseconds = document.querySelector(".milliseconds");
    let startBtn = document.querySelector(".start");
    let stopBtn = document.querySelector(".stop");
    let endBtn = document.querySelector(".end");
    let resetBtn = document.querySelector(".reset");
    let toast_description = document.querySelector(".toast-description");

    let initSeconds = 0;
    let initMs = 0;
    seconds.innerHTML = initSeconds;
    milliseconds.innerHTML = initMs;

    let timer = null;

    startBtn.onclick = function() {
        if (timer == 0) {
            toast_description.innerHTML = "Please click Reset(Button).";
            return;
        }
        toast_description.innerHTML = "Start";
        clearInterval(timer);
        // timer = null;
        if (timer == null) {
            timer = setInterval(() => {
                if (initMs == 9) {
                    ++initSeconds;
                    initMs = 0;
                }
                ++initMs;
                seconds.innerHTML = initSeconds;
                milliseconds.innerHTML = initMs;
            }, 100);
        }
    }
    stopBtn.onclick = function() {
        if (timer == 0) {
            toast_description.innerHTML = "Please click Reset(Button).";
            return;
        }
        toast_description.innerHTML = "Stop";
        clearInterval(timer);
        timer = null;
    }
    endBtn.onclick = function() {
        if (timer == 0) {
            toast_description.innerHTML = "Please click Reset(Button).";
            return;
        }
        toast_description.innerHTML = "End";
        clearInterval(timer);
        timer = 0;

    }
    resetBtn.onclick = function() {
        toast_description.innerHTML = "You can click Start(Button) to restart.";
        clearInterval(timer);
        initSeconds = 0;
        initMs = 0;
        seconds.innerHTML = initSeconds;
        milliseconds.innerHTML = initMs;
        timer = null;
    }
</script>
```

3. 实现一个五秒后跳转页面的效果

```HTML
<h1>5秒后跳转百度</h1>
<h2>剩余时间：
    <span></span>
</h2>
<p></p>

<script>
    let count = 5;
    let curTime = document.querySelector("span");
    let enter = document.querySelector("p");
    curTime.innerHTML = count + "秒";
    for (var i = 0; i < count; i++) {
        // 闭包，如果不这样处理将会直接显示0秒。在计时器外面再嵌套一个函数，形成闭包。闭包使一个函数可以继续访问它定义时的作用域，而这个新生成的作用域，将每一次循环的当前变量i的值，单独保存了下来。相当于在整个作用域内又新建了一个执行上下文，在新上下文的作用域里单独挂载了一个变量i
        (function(i) {
            setTimeout(() => {
                count--;
                curTime.innerHTML = count + "秒";
            }, i * 1000); // i*1000 每1000毫秒输出
        })(i);
    }
    setTimeout(() => {
        // !!! 容易打错href
        enter.innerHTML = "正在进入......";
        location.href = "http://www.baidu.com";
    }, 5000);
```

4. 返回顶部效果（防抖）

```HTML
<h1>Hello world!</h1>
<button>↑</button>
<script>
    let backToUp = document.querySelector("button");
    backToUp.onclick = function() {
        window.scrollTo(0, 0);
    }
    // // 防抖
    // let timer = null;
    // window.onscroll = function () {
    //     // ！！！ 这里忘记具体这么写了
    //     if (timer !== null) {
    //         clearTimeout(timer);
    //     }
    //     timer = setTimeout(function () {
    //         console.log("hello world");
    //         if (document.documentElement.scrollTop > 0) {
    //             backToUp.style.display = 'block';
    //         } else {
    //             backToUp.style.display = 'none';
    //         }
    //         timer = null;
    //     }, 500);
    // }

    // 闭包 封装防抖算法
    const debounce = function(fn) {
        let timer = null;
        return function() {
            if (timer !== null) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                fn();
                timer = null;
            }, 500);
        };
    }
    window.onscroll = debounce(() => {
        console.log("hello world");
        if (document.documentElement.scrollTop > 0) {
            backToUp.style.display = 'block';
        } else {
            backToUp.style.display = 'none';
        }
    });
</script>
```

```CSS
button {
    position: fixed;
    bottom: 100px;
    right: 100px;
    display: none;
}

body {
    height: 2000px;
}
```

5. 返回顶部效果（节流）

```HTML
<h1>Hello world!</h1>
<button>↑</button>
<script>
    let backToUp = document.querySelector("button");
    backToUp.onclick = function() {
        window.scrollTo(0, 0);
    }
    // // 节流
    // let mark = true;
    // window.onscroll = function () {
    //     if (mark) {
    //         //code
    //         timer = setTimeout(function () {
    //             console.log("hello world");
    //             if (document.documentElement.scrollTop > 0) {
    //                 backToUp.style.display = 'block';
    //             } else {
    //                 backToUp.style.display = 'none';
    //             }
    //             mark = true;
    //         }, 500)
    //     }
    //     mark = false;
    // }

    // 闭包封装节流算法
    const throttle = function(fn) {
        let mark = true;
        return function() {
            if (mark) {
                setTimeout(() => {
                    fn()
                    mark = true;
                }, 500)
            }
            mark = false;
        }
    };
    window.onscroll = throttle(() => {
        console.log("hello world");
        if (document.documentElement.scrollTop > 0) {
            backToUp.style.display = 'block';
        } else {
            backToUp.style.display = 'none';
        }
    });
</script>
```

```CSS
button {
    position: fixed;
    bottom: 100px;
    right: 100px;
    display: none;
}

body {
    height: 2000px;
}
```

> 以上内容编写于 2022 年 2 月 13 日 03 点 44 分。
