# 其他

## 猴子爬山问题

一个猴子在一座N级的小山上爬山跳跃，猴子上山一步可跳1级或跳3级，试求上山有多少种不同的爬法（要求 `N` 为 `50` 时候计算时间小于1000ms）

```js
const monkey = (n) => {
  let res = 1 // 全部都是一步
  if (n >= 3) {
    // 一次计算 1,2,3,4... 次三步下的所有可能累加
    let threeStepTimes = 1
    while (threeStepTimes * 3 <= n) {
      // 已知三步的次数，以及总台阶就能计算出一步的次数
      const oneStepTimes = n - threeStepTimes * 3
      const allStepTimes = oneStepTimes + threeStepTimes
      // 阶乘
      function factorial(n) {
        let res = 1
        for (let index = 2; index <= n; index++) {
          res = res * index
        }
        return res
      }
      // 这里我们把一步当成黑球，三步当成白球，m个黑球，n个白球，
      // (m+n)! 为假设所有球颜色都不一样的排列方式，m!为m个不一样黑球的排列方式，n!为n个不一样白球的排列方式
      // 所以最终排列组合方式 (m+n)! / (m!n!)
      res += factorial(allStepTimes) / (factorial(oneStepTimes) * factorial(threeStepTimes))
      threeStepTimes++
    }
  } else {
    // 小于3级，只能一级一级上所以只有一种方法
    return 1
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
// 计算3用时: 0.346923828125ms
// 当总共有50个台阶的时候，猴子有122106097种方式上山
// 计算50用时: 0.111083984375ms
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

<br>
未完待续...
