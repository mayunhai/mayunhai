## setTimeout的理解

setTimeout 看起来实现的假装异步操作实则还是同步运行，其实每次执行的时机都是晚于理想状态的，下面看段代码就能很容易理解

```js
setTimeout(() => {
  console.log('setTimeout')
}, 0)
const timestamp = new Date().getTime()
while (timestamp + 3000 > new Date().getTime()) {
  // 连续三秒钟死循环打印 'loop'
  console.log('loop')
}
console.log('done')
```
上面这段代码直接复制在 chrome 的 Console 打印会发现 'setTimeout' 并不能在0毫秒后打印出来，而是在三秒甚至三秒更多的时间后打印出来

由于我的电脑比较卡，外加死循环执行 20多秒之后才能够正常打印 'setTimeout'，且用心的小伙伴会发现 'done' 永远在 'setTimeout' 之前打印

这样 JS 执行顺序原则是不是一目了然了

:::tip

js事件处理机制：单线程+事件队列

事件队列中的任务执行的条件：

①主线程已经空闲

②任务满足触发条件：

- 定时函数（延迟时间已经达到）

- 事件函数（特定事件被触发。譬如：点击）

- ajax回调函数（服务器端有数据响应）

也就是说JS所谓的异步不过是把需要的异步代码先存入一个事件队列，当主线程空闲后再依次执行而不是真正多线程并行异步,而且虽然事件队列执行时遇到报错不会阻塞JS，但是死循环依旧会阻塞。

虽然JS是单线程的，但是HTML5 提出 `Web Worker` 标准，允许 JavaScript 脚本创建多个线程，详见 [JS 多线程编程](/blog/Javascript.html#js-多线程编程)

:::
