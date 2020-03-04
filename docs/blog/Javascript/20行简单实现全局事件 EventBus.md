## 20行简单实现全局事件 EventBus

首先先介绍一下关于 EventBus 应用场景，一句话跨组件通信，当然大型复杂项目还是推荐使用 `Vuex` 去进行状态管理跨组件响应式通信

熟悉 node.js 的小伙伴应该知道在 node events 模块里面有个 EventEmitter 类，通过 `require("events")` 即可访问该模块，这里我也对其使用方法不多做介绍详细 [Node.js EventEmitter](https://www.runoob.com/nodejs/nodejs-event.html) 点击链接自己看

但是前端开发并没有这样的类，参考 VUE 源码我发现其实实现起来并不困难，VUE 源码我就不贴出来了感兴趣的小伙伴自行下载源码 `ctrl` + `p` 输入 `events.js` 即可轻松找到

这里我用 20 行比较简单透明的 ES6 语法进行实现

```JS
class EventBus {
  constructor() {
    this.events = {}
  }
  on = (eventName, fn) => {
    this.events[eventName] = this.events[eventName] || []
    this.events[eventName].push(fn)
  }
  off = (eventName) => {
    this.events[eventName] && delete this.events[eventName]
  }
  emit = (eventName, ...params) => {
    if (this.events[eventName]) {
      this.events[eventName].forEach(v => {
        v.apply(this, params)
      })
    }
  }
}
export default new EventBus()
```

使用方法如下:

```JS
// a.js
import EventBus from '@/utils/EventBus' // 根据对应路径引入
EventBus.on('pause-video', function(a, b, c) {
  console.log('it works')
  console.log({ a, b, c })
})
```

```JS
// b.js
import EventBus from '@/utils/EventBus' // 根据对应路径引入
EventBus.emit('pause-video', 1) // it works   {a: 1, b: undefined, c: undefined}

```

:::tip

- 这里我想说一下之所以 `on` 方法使用了数组 `push` 的原因很简单就是为了支持同名注册多个全局事件

- `once` 方法我上面没写了，因为使用并不多，实现也非常简单，触发的同时删除 `off` 即可，只要在上面的类里面加上下面代码即可

```JS
  once = (eventName, fn) => {
    function on() {
      this.off(eventName, on)
      fn.apply(this, arguments)
    }
    this.on(eventName, on)
  }
```
:::