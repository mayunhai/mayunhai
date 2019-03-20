## margin重叠

margin重叠算是前端开发比较容易被忽视的一个点,这里强调一点做**垂直居中的时候千万不要用margin去做定位完成**，不然极有可能引来一系列问题。

先做个总结margin重叠仅存在于垂直方向，水平方向不存在重叠。也就是说只有在没有浮动的块标签(`display:block`)中会出现margin重叠,感兴趣的小伙伴可以复制以下代码测试一下

```HTML
<style>
  .box1{
    /* float: left; */
    /* display: inline-block; */
    width: calc(100% - 100px);
    height: 50px;
    margin: 50px;
    border: 2px solid black
  }
</style>
<div class="box1"></div>
<div class="box1"></div>
<div class="box1"></div>
```
<style>
  .box1{
    /* float: left; */
    /* display: inline-block; */
    width: calc(100% - 100px);
    height: 50px;
    margin: 50px;
    border: 2px solid black
  }
</style>
<div class="box1 flex align_items_c center fz12">上下间距50px(重叠)</div>
<div class="box1"></div>
<div class="box1"></div>

```HTML
<style>
  .box2{
    /* float: left; */
    display: inline-block;
    width: calc(100% - 100px);
    height: 50px;
    margin: 50px;
    border: 2px solid black
  }
</style>
<div class="box2"></div>
<div class="box2"></div>
<div class="box2"></div>
```
<style>
  .box2{
    /* float: left; */
    display: inline-block;
    width: calc(100% - 100px);
    height: 50px;
    line-height: 50px;
    margin: 50px;
    border: 2px solid black
  }
</style>
<div class="box2 tac fz12">上下间距50px + 50px = 100px</div>
<div class="box2"></div>
<div class="box2"></div>

```HTML
<style>
  .box3{
    float: left;
    /* display: inline-block; */
    width: calc(100% - 100px);
    height: 50px;
    margin: 50px;
    border: 2px solid black
  }
</style>
<div class="box3"></div>
<div class="box3"></div>
<div class="box3"></div>
```
<style>
  .box3{
    float: left;
    /* display: inline-block; */
    width: calc(100% - 100px);
    height: 50px;
    margin: 50px;
    border: 2px solid black
  }
</style>
<div class="box3 flex align_items_c center fz12">上下间距50px + 50px = 100px</div>
<div class="box3"></div>
<div class="box3"></div>