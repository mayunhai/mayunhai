## 17行手写 promiseAll

:::tip
`const p = Promise.all([p1, p2, p3])`

- 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
- 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
:::

```js
const promiseAll = (arr) => {
  return new Promise((resolve, reject) => {
    let times = 0
    const res = []
    for (const i in arr) {
      arr[i].then(r => {
        res[i] = r
        times++
        if (times === arr.length) {
          resolve(res)
        }
      }).catch(e => {
        reject(e)
      })
    }
  })
}
```

使用方法如下:

```js
const p1 = new Promise((resolve, reject) => {
  resolve('hello')
})

const p2 = new Promise((resolve, reject) => {
  resolve('asda')
})

const p3 = new Promise((resolve, reject) => {
  resolve(1231)
})

promiseAll([p1, p2, p3]).then(res => {
  console.log(res) // ['hello', 'asda', 1231]
})
Promise.all([p1, p2, p3]).then(res => {
  console.log(res) // ['hello', 'asda', 1231]
})
```

```js
const p1 = new Promise((resolve, reject) => {
  resolve('hello')
})

const p2 = new Promise((resolve, reject) => {
  resolve('asda')
})

const p3 = new Promise((resolve, reject) => {
  reject(1231)
})

promiseAll([p1, p2, p3]).catch(res => {
  console.log(res) // 1231
})
Promise.all([p1, p2, p3]).catch(res => {
  console.log(res) // 1231
})
```
