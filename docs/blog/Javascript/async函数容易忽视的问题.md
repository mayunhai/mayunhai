## async函数容易忽视的问题


`async` 给处理 `Promise` 对象带来的极大的方便，详细用法参照 [es6.ruanyifeng async](https://es6.ruanyifeng.com/#docs/async)

:::tip
`async` 是 `Generator` 的语法糖，主要区别在用于他自带触发器
:::

`async` 函数完全可以看作多个异步操作，包装成的一个 `Promise` 对象，而 `await` 命令就是内部 `then` 命令的语法糖，我们来看两个例子

- #### 例一

```js
(async() => {
  console.time('time')
  const res1 = await new Promise(function(resolve, reject){
    setTimeout(() => {
      resolve(1)
    }, 2000);
  })
  const res2 = await new Promise(function(resolve, reject){
    setTimeout(() => {
      resolve(2)
    }, 3000);
  })
  console.log({res1, res2}) // {res1: 1, res2: 2}
  console.timeEnd('time')   // time: 5001.3740234375ms
})()
```

- #### 例二

```js
(async() => {
  console.time('time')
  p1 = new Promise(function(resolve, reject){
    setTimeout(() => {
      resolve(1)
    }, 2000);
  })
  p2 = new Promise(function(resolve, reject){
    setTimeout(() => {
      resolve(2)
    }, 3000);
  })

  const res1 = await p1
  const res2 = await p2
  console.log({res1, res2}) // {res1: 1, res2: 2}
  console.timeEnd('time')   // time: 3007.679931640625ms
})()
```

例一应该是经常容易被写出来的一种情况，大部分情况我们都会想要让两个 `Promise` 对象并行执行，但是显然这样写会依次执行，那么怎么解决呢？很简单先定义再 `await`，有的人可能会疑惑这样的话，同一个 `Promise` 对象岂不是被执行了两次，其实不是的，`Promise` 对象在被定义的时候就会被执行，只会被执行一次且是单向的（要么 `resolve`，要么 `reject`)，如果对此模糊的小伙伴建议阅读 [15行简单实现 Promise](/blog/Javascript.html#_15行简单实现-promise)
