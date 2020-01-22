## CSS 十个灵活运用小技巧

本篇文章主要总结 web 前端开发过程当中一些相对比较细节的常用样式

### 1. 垂直居中的三种方法（老生常谈）

- 强制定位使用 position 或者 transform 属性强制计算定位
- flex 盒子模型 `align-items: center` 轻松搞定，关键外层盒子高度任意变化都会依旧保持垂直居中（推荐不过需要考虑兼容要求，移动端基本都可以使用）
- 利用 td 标签的 valign 属性 `<td valign="middle">` （不赞成使用）

::: tip 这里想要强调一点
千万不要用尝试用 margin 去做垂直定位，至于为什么可以看 [margin 重叠](/blog/CSS.html#margin重叠)
:::

### 2. webkit-tap-highlight-color

这是 CSS3 一个鲜为人知的熟悉，这个属性只用于 iOS (移动开发当中个人认为最容易出兼容性问题的就是 IOS)。当你点击一个链接或者通过 Javascript 定义的可点击元素的时候，它就会出现一个半透明的灰色背景。要重设这个表现，你可以设置-webkit-tap-highlight-color 为任何颜色。在大部分情况这个属性是无关痛痒的。但是在万变的需求当中总是要痛的，举个例子在移动端开发当中一个过小可被点击图标是挺常见的事情，通常我们会为了用户能够更好的点击到它可用一个稍微大一些透明 div 盖在上方来接收点击，这种增加用户点击热区的范围的方法在移动端页面开发是非常实用的，这时候 webkit-tap-highlight-color 的默认半透明灰色背景会带来很不好的体验，建议全局设置

```CSS
  *{webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-appearance:none}
```

这样的属性永绝后患。

### 3. transition

这是 CSS3 一种常用的过渡动画属性，也是较为简单方便的一种，你甚至可以添加一个.trasition_3s{-webkit-transition:.3s;transition:.3s}这样的类，在想要用的地方为所欲为。比如 hover 效果过渡，长宽变化过渡，淡入淡出...只需要简简单单加上一个类 trasition_3s 就能够得到不错的效果。这里可以注意一下细节：

- transition-property 规定设置过渡效果的 CSS 属性的名称
- transition-duration 规定完成过渡效果需要多少秒或毫秒
- transition-timing-function 规定速度效果的速度曲线
- transition-delay 定义过渡效果何时开始

### 4. flex:0 flex:1 flex:2 实战运用

对于很多仔细看过 flex 布局的小伙伴肯定是了解过 flex-grow 属性,但是大部分都知道它是做什么的并不知道有什么用。下面我将介绍一个可以用到的场景，通常一个网页我们都知道有 header,footer 两个基本万年遍两个组件，高度呢也是基本固定的，那么问题来了，当一个页面自身高度不够高的时候，会导致整个网页的高度小于浏览器的高度，这就很尴尬了，虽然不影响使用以及功能，不过看着就不是很好看,当然也有人想了我把中间设置一个固定高度网页撑起来呢，很明显用户的窗口高度不是我们能控制的除非你用 js 去计算不然很难计算出中间的高度需要多少最为合适。那用 CSS 的 calc 属性来定义高度呢？实际开发当中我们会遇到各种奇怪的问题，比如头部或者底部的高度恰巧就变化了呢(真的有虽然大部分高度不变还是有特例的页面存在)，calc 属性依旧不能带来最好的体验？嘿嘿，这里我们就可以巧妙的使用 flex 布局来解决，具体方法如下：

```html
<style>
  * {
    padding: 0;
    margin: 0px;
  }
  .bg_000 {
    background: #000;
  }
  .h50 {
    height: 50px;
  }
  .flex {
    display: flex;
  }
  .flex_column {
    flex-direction: column;
  }
  .flex0 {
    flex: 0;
  }
  .flex1 {
    flex: 1;
  }
</style>
<div class="flex flex_column" style="min-height:100vh">
  <div class="h50 bg_000 flex0"></div>
  <div class="flex1"></div>
  <div class="h50 bg_000 flex0"></div>
</div>
```

### 5. background-size contain && cover

产品的需求总是千奇百怪的，我曾经就遇到一个奇葩问题，项目用户头像的尺寸尚未统一有横着的长方形有竖着的长方形，列表却需要用统一大小圆形遍历用户头像。这个需求如果用 JS 做会相当复杂，但是 CSS 中 background-size 可以轻松解决这个需求

例如：

```html
<style>
  .portrait {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: url('/mayunhai/test.jpg') center center;
    background-size: cover;
  }
</style>
<div class="portrait"></div>
```

关于 cover 的运用，也是如此类似的不同尺寸展示需求，这里我就不多阐述，直接上代码自行体验感受：

```html
<style>
  .pic {
    width: 200px;
    height: 300px;
    background: url('/mayunhai/test.jpg') center center
      no-repeat black;
    background-size: contain;
  }
</style>
<div class="pic"></div>
```

<style>
  .portrait{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: url('/mayunhai/test.jpg') center center;
    background-size: cover
  }
  .pic{
    width: 200px;
    height: 300px;
    background: url('/mayunhai/test.jpg') center center no-repeat black;
    background-size: contain
  }
</style>
<div class="flex space_between align_items_c">
  <div class="portrait"> </div> 
  <div class="pic"> </div>
</div>

### 6. 纯 CSS 纯色三角形

通过对 div 的边框设置可以轻易画出各种三角形，具体原理利用一个 0 高度 0 宽度的 div，当边长不为 0 的时候，利用相互平行的两条边设置颜色为 transparent，然后把不与他们平行的一条边设置为一种颜色组合成一个三角形，具体实现如下，需要改变角度 方向可以自行调节测试，还是挺有意思的，实际运用方面替代一些小地方需要三角形的纯色贴图还是很有方便的

::: tip
Element UI 里面的 `Tooltip` 组件就是用类似的原理去实现的小角
:::

```html
<style>
  .triangle {
    height: 0px;
    width: 0px;
    border-top: 8px solid black; /* 三角形的高度*/
    border-left: 8px solid transparent; /* 左右边宽度的总和为三角形最长边长度*/
    border-right: 8px solid transparent;
  }
</style>
<div class="triangle"></div>
```

### 7. box-sizing (默认值 content-box)

大部分情况计算标签实际高度时候是需要包含计算 `padding` 的，比如一个长宽 `10px` 的 `div` 有 `padding: 5px;` 那么它的实际高度就是 `20px(10 + 5 + 5)`,但是如果设置了 `box-sizing:border-box;` 的话那么为元素设定的宽度和高度决定了元素的边框盒，也就是无论你 `padding` 多少，div 只要设置了长宽 `10px` ，则实际上长宽都是 `10px`

### 8. position: sticky

position 定位大家熟悉的 relative、fixed、absolute 这里就不过多介绍了，这里介绍的一个黑科技 sticky。先简单介绍一下它的特点：

- 该元素并不脱离文档流，仍然保留元素原本在文档流中的位置
- 当元素在容器中被滚动超过指定的偏移值时，元素在容器内固定在指定位置。亦即如果你设置了 top: 50px，那么在 sticky 元素到达距离相对定位的元素顶部 50px 的位置时固定，不再向上移动
- 元素固定的相对偏移是相对于离它最近的具有滚动框的祖先元素，如果祖先元素都不可以滚动，那么是相对于 viewport 来计算元素的偏移量这个值

在 PC 上面对于极少部分的兼容性并不算特别理想，但是对于目前大部分移动设备都是适用，在各种电商详情页（拥有过长的 TAB 页）上这样需求非常常见，下面写个例子：

```html
<body style="height:10000px">
  <!-- 滚动滚动条试试？ -->
  <p>占位</p>
  <p>占位</p>
  <p>占位</p>
  <div style="position:sticky; top: 0px;background:rgba(0, 0, 0, 0.2)">
    sticky
  </div>
  <p>占位</p>
  <p>占位</p>
  <p>占位</p>
  <p>占位</p>
  <p>占位</p>
  <p>占位</p>
  <p>占位</p>
</body>
```

### 9. -webkit-line-clamp

对于过长的当行文字添加.ellipsis{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}这样的样式就可以实现文字过长用省略号代替，这里注意一点三个属性缺一不可，通常我也单独会在通用样式表里面添加这样的样式，若需使用直接标签新增 ellipsis 类即可。但是还是有那种多行简介超过 2 行的文字出现省略号代替的情况，这时候就需要用到-webkit-line-clamp 这样的属性，可以轻松解决

例如：

```html
<style>
  .ellipsis2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
  }
</style>
<div class="ellipsis2" style="width: 100px">
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
</div>
```

### 10. 小于 12px 的字体

按理说设计方面页面最小的字体就是 12px，浏览器所能够支持的最小字体大小也是 12px,但是在脑洞大开的产品经理眼里一起皆有可能，确确实实有的时候会用到小于 12px 的文字，两种解决方式第一直接用图片，第二使用 `transform:scale(0.9,0.9)`，但是这里需要注意一点的时候缩放后的换行布局排版需要格外的注意，感兴趣的小伙伴可以试试或者等真的遇到这样需求的时候稍稍注意些这个问题,当然大部分情况可以通过设置`transform-origin`轻松解决
