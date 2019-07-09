## element UI 十个小细节

建议大致浏览一遍[官方文档](https://element.eleme.cn/#/zh-CN/component/installation)后再看此篇文章，主要介绍一些关于 element UI 一些值得关注的细节(2.10.1)

### [Layout 布局](https://element.eleme.cn/#/zh-CN/component/layout)

<table>
  <tr>
    <th style="min-width:160px">参数</th>
    <th style="min-width:513px">说明</th>
  </tr>
  <tr>
    <td>基于断点的隐藏类</td>
    <td>适用于多端适配</td>
  </tr>
</table>

### [Input 输入框](https://element.eleme.cn/#/zh-CN/component/input)

<table>
  <tr>
    <th style="min-width:160px">参数</th>
    <th style="min-width:513px">说明</th>
  </tr>
  <tr>
    <td>focus</td>
    <td>使 input 获取焦点 </td>
  </tr>
</table>

::: tip
这里需要注意的两点：

- 如果你需要使用这个方法，一定要在组件加载完毕后调用，如果在 `created` 钩子里面调用时不起作用的，具体请看[Vue.nextTickt](/blog/Javascript.html#_7-nexttick-v-cloak)
- 如果需要使用 `@keyup` 监听键盘事件的话，一定要加上 `.native` 修饰符,具体原因可以参考[官方文档](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6)
  :::

### [Pagination 分页](https://element.eleme.cn/#/zh-CN/component/pagination)

<table>
  <tr>
    <th style="min-width:160px">参数</th>
    <th style="min-width:513px">说明</th>
  </tr>
  <tr>
    <td>hide-on-single-page</td>
    <td>只有一页时是否隐藏</td>
  </tr>
</table>

### [Message 消息提示](https://element.eleme.cn/#/zh-CN/component/message)

<table>
  <tr>
    <th style="min-width:160px">参数</th>
    <th style="min-width:513px">说明</th>
  </tr>
  <tr>
    <td>offset</td>
    <td>Message距离窗口顶部的偏移量</td>
  </tr>
</table>

### [MessageBox 弹框](https://element.eleme.cn/#/zh-CN/component/message-box)

<table>
  <tr>
    <th style="min-width:160px">参数</th>
    <th style="min-width:513px">说明</th>
  </tr>
  <tr>
    <td>lockScroll</td>
    <td>是否在 MessageBox 出现时将 body 滚动锁定</td>
  </tr>
  <tr>
    <td>closeOnClickModal</td>
    <td>是否可通过点击遮罩关闭 MessageBox</td>
  </tr>
</table>

### [Select 选择器](https://element.eleme.cn/#/zh-CN/component/select)

<table>
  <tr>
    <th style="min-width:160px">参数</th>
    <th style="min-width:513px">说明</th>
  </tr>
  <tr>
    <td>default-first-option</td>
    <td>在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用（可以提升不错的用户体验）</td>
  </tr>
</table>
    
### [Cascader 级联选择器](https://element.eleme.cn/#/zh-CN/component/cascader)

刚开始两年的 element UI 是不支持级联多选的，但是最近更新支持了

### [Table 表格](https://element.eleme.cn/#/zh-CN/component/table)

刚开始两年的 element UI 是不支持树状表格的，但是最近更新支持了

### [NavMenu 导航菜单](https://element.eleme.cn/#/zh-CN/component/menu)

<table>
  <tr>
    <th style="min-width:160px">参数</th>
    <th style="min-width:513px">说明</th>
  </tr>
  <tr>
    <td>unique-opened</td>
    <td>是否只保持一个子菜单的展开</td>
  </tr>
</table>

### 最近新增比较实用组件

- [Timeline 时间线](https://element.eleme.cn/#/zh-CN/component/timeline)
- [Calendar 自定义日历](https://element.eleme.cn/#/zh-CN/component/calendar)
- [InfiniteScroll 无限滚动](https://element.eleme.cn/#/zh-CN/component/infiniteScroll)
