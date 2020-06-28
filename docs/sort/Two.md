# 第二梯队

## 希尔排序

```js
function ShellSort(arr) {
  //希尔排序的增量
  let d = arr.length
  while (d > 1) {
    //使用希尔增量的方式，即每次折半
    d = Math.ceil(d / 2)
    for (let x = 0; x < d; x++) {
      for (let i = x + d; i < arr.length; i = i + d) {
        if (arr[i - d] > arr[i]) {
          const temp = arr[i]
          arr[i] = arr[i - d]
          arr[i - d] = temp
        }
        console.log(`对比index ${i-d} - ${i}`, arr)
      }
    }
  }
  return arr
}

const arr = [7, 4, 3, 2]
ShellSort(arr)

// 对比index 0 - 2    [3, 4, 7, 2]
// 对比index 1 - 3    [3, 2, 7, 4]
// 对比index 0 - 1    [2, 3, 7, 4]
// 对比index 1 - 2    [2, 3, 7, 4]
// 对比index 2 - 3    [2, 3, 4, 7]
```
通过遍历可以看出一共遍历了5次，看起来还不如优化过的冒泡或者插入排序，其实用上面数组冒泡或者插入排序都会遍历6次，只有在元素组本身存在有序的情况下，冒泡和插入排序能够变简单，而且随着原数组长度增加，希尔排序的优势会越来越明显，不过希尔排序是一个**不稳定排序**

通过注释可以看出，先是每隔 2 (`arr.length / 2`)依次排序，然后再每间隔 1 (`arr.length / 2 / 2`)依次排序，像这样逐步分组进行粗调的排序方法，就是希尔排序，根据该算法的发明者，计算机科学家 `Donald Shell` 的名字所命名


## 快速排序（二十世纪十大算法之一）

```js
function quickSort(arr) {
  arrLength = arr.length
  let res = []
  // 随机选中基准元素
  const pivotIndex = Math.floor(Math.random() * arrLength)
  const pivotVal = arr[pivotIndex]
  console.log(`处理数组 ${arr} ,随机选择基准元素 ${pivotVal}`)
  let lesser = []
  let larger = []
  arr.forEach(v => {
    if (v !== pivotVal) {
      v < pivotVal ? lesser.push(v) : larger.push(v)
    }
  })
  console.log(`遍历数组把所有小于基准元素的放左边，大于放右边得到 ${[...lesser, pivotVal, ...larger]}`)
  lesser.length > 1 && (lesser = quickSort(lesser))
  larger.length > 1 && (larger = quickSort(larger))
  res = [...lesser, pivotVal, ...larger]
  return res
}

const arr = [3, 2, 1, 5, 7]
quickSort(arr)
// 处理数组 3,2,1,5,7 ,随机选择基准元素 3
//   遍历数组把所有小于基准元素的放左边，大于放右边得到 2,1,3,5,7
// 处理数组 2,1 ,随机选择基准元素 1
//   遍历数组把所有小于基准元素的放左边，大于放右边得到 1,2
// 处理数组 5,7 ,随机选择基准元素 7
//   遍历数组把所有小于基准元素的放左边，大于放右边得到 5,7
// 最终组合得到[1, 2, 3, 5, 7]
```
快速排序的平均时间复杂度仅仅为 `O(nlogn)` ，相比于普通选择排序和冒泡排序等而言，实在是历史性的创举。实现的方式也很简单一个递归搞定

:::tip
- 在每一轮挑选一个基准元素，并让其他比它大的元素移动到数列一边，比它小的元素移动到数列的另一边，从而把数列拆解成了两个部分然后分别重复上面的操作，这种思路就叫做**分治法**

- 那为什么要随机挑选基准元素呢？假设我们每次都选取第一个元素作为基准元素，且需要排序的数组为 `[4, 3, 2, 1]`，每次基准元素都是最大值，这样根本无法发挥分治法的优势，在这种极端条件下复杂度又变为了 `O(n²)`,所以我们随机选择一个元素作为基准元素，这样一来，即使在数列完全逆序的情况下，也可以有效地将数列分成两部分
:::



<br>
未完待续...
