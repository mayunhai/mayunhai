## CSS动画性能优化will-change

will-change 我是在element UI里面看到的，觉得很新鲜就查了下用法很简单如下：

:::tip
chrome Rendering里面 FPS meter勾上即可观察,尝试删除will-change会出现明显低 fps 情况,加了之后明显相对稳定（说实话区别不是特别大，可能新属性支持不是特别好，反正加上就好了）

如果机器过好可以尝试缩短  `transition` 时间

切记请勿乱用，最好可以利用父标签 `hover` 伪类动态添加，更不能全局添加此属性
:::

```html
<style>
    .box{
        width: 50px;
        height: 80px;
        border: 1px solid;
        opacity: 1;
        transition: .2s;
        cursor: pointer;
        background: url(/mayunhai/test.jpg);
        background-size: cover;
    }
    .box:hover{
        will-change: height, opacity;
    }
    .box:active{
        width: 320px;
        height: 180px;
        opacity: .5;
    }
</style>
<div class="box"></div>
```

<style>
    .box{
        width: 50px;
        height: 80px;
        border: 1px solid;
        opacity: 1;
        transition: .2s;
        cursor: pointer;
        position: relative;
        background: url(/mayunhai/test.jpg);
        background-size: cover;
    }
    .box:hover{
        will-change: height, opacity;
    }
    .box:active{
        width: 320px;
        height: 180px;
        opacity: .5;
    }
</style>
<div class="box"></div>