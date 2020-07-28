<template>
  <div>
    <p style="font-size: 1rem;">
      这是 1rem 文本,当前
      <b>html font-size: {{ fontSize }}px</b>，滑动下方滑块可修改html字体大小
    </p>
    <input type="range" min="12" max="20" step="1" :value="fontSize" @change="changeValue" />
  </div>
</template>


<script>
const htmlDom = document.querySelector("html");
const fontSize = parseInt(window.getComputedStyle(htmlDom).fontSize);

function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  const difference = to - element.scrollTop;
  const perTick = difference / (duration / 50);
  setTimeout(() => {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 50);
  }, 50);
}
export default {
  name: "RemDemo",
  data() {
    return {
      fontSize,
    };
  },
  created() {
    this.$router.afterEach(() => {
      this.fontSize = fontSize
      htmlDom.style.fontSize = ""
    })
  },
  methods: {
    changeValue(v) {
      this.fontSize = v.target.value
      htmlDom.style.fontSize = `${this.fontSize}px`
      this.$nextTick(() => {
        setTimeout(function () {
          const offsetTop = document.querySelector("input[type=range]")
            .offsetTop
          scrollTo(document.documentElement, offsetTop, 300)
        }, 300)
      })
    }
  }
}
</script>
