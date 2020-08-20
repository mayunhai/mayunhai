# 遍历

## forEach()

方法用于调用数组的每个元素，并将元素传递给回调函数

:::tip
- `forEach()` 对于空数组是不会执行回调函数的
- `forEach()` 不会被 `return` 或者 `break` 打断，但是 `for` 循环遍历可以
:::

直接上例子说明一切

```js
const arr = ['a', 'b'];
const arr2 = []
arr.forEach(function(v, i, arr) {
  console.log(v)
  console.log(i)
  console.log(arr)
})
// a
// 0
// ['a', 'b']
// b
// 1
// ['a', 'b']

arr.forEach(function(v) {
  this.push(v + '2')
}, arr2)
console.log(arr2) //["a2", "b2"]
```



## map()

方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值

:::tip
- map() 不会对空数组进行检测
- map() 不会改变原始数组
- map() 返回一个新数组(不过一定不要忘记写`return`)
:::

```js
const arr = [{v: 1}, {v: 2}]
const arr2 = arr.map(function(element) {
  element.s = element.v * 2
  return element
})
console.log(JSON.stringify(arr)) //[{"v":1,"s":2},{"v":2,"s":4}]
console.log(JSON.stringify(arr2)) //[{"v":1,"s":2},{"v":2,"s":4}]
```

这里可能有人会觉得上面刚说的不会改变原始数组，这里怎么就改变了，因为这里是对象的地址没有被改变，具体可以看下例对比

```js
const arr = [1, 2]
const arr2 = arr.map(function(element) {
  element = element * 2
  return element
})
console.log(JSON.stringify(arr)) //[1,2]
console.log(JSON.stringify(arr2)) //[2,4]
```



## entries()

方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)

```js
const arr = [1, 2]
const iterator = arr.entries()
console.log(JSON.stringify(iterator.next())) //{"value":[0,1],"done":false}
console.log(JSON.stringify(iterator.next())) //{"value":[1,2],"done":false}
console.log(JSON.stringify(iterator.next())) //{"done":true}
```

