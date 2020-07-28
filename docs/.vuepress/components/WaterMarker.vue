
<template>
  <div class="warp">
    <div class="content">
      <p>假设这里是内容</p>
      <button onclick="alert(1)">点击这里</button>
      <p>假设这里是内容</p>
      <p>假设这里是内容</p>
      <p>假设这里是内容</p>
      <p>假设这里是内容</p>
      <p>假设这里是内容</p>
      <p>假设这里是内容</p>
      <p>假设这里是内容</p>
      <p>假设这里是内容</p>
    </div>
    <div class="watermark-mask" id="watermark-mask"></div>
  </div>
</template>


<script>
export default {
  name: "WaterMarker",
  mounted() {
    this.$nextTick(() => {
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
      this.addWaterMarker(str)
    })
  },
  methods: {
    addWaterMarker(str) {
      let can = document.createElement('canvas')
      const mask = document.querySelector('#watermark-mask')
      const fontSize = 18 // 字体大小
      const vMargin = 5 * fontSize
      const xMargin = 300
      mask.appendChild(can)
      can.width = 600 //画布的宽
      can.height = 2 * (vMargin + fontSize) //画布的高度
      can.style.display = 'none'
      var cans = can.getContext('2d')
      cans.font = `${fontSize}px Microsoft YaHei` //画布里面文字的字体
      cans.fillStyle = "rgba(0, 0, 0, 0.20)" //画布里面文字的颜色
      cans.fillText(str, 0, fontSize * 2 + vMargin * 3 / 2) //画布里面文字的间距比例
      cans.fillText(str, xMargin, fontSize * 2 + vMargin * 3 / 2) //画布里面文字的间距比例
      cans.fillText(str, xMargin / 2, fontSize + vMargin / 2) //画布里面文字的间距比例
      cans.fillText(str, xMargin / 2 - xMargin, fontSize + vMargin / 2) //画布里面文字的间距比例
      cans.fillText(str, xMargin / 2 + xMargin, fontSize + vMargin / 2) //画布里面文字的间距比例
      mask.style.backgroundImage = "url(" + can.toDataURL("image/png") + ")" //把画布插入到mask中
    },
  },
}
</script>

<style>
.warp {
  position: relative;
  overflow: hidden;
}
.watermark-mask {
  width: 700%;
  height: 700%;
  top: -300%;
  left: -300%;
  transform: rotate(-40deg);
  transform-origin: 50% 50%;
  /* 此处为了掩饰用了 absolute，实际应该 fixed */
  position: absolute;
  pointer-events: none;
}
</style>
