# 第二梯队排序

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
          [arr[i], arr[i - d]] = [arr[i - d], arr[i]]
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

## 归并排序

归并排序类似于擂台赛，两两一组最后决出冠军，区别在于擂台赛只需要知道前面几位选手的排名，但是排序则需要全量排序，这里我们就要用到可以将两个已经有序的数组进行合并排序的方法叫做 `归并`，对应英文单词 `merge`，方法很简单两个数组依次取出第一个元素比较大小，小的存入结果再取下一位继续比较，直到两个数组值全部取完，实现的代码如下，相比之前的排序代码稍稍有些长，但是其实就是一个递归一个`merge`,结合注释看应该不难懂

```js
function mergeSort(arr) {
  let groups = []
  // 合并两个已排序的数组
  const merge = (arr) => {
    const a = arr[0]
    const b = arr[1]
    const res = []
    let aIndex = 0
    let bIndex = 0
    // 如果 index 存在，推a里面的元素进结果，否则推b
    const pushItem = (index) => {
      if (index) {
        res.push(a[aIndex])
        aIndex++
      } else {
        res.push(b[bIndex])
        bIndex++
      }
    }
    // 依次遍历数组直到全部遍历完成
    while (aIndex < a.length || bIndex < b.length) {
      if (a[aIndex] && b[bIndex]) {
        // a小就推a，否则推b的元素
        a[aIndex] < b[bIndex] ? pushItem(1) : pushItem()
      } else {
        // 若一个数组全部推完，则把另外一个数组元素全部推入
        a[aIndex] && pushItem(1)
        b[bIndex] && pushItem()
      }
    }
    return res
  }

  // 两两分组排序，如果 length 是基数最后一组一个一组
  function divideIntoGroups(arr) {
    groups = []
    arr.forEach((v, i) => {
      // 遍历依次结果为 0 0 1 1 2 2...
      const groupIndex = Math.ceil((i + 1) / 2) - 1
      groups[groupIndex] || (groups[groupIndex] = [])
      const groupItem = groups[groupIndex]
      // 第一个元素后推，第二个元素小于第一个元素前推，大于后退
      if (groupItem.length === 1 && v < groupItem[0]) {
        groupItem.unshift(v)
      } else {
        groupItem.push(v)
      }
      // 如果元素是数组则需要 merge 合并两个有序数组
      if (groupItem.length === 2 && Array.isArray(v)) {
        groups[groupIndex] = merge(groupItem)
      }
    })
    console.log(`两两分组后: ${JSON.stringify(groups)}`)
    // 递归直到 groups 两两组合只剩下一个元素
    groups.length > 1 && divideIntoGroups(groups)
  }
  divideIntoGroups(arr)
  return groups[0]
}

const arr = [4, 1, 3, 5, 6, 8, 7]
mergeSort(arr)

// 第一次两两分组后: [[1,4],[3,5],[6,8],[7]]
// 第二次两两分组后: [[1,3,4,5],[6,7,8]]
// 第三次两两分组后: [[1,3,4,5,6,7,8]]
// [1,3,4,5,6,7,8]
```

## 堆排序
看了很多文字类的文章说实话还是比较难以理解，后来看了一张 `GIF` 动图，感觉瞬间秒懂。这里建议可以先去了解堆这种数据结构，然后再看下面这张动图对堆排序应该可以瞬间领悟

![heapSort](/mayunhai/heapSort.gif)

