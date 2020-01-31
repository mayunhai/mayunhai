## 20行简单实现 Promise

看了网上很多关于用 ES5 实现 Promise 原理的文章，我这里只是想要简单分析 Promise 原理帮助对其使用，所以本文还是坚持使用 ES6 去简单实现功能（`ES5 语法恶心并不方便新手去理解`）

直接上代码，其实想要实现一个 Promise 对象，其中关键代码并不多（20行）

```JS
class MyPromise {
  constructor(fn) {
    this.resolveFn = this.rejectFn = () => {}
    fn(this.resolve, this.reject)
  }
  resolve = (val) => {
    setTimeout(() => {
      this.resolveFn(val)
    }, 0)
  }
  reject = (val) => {
    setTimeout(() => {
      this.rejectFn(val)
    }, 0)
  }
  then(resolveFn, rejectFn) {
    this.resolveFn = resolveFn
    this.rejectFn = rejectFn
  }
}
```

验证一下

```JS
const fn = function (resolve, reject) {
  console.log('begin to execute!')
  setTimeout(() => {
    resolve(1)
    reject(2)
  }, 1000);
}

// 控制台打印 'begin to execute!'
const p = new MyPromise(fn)

// 一秒后 控制台打印 
// resolve:  1
// reject:  2
p.then(function (data) {
  console.log('resolve: ', data)
}, function (data) {
  console.log('reject: ', data)
})
```

细心的小伙伴可能会发现其实在 new 的时候， `fn` 就已经开始执行了所以会打印 'begin to execute!',实际上 `resolveFn` `rejectFn` 也都执行了只不过是空函数看不见而已, 对比一下 原生的 Promise

```JS
var p1 = new Promise(fn);

// 一秒后 控制台打印 
// resolve:  1
p1.then(function (data) {
  console.log('resolve: ', data)
}, function (data) {
  console.log('reject: ', data)
})
```

事实上在 `Promise规范` 当中，规定 Promise 只能从初始 `pending` 状态变到 `resolved` 或者 `rejected` 状态，是单向变化的，也就是说执行了 `resolve` 就不会再执行 `reject` ，反之亦然。实现起来也很简单加个判断即可

```JS
class MyPromise {
  constructor(fn) {
    this.status = 'pending'
    this.resolveFn = this.rejectFn = () => {}
    fn(this.resolve, this.reject)
  }

  resolve = (val) => {
    if (this.status === 'pending') {
      this.status = 'resolved'
      setTimeout(() => {
        this.resolveFn(val)
      }, 0)
    }
  }

  reject = (val) => {
    if (this.status === 'pending') {
      this.status = 'rejected'
      setTimeout(() => {
        this.rejectFn(val)
      }, 0)
    }
  }

  then(resolveFn, rejectFn) {
    this.resolveFn = resolveFn
    this.rejectFn = rejectFn
  }
}
```

:::tip
即便这样也存在大量问题，不过 Promise 大致原理已经一目了然，在以后的使用中自然胸有成竹，得心应手

如果想要了解更多，百度 `ES5实现Promise` 看更详细更全面的实现
:::