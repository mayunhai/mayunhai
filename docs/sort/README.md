# 第三梯队

## 冒泡排序

```js
// 冒泡排序(基础版)
// 从左到右两两比对，每轮对比最后都会把最大的值移动到最末尾
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
      console.log(`对比index ${j} - ${j + 1}`, arr)
    }
  }
  return arr
}

const arr = [5, 1, 2, 7]
bubbleSort(arr)

// 对比index 0 - 1    [1, 5, 2, 7]
// 对比index 1 - 2    [1, 2, 5, 7]
// 对比index 2 - 3    [1, 2, 5, 7]
// 对比index 0 - 1    [1, 2, 5, 7]
// 对比index 1 - 2    [1, 2, 5, 7]
// 对比index 0 - 1    [1, 2, 5, 7]
```

通过打印可知一共遍历了6次（3 + 2 + 1），可以发现只要在第二次遍历的时候没有交换值，则说明排序已经完成，外层的便可 `break` 终止

```js
// 冒泡排序(优化版一)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 有序标记，每一轮的初始是true boolean
    let isSorted = true
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
        // 有元素交换，所以不是有序，标记变为false
        isSorted = false
      }
      console.log(`对比index ${j} - ${j + 1}`, arr)
    }
    if (isSorted) {
      break
    }
  }
  return arr
}

const arr = [5, 1, 2, 7]
bubbleSort(arr)

// 对比index 0 - 1    [1, 5, 2, 7]
// 对比index 1 - 2    [1, 2, 5, 7]
// 对比index 2 - 3    [1, 2, 5, 7]
// 对比index 0 - 1    [1, 2, 5, 7]
// 对比index 1 - 2    [1, 2, 5, 7]
```
经过优化遍历次数降低到5次，由上面可以看出其实最后一次的对比是毫无意义的，所以我们可以再优化一下

```js
// 冒泡排序(优化版二)
function bubbleSort(arr) {
  // 记录最后一次交换的位置
  let lastExchangeIndex = 0
  // 无序数列的边界，每次比较只需要比到这里为止
  let sortBorder = arr.length - 1 - 0
  for (let i = 0; i < arr.length; i++) {
    // 有序标记，每一轮的初始是true boolean
    let isSorted = true
    for (let j = 0; j < sortBorder; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
        // 有元素交换，所以不是有序，标记变为false
        isSorted = false
        // 把无序数列的边界更新为最后一次交换元素的位置
        lastExchangeIndex = j
      }
      console.log(`对比index ${j} - ${j + 1}`, arr)
    }
    sortBorder = lastExchangeIndex
    if (isSorted) {
      break
    }
  }
  return arr
}
const arr = [5, 1, 2, 7]
bubbleSort(arr)

// 对比index 0 - 1    [1, 5, 2, 7]
// 对比index 1 - 2    [1, 2, 5, 7]
// 对比index 2 - 3    [1, 2, 5, 7]
// 对比index 0 - 1    [1, 2, 5, 7]
```
经过优化遍历次数降低到4次

## 选择排序

```js
// 选择排序(逐个选择后面最小的元素和当前元素替换)
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      // 寻找最小的 index 值
      console.log(`确定[${i}]位最小值，对比index ${minIndex} - ${j}，当前最小值为${arr[arr[minIndex] < arr[j] ? minIndex : j]}`, arr)
      minIndex = arr[minIndex] < arr[j] ? minIndex : j
    }
    // 用最小的值替换当前元素
    const temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

const arr = [5, 1, 2, 7]
selectionSort(arr)

// 确定[0]位最小值，对比index 0 - 1，当前最小值为1    [5, 1, 2, 7]
// 确定[0]位最小值，对比index 1 - 2，当前最小值为1    [5, 1, 2, 7]
// 确定[0]位最小值，对比index 1 - 3，当前最小值为1    [5, 1, 2, 7]
// 确定[1]位最小值，对比index 1 - 2，当前最小值为2    [1, 5, 2, 7]
// 确定[1]位最小值，对比index 2 - 3，当前最小值为2    [1, 5, 2, 7]
// 确定[2]位最小值，对比index 2 - 3，当前最小值为5    [1, 2, 5, 7]
```
通过打印可知也是一共遍历了6次（3 + 2 + 1），假设 5，8，5，2 这样一组数据当我们使用选择排序的时候，最终的结果第二个5会排在第一个5前面（一开始2替换了第一个5的位置，让第一个5变成了第二个5），所以就不稳定了。正是因此，相对于冒泡排序和插入排序，选择排序就稍微逊色

## 插入排序

```js
// 插入排序(从左往右依次像打扑克一样把元素插入合适的位置)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let insertValue = arr[i]
    let j = i - 1
    //从右向左比较元素的同时，进行元素复制
    for (; j >= 0 && (console.log(`对比${insertValue} - ${arr[j]}`) || 1) && insertValue < arr[j]; j--) {
      arr[j + 1] = arr[j]
    }
    //insertValue的值插入适当位置
    arr[j + 1] = insertValue
    console.log(arr)
  }
  return arr
}

const arr = [5, 1, 2, 7]
insertionSort(arr)

// 对比1 , 5
// [1, 5, 2, 7]
// 对比2 , 5
// 对比2 , 1
// [1, 2, 5, 7] 把 2 插入在 1 和 5 中间
// 对比7 , 5
// [1, 2, 5, 7]
```
通过上述打印可以看出一共遍历了四遍（和优化过的冒泡排序一样），由此可见如果有一定顺序的排序中，优化过的 `冒泡排序` 和 `插入排序` 能够优先的节省不必要的计算，由此我们可以总结

:::tip
|          | 是原地排序 | 是否稳定 | 最好  | 最坏  | 平均  |
|  :-:     | :-:       |  :-:     | :-:   | :-:   | :-:   |
| 冒泡排序  | √         | √       | O(n) | O(n²) | O(n²) |
| 插入排序  | √         | √       | O(n) | O(n²) | O(n²) |
| 选择排序  | √         | ×       | O(n²) | O(n²) | O(n²) |
从代码实现上来看，冒泡排序的数据交换要比插入排序的数据移动要复杂的多,冒泡排序需要 3 个赋值操作，而插入排序只需要 1 个。所以插入排序要比冒泡排序更受欢迎
:::