```js
function heapSort(arr) {
  // 创建二叉树
  const heap = []
  let maxParentIndex = 0 // 最后节点
  arr.forEach((value, index) => {
    let pos = null
    let parentIndex = null
    index > 0 && (pos = index % 2 == 1 ? 'left' : 'right') && (parentIndex = (index + index % 2) / 2 - 1)
    maxParentIndex = parentIndex
    heap.push({
      value,
      pos,
      parentIndex
    })
  })

  function nodeUpdate(parentIndex, deep,  maxIndex) {
    const leftItemIndex = (parentIndex + 1) * 2 - 1
    const rightItemIndex = (parentIndex + 1) * 2
    let changedIndex = null
    function adjust(index) {
      // 如果父节点值小于子节点则交换值
      if (heap[parentIndex].value < heap[index].value) {
        changedIndex = index
        [heap[parentIndex].value, heap[index].value] = [heap[index].value, heap[parentIndex].value]
      }
    }
    adjust(leftItemIndex)
    adjust(rightItemIndex)
    if (deep && changedIndex) {
      changedIndex < maxIndex && nodeUpdate(changedIndex, deep)
    }
  }

  // 遍历成最大堆
  for (let parentIndex = maxParentIndex; parentIndex >= 0; parentIndex--) {
    nodeUpdate(parentIndex)
  }

  console.log(`第一次最大堆${JSON.stringify([...heap], null, 2)}`)

  // 依次把堆顶替换到最末尾直到 1 位置
  for (let index = heap.length - 1; index > 1; index--) {
    // 堆顶与末尾替换
    [heap[0].value, heap[index].value] = [heap[index].value, heap[0].value]
    // 调整最大堆（parentIndex == 0，无需再调整）
    index > 2 && nodeUpdate(0, true, heap[index].parentIndex)
    console.log(`最大堆${JSON.stringify([...heap], null, 2)}`)
  }

  // 最后对比 0 1 位置的值
  const firstValue = heap[0].value
  if (firstValue > heap[1].value) {
    heap[0].value = heap[1].value
    heap[1].value = firstValue
  }

  const res = []
  heap.forEach(v => {
    res.push(v.value)
  })
  return res
}

const arr = [4, 1, 3, 5, 6, 8, 7]
heapSort(arr)

// 第一次最大堆[
//   { "value": 8, "pos": null, "parentIndex": null },
//   { "value": 4, "pos": "left", "parentIndex": 0 },
//   { "value": 6, "pos": "right", "parentIndex": 0 },
//   { "value": 1, "pos": "left", "parentIndex": 1 },
//   { "value": 5, "pos": "right", "parentIndex": 1 },
//   { "value": 3, "pos": "left", "parentIndex": 2 },
//   { "value": 7, "pos": "right", "parentIndex": 2 }
// ]
// 第二次最大堆[
//   { "value": 7, "pos": null, "parentIndex": null },
//   { "value": 4, "pos": "left", "parentIndex": 0 },
//   { "value": 6, "pos": "right", "parentIndex": 0 },
//   { "value": 1, "pos": "left", "parentIndex": 1 },
//   { "value": 5, "pos": "right", "parentIndex": 1 },
//   { "value": 3, "pos": "left", "parentIndex": 2 },
//   { "value": 8, "pos": "right", "parentIndex": 2 }
// ]
// 第三次最大堆[
//   { "value": 6, "pos": null, "parentIndex": null },
//   { "value": 3, "pos": "left", "parentIndex": 0 },
//   { "value": 4, "pos": "right", "parentIndex": 0 },
//   { "value": 1, "pos": "left", "parentIndex": 1 },
//   { "value": 5, "pos": "right", "parentIndex": 1 },
//   { "value": 7, "pos": "left", "parentIndex": 2 },
//   { "value": 8, "pos": "right", "parentIndex": 2 }
// ]
// 第四次最大堆[
//   { "value": 5, "pos": null, "parentIndex": null },
//   { "value": 3, "pos": "left", "parentIndex": 0 },
//   { "value": 4, "pos": "right", "parentIndex": 0 },
//   { "value": 1, "pos": "left", "parentIndex": 1 },
//   { "value": 6, "pos": "right", "parentIndex": 1 },
//   { "value": 7, "pos": "left", "parentIndex": 2 },
//   { "value": 8, "pos": "right", "parentIndex": 2 }
// ]
// 第五次最大堆[
//   { "value": 4, "pos": null, "parentIndex": null },
//   { "value": 1, "pos": "left", "parentIndex": 0 },
//   { "value": 3, "pos": "right", "parentIndex": 0 },
//   { "value": 5, "pos": "left", "parentIndex": 1 },
//   { "value": 6, "pos": "right", "parentIndex": 1 },
//   { "value": 7, "pos": "left", "parentIndex": 2 },
//   { "value": 8, "pos": "right", "parentIndex": 2 }
// ]
// 最后对比 index 0 1 的值[
//   { "value": 3, "pos": null, "parentIndex": null },
//   { "value": 1, "pos": "left", "parentIndex": 0 },
//   { "value": 4, "pos": "right", "parentIndex": 0 },
//   { "value": 5, "pos": "left", "parentIndex": 1 },
//   { "value": 6, "pos": "right", "parentIndex": 1 },
//   { "value": 7, "pos": "left", "parentIndex": 2 },
//   { "value": 8, "pos": "right", "parentIndex": 2 }
// ]
// [1, 3, 4, 5, 6, 7, 8]
```

:::tip
|          | 是原地排序 | 是否稳定 | 最好  | 最坏  | 平均  |
|  :-:     | :-:       |  :-:     | :-:   | :-:   | :-:   |
| 希尔排序  | √         | ×       | O(n^1.3) | O(n²) | O(nlogn) |
| 快速排序  | √         | ×       | O(n) | O(n²) | O(nlogn) |
| 归并排序  | ×         | √       | O(nlogn) | O(nlogn) | O(nlogn) |
| 堆排排序  | √         | ×       | O(nlogn) | O(nlogn) | O(nlogn) |

- 堆排序的平均性能比快速排序和归并排序略低，主要是由于二叉堆的父子节点在内存中并不连续，在访问内存数据时，对于顺序存储的数据，读写效率往往是最高的。
:::
