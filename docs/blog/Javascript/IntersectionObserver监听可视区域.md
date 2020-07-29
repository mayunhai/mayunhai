## IntersectionObserver监听可视区域

[Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) 算是一个比较少见的 [API](/blog/#api（接口）)，但是它对于一些可视区域监听，性能方面远高于传统的 `onscroll` + 去抖监听，应用场景也比较多比如懒加载、埋点上报、滚动特效，这里我写个懒加载的 [在线demo](https://6f2is.csb.app/) 体验一下，核心代码如下

```js
const callback = function(entries) {
  entries.forEach(entrie => {
    const el = entrie.target
    if (entrie.intersectionRatio) {
      el.src = el.dataset.src
      observer.unobserve(el)
    }
  })
}
const options = { rootMargin: "100px" } // 预加载高度(距离100px则开始懒加载)
const observer = new IntersectionObserver(callback, options)
document.querySelectorAll(".lazy").forEach(el => {
  observer.observe(el)
})
```

:::tip
值得提的一点，可以通过配置 `IntersectionObserver.thresholds` 来对进入可视区域不同比例时监听
:::
