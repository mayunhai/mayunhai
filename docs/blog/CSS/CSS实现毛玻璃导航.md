## CSS实现毛玻璃导航

IOS系统常见的毛玻璃特效看起来很舒服，其实H5实现起来也很方便,主要使用[`backdrop-filter`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/backdrop-filter)实现，核心代码如下

```css
.navbar, .sidebar {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
```
