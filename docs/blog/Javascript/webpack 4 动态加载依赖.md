## webpack 4 动态加载依赖

关于 webpack 4 动态异步 import 依赖有细微的调整，文档详见 [dynamic-imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports)

webpack 被大部分前端吐槽其最根本原因是配置复杂且文档不友好(英文难懂，中文不全)，所有就有了 `Webpack 工程师`, `前端打包工程师`， `Webpack 配置官`...

下面我们看个实际例子关于 [dynamic-imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports)

- 需求： 在国际化配置语言为中文的时候，菜单搜索支持拼音搜索

- 需求分析： 这里我们最关键的就是要在语言变为中文的时候，菜单搜索数据得附加上拼音，我们这里可以用 `pinyin` 这个插件可以有效帮助我们把中文转化成汉语拼音

- 关键代码：

```js
// package.json 前省略
"pinyin": "2.9.0",
// package.json 后省略
```

```js
// HeaderSearch.vue 前省略
methods: {
  async searchPool(list) {
    // 如果语言是中文则支持拼音搜索
    if (this.lang === 'zh') {
      // 动态加载依赖 pinyin 【关键点】
      const { default: pinyin } = await import('pinyin')
      if (Array.isArray(list)) {
        list.forEach(element => {
          const title = element.title // 这里 title 设计为数组考虑多级菜单
          if (Array.isArray(title)) {
            title.forEach(v => {
              v = pinyin(v, {
                style: pinyin.STYLE_NORMAL // pinyin 配置入参：STYLE_NORMAL 输出拼音不带声调
              }).join('')
              element.pinyinTitle = v // 新增字段 pinyinTitle 作为 title 的拼音转化
            })
          }
        })
      }
    }
    this.initFuse(list) // 初始化模糊搜索
  }
}
// HeaderSearch.vue 后省略
```

:::tip
由上面可见最大的变化就是 多了一个 默认值，官方的原文是这样的：

The reason we need default is that since `webpack 4`, when importing a CommonJS module, the import will no longer resolve to the value of `module.exports`

我们需要默认值的原因是，由于webpack 4在导入CommonJS模块时，导入将不再解析为module.exports的值
:::
