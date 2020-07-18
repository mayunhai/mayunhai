# 第一梯队排序

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


## 桶排序

桶排序的思路类似于计数排序，不过能过解决计数排序不能对非整数排序问题，但是个人觉得并不实用，只有在特殊的情况下才能够适用，一旦数据分布不够均匀还不如用常规排序方案，感兴趣的小伙伴可以直接点链接看看 [桶排序](https://mp.weixin.qq.com/s?__biz=MzIxMjE5MTE1Nw==&mid=2653195582&idx=1&sn=1e7ece4e48c20fb994e2cefdcbdce4c5&chksm=8c99ffe4bbee76f23d16ac1e0c7feeb16654ebb75e40d92c911bffa113059f52ce4508281a55&scene=21#wechat_redirect)

