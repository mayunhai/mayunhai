# 判断

## indexOf()

方法可返回某个指定的字符串值在字符串中首次出现的位置

:::tip
- 字符串也能使用
- indexOf()

方法对大小写敏感
- 如果要检索的字符串值没有出现，则该方法返回 -1
:::

<table>
  <tr>
    <th style="width:30px">参数</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>searchvalue</td>
    <td>必需。规定需检索的字符串值</td>
  </tr>
  <tr>
    <td>fromindex</td>
    <td>可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索</td>
  </tr>
</table>

```js
const arr = [1, 2]
console.log(arr.indexOf(1)) //0
console.log(arr.indexOf(3)) //-1
console.log(arr.indexOf(1, 2)) //-1
const str = 'abc'
console.log(str.indexOf('b')) //1
```



## lastIndexOf()

和 `indexOf()` 相反，方法可返回一个指定的字符串值最后出现的位置

```js
const arr = [0, 1, 2, 1]
console.log(arr.lastIndexOf(1)) //3
console.log(arr.lastIndexOf(1, 1)) //1
console.log(arr.lastIndexOf(1, 0)) //-1
const str = 'babc'
console.log(str.lastIndexOf('b')) //2
```



## includes()

方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false

```js
const arr = [1, 2, 3]
console.log(arr.includes(1)) //true
console.log(arr.includes(4)) //false
```



## isArray()

方法用于判断一个对象是否为数组

```js
const arr = [1, 2, 3]
const str = 'abc'
console.log(Array.isArray(arr)) //true
console.log(Array.isArray(str)) //false
```


## every()

方法用于检测数组所有元素是否都符合指定条件

:::tip
- 不会对空数组进行检测
- 不会改变原始数组
:::

```js
const arr = [32, 33, 16, 40]
const arr2 = [22, 23, 26, 20]
console.log(arr.every((element) => {
    return element >= 18
})) //false
console.log(arr2.every((element) => {
    return element >= 18
})) //true
```



## some()

方法用于检测数组中的元素是否满足指定条件

:::tip
- 不会对空数组进行检测
- 不会改变原始数组
:::

```js
const arr = [32, 33, 16, 40]
const arr2 = [12, 13, 16,10]
console.log(arr.some((element) => {
    return element >= 18
})) //true
console.log(arr2.some((element) => {
    return element >= 18
})) //false
```



## findIndex()

方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置

:::tip
- 不会对空数组进行检测
- 不会改变原始数组
:::

```js
const arr = [32, 33, 16, 40]
const arr2 = [12, 13, 20,10]
console.log(arr.findIndex((element) => {
    return element >= 18
})) //0
console.log(arr2.findIndex((element) => {
    return element >= 18
})) //2
```
