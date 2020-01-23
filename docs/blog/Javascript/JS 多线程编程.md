## JS 多线程编程

Javascript 因为单线程的原因导致只要一步阻塞，整段垮掉，而且对于目前基本上都是多核 CPU 的终端显得格格不入(单线程只能使用到单核 CPU 进行计算)

HTML5 提出 `Web Worker` 标准，允许 JavaScript 脚本创建多个线程，但是子线程完 全受主线程控制，且不得操作 DOM。

:::tip
首先我先总结一下想要使用 `Web Worker` 的几个注意点：

- 同源限制，分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源

- DOM 限制， Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用document、window、parent这些对象。但是，Worker 线程可以navigator对象和location对象

- 通信联系，Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息完成(与iframe子父通信一样)

- 脚本限制， Worker 线程不能执行alert()方法和confirm()方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求

- 文件限制，Worker 线程无法读取本地文件，即不能打开本机的文件系统，它所加载的脚本，必须来自网络
:::

### 用法一：引入两个 JS 使用Web Worker

```JS
// worker.js

/**
 * @description 死循环函数函数
 * @param {Number} time 死循环时间，单位毫秒
 */
const endlessLoop = (time) => {
  const timestamp = new Date().getTime()
  while (timestamp + time > new Date().getTime()) {}
}
endlessLoop(3000)
console.log('endlessLoop done') // 死循环三秒后打印 'endlessLoop done'
```

```JS
// index.js
const worker = new Worker('worker.js')
console.log('这里是 index.js 的打印')
```

### 用法二：引入单个 JS 使用Web Worker

```JS
// index.js
// 创建 woker
const workerBlob = new Blob([`const endlessLoop = (time) => {
  const timestamp = new Date().getTime()
  while (timestamp + time > new Date().getTime()) {}
}
endlessLoop(3000)
console.log('endlessLoop done')`], { type: 'application/javascript' })
const workerJs = URL.createObjectURL(workerBlob)

// 调用 worker
const worker = new Worker(workerJs)
console.log('这里是 index.js 的打印')
```

### 用法三：webpack 中使用 Web Worker

目前前端项目主流打包工具 webpack 中若想要使用 `Web Worker`，须安装 [worker-loader](https://www.npmjs.com/package/worker-loader) 这个依赖,感兴趣的小伙伴直接点链接跳转官方看文档这里就不做复制粘贴了

:::tip
最后总结一下 Web Worker 绝对和 异步编程 Promise 不是一个概念

Promise 虽然能够实现异步任务，但仍然是单线程。包括定时器 setTimeout 实现的假装异步操作实则还是同步运行

setTimeout 其实每次执行的时机都是晚于理想状态的，下面看段代码就能很容易理解

```JS
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
:::