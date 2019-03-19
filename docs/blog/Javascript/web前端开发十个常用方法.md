## web前端开发十个常用方法

本篇文章主要总结web前端开发过程当中一些相对比较细节的常用方法。
**（以下方法多使用ES6语法，若要使用需根据项目需求考虑兼容性问题）**


### 1. 数组去重

```
function uniqueArr(arr) {
  return Array.from(new Set(arr))
}
```

运用场景：数组去重是一种比较常见的计算需求，方法也有很多种，这种算是利用ES6语法中Set对象比较优雅的一种

例如：
```
const arr = [1, 2, 3, 1, 1, 2, 3, 4]
console.log(uniqueArr(arr)) //输出[1, 2, 3, 4]
```


### 2. 去抖函数

```
function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result
  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp
    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last  0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }
  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }
    return result
  }
}
```

运用场景：在规定延迟内连续触发只执行一次，如果第三个参数传true则在最开始就触发。去抖函数其实在很多UI中模糊远程查询都有集成，在拥有echart等(canvas或SVG图表插件)自适应页面中 window.addEventListener('resize', function)配合抖动函数在改变窗口大小时候对图表进行重绘会比较合适，有效减少触发重绘次数，保证良好用户体验

例如：
```
<button id="test"测试</button
<script
  const Hanlder = debounce(() = {
    console.log('触发成功') //连续点击按钮，在控制台即可看到效果
  }, 300)
  document.querySelector("#test").addEventListener("click", Hanlder)
</script
```


### 3. 格式化时间戳

```
function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) = {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length  0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}
```

运用场景：轻轻松松把时间戳或者时间日期对象转化成自己想要输出的格式，可以减少服务器运算同是若是时间输出格式变更需求无需更改后端，前端修改即可，或许这点计算并不算什么，但是积羽沉舟。

例如：
```
const now = new Date()
//以'{y}-{m}-{d} {h}:{i}:{s}'格式化的当前时间
console.log(parseTime(now)) 
//以'{y}年{m}月{d}日 {h}时{i}分{s}秒'格式化的昨天时间
console.log(parseTime(now.getTime() - 3600 * 1000 * 24, '{y}年{m}月{d}日 {h}时{i}分{s}秒')) 
```


### 4. 千分号格式化数字

```
function fomatNumber(s, n) {
  n = n = 0 && n <= 20 ? n : 2
  s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + ""
  var l = s.split(".")[0].split("").reverse()
  r = s.split(".")[1]
  t = ""
  for (i = 0 i < l.length i++)
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "")
  if (n == 0)
    return t.split("").reverse().join("")
  else
    return t.split("").reverse().join("") + "." + r
}
```

运用场景：把过长的数字尤其是金额用千分号隔开，方便用户能够更快的识别数字金额大小

例如：
```
console.log(fomatNumber（23123.123）) //23,123.12
console.log(fomatNumber（23123.123, 0）) //123,123
```


### 5. 克隆一个对象或者数组

```
function deepClone(source) {
  if (typeof source == 'object') {
    const targetObj = source.constructor === Array ? [] : {}
    Object.keys(source).forEach((keys) = {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = deepClone(source[keys])
      } else {
        targetObj[keys] = source[keys]
      }
    })
    return targetObj
  }
}
```

运用场景：这个方法就是克隆一个对象或者数组，在开发当中接口返回的数据往往并不是特别理想，在需要对接口数据做处理运算的时候克隆往往是一个经常可以用的到的方法。

例如：
```
const arr = [1, 2, 3, 4]
const obj = {a: 1, b: 2, c: 3}
const arrClone = deepClone(arr)
const objClone = deepClone(obj)
arr.push(6)
obj.a = 6
console.log(arr) //[1, 2, 3, 4, 6]
console.log(obj) //{a: 6, b: 2, c: 3}
console.log(arrClone) //[1, 2, 3, 4]
console.log(objClone) //{a: 1, b: 2, c: 3}
```


### 6. 计算字符串相对长度

```
function getByteLen(val) {
  let len = 0
  for (let i = 0 i < val.length i++) {
    if (val[i].match(/[^\x00-\xff]/ig) != null || (val[i] = 'A' && val[i] <= 'Z')) {
      len += 1
    } else { len += 0.5 }
  }
  return Math.floor(len)
}
```

运用场景：这个方法就是把所有中文字符算成1，其他字符串计算为0.5，然后向下取整（这里我们可以延伸一个有趣的问题 Math.floor和parseInt()的区别 有兴趣的小伙伴可以试试 Math.floor(-1.5)、parseInt(-1.5)、parseInt(1111,2)）。看起来毫无意义但是在某些特殊场景还是很有必要，比如遍历一个未知的表格时候，对于表头的长度我们无法控制（接口或者计算返回）的情况下对于过长表头我们不想出现换行以及省略号的形式的时候，可以用次方法计算字符串长度然后乘以一个值来定义table-column的长度。

例如：
```
console.log(getByteLen(1231231231231)) //0
console.log(getByteLen('1231231231231')) //6
console.log(getByteLen('asdasdasdasda')) //6
console.log(getByteLen('我就想测试一下')) //7
```

### 7. 相除

```
  function divide(a, b) {
    if ((a !== 0 && !a) || (b !== 0 && !b)) {
      return 0 //这里当a或者b不存在时默认输出为0，可根据需求自行修改
    } else {
      a = parseFloat(a)
      b = parseFloat(b)
      if (b === 0) {
        return 0 //这里当分母为0时候默认输出为0了，可根据需求自行修改
      } else {
        const res = a / b
        return res
      }
    }
  }
```

运用场景：需要计算两个值相除的值，对于同比环比也可以根据业务需求进行类似封装

例如：
```
const { a, b } = { a: 1, b: 2 }
console.log(divide(a, b)) //输出0.5
```

### 8. 对象拼接URL传参字符串

```
  function param(json) {
    if (!json) return ''
    return Object.assign([], Object.keys(json).map(key = {
      if (json[key] === undefined) return ''
      return encodeURIComponent(key) + '=' +
        encodeURIComponent(json[key])
    })).join('&')
  }
```

运用场景：把对象转化成GET传参url可用参数字符串，大部分ajax库都有封装，特殊情况下使用

例如：
```
obj = {
  id: 1,
  name: 'mayunhai',
  sex: 1
}
console.log(param(obj)) //id=1&name=mayunhai&sex=1
```

### 9. 获取URL参数

```
function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}
```

运用场景：用户把url中GET传参的参数转化成对象方便使用的场景，不过目前主流框架路由都有相对于的方法可以得到一样的效果

例如：
```
const url = 'www.tuniu.com?id=1231&name=mayunhai&sex=1'
console.log(param2Obj(url)) //{id: "1231", name: "mayunhai", sex: "1"}
```

### 10. 垂直滚动

```
function scrollTo(element, to, duration) {
  if (duration <= 0) return
  const difference = to - element.scrollTop
  const perTick = difference / (duration / 50)
  setTimeout(() = {
    element.scrollTop = element.scrollTop + perTick
    if (element.scrollTop === to) return
    scrollTo(element, to, duration - 50)
  }, 50)
}
```

运用场景：让一个拥有垂直滚动条的元素在duration时间内滚动到制定高度

例如：
```
<div id="test" style="height:300px;overflow-y:auto;overflow-x:hidden" </div
<script
  let html = ''
  let i = 0
  while (i < 100) {
    html += `${i}test<br`
    i++
  }
  document.querySelector("#test").innerHTML = html
  scrollTo(document.querySelector("#test"), 1000, 400)
</script
```