[toc]

## BOM 对象

1. window 对象 (全局对象)
2. screen 对象包含有关用户屏幕的信息
3. location 对象用于获得当前页面的地址（URL），并把浏览器重定向到新的页面。
4. history 对象包含浏览器的历史。
5. navigator 对象包含有关访问者浏览器的信息。

[screen 对象](https://www.w3cschool.cn/javascript/js-window-screen.html)

## window 对象

window 对象是全局对象，所有在浏览器可以直接使用的方法，都是 window 对象的方法。例如：

1. 计时器方法
2. 弹出框方法

### 弹出框

1. alert
2. prompt
3. confirm
   在开发应用当中，一般不使用系统自带的弹出框，移动端可能会被屏蔽。

#### 例 1 - 猜数字

1. 随机生成一个 1~100 的数字。
2. 在 prompt 弹出框中猜数字。
3. 提示【大于目标结果】【小于目标结果】【恭喜你回答正确】。

```JS
// Math.random()是生成一个0-1的随机数，然后*100 0-100的数 然后+1就是1-100 Math.floor()向下取整
let target = Math.floor(Math.random() * 100 + 1);
console.log(target);
// 递归函数：在函数体内调用自己
function guessNumber() {
    let num = prompt('请输入一个1-100的数');
    if (num == target) {
        console.log("恭喜你猜对了");
    } else if (num < target) {
        console.log("小于正确答案");
        guessNumber();
    } else if (num > target) {
        console.log("大于正确答案");
        guessNumber();
    }
}
guessNumber();
```

#### 例 2 - 水果列表删除提示功能

1. 制作一个水果列表。
2. 删除选中的水果。
3. 删除时，使用 confirm 提示是否确认删除。

```HTML

```

```JS

```

### location 对象

1. `location.href` - 属性返回当前页面的 URL - "https://www.baidu.com"
2. `location.hostname` - 主机的域名 -"baidu.com"
3. `location.pathname` - 当前页面的路径和文件名 "/s"
4. `location.port` - 端口 - "8080"
5. `location.protocol` -协议 - "https:"

页面跳转 `location.href = "http://www.baidu.com"` ; 

### navigator 对象

例如 `navigator.userAgent` ，可以获取浏览器 UA。它可以应用到切换 PC 移动端布局。

### 课后练习

1. 使用 prompt 实现一个猜数字的游戏。

```JS
let target = Math.floor(Math.random() * 100 + 1);
console.log(target);
let chanceNum = 10;

function guessNumber(chanceNum) {
    let num = prompt('请输入一个1-100的数（输入quit可以退出游戏）');
    let chance = `你还有${chanceNum}次机会`;
    if (num == target) {
        console.log("恭喜你猜对了");
    } else if (num < target) {
        console.log("小于正确答案");
        console.log(chance);
        if (chanceNum == 0) {
            console.log(`答案是${target}`);
            console.log("Game Over!")
            return;
        }
        chanceNum--;
        guessNumber(chanceNum);
    } else if (num > target) {
        console.log("大于正确答案");
        console.log(chance);
        if (chanceNum == 0) {
            console.log(`答案是${target}`);
            console.log("Game Over!")
            return;
        }
        chanceNum--;
        guessNumber(chanceNum);
    } else if (num === "quit") {
        console.log("Quit!")
    }
}
guessNumber(chanceNum);
```

2. 使用 confirm 实现一个水果列表删除的提示功能。

```HTML
<ul class="fruit-list">
    <li>香蕉</li>
    <li>苹果</li>
    <li>鸭梨</li>
    <li>香蕉</li>
    <li>苹果</li>
    <li>香蕉</li>
    <li>苹果</li>
    <li>香蕉</li>
    <li>苹果</li>
</ul>
<script>
    let ul = document.querySelector('.fruit-list');
    // 事件委托
    ul.onclick = function(e) {
        let mark = confirm('是否删除此水果，删除后数据不能恢复');
        if (mark == true) {
            ul.removeChild(e.target);
        }
    }
</script>
```

> 以上内容编写于 2022 年 2 月 15 日 00 点 55 分。
