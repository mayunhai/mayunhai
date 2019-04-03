## VUE十个需要注意的细节

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
，因为国内 web 项目对 [MVVM](/blog/#mvc-mvvm) 的应用相比国外还是有一定差距的，所以再较晚的使用 JS 关于 [MVVM](/blog/#mvc-mvvm) 框架有了更多的选择。招聘就可以看的出来，别的城市我不知道，但是就北京和南京来说，招聘信息上面 有需求 会 VUE 或者 React 的，甚至单招 VUE 熟手的，缺很少看到单招 React 的

这里我想要给大家推荐一个快速学习上手使用 VUE 不错的一个开源项目后台管理系统

[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)这个项目目前看来在github上关于VUE的项目星数最多的一个，作者更新也非常活跃几乎每天都有新的 `commit` ,提出 `Issues` 基本上能够得到很快的回应，也非常荣幸可以成为该项目contributors之一，虽然提交的代码可能并不算特别重要，但是第一次提交的代码被合并的感觉真的是超级开心

### [1. v-if && v-show](https://cn.vuejs.org/v2/guide/conditional.html#v-show)

- `v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建

- `v-show` 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块

相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换

一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好

### [2. deep](https://cn.vuejs.org/v2/api/#watch)
对于watch一个对象或者数组时候，若需要深度 `watcher` 则一定需要设置 `deep:true`

### [3. v-bind](https://cn.vuejs.org/v2/api/#v-bind)
- **简介：**
只要
**自己定义的**
标签属性前面有 `:` 则后面引号里面写JS(变量、函数)，否则写字符串

- **作用：**
(`:`是 `v-bind:` 的 [语法糖](/blog/#语法糖) )
::: tip
很多人学习是从官方教程开始看的，在看到 [Class 与 Style 绑定](https://cn.vuejs.org/v2/guide/class-and-style.html) 这章节时候可能会有些误解，这里需要强调一点 `v-bind` 不仅仅用于style或者class属性。一切属性皆可用，这才是关键
:::

### 4. 子父组件通信
- **父向子：**
用 `props` `<my-component :name="name"></my-component>` or `<my-component name="马云海"></my-component>`，这里需要注意一点在你提交的代码中，`prop` 的定义应该尽量详细，
**至少需要指定其类型**
，当然如果你非要偷懒 `props: ['status']` 这样定义，也没人可以咬你

- **子向父：**
子组件使用 [API](/blog/#api（接口）) [vm.$emit](https://cn.vuejs.org/v2/api/#vm-emit) `this.$emit('res', val)` ，父组件使用 `<my-component @res="fun"></my-component>` ,然后在 `methods` 里面定义 `fun(val){}` 来获取值

如果是在看不懂的可以百度 "VUE子父"网上有很多，不过我依旧觉得我这里介绍的是最精辟的，哈哈

### 5. computed && watch 深拷贝
当我们对某个对象或者数组 `computed` 或者 `watch` 时候，往往会遇到需要对此变量需要预处理的操作，这时候有可能涉及遍历，显然如果我们之间遍历原对象或者原数组明显不太合适，对于一维数组对象我们可以之间使用 `Object.assign([], arr)` or `Object.assign({}, obj)`来进行浅拷贝，但是对于一维以上的数组或者对象建议参考 [深拷贝](/blog/Javascript.html#_5-克隆一个对象或者数组-深拷贝)

### [6. Vue Router](https://router.vuejs.org/zh/)
- **简介：**
  - 一个配置文件，里面主要配置了SPA页面URL命名以及关联文件位置
  - this.$router里面主要定义了路由的相关信息以及跳转等方法

- **作用：**
管理SPA所有虚拟页面 配置、跳转、跳转历史

### [7. Vuex](https://vuex.vuejs.org/zh/)
- **简介：**
Vuex特别像一个全局对象，他和全局对象的区别有以下两点
  - 响应式，数据变动更新组件
  - 不能直接修改，修改唯一途径```mutation```

- **作用：**
多页面(SPA虚拟页面)多组件数据及时同步、通信

### [8. nextTick && v-cloak](https://cn.vuejs.org/v2/api/#Vue-nextTick)

这两个点和 生命周期 mounted有点类似，当然功能以及用法上面肯定有一定的区别

- **nextTick**

这个算是VUE里面比较少见，但是很重要的接口。官方解释：在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。是不是感觉挺难理解的，所以这里我们直接上一个实例：

```Javascript
//当我们使用element UI时候，这里的作用是当element 组件el-input渲染完成后获取焦点
this.$nextTick(_ => {
  this.$refs.input.focus()
})
```

这里如果我们直接使用 `this.$refs.input.focus()` 是没用的不信你可以尝试一下，这里的很细节，若你不会并没人咬你，但是如果你注意这些细节会让用户体验发生质变

- **v-cloak**

这里呢类似上面那个问题，一样的就算你不做处理程序不是跑步起来，只是体验不好。并且这里多半用于一些非 SPA 项目上面，有些MVC项目为了追逐潮流硬是在MVC基础上使用 VUE Element 等套件时候，会发现一个诡异的事情，就是网页在加载的最初会出现未被VUE渲染的代码比如 <span v-html="'{{name}}'"></span> ，直到VUE编译完成才会被编译成你想要它展示的变量比如：小王

**官方说明：**

这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 `[v-cloak] { display: none }` 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕

```HTML
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

### [9. v-text && v-html](https://cn.vuejs.org/v2/api/#v-text)

这两个指令有一定的区别，第一个HTML标签不会被渲染，第二个不会被VUE渲染，用到的地方虽然不多但是真当你遇上不会的话还是很恼火的

- **v-text**

这个和使用“Mustache”语法 (双大括号) 的文本插值是一样的，细心的小伙伴会发现如果试图通过  <span v-html="'{{html}}'"></span> 来给标签插入html代码是不会被解析的


- **v-html**

**官方说明：**

更新元素的 innerHTML 。注意：内容按普通 HTML 插入不会作为 Vue 模板进行编译 。如果试图使用 v-html 组合模板，可以重新考虑是否通过使用组件来替代

本项目是基于 [vuepress](https://vuepress.vuejs.org/zh/) 所以当我在这个当前页面需要输入<span v-text="'{{name}}'"></span>的时候，必须用下面这样的代码，如果直接使用写的话会被VUE编译，并提示报错找不到 `name` 变量

```HTML
<span v-html="'{{name}}'"></span>
```

### [10. set](https://cn.vuejs.org/v2/api/#Vue-set)

**官方说明：**

向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新属性，因为 Vue 无法探测普通的新增属性 (比如 `this.myObject.newProperty = 'hi'` )

```Javascript
this.$set(this.myObject,'newProperty','hi')
```
