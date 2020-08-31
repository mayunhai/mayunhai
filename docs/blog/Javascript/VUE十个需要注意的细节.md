## VUE十个需要注意的细节（2.0）


::: tip
关于为什么要使用VUE，很多已经熟悉并依赖 `jquery` 的前端小伙伴刚开始可能会不太能够理解，最开始我也是这么想的，主要原因还是开发的项目页面不够复杂，当一个页面无刷新交互以及组件足够复杂之后，你会发现用 `jquery` 将很难进行下去，更不用说 [单页应用(spa)](/blog/#spa) 了

这里我想要再次强调一个小细节，虽然在开发 `VUE` 的时候会被经常用到，当绝不一定只是在开发 `VUE` 才会运用到

当我们对某个对象或者数组 `computed` 或者 `watch` 时候，往往会遇到需要对此变量需要预处理的操作，这时候有可能涉及遍历，显然如果我们之间遍历原对象或者原数组明显不太合适，对于一维数组对象我们可以之间使用 `Object.assign([], arr)`、`Object.assign({}, obj)` or `[...arr]`、`{...obj}`来进行浅拷贝，但是对于一维以上的数组或者对象建议参考 [深拷贝](/util/#克隆一个对象或者数组-深拷贝)
:::


关于 VUE 和 React 哪家强的问题，就目前全球市场而言 React 的占比确实第一，不过 VUE 作为一个
**个人项目**
并且出现时间
**晚于**
 React 的情况下 `github` 上星数可以超越 React 这样
**大厂出品**
 依旧是让人震惊

个人感觉 React 至今并没有什么神奇的地方时 VUE 所无法取代的，相反 VUE 的许多优点 React 却没有，就
**中国的市场**
个人觉得 VUE 和 React 应该算的上
**平分秋色**
，因为国内 web 项目对 [MVVM](/blog/#mvc-mvvm) 的应用相比国外还是有一定差距的，所以再较晚的使用 JS 关于 [MVVM](/blog/#mvc-mvvm) 框架有了更多的选择招聘就可以看的出来，别的城市我不知道，但是就北京和南京来说，招聘信息上面 有需求 会 VUE 或者 React 的，甚至单招 VUE 熟手的，却很少看到单招 React 的

还有一个最关键的原因，vue api 丰富学习梯度比较缓和相比而言 react api 就比较少且对新手不友好，可以说熟练使用 vue 转 react 会轻而易举（毕竟 react 的api就那么几个且 vue 都有容易理解），反正则不一定 vue api 太丰富,想要巧妙合理的运用好每个 api 不太容易短期实现

这里我想要给大家推荐一个快速学习上手使用 VUE 不错的一个开源项目后台管理系统

[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)这个项目目前看来在github上关于VUE的项目星数最多的一个，作者更新也非常活跃几乎每天都有新的 `commit` ,提出 `Issues` 基本上能够得到很快的回应，也非常荣幸可以成为该项目contributors之一，虽然提交的代码可能并不算特别重要，但是第一次提交的代码被合并的感觉真的是超级开心


### [1. v-if && v-show](https://cn.vuejs.org/v2/guide/conditional.html#v-show)

- `v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建

- `v-if` 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块

相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换

一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好

::: tip
template标签无法使用 v-show ，不信的可以试试
:::

### [2. deep](https://cn.vuejs.org/v2/api/#watch)

对于watch一个对象时候，若需要深度 `watcher` 则一定需要设置 `deep:true`

对于watch一个对象时候，若需要深度 `watcher` 则一定需要设置 `deep:true`

对于watch一个对象时候，若需要深度 `watcher` 则一定需要设置 `deep:true`

::: tip
注意监听数组的变动不需要这么做
:::


### [3. v-bind](https://cn.vuejs.org/v2/api/#v-bind)
- **简介：**
只要
**自己定义的**
标签属性前面有 `:` 则后面引号里面写JS(变量、函数)，否则写字符串

- **作用：**
(`:`是 `v-bind:` 的 [语法糖](/blog/#语法糖) )
::: tip
很多人学习是从官方教程开始看的，在看到 [Class 与 Style 绑定](https://cn.vuejs.org/v2/guide/class-and-style.html) 这章节时候可能会有些误解，这里需要强调一点 `v-bind` 不仅仅用于style或者class属性一切属性皆可用，这才是关键
:::

### 4. 子父组件通信
- **父向子：**
用 `props` `<my-component :name="name"></my-component>` or `<my-component name="马云海"></my-component>`，这里需要注意一点在你提交的代码中，`prop` 的定义应该尽量详细，
**至少需要指定其类型**
，当然如果你非要偷懒 `props: ['status']` 这样定义，也没人可以咬你

- **子向父：**
子组件使用 [API](/blog/#api（接口）) [vm.$emit](https://cn.vuejs.org/v2/api/#vm-emit) `this.$emit('res', val)` ，父组件使用 `<my-component @res="fun"></my-component>` ,然后在 `methods` 里面定义 `fun(val){}` 来获取值

如果是在看不懂的可以百度 "VUE子父"网上有很多，不过我依旧觉得我这里介绍的是最精辟的，哈哈

### 5. Vue全家桶成员

#### [Vue Router](https://router.vuejs.org/zh)
- **简介：**
  - 使用起来很方便主要就是一个配置文件，里面主要配置了SPA页面URL命名以及关联文件位置
  - this.$router里面主要定义了路由的相关信息以及跳转等钩子方法

- **作用：**
管理SPA所有虚拟页面 配置、跳转、跳转历史

:::tip
这里需要强调一下如果想用 [`history`](https://router.vuejs.org/zh/guide/essentials/history-mode.html#html5-history-%E6%A8%A1%E5%BC%8F) 模式务必需要后台配置支持，就是要在服务端配置 Rewrite 路由把所有路由都指向 index.html
:::

#### [Vuex](https://vuex.vuejs.org/zh)
- **简介：**
Vuex特别像一个全局对象，他和全局对象的区别有以下两点
  - 响应式，数据变动更新组件
  - 不能直接修改，修改唯一途径```mutation```

::: tip
  [```mutation```](https://vuex.vuejs.org/zh/guide/mutations.html) 必须是同步函数

  [```action```](https://vuex.vuejs.org/zh/guide/actions.html)  类似于 ```mutation```，不同在于：

  - ```action``` 提交的是 ```mutation```，而不是直接变更状态
  - ```action``` 可以包含任意异步操作
:::

- **作用：**
多页面(SPA虚拟页面)多组件数据及时同步、通信

### [6. key](https://cn.vuejs.org/v2/api/#key)
官方文档上面的说明可能比较难懂，简单的说就是当一个 `list` 中的 `li` 上面的 `key` 没有变化，那么在数据变化渲染中这个 `li` 就不会被重复渲染

:::tip
很多人喜欢用 `index` 作为 `key`, 不是不可以啊，但是当一个列表中间的 `item` 发生变化（增、删、改）时，渲染就会出现问题
:::


### [7. nextTick && v-cloak](https://cn.vuejs.org/v2/api/#Vue-nextTick)

这两个点和 生命周期 mounted有点类似，当然功能以及用法上面肯定有一定的区别

- **nextTick**

这个算是VUE里面比较少见，但是很重要的接口官方解释：在下次 DOM 更新循环结束之后执行延迟回调在修改数据之后立即使用这个方法，获取更新后的 DOM是不是感觉挺难理解的，所以这里我们直接上一个实例：

```js
// 当我们使用element UI时候，这里的作用是当element 组件el-input渲染完成后获取焦点
this.$nextTick(_ => {
  this.$refs.input.focus()
})
```

这里如果我们直接使用 `this.$refs.input.focus()` 是没用的不信你可以尝试一下，这里的很细节，若你不会并没人咬你，但是如果你注意这些细节会让用户体验发生质变

- **v-cloak**

这里呢类似上面那个问题，一样的就算你不做处理程序不是跑步起来，只是体验不好并且这里多半用于一些非 SPA 项目上面，有些MVC项目为了追逐潮流硬是在MVC基础上使用 VUE Element 等套件时候，会发现一个诡异的事情，就是网页在加载的最初会出现未被VUE渲染的代码比如 <span v-html="'{{name}}'"></span> ，直到VUE编译完成才会被编译成你想要它展示的变量比如：小王

**官方说明：**

这个指令保持在元素上直到关联实例结束编译和 CSS 规则如 `[v-cloak] { display: none }` 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕

```html
<style>
[v-cloak] {
  display: none;
}
</style>
<div v-cloak>
  {{ message }}
</div>
```
不会显示，直到编译结束

### [8. v-text && v-html](https://cn.vuejs.org/v2/api/#v-text)

这两个指令有一定的区别，第一个HTML标签不会被渲染，第二个不会被VUE渲染，用到的地方虽然不多但是真当你遇上不会的话还是很恼火的

- **v-text**

这个和使用“Mustache”语法 (双大括号) 的文本插值是一样的，细心的小伙伴会发现如果试图通过  <span v-html="'{{html}}'"></span> 来给标签插入html代码是不会被解析的


- **v-html**

**官方说明：**

更新元素的 innerHTML 注意：内容按普通 HTML 插入不会作为 Vue 模板进行编译 如果试图使用 v-html 组合模板，可以重新考虑是否通过使用组件来替代

本项目是基于 [vuepress](https://vuepress.vuejs.org/zh) 所以当我在这个当前页面需要输入<span v-text="'{{name}}'"></span>的时候，必须用下面这样的代码，如果直接使用写的话会被VUE编译，并提示报错找不到 `name` 变量

```html
<span v-html="'{{name}}'"></span>
```

### [9. set](https://cn.vuejs.org/v2/api/#Vue-set)

**官方说明：**

向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新它必须用于向响应式对象上添加新属性，因为 Vue 无法探测普通的新增属性 (比如 `this.myObject.newProperty = 'hi'` )

```js
this.$set(this.myObject,'newProperty','hi')
```


### 10. 自定义组件强化

只要弄清楚以上9点对于VUE应用开发基本上就没有太大问题了，关于自定义组件的封装其实只要熟练掌握 [子父组件通信](/blog/Javascript.html#_4-子父组件通信) 也足以解决日常开发需求，下面介绍的只是更深层次一点，对于新手而言不懂也没有太大关系尤其是slot插槽这块 `VUE 3.0` 会对此API有大幅度变动，虽然会有兼容方案

- [`.native`](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6)

我们可以 `@click` 在 `dom` 上面绑定原生事件，但是在普通组件上面却不起作用这里我们就需要 `.native` 修饰符官方文档说的很清楚，这里还有一种解决方案就是可以配合 [`v-on="$listeners"`](https://cn.vuejs.org/v2/api/#vm-listeners) 将所有的原生事件监听器指向这个组件的某个特定的子元素，这样就可以用不加修饰符也能够直接监听的到

- [`v-model` ](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model)

显而易见就是官方提供了一个 `API` 让你能够在自己封装组件上面也可以使用 `v-model` 双向绑定,这个细节多用于封装自己的表单类组件或者二次封装别人的表单类组件用，并且对 element 这样的UI 进行单组件的二次封装我觉得意义不是很大，感兴趣的可以研究一下，这里我就不做过多解释官网说明的很清楚点击标题可以快速跳转官方文档的相关位置，或者参考 [`sync-修饰符`](https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6)

::: tip
虽然不是特别重点，但是这里如果只是对 value 属性的进行双绑封装还是极为方便的，新手可以了解一下，只需要在子组件新增 `this.$emit('input', val)` 这样的事件即可
```html
<input v-model="searchText">
<!-- 实际上上面的代码是下面代码的语法糖。 -->
<!-- 当在父级组件监听这个事件的时候，我们可以通过 $event 访问到被抛出的这个值 -->
<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
>
```
:::

- [内置组件 `<slot>`](https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87%E6%8F%92%E6%A7%BD%E5%88%86%E5%8F%91%E5%86%85%E5%AE%B9)

最主要的作用就是可以和 HTML 元素一样，我们经常需要向一个组件传递内容。通常是给组件传递一些 `HTML` 代码。

`<slot>` 元素作为组件模板之中的内容分发插槽。`<slot>` 元素自身将被替换,也可以在封装组件时候预留一下默认值，多的不说直接上代码我觉得会比较直观一些。

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
<div id="app">
  <alert-box>
    <b>Something bad happened.</b>
  </alert-box>
</div>
<script>
  Vue.component('alert-box', {
    template: `
      <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot><b>这里可以定义默认值</b></slot>
      </div>
    `
  })
  const vm = new Vue({
    el: '#app'
  })
</script>
```
上面的代码会被解析成

```html
<div class="demo-alert-box">
  <strong>Error!</strong>
  <b>Something bad happened.</b>
</div>
```
::: tip
值得一提的这个 `<slot></slot>` 里面依然可以插入子组件并被解析
:::

- [el](https://cn.vuejs.org/v2/api/#el)

我先说一下使用场景,假设我们封装一个 使用echart渲染的图标组件，当我们这个页面多次使用此插件时候，你会发现如果你使用 `this.chart = echarts.init(document.getElementById('chart'))` 会出现id重复的情况，VUE就提供了一个dom选择器的API `vm.$el` 用来访问实例挂载之后的元素。


```js
// ... 此处代码省略
mounted() {
  this.chart = echarts.init(this.$el)
  this.setOption(option)
},
// ... 此处代码省略
```

- [directive](https://cn.vuejs.org/v2/guide/custom-directive.html)

自定义指令完全能够实现一个小组件的功能，在一些全局用到的小方法上面非常好用，比如按压效果、角标、曝光监听封装等

- [mixins](https://cn.vuejs.org/v2/guide/mixins.html#ad)

混入当封装类似组件的时候如果有部分代码重复，就可以使用 `mixins`,比如一些通用监听、埋点

:::tip
值得一提这里我想要强调一下 `mixins` 的语法规范，否则很容易出现一些找不到在哪定义的方法或者重名问题

- 附带一个 [命名空间](https://cn.vuejs.org/v2/style-guide/#%E7%A7%81%E6%9C%89-property-%E5%90%8D%E5%BF%85%E8%A6%81) 以回避和其它作者的冲突 (比如 `$_yourPluginName_`)

- 如果使用了上述方法还需要注意一点，以 `_` 或 `$` 开头的 property 不会被 Vue 实例代理，因为它们可能和 Vue 内置的 property、API 方法冲突。你可以使用例如 `vm.$data._property` 的方式访问这些 property，详细参考文档 [data](https://cn.vuejs.org/v2/api/#data)
:::
