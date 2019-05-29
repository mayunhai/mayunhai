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
const arr = ['a', 1]
console.log(arr.pop()) //1 数组最后一个元素
console.log(arr) //["a"]
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

::: tip
该方法并不会修改数组，而是返回一个子数组。如果想删除数组中的一段元素，应该使用方法 Array.splice()
:::

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
console.log(arr.slice(2, 3)) //[2]
console.log(arr.slice(2)) //[2, 3, 4, 5, 6]
console.log(arr.slice(-2)) //[5, 6]
console.log(arr.slice(-2, -1)) //[5]
console.log(arr) //不会修原数组  [0, 1, 2, 3, 4, 5, 6]
```

<br>

  - splice(index,howmany,item1,.....,itemX)方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素

::: tip
该方法会改变原始数组
:::

<table>
  <tr>
    <th style="width:30px">参数</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>index</td>
    <td>必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置</td>
  </tr>
  <tr>
    <td>end</td>
    <td>必需。要删除的项目数量。如果设置为 0，则不会删除项目</td>
  </tr>
  <tr>
    <td>item1, ..., itemX</td>
    <td>可选。向数组添加的新项目</td>
  </tr>
</table>

```js
const arr = [0, 1, 2, 3, 4, 5, 6]
console.log(arr.splice(2, 1, 9)) //[2]
console.log(arr) //[0, 1, 9, 3, 4, 5, 6]

const arr2= [0, 1, 2, 3, 4, 5, 6]
console.log(arr2.splice(2, 1)) //[2]
console.log(arr2) //[0, 1, 3, 4, 5, 6]
```

<br>

  - reverse()方法用于颠倒数组中元素的顺序

::: tip
该方法会改变原来的数组，而不会创建新的数组
:::

```js
const arr = [0, 1, 2, 3, 4, 5, 6]
console.log(arr.reverse()) //[6, 5, 4, 3, 2, 1, 0]
console.log(arr) //[6, 5, 4, 3, 2, 1, 0]
```

<br>

  - concat(arrayX,arrayX,......,arrayX)方法用于连接两个或多个数组

::: tip
该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本 
:::

```js
const arr = [1,2,3]
console.log(arr.concat(3, 4)) //[1, 2, 3, 3, 4]
console.log(arr) //[1, 2, 3]

const arr2= [0, 1, 2]
const arr3= [0, 1]
console.log(arr2.concat(arr3)) //[0, 1, 2, 0, 1]
console.log(arr2) //[0, 1, 2]
console.log(arr3) //[0, 1]
```

<br>

  - fill()方法用于将一个固定值替换数组的元素

<table>
  <tr>
    <th style="width:30px">参数</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>value</td>
    <td>必需。填充的值</td>
  </tr>
  <tr>
    <td>start</td>
    <td>可选。开始填充位置(默认为 0)</td>
  </tr>
  <tr>
    <td>end</td>
    <td>可选。停止填充位置 (默认为 array.length)</td>
  </tr>
</table>

```js
const arr = [1,2,3]
console.log(arr.fill('a')) //["a", "a", "a"]
console.log(arr) //["a", "a", "a"]

const arr2 = [1,2,3]
console.log(arr2.fill('a', 1, 3)) //[1, "a", "a"]
console.log(arr2) //[1, "a", "a"]
```

<br>

  - copyWithin(target, start, end)方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中

<table>
  <tr>
    <th style="width:30px">参数</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>target</td>
    <td>必需。复制到指定目标索引位置</td>
  </tr>
  <tr>
    <td>start</td>
    <td>可选。元素复制的起始位置(默认为 0)</td>
  </tr>
  <tr>
    <td>end</td>
    <td>可选。停止复制的索引位置 (默认为 array.length)。如果为负值，表示倒数</td>
  </tr>
</table>

```js
var arr = [0, 1, 2, 3, 4, 5];
console.log(arr.copyWithin(2, 0, 2)) //[0, 1, 0, 1, 4, 5]
console.log(arr) //[0, 1, 0, 1, 4, 5]

var arr2 = [0, 1, 2, 3, 4, 5];
console.log(arr2.copyWithin(2)) //[0, 1, 0, 1, 2, 3]
console.log(arr2) //[0, 1, 0, 1, 2, 3]
```

<br>

### 遍历
  - forEach(function(currentValue, index, arr), thisValue)方法用于调用数组的每个元素，并将元素传递给回调函数

:::tip
forEach() 对于空数组是不会执行回调函数的
::: 

直接上例子说明一切

```js
const arr = ['a', 'b'];
const arr2 = []
arr.forEach(function(v, i, arr) {
  console.log(v)
  console.log(i)
  console.log(arr)
})
// a
// 0
// ['a', 'b']
// b
// 1
// ['a', 'b']

arr.forEach(function(v) {
  this.push(v + '2')
}, arr2)
console.log(arr2) //["a2", "b2"]
```

<br>

  - map(function(currentValue, index, arr), thisValue)方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值

:::tip
  - map() 不会对空数组进行检测
  - map() 不会改变原始数组
  - map() 返回一个新数组(不过一定不要忘记写`return`)
:::

```js
const arr = [{v: 1}, {v: 2}]
const arr2 = arr.map(function(element) {
  element.s = element.v * 2
  return element
})
console.log(JSON.stringify(arr)) //[{"v":1,"s":2},{"v":2,"s":4}]
console.log(JSON.stringify(arr2)) //[{"v":1,"s":2},{"v":2,"s":4}]
```

这里可能有人会觉得上面刚说的不会改变原始数组，这里怎么就改变了，因为这里是对象的地址没有被改变，具体可以看下例对比

```js
const arr = [1, 2]
const arr2 = arr.map(function(element) {
  element = element * 2
  return element
})
console.log(JSON.stringify(arr)) //[1,2]
console.log(JSON.stringify(arr2)) //[2,4]
```

<br>



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

