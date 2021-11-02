# 其他

## 猴子爬山问题

一个猴子在一座N级的小山上爬山跳跃，猴子上山一步可跳1级或跳3级，试求上山有多少种不同的爬法（要求 `N` 为 `50` 时候计算时间小于1000ms）

```js {20}
const monkey = (n) => {
  let res = 0 // 全部都是一步

  // 阶乘(尾递归)，结果为num个元素全排列组合格式
  function factorial(num, total = 1) {
    if (num <= 1) return total
    return factorial(num - 1, num * total)
  }

  // 一次计算 0,1,2,3,4... 次三步下的所有可能累加
  let threeStepTimes = 0
  while (threeStepTimes * 3 <= n) {
    // 已知三步的次数，以及总台阶就能计算出一步的次数
    const oneStepTimes = n - threeStepTimes * 3
    const allStepTimes = oneStepTimes + threeStepTimes

    // 这里我们把一步当成黑球，三步当成白球，所以问题可以理解为m个黑球，n个白球排列组合
    // (m+n)! 为假设所有球颜色都不一样的排列方式，m!为m个不一样黑球的排列方式，n!为n个不一样白球的排列方式
    // 所以最终排列组合方式 (m+n)! / (m!n!)
    res += factorial(allStepTimes) / (factorial(oneStepTimes) * factorial(threeStepTimes))
    threeStepTimes++
  }

  console.log(`当总共有${n}个台阶的时候，猴子有${res}种方式上山`)
  return res
}

console.time('计算3用时')
monkey(3)
console.timeEnd('计算3用时')
console.time('计算50用时')
monkey(50)
console.timeEnd('计算50用时')

// 当总共有3个台阶的时候，猴子有2种方式上山
// 计算3用时: 0.122802734375ms
// 当总共有50个台阶的时候，猴子有122106097种方式上山
// 计算50用时: 0.07421875ms
```

## 实现加法
实现两个数字相加的功能，要求不能使用编程语言现有的四则运算

```js
const getSum = function(a, b) {
  while (b != 0) {
    const s = a ^ b
    b = (a & b) << 1
    a = s
  }
  return a
}

getSum(1, 2) // 3
getSum(2, 2) // 4
```

## 最大子序和
给定一个整数数组，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和

:::tip
- 输入: `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`
- 输出: `6`
- 解释: 连续子数组 `[4, -1, 2, 1]` 的和最大为 `6`
:::

### 基础版(依次遍历所有子序列和求最大值)
```js
const maxSubArray = function(arr) {
  const resArr = []
  for (let index = 0; index < arr.length; index++) {
    let res = arr[index]
    resArr.push(res)
    for (let j = index + 1; j < arr.length; j++) {
      res += arr[j]
      resArr.push(res)
    }
  }
  return Math.max(...resArr)
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
maxSubArray(arr) // 6
```

### 升级版(分治法)
```js
const maxSubArray = function(arr) {
  const resArr = []
  const leftArr = []
  const rightArr = []
  const d = Math.floor(arr.length / 2) // 中间index，分为左右两块数组
  const findSubArray = (begin, end) => {
    for (let index = begin; index <= end; index++) {
      let res = arr[index]
      resArr.push(res)
      for (let j = index + 1; j <= end; j++) {
        res += arr[j]
        resArr.push(res)
        // 记录左右边界值
        begin === 0 && j === end && leftArr.push(res)
        begin !== 0 && index === begin && rightArr.push(res)
      }
    }
  }
  // 记录左侧 子序和
  findSubArray(0, d)
  // 记录右侧 子序和
  d + 1 && findSubArray(d + 1, arr.length - 1)
  // 左右边界组合
  leftArr.forEach(v => {
    rightArr.forEach(el => {
      resArr.push(v + el)
    })
  })
  return Math.max(...resArr)
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
maxSubArray(arr) // 6
```


### 简洁版

这个版本无论从速度还是代码量方面明显要比上面的简单高效很多，上面两种都说把所有的子序和都算出来取最大值，而下面的方法就比较的巧妙，对较小的子序和及时舍弃避免不必要的计算

```js
const maxSubArray = function(nums) {
    let pre = 0
    maxSum = nums[0] // 当前最大子序和
    nums.forEach((x) => {
        // 当前最大累加与当前元素求最大，并更新当前最大累加
        pre = Math.max(pre + x, x)
        // 最大子序和与当前累加，并更新最大子序和
        maxSum = Math.max(maxSum, pre)
        console.log({pre, maxSum})
    });
    return maxSum
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
maxSubArray(arr) // 6
```

## 最长有效括号

给定一个只包含 `'('` 和 `')'` 的字符串，找出最长的包含有效括号的子串的长度。

:::tip
- 输入: `"(()"`
- 输出: `2`
- 解释: 最长有效括号子串为 `"()"`
<hr>
- 输入: `")()())"`
- 输出: `4`
- 解释: 最长有效括号子串为 `"()()"`
:::

遍历所有可能只需要计算以 `'('` 开头、 `')'` 结尾且左右括号出现的次数是一样的，则是有效括号并计算长度

```js
const longestValidParentheses = function(s) {
  const arr = [...String(s)]
  let res = null
  for (let index = 0; index < arr.length; index++) {
    for (let j = index + 1; j < arr.length; j += 2) {
      let leftTimes = 0
      let rightTimes = 0
      for (let i = index; i <= j; i++) {
        // 以 '(' 开头 ')' 结尾
        if (arr[index] === '(' && arr[j] === ')') {
            arr[i] === '(' ? leftTimes++ : rightTimes++
        }
      }
      if (leftTimes && leftTimes === rightTimes) {
        const length = j - index + 1
        res === null ? (res = length) : (length > res && (res = length))
      }
    }
  }
  return res
}

longestValidParentheses('(()') // 2
longestValidParentheses(')()()') // 4
longestValidParentheses(')()(') // 2
longestValidParentheses('())(') // 2
```

## 字典序的第K小数字

给定整数 n 和 k，找到 1 到 n 中字典序第 k 小的数字

注意：1 ≤ k ≤ n ≤ 109

:::tip
- 输入: n: `13`   k: `2`
- 输出: `10`
- 解释:
  - 1 到 n `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]`
  - 转成字典序 `[1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]`，所以第2小的数字是 `10`
:::

这个问题JS解决会异常简单，因为 JS `sort()` 方法默认就是基数排序

```js
const findKthNumber = (n, k) => {
  const arr = []
  for (let index = 1; index <= n; index++) {
    arr.push(index)
  }
  console.log(arr.sort())
  return [...arr.sort()][k - 1]
}

findKthNumber(13, 2)
// arr.sort() [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]
// 10
```

## [旋转数组](https://leetcode-cn.com/problems/rotate-array/)

给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

:::tip

- 输入: nums = [1, 2, 3, 4, 5, 6, 7], k = 3

- 输出: [5, 6, 7, 1, 2, 3, 4]

- 解释:

向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]

向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]

向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]

:::


```js
const rotate = function (nums, k) {
  const res = [];
  const l = nums.length
  for (const i in nums) {
    res[(k + i) % l] = nums[i]
  }
  return res
};

rotate([1, 2, 3, 4, 5, 6, 7], 3)
// [6, 7, 1, 2, 3, 4, 5]
```










<br>
未完待续...
