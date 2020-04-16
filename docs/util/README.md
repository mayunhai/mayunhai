# 常用方法

## 数组去重

```js
/**
 * @description 数组去重
 * @param {Array} arr 需要被去重的数组
 * @return {Array}
 */
function uniqueArr(arr) {
  return Array.from(new Set(arr))
}
```


## 去抖函数

```js
/**
 * @description 去抖函数
 * @param {Function} func 触发的回调函数
 * @param {Number} wait 间隔时间（毫秒）
 * @param {Boolean} immediate 是否需要立刻执行函数 默认 false
 * @return {*}
 */
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

## 节流函数

```js
/**
 * @description 节流函数
 * @param {Function} func 触发的回调函数
 * @param {Number} wait 间隔时间（毫秒）
 * @return {*}
 */
function throttle(func, wait) {
  let previous = 0
  return function () {
    const now = Date.now()
    const context = this
    const args = arguments
    if (now - previous > wait) {
      func.apply(context, args)
      previous = now
    }
  }
}
```

## 格式化时间戳

```js
/**
 * @description 格式化时间戳
 * @param {String, Number} time 需要格式化时间或者时间戳
 * @param {String} cFormat 需要格式化的样式 默认 '{y}-{m}-{d} {h}:{i}:{s}'
 * @return {String}
 */
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

## 千分号格式化数字

```js
/**
 * @description 千分号格式化数字
 * @param {Number} s 需要被格式化的数字
 * @param {Number} n 保留小数的位数 默认2
 * @return {String}
 */
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


## 克隆一个对象或者数组(深拷贝)

```js
/**
 * @description 克隆一个对象或者数组(深拷贝)
 * @param {Object, Array} source 需要被拷贝的对象或者数组
 * @return {Object, Array}
 */
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

## 对象拼接URL传参字符串

```js
/**
 * @description 对象拼接URL传参字符串
 * @param {Object} json get传参对象
 * @return {String}
 */
function obj2Param(json) {
  if (!json) return ''
  return Object.assign([], Object.keys(json).map(key = {
    if (json[key] === undefined) return ''
    return encodeURIComponent(key) + '=' +
      encodeURIComponent(json[key])
  })).join('&')
}
```


## 获取URL参数

```js
/**
 * @description 获取URL参数
 * @param {String} url 需要解析参数的url
 * @return {Object}
 */
function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    // 避免出现==的入参
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}
```

## 垂直滚动

```js
/**
 * @description 垂直滚动
 * @param {HTMLElement} element 需要滚动的dom
 * @param {Number} to 需要滚动到的位置
 * @param {Number} duration 滚动过渡时间（毫秒）
 * @return {*}
 */
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

## ArrayBuffer转Base64

```js
/**
 * @description ArrayBuffer转Base64
 * @param {Array} buffer byte array
 * @return {String}
 */
function transformArrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let len = bytes.byteLength, i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}
```

## 拼音首字母排序

```js
/**
 * @description 拼音首字母排序
 * @param {Array} 中文汉字组成的数组
 * @return {Array}
 */
function sortByPinyin(arr) {
  return arr.sort((a, b) => a.localeCompare(b))
}
```






<style scoped>
.page h1 {
  font-size: 0;
  opacity: 0;
}
.page h2:first-child {
  padding-top: 4.6rem!important;
}
.page h2 {
  font-size: 1.2rem;
  padding-top: 3.2rem;
}
</style>