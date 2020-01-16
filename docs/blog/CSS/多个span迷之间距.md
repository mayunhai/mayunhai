## 多个span迷之间距

在一个`div`里面写入多个`span`标签，会发现他们之间自带一个很小的边距,如下：

```html
<style>
  .spanMargin{
    background: #e1e1e1
  }
</style>
<div>
  <span class="spanMargin">span1</span>
  <span class="spanMargin">span2</span>
  <span class="spanMargin">span3</span>
</div>
```
<style>
  .spanMargin{
    background: #e1e1e1
  }
</style>
<div>
  <span class="spanMargin">span1</span>
  <span class="spanMargin">span2</span>
  <span class="spanMargin">span3</span>
</div>

::: tip 原因分析
首先这里是非常容易被忽视的一个细节，因为往往设计这类 Tag 标签肯定会设计边距所以这样细小的边距就容易被忽视

出现这种问题原因是`span`标签换行带来的空格占位导致边距
:::

解决方案两种如下:

- 不换行

```html
<style>
  .spanMargin{
    background: #e1e1e1
  }
</style>
<div>
  <span class="spanMargin">span1</span><span class="spanMargin">span2</span><span class="spanMargin">span3</span>
</div>
```

<div>
  <span class="spanMargin">span1</span><span class="spanMargin">span2</span><span class="spanMargin">span3</span>
</div>

- 父标签字体大小设置为0，注意这里需要给span标签设置字体大小，不然就会消失都为0了

```html
<style>
  .spanMargin{
    background: #e1e1e1
  }
</style>
<div style="font-size:0px">
  <span class="spanMargin" style="font-size:16px">span1</span>
  <span class="spanMargin" style="font-size:16px">span2</span>
  <span class="spanMargin" style="font-size:16px">span3</span>
</div>
```

<div style="font-size:0px">
  <span class="spanMargin" style="font-size:16px">span1</span>
  <span class="spanMargin" style="font-size:16px">span2</span>
  <span class="spanMargin" style="font-size:16px">span3</span>
</div>