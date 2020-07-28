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

<ClientOnly>
  <RemDemo />
</ClientOnly>
