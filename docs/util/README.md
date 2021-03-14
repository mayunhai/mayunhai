# 常用方法

<p></p>

## 常用判断

:::tip
有的人可能会不解，为什么类型判断不直接用 `typeof` ，其实仅用 `typeof` 判断是存在Bug的，具体详见 [玉伯的分享](https://github.com/lifesinger/blog/issues/175)
:::

```js
function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]'
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE
}

function isIE() {
  return !isNaN(Number(document.documentMode))
};

function isEdge() {
  return navigator.userAgent.indexOf('Edge') > -1
};

function isFirefox() {
  return !!window.navigator.userAgent.match(/firefox/i)
};
```

## 首字母大写

```js
function capitalize(str) {
  str = String(str)
  return str.charAt(0).toUpperCase() + str.slice(1)
}
```

## 事件封装（兼容IE5-8）

```js
function on(element, event, handler, capture = false) {
  if (element && event && handler) {
    if (document.addEventListener) {
      element.addEventListener(event, handler, capture)
    } else {
      element.attachEvent('on' + event, handler)
    }
  }
}

function off(element, event, handler, capture = false) {
  if (element && event && handler) {
    if (document.addEventListener) {
      element.removeEventListener(event, handler, capture)
    } else {
      element.detachEvent('on' + event, handler)
    }
  }
}

// 直接 addEventListener options 里面配置 once 为 true 也是可以的，只是不兼容IE5-8
function once(el, event, fn) {
  const listener = function() {
    if (fn) {
      fn.apply(this, arguments)
    }
    off(el, event, listener)
  };
  on(el, event, listener)
}

function triggerEvent(elm, name, ...opts) {
  let eventName;

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents'
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent'
  } else {
    eventName = 'HTMLEvents'
  }
  const evt = document.createEvent(eventName)

  evt.initEvent(name, ...opts)
  elm.dispatchEvent
    ? elm.dispatchEvent(evt)
    : elm.fireEvent('on' + name, evt)

  return elm
}
```

## class操作

```js
const hasClass = function(obj, cls) {
  return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

const addClass = function(obj, cls) {
  if (!hasClass(obj, cls)) obj.className += ' ' + cls
}

const removeClass = function(obj, cls) {
  if (hasClass(obj, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    obj.className = obj.className.replace(reg, ' ')
  }
}

const toggleClass = function(obj, cls) {
  if (hasClass(obj, cls)) {
    removeClass(obj, cls)
  } else {
    addClass(obj, cls)
  }
}
```

## cookie

```js
function setCookie(cname, cvalue, exdays = 99999) {
  const d = new Date()
  d.setTime(d.getTime() + (exdays*24*60*60*1000))
  const expires = "expires="+ d.toUTCString()
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) == ' ') {
          c = c.substring(1)
       }
       if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length)
       }
   }
  return "";
}
```

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

:::tip
下面两个方法功能容易被混淆，这里强调一下
- 去抖：在小于固定延时 `wait` 中连续触发时不触发，直到超过延时阈值才会触发，`immediate` 传参为 `true` 是立刻触发（连续触发无论多久一轮只会触发一次）

- 节流：在小于固定延时 `wait` 中连续触发时每隔 `wait` 触发一次（连续触发可能触发多次）
:::

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
  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp
    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
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
  return function() {
    args = arguments
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

:::tip
用 `new Date()` 把字符串转化为时间戳的时候
IOS只支持 '2016/06/18 11:11:11'，不支持 '2016-06-18 11:11:11' 的转换，安卓双支持

所以需要 `time = time.replace(new RegExp(/-/gm), '/')` 处理后再统一处理
:::

```js {23}
/**
 * @description 格式化时间戳
 * @param {String, Number} time 需要格式化时间或者时间戳
 * @param {String} cFormat 需要格式化的样式 默认 '{y}-{m}-{d} {h}:{i}:{s}'
 * @return {String}
 */
function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
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
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
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
  for (let i = 0; i < l.length; i++)
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "")
  if (n == 0)
    return t.split("").reverse().join("")
  else
    return t.split("").reverse().join("") + "." + r
}
```


## 克隆一个对象或者数组(深拷贝)

:::tip
浅拷贝：`Object.assign([], arr)`、`Object.assign({}, obj)` or `[...arr]`、`{...obj}`

这里我想要强调一下，浅拷贝是复制一层不是直接赋值，面试过很多人对此都有误解。其实大部分场景浅拷贝足矣，无需深拷贝
:::

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
  return Object.assign([], Object.keys(json).map(key => {
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


## key Codes

```js
const keyCodes = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
})
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
  setTimeout(() => {
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
 * @param {Array} arr 中文汉字组成的数组
 * @return {Array}
 */
function sortByPinyin(arr) {
  return arr.sort((a, b) => a.localeCompare(b))
}
```

## 扁平数据转树数据(已知单根)

```js
/**
 * @description 扁平数据转树数据
 * @param {Array} items 元素组
 * @param {Array} id 根id 默认 null
 * @param {Array} link 父id 字段名称 默认 parentId
 * @return {Array}
 */
function flat2Tree(items, id = null, link = 'parentId') {
  return items
    .filter(item => item[link] === id)
    .map(item => ({
      ...item,
      children: flat2Tree(items, item.id，link)
    }))
}
```

<!-- ## 扁平数据转树数据(未知根)

```js
/**
 * @description 扁平数据转树数据(未知根)
 * @param {Array} items 元素组
 * @param {Array} link 父id 字段名称 默认 parentId
 * @return {Array}
 */
function flat2Tree(items, link = 'parentId') {
  const res = []
  const parentIdArr = []
  items.forEach(element => {
    parentIdArr.push(element.id)
    element.children = []
    const parentId = element[link]
    if (parentIdArr.includes(parentId)) {
      (function loop(res) {
        res.forEach(v => {
          if (v.id === parentId) {
            v.children.push(element)
          } else {
            loop(v.children)
          }
        })
      })(res)
    } else {
      res.push(element)
    }
  })
  return res
}
``` -->



<br>
未完待续...




<style scoped>
#常用方法 {
  display: none;
}
h2 {
  font-size: 1.35rem;
}
</style>
