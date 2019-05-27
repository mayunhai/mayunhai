## Array对象方法

### 基础处理
  - push()方法可向数组的末尾添加一个或多个元素，并返回新的长度

```js
const arr = ['a']
console.log(arr.push(1)) //2 把指定的值添加到数组后的新长度
console.log(arr) //["a", 1]
```

<br>

  - pop()方法用于删除并返回数组的最后一个元素

```js
const arr = ['a']
console.log(arr.pop()) //a 数组最后一个元素
console.log(arr) //[]
```

<br>

  - unshift()方法可向数组的开头添加一个或更多元素，并返回新的长度

```js
const arr = ['a']
console.log(arr.unshift(1)) //2 数组新长度
console.log(arr) //[1, "a"]
```

<br>

  - shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。

```js
const arr = ['a', 1]
console.log(arr.shift()) //a 数组原来的第一个元素的值
console.log(arr) //[1]
```

<br>

  - slice(start,end)方法可从已有的数组中返回选定的元素。

<table>
  <tr>
    <th style="width:30px">参数</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>start</td>
    <td>必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推</td>
  </tr>
  <tr>
    <td>end</td>
    <td>可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素</td>
  </tr>
</table>

```js
const arr = [0, 1, 2, 3, 4, 5, 6]
console.log(arr.slice(2, 3)) // [2]
console.log(arr.slice(2)) // [2, 3, 4, 5, 6]
console.log(arr.slice(-2)) // [5, 6]
console.log(arr.slice(-2, -1)) // [5]
console.log(arr) // 不会修原数组  [0, 1, 2, 3, 4, 5, 6]
```

<br>

  - splice
  - concat
  - fill
  - copyWithin
  - concat
  - reverse

### 遍历
  - forEach
    - Object.values(arr).forEach
    - Object.keys(arr).forEach
  - map
  - entries
  - keys

### 判断
  - indexOf
  - lastIndexOf
  - includes
  - isArray

### 方法判断
  - every
  - some
  - findIndex

### 方法处理
  - filter
  - sort
  - reduce
  - reduceRight

### 转化
  - join数组转字符串 && split字符串转数组
  - valueOf
  - toString && toLocaleString(Date, number)

