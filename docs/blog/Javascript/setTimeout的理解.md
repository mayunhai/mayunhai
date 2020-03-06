## setTimeout的理解

setTimeout 看起来实现的假装异步操作实则还是同步运行，其实每次执行的时机都是晚于理想状态的，下面看段代码就能很容易理解

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