<template>
  <div ref="outSide">
    <div ref="midSide">
      <button ref="inSide">test</button>
    </div>
  </div>
</template>

<script>
import { on, off } from '../util'

const arr = ['outSide', 'midSide', 'inSide']
const handle = (v, text) => {
  return () => {
    alert(`${v} ${text}`)
  }
}
const offArr = []

export default {
  name: 'BubblesCapture',
  props: {
    captureBubbles: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (this.captureBubbles) {
      this.capture()
      this.bubbles()
    } else {
      this.bubbles()
      this.capture()
    }
  },
  beforeDestroy() {
    offArr.forEach((v) => {
      off(this.$refs[v], 'click', v.handle, v.useCapture)
    })
  },
  methods: {
    bubbles() {
      arr.forEach((v) => {
        const obj = {
          handle: handle(v, '冒泡'),
          useCapture: false
        }
        offArr.push(obj)
        on(this.$refs[v], 'click', obj.handle, obj.useCapture)
      })
    },
    capture() {
      arr.forEach((v) => {
        const obj = {
          handle: handle(v, '捕获'),
          useCapture: true
        }
        offArr.push(obj)
        on(this.$refs[v], 'click', obj.handle, obj.useCapture)
      })
    }
  }
}
</script>
