## 16行简单实现 Promise

看了网上很多关于用 ES5 实现 Promise 原理的文章，我这里只是想要简单分析 Promise 原理帮助对其使用，所以本文还是坚持使用 ES6 去简单实现功能（`ES5 语法恶心并不方便新手去理解`）

直接上代码，其实想要实现一个 Promise 对象，其中关键代码并不多

```JS
class MyPromise {
  constructor(fn) {
    this.resolveFn = this.rejectFn = () => {}
    fn(this.resolve, this.reject)
  }
  resolve = (val) => {
    this.resolveFn(val)
  }
  reject = (val) => {
    this.rejectFn(val)
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

细心的小伙伴可能会发现其实在 new 的时候， `fn` 就已经开始执行了所以会打印  `begin to execute!` , 对比一下原生的 Promise

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
      this.resolveFn(val)
    }
  }

  reject = (val) => {
    if (this.status === 'pending') {
      this.status = 'rejected'
      this.rejectFn(val)
    }
  }

  then(resolveFn, rejectFn) {
    this.resolveFn = resolveFn
    this.rejectFn = rejectFn
  }
}
```

上面的问题解决了，我们再来看另外一个问题，假设我们 `.then` 是在 `pending` 状态改变之后之后调用，则又会发现另外的问题如下

```Js
const fn = function (resolve, reject) {
  setTimeout(() => {
    resolve(1)
    reject(2)
  }, 1000);
}

const p = new MyPromise(fn)

setTimeout(() => {
  p.then(function (data) {
    console.log('resolve: ', data)
  }, function (data) {
    console.log('reject: ', data)
  })
}, 1500);
```

这样既不会打印 `resolve` 也不会打印 `resolve` ，虽然这种情况在实际开发几乎见不到，但不得不说它是一个bug，不过解决方案也很简单

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
      this.res = val
      this.resolveFn(val)
    }
  }

  reject = (val) => {
    if (this.status === 'pending') {
      this.status = 'rejected'
      this.res = val
      this.rejectFn(val)
    }
  }

  then(resolveFn, rejectFn) {
    this.resolveFn = resolveFn
    this.rejectFn = rejectFn
    if (this.status !== 'pending') {
      this.status === 'resolved' && this.resolveFn(this.res)
      this.status === 'rejected' && this.rejectFn(this.res)
    }
  }
}
```

只要在 `then` 里面对 `status` 进行一个判断即可。如果我们连续调用两次then还是会发现一个问题，原生 `Promise` 会响应两次而我们这里写的只会响应一次

```JS
const fn = function (resolve, reject) {
  setTimeout(() => {
    resolve(1)
    reject(2)
  }, 1000);
}

const p = new MyPromise(fn)

// resolve:  1  按理说应该会打印两次实际上这里只打印了一次
p.then(function (data) {
    console.log('resolve: ', data)
}, function (data) {
    console.log('reject: ', data)
})
p.then(function (data) {
    console.log('resolve: ', data)
}, function (data) {
    console.log('reject: ', data)
})
```

解决方案还是加个判断

```JS
class MyPromise {
  constructor(fn) {
    this.status = 'pending'
    this.emitTimes = 0
    this.resolveFn = this.rejectFn = () => {}
    fn(this.resolve, this.reject)
  }

  loop(fun) {
    this.emitTimes && fun(this.res)
    this.emitTimes --
    this.emitTimes > 0 && this.loop(fun)
  }

  resolve = (val) => {
    if (this.status === 'pending') {
      this.status = 'resolved'
        this.res = val
        this.loop(this.resolveFn)
    }
  }

  reject = (val) => {
    if (this.status === 'pending') {
      this.status = 'rejected'
        this.res = val
        this.loop(this.rejectFn)
    }
  }

  then(resolveFn, rejectFn) {
    this.emitTimes++
    this.resolveFn = resolveFn
    this.rejectFn = rejectFn
    if (this.status !== 'pending') {
      this.status === 'resolved' && this.resolveFn(this.res)
      this.status === 'rejected' && this.rejectFn(this.res)
    }
  }
}
```

:::tip
即便这样，相比原生的Promise还是存在很多问题，不过 Promise 大致原理已经一目了然，在以后的使用中自然胸有成竹，得心应手

如果想要了解更多，百度 `ES5实现Promise` 看更详细更全面的实现
:::
