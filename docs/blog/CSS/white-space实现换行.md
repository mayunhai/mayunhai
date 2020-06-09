## white-space实现换行

HTML `<textarea>` 标签能够记录下换行，但是前台展示的时候直接放入标签的时候只会展示空格且不会换行，如果我们想要不使用 `<br>` 标签就实现换行的话，可以使用 `<pre>` 标签，但是同样会引来其他样式问题，其实CSS3有个 `white-space` 属性能够优雅的解决这个问题，在刚看到这个标签的时候大多并不陌生，多用于不换行省略号展示标题，例如

```html
<div
  style = "
    width: 300px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  "
>
这是一段很长很长文字。这是一段很长很长文字。这是一段很长很长文字。
</div>
```
<div
  style = "
    width: 300px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  "
>
这是一段很长很长文字。这是一段很长很长文字。这是一段很长很长文字。
</div>

这里主要介绍它其他三个属性值 `pre` 、 `pre-wrap` 、 `pre-line`

### `pre` 和 `pre-wrap`

```html
<div style = "white-space: pre;">
锄禾日当午
汗滴禾下土
          谁知盘中餐
          粒粒皆辛苦
</div>
```
<div style = "white-space: pre;">
锄禾日当午
汗滴禾下土
          谁知盘中餐
          粒粒皆辛苦
</div>

```html
<div style = "white-space: pre-wrap;">
锄禾日当午
汗滴禾下土
          谁知盘中餐
          粒粒皆辛苦
</div>
```
<div style = "white-space: pre-wrap;">
锄禾日当午
汗滴禾下土
          谁知盘中餐
          粒粒皆辛苦
</div>

:::tip

- `pre` ：空白会被浏览器保留。其行为方式类似 HTML 中的 `<pre>` 标签

- `pre-wrap` ：保留空白符序列，但是正常地进行换行

虽然文档对 `pre` 、 `pre-wrap`有着不同的解释，但是我确实看不出他们两个有什么太大区别

:::

### `pre-line`
作用合并空白符序列，但是保留换行符。上面两个区别搞不清我觉得问题不大，因为就算要用通常也用这个属性效果如下

```html
<div style = "white-space: pre-line;">
锄禾日当午
汗滴禾下土
          谁知盘中餐
          粒粒皆辛苦
</div>
```
<div style = "white-space: pre-line;">
锄禾日当午
汗滴禾下土
          谁知盘中餐
          粒粒皆辛苦
</div>