# 方法处理

## filter()

方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素

:::tip
- 不会对空数组进行检测
- 不会改变原始数组
:::

```js
const arr = [32, 33, 16, 40]
console.log(arr.filter((element) => {
    return element >= 18
})) //[32, 33, 40]
```



## sort()

[sort() 参考按照拼音首字母排序](/util/#拼音首字母排序)

## reduce()

方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值

```js
const arr = [1, 2, 3]
console.log(arr.reduce((total, num) => {
    return total - num
})) //-4 (1 - 2 - 3)
```



## reduceRight()

与上面相反

```js
const arr = [1, 2, 3]
console.log(arr.reduceRight((total, num) => {
    return total - num
})) //0 (3 - 2 - 1)
```
