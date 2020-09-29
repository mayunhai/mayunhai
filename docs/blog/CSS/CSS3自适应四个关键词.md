## CSS3自适应四个关键词

移动端基本兼容

### -webkit-fill-available

自适应撑满，这个虽然弹性布局 `flex:1` 也能实现

```html
<!-- -webkit-fill-available -->
<style>
  .flex {
    display: flex;
  }

  .border {
    border: 1px solid;
  }
</style>

<div class="flex">
  <div class="border">
    test
  </div>
  <div class="border" style="width: -webkit-fill-available;">
    -webkit-fill-available
  </div>
  <div class="border">
    test
  </div>
</div>
```

<!-- -webkit-fill-available -->
<style>
  .flex {
    display: flex;
  }

  .border {
    border: 1px solid;
  }
</style>

<div class="flex">
  <div class="border">
    test
  </div>
  <div class="border" style="width: -webkit-fill-available;">
    -webkit-fill-available
  </div>
  <div class="border">
    test
  </div>
</div>

### fit-content

自适应缩放到最小，和 `inline-block` 效果类似

```html
<!-- fit-content -->
<style>
  .border {
    border: 1px solid;
  }
</style>

<div class="border" style="width: fit-content;">
  content
</div>
```

<div class="border" style="width: fit-content;">
  content
</div>


### min-content

```html
<!-- min-content -->
<style>
  .border {
    border: 1px solid;
  }

  .inline-block {
    display: inline-block;
  }

  .min-content {
    width: -webkit-min-content;
    width: -moz-min-content;
    width: min-content;
  }
</style>
<b>display:inline-block;</b>
<div class="border inline-block">
  <img src="https://dummyimage.com/320x180/0388e3&text=320x180">
  <p>display:inline-block具有收缩特性，但这里宽度随文字。而width:min-content随图片。</p>
</div>

<b>width: min-content;</b>
<div class="border min-content">
  <img src="https://dummyimage.com/320x180/0388e3&text=320x180">
  <p>display:inline-block具有收缩特性，但这里宽度随文字。而width:min-content随图片。</p>
</div>
```
<style>
  .inline-block {
    display: inline-block;
  }

  .min-content {
    width: -webkit-min-content;
    width: -moz-min-content;
    width: min-content;
  }
</style>

<b>display:inline-block;</b>
<div class="border inline-block">
  <img src="https://dummyimage.com/320x180/0388e3&text=320x180">
  <p>display:inline-block具有收缩特性，但这里宽度随文字。而width:min-content随图片。</p>
</div>

<b>width: min-content;</b>
<div class="border min-content">
  <img src="https://dummyimage.com/320x180/0388e3&text=320x180">
  <p>display:inline-block具有收缩特性，但这里宽度随文字。而width:min-content随图片。</p>
</div>

### max-content

```html
<!-- max-content -->
<style>
  .border {
    border: 1px solid;
  }

  .inline-block {
    display: inline-block;
  }

  .max-content {
    width: -webkit- max-content;
    width: -moz- max-content;
    width: max-content;
  }
</style>

<div style="width: 400px;background: #f1f1f1;">
  <b>display: inline-block;</b>
  <div class="border inline-block">
    <img src="https://dummyimage.com/320x180/0388e3&text=320x180">
    <p>
      display:inline-block描述文字超过一行显示会换行，不会让自身的宽度超过父级容器的可用空间的，width:max-content表现得好像设置了white-space:nowrap一样
    </p>
  </div>

  <b>width: max-content;</b>
  <div class="border  max-content">
    <img src="https://dummyimage.com/320x180/0388e3&text=320x180">
    <p>
      display:inline-block描述文字超过一行显示会换行，不会让自身的宽度超过父级容器的可用空间的，width:max-content表现得好像设置了white-space:nowrap一样
    </p>
  </div>
</div>
```

<style>
  .max-content {
    width: -webkit- max-content;
    width: -moz- max-content;
    width: max-content;
  }
</style>

<div style="width: 400px;background: #f1f1f1;">

  <b>display: inline-block;</b>
  <div class="border inline-block">
    <img src="https://dummyimage.com/320x180/0388e3&text=320x180">
    <p>
      display:inline-block描述文字超过一行显示会换行，不会让自身的宽度超过父级容器的可用空间的，width:max-content表现得好像设置了white-space:nowrap一样
    </p>
  </div>

  <b>width: max-content;</b>
  <div class="border  max-content">
    <img src="https://dummyimage.com/320x180/0388e3&text=320x180">
    <p>
      display:inline-block描述文字超过一行显示会换行，不会让自身的宽度超过父级容器的可用空间的，width:max-content表现得好像设置了white-space:nowrap一样
    </p>
  </div>
</div>

