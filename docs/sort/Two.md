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


<br>
未完待续...
