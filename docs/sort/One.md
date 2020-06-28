# 第一梯队

## 计数排序

计数排序就是新建一个数组用 `键值` 计次，`键名` 记录值，然后遍历输出即可，比如 `[2, 1, 0, 1]` 有一个 `0`、两个 `1`、一个 `2` 可以得到 `[1, 2, 1]`,然后再根据键名输出，键值控制次数输出结果`[0, 1, 1, 2]`
:::tip
  计数排序方法实现以及效率都是非常简单高效的，但是它有一定的局限性

  - 只适用于整数排序
  - 当数组最大最小值差距过大不适合用计数排序
:::

```js
// 计数排序
function countSort() {
  const countArr = [] // 用来计数的数组，键值：计次 / 键名：记值
  const res = []
  arr.forEach(v => {
    countArr[v] = countArr[v] ? ++countArr[v] : 1
  })
  countArr.forEach((v, i) => {
    for (let index = 0; index < v; index++) {
      res.push(i)
    }
  })
  console.log({countArr, res})
}

const arr = [9, 3, 5, 4, 9, 1, 2, 7, 8, 1, 3, 5, 3, 4, 0, 10, 9 , 7, 9]
countSort(arr)
// countArr: [1, 2, 1, 3, 2, 2, empty, 2, 1, 4, 1]
// res: [0, 1, 1, 2, 3, 3, 3, 4, 4, 5, 5, 7, 7, 8, 9, 9, 9, 9, 10]
```

<br>
未完待续...
