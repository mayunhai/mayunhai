# 转化

## join() && split()

`join` 数组转字符串 && `split` 字符串转数组

这个算是比较常见处理方法，直接上例子了

```js
const arr = ['a', 'b', 'c']
console.log(arr.join('=')) //a=b=c
console.log(arr) //["a", "b", "c"]
const str = 'a,b,c'
console.log(str.split(',')) //["a", "b", "c"]
console.log(str) //'a,b,c'
```



## toString() && toLocaleString()

方法可把数组转换为字符串，并返回结果

```js
const arr = [12313, new Date()]
console.log(arr.toString()) //12313,Thu May 30 2019 13:48:52 GMT+0800 (中国标准时间)
console.log(arr) //[12313, Thu May 30 2019 13:48:52 GMT+0800 (中国标准时间)]
console.log(arr.toLocaleString()) //12,313,2019/5/30 下午1:48:52
console.log(arr) //[12313, Thu May 30 2019 13:48:52 GMT+0800 (中国标准时间)]
```

## valueOf()

是数组对象的默认方法

这个方法说实话至今不知道有什么用!!!

```js
const arr = ['a', 'b', 'c']
console.log(arr.valueOf()) //["a", "b", "c"]
console.log(arr) //["a", "b", "c"]
```
