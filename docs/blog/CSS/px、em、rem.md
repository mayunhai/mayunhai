## px、em、rem
em 其实和 rem 类似，他们的大小都是相对于别人来定的

- em 相对于父标签的字体大小
- rem 相对于html标签的字体大小

举个例子如果HTML标签字体大小100px时候

```css
html {
  font-size: 100px;
}
```
1rem 就是等于 100px，0.12rem 就是等于 12px，以此类推，`em` 也是类似原理不过它是相对于父标签的字体大小

:::tip
这样做的好处只要修改部分字体就能全局或者局部的修改整体尺寸，这里有个提示就是如果希望在不同size下边距尺寸固定的话，那么边距尺寸用px即可
:::


```html
<p style="font-size: 20px;">
  这是 20px 文本
</p>

<div style="font-size: 20px;">
  <p style="font-size: 1em;">
    这是 1em 文本(父标签字体20px)
  </p>
</div>

<div style="font-size: 12px;">
  <p style="font-size: 1em;">
    这是 1em 文本(父标签字体12px)
  </p>
</div>

<template>
  <p style="font-size: 1rem;">
    这是 1rem 文本,当前 <b>html font-size: {{ fontSize }}px</b>，滑动下方滑块可修改html字体大小
  </p>
  <input type="range" min="12" max="20" step="1" :value="fontSize" @change="changeValue">
</template>

<script>
  const htmlDom = document.querySelector('html')
  const fontSize = parseInt(window.getComputedStyle(htmlDom).fontSize)

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
  export default {
    data() {
      return {
        fontSize
      }
    },
    methods: {
      changeValue(v) {
        this.fontSize = v.target.value
        htmlDom.style.fontSize = `${this.fontSize}px`
        this.$nextTick(() => {
          setTimeout(function () {
            const offsetTop = document.querySelector('input[type=range]').offsetTop
            scrollTo(document.documentElement, offsetTop, 300)
          }, 300)
        })
      }
    }
  }
</script>
```

<p style="font-size: 20px;">
  这是 20px 文本
</p>

<div style="font-size: 20px;">
  <p style="font-size: 1em;">
    这是 1em 文本(父标签字体20px)
  </p>
</div>

<div style="font-size: 12px;">
  <p style="font-size: 1em;">
    这是 1em 文本(父标签字体12px)
  </p>
</div>

<template>
  <p style="font-size: 1rem;">
    这是 1rem 文本,当前 <b>html font-size: {{ fontSize }}px</b>，滑动下方滑块可修改html字体大小
  </p>
  <input type="range" min="12" max="20" step="1" :value="fontSize" @change="changeValue">
</template>

<script>
  const htmlDom = document.querySelector('html')
  const fontSize = parseInt(window.getComputedStyle(htmlDom).fontSize)

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
  export default {
    data() {
      return {
        fontSize
      }
    },
    created() {
      this.$router.afterEach(() => {
        this.fontSize = fontSize
        htmlDom.style.fontSize = ''
      })
      this.$nextTick(() => {
        function addWaterMarker(str) {
          let can = document.createElement('canvas')
          const mask = document.querySelector('#watermark-mask')
          const fontSize = 18 // 字体大小
          const vMargin = 5 * fontSize
          mask.appendChild(can)
          can.width = 600 //画布的宽
          can.height = 2 * (vMargin + fontSize) //画布的高度
          can.style.display = 'none'
          var cans = can.getContext('2d')
          cans.font = `${fontSize}px Microsoft YaHei` //画布里面文字的字体
          cans.fillStyle = "rgba(0, 0, 0, 0.20)" //画布里面文字的颜色
          cans.fillText(str, 0, fontSize * 2 + vMargin * 3 / 2) //画布里面文字的间距比例
          cans.fillText(str, 300, fontSize * 2 + vMargin * 3 / 2) //画布里面文字的间距比例
          cans.fillText(str, 150, fontSize + vMargin / 2) //画布里面文字的间距比例
          cans.fillText(str, -150, fontSize + vMargin / 2) //画布里面文字的间距比例
          cans.fillText(str, 450, fontSize + vMargin / 2) //画布里面文字的间距比例
          mask.style.backgroundImage = "url(" + can.toDataURL("image/png") + ")" //把画布插入到mask中
        }

        const time = new Date()
        const formatObj = {
          y: time.getFullYear(),
          m: time.getMonth() + 1,
          d: time.getDate(),
          h: time.getHours(),
          i: time.getMinutes(),
          s: time.getSeconds()
        }
        const fillZero = (field) => {
          const value = formatObj[field]
          if (value < 10) {
            return '0' + value
          } else {
            return value
          }
        }
        //调用这个方法即可
        const str = `马云海  ${fillZero('y')}-${fillZero('m')}-${fillZero('d')} ${fillZero('h')}:${fillZero('i')}:${fillZero('s')}`
        addWaterMarker(str)
      })
    },
    methods: {
      changeValue(v) {
        this.fontSize = v.target.value
        htmlDom.style.fontSize = `${this.fontSize}px`
        this.$nextTick(() => {
          setTimeout(function () {
            const offsetTop = document.querySelector('input[type=range]').offsetTop
            scrollTo(document.documentElement, offsetTop, 300)
          }, 300)
        })
      }
    }
  }
</script>